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

	"use strict";
	
	// XMLHttpRequest wrapper using callbacks
	function request(obj, successHandler, errorHandler) {
	    var xhr = new XMLHttpRequest();
	    xhr.open(obj.method || "GET", obj.url);
	    if (obj.headers) {
	        Object.keys(obj.headers).forEach(function (key) {
	            xhr.setRequestHeader(key, obj.headers[key]);
	        });
	    }
	    xhr.onload = function () {
	        if (xhr.status >= 200 && xhr.status < 300) {
	            successHandler(xhr.response);
	        } else {
	            errorHandler(xhr.statusText);
	        }
	    };
	    xhr.onerror = function () {
	        errorHandler(xhr.statusText);
	    };
	    xhr.send(obj.body);
	}
	
	request({ url: "employees.json" }, function (data) {
	    var employees = JSON.parse(data);
	    var html = "";
	    employees.forEach(function (employee) {
	        html += "<div><img src='" + employee.picture + "'/><div>" + employee.firstName + " " + employee.lastName + "<p>" + employee.phone + "</p></div></div>";
	    });
	    document.getElementById("list").innerHTML = html;
	}, function (error) {
	    console.log(error);
	});

/***/ }
/******/ ]);
//# sourceMappingURL=promise.bundle.js.map