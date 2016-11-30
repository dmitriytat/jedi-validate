import deepmerge from 'deepmerge';
import { getData, getInputData, convertData, getValueByName } from './lib/get-data.es6';
import { addTranslation, setLanguage } from './i18n/jedi-validate-i18n.es6';
import { getFormOptions, getInputRules } from './lib/get-options.es6';
import { validateData, validateField } from './lib/validate-data.es6';
import { ajax } from './lib/ajax.es6';
import defaultMethods from './lib/methods.es6';

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
            translations: {},
        };

        this.root = root;

        this.options = deepmerge(defaultOptions, options);

        this.fields = {};
        this.inputs = {};
        this.messages = {}; // object with message nodes
        this.errorMessages = {}; // object with error strings
        this.data = {};
        this.methods = defaultMethods;

        this.nodes = this.cacheNodes(this.root, this.options);

        const formOptions = getFormOptions(this.nodes.form);

        this.options = deepmerge(this.options, defaultOptions);
        this.options = deepmerge(this.options, formOptions);
        this.options = deepmerge(this.options, options);

        this.rules = { ...this.options.rules };

        setLanguage(this.options.language);

        Object.keys(this.options.translations).forEach((language) => {
            Object.keys(this.options.translations[language]).forEach((translation) => {
                addTranslation(
                    translation,
                    this.options.translations[language][translation],
                    language
                );
            });
        });

        this.ready();

        this.errorMessages = this.initErrorMessages(
            this.rules,
            this.options.messages,
            this.methods
        );
    }

    static addToDictionary(sourceText, translatedText, language) {
        addTranslation(sourceText, translatedText, language);
    }

    /**
     * Return object with working elements
     * @param root Root element for search
     * @param options Object with selectors
     * @returns {{form: Element, inputs: NodeList, baseMessage: Element}}
     */
    cacheNodes(root, options) {
        return {
            form: root.querySelector('form'),
            inputs: root.querySelectorAll('[name]'),
            baseMessage: root.querySelector(`.${options.containers.baseMessage}`),
        };
    }

    ready() {
        this.nodes.form.setAttribute('novalidate', 'novalidate');

        this.nodes.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.data = getData(this.inputs);
            console.log(this.data);

            const errors = validateData(
                this.rules,
                this.methods,
                this.data,
                this.errorMessages
            );

            if (errors && Object.keys(errors).filter(name => errors[name]).length !== 0) {
                Object.keys(errors).forEach(name =>
                    this.markField(
                        this.fields[name],
                        this.messages[name],
                        this.options.states,
                        errors[name]
                    )
                );

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
                ...this.options.ajax,
                data: convertData(this.data, this.options.ajax.sendType),
            });
        });

        this.nodes.inputs.forEach((input) => {
            const name = input.name;

            if (this.inputs[name]) {
                if (Array.isArray(this.inputs[name])) {
                    this.inputs[name].push(input);
                } else {
                    const groupInput = [this.inputs[name], input];
                    groupInput.name = name;
                    this.inputs[name] = groupInput;
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

                this.rules[name] = this.rules[name] || {};
                const inputRules = getInputRules(input);
                this.rules[name] = deepmerge(this.rules[name], inputRules);

                Object.keys(this.rules[name]).forEach((rule) => {
                    if (this.rules[name][rule]) {
                        this.fields[name].classList.add(rule);
                    }
                });
            }

            // todo think about
            input.addEventListener('change', () => {
                this.fields[name].classList.remove(this.options.states.dirty);

                const inputData = getInputData(input);
                const value = getValueByName(name, inputData);

                this.data = {
                    ...this.data,
                    ...inputData,
                };

                const errors = validateField(
                    this.rules[name],
                    this.methods,
                    value,
                    input.name,
                    this.errorMessages
                );
                this.markField(this.fields[name], this.messages[name], this.options.states, errors);
            });

            input.addEventListener('input', () => {
                this.fields[name].classList.remove(this.options.states.pristine);
                this.fields[name].classList.add(this.options.states.dirty);
            });
        });
    }

    send(options) {
        ajax(options).then((response) => {
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

                Object.keys(response.validationErrors).forEach(name =>
                    this.markField(
                        this.fields[name],
                        this.messages[name],
                        this.options.states,
                        response.validationErrors[name]
                    )
                );
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
        }).catch(({ method, url, status, statusText }) => {
            console.warn(`${method} ${url} ${status} (${statusText})`);

            this.nodes.baseMessage.innerHTML = 'Can not send form!'; // todo: language extension
            this.root.classList.add(this.options.formStatePrefix + this.options.states.error); // eslint-disable-line max-len
            this.root.classList.remove(this.options.formStatePrefix + this.options.states.valid); // eslint-disable-line max-len
        });
    }

    /**
     *
     * @param field
     * @param message
     * @param states
     * @param errors
     */
    markField(field, message, states, errors) {
        if (errors && errors.length) {
            this.markError(field, message, states, errors);
        } else {
            this.markValid(field, message, states);
        }
    }

    /**
     *
     * @param field
     * @param message
     * @param error
     * @param valid
     * @param errors
     */
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

    addMethod(rule, func, message) {
        this.methods[rule] = {
            func,
            message,
        };
    }

    // todo rewrite
    initErrorMessages(rules, messages, methods) {
        return Object.keys(rules).reduce((names, name) => ({
            ...names,
            [name]: Object.keys(rules[name]).reduce((ruleNames, method) => ({
                ...ruleNames,
                [method]: (messages[name] && messages[name][method]) || (methods[method] && methods[method].message) || '',
            }), {}),
        }), {});
    }
}

module.exports = JediValidate;
