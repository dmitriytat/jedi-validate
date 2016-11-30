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
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _deepmerge = __webpack_require__(1);
	
	var _deepmerge2 = _interopRequireDefault(_deepmerge);
	
	var _getData = __webpack_require__(2);
	
	var _jediValidateI18n = __webpack_require__(3);
	
	var _getOptions = __webpack_require__(5);
	
	var _validateData = __webpack_require__(6);
	
	var _ajax = __webpack_require__(7);
	
	var _methods = __webpack_require__(8);
	
	var _methods2 = _interopRequireDefault(_methods);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _coverage__file;
	
	function _cover__() {
	    if (!_coverage__file) _coverage__file = _coverage__getInitialState();
	    return _coverage__file;
	}
	
	function _coverage__getInitialState() {
	    var path = 'D:\\projects\\jedi-validate\\src\\jedi-validate.es6',
	        hash = '4ef536232580cc91615278c259567206';
	    var global = new Function('return this')();
	    var coverage = global['__coverage__'] || (global['__coverage__'] = {});
	    if (coverage[path] && coverage[path].hash === hash) return coverage[path];
	    var coverageData = global['JSON'].parse('{"path":"D:\\\\projects\\\\jedi-validate\\\\src\\\\jedi-validate.es6","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"93":0,"94":0,"95":0,"96":0,"97":0,"98":0,"99":0,"100":0,"101":0,"102":0,"103":0,"104":0,"105":0,"106":0,"107":0,"108":0,"109":0,"110":0,"111":0,"112":0,"113":0,"114":0,"115":0,"116":0,"117":0,"118":0,"119":0,"120":0,"121":0,"122":0,"123":0,"124":0,"125":0,"126":0,"127":0,"128":0,"129":0,"130":0,"131":0,"132":0,"133":0,"134":0,"135":0,"136":0,"137":0,"138":0,"139":0,"140":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0],"23":[0,0],"24":[0,0],"25":[0,0],"26":[0,0],"27":[0,0],"28":[0,0],"29":[0,0],"30":[0,0],"31":[0,0],"32":[0,0],"33":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0},"statementMap":{"1":{"start":{"line":9,"column":0},"end":{"line":352,"column":1}},"2":{"start":{"line":10,"column":32},"end":{"line":10,"column":34}},"3":{"start":{"line":11,"column":31},"end":{"line":42,"column":9}},"4":{"start":{"line":44,"column":8},"end":{"line":44,"column":25}},"5":{"start":{"line":46,"column":8},"end":{"line":46,"column":58}},"6":{"start":{"line":48,"column":8},"end":{"line":48,"column":25}},"7":{"start":{"line":49,"column":8},"end":{"line":49,"column":25}},"8":{"start":{"line":50,"column":8},"end":{"line":50,"column":27}},"9":{"start":{"line":51,"column":8},"end":{"line":51,"column":32}},"10":{"start":{"line":52,"column":8},"end":{"line":52,"column":23}},"11":{"start":{"line":53,"column":8},"end":{"line":53,"column":38}},"12":{"start":{"line":55,"column":8},"end":{"line":55,"column":62}},"13":{"start":{"line":57,"column":28},"end":{"line":57,"column":59}},"14":{"start":{"line":59,"column":8},"end":{"line":59,"column":63}},"15":{"start":{"line":60,"column":8},"end":{"line":60,"column":60}},"16":{"start":{"line":61,"column":8},"end":{"line":61,"column":56}},"17":{"start":{"line":63,"column":8},"end":{"line":63,"column":47}},"18":{"start":{"line":65,"column":8},"end":{"line":65,"column":43}},"19":{"start":{"line":67,"column":8},"end":{"line":75,"column":11}},"20":{"start":{"line":68,"column":12},"end":{"line":74,"column":15}},"21":{"start":{"line":69,"column":16},"end":{"line":73,"column":18}},"22":{"start":{"line":77,"column":8},"end":{"line":77,"column":21}},"23":{"start":{"line":79,"column":8},"end":{"line":83,"column":10}},"24":{"start":{"line":97,"column":8},"end":{"line":101,"column":10}},"25":{"start":{"line":105,"column":8},"end":{"line":105,"column":65}},"26":{"start":{"line":107,"column":8},"end":{"line":156,"column":11}},"27":{"start":{"line":108,"column":12},"end":{"line":108,"column":35}},"28":{"start":{"line":109,"column":12},"end":{"line":109,"column":45}},"29":{"start":{"line":110,"column":12},"end":{"line":110,"column":35}},"30":{"start":{"line":112,"column":27},"end":{"line":117,"column":13}},"31":{"start":{"line":119,"column":12},"end":{"line":137,"column":13}},"32":{"start":{"line":119,"column":26},"end":{"line":119,"column":87}},"33":{"start":{"line":119,"column":61},"end":{"line":119,"column":73}},"34":{"start":{"line":120,"column":16},"end":{"line":127,"column":18}},"35":{"start":{"line":121,"column":20},"end":{"line":126,"column":21}},"36":{"start":{"line":129,"column":16},"end":{"line":133,"column":17}},"37":{"start":{"line":130,"column":20},"end":{"line":130,"column":57}},"38":{"start":{"line":132,"column":20},"end":{"line":132,"column":37}},"39":{"start":{"line":135,"column":16},"end":{"line":135,"column":39}},"40":{"start":{"line":136,"column":16},"end":{"line":136,"column":23}},"41":{"start":{"line":139,"column":12},"end":{"line":149,"column":13}},"42":{"start":{"line":140,"column":16},"end":{"line":140,"column":39}},"43":{"start":{"line":142,"column":16},"end":{"line":146,"column":17}},"44":{"start":{"line":143,"column":20},"end":{"line":143,"column":66}},"45":{"start":{"line":145,"column":20},"end":{"line":145,"column":37}},"46":{"start":{"line":148,"column":16},"end":{"line":148,"column":23}},"47":{"start":{"line":152,"column":12},"end":{"line":155,"column":15}},"48":{"start":{"line":158,"column":8},"end":{"line":236,"column":11}},"49":{"start":{"line":159,"column":25},"end":{"line":159,"column":35}},"50":{"start":{"line":161,"column":12},"end":{"line":208,"column":13}},"51":{"start":{"line":162,"column":16},"end":{"line":168,"column":17}},"52":{"start":{"line":163,"column":20},"end":{"line":163,"column":50}},"53":{"start":{"line":165,"column":39},"end":{"line":165,"column":65}},"54":{"start":{"line":166,"column":20},"end":{"line":166,"column":43}},"55":{"start":{"line":167,"column":20},"end":{"line":167,"column":51}},"56":{"start":{"line":170,"column":16},"end":{"line":170,"column":42}},"57":{"start":{"line":172,"column":28},"end":{"line":172,"column":44}},"58":{"start":{"line":174,"column":16},"end":{"line":181,"column":32}},"59":{"start":{"line":175,"column":20},"end":{"line":178,"column":21}},"60":{"start":{"line":176,"column":24},"end":{"line":176,"column":50}},"61":{"start":{"line":177,"column":24},"end":{"line":177,"column":30}},"62":{"start":{"line":180,"column":20},"end":{"line":180,"column":45}},"63":{"start":{"line":183,"column":16},"end":{"line":185,"column":17}},"64":{"start":{"line":184,"column":20},"end":{"line":184,"column":60}},"65":{"start":{"line":187,"column":16},"end":{"line":187,"column":78}},"66":{"start":{"line":189,"column":39},"end":{"line":189,"column":109}},"67":{"start":{"line":191,"column":16},"end":{"line":197,"column":17}},"68":{"start":{"line":192,"column":20},"end":{"line":192,"column":57}},"69":{"start":{"line":194,"column":20},"end":{"line":194,"column":72}},"70":{"start":{"line":195,"column":20},"end":{"line":195,"column":87}},"71":{"start":{"line":196,"column":20},"end":{"line":196,"column":71}},"72":{"start":{"line":199,"column":16},"end":{"line":199,"column":58}},"73":{"start":{"line":199,"column":55},"end":{"line":199,"column":57}},"74":{"start":{"line":200,"column":35},"end":{"line":200,"column":55}},"75":{"start":{"line":201,"column":16},"end":{"line":201,"column":75}},"76":{"start":{"line":203,"column":16},"end":{"line":207,"column":19}},"77":{"start":{"line":204,"column":20},"end":{"line":206,"column":21}},"78":{"start":{"line":205,"column":24},"end":{"line":205,"column":62}},"79":{"start":{"line":211,"column":12},"end":{"line":230,"column":15}},"80":{"start":{"line":212,"column":16},"end":{"line":212,"column":78}},"81":{"start":{"line":214,"column":34},"end":{"line":214,"column":53}},"82":{"start":{"line":215,"column":30},"end":{"line":215,"column":61}},"83":{"start":{"line":217,"column":16},"end":{"line":220,"column":18}},"84":{"start":{"line":222,"column":31},"end":{"line":228,"column":17}},"85":{"start":{"line":229,"column":16},"end":{"line":229,"column":100}},"86":{"start":{"line":232,"column":12},"end":{"line":235,"column":15}},"87":{"start":{"line":233,"column":16},"end":{"line":233,"column":81}},"88":{"start":{"line":234,"column":16},"end":{"line":234,"column":75}},"89":{"start":{"line":240,"column":8},"end":{"line":287,"column":11}},"90":{"start":{"line":241,"column":12},"end":{"line":280,"column":13}},"91":{"start":{"line":242,"column":16},"end":{"line":246,"column":17}},"92":{"start":{"line":243,"column":20},"end":{"line":243,"column":76}},"93":{"start":{"line":245,"column":20},"end":{"line":245,"column":37}},"94":{"start":{"line":248,"column":16},"end":{"line":255,"column":17}},"95":{"start":{"line":249,"column":20},"end":{"line":249,"column":97}},"96":{"start":{"line":250,"column":20},"end":{"line":250,"column":102}},"97":{"start":{"line":251,"column":20},"end":{"line":251,"column":105}},"98":{"start":{"line":252,"column":20},"end":{"line":252,"column":58}},"99":{"start":{"line":254,"column":20},"end":{"line":254,"column":58}},"100":{"start":{"line":257,"column":16},"end":{"line":264,"column":18}},"101":{"start":{"line":258,"column":20},"end":{"line":263,"column":21}},"102":{"start":{"line":266,"column":16},"end":{"line":270,"column":17}},"103":{"start":{"line":267,"column":20},"end":{"line":267,"column":61}},"104":{"start":{"line":269,"column":20},"end":{"line":269,"column":37}},"105":{"start":{"line":272,"column":16},"end":{"line":275,"column":17}},"106":{"start":{"line":272,"column":45},"end":{"line":272,"column":62}},"107":{"start":{"line":273,"column":20},"end":{"line":273,"column":61}},"108":{"start":{"line":274,"column":20},"end":{"line":274,"column":27}},"109":{"start":{"line":277,"column":16},"end":{"line":279,"column":17}},"110":{"start":{"line":278,"column":20},"end":{"line":278,"column":44}},"111":{"start":{"line":282,"column":12},"end":{"line":282,"column":71}},"112":{"start":{"line":284,"column":12},"end":{"line":284,"column":68}},"113":{"start":{"line":285,"column":12},"end":{"line":285,"column":94}},"114":{"start":{"line":286,"column":12},"end":{"line":286,"column":97}},"115":{"start":{"line":298,"column":8},"end":{"line":302,"column":9}},"116":{"start":{"line":298,"column":22},"end":{"line":298,"column":35}},"117":{"start":{"line":299,"column":12},"end":{"line":299,"column":59}},"118":{"start":{"line":301,"column":12},"end":{"line":301,"column":51}},"119":{"start":{"line":314,"column":8},"end":{"line":316,"column":9}},"120":{"start":{"line":314,"column":22},"end":{"line":314,"column":30}},"121":{"start":{"line":315,"column":12},"end":{"line":315,"column":19}},"122":{"start":{"line":318,"column":8},"end":{"line":318,"column":35}},"123":{"start":{"line":319,"column":8},"end":{"line":319,"column":38}},"124":{"start":{"line":321,"column":8},"end":{"line":321,"column":46}},"125":{"start":{"line":325,"column":8},"end":{"line":327,"column":9}},"126":{"start":{"line":325,"column":22},"end":{"line":325,"column":30}},"127":{"start":{"line":326,"column":12},"end":{"line":326,"column":19}},"128":{"start":{"line":329,"column":8},"end":{"line":329,"column":35}},"129":{"start":{"line":330,"column":8},"end":{"line":330,"column":38}},"130":{"start":{"line":332,"column":8},"end":{"line":332,"column":31}},"131":{"start":{"line":336,"column":8},"end":{"line":339,"column":10}},"132":{"start":{"line":344,"column":8},"end":{"line":350,"column":16}},"133":{"start":{"line":344,"column":59},"end":{"line":350,"column":9}},"134":{"start":{"line":346,"column":76},"end":{"line":349,"column":13}},"135":{"start":{"line":348,"column":120},"end":{"line":348,"column":122}},"136":{"start":{"line":348,"column":73},"end":{"line":348,"column":115}},"137":{"start":{"line":348,"column":45},"end":{"line":348,"column":67}},"138":{"start":{"line":348,"column":92},"end":{"line":348,"column":115}},"139":{"start":{"line":87,"column":8},"end":{"line":87,"column":61}},"140":{"start":{"line":354,"column":0},"end":{"line":354,"column":30}}},"fnMap":{"1":{"name":null,"line":10,"loc":{"start":{"line":10,"column":4},"end":{"line":84,"column":5}}},"2":{"name":null,"line":67,"loc":{"start":{"line":67,"column":55},"end":{"line":75,"column":9}}},"3":{"name":null,"line":68,"loc":{"start":{"line":68,"column":69},"end":{"line":74,"column":13}}},"4":{"name":null,"line":107,"loc":{"start":{"line":107,"column":51},"end":{"line":156,"column":9}}},"5":{"name":null,"line":119,"loc":{"start":{"line":119,"column":53},"end":{"line":119,"column":73}}},"6":{"name":null,"line":120,"loc":{"start":{"line":120,"column":44},"end":{"line":126,"column":21}}},"7":{"name":null,"line":158,"loc":{"start":{"line":158,"column":34},"end":{"line":236,"column":9}}},"8":{"name":null,"line":203,"loc":{"start":{"line":203,"column":54},"end":{"line":207,"column":17}}},"9":{"name":null,"line":211,"loc":{"start":{"line":211,"column":45},"end":{"line":230,"column":13}}},"10":{"name":null,"line":232,"loc":{"start":{"line":232,"column":44},"end":{"line":235,"column":13}}},"11":{"name":null,"line":240,"loc":{"start":{"line":240,"column":27},"end":{"line":281,"column":9}}},"12":{"name":null,"line":257,"loc":{"start":{"line":257,"column":63},"end":{"line":263,"column":21}}},"13":{"name":null,"line":281,"loc":{"start":{"line":281,"column":17},"end":{"line":287,"column":9}}},"14":{"name":null,"line":344,"loc":{"start":{"line":344,"column":41},"end":{"line":350,"column":10}}},"15":{"name":null,"line":346,"loc":{"start":{"line":346,"column":52},"end":{"line":349,"column":14}}},"16":{"name":null,"line":346,"loc":{"start":{"line":346,"column":52},"end":{"line":349,"column":14}}}},"branchMap":{"1":{"line":119,"type":"if","locations":[{"start":{"line":119,"column":89},"end":{"line":137,"column":13}},{"start":{"line":119,"column":89},"end":{"line":137,"column":13}}]},"2":{"line":119,"type":"binary-expr","locations":[{"start":{"line":119,"column":16},"end":{"line":119,"column":22}},{"start":{"line":119,"column":16},"end":{"line":119,"column":22}}]},"3":{"line":139,"type":"if","locations":[{"start":{"line":139,"column":35},"end":{"line":141,"column":13}},{"start":{"line":141,"column":19},"end":{"line":149,"column":13}}]},"4":{"line":161,"type":"if","locations":[{"start":{"line":161,"column":35},"end":{"line":169,"column":13}},{"start":{"line":169,"column":19},"end":{"line":208,"column":13}}]},"5":{"line":162,"type":"if","locations":[{"start":{"line":162,"column":54},"end":{"line":164,"column":17}},{"start":{"line":164,"column":23},"end":{"line":168,"column":17}}]},"6":{"line":175,"type":"if","locations":[{"start":{"line":175,"column":82},"end":{"line":178,"column":21}},{"start":{"line":175,"column":82},"end":{"line":178,"column":21}}]},"7":{"line":183,"type":"if","locations":[{"start":{"line":183,"column":40},"end":{"line":185,"column":17}},{"start":{"line":183,"column":40},"end":{"line":185,"column":17}}]},"8":{"line":191,"type":"if","locations":[{"start":{"line":191,"column":36},"end":{"line":193,"column":17}},{"start":{"line":193,"column":23},"end":{"line":197,"column":17}}]},"9":{"line":199,"type":"binary-expr","locations":[{"start":{"line":199,"column":35},"end":{"line":199,"column":51}},{"start":{"line":199,"column":35},"end":{"line":199,"column":51}}]},"10":{"line":204,"type":"if","locations":[{"start":{"line":204,"column":48},"end":{"line":206,"column":21}},{"start":{"line":204,"column":48},"end":{"line":206,"column":21}}]},"11":{"line":241,"type":"if","locations":[{"start":{"line":241,"column":43},"end":{"line":265,"column":13}},{"start":{"line":265,"column":19},"end":{"line":280,"column":13}}]},"12":{"line":248,"type":"if","locations":[{"start":{"line":248,"column":52},"end":{"line":253,"column":17}},{"start":{"line":253,"column":23},"end":{"line":255,"column":17}}]},"13":{"line":272,"type":"if","locations":[{"start":{"line":272,"column":64},"end":{"line":275,"column":17}},{"start":{"line":272,"column":64},"end":{"line":275,"column":17}}]},"14":{"line":272,"type":"binary-expr","locations":[{"start":{"line":272,"column":20},"end":{"line":272,"column":41}},{"start":{"line":272,"column":20},"end":{"line":272,"column":41}}]},"15":{"line":277,"type":"if","locations":[{"start":{"line":277,"column":40},"end":{"line":279,"column":17}},{"start":{"line":277,"column":40},"end":{"line":279,"column":17}}]},"16":{"line":298,"type":"if","locations":[{"start":{"line":298,"column":37},"end":{"line":300,"column":9}},{"start":{"line":300,"column":15},"end":{"line":302,"column":9}}]},"17":{"line":298,"type":"binary-expr","locations":[{"start":{"line":298,"column":12},"end":{"line":298,"column":18}},{"start":{"line":298,"column":12},"end":{"line":298,"column":18}}]},"18":{"line":314,"type":"if","locations":[{"start":{"line":314,"column":32},"end":{"line":316,"column":9}},{"start":{"line":314,"column":32},"end":{"line":316,"column":9}}]},"19":{"line":314,"type":"binary-expr","locations":[{"start":{"line":314,"column":12},"end":{"line":314,"column":18}},{"start":{"line":314,"column":12},"end":{"line":314,"column":18}}]},"20":{"line":325,"type":"if","locations":[{"start":{"line":325,"column":32},"end":{"line":327,"column":9}},{"start":{"line":325,"column":32},"end":{"line":327,"column":9}}]},"21":{"line":325,"type":"binary-expr","locations":[{"start":{"line":325,"column":12},"end":{"line":325,"column":18}},{"start":{"line":325,"column":12},"end":{"line":325,"column":18}}]},"22":{"line":348,"type":"binary-expr","locations":[{"start":{"line":348,"column":26},"end":{"line":348,"column":116}},{"start":{"line":348,"column":26},"end":{"line":348,"column":116}}]},"23":{"line":348,"type":"binary-expr","locations":[{"start":{"line":348,"column":27},"end":{"line":348,"column":67}},{"start":{"line":348,"column":27},"end":{"line":348,"column":67}}]},"24":{"line":348,"type":"binary-expr","locations":[{"start":{"line":348,"column":27},"end":{"line":348,"column":41}},{"start":{"line":348,"column":27},"end":{"line":348,"column":41}}]},"25":{"line":348,"type":"binary-expr","locations":[{"start":{"line":348,"column":73},"end":{"line":348,"column":88}},{"start":{"line":348,"column":73},"end":{"line":348,"column":88}}]},"26":{"line":348,"type":"binary-expr","locations":[{"start":{"line":348,"column":26},"end":{"line":348,"column":122}},{"start":{"line":348,"column":26},"end":{"line":348,"column":122}}]},"27":{"line":348,"type":"binary-expr","locations":[{"start":{"line":348,"column":26},"end":{"line":348,"column":116}},{"start":{"line":348,"column":26},"end":{"line":348,"column":116}}]},"28":{"line":348,"type":"binary-expr","locations":[{"start":{"line":348,"column":27},"end":{"line":348,"column":67}},{"start":{"line":348,"column":27},"end":{"line":348,"column":67}}]},"29":{"line":348,"type":"binary-expr","locations":[{"start":{"line":348,"column":73},"end":{"line":348,"column":115}},{"start":{"line":348,"column":73},"end":{"line":348,"column":115}}]},"30":{"line":348,"type":"binary-expr","locations":[{"start":{"line":348,"column":26},"end":{"line":348,"column":122}},{"start":{"line":348,"column":26},"end":{"line":348,"column":122}}]},"31":{"line":348,"type":"binary-expr","locations":[{"start":{"line":348,"column":26},"end":{"line":348,"column":116}},{"start":{"line":348,"column":26},"end":{"line":348,"column":116}}]},"32":{"line":348,"type":"binary-expr","locations":[{"start":{"line":348,"column":27},"end":{"line":348,"column":67}},{"start":{"line":348,"column":27},"end":{"line":348,"column":67}}]},"33":{"line":348,"type":"binary-expr","locations":[{"start":{"line":348,"column":73},"end":{"line":348,"column":115}},{"start":{"line":348,"column":73},"end":{"line":348,"column":115}}]}}}');
	    coverageData.hash = hash;
	    return coverage[path] = coverageData;
	}
	
	_cover__();
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var JediValidate = (++_cover__().s['1'], function () {
	    function JediValidate(root) {
	        var _this = this;
	
	        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (++_cover__().s['2'], {});
	        ++_cover__().f['1'];
	
	        _classCallCheck(this, JediValidate);
	
	        var defaultOptions = (++_cover__().s['3'], {
	            ajax: {
	                url: null,
	                enctype: 'application/x-www-form-urlencoded',
	                sendType: 'serialize', // 'serialize', 'formData', 'json'
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
	            redirect: true,
	            language: 'en',
	            translations: {}
	        });
	
	        ++_cover__().s['4'];
	        this.root = root;
	
	        ++_cover__().s['5'];
	        this.options = (0, _deepmerge2.default)(defaultOptions, options);
	
	        ++_cover__().s['6'];
	        this.fields = {};
	        ++_cover__().s['7'];
	        this.inputs = {};
	        ++_cover__().s['8'];
	        this.messages = {}; // object with message nodes
	        ++_cover__().s['9'];
	        this.errorMessages = {}; // object with error strings
	        ++_cover__().s['10'];
	        this.data = {};
	        ++_cover__().s['11'];
	        this.methods = _methods2.default;
	
	        ++_cover__().s['12'];
	        this.nodes = this.cacheNodes(this.root, this.options);
	
	        var formOptions = (++_cover__().s['13'], (0, _getOptions.getFormOptions)(this.nodes.form));
	
	        ++_cover__().s['14'];
	        this.options = (0, _deepmerge2.default)(this.options, defaultOptions);
	        ++_cover__().s['15'];
	        this.options = (0, _deepmerge2.default)(this.options, formOptions);
	        ++_cover__().s['16'];
	        this.options = (0, _deepmerge2.default)(this.options, options);
	
	        ++_cover__().s['17'];
	        this.rules = _extends({}, this.options.rules);
	
	        ++_cover__().s['18'];
	        (0, _jediValidateI18n.setLanguage)(this.options.language);
	
	        ++_cover__().s['19'];
	        Object.keys(this.options.translations).forEach(function (language) {
	            ++_cover__().f['2'];
	            ++_cover__().s['20'];
	
	            Object.keys(_this.options.translations[language]).forEach(function (translation) {
	                ++_cover__().f['3'];
	                ++_cover__().s['21'];
	
	                (0, _jediValidateI18n.addTranslation)(translation, _this.options.translations[language][translation], language);
	            });
	        });
	
	        ++_cover__().s['22'];
	        this.ready();
	
	        ++_cover__().s['23'];
	        this.errorMessages = this.initErrorMessages(this.rules, this.options.messages, this.methods);
	    }
	
	    _createClass(JediValidate, [{
	        key: 'cacheNodes',
	
	
	        /**
	         * Return object with working elements
	         * @param root Root element for search
	         * @param options Object with selectors
	         * @returns {{form: Element, inputs: NodeList, baseMessage: Element}}
	         */
	        value: function cacheNodes(root, options) {
	            ++_cover__().s['24'];
	
	            return {
	                form: root.querySelector('form'),
	                inputs: root.querySelectorAll('[name]'),
	                baseMessage: root.querySelector('.' + options.containers.baseMessage)
	            };
	        }
	    }, {
	        key: 'ready',
	        value: function ready() {
	            var _this2 = this;
	
	            ++_cover__().s['25'];
	
	            this.nodes.form.setAttribute('novalidate', 'novalidate');
	
	            ++_cover__().s['26'];
	            this.nodes.form.addEventListener('submit', function (event) {
	                ++_cover__().f['4'];
	                ++_cover__().s['27'];
	
	                event.preventDefault();
	                ++_cover__().s['28'];
	                _this2.data = (0, _getData.getData)(_this2.inputs);
	                ++_cover__().s['29'];
	                console.log(_this2.data);
	
	                var errors = (++_cover__().s['30'], (0, _validateData.validateData)(_this2.rules, _this2.methods, _this2.data, _this2.errorMessages));
	
	                ++_cover__().s['31'];
	                if ((++_cover__().b['2'][0], errors) && (++_cover__().b['2'][1], (++_cover__().s['32'], Object.keys(errors).filter(function (name) {
	                    return ++_cover__().f['5'], ++_cover__().s['33'], errors[name];
	                }).length !== 0))) {
	                    ++_cover__().b['1'][0];
	                    ++_cover__().s['34'];
	
	                    Object.keys(errors).forEach(function (name) {
	                        return ++_cover__().f['6'], ++_cover__().s['35'], _this2.markField(_this2.fields[name], _this2.messages[name], _this2.options.states, errors[name]);
	                    });
	
	                    ++_cover__().s['36'];
	                    try {
	                        ++_cover__().s['37'];
	
	                        _this2.options.callbacks.error(errors);
	                    } catch (e) {
	                        ++_cover__().s['38'];
	
	                        console.error(e);
	                    }
	
	                    ++_cover__().s['39'];
	                    event.preventDefault();
	                    ++_cover__().s['40'];
	                    return;
	                } else {
	                    ++_cover__().b['1'][1];
	                }
	
	                ++_cover__().s['41'];
	                if (_this2.options.ajax) {
	                    ++_cover__().b['3'][0];
	                    ++_cover__().s['42'];
	                    // todo check without (&& this.options.ajax.url)
	                    event.preventDefault();
	                } else {
	                    ++_cover__().b['3'][1];
	                    ++_cover__().s['43'];
	
	                    try {
	                        ++_cover__().s['44'];
	
	                        _this2.options.callbacks.success(errors, event);
	                    } catch (e) {
	                        ++_cover__().s['45'];
	
	                        console.error(e);
	                    }
	
	                    ++_cover__().s['46'];
	                    return;
	                }
	
	                // fix get opt data
	                ++_cover__().s['47'];
	                _this2.send(_extends({}, _this2.options.ajax, {
	                    data: (0, _getData.convertData)(_this2.data, _this2.options.ajax.sendType)
	                }));
	            });
	
	            ++_cover__().s['48'];
	            this.nodes.inputs.forEach(function (input) {
	                ++_cover__().f['7'];
	
	                var name = (++_cover__().s['49'], input.name);
	
	                ++_cover__().s['50'];
	                if (_this2.inputs[name]) {
	                    ++_cover__().b['4'][0];
	                    ++_cover__().s['51'];
	
	                    if (Array.isArray(_this2.inputs[name])) {
	                        ++_cover__().b['5'][0];
	                        ++_cover__().s['52'];
	
	                        _this2.inputs[name].push(input);
	                    } else {
	                        ++_cover__().b['5'][1];
	
	                        var groupInput = (++_cover__().s['53'], [_this2.inputs[name], input]);
	                        ++_cover__().s['54'];
	                        groupInput.name = name;
	                        ++_cover__().s['55'];
	                        _this2.inputs[name] = groupInput;
	                    }
	                } else {
	                    ++_cover__().b['4'][1];
	                    ++_cover__().s['56'];
	
	                    _this2.inputs[name] = input;
	
	                    var field = (++_cover__().s['57'], input.parentNode);
	
	                    ++_cover__().s['58'];
	                    do {
	                        ++_cover__().s['59'];
	
	                        if (field.classList.contains(_this2.options.containers.parent)) {
	                            ++_cover__().b['6'][0];
	                            ++_cover__().s['60'];
	
	                            _this2.fields[name] = field;
	                            ++_cover__().s['61'];
	                            break;
	                        } else {
	                            ++_cover__().b['6'][1];
	                        }
	
	                        ++_cover__().s['62'];
	                        field = field.parentNode;
	                    } while (field);
	
	                    ++_cover__().s['63'];
	                    if (!_this2.fields[name]) {
	                        ++_cover__().b['7'][0];
	                        ++_cover__().s['64'];
	
	                        throw new Error('Have no parent field');
	                    } else {
	                        ++_cover__().b['7'][1];
	                    }
	
	                    ++_cover__().s['65'];
	                    _this2.fields[name].classList.add(_this2.options.states.pristine);
	
	                    var messageElement = (++_cover__().s['66'], _this2.fields[name].querySelector('.' + _this2.options.containers.message));
	
	                    ++_cover__().s['67'];
	                    if (messageElement) {
	                        ++_cover__().b['8'][0];
	                        ++_cover__().s['68'];
	
	                        _this2.messages[name] = messageElement;
	                    } else {
	                        ++_cover__().b['8'][1];
	                        ++_cover__().s['69'];
	
	                        _this2.messages[name] = document.createElement('div');
	                        ++_cover__().s['70'];
	                        _this2.messages[name].classList.add(_this2.options.containers.message);
	                        ++_cover__().s['71'];
	                        _this2.fields[name].appendChild(_this2.messages[name]);
	                    }
	
	                    ++_cover__().s['72'];
	                    _this2.rules[name] = (++_cover__().b['9'][0], _this2.rules[name]) || (++_cover__().b['9'][1], (++_cover__().s['73'], {}));
	                    var inputRules = (++_cover__().s['74'], (0, _getOptions.getInputRules)(input));
	                    ++_cover__().s['75'];
	                    _this2.rules[name] = (0, _deepmerge2.default)(_this2.rules[name], inputRules);
	
	                    ++_cover__().s['76'];
	                    Object.keys(_this2.rules[name]).forEach(function (rule) {
	                        ++_cover__().f['8'];
	                        ++_cover__().s['77'];
	
	                        if (_this2.rules[name][rule]) {
	                            ++_cover__().b['10'][0];
	                            ++_cover__().s['78'];
	
	                            _this2.fields[name].classList.add(rule);
	                        } else {
	                            ++_cover__().b['10'][1];
	                        }
	                    });
	                }
	
	                // todo think about
	                ++_cover__().s['79'];
	                input.addEventListener('change', function () {
	                    ++_cover__().f['9'];
	                    ++_cover__().s['80'];
	
	                    _this2.fields[name].classList.remove(_this2.options.states.dirty);
	
	                    var inputData = (++_cover__().s['81'], (0, _getData.getInputData)(input));
	                    var value = (++_cover__().s['82'], (0, _getData.getValueByName)(name, inputData));
	
	                    ++_cover__().s['83'];
	                    _this2.data = _extends({}, _this2.data, inputData);
	
	                    var errors = (++_cover__().s['84'], (0, _validateData.validateField)(_this2.rules[name], _this2.methods, value, input.name, _this2.errorMessages));
	                    ++_cover__().s['85'];
	                    _this2.markField(_this2.fields[name], _this2.messages[name], _this2.options.states, errors);
	                });
	
	                ++_cover__().s['86'];
	                input.addEventListener('input', function () {
	                    ++_cover__().f['10'];
	                    ++_cover__().s['87'];
	
	                    _this2.fields[name].classList.remove(_this2.options.states.pristine);
	                    ++_cover__().s['88'];
	                    _this2.fields[name].classList.add(_this2.options.states.dirty);
	                });
	            });
	        }
	    }, {
	        key: 'send',
	        value: function send(options) {
	            var _this3 = this;
	
	            ++_cover__().s['89'];
	
	            (0, _ajax.ajax)(options).then(function (response) {
	                ++_cover__().f['11'];
	                ++_cover__().s['90'];
	
	                if (response.validationErrors) {
	                    ++_cover__().b['11'][0];
	                    ++_cover__().s['91'];
	
	                    try {
	                        ++_cover__().s['92'];
	
	                        _this3.options.callbacks.error(response.validationErrors);
	                    } catch (e) {
	                        ++_cover__().s['93'];
	
	                        console.error(e);
	                    }
	
	                    ++_cover__().s['94'];
	                    if (response.validationErrors.base) {
	                        ++_cover__().b['12'][0];
	                        ++_cover__().s['95'];
	
	                        _this3.nodes.baseMessage.innerHTML = response.validationErrors.base.join(', ');
	                        ++_cover__().s['96'];
	                        _this3.root.classList.add(_this3.options.formStatePrefix + _this3.options.states.error); // eslint-disable-line max-len
	                        ++_cover__().s['97'];
	                        _this3.root.classList.remove(_this3.options.formStatePrefix + _this3.options.states.valid); // eslint-disable-line max-len
	                        ++_cover__().s['98'];
	                        delete response.validationErrors.base;
	                    } else {
	                        ++_cover__().b['12'][1];
	                        ++_cover__().s['99'];
	
	                        _this3.nodes.baseMessage.innerHTML = '';
	                    }
	
	                    ++_cover__().s['100'];
	                    Object.keys(response.validationErrors).forEach(function (name) {
	                        return ++_cover__().f['12'], ++_cover__().s['101'], _this3.markField(_this3.fields[name], _this3.messages[name], _this3.options.states, response.validationErrors[name]);
	                    });
	                } else {
	                    ++_cover__().b['11'][1];
	                    ++_cover__().s['102'];
	
	                    try {
	                        ++_cover__().s['103'];
	
	                        _this3.options.callbacks.success(response);
	                    } catch (e) {
	                        ++_cover__().s['104'];
	
	                        console.error(e);
	                    }
	
	                    ++_cover__().s['105'];
	                    if ((++_cover__().b['14'][0], _this3.options.redirect) && (++_cover__().b['14'][1], (++_cover__().s['106'], response.redirect))) {
	                        ++_cover__().b['13'][0];
	                        ++_cover__().s['107'];
	
	                        window.location.href = response.redirect;
	                        ++_cover__().s['108'];
	                        return;
	                    } else {
	                        ++_cover__().b['13'][1];
	                    }
	
	                    ++_cover__().s['109'];
	                    if (_this3.options.clean) {
	                        ++_cover__().b['15'][0];
	                        ++_cover__().s['110'];
	
	                        _this3.nodes.form.reset();
	                    } else {
	                        ++_cover__().b['15'][1];
	                    }
	                }
	            }).catch(function (_ref) {
	                var method = _ref.method,
	                    url = _ref.url,
	                    status = _ref.status,
	                    statusText = _ref.statusText;
	                ++_cover__().f['13'];
	                ++_cover__().s['111'];
	
	                console.warn(method + ' ' + url + ' ' + status + ' (' + statusText + ')');
	
	                ++_cover__().s['112'];
	                _this3.nodes.baseMessage.innerHTML = 'Can not send form!'; // todo: language extension
	                ++_cover__().s['113'];
	                _this3.root.classList.add(_this3.options.formStatePrefix + _this3.options.states.error); // eslint-disable-line max-len
	                ++_cover__().s['114'];
	                _this3.root.classList.remove(_this3.options.formStatePrefix + _this3.options.states.valid); // eslint-disable-line max-len
	            });
	        }
	
	        /**
	         *
	         * @param field
	         * @param message
	         * @param states
	         * @param errors
	         */
	
	    }, {
	        key: 'markField',
	        value: function markField(field, message, states, errors) {
	            ++_cover__().s['115'];
	
	            if ((++_cover__().b['17'][0], errors) && (++_cover__().b['17'][1], (++_cover__().s['116'], errors.length))) {
	                ++_cover__().b['16'][0];
	                ++_cover__().s['117'];
	
	                this.markError(field, message, states, errors);
	            } else {
	                ++_cover__().b['16'][1];
	                ++_cover__().s['118'];
	
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
	
	    }, {
	        key: 'markError',
	        value: function markError(field, message, _ref2, errors) {
	            var error = _ref2.error,
	                valid = _ref2.valid;
	            ++_cover__().s['119'];
	
	            if ((++_cover__().b['19'][0], !field) || (++_cover__().b['19'][1], (++_cover__().s['120'], !message))) {
	                ++_cover__().b['18'][0];
	                ++_cover__().s['121'];
	
	                return;
	            } else {
	                ++_cover__().b['18'][1];
	            }
	
	            ++_cover__().s['122'];
	            field.classList.add(error);
	            ++_cover__().s['123'];
	            field.classList.remove(valid);
	
	            ++_cover__().s['124'];
	            message.innerHTML = errors.join(', ');
	        }
	    }, {
	        key: 'markValid',
	        value: function markValid(field, message, _ref3) {
	            var error = _ref3.error,
	                valid = _ref3.valid;
	            ++_cover__().s['125'];
	
	            if ((++_cover__().b['21'][0], !field) || (++_cover__().b['21'][1], (++_cover__().s['126'], !message))) {
	                ++_cover__().b['20'][0];
	                ++_cover__().s['127'];
	
	                return;
	            } else {
	                ++_cover__().b['20'][1];
	            }
	
	            ++_cover__().s['128'];
	            field.classList.add(valid);
	            ++_cover__().s['129'];
	            field.classList.remove(error);
	
	            ++_cover__().s['130'];
	            message.innerHTML = '';
	        }
	    }, {
	        key: 'addMethod',
	        value: function addMethod(rule, func, message) {
	            ++_cover__().s['131'];
	
	            this.methods[rule] = {
	                func: func,
	                message: message
	            };
	        }
	
	        // todo rewrite
	
	    }, {
	        key: 'initErrorMessages',
	        value: function initErrorMessages(rules, messages, methods) {
	            ++_cover__().s['132'];
	
	            return Object.keys(rules).reduce(function (names, name) {
	                return ++_cover__().f['14'], ++_cover__().s['133'], _extends({}, names, _defineProperty({}, name, Object.keys(rules[name]).reduce(function (ruleNames, method) {
	                    ++_cover__().f['16'];
	                    return ++_cover__().f['15'], ++_cover__().s['134'], _extends({}, ruleNames, _defineProperty({}, method, (++_cover__().b['30'][0], (++_cover__().b['26'][0], (++_cover__().b['22'][0], (++_cover__().b['31'][0], (++_cover__().b['27'][0], (++_cover__().b['23'][0], (++_cover__().b['32'][0], (++_cover__().b['28'][0], (++_cover__().b['24'][0], messages[name]))) && (++_cover__().b['32'][1], (++_cover__().b['28'][1], (++_cover__().b['24'][1], (++_cover__().s['137'], messages[name][method]))))))) || (++_cover__().b['31'][1], (++_cover__().b['27'][1], (++_cover__().b['23'][1], (++_cover__().s['136'], (++_cover__().b['33'][0], (++_cover__().b['29'][0], (++_cover__().b['25'][0], methods[method]))) && (++_cover__().b['33'][1], (++_cover__().b['29'][1], (++_cover__().b['25'][1], (++_cover__().s['138'], methods[method].message))))))))))) || (++_cover__().b['30'][1], (++_cover__().b['26'][1], (++_cover__().b['22'][1], (++_cover__().s['135'], ''))))));
	                }, {})));
	            }, {});
	        }
	    }], [{
	        key: 'addToDictionary',
	        value: function addToDictionary(sourceText, translatedText, language) {
	            ++_cover__().s['139'];
	
	            (0, _jediValidateI18n.addTranslation)(sourceText, translatedText, language);
	        }
	    }]);
	
	    return JediValidate;
	}());
	++_cover__().s['140'];
	
	
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
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.getFormOptions = getFormOptions;
	exports.getInputRules = getInputRules;
	
	var _coverage__file;
	
	function _cover__() {
	    if (!_coverage__file) _coverage__file = _coverage__getInitialState();
	    return _coverage__file;
	}
	
	function _coverage__getInitialState() {
	    var path = 'D:\\projects\\jedi-validate\\src\\lib\\get-options.es6',
	        hash = 'b6aa5cdc5822dff23b6a51f534736862';
	    var global = new Function('return this')();
	    var coverage = global['__coverage__'] || (global['__coverage__'] = {});
	    if (coverage[path] && coverage[path].hash === hash) return coverage[path];
	    var coverageData = global['JSON'].parse('{"path":"D:\\\\projects\\\\jedi-validate\\\\src\\\\lib\\\\get-options.es6","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},"f":{"1":0,"2":0,"3":0},"statementMap":{"1":{"start":{"line":2,"column":17},"end":{"line":6,"column":5}},"2":{"start":{"line":8,"column":4},"end":{"line":13,"column":6}},"3":{"start":{"line":11,"column":63},"end":{"line":11,"column":73}},"4":{"start":{"line":11,"column":76},"end":{"line":11,"column":85}},"5":{"start":{"line":17,"column":25},"end":{"line":17,"column":60}},"6":{"start":{"line":19,"column":18},"end":{"line":22,"column":11}},"7":{"start":{"line":19,"column":61},"end":{"line":22,"column":5}},"8":{"start":{"line":21,"column":67},"end":{"line":21,"column":97}},"9":{"start":{"line":21,"column":44},"end":{"line":21,"column":63}},"10":{"start":{"line":24,"column":4},"end":{"line":27,"column":6}},"11":{"start":{"line":26,"column":48},"end":{"line":26,"column":89}},"12":{"start":{"line":26,"column":92},"end":{"line":26,"column":101}}},"fnMap":{"1":{"name":null,"line":1,"loc":{"start":{"line":1,"column":7},"end":{"line":14,"column":1}}},"2":{"name":null,"line":16,"loc":{"start":{"line":16,"column":7},"end":{"line":28,"column":1}}},"3":{"name":null,"line":19,"loc":{"start":{"line":19,"column":38},"end":{"line":22,"column":6}}}},"branchMap":{"1":{"line":11,"type":"cond-expr","locations":[{"start":{"line":11,"column":22},"end":{"line":11,"column":85}},{"start":{"line":11,"column":22},"end":{"line":11,"column":85}}]},"2":{"line":21,"type":"binary-expr","locations":[{"start":{"line":21,"column":16},"end":{"line":21,"column":63}},{"start":{"line":21,"column":16},"end":{"line":21,"column":63}}]},"3":{"line":21,"type":"binary-expr","locations":[{"start":{"line":21,"column":16},"end":{"line":21,"column":40}},{"start":{"line":21,"column":16},"end":{"line":21,"column":40}}]},"4":{"line":21,"type":"binary-expr","locations":[{"start":{"line":21,"column":16},"end":{"line":21,"column":97}},{"start":{"line":21,"column":16},"end":{"line":21,"column":97}}]},"5":{"line":21,"type":"binary-expr","locations":[{"start":{"line":21,"column":16},"end":{"line":21,"column":63}},{"start":{"line":21,"column":16},"end":{"line":21,"column":63}}]},"6":{"line":26,"type":"cond-expr","locations":[{"start":{"line":26,"column":16},"end":{"line":26,"column":101}},{"start":{"line":26,"column":16},"end":{"line":26,"column":101}}]}}}');
	    coverageData.hash = hash;
	    return coverage[path] = coverageData;
	}
	
	_cover__();
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function getFormOptions(form) {
	    ++_cover__().f['1'];
	
	    var ajax = (++_cover__().s['1'], {
	        url: form.getAttribute('action'),
	        method: form.getAttribute('method'),
	        enctype: form.getAttribute('enctype')
	    });
	
	    ++_cover__().s['2'];
	    return {
	        ajax: _extends({}, ajax, {
	            sendType: ajax.enctype === 'multipart/form-data' ? (++_cover__().b['1'][0], (++_cover__().s['3'], 'formData')) : (++_cover__().b['1'][1], (++_cover__().s['4'], undefined))
	        })
	    };
	}
	
	function getInputRules(input) {
	    ++_cover__().f['2'];
	
	    var defaultRules = (++_cover__().s['5'], ['required', 'email', 'tel', 'url']); // todo before initialization adding
	
	    var rules = (++_cover__().s['6'], defaultRules.reduce(function (inputRules, rule) {
	        return ++_cover__().f['3'], ++_cover__().s['7'], _extends({}, inputRules, _defineProperty({}, rule, (++_cover__().b['4'][0], (++_cover__().b['2'][0], (++_cover__().b['5'][0], (++_cover__().b['3'][0], input.hasAttribute(rule))) || (++_cover__().b['5'][1], (++_cover__().b['3'][1], (++_cover__().s['9'], input.type === rule))))) || (++_cover__().b['4'][1], (++_cover__().b['2'][1], (++_cover__().s['8'], input.classList.contains(rule))))));
	    }, {}));
	
	    ++_cover__().s['10'];
	    return _extends({}, rules, {
	        regexp: input.hasAttribute('pattern') ? (++_cover__().b['6'][0], (++_cover__().s['11'], new RegExp(input.getAttribute('pattern')))) : (++_cover__().b['6'][1], (++_cover__().s['12'], undefined))
	    });
	}

/***/ },
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
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ajax = ajax;
	
	var _coverage__file;
	
	function _cover__() {
	    if (!_coverage__file) _coverage__file = _coverage__getInitialState();
	    return _coverage__file;
	}
	
	function _coverage__getInitialState() {
	    var path = 'D:\\projects\\jedi-validate\\src\\lib\\ajax.es6',
	        hash = '3678dda16014198a69eb2e1c1729900d';
	    var global = new Function('return this')();
	    var coverage = global['__coverage__'] || (global['__coverage__'] = {});
	    if (coverage[path] && coverage[path].hash === hash) return coverage[path];
	    var coverageData = global['JSON'].parse('{"path":"D:\\\\projects\\\\jedi-validate\\\\src\\\\lib\\\\ajax.es6","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},"f":{"1":0,"2":0,"3":0},"statementMap":{"1":{"start":{"line":3,"column":4},"end":{"line":40,"column":6}},"2":{"start":{"line":4,"column":20},"end":{"line":4,"column":40}},"3":{"start":{"line":6,"column":8},"end":{"line":6,"column":123}},"4":{"start":{"line":6,"column":90},"end":{"line":6,"column":108}},"5":{"start":{"line":6,"column":112},"end":{"line":6,"column":114}},"6":{"start":{"line":8,"column":8},"end":{"line":12,"column":9}},"7":{"start":{"line":9,"column":12},"end":{"line":9,"column":66}},"8":{"start":{"line":10,"column":15},"end":{"line":12,"column":9}},"9":{"start":{"line":11,"column":12},"end":{"line":11,"column":84}},"10":{"start":{"line":14,"column":8},"end":{"line":36,"column":10}},"11":{"start":{"line":15,"column":12},"end":{"line":35,"column":13}},"12":{"start":{"line":16,"column":16},"end":{"line":34,"column":17}},"13":{"start":{"line":17,"column":35},"end":{"line":17,"column":37}},"14":{"start":{"line":19,"column":20},"end":{"line":23,"column":21}},"15":{"start":{"line":20,"column":24},"end":{"line":20,"column":64}},"16":{"start":{"line":22,"column":24},"end":{"line":22,"column":85}},"17":{"start":{"line":25,"column":20},"end":{"line":25,"column":38}},"18":{"start":{"line":27,"column":20},"end":{"line":33,"column":23}},"19":{"start":{"line":38,"column":8},"end":{"line":38,"column":78}},"20":{"start":{"line":38,"column":59},"end":{"line":38,"column":71}},"21":{"start":{"line":38,"column":74},"end":{"line":38,"column":76}},"22":{"start":{"line":43,"column":0},"end":{"line":43,"column":20}}},"fnMap":{"1":{"name":null,"line":2,"loc":{"start":{"line":2,"column":7},"end":{"line":41,"column":1}}},"2":{"name":null,"line":3,"loc":{"start":{"line":3,"column":23},"end":{"line":39,"column":5}}},"3":{"name":null,"line":14,"loc":{"start":{"line":14,"column":33},"end":{"line":36,"column":9}}}},"branchMap":{"1":{"line":6,"type":"cond-expr","locations":[{"start":{"line":6,"column":48},"end":{"line":6,"column":114}},{"start":{"line":6,"column":48},"end":{"line":6,"column":114}}]},"2":{"line":8,"type":"if","locations":[{"start":{"line":8,"column":46},"end":{"line":10,"column":9}},{"start":{"line":8,"column":46},"end":{"line":10,"column":9}}]},"3":{"line":10,"type":"if","locations":[{"start":{"line":10,"column":48},"end":{"line":12,"column":9}},{"start":{"line":10,"column":48},"end":{"line":12,"column":9}}]},"4":{"line":15,"type":"if","locations":[{"start":{"line":15,"column":38},"end":{"line":35,"column":13}},{"start":{"line":15,"column":38},"end":{"line":35,"column":13}}]},"5":{"line":16,"type":"if","locations":[{"start":{"line":16,"column":40},"end":{"line":26,"column":17}},{"start":{"line":26,"column":23},"end":{"line":34,"column":17}}]},"6":{"line":38,"type":"cond-expr","locations":[{"start":{"line":38,"column":17},"end":{"line":38,"column":76}},{"start":{"line":38,"column":17},"end":{"line":38,"column":76}}]}}}');
	    coverageData.hash = hash;
	    return coverage[path] = coverageData;
	}
	
	_cover__();
	
	// todo maybe it can be vendor library?
	function ajax(options) {
	    ++_cover__().f['1'];
	    ++_cover__().s['1'];
	
	    return new Promise(function (resolve, reject) {
	        ++_cover__().f['2'];
	
	        var xhr = (++_cover__().s['2'], new XMLHttpRequest());
	
	        ++_cover__().s['3'];
	        xhr.open(options.method, options.url + (options.method.toUpperCase() === 'GET' ? (++_cover__().b['1'][0], (++_cover__().s['4'], '?' + options.data)) : (++_cover__().b['1'][1], (++_cover__().s['5'], ''))), true); // todo concat url and params
	
	        ++_cover__().s['6'];
	        if (options.sendType === 'serialize') {
	            ++_cover__().b['2'][0];
	            ++_cover__().s['7'];
	
	            xhr.setRequestHeader('Content-type', options.enctype);
	        } else {
	                ++_cover__().b['2'][1];
	                ++_cover__().s['8'];
	                if (options.sendType === 'json') {
	                    ++_cover__().b['3'][0];
	                    ++_cover__().s['9'];
	
	                    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	                } else {
	                    ++_cover__().b['3'][1];
	                }
	            }++_cover__().s['10'];
	        xhr.onreadystatechange = function () {
	            ++_cover__().f['3'];
	            ++_cover__().s['11'];
	
	            if (xhr.readyState === 4) {
	                ++_cover__().b['4'][0];
	                ++_cover__().s['12'];
	
	                if (xhr.status === 200) {
	                    ++_cover__().b['5'][0];
	
	                    var response = (++_cover__().s['13'], {});
	
	                    ++_cover__().s['14'];
	                    try {
	                        ++_cover__().s['15'];
	
	                        response = JSON.parse(xhr.responseText);
	                    } catch (e) {
	                        ++_cover__().s['16'];
	
	                        response.validationErrors = { base: ['JSON parsing error'] }; // todo: language extension
	                    }
	
	                    ++_cover__().s['17'];
	                    resolve(response);
	                } else {
	                    ++_cover__().b['5'][1];
	                    ++_cover__().s['18'];
	
	                    reject({
	                        xhr: xhr,
	                        method: options.method,
	                        url: options.url,
	                        status: xhr.status,
	                        statusText: xhr.statusText
	                    });
	                }
	            } else {
	                ++_cover__().b['4'][1];
	            }
	        };
	
	        ++_cover__().s['19'];
	        xhr.send(options.method.toUpperCase() === 'POST' ? (++_cover__().b['6'][0], (++_cover__().s['20'], options.data)) : (++_cover__().b['6'][1], (++_cover__().s['21'], '')));
	    });
	}
	
	++_cover__().s['22'];
	exports.default = ajax;

/***/ },
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=jedi-validate.js.map