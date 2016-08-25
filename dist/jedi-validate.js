'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JediValidate = function () {
    function JediValidate(root) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        _classCallCheck(this, JediValidate);

        var defaultOptions = {
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
                success: function success() {},
                error: function error() {}
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

        var formOptions = JediValidate.getFormOptions(this.nodes.form);

        this.options = mergeDeep(this.options, defaultOptions);
        this.options = mergeDeep(this.options, formOptions);
        this.options = mergeDeep(this.options, options);

        this._ready();
    }

    _createClass(JediValidate, [{
        key: '_cacheNodes',
        value: function _cacheNodes() {
            this.nodes = {
                form: this.root.querySelector('form'),
                inputs: this.root.querySelectorAll('[name]'),
                baseMessage: this.root.querySelector('.' + this.options.containers.baseMessage)
            };
        }
    }, {
        key: '_ready',
        value: function _ready() {
            var _this = this;

            this.nodes.form.setAttribute('novalidate', 'novalidate');

            this.nodes.form.addEventListener('submit', function (event) {
                var errors = _this.checkForm();

                if (Object.keys(errors).length !== 0) {
                    _this.options.callbacks.error(errors);

                    event.preventDefault();
                    return;
                }

                if (_this.options.ajax) {
                    event.preventDefault();
                } else {
                    return;
                }

                _this._send();
            });

            this.nodes.inputs.forEach(function (input) {
                var name = input.name;
                _this.inputs[name] = input;

                var field = input.parentNode;

                do {
                    if (field.classList.contains(_this.options.containers.parent)) {
                        _this.fields[name] = field;
                        break;
                    }
                } while (field = field.parentNode);

                if (!_this.fields[name]) {
                    throw 'Have no parent field';
                }

                _this.fields[name].classList.add(_this.options.states.pristine);

                var messageElement = _this.fields[name].querySelector('.' + _this.options.containers.message);

                if (messageElement) {
                    _this.messages[name] = messageElement;
                } else {
                    _this.messages[name] = document.createElement("div");
                    _this.messages[name].classList.add(_this.options.containers.message);
                    _this.fields[name].appendChild(_this.messages[name]);
                }

                _this._defineRules(name);

                input.addEventListener('change', function () {
                    _this.fields[name].classList.remove(_this.options.states.dirty);
                    _this.checkInput(name);
                });

                input.addEventListener('input', function () {
                    _this.fields[name].classList.remove(_this.options.states.pristine);
                    _this.fields[name].classList.add(_this.options.states.dirty);
                });
            });
        }
    }, {
        key: '_send',
        value: function _send(options) {
            var _this2 = this;

            var data = '';
            var xhr = new XMLHttpRequest();

            if (this.options.sendType === 'serialize') {

                this.nodes.inputs.forEach(function (input) {
                    data += input.name + '=' + encodeURIComponent(Utils.getInputValue(input)) + '&';
                });

                data = data.slice(0, -1);
            } else if (this.options.sendType === 'formData') {
                data = new FormData(this.nodes.form);
            } else if (this.options.sendType === 'json') {
                data = {};

                this.nodes.inputs.forEach(function (input) {
                    data[input.name] = Utils.getInputValue(input);
                });

                data = JSON.stringify(data);
            }

            xhr.open(this.options.ajax.method, this.options.ajax.url + (this.options.ajax.method.toUpperCase() === 'GET' ? '?' + data : ''), true); // todo concat url and params

            if (this.options.sendType === 'serialize') {
                xhr.setRequestHeader('Content-type', this.options.ajax.enctype);
            } else if (this.options.sendType === 'json') {
                xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            }

            console.dir(this.options);

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        var response = {};

                        try {
                            response = JSON.parse(xhr.responseText);
                        } catch (e) {
                            response.validationErrors = { base: ['JSON parsing error'] }; // todo: language extension
                        }

                        if (response.validationErrors) {
                            _this2.options.callbacks.error(response.validationErrors);

                            if (response.validationErrors.base) {
                                _this2.nodes.baseMessage.innerHTML = response.validationErrors.base.join(', ');
                                _this2.root.classList.add(_this2.options.states.error);
                                _this2.root.classList.remove(_this2.options.states.valid);
                                delete response.validationErrors.base;
                            } else {
                                _this2.nodes.baseMessage.innerHTML = '';
                            }

                            for (var name in response.validationErrors) {
                                _this2._markError(name, response.validationErrors[name]);
                            }
                        } else {
                            _this2.options.callbacks.success(response);

                            if (_this2.options.redirect && response.redirect) {
                                window.location.href = response.redirect;
                                return;
                            }

                            if (_this2.options.clean) {
                                _this2.nodes.form.reset();
                            }
                        }
                    } else {
                        console.warn(options.method + ' ' + options.url + ' ' + xhr.status + ' (' + xhr.statusText + ')');

                        _this2.nodes.baseMessage.innerHTML = 'Can not send form!'; // todo: language extension
                        _this2.root.classList.add(_this2.options.states.error);
                        _this2.root.classList.remove(_this2.options.states.valid);
                    }
                }
            };

            xhr.send(this.options.ajax.method.toUpperCase() === 'POST' ? data : '');
        }
    }, {
        key: '_defineRules',
        value: function _defineRules(name) {
            var input = this.inputs[name];

            this.rules[name] = {};

            var rules = ['required', 'email', 'tel', 'url'];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = rules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _rule = _step.value;

                    if (input.hasAttribute(_rule) || input.classList.contains(_rule)) {
                        this.rules[name][_rule] = true;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            if (input.hasAttribute('pattern')) {
                this.rules[name].regexp = new RegExp(input.getAttribute('pattern'));
            }

            this.rules[name] = mergeDeep(this.rules[name], this.options.rules[name]);

            for (var rule in this.rules[name]) {
                if (this.rules[name][rule]) {
                    this.fields[name].classList.add(rule);
                }
            }
        }
    }, {
        key: 'checkForm',
        value: function checkForm() {
            var errors = {};

            for (var name in this.rules) {
                var inputErrors = this.checkInput(name);

                if (inputErrors.length) {
                    errors[name] = inputErrors;
                }
            }

            return errors;
        }
    }, {
        key: 'checkInput',
        value: function checkInput(name) {
            var rules = this.rules[name];
            var errors = [];
            var isEmpty = !JediValidate.methods.required.func(Utils.getInputValue(this.inputs[name]), this.inputs[name]);

            if (isEmpty && rules.required) {
                errors.push(this._getErrorMessage(name));
            } else if (!isEmpty) {
                for (var method in rules) {
                    var params = rules[method];

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
    }, {
        key: '_markError',
        value: function _markError(name, errors) {
            if (!this.fields[name] || !this.messages[name]) {
                return;
            }

            this.fields[name].classList.add(this.options.states.error);
            this.fields[name].classList.remove(this.options.states.valid);

            this.messages[name].innerHTML = errors.join(', ');
        }
    }, {
        key: '_markValid',
        value: function _markValid(name) {
            if (!this.fields[name] || !this.messages[name]) {
                return;
            }

            this.fields[name].classList.add(this.options.states.valid);
            this.fields[name].classList.remove(this.options.states.error);

            this.messages[name].innerHTML = '';
        }
    }, {
        key: '_getErrorMessage',
        value: function _getErrorMessage(name) {
            var message = '';

            if (this.options.messages[name] && this.options.messages[name].required) {
                message = this.options.messages[name].required;
            } else {
                message = JediValidate.methods.required.message;
            }

            return message;
        }
    }], [{
        key: 'getFormOptions',
        value: function getFormOptions(form) {
            var options = { ajax: {} };

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
    }]);

    return JediValidate;
}();

JediValidate.methods = {};

JediValidate.addMethod = function (rule, func, message) {
    JediValidate.methods[rule] = {
        func: func,
        message: message
    };
};

// todo languages

JediValidate.addMethod('required', function (value) {
    return value && value.trim() !== '';
}, 'Это поле необходимо заполнить');

JediValidate.addMethod('regexp', function (value, element, regexp) {
    return regexp.test(value);
}, 'Пожалуйста, введите корректное значение');

JediValidate.addMethod('email', function (value) {
    return (/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(value)
    );
}, 'Пожалуйста, введите корректный адрес электронной почты');

JediValidate.addMethod('filesize', function (value, element, size) {
    return !element.get(0).files[0] || element.get(0).files[0].size <= size;
}, 'Попробуйте загрузить файл поменьше');

JediValidate.addMethod('extension', function (value, element, extensions) {
    return !element.get(0).files[0] || extensions.indexOf(element.get(0).files[0].name.split('.').pop()) > -1;
}, 'Пожалуйста, выберите файл с правильным расширением');

JediValidate.addMethod('tel', function (value) {
    return (/^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$/.test(value)
    );
}, 'Не корректный номер телефона');

JediValidate.addMethod('url', function (value) {
    return (/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.test(value)
    );
}, 'Не корректный url');

var Utils = {
    getInputValue: function getFormElementValue(element) {
        var value = '';
        var type = element.type;


        if (type === 'select-one') {
            if (element.options.length) {
                value = element.options[element.selectedIndex].value;
            }

            return value;
        }

        if (type === 'select-multiple') {
            value = [];

            for (var i = 0; i < element.options.length; i++) {
                if (element.options[i].selected) {
                    value.push(element.options[i].value);
                }
            }

            if (value.length === 0) {
                value = '';
            }

            return value;
        }

        if (type === 'checkbox' || type === 'radio') {
            if (element.checked) return element.value;else {
                return '';
            }
        }

        return element.value;
    }
};

function isObject(item) {
    return item && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !Array.isArray(item) && item !== null;
}

function mergeDeep(target, source) {
    var output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(function (key) {
            if (isObject(source[key])) {
                if (!(key in target)) Object.assign(output, _defineProperty({}, key, source[key]));else output[key] = mergeDeep(target[key], source[key]);
            } else {
                Object.assign(output, _defineProperty({}, key, source[key]));
            }
        });
    }
    return output;
}