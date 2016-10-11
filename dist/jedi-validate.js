(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JediValidate"] = factory();
	else
		root["JediValidate"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _deepmerge = __webpack_require__(1);
	
	var _deepmerge2 = _interopRequireDefault(_deepmerge);
	
	var _jediValidateI18n = __webpack_require__(2);
	
	var _jediValidateI18n2 = _interopRequireDefault(_jediValidateI18n);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var JediValidate = function () {
	    function JediValidate(root) {
	        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	        _classCallCheck(this, JediValidate);
	
	        var defaultOptions = {
	            ajax: {
	                url: null,
	                enctype: 'application/x-www-form-urlencoded',
	                sendType: 'serialize', // 'formData', 'json'
	                method: 'GET'
	            },
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
	                success: function success() {},
	                error: function error() {}
	            },
	            clean: true,
	            redirect: true
	        };
	
	        this.root = root;
	
	        this.options = (0, _deepmerge2.default)(defaultOptions, options);
	
	        this.fields = {};
	        this.inputs = {};
	        this.messages = {};
	        this.rules = {};
	
	        this._cacheNodes();
	
	        var formOptions = JediValidate.getFormOptions(this.nodes.form);
	
	        this.options = (0, _deepmerge2.default)(this.options, defaultOptions);
	        this.options = (0, _deepmerge2.default)(this.options, formOptions);
	        this.options = (0, _deepmerge2.default)(this.options, options);
	
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
	
	                if (_this.options.ajax && _this.options.ajax.url) {
	                    event.preventDefault();
	                } else {
	                    _this.options.callbacks.success(errors, event);
	
	                    return;
	                }
	
	                var data = _this.getData();
	
	                _this._send((0, _deepmerge2.default)(_this.options.ajax, { data: data }));
	            });
	
	            this.nodes.inputs.forEach(function (input) {
	                var name = input.name;
	
	                if (_this.inputs[name]) {
	                    if (Array.isArray(_this.inputs[name])) {
	                        _this.inputs[name].push(input);
	                    } else {
	                        _this.inputs[name] = [_this.inputs[name], input];
	                    }
	                } else {
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
	                        _this.messages[name] = document.createElement('div');
	                        _this.messages[name].classList.add(_this.options.containers.message);
	                        _this.fields[name].appendChild(_this.messages[name]);
	                    }
	
	                    _this._defineRules(name);
	                }
	
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
	
	            var xhr = new XMLHttpRequest();
	
	            xhr.open(options.method, options.url + (options.method.toUpperCase() === 'GET' ? '?' + options.data : ''), true); // todo concat url and params
	
	            if (options.sendType === 'serialize') {
	                xhr.setRequestHeader('Content-type', options.enctype);
	            } else if (options.sendType === 'json') {
	                xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	            }
	
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
	                                _this2.root.classList.add(_this2.options.formStatePrefix + _this2.options.states.error);
	                                _this2.root.classList.remove(_this2.options.formStatePrefix + _this2.options.states.valid);
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
	                        _this2.root.classList.add(_this2.options.formStatePrefix + _this2.options.states.error);
	                        _this2.root.classList.remove(_this2.options.formStatePrefix + _this2.options.states.valid);
	                    }
	                }
	            };
	
	            xhr.send(options.method.toUpperCase() === 'POST' ? options.data : '');
	        }
	    }, {
	        key: 'getData',
	        value: function getData() {
	            var data = '';
	
	            if (this.options.sendType === 'serialize') {
	                for (var name in this.inputs) {
	                    data += name + '=' + encodeURIComponent(JediValidate.getInputValue(this.inputs[name])) + '&';
	                }
	
	                data = data.slice(0, -1);
	            } else if (this.options.sendType === 'formData') {
	                data = new FormData();
	
	                for (var _name in this.inputs) {
	                    if (this.inputs[_name].type && this.inputs[_name].type === 'file') {
	                        if (this.inputs[_name].hasAttribute('multiple')) {
	                            for (var i = 0; i < this.inputs[_name].files.length; i++) {
	                                data.append(_name + '[]', this.inputs[_name].files[i]);
	                            }
	                        } else {
	                            data.append(_name, this.inputs[_name].files[0]);
	                        }
	                    } else {
	                        data.append(_name, JediValidate.getInputValue(this.inputs[_name]));
	                    }
	                }
	            } else if (this.options.sendType === 'json') {
	                data = {};
	
	                for (var index in this.nodes.inputs) {
	                    var input = this.nodes.inputs[index];
	
	                    data = (0, _deepmerge2.default)(data, JediValidate.parseInputName(input.name, JediValidate.getInputValue(input)));
	                }
	
	                data = JSON.stringify(data);
	            }
	
	            return data;
	        }
	    }, {
	        key: '_defineRules',
	        value: function _defineRules(name) {
	            var input = this.inputs[name];
	
	            this.rules[name] = {};
	
	            var rules = ['required', 'email', 'tel', 'url'];
	
	            for (var ruleName in rules) {
	                var rule = rules[ruleName];
	
	                if (input.hasAttribute(rule) || input.type === rule || input.classList.contains(rule)) {
	                    this.rules[name][rule] = true;
	                }
	            }
	
	            if (input.hasAttribute('pattern')) {
	                this.rules[name].regexp = new RegExp(input.getAttribute('pattern'));
	            }
	
	            if (this.options.rules[name]) this.rules[name] = (0, _deepmerge2.default)(this.rules[name], this.options.rules[name]);
	
	            for (var _rule in this.rules[name]) {
	                if (this.rules[name][_rule]) {
	                    this.fields[name].classList.add(_rule);
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
	            var isEmpty = !JediValidate.methods.required.func(JediValidate.getInputValue(this.inputs[name]), this.inputs[name]);
	
	            if (isEmpty && rules.required) {
	                errors.push(this._getErrorMessage(name, 'required'));
	            } else if (!isEmpty) {
	                for (var method in rules) {
	                    var params = rules[method];
	
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
	        value: function _getErrorMessage(name, method) {
	            var message = '';
	
	            if (this.options.messages[name] && this.options.messages[name][method]) {
	                message = this.options.messages[name][method];
	            } else {
	                message = JediValidate.methods[method].message;
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
	                options.ajax.sendType = 'formData';
	            }
	
	            return options;
	        }
	    }, {
	        key: 'getRadioGroupValue',
	        value: function getRadioGroupValue(elements) {
	            for (var index in elements) {
	                var element = elements[index];
	
	                var value = JediValidate.getInputValue(element);
	
	                if (value !== '') {
	                    return value;
	                }
	            }
	
	            return '';
	        }
	    }, {
	        key: 'parseInputName',
	        value: function parseInputName(name, value) {
	            var re = /(\[(\w*)\]|\w*)/gi;
	            var matches;
	            var path = [];
	
	            while ((matches = re.exec(name)) !== null) {
	                if (matches.index === re.lastIndex) {
	                    re.lastIndex++;
	                }
	
	                if (matches[2]) {
	                    path.push(matches[2]);
	                } else {
	                    path.push(matches[1]);
	                }
	            }
	
	            return JediValidate.createObject(path, value);
	        }
	    }, {
	        key: 'createObject',
	        value: function createObject(path, value) {
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
	    }, {
	        key: 'getInputValue',
	        value: function getInputValue(element) {
	            if (Array.isArray(element)) {
	                return JediValidate.getRadioGroupValue(element);
	            }
	
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
	}, (0, _jediValidateI18n2.default)('This field is required'));
	
	JediValidate.addMethod('regexp', function (value, element, regexp) {
	    return regexp.test(value);
	}, (0, _jediValidateI18n2.default)('Please, provide correct value'));
	
	JediValidate.addMethod('email', function (value) {
	    return (/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(value)
	    );
	}, (0, _jediValidateI18n2.default)('This email is incorrect'));
	
	JediValidate.addMethod('filesize', function (value, element, size) {
	    return Array.prototype.slice.call(element.files).reduce(function (r, file) {
	        return file.size < size && r;
	    }, true);
	}, (0, _jediValidateI18n2.default)('This file is too large'));
	
	JediValidate.addMethod('extension', function (value, element, extensions) {
	    return Array.prototype.slice.call(element.files).reduce(function (r, file) {
	        return extensions.indexOf(file.name.split('.').pop()) !== -1 && r;
	    }, true);
	}, (0, _jediValidateI18n2.default)('This extension is not supported'));
	
	JediValidate.addMethod('tel', function (value) {
	    return (/^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$/.test(value)
	    );
	}, (0, _jediValidateI18n2.default)('This phone number is incorrect'));
	
	JediValidate.addMethod('url', function (value) {
	    return (/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.test(value)
	    );
	}, (0, _jediValidateI18n2.default)('Wrong url'));
	
	module.exports = JediValidate;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        module.exports = factory();
	    } else {
	        root.deepmerge = factory();
	    }
	}(this, function () {
	
	return function deepmerge(target, src) {
	    var array = Array.isArray(src);
	    var dst = array && [] || {};
	
	    if (array) {
	        target = target || [];
	        dst = dst.concat(target);
	        src.forEach(function(e, i) {
	            if (typeof dst[i] === 'undefined') {
	                dst[i] = e;
	            } else if (typeof e === 'object') {
	                dst[i] = deepmerge(target[i], e);
	            } else {
	                if (target.indexOf(e) === -1) {
	                    dst.push(e);
	                }
	            }
	        });
	    } else {
	        if (target && typeof target === 'object') {
	            Object.keys(target).forEach(function (key) {
	                dst[key] = target[key];
	            })
	        }
	        Object.keys(src).forEach(function (key) {
	            if (typeof src[key] !== 'object' || !src[key]) {
	                dst[key] = src[key];
	            }
	            else {
	                if (!target[key]) {
	                    dst[key] = src[key];
	                } else {
	                    dst[key] = deepmerge(target[key], src[key]);
	                }
	            }
	        });
	    }
	
	    return dst;
	}
	
	}));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.setLanguage = setLanguage;
	exports.default = translate;
	var dictionary = __webpack_require__(3);
	
	var currentLang = "en";
	
	function setLanguage(id) {
	    currentLang = id;
	}
	
	function translate(text) {
	    var lang = arguments.length <= 1 || arguments[1] === undefined ? currentLang : arguments[1];
	
	    return dictionary[lang] && dictionary[lang][text] || text;
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
		"ru": {
			"This field is required": "Это поле необходимо заполнить",
			"Please, provide correct value": "Пожалуйста, введите корректное значение",
			"This email is incorrect": "Пожалуйста, введите корректный адрес электронной почты",
			"This file is too large": "Попробуйте загрузить файл поменьше",
			"This extension is not supported": "Пожалуйста, выберите файл с правильным расширением",
			"This phone number is incorrect": "Не корректный номер телефона",
			"Wrong url": "Не корректный url"
		}
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=jedi-validate.map