import deepmerge from 'deepmerge';

class JediValidate {
    constructor(root, options = {}) {
        const defaultOptions = {
            ajax: {
                url: null,
                enctype: 'application/x-www-form-urlencoded',
                method: 'GET'
            },
            sendType: 'serialize', // 'formData', 'json'
            rules: {},
            messages: {},
            containers: {
                parent: 'form-group',
                message: 'help-block',
                baseMessage: 'base-error'
            },
            states: {
                error: 'error',
                valid: 'valid',
                pristine: 'pristine',
                dirty: 'dirty'
            },
            formStatePrefix: 'jedi-',
            callbacks: {
                success: function () {
                },
                error: function () {
                }
            },
            clean: true,
            redirect: true
        };

        this.root = root;

        this.options = deepmerge(defaultOptions, options);

        this.fields = {};
        this.inputs = {};
        this.messages = {};
        this.rules = {};

        this._cacheNodes();

        const formOptions = JediValidate.getFormOptions(this.nodes.form);

        this.options = deepmerge(this.options, defaultOptions);
        this.options = deepmerge(this.options, formOptions);
        this.options = deepmerge(this.options, options);

        this._ready();
    }

    static getFormOptions(form) {
        const options = {ajax: {}};

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
            options.sendType = 'formData';
        }

        return options;
    }

    static getRadioGroupValue(elements) {
        for (let index in elements) {
            let element = elements[index];

            var value = JediValidate.getInputValue(element);

            if (value !== '') {
                return value;
            }
        }

        return '';
    }

    static parseInputName(name, value) {
        var re = /(\[(\w*)\]|\w*)/gi;
        var matches;
        var path = [];

        while ((matches = re.exec(name)) !== null) {
            if (matches.index === re.lastIndex) {
                re.lastIndex++;
            }

            if (matches[2]) {
                path.push(matches[2])
            } else {
                path.push(matches[1])
            }
        }

        return JediValidate.createObject(path, value);
    }

    static createObject(path, value) {
        var segment = path[0];

        if (segment.length === 0) {
            return value;
        } else if (segment === '[]') {
            return [JediValidate.createObject(path.slice(1), value)];
        } else {
            var object = {};

            object[segment] = JediValidate.createObject(path.slice(1), value);

            return object;
        }
    }

    static getInputValue(element) {
        if (Array.isArray(element)) {
            return JediValidate.getRadioGroupValue(element);
        }

        let value = '';
        let {type} = element;

        if (type === 'select-one') {
            if (element.options.length) {
                value = element.options[element.selectedIndex].value;
            }

            return value;
        }

        if (type === 'select-multiple') {
            value = [];

            for (let i = 0; i < element.options.length; i++) {
                if (element.options[i].selected) {
                    value.push(element.options[i].value);
                }
            }

            if (value.length === 0) {
                value = ''
            }

            return value;
        }

        if (type === 'checkbox' || type === 'radio') {
            if (element.checked)
                return element.value;
            else {
                return '';
            }
        }

        return element.value;
    }

    _cacheNodes() {
        this.nodes = {
            form: this.root.querySelector('form'),
            inputs: this.root.querySelectorAll('[name]'),
            baseMessage: this.root.querySelector(`.${this.options.containers.baseMessage}`),
        }
    }

    _ready() {
        this.nodes.form.setAttribute('novalidate', 'novalidate');

        this.nodes.form.addEventListener('submit', (event) => {
            var errors = this.checkForm();

            if (Object.keys(errors).length !== 0) {
                this.options.callbacks.error(errors);

                event.preventDefault();
                return;
            }

            if (this.options.ajax) {
                event.preventDefault();
            } else {
                return;
            }

            this._send();
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
                    throw 'Have no parent field';
                }

                this.fields[name].classList.add(this.options.states.pristine);

                var messageElement = this.fields[name].querySelector(`.${this.options.containers.message}`);

                if (messageElement) {
                    this.messages[name] = messageElement;
                } else {
                    this.messages[name] = document.createElement("div");
                    this.messages[name].classList.add(this.options.containers.message);
                    this.fields[name].appendChild(this.messages[name]);
                }

                this._defineRules(name);
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

    _send(options) {
        let data = '';
        const xhr = new XMLHttpRequest();

        if (this.options.sendType === 'serialize') {
            for (let name in this.inputs) {
                data += `${name}=${encodeURIComponent(JediValidate.getInputValue(this.inputs[name]))}&`;
            }

            data = data.slice(0, -1);
        } else if (this.options.sendType === 'formData') {
            data = new FormData(this.nodes.form);
        } else if (this.options.sendType === 'json') {
            data = {};

            for (let index in this.nodes.inputs) {
                const input = this.nodes.inputs[index];

                data = deepmerge(data, JediValidate.parseInputName(input.name, JediValidate.getInputValue(input)));
            }

            data = JSON.stringify(data);
        }

        xhr.open(this.options.ajax.method, this.options.ajax.url + (this.options.ajax.method.toUpperCase() === 'GET' ? ('?' + data) : ''), true); // todo concat url and params

        if (this.options.sendType === 'serialize') {
            xhr.setRequestHeader('Content-type', this.options.ajax.enctype);
        } else if (this.options.sendType === 'json') {
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        }

        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    let response = {};

                    try {
                        response = JSON.parse(xhr.responseText);
                    } catch (e) {
                        response.validationErrors = {base: ['JSON parsing error']};  // todo: language extension
                    }

                    if (response.validationErrors) {
                        this.options.callbacks.error(response.validationErrors);

                        if (response.validationErrors.base) {
                            this.nodes.baseMessage.innerHTML = response.validationErrors.base.join(', ');
                            this.root.classList.add(this.options.formStatePrefix + this.options.states.error);
                            this.root.classList.remove(this.options.formStatePrefix + this.options.states.valid);
                            delete response.validationErrors.base;
                        } else {
                            this.nodes.baseMessage.innerHTML = '';
                        }

                        for (let name in response.validationErrors) {
                            this._markError(name, response.validationErrors[name]);
                        }
                    } else {
                        this.options.callbacks.success(response);

                        if (this.options.redirect && response.redirect) {
                            window.location.href = response.redirect;
                            return;
                        }

                        if (this.options.clean) {
                            this.nodes.form.reset();
                        }
                    }
                } else {
                    console.warn(this.options.ajax.method + ' ' + this.options.ajax.url + ' ' + xhr.status + ' (' + xhr.statusText + ')');

                    this.nodes.baseMessage.innerHTML = 'Can not send form!'; // todo: language extension
                    this.root.classList.add(this.options.formStatePrefix + this.options.states.error);
                    this.root.classList.remove(this.options.formStatePrefix + this.options.states.valid);
                }
            }
        };

        xhr.send(this.options.ajax.method.toUpperCase() === 'POST' ? data : '');
    }

    _defineRules(name) {
        const input = this.inputs[name];

        this.rules[name] = {};

        const rules = ['required', 'email', 'tel', 'url'];

        for (let ruleName in rules) {
            const rule = rules[ruleName];

            if (input.hasAttribute(rule) || input.type === rule || input.classList.contains(rule)) {
                this.rules[name][rule] = true;
            }
        }

        if (input.hasAttribute('pattern')) {
            this.rules[name].regexp = new RegExp(input.getAttribute('pattern'));
        }

        if (this.options.rules[name])
            this.rules[name] = deepmerge(this.rules[name], this.options.rules[name]);

        for (let rule in this.rules[name]) {
            if (this.rules[name][rule]) {
                this.fields[name].classList.add(rule);
            }
        }
    }

    checkForm() {
        var errors = {};

        for (let name in this.rules) {
            var inputErrors = this.checkInput(name);

            if (inputErrors.length) {
                errors[name] = inputErrors;
            }
        }

        return errors;
    }

    checkInput(name) {
        const rules = this.rules[name];
        const errors = [];
        const isEmpty = !JediValidate.methods.required.func(JediValidate.getInputValue(this.inputs[name]), this.inputs[name]);

        if (isEmpty && rules.required) {
            errors.push(this._getErrorMessage(name, 'required'));
        } else if (!isEmpty) {
            for (let method in rules) {
                const params = rules[method];

                if (params) {
                    if (JediValidate.methods[method]) {
                        var valid = JediValidate.methods[method].func(JediValidate.getInputValue(this.inputs[name]), this.inputs[name], params);

                        if (!valid) {
                            errors.push(this._getErrorMessage(name, method));
                        }
                    } else {
                        errors.push('Method "' + method + '" not found');
                    }
                }
            }
        }

        if (errors.length) {
            this._markError(name, errors);
        } else {
            this._markValid(name);
        }

        return errors;
    }

    _markError(name, errors) {
        if (!this.fields[name] || !this.messages[name]) {
            return;
        }

        this.fields[name].classList.add(this.options.states.error);
        this.fields[name].classList.remove(this.options.states.valid);

        this.messages[name].innerHTML = errors.join(', ');
    }

    _markValid(name) {
        if (!this.fields[name] || !this.messages[name]) {
            return;
        }

        this.fields[name].classList.add(this.options.states.valid);
        this.fields[name].classList.remove(this.options.states.error);

        this.messages[name].innerHTML = '';
    }

    _getErrorMessage(name, method) {
        let message = '';

        if (this.options.messages[name] && this.options.messages[name][method]) {
            message = this.options.messages[name][method];
        } else {
            message = JediValidate.methods[method].message;
        }

        return message;
    };
}

JediValidate.methods = {};

JediValidate.addMethod = function (rule, func, message) {
    JediValidate.methods[rule] = {
        func: func,
        message: message
    };
};

// todo languages

JediValidate.addMethod('required', function (value) {
    return (value && value.trim() !== '');
}, 'Это поле необходимо заполнить');

JediValidate.addMethod('regexp', function (value, element, regexp) {
    return regexp.test(value);
}, 'Пожалуйста, введите корректное значение');

JediValidate.addMethod('email', function (value) {
    return /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(value);
}, 'Пожалуйста, введите корректный адрес электронной почты');

JediValidate.addMethod('filesize', function (value, element, size) {
    return Array.prototype.slice.call(element.files).reduce((r, file) => file.size < size && r, true);
}, 'Попробуйте загрузить файл поменьше');

JediValidate.addMethod('extension', function (value, element, extensions) {
    return Array.prototype.slice.call(element.files).reduce((r, file) => extensions.indexOf(file.name.split('.').pop()) !== -1 && r, true);
}, 'Пожалуйста, выберите файл с правильным расширением');

JediValidate.addMethod('tel', function (value) {
    return /^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$/.test(value);
}, 'Не корректный номер телефона');

JediValidate.addMethod('url', function (value) {
    return /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.test(value);
}, 'Не корректный url');

module.exports = JediValidate;
