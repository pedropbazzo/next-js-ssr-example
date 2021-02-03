module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1858750671"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1858750671"
  }, "Static Content")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/github"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1858750671"
  }, "GitHub Content")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1858750671",
    css: "a.jsx-1858750671{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:'Arial';margin-right:16px;}a.jsx-1858750671:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wZWRyb3BiYXp6by9Eb3dubG9hZHMvbmV4dGpzLXNzci1kZW1vL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVvQixBQUdzQyxBQU9ULFlBQ2hCLHNDQVBlLFdBQ1Msb0JBQ0Ysa0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9wZWRyb3BiYXp6by9Eb3dubG9hZHMvbmV4dGpzLXNzci1kZW1vL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YT5TdGF0aWMgQ29udGVudDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2dpdGh1YlwiPlxuICAgICAgICAgICAgPGE+R2l0SHViIENvbnRlbnQ8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/pedropbazzo/Downloads/nextjs-ssr-demo/components/header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./components/header.js");


var layoutStyle = {
  padding: 16
};

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_1__["default"], null), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout.js */ "./components/layout.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1937807848" + " " + "title"
  }, "Sharing UI Components with Yarn Workspaces"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1937807848"
  }, "Today\u2019s popular front-end frameworks like Angular and React allow us to create rich web applications using modular, reusable components. Most of the time we get away with reusing components that someone else wrote. Angular Material, Material-UI and Glamorous are just a few examples of the many off-the-shelf component libraries that allow us to build rich web applications with minimal effort. We generally don\u2019t think about writing shared reusable components until we have to write moderately complex applications. In my case, our team was tasked to write a set of reusable components so that they can be used to quickly compose a suite of complex financial applications. I started thinking about the best way to create these components."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1937807848"
  }, "Motivation: Faster Development Cycle"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1937807848"
  }, "Imagine that you were writing an online shopping app. There\u2019s a page in this app that shows the list of orders. The OrderList component uses the List component from the Material-UI library. Your component hierarchy might look like this:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1937807848",
    css: "h1.jsx-1937807848,h2.jsx-1937807848,p.jsx-1937807848{font-family:'Arial';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wZWRyb3BiYXp6by9Eb3dubG9hZHMvbmV4dGpzLXNzci1kZW1vL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCb0IsQUFLcUMsb0JBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9wZWRyb3BiYXp6by9Eb3dubG9hZHMvbmV4dGpzLXNzci1kZW1vL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgICA8TGF5b3V0PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5TaGFyaW5nIFVJIENvbXBvbmVudHMgd2l0aCBZYXJuIFdvcmtzcGFjZXM8L2gxPlxuXG4gICAgICAgIDxwPlxuICAgICAgICAgICAgVG9kYXnigJlzIHBvcHVsYXIgZnJvbnQtZW5kIGZyYW1ld29ya3MgbGlrZSBBbmd1bGFyIGFuZCBSZWFjdCBhbGxvdyB1c1xuICAgICAgICAgICAgdG8gY3JlYXRlIHJpY2ggd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBtb2R1bGFyLCByZXVzYWJsZSBjb21wb25lbnRzLlxuICAgICAgICAgICAgTW9zdCBvZiB0aGUgdGltZSB3ZSBnZXQgYXdheSB3aXRoIHJldXNpbmcgY29tcG9uZW50cyB0aGF0IHNvbWVvbmVcbiAgICAgICAgICAgIGVsc2Ugd3JvdGUuIEFuZ3VsYXIgTWF0ZXJpYWwsIE1hdGVyaWFsLVVJIGFuZCBHbGFtb3JvdXMgYXJlIGp1c3QgYVxuICAgICAgICAgICAgZmV3IGV4YW1wbGVzIG9mIHRoZSBtYW55IG9mZi10aGUtc2hlbGYgY29tcG9uZW50IGxpYnJhcmllcyB0aGF0XG4gICAgICAgICAgICBhbGxvdyB1cyB0byBidWlsZCByaWNoIHdlYiBhcHBsaWNhdGlvbnMgd2l0aCBtaW5pbWFsIGVmZm9ydC4gV2VcbiAgICAgICAgICAgIGdlbmVyYWxseSBkb27igJl0IHRoaW5rIGFib3V0IHdyaXRpbmcgc2hhcmVkIHJldXNhYmxlIGNvbXBvbmVudHMgdW50aWxcbiAgICAgICAgICAgIHdlIGhhdmUgdG8gd3JpdGUgbW9kZXJhdGVseSBjb21wbGV4IGFwcGxpY2F0aW9ucy4gSW4gbXkgY2FzZSwgb3VyXG4gICAgICAgICAgICB0ZWFtIHdhcyB0YXNrZWQgdG8gd3JpdGUgYSBzZXQgb2YgcmV1c2FibGUgY29tcG9uZW50cyBzbyB0aGF0IHRoZXlcbiAgICAgICAgICAgIGNhbiBiZSB1c2VkIHRvIHF1aWNrbHkgY29tcG9zZSBhIHN1aXRlIG9mIGNvbXBsZXggZmluYW5jaWFsXG4gICAgICAgICAgICBhcHBsaWNhdGlvbnMuIEkgc3RhcnRlZCB0aGlua2luZyBhYm91dCB0aGUgYmVzdCB3YXkgdG8gY3JlYXRlIHRoZXNlXG4gICAgICAgICAgICBjb21wb25lbnRzLlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGgyPk1vdGl2YXRpb246IEZhc3RlciBEZXZlbG9wbWVudCBDeWNsZTwvaDI+XG5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICBJbWFnaW5lIHRoYXQgeW91IHdlcmUgd3JpdGluZyBhbiBvbmxpbmUgc2hvcHBpbmcgYXBwLiBUaGVyZeKAmXMgYSBwYWdlXG4gICAgICAgICAgICBpbiB0aGlzIGFwcCB0aGF0IHNob3dzIHRoZSBsaXN0IG9mIG9yZGVycy4gVGhlIE9yZGVyTGlzdCBjb21wb25lbnRcbiAgICAgICAgICAgIHVzZXMgdGhlIExpc3QgY29tcG9uZW50IGZyb20gdGhlIE1hdGVyaWFsLVVJIGxpYnJhcnkuIFlvdXIgY29tcG9uZW50XG4gICAgICAgICAgICBoaWVyYXJjaHkgbWlnaHQgbG9vayBsaWtlIHRoaXM6XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBoMSxcbiAgICAgICAgICAgIGgyLFxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/pedropbazzo/Downloads/nextjs-ssr-demo/pages/index.js */"
  }));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map