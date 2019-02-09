(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JediValidate"] = factory();
	else
		root["JediValidate"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var JediValidate = __webpack_require__(94).default;

module.exports = JediValidate;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(2)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(5)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(3);
var defined = __webpack_require__(4);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(6);
var $export = __webpack_require__(7);
var redefine = __webpack_require__(20);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(25);
var $iterCreate = __webpack_require__(26);
var setToStringTag = __webpack_require__(41);
var getPrototypeOf = __webpack_require__(43);
var ITERATOR = __webpack_require__(42)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var core = __webpack_require__(9);
var hide = __webpack_require__(10);
var redefine = __webpack_require__(20);
var ctx = __webpack_require__(23);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(19);
module.exports = __webpack_require__(15) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(14);
var toPrimitive = __webpack_require__(18);
var dP = Object.defineProperty;

exports.f = __webpack_require__(15) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(15) && !__webpack_require__(16)(function () {
  return Object.defineProperty(__webpack_require__(17)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(16)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var document = __webpack_require__(8).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(13);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var hide = __webpack_require__(10);
var has = __webpack_require__(21);
var SRC = __webpack_require__(22)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(9).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(24);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(27);
var descriptor = __webpack_require__(19);
var setToStringTag = __webpack_require__(41);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(10)(IteratorPrototype, __webpack_require__(42)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(28);
var enumBugKeys = __webpack_require__(39);
var IE_PROTO = __webpack_require__(37)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(17)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(40).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(29);

module.exports = __webpack_require__(15) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(30);
var enumBugKeys = __webpack_require__(39);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(21);
var toIObject = __webpack_require__(31);
var arrayIndexOf = __webpack_require__(34)(false);
var IE_PROTO = __webpack_require__(37)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(32);
var defined = __webpack_require__(4);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(33);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(31);
var toLength = __webpack_require__(35);
var toAbsoluteIndex = __webpack_require__(36);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(3);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(3);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(38)('keys');
var uid = __webpack_require__(22);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(9);
var global = __webpack_require__(8);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(6) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(8).document;
module.exports = document && document.documentElement;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f;
var has = __webpack_require__(21);
var TAG = __webpack_require__(42)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(38)('wks');
var uid = __webpack_require__(22);
var Symbol = __webpack_require__(8).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(21);
var toObject = __webpack_require__(44);
var IE_PROTO = __webpack_require__(37)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(4);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(23);
var $export = __webpack_require__(7);
var toObject = __webpack_require__(44);
var call = __webpack_require__(46);
var isArrayIter = __webpack_require__(47);
var toLength = __webpack_require__(35);
var createProperty = __webpack_require__(48);
var getIterFn = __webpack_require__(49);

$export($export.S + $export.F * !__webpack_require__(51)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(12);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(25);
var ITERATOR = __webpack_require__(42)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(11);
var createDesc = __webpack_require__(19);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(50);
var ITERATOR = __webpack_require__(42)('iterator');
var Iterators = __webpack_require__(25);
module.exports = __webpack_require__(9).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(33);
var TAG = __webpack_require__(42)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(42)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(15) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(54);
var getKeys = __webpack_require__(29);
var redefine = __webpack_require__(20);
var global = __webpack_require__(8);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(25);
var wks = __webpack_require__(42);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(55);
var step = __webpack_require__(56);
var Iterators = __webpack_require__(25);
var toIObject = __webpack_require__(31);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(5)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(42)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(44);
var $keys = __webpack_require__(29);

__webpack_require__(58)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(7);
var core = __webpack_require__(9);
var fails = __webpack_require__(16);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(60);
var anObject = __webpack_require__(12);
var $flags = __webpack_require__(61);
var DESCRIPTORS = __webpack_require__(15);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(20)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(16)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(15) && /./g.flags != 'g') __webpack_require__(11).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(61)
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(12);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63)('asyncIterator');


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var core = __webpack_require__(9);
var LIBRARY = __webpack_require__(6);
var wksExt = __webpack_require__(64);
var defineProperty = __webpack_require__(11).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(42);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(8);
var has = __webpack_require__(21);
var DESCRIPTORS = __webpack_require__(15);
var $export = __webpack_require__(7);
var redefine = __webpack_require__(20);
var META = __webpack_require__(66).KEY;
var $fails = __webpack_require__(16);
var shared = __webpack_require__(38);
var setToStringTag = __webpack_require__(41);
var uid = __webpack_require__(22);
var wks = __webpack_require__(42);
var wksExt = __webpack_require__(64);
var wksDefine = __webpack_require__(63);
var enumKeys = __webpack_require__(67);
var isArray = __webpack_require__(70);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(13);
var toIObject = __webpack_require__(31);
var toPrimitive = __webpack_require__(18);
var createDesc = __webpack_require__(19);
var _create = __webpack_require__(27);
var gOPNExt = __webpack_require__(71);
var $GOPD = __webpack_require__(73);
var $DP = __webpack_require__(11);
var $keys = __webpack_require__(29);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(72).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(69).f = $propertyIsEnumerable;
  __webpack_require__(68).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(6)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(22)('meta');
var isObject = __webpack_require__(13);
var has = __webpack_require__(21);
var setDesc = __webpack_require__(11).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(16)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(29);
var gOPS = __webpack_require__(68);
var pIE = __webpack_require__(69);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(33);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(31);
var gOPN = __webpack_require__(72).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(30);
var hiddenKeys = __webpack_require__(39).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(69);
var createDesc = __webpack_require__(19);
var toIObject = __webpack_require__(31);
var toPrimitive = __webpack_require__(18);
var has = __webpack_require__(21);
var IE8_DOM_DEFINE = __webpack_require__(14);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(15) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 74 */
/***/ (function(module) {

module.exports = {"ru":{"This field is required":"Это поле необходимо заполнить","Please, provide correct value":"Пожалуйста, введите корректное значение","This email is incorrect":"Пожалуйста, введите корректный адрес электронной почты","This file is too large":"Попробуйте загрузить файл поменьше","This extension is not supported":"Пожалуйста, выберите файл с правильным расширением","This phone number is incorrect":"Не корректный номер телефона","Wrong url":"Не корректный url","Can not send form!":"Форма не отправлена!","JSON parsing error":"Ошибка разбора JSON"}};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var inheritIfRequired = __webpack_require__(76);
var dP = __webpack_require__(11).f;
var gOPN = __webpack_require__(72).f;
var isRegExp = __webpack_require__(78);
var $flags = __webpack_require__(61);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(15) && (!CORRECT_NEW || __webpack_require__(16)(function () {
  re2[__webpack_require__(42)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(20)(global, 'RegExp', $RegExp);
}

__webpack_require__(79)('RegExp');


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var setPrototypeOf = __webpack_require__(77).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(13);
var anObject = __webpack_require__(12);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(23)(Function.call, __webpack_require__(73).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(13);
var cof = __webpack_require__(33);
var MATCH = __webpack_require__(42)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(8);
var dP = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(15);
var SPECIES = __webpack_require__(42)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(6);
var global = __webpack_require__(8);
var ctx = __webpack_require__(23);
var classof = __webpack_require__(50);
var $export = __webpack_require__(7);
var isObject = __webpack_require__(13);
var aFunction = __webpack_require__(24);
var anInstance = __webpack_require__(81);
var forOf = __webpack_require__(82);
var speciesConstructor = __webpack_require__(83);
var task = __webpack_require__(84).set;
var microtask = __webpack_require__(86)();
var newPromiseCapabilityModule = __webpack_require__(87);
var perform = __webpack_require__(88);
var userAgent = __webpack_require__(89);
var promiseResolve = __webpack_require__(90);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(42)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(91)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(41)($Promise, PROMISE);
__webpack_require__(79)(PROMISE);
Wrapper = __webpack_require__(9)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(51)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(23);
var call = __webpack_require__(46);
var isArrayIter = __webpack_require__(47);
var anObject = __webpack_require__(12);
var toLength = __webpack_require__(35);
var getIterFn = __webpack_require__(49);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(12);
var aFunction = __webpack_require__(24);
var SPECIES = __webpack_require__(42)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(23);
var invoke = __webpack_require__(85);
var html = __webpack_require__(40);
var cel = __webpack_require__(17);
var global = __webpack_require__(8);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(33)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 85 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var macrotask = __webpack_require__(84).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(33)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(24);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var isObject = __webpack_require__(13);
var newPromiseCapability = __webpack_require__(87);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(20);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__(93)('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__(78);
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(10);
var redefine = __webpack_require__(20);
var fails = __webpack_require__(16);
var defined = __webpack_require__(4);
var wks = __webpack_require__(42);

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__(57);

// CONCATENATED MODULE: ./src/lib/deepmerge.js




function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Merge literal object deeply and concat arrays
 * @param {Object|Array|*} first
 * @param {Object|Array|*} second
 * @return {Object|Array|*}
 */
function deepmerge(first, second) {
  if (Array.isArray(first)) {
    return [].concat(first).concat(second);
  }

  if (first && first.constructor === Object) {
    return Object.keys(first).reduce(function (o, key) {
      return _objectSpread({}, o, _defineProperty({}, key, second ? deepmerge(first[key], second[key]) : first[key]));
    }, second || {});
  }

  return second || first;
}

/* harmony default export */ var lib_deepmerge = (deepmerge);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(65);

// CONCATENATED MODULE: ./src/lib/convert-data.js







function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Create query portion of url for serialize method
 * @param {string} name
 * @param {object|Array|string} data
 * @returns {string} - part of url
 */
function getQueryPart(name, data) {
  if (Array.isArray(data)) {
    return data.reduce(function (part, value) {
      return part + getQueryPart("".concat(name, "[]"), value);
    }, '');
  }

  if (_typeof(data) === 'object') {
    return Object.keys(data).reduce(function (part, index) {
      return part + getQueryPart("".concat(name, "[").concat(index, "]"), data[index]);
    }, '');
  }

  return "".concat(name, "=").concat(encodeURIComponent(data), "&");
}
/**
 * Name regexp for conversion to path
 * @type {RegExp}
 */

var NAME = /(\[(\w*)\]|\w*)/gi;
/**
 * Convert input name to path array
 * @param {string} name - input name
 * @returns {Array} - path to value in data object
 */

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
/**
 * Convert data object to a value for sending
 * @param {object} data - data object
 * @param {string} type - type of conversion
 * @param {function} FileListType
 * @param {function} FormDataType
 * @returns {string|FormData} - output value
 */

function convertData(data, type) {
  var FileListType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : FileList;
  var FormDataType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : FormData;
  var convertedData;

  switch (type) {
    case 'serialize':
      convertedData = Object.keys(data).reduce(function (query, name) {
        return "".concat(query).concat(getQueryPart(name, data[name]));
      }, '');
      return convertedData.length ? convertedData.slice(0, -1) : '';

    case 'formData':
      return Object.keys(data).reduce(function (formData, name) {
        if (data[name] instanceof FileListType) {
          if (data[name].length > 1) {
            for (var i = 0; i < data[name].length; i += 1) {
              formData.append("".concat(name, "[").concat(i, "]"), data[name][i]);
            }
          } else if (data[name].length === 1) {
            formData.append(name, data[name][0]);
          }
        } else if (_typeof(data[name]) === 'object') {
          Object.keys(data[name]).forEach(function (key) {
            return formData.append("".concat(name, "[").concat(key, "]"), data[name][key]);
          });
        } else {
          formData.append(name, data[name]);
        }

        return formData;
      }, new FormDataType());

    case 'json':
    default:
      return JSON.stringify(data);
  }
}
// CONCATENATED MODULE: ./src/lib/get-data.js










function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function get_data_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Create object by path and value
 * @param {Array} path - path array
 * @param {string|FileList} value - input value
 * @returns {object} - data object
 */

function createObject(path, value) {
  var segment = path[0];

  if (!segment || segment.length === 0) {
    return value;
  }

  if (segment === '[]') {
    return [createObject(path.slice(1), value)];
  }

  return get_data_defineProperty({}, segment, createObject(path.slice(1), value));
}
/**
 * Get value from data object by path
 * @param {Array} path - value path
 * @param {object} data - data object
 * @returns {string} - value
 */

function getValueByPath(path, data) {
  return path.reduce(function (value, segment) {
    return segment && value ? value[segment] : value;
  }, data || '');
}
/**
 * Get value from data object by name
 * @param {string} name - input name
 * @param {object} data - data object
 */

function getValueByName(name, data) {
  var path = convertNameToPath(name);
  return getValueByPath(path, data);
}
/**
 * Get value from radio group
 * @param {Array} inputs - array of radio inputs
 * @returns {string|Array.<string>} - value of checked input
 */

function getRadioGroupValue(inputs) {
  var values = _toConsumableArray(inputs).map(function (radio) {
    return getInputValue(radio);
  }).filter(Boolean);

  return values.length > 1 ? values : values[0];
}
/**
 * Get form input value
 * @param {Element|HTMLInputElement|HTMLSelectElement|Array} input - input
 * @returns {string|Date|FileList|Array} - value of input, or array of values if input is select
 */

function getInputValue(input) {
  if (!input) return '';
  var type = input.type;

  if (Array.isArray(input)) {
    return getRadioGroupValue(input);
  }

  switch (type) {
    case 'select-one':
      return input.options && input.options[input.selectedIndex] ? input.options[input.selectedIndex].value : '';

    case 'select-multiple':
      return _toConsumableArray(input.options).filter(function (option) {
        return option.selected;
      }).map(function (option) {
        return option.value;
      });

    case 'checkbox':
    case 'radio':
      return input.checked ? input.value : '';

    case 'file':
      return input.files;

    case 'date':
      return input.value ? new Date(input.value) : '';

    default:
      return input.value;
  }
}
/**
 * Get name from input or array of inputs
 * @param {HTMLInputElement|Array} input - input element or Array of HTMLInputElements
 * @returns {string} - input name
 */

function getInputName(input) {
  return Array.isArray(input) ? input[0].name : input.name;
}
/**
 * Get input value as an object keyed by input name
 * @param {HTMLInputElement|Array} input - input element or Array of HTMLInputElements
 * @returns {object} - data
 */

function getInputData(input) {
  var value = getInputValue(input);
  var name = getInputName(input);
  var path = convertNameToPath(name);
  return createObject(path, value);
}
/**
 * Get data object with values from inputs object
 * @param {object} inputs - inputs object
 * @returns {object} - data object
 */

function getData(inputs) {
  return Object.keys(inputs).reduce(function (data, name) {
    return lib_deepmerge(data, getInputData(inputs[name]));
  }, {});
}
// CONCATENATED MODULE: ./src/i18n/jedi-validate-i18n.js




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function jedi_validate_i18n_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultDictionary = __webpack_require__(74);
/**
 * Dictionary for translation
 */


var Dictionary =
/*#__PURE__*/
function () {
  /**
   * Dictionary store
   * @type {Object}
   */

  /**
   * Default language
   * @type {string}
   */

  /**
   * Dictionary
   * @param {Object} translations
   */
  function Dictionary(translations) {
    _classCallCheck(this, Dictionary);

    jedi_validate_i18n_defineProperty(this, "dictionary", {});

    jedi_validate_i18n_defineProperty(this, "defaultLanguage", 'en');

    this.addTranslations(defaultDictionary);
    this.addTranslations(translations);
  }
  /**
   * Translate phrase
   * @param {string} text - phrase to translate
   * @param {string} language - language token
   * @returns {string} - translated text
   */


  _createClass(Dictionary, [{
    key: "translate",
    value: function translate(text) {
      var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.defaultLanguage;
      return this.dictionary[language] && this.dictionary[language][text] || text;
    }
    /**
     * Add translation pair to dictionary
     * @param {string} sourceText - phrase
     * @param {string} translatedText - translated phrase
     * @param {string} language - language token
     */

  }, {
    key: "addTranslation",
    value: function addTranslation(sourceText, translatedText) {
      var language = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.defaultLanguage;

      if (this.dictionary[language] === undefined) {
        this.dictionary[language] = {};
      }

      this.dictionary[language][sourceText] = translatedText;
    }
    /**
     * Add translations to dictionary
     * @param {Object} translations
     */

  }, {
    key: "addTranslations",
    value: function addTranslations(translations) {
      var _this = this;

      Object.keys(translations).forEach(function (language) {
        Object.keys(translations[language]).forEach(function (translation) {
          _this.addTranslation(translation, translations[language][translation], language);
        });
      });
    }
  }]);

  return Dictionary;
}();


// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__(75);

// CONCATENATED MODULE: ./src/lib/get-options.js





function get_options_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { get_options_defineProperty(target, key, source[key]); }); } return target; }

function get_options_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Get ajax options from form
 * @param {HTMLFormElement} form - form element
 * @returns {{ajax: {url: string, method: string, enctype: string, sendType: *}}} - options
 */
function getFormOptions(form) {
  var enctype = form.getAttribute('enctype');
  return {
    ajax: {
      enctype: enctype,
      url: form.getAttribute('action'),
      method: form.getAttribute('method'),
      sendType: enctype === 'multipart/form-data' ? 'formData' : undefined
    }
  };
}
/**
 * Get validatation options from input attribute of className
 * @param {HTMLInputElement|HTMLSelectElement} input - input for validation
 * @returns {object} - rules
 */

function getInputRules(input) {
  var defaultRules = ['required', 'email', 'tel', 'url'];
  var rules = defaultRules.reduce(function (inputRules, rule) {
    var newRules = {};
    var newRule = input.hasAttribute(rule) || input.type === rule || input.classList.contains(rule);

    if (newRule) {
      newRules[rule] = newRule;
    }

    return get_options_objectSpread({}, inputRules, newRules);
  }, {});
  var regexp = input.hasAttribute('pattern') ? new RegExp(input.getAttribute('pattern')) : undefined;
  var step = input.hasAttribute('step') ? parseInt(input.getAttribute('step'), 10) : undefined;

  if (input.type === 'date') {
    var min = input.hasAttribute('min') ? new Date(input.getAttribute('min')) : undefined;
    var max = input.hasAttribute('max') ? new Date(input.getAttribute('max')) : undefined;
    if (min) rules.minDate = min;
    if (max) rules.maxDate = max;
  } else {
    var _min = input.hasAttribute('min') ? parseInt(input.getAttribute('min'), 10) : undefined;

    var _max = input.hasAttribute('max') ? parseInt(input.getAttribute('max'), 10) : undefined;

    if (_min) rules.min = _min;
    if (_max) rules.max = _max;
  }

  if (regexp) rules.regexp = regexp;
  if (step) rules.step = step;
  return rules;
}
// CONCATENATED MODULE: ./src/lib/validate-data.js










function validate_data_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { validate_data_defineProperty(target, key, source[key]); }); } return target; }

function validate_data_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return _arrayWithHoles(arr) || validate_data_iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function validate_data_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/**
 * Check rule for dependencies
 * @param {*} params - validation params
 * @param {object} data - form data
 * @returns {*} - validation params or null if rule is not checkable
 */

function isCheckable(params, data) {
  if (!params) {
    return null;
  }

  var checkable = true;
  var param = params;

  if (Array.isArray(params)) {
    var dependencies = [];

    var _params = _toArray(params);

    param = _params[0];
    dependencies = _params.slice(1);

    if (!param) {
      return null;
    }

    try {
      checkable = dependencies.reduce(function (required, dependency) {
        return required && (typeof dependency === 'function' ? dependency(data) : !!data[dependency]);
      }, checkable);
    } catch (e) {
      if (false) {}
    }
  }

  return checkable ? param : null;
}
/**
 * Validate field
 * @param {object} rules - object with rules for validation
 * @param {object} methods - validation methods
 * @param {string|FileList|Array} value - input value
 * @param {string} name - input name
 * @param {object} errorMessages - object with error messages
 * @param {object} data - form data
 * @param {function} translate - translation function
 * @returns {Array.<string>} - array of field errors
 */

function validateField(rules, methods, value, name, errorMessages, data, translate) {
  var isEmpty = !methods.required.func(value);
  var isRequired = isCheckable(rules.required, data);

  if (isEmpty && isRequired) {
    return [translate(errorMessages[name].required)];
  }

  if (isEmpty) {
    return [];
  }

  return Object.keys(rules).reduce(function (errors, method) {
    var params = isCheckable(rules[method], data);

    if (params === null) {
      return errors;
    }

    if (methods[method]) {
      var valid = methods[method].func(value, params);

      if (!valid) {
        errors.push(translate(errorMessages[name][method]));
      }
    } else {
      errors.push("Method \"".concat(method, "\" not found")); // todo translation
    }

    return errors;
  }, []);
}
/**
 * Validate data object
 * @param {object} rules - object with rules for validation
 * @param {object} methods - validation methods
 * @param {object} data - data object
 * @param {object} errorMessages - object with error messages
 * @param {function} translate - translation function
 * @returns {object.<string, Array.<string>>} - object of fields error arrays
 */

function validateData(rules, methods, data, errorMessages, translate) {
  return Object.keys(rules).reduce(function (obj, name) {
    var value = getValueByName(name, data);
    var errors = validateField(rules[name], methods, value, name, errorMessages, data, translate); // eslint-disable-line max-len

    return validate_data_objectSpread({}, obj, validate_data_defineProperty({}, name, errors.length ? errors : undefined));
  }, {});
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(80);

// CONCATENATED MODULE: ./src/lib/ajax.js


/**
 * Sending request
 * @param {Object} options - Sending options
 * @param {string} options.url
 * @param {string} options.enctype - Sending options
 * @param {string} options.sendType - Sending options
 * @param {string} options.method - Sending options
 * @param {string|FormData} options.data - Sending options
 * @param {function} translate
 * @param {function} RequestType
 * @returns {Promise}
 * todo rewrite to fetch
 */
function ajax(options, translate) {
  var RequestType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : XMLHttpRequest;
  return new Promise(function (resolve, reject) {
    var xhr = new RequestType();
    var url = options.url + (options.method.toUpperCase() === 'GET' && options.data ? "?".concat(options.data) : '');
    xhr.open(options.method, url, true);

    if (options.sendType === 'serialize') {
      xhr.setRequestHeader('Content-type', options.enctype);
    } else if (options.sendType === 'json') {
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var response = {};

          try {
            response = JSON.parse(xhr.responseText);
          } catch (e) {
            response.validationErrors = {
              base: [translate('JSON parsing error')]
            };
          }

          resolve(response);
        } else {
          reject({
            xhr: xhr,
            method: options.method,
            url: options.url,
            status: xhr.status,
            statusText: xhr.statusText
          });
        }
      }
    };

    xhr.send(options.method.toUpperCase() === 'POST' ? options.data : '');
  });
}
/* harmony default export */ var lib_ajax = (ajax);
// CONCATENATED MODULE: ./src/lib/utils.js





function utils_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { utils_defineProperty(target, key, source[key]); }); } return target; }

function utils_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Mark field as invalid
 * @private
 * @param {Element} field
 * @param {Element} message
 * @param {object} classes
 * @param {string} classes.error
 * @param {string} classes.valid
 * @param {Array.<string>} errors
 */
function markError(field, message, _ref, errors) {
  var error = _ref.error,
      valid = _ref.valid;
  field.classList.add(error);
  field.classList.remove(valid);
  message.innerHTML = errors.join(', '); // eslint-disable-line no-param-reassign
}
/**
 * Mark field as valid
 * @private
 * @param {Element} field
 * @param {Element} message
 * @param {object} classes
 * @param {string} classes.error
 * @param {string} classes.valid
 */

function markValid(field, message, _ref2) {
  var error = _ref2.error,
      valid = _ref2.valid;
  field.classList.add(valid);
  field.classList.remove(error);
  message.innerHTML = ''; // eslint-disable-line no-param-reassign
}
/**
 * Mark field
 * @private
 * @param {Element} field
 * @param message
 * @param states
 * @param errors
 */

function markField(field, message, states, errors) {
  if (errors && errors.length) {
    markError(field, message, states, errors);
  } else {
    markValid(field, message, states);
  }
}
/**
 * Init error messages
 * @private
 * @param {object} rules
 * @param {object} messages
 * @param {object} methods
 * @returns {Object.<string, Object.<string, string>>}
 */

function initErrorMessages(rules, messages, methods) {
  return Object.keys(rules).reduce(function (names, name) {
    return utils_objectSpread({}, names, utils_defineProperty({}, name, Object.keys(rules[name]).reduce(function (ruleNames, method) {
      return utils_objectSpread({}, ruleNames, utils_defineProperty({}, method, messages[name] && messages[name][method] || methods[method] && methods[method].message || ''));
    }, {})));
  }, {});
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__(92);

// CONCATENATED MODULE: ./src/lib/methods.js





/**
 * Check value is not empty
 * @param {string|FileList|Array} value
 * @returns {boolean} - true == valid, false == invalid
 */
function required(value) {
  if (!value) return false;
  if (value.length === 0) return false;
  if (typeof value === 'string' && value.trim() === '') return false;
  return true;
}
/**
 * Test RegExp
 * @param {string} value
 * @param {RegExp} exp - regular expression
 * @returns {boolean} - true == valid, false == invalid
 */

function regexp(value, exp) {
  return exp.test(value);
}
/**
 * Check value is an email
 * @param {string} value - email
 * @returns {boolean} - true == valid, false == invalid
 */

function email(value) {
  return /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(value);
}
/**
 * Check file sizes are less than max
 * @param {FileList} value - FileList
 * @param {number} size - max file size
 * @returns {boolean} - true == valid, false == invalid
 */

function filesize(value, size) {
  return Array.from(value).reduce(function (r, file) {
    return file.size <= size && r;
  }, true);
}
/**
 * Check file extensions
 * @param {FileList} value - FileList
 * @param {string} extensions - extensions list
 * @returns {boolean} - true == valid, false == invalid
 */

function extension(value, extensions) {
  return Array.from(value).reduce(function (r, file) {
    return extensions.indexOf(file.name.split('.').pop()) !== -1 && r;
  }, true);
}
/**
 * Check value is phone number
 * @param {string} value - phone number
 * @returns {boolean} - true == valid, false == invalid
 */

function tel(value) {
  return /^([+]+)*[0-9\x20\x28\x29-]{5,20}$/.test(value);
}
/**
 * Check value is url
 * @param {string} value - url
 * @returns {boolean} - true == valid, false == invalid
 */

function url(value) {
  return /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi.test(value);
}
/**
 * Check value is greater than min number
 * @param {number} value - number
 * @param {number} number - min number
 * @returns {boolean} - true == valid, false == invalid
 */

function min(value, number) {
  return number <= value;
}
/**
 * Check value is less than max number
 * @param {number} value - number
 * @param {number} number - max number
 * @returns {boolean} - true == valid, false == invalid
 */

function max(value, number) {
  return value <= number;
}
/**
 * Check value is multiple of number
 * @param {number} value - number
 * @param {number} number - factor
 * @returns {boolean} - true == valid, false == invalid
 */

function step(value, number) {
  return value % number === 0;
}
/**
 * Check value is greater than min date
 * @param {Date} date - current date
 * @param {Date} mindate - max date
 * @returns {boolean} - true == valid, false == invalid
 */

function minDate(date, mindate) {
  return mindate <= date;
}
/**
 * Check date is less than max date
 * @param {Date} date - current date
 * @param {Date} maxdate - max date
 * @returns {boolean} - true == valid, false == invalid
 */

function maxDate(date, maxdate) {
  return date <= maxdate;
}
/* harmony default export */ var lib_methods = ({
  required: {
    func: required,
    message: 'This field is required'
  },
  regexp: {
    func: regexp,
    message: 'Please, provide correct value'
  },
  email: {
    func: email,
    message: 'This email is incorrect'
  },
  filesize: {
    func: filesize,
    message: 'This file is too large'
  },
  extension: {
    func: extension,
    message: 'This extension is not supported'
  },
  tel: {
    func: tel,
    message: 'This phone number is incorrect'
  },
  url: {
    func: url,
    message: 'Wrong url'
  },
  min: {
    func: min,
    message: 'This number is too less'
  },
  max: {
    func: max,
    message: 'This number is too large'
  },
  step: {
    func: step,
    message: 'This value is not a multiple of the specified step value'
  },
  minDate: {
    func: minDate,
    message: 'This date is too early'
  },
  maxDate: {
    func: maxDate,
    message: 'This date is too late'
  }
});
// CONCATENATED MODULE: ./src/options.js
/* harmony default export */ var src_options = ({
  ajax: {
    url: null,
    enctype: 'application/x-www-form-urlencoded',
    sendType: 'serialize',
    // 'serialize', 'formData', 'json'
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
    // eslint-disable-next-line no-unused-vars
    success: function success(_ref) {
      var event = _ref.event,
          response = _ref.response;
    },
    // eslint-disable-next-line no-unused-vars
    error: function error(_ref2) {
      var errors = _ref2.errors;
    }
  },
  clean: true,
  redirect: true,
  language: 'en',
  translations: {}
});
// CONCATENATED MODULE: ./src/jedi-validate.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return jedi_validate_JediValidate; });







function jedi_validate_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { jedi_validate_defineProperty(target, key, source[key]); }); } return target; }

function jedi_validate_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function jedi_validate_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function jedi_validate_createClass(Constructor, protoProps, staticProps) { if (protoProps) jedi_validate_defineProperties(Constructor.prototype, protoProps); if (staticProps) jedi_validate_defineProperties(Constructor, staticProps); return Constructor; }

function jedi_validate_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











/**
 * JediValidate - validation
 */

var jedi_validate_JediValidate =
/*#__PURE__*/
function () {
  /**
   * Object with fields
   * @private
   * @type {Object.<string, Element>}
   */

  /**
   * Object with inputs nodes
   * @private
   * @type {Object.<string, HTMLInputElement|HTMLSelectElement|Array>}
   */

  /**
   * Object with message nodes
   * @private
   * @type {Object.<string, Element>}
   */

  /**
   * Object with error message
   * @private
   * @type {Object.<string, Object.<string, string>>}
   */

  /**
   * Object with error message
   * @private
   * @type {object} - data object
   */

  /**
   * Validate methods
   * @private
   * @type {Object.<string, {func: Function, message: string}>}
   */

  /* eslint-disable */

  /**
   * Validator options
   * @private
   * @type {{ajax: {url: string, enctype: string, sendType: string, method: string}, rules: {}, messages: {}, containers: {parent: string, message: string, baseMessage: string}, states: {error: string, valid: string, pristine: string, dirty: string}, formStatePrefix: string, callbacks: {success: function, error: function}, clean: boolean, redirect: boolean, language: string, translations: {}}}
   */

  /* eslint-enable */

  /**
   * Validator rules
   * @private
   * @type {object}
   */

  /**
   * Translation dictionary
   * @private
   * @type {Dictionary}
   */

  /**
   * Elements
   * @private
   * @type {object}
   */

  /**
   * Root element
   * @private
   * @type {Element}
   */

  /**
   * JediValidate
   * @param {HTMLElement} root - element which wraps form element
   * @param {object} options - object with options
   */
  function JediValidate(root) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    jedi_validate_classCallCheck(this, JediValidate);

    jedi_validate_defineProperty(this, "fields", {});

    jedi_validate_defineProperty(this, "inputs", {});

    jedi_validate_defineProperty(this, "messages", {});

    jedi_validate_defineProperty(this, "errorMessages", {});

    jedi_validate_defineProperty(this, "data", {});

    jedi_validate_defineProperty(this, "methods", jedi_validate_objectSpread({}, lib_methods));

    jedi_validate_defineProperty(this, "options", {});

    jedi_validate_defineProperty(this, "rules", {});

    jedi_validate_defineProperty(this, "dictionary", null);

    jedi_validate_defineProperty(this, "nodes", null);

    jedi_validate_defineProperty(this, "root", null);

    jedi_validate_defineProperty(this, "handleSubmit", function (event) {
      _this.data = getData(_this.inputs);
      var errors = validateData(_this.rules, _this.methods, _this.data, _this.errorMessages, _this.translate);
      var fieldNames = Object.keys(errors).filter(function (name) {
        return _this.fields[name];
      });

      if (fieldNames.length !== 0) {
        fieldNames.forEach(function (name) {
          return markField(_this.fields[name], _this.messages[name], _this.options.states, errors[name]);
        });
      }

      var errorFieldNames = fieldNames.filter(function (name) {
        return errors[name];
      });

      if (errorFieldNames.length !== 0) {
        try {
          _this.options.callbacks.error({
            errors: errors
          });
        } catch (e) {
          if (false) {}
        }

        event.preventDefault();
        return;
      }

      if (_this.options.ajax && _this.options.ajax.url) {
        event.preventDefault();
      } else {
        try {
          _this.options.callbacks.success({
            event: event
          });
        } catch (e) {
          if (false) {}
        }

        return;
      }

      var convertedData = convertData(_this.data, _this.options.ajax.sendType);

      _this.send(jedi_validate_objectSpread({}, _this.options.ajax, {
        data: convertedData
      }));
    });

    jedi_validate_defineProperty(this, "translate", function (text) {
      return _this.dictionary.translate(text, _this.options.language);
    });

    this.root = root;
    var baseMessageClass = options.containers && options.containers.baseMessage || src_options.containers.baseMessage;
    this.nodes = {
      form: this.root.querySelector('form'),
      inputs: this.root.querySelectorAll('form [name]'),
      baseMessage: this.root.querySelector(".".concat(baseMessageClass))
    };
    var formOptions = getFormOptions(this.nodes.form);
    this.options = lib_deepmerge(this.options, src_options);
    this.options = lib_deepmerge(this.options, formOptions);
    this.options = lib_deepmerge(this.options, options);
    this.rules = jedi_validate_objectSpread({}, this.options.rules);
    this.dictionary = new Dictionary(this.options.translations);
    this.ready();
    this.errorMessages = initErrorMessages(this.rules, this.options.messages, this.methods);
  }
  /**
   * Ready
   * @private
   */


  jedi_validate_createClass(JediValidate, [{
    key: "ready",
    value: function ready() {
      var _this2 = this;

      this.nodes.form.setAttribute('novalidate', 'novalidate');
      this.nodes.form.addEventListener('submit', this.handleSubmit);
      Array.from(this.nodes.inputs).forEach(function (input) {
        // fixme "name" and "name in data" not the same
        // name === "phone[]",
        // data: { phone: [] } - name === "phone"
        var name = input.name; // eslint-disable-line prefer-destructuring

        if (_this2.inputs[name]) {
          if (Array.isArray(_this2.inputs[name])) {
            _this2.inputs[name].push(input);
          } else {
            var groupInput = [_this2.inputs[name], input];
            groupInput.name = name;
            _this2.inputs[name] = groupInput;
          }
        } else {
          _this2.inputs[name] = input;
          var field = input.parentNode;

          do {
            if (field.classList.contains(_this2.options.containers.parent)) {
              _this2.fields[name] = field;
              break;
            }

            field = field.parentNode;
          } while (field && field.classList);

          if (!_this2.fields[name]) {
            console.warn("Input ".concat(name, " has no parent field"));
            delete _this2.inputs[name];
            return;
          }

          _this2.fields[name].classList.add(_this2.options.states.pristine);

          var messageElement = _this2.fields[name].querySelector(".".concat(_this2.options.containers.message));

          if (messageElement) {
            _this2.messages[name] = messageElement;
          } else {
            _this2.messages[name] = document.createElement('div');

            _this2.messages[name].classList.add(_this2.options.containers.message);

            _this2.fields[name].appendChild(_this2.messages[name]);
          }

          _this2.rules[name] = _this2.rules[name] || {};
          var inputRules = getInputRules(input);
          _this2.rules[name] = lib_deepmerge(inputRules, _this2.rules[name]);
          Object.keys(_this2.rules[name]).forEach(function (rule) {
            if (_this2.rules[name][rule]) {
              _this2.fields[name].classList.add(rule);
            }
          });
        }

        input.addEventListener('change', _this2.handleInputChange.bind(_this2, name));
        input.addEventListener('input', _this2.handleInputInput.bind(_this2, name));
      });
    }
    /**
     * Handle input change
     * @private
     * @param {string} name
     */

  }, {
    key: "handleInputChange",
    value: function handleInputChange(name) {
      this.fields[name].classList.remove(this.options.states.dirty);
      var inputData = getInputData(this.inputs[name]);
      var value = getValueByName(name, inputData); // fixme don't work with 2 inputs phone[]

      this.data = jedi_validate_objectSpread({}, this.data, inputData);
      var errors = validateField(this.rules[name], this.methods, value, name, this.errorMessages, this.data, this.translate);
      markField(this.fields[name], this.messages[name], this.options.states, errors);
    }
    /**
     * Handle input
     * @private
     * @param {string} name
     */

  }, {
    key: "handleInputInput",
    value: function handleInputInput(name) {
      this.fields[name].classList.remove(this.options.states.pristine);
      this.fields[name].classList.add(this.options.states.dirty);
    }
    /**
     * Handle form submit
     * @private
     * @param {Event} event
     */

  }, {
    key: "send",

    /**
     * Send form
     * @private
     * @param {object} options - object with options for sending
     * @param {string} options.url
     * @param {string} options.enctype
     * @param {string} options.sendType
     * @param {string} options.method
     * @param {string|FormData} options.data
     */
    value: function send(options) {
      var _this3 = this;

      ajax(options, this.translate).then(function (response) {
        if (response.validationErrors) {
          try {
            _this3.options.callbacks.error({
              errors: response.validationErrors
            });
          } catch (e) {
            if (false) {}
          }

          if (response.validationErrors.base) {
            _this3.nodes.baseMessage.innerHTML = response.validationErrors.base.join(', ');

            _this3.root.classList.add(_this3.options.formStatePrefix + _this3.options.states.error);

            _this3.root.classList.remove(_this3.options.formStatePrefix + _this3.options.states.valid);

            delete response.validationErrors.base;
          } else {
            _this3.nodes.baseMessage.innerHTML = '';
          }

          Object.keys(response.validationErrors).forEach(function (name) {
            return markField(_this3.fields[name], _this3.messages[name], _this3.options.states, response.validationErrors[name]);
          });
        } else {
          try {
            _this3.options.callbacks.success({
              response: response
            });
          } catch (e) {
            if (false) {}
          }

          if (_this3.options.redirect && response.redirect) {
            window.location.href = response.redirect;
            return;
          }

          if (_this3.options.clean) {
            _this3.nodes.form.reset();
          }
        }
      }).catch(function (_ref) {
        var method = _ref.method,
            url = _ref.url,
            status = _ref.status,
            statusText = _ref.statusText;
        console.warn("".concat(method, " ").concat(url, " ").concat(status, " (").concat(statusText, ")"));
        _this3.nodes.baseMessage.innerHTML = _this3.translate('Can not send form!');

        _this3.root.classList.add(_this3.options.formStatePrefix + _this3.options.states.error);

        _this3.root.classList.remove(_this3.options.formStatePrefix + _this3.options.states.valid);
      });
    }
    /**
     * Collect data
     * @public
     * @param {string|Array.<string>} params - field
     * @returns {Object}
     */

  }, {
    key: "collect",
    value: function collect() {
      var _this4 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (!params) {
        this.data = getData(this.inputs);
        return this.data;
      }

      if (Array.isArray(params)) {
        return params.reduce(function (collected, name) {
          var inputData = getInputData(_this4.inputs[name]);
          _this4.data = jedi_validate_objectSpread({}, _this4.data, inputData);
          return jedi_validate_objectSpread({}, collected, inputData);
        }, {});
      }

      var inputData = getInputData(this.inputs[params]); // fixme don't work with 2 inputs phone[]

      this.data = jedi_validate_objectSpread({}, this.data, inputData);
      return inputData;
    }
    /**
     * Add rule to validator
     * @public
     * @param {string} rule - rule name
     * @param {Function} func - function
     * @param {string} message - error message
     */

  }, {
    key: "addMethod",
    value: function addMethod(rule, func, message) {
      this.methods[rule] = {
        func: func,
        message: message
      };
      this.errorMessages = initErrorMessages(this.rules, this.options.messages, this.methods);
    }
    /**
     * Add localization to JediValidate
     * @public
     * @param {string} sourceText - text on english
     * @param {string} translatedText - text on needed language
     * @param {string} language - language
     */

  }, {
    key: "addToDictionary",
    value: function addToDictionary(sourceText, translatedText, language) {
      this.dictionary.addTranslation(sourceText, translatedText, language);
    }
  }]);

  return JediValidate;
}();



/***/ })
/******/ ]);
});
//# sourceMappingURL=jedi-validate.js.map