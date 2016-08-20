class JediValidate {
    constructor(root, options = {}) {
        const defaultOptions = {
            ajax: {
                dataType: 'json'
            },
            sendType: 'serialize',
            rules: {},
            messages: {},
            containers: {
                parent: 'form-group',
                message: 'help-block',
                baseMessage: 'base-error'
            },
            states: {
                error: 'error',
                valid: 'valid'
            },
            callbacks: {
                success: function () {},
                error: function () {}
            }
        };

        this.root = root;

        this.options = Object.assign(defaultOptions, options);

        this.fields = {};
        this.inputs = {};
        this.messages = {};
        this.rules = {};

        this._cacheNodes();
        this._ready();
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

            var ajaxOptions = {};

            ajaxOptions.url = this.nodes.form.getAttribute('action');
            ajaxOptions.method = this.nodes.form.getAttribute('method');

            this._send(ajaxOptions);
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
                this.checkInput(name);
            });
        });
    }

    _send(options) {
        let data = '';

        this.nodes.inputs.forEach((input) => {
            data += `${input.name}=${encodeURIComponent(input.value)}&`;
        });

        data = data.slice(0, -1);

        const xhttp = new XMLHttpRequest();

        xhttp.open("GET", options.url + (options.method.toUpperCase() === 'GET' ? ('?' + data) : ''), true); // todo concat url and params

        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    let response = {};

                    try {
                        response = JSON.parse(xhttp.responseText);
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
                    console.warn(options.method + ' ' + options.url + ' ' + xhttp.status + ' (' + xhttp.statusText + ')');

                    this.nodes.baseMessage.innerHTML = 'Can not send form!'; // todo: language extension
                    this.root.classList.add(this.options.states.error);
                    this.root.classList.remove(this.options.states.valid);
                }
            }
        };

        xhttp.send(options.method.toUpperCase() === 'POST' ? data : '');
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

        this.rules[name] = Object.assign(this.rules[name], this.options.rules[name]);

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
        const isEmpty = !JediValidate.methods.required.func(this.inputs[name].value, this.inputs[name]);

        if (isEmpty && rules.required) {
            errors.push(this._getErrorMessage(name));
        } else if (!isEmpty) {
            for (let method in rules) {
                const params = rules[method];

                if (params) {
                    if (JediValidate.methods[method]) {
                        var valid = JediValidate.methods[method].func(this.inputs[name].value, this.inputs[name], params);

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

JediValidate.addMethod('required', function (value, element) {
    return (value && value.trim() !== '') && (element.getAttribute('type') !== "checkbox") || (element.getAttribute('type') === "checkbox" && element.hasAttribute('checked'));
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