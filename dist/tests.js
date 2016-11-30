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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.createObject = createObject;
exports.convertNameToPath = convertNameToPath;
exports.getValueByPath = getValueByPath;
exports.getValueByName = getValueByName;
exports.getRadioGroupValue = getRadioGroupValue;
exports.getInputValue = getInputValue;
exports.getInputData = getInputData;
exports.getData = getData;
exports.getQueryPart = getQueryPart;
exports.convertData = convertData;

var _deepmerge = __webpack_require__(2);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createObject(path, value) {
    var segment = path[0];

    if (segment.length === 0) {
        return value;
    } else if (segment === '[]') {
        return [createObject(path.slice(1), value)];
    }

    return _defineProperty({}, segment, createObject(path.slice(1), value));
}

var NAME = /(\[(\w*)\]|\w*)/gi;
function convertNameToPath(name) {
    var path = [];

    var matches = NAME.exec(name);
    while (matches !== null) {
        if (matches.index === NAME.lastIndex) {
            NAME.lastIndex += 1;
        }

        path.push(matches[2] || matches[1]);

        matches = NAME.exec(name);
    }

    return path;
}

function getValueByPath(path, data) {
    return path.reduce(function (value, segment) {
        return segment && value ? value[segment] : value;
    }, data || '');
}

function getValueByName(name, data) {
    var path = convertNameToPath(name);
    return getValueByPath(path, data);
}

function getRadioGroupValue(inputs) {
    return [].concat(_toConsumableArray(inputs)).map(function (radio) {
        return getInputValue(radio);
    }).filter(Boolean)[0];
}

function getInputValue(input) {
    if (!input) return undefined;

    var type = input.type;


    if (Array.isArray(input)) {
        return getRadioGroupValue(input);
    }

    switch (type) {
        case 'select-one':
            return input.options.length ? input.options[input.selectedIndex].value : '';
        case 'select-multiple':
            return input.options.filter(function (option) {
                return option.selected;
            }).map(function (option) {
                return option.value;
            });
        case 'checkbox':
        case 'radio':
            return input.checked ? input.value : '';
        case 'file':
            return input.files;
        default:
            return input.value;
    }
}

function getInputData(input) {
    var name = input.name;
    if (!name && Array.isArray(input) && input[0]) {
        name = input[0].name;
    }

    var value = getInputValue(input);
    var path = convertNameToPath(name);

    return createObject(path, value);
}

function getData(inputs) {
    return Object.keys(inputs).reduce(function (data, name) {
        return (0, _deepmerge2.default)(data, getInputData(inputs[name]));
    }, {});
}

function getQueryPart(name, data) {
    if (Array.isArray(data)) {
        return data.reduce(function (part, index) {
            return part + getQueryPart(name + '[' + index + ']', data[index]);
        }, '');
    } else if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
        return Object.keys(data).reduce(function (part, index) {
            return part + getQueryPart(name + '[' + index + ']', data[index]);
        }, '');
    }

    return name + '=' + encodeURIComponent(data) + '&';
}

function convertData(data, type) {
    // todo think about inputs
    var convertedData = void 0;

    switch (type) {
        case 'serialize':
            convertedData = Object.keys(data).reduce(function (query, name) {
                return '' + query + getQueryPart(name, data[name]);
            }, '');
            return convertedData.length ? convertedData.slice(0, -1) : '';
        case 'formData':
            // todo rework
            return Object.keys(data).reduce(function (formData, name) {
                if (data[name] instanceof FileList) {
                    if (data[name].length > 1) {
                        for (var i = 0; i < data[name].length; i += 1) {
                            formData.append(name + '[' + i + ']', data[name][i]);
                        }
                    } else if (data[name].length === 1) {
                        formData.append(name, data[name][0]);
                    }
                } else if (_typeof(data[name]) === 'object') {
                    Object.keys(data[name]).forEach(function (key) {
                        return formData.append(name + '[' + key + ']', data[name][key]);
                    });
                } else {
                    formData.append(name, data[name]);
                }

                return formData;
            }, new FormData());
        case 'json':
        default:
            return JSON.stringify(data);
    }
}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setLanguage = setLanguage;
exports.translate = translate;
exports.addTranslation = addTranslation;
var dictionary = __webpack_require__(5);

var currentLang = 'en';

function setLanguage(id) {
    currentLang = id;
}

function translate(text) {
    var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentLang;

    return dictionary[lang] && dictionary[lang][text] || text;
}

function addTranslation(sourceText, translatedText) {
    var lang = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentLang;

    if (dictionary[lang] === undefined) {
        dictionary[lang] = {};
    }
    dictionary[lang][sourceText] = translatedText;
}

/***/ },
/* 2 */
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

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object'

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice()
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument)
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument)
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument))
        }
    })
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {}
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument)
        })
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument)
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument)
        }
    })
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge }
    var arrayMerge = options.arrayMerge || defaultArrayMerge

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
}

return deepmerge

}));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jediValidateI18n = __webpack_require__(1);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
    required: {
        func: function func(value) {
            return value && (value instanceof FileList || value.trim()) !== '';
        },
        message: (0, _jediValidateI18n.translate)('This field is required')
    },
    regexp: {
        func: function func(value, regexp) {
            return regexp.test(value);
        },
        message: (0, _jediValidateI18n.translate)('Please, provide correct value')
    },
    email: {
        func: function func(value) {
            return (/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(value)
            );
        },
        message: (0, _jediValidateI18n.translate)('This email is incorrect')
    },
    filesize: {
        func: function func(value, size) {
            return [].concat(_toConsumableArray(value)).reduce(function (r, file) {
                return file.size < size && r;
            }, true);
        }, // eslint-disable-line max-len
        message: (0, _jediValidateI18n.translate)('This file is too large')
    },
    extension: {
        func: function func(value, extensions) {
            return [].concat(_toConsumableArray(value)).reduce(function (r, file) {
                return extensions.indexOf(file.name.split('.').pop()) !== -1 && r;
            }, true);
        }, // eslint-disable-line max-len
        message: (0, _jediValidateI18n.translate)('This extension is not supported')
    },
    tel: {
        func: function func(value) {
            return (/^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$/.test(value)
            );
        },
        message: (0, _jediValidateI18n.translate)('This phone number is incorrect')
    },
    url: {
        func: function func(value) {
            return (/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.test(value)
            );
        }, // eslint-disable-line max-len
        message: (0, _jediValidateI18n.translate)('Wrong url')
    }
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.validateField = validateField;
exports.validateData = validateData;

var _getData = __webpack_require__(0);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function validateField(rules, methods, value, name, errorMessages) {
    var isEmpty = !methods.required.func(value);

    if (isEmpty && rules.required) {
        return [errorMessages[name].required];
    }

    if (isEmpty) {
        return [];
    }

    return Object.keys(rules).reduce(function (errors, method) {
        var params = rules[method];
        if (!params) return errors;

        if (methods[method]) {
            var valid = methods[method].func(value, params);

            if (!valid) {
                errors.push(errorMessages[name][method]);
            }
        } else {
            errors.push('Method "' + method + '" not found');
        }

        return errors;
    }, []);
}

function validateData(rules, methods, data, errorMessages) {
    return Object.keys(rules).reduce(function (obj, name) {
        var value = (0, _getData.getValueByName)(name, data);
        var errors = validateField(rules[name], methods, value, name, errorMessages);
        return _extends({}, obj, _defineProperty({}, name, errors.length ? errors : undefined));
    }, {});
}

/***/ },
/* 5 */
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

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _getData = __webpack_require__(0);

var data = {
    phone: '92356234',
    phone2: 'sdfsefef',
    radio: '2',
    parent: {
        child: 'value'
    }
};

var inputs = {
    phone: document.createElement('input'),
    phone2: document.createElement('input'),
    'parent[child]': document.createElement('input'),
    radio: [createRadioElement('radio', 1), createRadioElement('radio', 2, true), createRadioElement('radio', 3)]
};

inputs.phone.name = 'phone';
inputs.phone.value = data.phone;
inputs.phone2.name = 'phone2';
inputs.phone2.value = data.phone2;
inputs['parent[child]'].name = 'parent[child]';
inputs['parent[child]'].value = data.parent.child;

describe('Get data', function () {
    it('createObject', function () {
        assert.deepEqual((0, _getData.createObject)(['parent', 'child', ''], 'value'), { parent: { child: 'value' } }); // todo think about ''
    });

    it('convertNameToPath', function () {
        assert.deepEqual((0, _getData.convertNameToPath)('parent[child]'), ['parent', 'child', '']); // todo think about ''
    });

    it('getValueByPath', function () {
        assert.deepEqual((0, _getData.getValueByPath)(['parent', 'child'], data), 'value');
    });

    it('getValueByName', function () {
        assert.deepEqual((0, _getData.getValueByName)('radio', data), '2');
    });

    it('getRadioGroupValue', function () {
        assert.deepEqual((0, _getData.getRadioGroupValue)(inputs.radio), data.radio);
    });

    it('getInputValue', function () {
        assert.deepEqual((0, _getData.getInputValue)(inputs.phone), data.phone);
    });

    it('getInputData', function () {
        assert.deepEqual((0, _getData.getInputData)(inputs.phone), { phone: data.phone });
    });

    it('getData', function () {
        assert.deepEqual((0, _getData.getData)(inputs), data);
    });

    it('getQueryPart', function () {
        assert.deepEqual((0, _getData.getQueryPart)('phone', data.phone), 'phone=' + data.phone + '&');
    });

    describe('convertData', function () {
        it('serialize', function () {
            assert.deepEqual((0, _getData.convertData)(data, 'serialize'), 'phone=92356234&phone2=sdfsefef&radio=2&parent[child]=value');
        });
    });
});

function createRadioElement(name, value) {
    var checked = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var radioInput = document.createElement('input');

    radioInput.setAttribute('type', 'radio');
    radioInput.name = name;
    radioInput.value = value;

    if (checked) {
        radioInput.setAttribute('checked', 'checked');
    }

    return radioInput;
}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _validateData = __webpack_require__(4);

var _methods = __webpack_require__(3);

var _methods2 = _interopRequireDefault(_methods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rules = {
    phone: {
        required: true,
        regexp: /^\d*$/
    },
    phone2: {
        regexp: /^\d*$/
    }
};

var data = {
    phone: '92356234',
    phone2: 'sdfsefef'
};

var inputs = {
    phone: document.createElement('input'),
    phone2: document.createElement('input')
};

inputs.phone.name = 'phone';
inputs.phone.value = data.phone;
inputs.phone2.name = 'phone2';
inputs.phone2.value = data.phone2;

var errorMessages = {
    phone: {
        required: 'It is required',
        regexp: 'Only digits available'
    },
    phone2: {
        regexp: 'Only digits available'
    }
};

describe('Validate data', function () {
    describe('Validate Field', function () {
        it('Pass correct value', function () {
            assert.deepEqual((0, _validateData.validateField)(rules.phone, _methods2.default, data.phone, 'phone', errorMessages), []);
        });

        it('Pass incorrect value', function () {
            assert.deepEqual((0, _validateData.validateField)(rules.phone2, _methods2.default, data.phone2, 'phone2', errorMessages), [errorMessages.phone2.regexp]);
        });
    });

    describe('Validate data', function () {
        it('Validate values', function () {
            assert.deepEqual((0, _validateData.validateData)(rules, _methods2.default, data, errorMessages), { phone: undefined, phone2: [errorMessages.phone2.regexp] });
        });
    });
});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

__webpack_require__(10);

__webpack_require__(9);

/***/ }
/******/ ]);
});
//# sourceMappingURL=tests.js.map