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

        this.options = mergeDeep(defaultOptions, options);

        this.fields = {};
        this.inputs = {};
        this.messages = {};
        this.rules = {};

        this._cacheNodes();

        const formOptions = JediValidate.getFormOptions(this.nodes.form);

        this.options = mergeDeep(defaultOptions, formOptions, options);

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

            this.nodes.inputs.forEach((input) => {
                data += `${input.name}=${encodeURIComponent(Utils.getInputValue(input))}&`;
            });

            data = data.slice(0, -1);
        } else if (this.options.sendType === 'formData') {
            data = new FormData(this.nodes.form);
        } else if (this.options.sendType === 'json') {
            data = {};

            this.nodes.inputs.forEach((input) => {
                data[input.name] = Utils.getInputValue(input);
            });

            data = JSON.stringify(data);
        }

        xhr.open(this.options.ajax.method, this.options.ajax.url + (this.options.ajax.method.toUpperCase() === 'GET' ? ('?' + data) : ''), true); // todo concat url and params

        if (this.options.sendType === 'serialize') {
            xhr.setRequestHeader('Content-type', this.options.ajax.enctype);
        } else if (this.options.sendType === 'json') {
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        }

        console.dir(this.options);

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
                            this.root.classList.add(this.options.states.error);
                            this.root.classList.remove(this.options.states.valid);
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
                    console.warn(options.method + ' ' + options.url + ' ' + xhr.status + ' (' + xhr.statusText + ')');

                    this.nodes.baseMessage.innerHTML = 'Can not send form!'; // todo: language extension
                    this.root.classList.add(this.options.states.error);
                    this.root.classList.remove(this.options.states.valid);
                }
            }
        };

        xhr.send(this.options.ajax.method.toUpperCase() === 'POST' ? data : '');
    }

    _defineRules(name) {
        const input = this.inputs[name];

        this.rules[name] = {};

        const rules = ['required', 'email', 'tel', 'url'];

        for (let rule of rules) {
            if (input.hasAttribute(rule) || input.classList.contains(rule)) {
                this.rules[name][rule] = true;
            }
        }

        if (input.hasAttribute('pattern')) {
            this.rules[name].regexp = new RegExp(input.getAttribute('pattern'));
        }

        this.rules[name] = mergeDeep(this.rules[name], this.options.rules[name]);

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
        const isEmpty = !JediValidate.methods.required.func(Utils.getInputValue(this.inputs[name]), this.inputs[name]);

        if (isEmpty && rules.required) {
            errors.push(this._getErrorMessage(name));
        } else if (!isEmpty) {
            for (let method in rules) {
                const params = rules[method];

                if (params) {
                    if (JediValidate.methods[method]) {
                        var valid = JediValidate.methods[method].func(Utils.getInputValue(this.inputs[name]), this.inputs[name], params);

                        if (!valid) {
                            errors.push(this._getErrorMessage(name));
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

    _getErrorMessage(name) {
        let message = '';

        if (this.options.messages[name] && this.options.messages[name].required) {
            message = this.options.messages[name].required;
        } else {
            message = JediValidate.methods.required.message;
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
    return !element.get(0).files[0] || element.get(0).files[0].size <= size;
}, 'Попробуйте загрузить файл поменьше');

JediValidate.addMethod('extension', function (value, element, extensions) {
    return !element.get(0).files[0] || extensions.indexOf(element.get(0).files[0].name.split('.').pop()) > -1;
}, 'Пожалуйста, выберите файл с правильным расширением');

JediValidate.addMethod('tel', function (value) {
    return /^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$/.test(value);
}, 'Не корректный номер телефона');

JediValidate.addMethod('url', function (value) {
    return /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.test(value);
}, 'Не корректный url');

var Utils = {
    getInputValue: function getFormElementValue(element) {
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
};

function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
}

function mergeDeep(target, source) {
    let output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!(key in target))
                    Object.assign(output, {[key]: source[key]});
                else
                    output[key] = mergeDeep(target[key], source[key]);
            } else {
                Object.assign(output, {[key]: source[key]});
            }
        });
    }
    return output;
}