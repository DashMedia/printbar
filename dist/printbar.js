/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = printbar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__printbar_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__printbar_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__printbar_scss__);


function printbar() {
  'use strict';

  const qr = "https://chart.googleapis.com/chart?cht=qr&chs=80x80&chl=" + document.URL + "&choe=UTF-8";

  const printBlock = '<div class="printbar"><span class="heading">' + document.querySelector("h1").innerHTML + '</span><span>' + document.URL + '</span></div>';

  document.head.insertAdjacentHTML("afterbegin", "<style>.printbar:before{z-index:100;position:relative;float:left;content:url(" + qr + ");padding:1px;width:80px;height:80px;background-width:100%;background-height:100%;} .printbar{max-width:100%;visibility:hidden; position:absolute;overflow:hidden;}@media only print{.printbar {visibility:visible;position:relative;background-color:#ffffff;border:3px solid #cccccc;margin-bottom:1px;font-family:helvetica, arial, sans-serif;} .printbar span{z-index:101;padding:1px;text-shadow:none;display:block;text-align:left;color:#cccccc;line-height:1em;margin: 3px 15px 10px 15px;} .printbar span.heading{font-weight:bold;font-size:35px;line-height:1em;margin:10px 15px 3px 15px}h1{display:none !important;}</style>"),
  document.body.insertAdjacentHTML('afterbegin', printBlock);
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/jason/Sites/printbar/src/printbar.scss Unexpected character '@' (1:0)\nYou may need an appropriate loader to handle this file type.\n| @media only print {\n| \t*{\n| \t\t/* \tturn off special effects that make things ugly. */");

/***/ })
/******/ ]);