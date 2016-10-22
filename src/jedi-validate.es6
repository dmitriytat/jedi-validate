import deepmerge from 'deepmerge';
import { getData, getInputData, getInputValue, getRadioGroupValue, createObject, convertData } from './lib/get-data.es6';
import { translate, addTranslation, setLanguage } from './i18n/jedi-validate-i18n.es6';
import { getFormOptions } from './lib/get-options.es6';
import { validateData } from './lib/validate-data.es6';

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
                success() {},
                error() {},
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

        const formOptions = getFormOptions(this.nodes.form);

        this.options = deepmerge(this.options, defaultOptions);
        this.options = deepmerge(this.options, formOptions);
        this.options = deepmerge(this.options, options);

        setLanguage(this.options.language);

        Object.keys(this.options.translations).forEach((language) => {
            Object.keys(this.options.translations[language]).forEach((translation) => {
                addTranslation(translation, this.options.translations[language][translation], language);
            });
        });

        this.initMethods();
        this.ready();
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
    
    ready() {
        this.nodes.form.setAttribute('novalidate', 'novalidate');

        this.nodes.form.addEventListener('submit', (event) => {
            const data = getData(this.nodes.inputs);
            const errors = validateData(this.options.rules, this.methods, data, this.nodes.inputs);

            if (errors && Object.keys(errors).length !== 0) {
                Object.keys(errors).forEach(name =>
                    this.markField(this.fields[name], this.messages[name], this.options.states, errors[name]));

                try {
                    this.options.callbacks.error(errors);
                } catch (e) {
                    console.error(e);
                }

                event.preventDefault();
                return;
            }

            if (this.options.ajax) { // todo check without (&& this.options.ajax.url)
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
            this.send({
                ajax: this.options.ajax,
                data: convertData(data, this.options.ajax.sendType, this.inputs),     
            });
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

                    field = field.parentNode;
                } while (field);

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
                
                const inputRules = getInputRules(input);
                
                if (this.options.rules[name]) {
                    this.rules[name] = deepmerge(this.rules[name], { [name]: inputRules });
                }

                Object.keys(this.rules[name]).forEach((rule) => {
                    if (this.rules[name][rule]) {
                        this.fields[name].classList.add(rule);
                    }
                });
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

                        Object.keys(response.validationErrors).forEach((name) => {
                            this.markError(name, response.validationErrors[name]);
                        });
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

        Object.keys(rules).forEach((ruleName) => {
            const rule = rules[ruleName];

            if (input.hasAttribute(rule) || input.type === rule || input.classList.contains(rule)) {
                this.rules[name][rule] = true;
            }
        });

        if (input.hasAttribute('pattern')) {
            this.rules[name].regexp = new RegExp(input.getAttribute('pattern'));
        }

        if (this.options.rules[name]) {
            this.rules[name] = deepmerge(this.rules[name], this.options.rules[name]);
        }

        Object.keys(this.rules[name]).forEach((rule) => {
            if (this.rules[name][rule]) {
                this.fields[name].classList.add(rule);
            }
        });
    }

    markField(field, message, states, errors) {
        if (errors && errors.length) {
            this.markError(field, message, states, errors);
        } else {
            this.markValid(field, message, states);
        }
    }
    
    markError(field, message, { error, valid }, errors) {
        if (!field || !message) {
            return;
        }

        field.classList.add(error);
        field.classList.remove(valid);

        message.innerHTML = errors.join(', ');
    }

    markValid(field, message, { error, valid }) {
        if (!field || !message) {
            return;
        }

        field.classList.add(valid);
        field.classList.remove(error);

        message.innerHTML = '';
    }

    getErrorMessage(name, method) { // todo think about it
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
