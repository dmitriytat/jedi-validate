import deepmerge from 'deepmerge';
import { getData, getInputData, getInputValue, getRadioGroupValue, createObject } from './lib/get-data.es6';
import { translate, addTranslation, setLanguage } from './i18n/jedi-validate-i18n.es6';

class JediValidate {
    constructor(root, options = {}) {
        const defaultOptions = {
            ajax: {
                url: null,
                enctype: 'application/x-www-form-urlencoded',
                sendType: 'serialize', // 'serialize', 'formData', 'json'
                method: 'GET',
            },
            rules: {},
            messages: {},
            containers: {
                parent: 'form-group',
                message: 'help-block',
                baseMessage: 'base-error',
            },
            states: {
                error: 'error',
                valid: 'valid',
                pristine: 'pristine',
                dirty: 'dirty',
            },
            formStatePrefix: 'jedi-',
            callbacks: {
                success() {
                },
                error() {
                },
            },
            clean: true,
            redirect: true,
            language: 'en',
        };

        this.root = root;

        this.options = deepmerge(defaultOptions, options);

        this.fields = {};
        this.inputs = {};
        this.messages = {};
        this.rules = {};

        this.cacheNodes();

        const formOptions = JediValidate.getFormOptions(this.nodes.form);

        this.options = deepmerge(this.options, defaultOptions);
        this.options = deepmerge(this.options, formOptions);
        this.options = deepmerge(this.options, options);

        setLanguage(options.language);

        for (const language in options.translations) {
            for (const translation in options.translations[language]) {
                addTranslation(translation, options.translations[language][translation], language);
            }
        }

        this.initMethods();
        this.ready();
    }

    static getFormOptions(form) {
        const options = { ajax: {} };

        if (form.getAttribute('method')) {
            options.ajax.method = form.getAttribute('method');
        }

        if (form.getAttribute('action')) {
            options.ajax.url = form.getAttribute('action');
        }

        if (form.getAttribute('enctype')) {
            options.ajax.enctype = form.getAttribute('enctype');
        }

        if (options.ajax.enctype === 'multipart/form-data') {
            options.ajax.sendType = 'formData';
        }

        return options;
    }

    static addToDictionary(sourceText, translatedText, language) {
        addTranslation(sourceText, translatedText, language);
    }

    cacheNodes() {
        this.nodes = {
            form: this.root.querySelector('form'),
            inputs: this.root.querySelectorAll('[name]'),
            baseMessage: this.root.querySelector(`.${this.options.containers.baseMessage}`),
        };
    }

    getQueryPart(name, data) {
        if (Array.isArray(data)) {
            return data.reduce((part, index) => part + this.getQueryPart(`${name}[${index}]`, data[index]), '');
        } else if (typeof data === 'object') {
            return Object.keys(data).reduce((part, index) => part + this.getQueryPart(`${name}[${index}]`, data[index]), '');
        }

        return `${name}=${encodeURIComponent(data)}&`;
    }

    convertData(data, type) {
        switch (type) {
            case 'serialize':
                let convertedData = Object.keys(data)
                    .reduce((query, name) => `${query}${this.getQueryPart(name, data[name])}`, '');

                return convertedData.length ? convertedData.slice(0, -1) : '';
            case 'formData': // todo rewrite, file issue
                return Object.keys(data).reduce((formData, name) => {
                    if (this.inputs[name] && this.inputs[name].type && this.inputs[name].type === 'file') {
                        if (this.inputs[name].hasAttribute('multiple')) {
                            for (let i = 0; i < this.inputs[name].files.length; i += 1) {
                                formData.append(`${name}[]`, this.inputs[name].files[i]);
                            }
                        } else {
                            formData.append(name, this.inputs[name].files[0]);
                        }
                    } else {
                        formData.append(name, getInputValue(this.inputs[name]));
                    }

                    return formData;
                }, new FormData());
            case 'json':
            default:
                return JSON.stringify(data);
        }
    }

    ready() {
        this.nodes.form.setAttribute('novalidate', 'novalidate');

        this.nodes.form.addEventListener('submit', (event) => {
            const data = getData(this.nodes.inputs);
            const errors = this.validateData(this.options.rules, data, this.nodes.inputs);

            if (errors && Object.keys(errors).length !== 0) {
                Object.keys(errors).forEach(name => this.markField(name, errors[name]));
                
                try {
                    this.options.callbacks.error(errors);
                } catch (e) {
                    console.error(e);
                }

                event.preventDefault();
                return;
            }

            if (this.options.ajax && this.options.ajax.url) {
                event.preventDefault();
            } else {
                try {
                    this.options.callbacks.success(errors, event);
                } catch (e) {
                    console.error(e);
                }

                return;
            }

            // fix get opt data
            this.send(deepmerge(this.options.ajax, { data: this.convertData(data, this.options.ajax.sendType) }));
        });

        this.nodes.inputs.forEach((input) => {
            const name = input.name;

            if (this.inputs[name]) {
                if (Array.isArray(this.inputs[name])) {
                    this.inputs[name].push(input);
                } else {
                    this.inputs[name] = [this.inputs[name], input];
                }
            } else {
                this.inputs[name] = input;

                let field = input.parentNode;

                do {
                    if (field.classList.contains(this.options.containers.parent)) {
                        this.fields[name] = field;
                        break;
                    }
                } while (field = field.parentNode);

                if (!this.fields[name]) {
                    throw new Error('Have no parent field');
                }

                this.fields[name].classList.add(this.options.states.pristine);

                const messageElement = this.fields[name].querySelector(`.${this.options.containers.message}`);

                if (messageElement) {
                    this.messages[name] = messageElement;
                } else {
                    this.messages[name] = document.createElement('div');
                    this.messages[name].classList.add(this.options.containers.message);
                    this.fields[name].appendChild(this.messages[name]);
                }

                this.defineRules(name);
            }

            input.addEventListener('change', () => {
                this.fields[name].classList.remove(this.options.states.dirty);
                this.checkInput(name);
            });

            input.addEventListener('input', () => {
                this.fields[name].classList.remove(this.options.states.pristine);
                this.fields[name].classList.add(this.options.states.dirty);
            });
        });
    }

    send(options) {
        const xhr = new XMLHttpRequest();

        xhr.open(options.method, options.url + (options.method.toUpperCase() === 'GET' ? (`?${options.data}`) : ''), true); // todo concat url and params

        if (options.sendType === 'serialize') {
            xhr.setRequestHeader('Content-type', options.enctype);
        } else if (options.sendType === 'json') {
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        }

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let response = {};

                    try {
                        response = JSON.parse(xhr.responseText);
                    } catch (e) {
                        response.validationErrors = { base: ['JSON parsing error'] };  // todo: language extension
                    }

                    if (response.validationErrors) {
                        try {
                            this.options.callbacks.error(response.validationErrors);
                        } catch (e) {
                            console.error(e);
                        }

                        if (response.validationErrors.base) {
                            this.nodes.baseMessage.innerHTML = response.validationErrors.base.join(', ');
                            this.root.classList.add(this.options.formStatePrefix + this.options.states.error); // eslint-disable-line max-len
                            this.root.classList.remove(this.options.formStatePrefix + this.options.states.valid); // eslint-disable-line max-len
                            delete response.validationErrors.base;
                        } else {
                            this.nodes.baseMessage.innerHTML = '';
                        }

                        for (const name in response.validationErrors) {
                            this.markError(name, response.validationErrors[name]);
                        }
                    } else {
                        try {
                            this.options.callbacks.success(response);
                        } catch (e) {
                            console.error(e);
                        }

                        if (this.options.redirect && response.redirect) {
                            window.location.href = response.redirect;
                            return;
                        }

                        if (this.options.clean) {
                            this.nodes.form.reset();
                        }
                    }
                } else {
                    console.warn(`${options.method} ${options.url} ${xhr.status} (${xhr.statusText})`);

                    this.nodes.baseMessage.innerHTML = 'Can not send form!'; // todo: language extension
                    this.root.classList.add(this.options.formStatePrefix + this.options.states.error); // eslint-disable-line max-len
                    this.root.classList.remove(this.options.formStatePrefix + this.options.states.valid); // eslint-disable-line max-len
                }
            }
        };

        xhr.send(options.method.toUpperCase() === 'POST' ? options.data : '');
    }

    defineRules(name) {
        const input = this.inputs[name];

        this.rules[name] = {};

        const rules = ['required', 'email', 'tel', 'url'];

        for (const ruleName in rules) {
            const rule = rules[ruleName];

            if (input.hasAttribute(rule) || input.type === rule || input.classList.contains(rule)) {
                this.rules[name][rule] = true;
            }
        }

        if (input.hasAttribute('pattern')) {
            this.rules[name].regexp = new RegExp(input.getAttribute('pattern'));
        }

        if (this.options.rules[name]) {
            this.rules[name] = deepmerge(this.rules[name], this.options.rules[name]);
        }

        for (const rule in this.rules[name]) {
            if (this.rules[name][rule]) {
                this.fields[name].classList.add(rule);
            }
        }
    }

    validateData(rules, data, inputs) {
        const errors = Object.keys(rules).reduce((obj, name) => {
            const inputErrors = this.checkField(rules, data[name], inputs[name]);

            if (inputErrors.length) {
                obj[name] = inputErrors;
            }

            return obj;
        }, {});

        return Object.keys(errors).length !== 0 ? errors : null;
    }

    checkField(rules, data, input) {
        const errors = [];
        const isEmpty = !this.methods.required.func(data, input);

        if (isEmpty && rules.required) {
            errors.push(this.getErrorMessage(name, 'required'));
        }

        if (!isEmpty) {
            Object.keys(rules).reduce((errors, method) => {
                const params = rules[method];
                if (!params) return errors;

                if (this.methods[method]) {
                    const valid = this.methods[method].func(data, input, params);

                    if (!valid) {
                        errors.push(this.getErrorMessage(name, method));
                    }
                } else {
                    errors.push(`Method "${method}" not found`);
                }
            }, []);
        }

        return errors;
    }
    
    markField(name, errors) {
        if (errors && errors.length) {
            this.markError(name, errors);
        } else {
            this.markValid(name);
        }
    }

    checkInput(name) {
        const rules = this.rules[name];
        const errors = [];
        const isEmpty = !this.methods.required.func(getInputValue(this.inputs[name]), this.inputs[name]); // eslint-disable-line max-len

        if (isEmpty && rules.required) {
            errors.push(this.getErrorMessage(name, 'required'));
        } else if (!isEmpty) {
            for (const method in rules) {
                const params = rules[method];

                if (params) {
                    if (this.methods[method]) {
                        const valid = this.methods[method].func(getInputValue(this.inputs[name]), this.inputs[name], params); // eslint-disable-line max-len

                        if (!valid) {
                            errors.push(this.getErrorMessage(name, method));
                        }
                    } else {
                        errors.push(`Method "${method}" not found`);
                    }
                }
            }
        }

        if (errors.length) {
            this.markError(name, errors);
        } else {
            this.markValid(name);
        }

        return errors;
    }

    markError(name, errors) {
        if (!this.fields[name] || !this.messages[name]) {
            return;
        }

        this.fields[name].classList.add(this.options.states.error);
        this.fields[name].classList.remove(this.options.states.valid);

        this.messages[name].innerHTML = errors.join(', ');
    }

    markValid(name) {
        if (!this.fields[name] || !this.messages[name]) {
            return;
        }

        this.fields[name].classList.add(this.options.states.valid);
        this.fields[name].classList.remove(this.options.states.error);

        this.messages[name].innerHTML = '';
    }

    getErrorMessage(name, method) {
        let message = '';

        if (this.options.messages[name] && this.options.messages[name][method]) {
            message = this.options.messages[name][method];
        } else {
            message = this.methods[method].message;
        }

        return message;
    }

    addMethod(rule, func, message) {
        this.methods[rule] = {
            func,
            message,
        };
    }

    initMethods() {
        this.methods = {};

        this.addMethod('required', value =>
            value && value.trim() !== '',
            translate('This field is required')
        );

        this.addMethod('regexp', (value, element, regexp) =>
            regexp.test(value),
                translate('Please, provide correct value')
        );

        this.addMethod('email', value =>
            /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(value),
            translate('This email is incorrect')
        );

        this.addMethod('filesize', (value, element, size) =>
            [...element.files].reduce((r, file) => file.size < size && r, true),
            translate('This file is too large')
        );

        this.addMethod('extension', (value, element, extensions) =>
            [...element.files].reduce((r, file) => extensions.indexOf(file.name.split('.').pop()) !== -1 && r, true),
            translate('This extension is not supported')
        );

        this.addMethod('tel', value =>
            /^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$/.test(value),
            translate('This phone number is incorrect')
        );

        this.addMethod('url', value =>
            /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.test(value), // eslint-disable-line max-len
            translate('Wrong url')
        );
    }
}

// fixme (now for test pass)
JediValidate.getData = getData;
JediValidate.getInputData = getInputData;
JediValidate.getInputValue = getInputValue;
JediValidate.getRadioGroupValue = getRadioGroupValue;
JediValidate.createObject = createObject;

module.exports = JediValidate;
