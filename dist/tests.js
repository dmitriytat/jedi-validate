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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(9);
	
	__webpack_require__(10);
	
	var _coverage__file;

	function _cover__() {
	  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
	  return _coverage__file;
	}

	function _coverage__getInitialState() {
	  var path = 'D:\\projects\\jedi-validate\\tests\\tests.es6',
	      hash = 'ef2f75350d81696378ed891a5afa666b';
	  var global = new Function('return this')();
	  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
	  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
	  var coverageData = global['JSON'].parse('{"path":"D:\\\\projects\\\\jedi-validate\\\\tests\\\\tests.es6","s":{},"b":{},"f":{},"statementMap":{},"fnMap":{},"branchMap":{}}');
	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}

	_cover__();

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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var _deepmerge = __webpack_require__(1);
	
	var _deepmerge2 = _interopRequireDefault(_deepmerge);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _coverage__file;
	
	function _cover__() {
	    if (!_coverage__file) _coverage__file = _coverage__getInitialState();
	    return _coverage__file;
	}
	
	function _coverage__getInitialState() {
	    var path = 'D:\\projects\\jedi-validate\\src\\lib\\get-data.es6',
	        hash = 'eb14bc6c96050e67e2b5df2373dccad1';
	    var global = new Function('return this')();
	    var coverage = global['__coverage__'] || (global['__coverage__'] = {});
	    if (coverage[path] && coverage[path].hash === hash) return coverage[path];
	    var coverageData = global['JSON'].parse('{"path":"D:\\\\projects\\\\jedi-validate\\\\src\\\\lib\\\\get-data.es6","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0,0,0,0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0,0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0],"23":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0},"statementMap":{"1":{"start":{"line":4,"column":20},"end":{"line":4,"column":27}},"2":{"start":{"line":6,"column":4},"end":{"line":10,"column":5}},"3":{"start":{"line":7,"column":8},"end":{"line":7,"column":21}},"4":{"start":{"line":8,"column":11},"end":{"line":10,"column":5}},"5":{"start":{"line":9,"column":8},"end":{"line":9,"column":52}},"6":{"start":{"line":12,"column":4},"end":{"line":12,"column":61}},"7":{"start":{"line":15,"column":13},"end":{"line":15,"column":32}},"8":{"start":{"line":17,"column":17},"end":{"line":17,"column":19}},"9":{"start":{"line":19,"column":18},"end":{"line":19,"column":33}},"10":{"start":{"line":20,"column":4},"end":{"line":28,"column":5}},"11":{"start":{"line":21,"column":8},"end":{"line":23,"column":9}},"12":{"start":{"line":22,"column":12},"end":{"line":22,"column":32}},"13":{"start":{"line":25,"column":8},"end":{"line":25,"column":44}},"14":{"start":{"line":25,"column":32},"end":{"line":25,"column":42}},"15":{"start":{"line":27,"column":8},"end":{"line":27,"column":34}},"16":{"start":{"line":30,"column":4},"end":{"line":30,"column":16}},"17":{"start":{"line":34,"column":4},"end":{"line":34,"column":100}},"18":{"start":{"line":34,"column":44},"end":{"line":34,"column":85}},"19":{"start":{"line":34,"column":63},"end":{"line":34,"column":77}},"20":{"start":{"line":34,"column":80},"end":{"line":34,"column":85}},"21":{"start":{"line":34,"column":55},"end":{"line":34,"column":60}},"22":{"start":{"line":34,"column":96},"end":{"line":34,"column":98}},"23":{"start":{"line":38,"column":17},"end":{"line":38,"column":40}},"24":{"start":{"line":39,"column":4},"end":{"line":39,"column":38}},"25":{"start":{"line":43,"column":4},"end":{"line":43,"column":77}},"26":{"start":{"line":43,"column":36},"end":{"line":43,"column":56}},"27":{"start":{"line":47,"column":4},"end":{"line":47,"column":33}},"28":{"start":{"line":47,"column":16},"end":{"line":47,"column":33}},"29":{"start":{"line":51,"column":4},"end":{"line":53,"column":5}},"30":{"start":{"line":52,"column":8},"end":{"line":52,"column":41}},"31":{"start":{"line":55,"column":4},"end":{"line":67,"column":5}},"32":{"start":{"line":56,"column":9},"end":{"line":56,"column":21}},"33":{"start":{"line":58,"column":9},"end":{"line":58,"column":26}},"34":{"start":{"line":60,"column":9},"end":{"line":60,"column":19}},"35":{"start":{"line":61,"column":9},"end":{"line":61,"column":16}},"36":{"start":{"line":63,"column":9},"end":{"line":63,"column":15}},"37":{"start":{"line":57,"column":8},"end":{"line":57,"column":84}},"38":{"start":{"line":57,"column":38},"end":{"line":57,"column":78}},"39":{"start":{"line":57,"column":81},"end":{"line":57,"column":83}},"40":{"start":{"line":59,"column":8},"end":{"line":59,"column":91}},"41":{"start":{"line":59,"column":46},"end":{"line":59,"column":61}},"42":{"start":{"line":59,"column":77},"end":{"line":59,"column":89}},"43":{"start":{"line":62,"column":8},"end":{"line":62,"column":48}},"44":{"start":{"line":62,"column":31},"end":{"line":62,"column":42}},"45":{"start":{"line":62,"column":45},"end":{"line":62,"column":47}},"46":{"start":{"line":64,"column":8},"end":{"line":64,"column":27}},"47":{"start":{"line":66,"column":8},"end":{"line":66,"column":27}},"48":{"start":{"line":71,"column":15},"end":{"line":71,"column":25}},"49":{"start":{"line":72,"column":4},"end":{"line":74,"column":5}},"50":{"start":{"line":72,"column":41},"end":{"line":72,"column":49}},"51":{"start":{"line":72,"column":17},"end":{"line":72,"column":37}},"52":{"start":{"line":73,"column":8},"end":{"line":73,"column":29}},"53":{"start":{"line":76,"column":18},"end":{"line":76,"column":38}},"54":{"start":{"line":77,"column":17},"end":{"line":77,"column":40}},"55":{"start":{"line":79,"column":4},"end":{"line":79,"column":37}},"56":{"start":{"line":83,"column":4},"end":{"line":86,"column":6}},"57":{"start":{"line":84,"column":24},"end":{"line":84,"column":67}},"58":{"start":{"line":90,"column":4},"end":{"line":94,"column":5}},"59":{"start":{"line":91,"column":8},"end":{"line":91,"column":103}},"60":{"start":{"line":91,"column":44},"end":{"line":91,"column":97}},"61":{"start":{"line":92,"column":11},"end":{"line":94,"column":5}},"62":{"start":{"line":93,"column":8},"end":{"line":93,"column":116}},"63":{"start":{"line":93,"column":57},"end":{"line":93,"column":110}},"64":{"start":{"line":96,"column":4},"end":{"line":96,"column":50}},"65":{"start":{"line":102,"column":4},"end":{"line":128,"column":5}},"66":{"start":{"line":103,"column":9},"end":{"line":103,"column":20}},"67":{"start":{"line":107,"column":9},"end":{"line":107,"column":19}},"68":{"start":{"line":125,"column":9},"end":{"line":125,"column":15}},"69":{"start":{"line":104,"column":8},"end":{"line":105,"column":90}},"70":{"start":{"line":105,"column":41},"end":{"line":105,"column":84}},"71":{"start":{"line":106,"column":8},"end":{"line":106,"column":70}},"72":{"start":{"line":106,"column":38},"end":{"line":106,"column":64}},"73":{"start":{"line":106,"column":67},"end":{"line":106,"column":69}},"74":{"start":{"line":108,"column":8},"end":{"line":124,"column":27}},"75":{"start":{"line":109,"column":12},"end":{"line":121,"column":13}},"76":{"start":{"line":110,"column":16},"end":{"line":116,"column":17}},"77":{"start":{"line":111,"column":20},"end":{"line":113,"column":21}},"78":{"start":{"line":111,"column":59},"end":{"line":111,"column":65}},"79":{"start":{"line":111,"column":33},"end":{"line":111,"column":34}},"80":{"start":{"line":112,"column":24},"end":{"line":112,"column":72}},"81":{"start":{"line":114,"column":23},"end":{"line":116,"column":17}},"82":{"start":{"line":115,"column":20},"end":{"line":115,"column":57}},"83":{"start":{"line":117,"column":19},"end":{"line":121,"column":13}},"84":{"start":{"line":118,"column":16},"end":{"line":118,"column":108}},"85":{"start":{"line":118,"column":55},"end":{"line":118,"column":106}},"86":{"start":{"line":120,"column":16},"end":{"line":120,"column":50}},"87":{"start":{"line":123,"column":12},"end":{"line":123,"column":28}},"88":{"start":{"line":127,"column":8},"end":{"line":127,"column":36}}},"fnMap":{"1":{"name":null,"line":3,"loc":{"start":{"line":3,"column":7},"end":{"line":13,"column":1}}},"2":{"name":null,"line":16,"loc":{"start":{"line":16,"column":7},"end":{"line":31,"column":1}}},"3":{"name":null,"line":33,"loc":{"start":{"line":33,"column":7},"end":{"line":35,"column":1}}},"4":{"name":null,"line":34,"loc":{"start":{"line":34,"column":23},"end":{"line":34,"column":86}}},"5":{"name":null,"line":37,"loc":{"start":{"line":37,"column":7},"end":{"line":40,"column":1}}},"6":{"name":null,"line":42,"loc":{"start":{"line":42,"column":7},"end":{"line":44,"column":1}}},"7":{"name":null,"line":43,"loc":{"start":{"line":43,"column":27},"end":{"line":43,"column":56}}},"8":{"name":null,"line":46,"loc":{"start":{"line":46,"column":7},"end":{"line":68,"column":1}}},"9":{"name":null,"line":59,"loc":{"start":{"line":59,"column":36},"end":{"line":59,"column":61}}},"10":{"name":null,"line":59,"loc":{"start":{"line":59,"column":67},"end":{"line":59,"column":89}}},"11":{"name":null,"line":70,"loc":{"start":{"line":70,"column":7},"end":{"line":80,"column":1}}},"12":{"name":null,"line":82,"loc":{"start":{"line":82,"column":7},"end":{"line":87,"column":1}}},"13":{"name":null,"line":84,"loc":{"start":{"line":84,"column":8},"end":{"line":84,"column":67}}},"14":{"name":null,"line":89,"loc":{"start":{"line":89,"column":7},"end":{"line":97,"column":1}}},"15":{"name":null,"line":91,"loc":{"start":{"line":91,"column":27},"end":{"line":91,"column":97}}},"16":{"name":null,"line":93,"loc":{"start":{"line":93,"column":40},"end":{"line":93,"column":110}}},"17":{"name":null,"line":99,"loc":{"start":{"line":99,"column":7},"end":{"line":129,"column":1}}},"18":{"name":null,"line":105,"loc":{"start":{"line":105,"column":24},"end":{"line":105,"column":84}}},"19":{"name":null,"line":108,"loc":{"start":{"line":108,"column":40},"end":{"line":124,"column":9}}},"20":{"name":null,"line":118,"loc":{"start":{"line":118,"column":48},"end":{"line":118,"column":106}}}},"branchMap":{"1":{"line":6,"type":"if","locations":[{"start":{"line":6,"column":30},"end":{"line":8,"column":5}},{"start":{"line":6,"column":30},"end":{"line":8,"column":5}}]},"2":{"line":8,"type":"if","locations":[{"start":{"line":8,"column":33},"end":{"line":10,"column":5}},{"start":{"line":8,"column":33},"end":{"line":10,"column":5}}]},"3":{"line":21,"type":"if","locations":[{"start":{"line":21,"column":46},"end":{"line":23,"column":9}},{"start":{"line":21,"column":46},"end":{"line":23,"column":9}}]},"4":{"line":25,"type":"binary-expr","locations":[{"start":{"line":25,"column":18},"end":{"line":25,"column":28}},{"start":{"line":25,"column":18},"end":{"line":25,"column":28}}]},"5":{"line":34,"type":"cond-expr","locations":[{"start":{"line":34,"column":44},"end":{"line":34,"column":85}},{"start":{"line":34,"column":44},"end":{"line":34,"column":85}}]},"6":{"line":34,"type":"binary-expr","locations":[{"start":{"line":34,"column":44},"end":{"line":34,"column":51}},{"start":{"line":34,"column":44},"end":{"line":34,"column":51}}]},"7":{"line":34,"type":"binary-expr","locations":[{"start":{"line":34,"column":88},"end":{"line":34,"column":92}},{"start":{"line":34,"column":88},"end":{"line":34,"column":92}}]},"8":{"line":47,"type":"if","locations":[{"start":{"line":47,"column":4},"end":{"line":47,"column":33}},{"start":{"line":47,"column":4},"end":{"line":47,"column":33}}]},"9":{"line":51,"type":"if","locations":[{"start":{"line":51,"column":30},"end":{"line":53,"column":5}},{"start":{"line":51,"column":30},"end":{"line":53,"column":5}}]},"10":{"line":55,"type":"switch","locations":[{"start":{"line":56,"column":4},"end":{"line":57,"column":84}},{"start":{"line":58,"column":4},"end":{"line":59,"column":91}},{"start":{"line":60,"column":4},"end":{"line":60,"column":20}},{"start":{"line":61,"column":4},"end":{"line":62,"column":48}},{"start":{"line":63,"column":4},"end":{"line":64,"column":27}},{"start":{"line":65,"column":4},"end":{"line":66,"column":27}}]},"11":{"line":57,"type":"cond-expr","locations":[{"start":{"line":57,"column":15},"end":{"line":57,"column":83}},{"start":{"line":57,"column":15},"end":{"line":57,"column":83}}]},"12":{"line":62,"type":"cond-expr","locations":[{"start":{"line":62,"column":15},"end":{"line":62,"column":47}},{"start":{"line":62,"column":15},"end":{"line":62,"column":47}}]},"13":{"line":72,"type":"if","locations":[{"start":{"line":72,"column":51},"end":{"line":74,"column":5}},{"start":{"line":72,"column":51},"end":{"line":74,"column":5}}]},"14":{"line":72,"type":"binary-expr","locations":[{"start":{"line":72,"column":8},"end":{"line":72,"column":37}},{"start":{"line":72,"column":8},"end":{"line":72,"column":37}}]},"15":{"line":72,"type":"binary-expr","locations":[{"start":{"line":72,"column":8},"end":{"line":72,"column":13}},{"start":{"line":72,"column":8},"end":{"line":72,"column":13}}]},"16":{"line":90,"type":"if","locations":[{"start":{"line":90,"column":29},"end":{"line":92,"column":5}},{"start":{"line":90,"column":29},"end":{"line":92,"column":5}}]},"17":{"line":92,"type":"if","locations":[{"start":{"line":92,"column":41},"end":{"line":94,"column":5}},{"start":{"line":92,"column":41},"end":{"line":94,"column":5}}]},"18":{"line":102,"type":"switch","locations":[{"start":{"line":103,"column":4},"end":{"line":106,"column":70}},{"start":{"line":107,"column":4},"end":{"line":124,"column":27}},{"start":{"line":125,"column":4},"end":{"line":125,"column":16}},{"start":{"line":126,"column":4},"end":{"line":127,"column":36}}]},"19":{"line":106,"type":"cond-expr","locations":[{"start":{"line":106,"column":15},"end":{"line":106,"column":69}},{"start":{"line":106,"column":15},"end":{"line":106,"column":69}}]},"20":{"line":109,"type":"if","locations":[{"start":{"line":109,"column":48},"end":{"line":117,"column":13}},{"start":{"line":109,"column":48},"end":{"line":117,"column":13}}]},"21":{"line":110,"type":"if","locations":[{"start":{"line":110,"column":43},"end":{"line":114,"column":17}},{"start":{"line":110,"column":43},"end":{"line":114,"column":17}}]},"22":{"line":114,"type":"if","locations":[{"start":{"line":114,"column":52},"end":{"line":116,"column":17}},{"start":{"line":114,"column":52},"end":{"line":116,"column":17}}]},"23":{"line":117,"type":"if","locations":[{"start":{"line":117,"column":55},"end":{"line":119,"column":13}},{"start":{"line":119,"column":19},"end":{"line":121,"column":13}}]}}}');
	    coverageData.hash = hash;
	    return coverage[path] = coverageData;
	}
	
	_cover__();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function createObject(path, value) {
	    ++_cover__().f['1'];
	
	    var segment = (++_cover__().s['1'], path[0]);
	
	    ++_cover__().s['2'];
	    if (segment.length === 0) {
	        ++_cover__().b['1'][0];
	        ++_cover__().s['3'];
	
	        return value;
	    } else {
	            ++_cover__().b['1'][1];
	            ++_cover__().s['4'];
	            if (segment === '[]') {
	                ++_cover__().b['2'][0];
	                ++_cover__().s['5'];
	
	                return [createObject(path.slice(1), value)];
	            } else {
	                ++_cover__().b['2'][1];
	            }
	        }++_cover__().s['6'];
	    return _defineProperty({}, segment, createObject(path.slice(1), value));
	}
	
	var NAME = (++_cover__().s['7'], /(\[(\w*)\]|\w*)/gi);
	function convertNameToPath(name) {
	    ++_cover__().f['2'];
	
	    var path = (++_cover__().s['8'], []);
	
	    var matches = (++_cover__().s['9'], NAME.exec(name));
	    ++_cover__().s['10'];
	    while (matches !== null) {
	        ++_cover__().s['11'];
	
	        if (matches.index === NAME.lastIndex) {
	            ++_cover__().b['3'][0];
	            ++_cover__().s['12'];
	
	            NAME.lastIndex += 1;
	        } else {
	            ++_cover__().b['3'][1];
	        }
	
	        ++_cover__().s['13'];
	        path.push((++_cover__().b['4'][0], matches[2]) || (++_cover__().b['4'][1], (++_cover__().s['14'], matches[1])));
	
	        ++_cover__().s['15'];
	        matches = NAME.exec(name);
	    }
	
	    ++_cover__().s['16'];
	    return path;
	}
	
	function getValueByPath(path, data) {
	    ++_cover__().f['3'];
	    ++_cover__().s['17'];
	
	    return path.reduce(function (value, segment) {
	        return ++_cover__().f['4'], ++_cover__().s['18'], (++_cover__().b['6'][0], segment) && (++_cover__().b['6'][1], (++_cover__().s['21'], value)) ? (++_cover__().b['5'][0], (++_cover__().s['19'], value[segment])) : (++_cover__().b['5'][1], (++_cover__().s['20'], value));
	    }, (++_cover__().b['7'][0], data) || (++_cover__().b['7'][1], (++_cover__().s['22'], '')));
	}
	
	function getValueByName(name, data) {
	    ++_cover__().f['5'];
	
	    var path = (++_cover__().s['23'], convertNameToPath(name));
	    ++_cover__().s['24'];
	    return getValueByPath(path, data);
	}
	
	function getRadioGroupValue(inputs) {
	    ++_cover__().f['6'];
	    ++_cover__().s['25'];
	
	    return [].concat(_toConsumableArray(inputs)).map(function (radio) {
	        return ++_cover__().f['7'], ++_cover__().s['26'], getInputValue(radio);
	    }).filter(Boolean)[0];
	}
	
	function getInputValue(input) {
	    ++_cover__().f['8'];
	    ++_cover__().s['27'];
	
	    if (!input) {
	            ++_cover__().b['8'][0];
	            ++_cover__().s['28'];
	            return undefined;
	        } else {
	        ++_cover__().b['8'][1];
	    }var type = input.type;
	    ++_cover__().s['29'];
	
	
	    if (Array.isArray(input)) {
	        ++_cover__().b['9'][0];
	        ++_cover__().s['30'];
	
	        return getRadioGroupValue(input);
	    } else {
	        ++_cover__().b['9'][1];
	    }
	
	    ++_cover__().s['31'];
	    switch (type) {
	        case (++_cover__().s['32'], 'select-one'):
	            ++_cover__().b['10'][0]
	            ++_cover__().s['37'];
	
	            return input.options.length ? (++_cover__().b['11'][0], (++_cover__().s['38'], input.options[input.selectedIndex].value)) : (++_cover__().b['11'][1], (++_cover__().s['39'], ''));
	        case (++_cover__().s['33'], 'select-multiple'):
	            ++_cover__().b['10'][1]
	            ++_cover__().s['40'];
	
	            return input.options.filter(function (option) {
	                return ++_cover__().f['9'], ++_cover__().s['41'], option.selected;
	            }).map(function (option) {
	                return ++_cover__().f['10'], ++_cover__().s['42'], option.value;
	            });
	        case (++_cover__().s['34'], 'checkbox'):
	            ++_cover__().b['10'][2]
	
	        case (++_cover__().s['35'], 'radio'):
	            ++_cover__().b['10'][3]
	            ++_cover__().s['43'];
	
	            return input.checked ? (++_cover__().b['12'][0], (++_cover__().s['44'], input.value)) : (++_cover__().b['12'][1], (++_cover__().s['45'], ''));
	        case (++_cover__().s['36'], 'file'):
	            ++_cover__().b['10'][4]
	            ++_cover__().s['46'];
	
	            return input.files;
	        default:
	            ++_cover__().b['10'][5]
	            ++_cover__().s['47'];
	
	            return input.value;
	    }
	}
	
	function getInputData(input) {
	    ++_cover__().f['11'];
	
	    var name = (++_cover__().s['48'], input.name);
	    ++_cover__().s['49'];
	    if ((++_cover__().b['14'][0], (++_cover__().b['15'][0], !name) && (++_cover__().b['15'][1], (++_cover__().s['51'], Array.isArray(input)))) && (++_cover__().b['14'][1], (++_cover__().s['50'], input[0]))) {
	        ++_cover__().b['13'][0];
	        ++_cover__().s['52'];
	
	        name = input[0].name;
	    } else {
	        ++_cover__().b['13'][1];
	    }
	
	    var value = (++_cover__().s['53'], getInputValue(input));
	    var path = (++_cover__().s['54'], convertNameToPath(name));
	
	    ++_cover__().s['55'];
	    return createObject(path, value);
	}
	
	function getData(inputs) {
	    ++_cover__().f['12'];
	    ++_cover__().s['56'];
	
	    return Object.keys(inputs).reduce(function (data, name) {
	        return ++_cover__().f['13'], ++_cover__().s['57'], (0, _deepmerge2.default)(data, getInputData(inputs[name]));
	    }, {});
	}
	
	function getQueryPart(name, data) {
	    ++_cover__().f['14'];
	    ++_cover__().s['58'];
	
	    if (Array.isArray(data)) {
	        ++_cover__().b['16'][0];
	        ++_cover__().s['59'];
	
	        return data.reduce(function (part, index) {
	            return ++_cover__().f['15'], ++_cover__().s['60'], part + getQueryPart(name + '[' + index + ']', data[index]);
	        }, '');
	    } else {
	            ++_cover__().b['16'][1];
	            ++_cover__().s['61'];
	            if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
	                ++_cover__().b['17'][0];
	                ++_cover__().s['62'];
	
	                return Object.keys(data).reduce(function (part, index) {
	                    return ++_cover__().f['16'], ++_cover__().s['63'], part + getQueryPart(name + '[' + index + ']', data[index]);
	                }, '');
	            } else {
	                ++_cover__().b['17'][1];
	            }
	        }++_cover__().s['64'];
	    return name + '=' + encodeURIComponent(data) + '&';
	}
	
	function convertData(data, type) {
	    ++_cover__().f['17'];
	    // todo think about inputs
	    var convertedData = void 0;
	
	    ++_cover__().s['65'];
	    switch (type) {
	        case (++_cover__().s['66'], 'serialize'):
	            ++_cover__().b['18'][0]
	            ++_cover__().s['69'];
	
	            convertedData = Object.keys(data).reduce(function (query, name) {
	                return ++_cover__().f['18'], ++_cover__().s['70'], '' + query + getQueryPart(name, data[name]);
	            }, '');
	            ++_cover__().s['71'];
	            return convertedData.length ? (++_cover__().b['19'][0], (++_cover__().s['72'], convertedData.slice(0, -1))) : (++_cover__().b['19'][1], (++_cover__().s['73'], ''));
	        case (++_cover__().s['67'], 'formData'):
	            ++_cover__().b['18'][1]
	            ++_cover__().s['74'];
	            // todo rework
	            return Object.keys(data).reduce(function (formData, name) {
	                ++_cover__().f['19'];
	                ++_cover__().s['75'];
	
	                if (data[name] instanceof FileList) {
	                    ++_cover__().b['20'][0];
	                    ++_cover__().s['76'];
	
	                    if (data[name].length > 1) {
	                        ++_cover__().b['21'][0];
	                        ++_cover__().s['77'];
	
	                        for (var i = (++_cover__().s['79'], 0); i < data[name].length; ++_cover__().s['78'], i += 1) {
	                            ++_cover__().s['80'];
	
	                            formData.append(name + '[' + i + ']', data[name][i]);
	                        }
	                    } else {
	                            ++_cover__().b['21'][1];
	                            ++_cover__().s['81'];
	                            if (data[name].length === 1) {
	                                ++_cover__().b['22'][0];
	                                ++_cover__().s['82'];
	
	                                formData.append(name, data[name][0]);
	                            } else {
	                                ++_cover__().b['22'][1];
	                            }
	                        }
	                } else {
	                        ++_cover__().b['20'][1];
	                        ++_cover__().s['83'];
	                        if (_typeof(data[name]) === 'object') {
	                            ++_cover__().b['23'][0];
	                            ++_cover__().s['84'];
	
	                            Object.keys(data[name]).forEach(function (key) {
	                                return ++_cover__().f['20'], ++_cover__().s['85'], formData.append(name + '[' + key + ']', data[name][key]);
	                            });
	                        } else {
	                            ++_cover__().b['23'][1];
	                            ++_cover__().s['86'];
	
	                            formData.append(name, data[name]);
	                        }
	                    }++_cover__().s['87'];
	                return formData;
	            }, new FormData());
	        case (++_cover__().s['68'], 'json'):
	            ++_cover__().b['18'][2]
	
	        default:
	            ++_cover__().b['18'][3]
	            ++_cover__().s['88'];
	
	            return JSON.stringify(data);
	    }
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.setLanguage = setLanguage;
	exports.translate = translate;
	exports.addTranslation = addTranslation;
	
	var _coverage__file;
	
	function _cover__() {
	    if (!_coverage__file) _coverage__file = _coverage__getInitialState();
	    return _coverage__file;
	}
	
	function _coverage__getInitialState() {
	    var path = 'D:\\projects\\jedi-validate\\src\\i18n\\jedi-validate-i18n.es6',
	        hash = 'a42912212921ee9dc9e66a4b2292076e';
	    var global = new Function('return this')();
	    var coverage = global['__coverage__'] || (global['__coverage__'] = {});
	    if (coverage[path] && coverage[path].hash === hash) return coverage[path];
	    var coverageData = global['JSON'].parse('{"path":"D:\\\\projects\\\\jedi-validate\\\\src\\\\i18n\\\\jedi-validate-i18n.es6","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0},"statementMap":{"1":{"start":{"line":1,"column":19},"end":{"line":1,"column":60}},"2":{"start":{"line":3,"column":18},"end":{"line":3,"column":22}},"3":{"start":{"line":6,"column":4},"end":{"line":6,"column":21}},"4":{"start":{"line":9,"column":39},"end":{"line":9,"column":50}},"5":{"start":{"line":10,"column":4},"end":{"line":10,"column":64}},"6":{"start":{"line":10,"column":59},"end":{"line":10,"column":63}},"7":{"start":{"line":10,"column":32},"end":{"line":10,"column":54}},"8":{"start":{"line":13,"column":66},"end":{"line":13,"column":77}},"9":{"start":{"line":14,"column":4},"end":{"line":16,"column":5}},"10":{"start":{"line":15,"column":8},"end":{"line":15,"column":30}},"11":{"start":{"line":17,"column":4},"end":{"line":17,"column":50}}},"fnMap":{"1":{"name":null,"line":5,"loc":{"start":{"line":5,"column":7},"end":{"line":7,"column":1}}},"2":{"name":null,"line":9,"loc":{"start":{"line":9,"column":7},"end":{"line":11,"column":1}}},"3":{"name":null,"line":13,"loc":{"start":{"line":13,"column":7},"end":{"line":18,"column":1}}}},"branchMap":{"1":{"line":10,"type":"binary-expr","locations":[{"start":{"line":10,"column":12},"end":{"line":10,"column":54}},{"start":{"line":10,"column":12},"end":{"line":10,"column":54}}]},"2":{"line":10,"type":"binary-expr","locations":[{"start":{"line":10,"column":12},"end":{"line":10,"column":28}},{"start":{"line":10,"column":12},"end":{"line":10,"column":28}}]},"3":{"line":14,"type":"if","locations":[{"start":{"line":14,"column":40},"end":{"line":16,"column":5}},{"start":{"line":14,"column":40},"end":{"line":16,"column":5}}]}}}');
	    coverageData.hash = hash;
	    return coverage[path] = coverageData;
	}
	
	_cover__();
	
	var dictionary = (++_cover__().s['1'], __webpack_require__(4));
	
	var currentLang = (++_cover__().s['2'], 'en');
	
	function setLanguage(id) {
	    ++_cover__().f['1'];
	    ++_cover__().s['3'];
	
	    currentLang = id;
	}
	
	function translate(text) {
	    var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (++_cover__().s['4'], currentLang);
	    ++_cover__().f['2'];
	    ++_cover__().s['5'];
	
	    return (++_cover__().b['1'][0], (++_cover__().b['2'][0], dictionary[lang]) && (++_cover__().b['2'][1], (++_cover__().s['7'], dictionary[lang][text]))) || (++_cover__().b['1'][1], (++_cover__().s['6'], text));
	}
	
	function addTranslation(sourceText, translatedText) {
	    var lang = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (++_cover__().s['8'], currentLang);
	    ++_cover__().f['3'];
	    ++_cover__().s['9'];
	
	    if (dictionary[lang] === undefined) {
	        ++_cover__().b['3'][0];
	        ++_cover__().s['10'];
	
	        dictionary[lang] = {};
	    } else {
	        ++_cover__().b['3'][1];
	    }
	    ++_cover__().s['11'];
	    dictionary[lang][sourceText] = translatedText;
	}

/***/ },
/* 4 */
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
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.validateField = validateField;
	exports.validateData = validateData;
	
	var _getData = __webpack_require__(2);
	
	var _coverage__file;
	
	function _cover__() {
	    if (!_coverage__file) _coverage__file = _coverage__getInitialState();
	    return _coverage__file;
	}
	
	function _coverage__getInitialState() {
	    var path = 'D:\\projects\\jedi-validate\\src\\lib\\validate-data.es6',
	        hash = 'fdf963d5eb7668d4ea7bbe7761d7e693';
	    var global = new Function('return this')();
	    var coverage = global['__coverage__'] || (global['__coverage__'] = {});
	    if (coverage[path] && coverage[path].hash === hash) return coverage[path];
	    var coverageData = global['JSON'].parse('{"path":"D:\\\\projects\\\\jedi-validate\\\\src\\\\lib\\\\validate-data.es6","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"statementMap":{"1":{"start":{"line":4,"column":20},"end":{"line":4,"column":49}},"2":{"start":{"line":6,"column":4},"end":{"line":8,"column":5}},"3":{"start":{"line":6,"column":19},"end":{"line":6,"column":33}},"4":{"start":{"line":7,"column":8},"end":{"line":7,"column":46}},"5":{"start":{"line":10,"column":4},"end":{"line":12,"column":5}},"6":{"start":{"line":11,"column":8},"end":{"line":11,"column":18}},"7":{"start":{"line":14,"column":4},"end":{"line":29,"column":11}},"8":{"start":{"line":15,"column":23},"end":{"line":15,"column":36}},"9":{"start":{"line":16,"column":8},"end":{"line":16,"column":35}},"10":{"start":{"line":16,"column":21},"end":{"line":16,"column":35}},"11":{"start":{"line":18,"column":8},"end":{"line":26,"column":9}},"12":{"start":{"line":19,"column":26},"end":{"line":19,"column":61}},"13":{"start":{"line":21,"column":12},"end":{"line":23,"column":13}},"14":{"start":{"line":22,"column":16},"end":{"line":22,"column":57}},"15":{"start":{"line":25,"column":12},"end":{"line":25,"column":56}},"16":{"start":{"line":28,"column":8},"end":{"line":28,"column":22}},"17":{"start":{"line":33,"column":4},"end":{"line":40,"column":11}},"18":{"start":{"line":34,"column":22},"end":{"line":34,"column":48}},"19":{"start":{"line":35,"column":23},"end":{"line":35,"column":86}},"20":{"start":{"line":36,"column":8},"end":{"line":39,"column":10}},"21":{"start":{"line":38,"column":36},"end":{"line":38,"column":42}},"22":{"start":{"line":38,"column":45},"end":{"line":38,"column":54}}},"fnMap":{"1":{"name":null,"line":3,"loc":{"start":{"line":3,"column":7},"end":{"line":30,"column":1}}},"2":{"name":null,"line":14,"loc":{"start":{"line":14,"column":37},"end":{"line":29,"column":5}}},"3":{"name":null,"line":32,"loc":{"start":{"line":32,"column":7},"end":{"line":41,"column":1}}},"4":{"name":null,"line":33,"loc":{"start":{"line":33,"column":37},"end":{"line":40,"column":5}}}},"branchMap":{"1":{"line":6,"type":"if","locations":[{"start":{"line":6,"column":35},"end":{"line":8,"column":5}},{"start":{"line":6,"column":35},"end":{"line":8,"column":5}}]},"2":{"line":6,"type":"binary-expr","locations":[{"start":{"line":6,"column":8},"end":{"line":6,"column":15}},{"start":{"line":6,"column":8},"end":{"line":6,"column":15}}]},"3":{"line":10,"type":"if","locations":[{"start":{"line":10,"column":17},"end":{"line":12,"column":5}},{"start":{"line":10,"column":17},"end":{"line":12,"column":5}}]},"4":{"line":16,"type":"if","locations":[{"start":{"line":16,"column":8},"end":{"line":16,"column":35}},{"start":{"line":16,"column":8},"end":{"line":16,"column":35}}]},"5":{"line":18,"type":"if","locations":[{"start":{"line":18,"column":29},"end":{"line":24,"column":9}},{"start":{"line":24,"column":15},"end":{"line":26,"column":9}}]},"6":{"line":21,"type":"if","locations":[{"start":{"line":21,"column":24},"end":{"line":23,"column":13}},{"start":{"line":21,"column":24},"end":{"line":23,"column":13}}]},"7":{"line":38,"type":"cond-expr","locations":[{"start":{"line":38,"column":20},"end":{"line":38,"column":54}},{"start":{"line":38,"column":20},"end":{"line":38,"column":54}}]},"8":{"line":38,"type":"cond-expr","locations":[{"start":{"line":38,"column":20},"end":{"line":38,"column":54}},{"start":{"line":38,"column":20},"end":{"line":38,"column":54}}]}}}');
	    coverageData.hash = hash;
	    return coverage[path] = coverageData;
	}
	
	_cover__();
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function validateField(rules, methods, value, name, errorMessages) {
	    ++_cover__().f['1'];
	
	    var isEmpty = (++_cover__().s['1'], !methods.required.func(value));
	
	    ++_cover__().s['2'];
	    if ((++_cover__().b['2'][0], isEmpty) && (++_cover__().b['2'][1], (++_cover__().s['3'], rules.required))) {
	        ++_cover__().b['1'][0];
	        ++_cover__().s['4'];
	
	        return [errorMessages[name].required];
	    } else {
	        ++_cover__().b['1'][1];
	    }
	
	    ++_cover__().s['5'];
	    if (isEmpty) {
	        ++_cover__().b['3'][0];
	        ++_cover__().s['6'];
	
	        return [];
	    } else {
	        ++_cover__().b['3'][1];
	    }
	
	    ++_cover__().s['7'];
	    return Object.keys(rules).reduce(function (errors, method) {
	        ++_cover__().f['2'];
	
	        var params = (++_cover__().s['8'], rules[method]);
	        ++_cover__().s['9'];
	        if (!params) {
	                ++_cover__().b['4'][0];
	                ++_cover__().s['10'];
	                return errors;
	            } else {
	            ++_cover__().b['4'][1];
	        }++_cover__().s['11'];
	        if (methods[method]) {
	            ++_cover__().b['5'][0];
	
	            var valid = (++_cover__().s['12'], methods[method].func(value, params));
	
	            ++_cover__().s['13'];
	            if (!valid) {
	                ++_cover__().b['6'][0];
	                ++_cover__().s['14'];
	
	                errors.push(errorMessages[name][method]);
	            } else {
	                ++_cover__().b['6'][1];
	            }
	        } else {
	            ++_cover__().b['5'][1];
	            ++_cover__().s['15'];
	
	            errors.push('Method "' + method + '" not found');
	        }
	
	        ++_cover__().s['16'];
	        return errors;
	    }, []);
	}
	
	function validateData(rules, methods, data, errorMessages) {
	    ++_cover__().f['3'];
	    ++_cover__().s['17'];
	
	    return Object.keys(rules).reduce(function (obj, name) {
	        ++_cover__().f['4'];
	
	        var value = (++_cover__().s['18'], (0, _getData.getValueByName)(name, data));
	        var errors = (++_cover__().s['19'], validateField(rules[name], methods, value, name, errorMessages));
	        ++_cover__().s['20'];
	        return _extends({}, obj, _defineProperty({}, name, errors.length ? (++_cover__().b['8'][0], (++_cover__().b['7'][0], (++_cover__().s['21'], errors))) : (++_cover__().b['8'][1], (++_cover__().b['7'][1], (++_cover__().s['22'], undefined)))));
	    }, {});
	}

/***/ },
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _jediValidateI18n = __webpack_require__(3);
	
	var _coverage__file;
	
	function _cover__() {
	    if (!_coverage__file) _coverage__file = _coverage__getInitialState();
	    return _coverage__file;
	}
	
	function _coverage__getInitialState() {
	    var path = 'D:\\projects\\jedi-validate\\src\\lib\\methods.es6',
	        hash = '743468aec9b90d2f730f3d50024c3738';
	    var global = new Function('return this')();
	    var coverage = global['__coverage__'] || (global['__coverage__'] = {});
	    if (coverage[path] && coverage[path].hash === hash) return coverage[path];
	    var coverageData = global['JSON'].parse('{"path":"D:\\\\projects\\\\jedi-validate\\\\src\\\\lib\\\\methods.es6","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":32,"column":2}},"2":{"start":{"line":5,"column":23},"end":{"line":5,"column":82}},"3":{"start":{"line":5,"column":32},"end":{"line":5,"column":82}},"4":{"start":{"line":5,"column":62},"end":{"line":5,"column":74}},"5":{"start":{"line":9,"column":33},"end":{"line":9,"column":51}},"6":{"start":{"line":13,"column":23},"end":{"line":13,"column":75}},"7":{"start":{"line":17,"column":31},"end":{"line":17,"column":90}},"8":{"start":{"line":17,"column":62},"end":{"line":17,"column":83}},"9":{"start":{"line":17,"column":82},"end":{"line":17,"column":83}},"10":{"start":{"line":21,"column":37},"end":{"line":21,"column":133}},"11":{"start":{"line":21,"column":68},"end":{"line":21,"column":126}},"12":{"start":{"line":21,"column":125},"end":{"line":21,"column":126}},"13":{"start":{"line":25,"column":23},"end":{"line":25,"column":72}},"14":{"start":{"line":29,"column":23},"end":{"line":29,"column":118}}},"fnMap":{"1":{"name":null,"line":5,"loc":{"start":{"line":5,"column":14},"end":{"line":5,"column":82}}},"2":{"name":null,"line":9,"loc":{"start":{"line":9,"column":14},"end":{"line":9,"column":51}}},"3":{"name":null,"line":13,"loc":{"start":{"line":13,"column":14},"end":{"line":13,"column":75}}},"4":{"name":null,"line":17,"loc":{"start":{"line":17,"column":14},"end":{"line":17,"column":90}}},"5":{"name":null,"line":17,"loc":{"start":{"line":17,"column":49},"end":{"line":17,"column":83}}},"6":{"name":null,"line":21,"loc":{"start":{"line":21,"column":14},"end":{"line":21,"column":133}}},"7":{"name":null,"line":21,"loc":{"start":{"line":21,"column":55},"end":{"line":21,"column":126}}},"8":{"name":null,"line":25,"loc":{"start":{"line":25,"column":14},"end":{"line":25,"column":72}}},"9":{"name":null,"line":29,"loc":{"start":{"line":29,"column":14},"end":{"line":29,"column":118}}}},"branchMap":{"1":{"line":5,"type":"binary-expr","locations":[{"start":{"line":5,"column":23},"end":{"line":5,"column":28}},{"start":{"line":5,"column":23},"end":{"line":5,"column":28}}]},"2":{"line":5,"type":"binary-expr","locations":[{"start":{"line":5,"column":33},"end":{"line":5,"column":58}},{"start":{"line":5,"column":33},"end":{"line":5,"column":58}}]},"3":{"line":17,"type":"binary-expr","locations":[{"start":{"line":17,"column":62},"end":{"line":17,"column":78}},{"start":{"line":17,"column":62},"end":{"line":17,"column":78}}]},"4":{"line":21,"type":"binary-expr","locations":[{"start":{"line":21,"column":68},"end":{"line":21,"column":121}},{"start":{"line":21,"column":68},"end":{"line":21,"column":121}}]}}}');
	    coverageData.hash = hash;
	    return coverage[path] = coverageData;
	}
	
	_cover__();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	++_cover__().s['1'];
	exports.default = {
	    required: {
	        func: function func(value) {
	            return ++_cover__().f['1'], ++_cover__().s['2'], (++_cover__().b['1'][0], value) && (++_cover__().b['1'][1], (++_cover__().s['3'], ((++_cover__().b['2'][0], value instanceof FileList) || (++_cover__().b['2'][1], (++_cover__().s['4'], value.trim()))) !== ''));
	        },
	        message: (0, _jediValidateI18n.translate)('This field is required')
	    },
	    regexp: {
	        func: function func(value, regexp) {
	            return ++_cover__().f['2'], ++_cover__().s['5'], regexp.test(value);
	        },
	        message: (0, _jediValidateI18n.translate)('Please, provide correct value')
	    },
	    email: {
	        func: function func(value) {
	            return ++_cover__().f['3'], ++_cover__().s['6'], /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(value);
	        },
	        message: (0, _jediValidateI18n.translate)('This email is incorrect')
	    },
	    filesize: {
	        func: function func(value, size) {
	            return ++_cover__().f['4'], ++_cover__().s['7'], [].concat(_toConsumableArray(value)).reduce(function (r, file) {
	                return ++_cover__().f['5'], ++_cover__().s['8'], (++_cover__().b['3'][0], file.size < size) && (++_cover__().b['3'][1], (++_cover__().s['9'], r));
	            }, true);
	        }, // eslint-disable-line max-len
	        message: (0, _jediValidateI18n.translate)('This file is too large')
	    },
	    extension: {
	        func: function func(value, extensions) {
	            return ++_cover__().f['6'], ++_cover__().s['10'], [].concat(_toConsumableArray(value)).reduce(function (r, file) {
	                return ++_cover__().f['7'], ++_cover__().s['11'], (++_cover__().b['4'][0], extensions.indexOf(file.name.split('.').pop()) !== -1) && (++_cover__().b['4'][1], (++_cover__().s['12'], r));
	            }, true);
	        }, // eslint-disable-line max-len
	        message: (0, _jediValidateI18n.translate)('This extension is not supported')
	    },
	    tel: {
	        func: function func(value) {
	            return ++_cover__().f['8'], ++_cover__().s['13'], /^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$/.test(value);
	        },
	        message: (0, _jediValidateI18n.translate)('This phone number is incorrect')
	    },
	    url: {
	        func: function func(value) {
	            return ++_cover__().f['9'], ++_cover__().s['14'], /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.test(value);
	        }, // eslint-disable-line max-len
	        message: (0, _jediValidateI18n.translate)('Wrong url')
	    }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _validateData = __webpack_require__(6);
	
	var _methods = __webpack_require__(8);
	
	var _methods2 = _interopRequireDefault(_methods);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _coverage__file;
	
	function _cover__() {
	    if (!_coverage__file) _coverage__file = _coverage__getInitialState();
	    return _coverage__file;
	}
	
	function _coverage__getInitialState() {
	    var path = 'D:\\projects\\jedi-validate\\tests\\test-validate-data.es6',
	        hash = 'cbdb32ec4e2be9548a4fd929f1d20938';
	    var global = new Function('return this')();
	    var coverage = global['__coverage__'] || (global['__coverage__'] = {});
	    if (coverage[path] && coverage[path].hash === hash) return coverage[path];
	    var coverageData = global['JSON'].parse('{"path":"D:\\\\projects\\\\jedi-validate\\\\tests\\\\test-validate-data.es6","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0},"b":{},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"statementMap":{"1":{"start":{"line":4,"column":14},"end":{"line":12,"column":1}},"2":{"start":{"line":14,"column":13},"end":{"line":17,"column":1}},"3":{"start":{"line":19,"column":15},"end":{"line":22,"column":1}},"4":{"start":{"line":24,"column":0},"end":{"line":24,"column":28}},"5":{"start":{"line":25,"column":0},"end":{"line":25,"column":32}},"6":{"start":{"line":26,"column":0},"end":{"line":26,"column":30}},"7":{"start":{"line":27,"column":0},"end":{"line":27,"column":34}},"8":{"start":{"line":29,"column":22},"end":{"line":37,"column":1}},"9":{"start":{"line":39,"column":0},"end":{"line":55,"column":3}},"10":{"start":{"line":40,"column":4},"end":{"line":48,"column":7}},"11":{"start":{"line":41,"column":8},"end":{"line":43,"column":11}},"12":{"start":{"line":42,"column":12},"end":{"line":42,"column":106}},"13":{"start":{"line":45,"column":8},"end":{"line":47,"column":11}},"14":{"start":{"line":46,"column":12},"end":{"line":46,"column":136}},"15":{"start":{"line":50,"column":4},"end":{"line":54,"column":7}},"16":{"start":{"line":51,"column":8},"end":{"line":53,"column":11}},"17":{"start":{"line":52,"column":12},"end":{"line":52,"column":141}}},"fnMap":{"1":{"name":null,"line":39,"loc":{"start":{"line":39,"column":26},"end":{"line":55,"column":1}}},"2":{"name":null,"line":40,"loc":{"start":{"line":40,"column":31},"end":{"line":48,"column":5}}},"3":{"name":null,"line":41,"loc":{"start":{"line":41,"column":33},"end":{"line":43,"column":9}}},"4":{"name":null,"line":45,"loc":{"start":{"line":45,"column":35},"end":{"line":47,"column":9}}},"5":{"name":null,"line":50,"loc":{"start":{"line":50,"column":30},"end":{"line":54,"column":5}}},"6":{"name":null,"line":51,"loc":{"start":{"line":51,"column":30},"end":{"line":53,"column":9}}}},"branchMap":{}}');
	    coverageData.hash = hash;
	    return coverage[path] = coverageData;
	}
	
	_cover__();
	
	var rules = (++_cover__().s['1'], {
	    phone: {
	        required: true,
	        regexp: /^\d*$/
	    },
	    phone2: {
	        regexp: /^\d*$/
	    }
	});
	
	var data = (++_cover__().s['2'], {
	    phone: '92356234',
	    phone2: 'sdfsefef'
	});
	
	var inputs = (++_cover__().s['3'], {
	    phone: document.createElement('input'),
	    phone2: document.createElement('input')
	});
	
	++_cover__().s['4'];
	inputs.phone.name = 'phone';
	++_cover__().s['5'];
	inputs.phone.value = data.phone;
	++_cover__().s['6'];
	inputs.phone2.name = 'phone2';
	++_cover__().s['7'];
	inputs.phone2.value = data.phone2;
	
	var errorMessages = (++_cover__().s['8'], {
	    phone: {
	        required: 'It is required',
	        regexp: 'Only digits available'
	    },
	    phone2: {
	        regexp: 'Only digits available'
	    }
	});
	
	++_cover__().s['9'];
	describe('Validate data', function () {
	    ++_cover__().f['1'];
	    ++_cover__().s['10'];
	
	    describe('Validate Field', function () {
	        ++_cover__().f['2'];
	        ++_cover__().s['11'];
	
	        it('Pass correct value', function () {
	            ++_cover__().f['3'];
	            ++_cover__().s['12'];
	
	            assert.deepEqual((0, _validateData.validateField)(rules.phone, _methods2.default, data.phone, 'phone', errorMessages), []);
	        });
	
	        ++_cover__().s['13'];
	        it('Pass incorrect value', function () {
	            ++_cover__().f['4'];
	            ++_cover__().s['14'];
	
	            assert.deepEqual((0, _validateData.validateField)(rules.phone2, _methods2.default, data.phone2, 'phone2', errorMessages), [errorMessages.phone2.regexp]);
	        });
	    });
	
	    ++_cover__().s['15'];
	    describe('Validate data', function () {
	        ++_cover__().f['5'];
	        ++_cover__().s['16'];
	
	        it('Validate values', function () {
	            ++_cover__().f['6'];
	            ++_cover__().s['17'];
	
	            assert.deepEqual((0, _validateData.validateData)(rules, _methods2.default, data, errorMessages), { phone: undefined, phone2: [errorMessages.phone2.regexp] });
	        });
	    });
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _getData = __webpack_require__(2);
	
	var _coverage__file;
	
	function _cover__() {
	    if (!_coverage__file) _coverage__file = _coverage__getInitialState();
	    return _coverage__file;
	}
	
	function _coverage__getInitialState() {
	    var path = 'D:\\projects\\jedi-validate\\tests\\test-get-data.es6',
	        hash = 'e33cb2a75fdbe3c1935a52d5548e4380';
	    var global = new Function('return this')();
	    var coverage = global['__coverage__'] || (global['__coverage__'] = {});
	    if (coverage[path] && coverage[path].hash === hash) return coverage[path];
	    var coverageData = global['JSON'].parse('{"path":"D:\\\\projects\\\\jedi-validate\\\\tests\\\\test-get-data.es6","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},"statementMap":{"1":{"start":{"line":14,"column":13},"end":{"line":21,"column":1}},"2":{"start":{"line":23,"column":15},"end":{"line":32,"column":1}},"3":{"start":{"line":34,"column":0},"end":{"line":34,"column":28}},"4":{"start":{"line":35,"column":0},"end":{"line":35,"column":32}},"5":{"start":{"line":36,"column":0},"end":{"line":36,"column":30}},"6":{"start":{"line":37,"column":0},"end":{"line":37,"column":34}},"7":{"start":{"line":38,"column":0},"end":{"line":38,"column":47}},"8":{"start":{"line":39,"column":0},"end":{"line":39,"column":50}},"9":{"start":{"line":41,"column":0},"end":{"line":83,"column":3}},"10":{"start":{"line":42,"column":4},"end":{"line":44,"column":7}},"11":{"start":{"line":43,"column":8},"end":{"line":43,"column":105}},"12":{"start":{"line":46,"column":4},"end":{"line":48,"column":7}},"13":{"start":{"line":47,"column":8},"end":{"line":47,"column":86}},"14":{"start":{"line":50,"column":4},"end":{"line":52,"column":7}},"15":{"start":{"line":51,"column":8},"end":{"line":51,"column":77}},"16":{"start":{"line":54,"column":4},"end":{"line":56,"column":7}},"17":{"start":{"line":55,"column":8},"end":{"line":55,"column":61}},"18":{"start":{"line":58,"column":4},"end":{"line":60,"column":7}},"19":{"start":{"line":59,"column":8},"end":{"line":59,"column":71}},"20":{"start":{"line":62,"column":4},"end":{"line":64,"column":7}},"21":{"start":{"line":63,"column":8},"end":{"line":63,"column":66}},"22":{"start":{"line":66,"column":4},"end":{"line":68,"column":7}},"23":{"start":{"line":67,"column":8},"end":{"line":67,"column":76}},"24":{"start":{"line":70,"column":4},"end":{"line":72,"column":7}},"25":{"start":{"line":71,"column":8},"end":{"line":71,"column":48}},"26":{"start":{"line":74,"column":4},"end":{"line":76,"column":7}},"27":{"start":{"line":75,"column":8},"end":{"line":75,"column":84}},"28":{"start":{"line":78,"column":4},"end":{"line":82,"column":7}},"29":{"start":{"line":79,"column":8},"end":{"line":81,"column":11}},"30":{"start":{"line":80,"column":12},"end":{"line":80,"column":123}},"31":{"start":{"line":86,"column":51},"end":{"line":86,"column":56}},"32":{"start":{"line":87,"column":23},"end":{"line":87,"column":54}},"33":{"start":{"line":89,"column":4},"end":{"line":89,"column":45}},"34":{"start":{"line":90,"column":4},"end":{"line":90,"column":27}},"35":{"start":{"line":91,"column":4},"end":{"line":91,"column":29}},"36":{"start":{"line":93,"column":4},"end":{"line":95,"column":5}},"37":{"start":{"line":94,"column":8},"end":{"line":94,"column":54}},"38":{"start":{"line":97,"column":4},"end":{"line":97,"column":22}}},"fnMap":{"1":{"name":null,"line":41,"loc":{"start":{"line":41,"column":21},"end":{"line":83,"column":1}}},"2":{"name":null,"line":42,"loc":{"start":{"line":42,"column":23},"end":{"line":44,"column":5}}},"3":{"name":null,"line":46,"loc":{"start":{"line":46,"column":28},"end":{"line":48,"column":5}}},"4":{"name":null,"line":50,"loc":{"start":{"line":50,"column":25},"end":{"line":52,"column":5}}},"5":{"name":null,"line":54,"loc":{"start":{"line":54,"column":25},"end":{"line":56,"column":5}}},"6":{"name":null,"line":58,"loc":{"start":{"line":58,"column":29},"end":{"line":60,"column":5}}},"7":{"name":null,"line":62,"loc":{"start":{"line":62,"column":24},"end":{"line":64,"column":5}}},"8":{"name":null,"line":66,"loc":{"start":{"line":66,"column":23},"end":{"line":68,"column":5}}},"9":{"name":null,"line":70,"loc":{"start":{"line":70,"column":18},"end":{"line":72,"column":5}}},"10":{"name":null,"line":74,"loc":{"start":{"line":74,"column":23},"end":{"line":76,"column":5}}},"11":{"name":null,"line":78,"loc":{"start":{"line":78,"column":28},"end":{"line":82,"column":5}}},"12":{"name":null,"line":79,"loc":{"start":{"line":79,"column":24},"end":{"line":81,"column":9}}},"13":{"name":null,"line":86,"loc":{"start":{"line":86,"column":0},"end":{"line":98,"column":1}}}},"branchMap":{"1":{"line":93,"type":"if","locations":[{"start":{"line":93,"column":17},"end":{"line":95,"column":5}},{"start":{"line":93,"column":17},"end":{"line":95,"column":5}}]}}}');
	    coverageData.hash = hash;
	    return coverage[path] = coverageData;
	}
	
	_cover__();
	
	var data = (++_cover__().s['1'], {
	    phone: '92356234',
	    phone2: 'sdfsefef',
	    radio: '2',
	    parent: {
	        child: 'value'
	    }
	});
	
	var inputs = (++_cover__().s['2'], {
	    phone: document.createElement('input'),
	    phone2: document.createElement('input'),
	    'parent[child]': document.createElement('input'),
	    radio: [createRadioElement('radio', 1), createRadioElement('radio', 2, true), createRadioElement('radio', 3)]
	});
	
	++_cover__().s['3'];
	inputs.phone.name = 'phone';
	++_cover__().s['4'];
	inputs.phone.value = data.phone;
	++_cover__().s['5'];
	inputs.phone2.name = 'phone2';
	++_cover__().s['6'];
	inputs.phone2.value = data.phone2;
	++_cover__().s['7'];
	inputs['parent[child]'].name = 'parent[child]';
	++_cover__().s['8'];
	inputs['parent[child]'].value = data.parent.child;
	
	++_cover__().s['9'];
	describe('Get data', function () {
	    ++_cover__().f['1'];
	    ++_cover__().s['10'];
	
	    it('createObject', function () {
	        ++_cover__().f['2'];
	        ++_cover__().s['11'];
	
	        assert.deepEqual((0, _getData.createObject)(['parent', 'child', ''], 'value'), { parent: { child: 'value' } }); // todo think about ''
	    });
	
	    ++_cover__().s['12'];
	    it('convertNameToPath', function () {
	        ++_cover__().f['3'];
	        ++_cover__().s['13'];
	
	        assert.deepEqual((0, _getData.convertNameToPath)('parent[child]'), ['parent', 'child', '']); // todo think about ''
	    });
	
	    ++_cover__().s['14'];
	    it('getValueByPath', function () {
	        ++_cover__().f['4'];
	        ++_cover__().s['15'];
	
	        assert.deepEqual((0, _getData.getValueByPath)(['parent', 'child'], data), 'value');
	    });
	
	    ++_cover__().s['16'];
	    it('getValueByName', function () {
	        ++_cover__().f['5'];
	        ++_cover__().s['17'];
	
	        assert.deepEqual((0, _getData.getValueByName)('radio', data), '2');
	    });
	
	    ++_cover__().s['18'];
	    it('getRadioGroupValue', function () {
	        ++_cover__().f['6'];
	        ++_cover__().s['19'];
	
	        assert.deepEqual((0, _getData.getRadioGroupValue)(inputs.radio), data.radio);
	    });
	
	    ++_cover__().s['20'];
	    it('getInputValue', function () {
	        ++_cover__().f['7'];
	        ++_cover__().s['21'];
	
	        assert.deepEqual((0, _getData.getInputValue)(inputs.phone), data.phone);
	    });
	
	    ++_cover__().s['22'];
	    it('getInputData', function () {
	        ++_cover__().f['8'];
	        ++_cover__().s['23'];
	
	        assert.deepEqual((0, _getData.getInputData)(inputs.phone), { phone: data.phone });
	    });
	
	    ++_cover__().s['24'];
	    it('getData', function () {
	        ++_cover__().f['9'];
	        ++_cover__().s['25'];
	
	        assert.deepEqual((0, _getData.getData)(inputs), data);
	    });
	
	    ++_cover__().s['26'];
	    it('getQueryPart', function () {
	        ++_cover__().f['10'];
	        ++_cover__().s['27'];
	
	        assert.deepEqual((0, _getData.getQueryPart)('phone', data.phone), 'phone=' + data.phone + '&');
	    });
	
	    ++_cover__().s['28'];
	    describe('convertData', function () {
	        ++_cover__().f['11'];
	        ++_cover__().s['29'];
	
	        it('serialize', function () {
	            ++_cover__().f['12'];
	            ++_cover__().s['30'];
	
	            assert.deepEqual((0, _getData.convertData)(data, 'serialize'), 'phone=92356234&phone2=sdfsefef&radio=2&parent[child]=value');
	        });
	    });
	});
	
	function createRadioElement(name, value) {
	    var checked = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (++_cover__().s['31'], false);
	    ++_cover__().f['13'];
	
	    var radioInput = (++_cover__().s['32'], document.createElement('input'));
	
	    ++_cover__().s['33'];
	    radioInput.setAttribute('type', 'radio');
	    ++_cover__().s['34'];
	    radioInput.name = name;
	    ++_cover__().s['35'];
	    radioInput.value = value;
	
	    ++_cover__().s['36'];
	    if (checked) {
	        ++_cover__().b['1'][0];
	        ++_cover__().s['37'];
	
	        radioInput.setAttribute('checked', 'checked');
	    } else {
	        ++_cover__().b['1'][1];
	    }
	
	    ++_cover__().s['38'];
	    return radioInput;
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=tests.js.map