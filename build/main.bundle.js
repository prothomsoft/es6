/******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports) {

	'use strict';
	
	var calculateMonthlyPayment = function calculateMonthlyPayment(principal, years, rate) {
	    if (rate) {
	        var monthlyRate = rate / 100 / 12;
	    }
	    var monthlyPayment = principal * monthlyRate / (1 - Math.pow(1 / (1 + monthlyRate), years * 12));
	    return monthlyPayment;
	};
	
	document.getElementById('calcBtn').addEventListener('click', function () {
	    var change = "change1";
	    var test = "test";
	    var test2 = "test2";
	
	    var principal = document.getElementById("principal").value;
	    var years = document.getElementById("years").value;
	    var rate = document.getElementById("rate").value;
	    var monthlyPayment = calculateMonthlyPayment(principal, years, rate);
	    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
	});

/***/ }
/******/ ]);
//# sourceMappingURL=main.bundle.js.map