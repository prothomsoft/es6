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
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _employeeServiceMock = __webpack_require__(2);
	
	var service = _interopRequireWildcard(_employeeServiceMock);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	service.findAll().then(function (employees) {
	    var html = "";
	    employees.forEach(function (employee) {
	        html += "<div>\n                        <img src='" + employee.picture + "'/>\n                        <div>\n                            " + employee.firstName + " " + employee.lastName + "\n                            <p>" + employee.phone + "</p>\n                        </div>\n                    </div>";
	    });
	    document.getElementById("list").innerHTML = html;
	}).catch(function (error) {
	    return console.log(error);
	}); //import * as service from "./employee-service";

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var employees = [{
	  id: 1,
	  firstName: "Amy",
	  lastName: "Taylor",
	  phone: "617-564-3254",
	  picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg"
	}, {
	  id: 2,
	  firstName: "Anup",
	  lastName: "Gupta",
	  phone: "617-564-1258",
	  picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/anup_gupta.jpg"
	}];
	
	var findAll = exports.findAll = function findAll() {
	  return new Promise(function (resolve) {
	    return resolve(employees);
	  });
	};

/***/ }
/******/ ]);
//# sourceMappingURL=react.bundle.js.map