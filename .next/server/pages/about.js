"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/about";
exports.ids = ["pages/about"];
exports.modules = {

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst variants = {\n    hidden: {\n        opacity: 0,\n        x: -200,\n        y: 0\n    },\n    enter: {\n        opacity: 1,\n        x: 0,\n        y: 0\n    },\n    exit: {\n        opacity: 0,\n        x: 0,\n        y: -100\n    }\n};\nconst Layout = ({ children  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.main, {\n        variants: variants,\n        initial: \"hidden\" // Set the initial state to variants.hidden\n        ,\n        animate: \"enter\" // Animated state to variants.enter\n        ,\n        exit: \"exit\" // Exit state (used later) to variants.exit\n        ,\n        transition: {\n            type: \"linear\"\n        },\n        className: \"container\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/components/Layout.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNhO0FBRXZDLE1BQU1FLFFBQVEsR0FBRztJQUNmQyxNQUFNLEVBQUU7UUFBRUMsT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUFFQyxDQUFDLEVBQUUsQ0FBQztLQUFFO0lBQ3JDQyxLQUFLLEVBQUU7UUFBRUgsT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUM7S0FBRTtJQUNqQ0UsSUFBSSxFQUFFO1FBQUVKLE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDLEdBQUc7S0FBRTtDQUNwQztBQUVELE1BQU1HLE1BQU0sR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBQy9CLHFCQUNFLDhEQUFDVCxzREFBVztRQUNWQyxRQUFRLEVBQUVBLFFBQVE7UUFDbEJVLE9BQU8sRUFBQyxRQUFRLENBQUMsMkNBQTJDO1FBQTVDO1FBQ2hCQyxPQUFPLEVBQUMsT0FBTyxDQUFDLG1DQUFtQztRQUFwQztRQUNmTCxJQUFJLEVBQUMsTUFBTSxDQUFDLDJDQUEyQztRQUE1QztRQUNYTSxVQUFVLEVBQUU7WUFBRUMsSUFBSSxFQUFFLFFBQVE7U0FBRTtRQUM5QkMsU0FBUyxFQUFDLFdBQVc7a0JBRXBCTixRQUFROzs7OztpQkFDRyxDQUNkO0NBQ0g7QUFFRCxpRUFBZUQsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnYtY3JlYXRlLXBvcnRmb2xpby8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzUxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgdmFyaWFudHMgPSB7XG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB4OiAtMjAwLCB5OiAwIH0sXG4gIGVudGVyOiB7IG9wYWNpdHk6IDEsIHg6IDAsIHk6IDAgfSxcbiAgZXhpdDogeyBvcGFjaXR5OiAwLCB4OiAwLCB5OiAtMTAwIH0sXG59O1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5tYWluXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9IC8vIFBhc3MgdGhlIHZhcmlhbnQgb2JqZWN0IGludG8gRnJhbWVyIE1vdGlvblxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiIC8vIFNldCB0aGUgaW5pdGlhbCBzdGF0ZSB0byB2YXJpYW50cy5oaWRkZW5cbiAgICAgIGFuaW1hdGU9XCJlbnRlclwiIC8vIEFuaW1hdGVkIHN0YXRlIHRvIHZhcmlhbnRzLmVudGVyXG4gICAgICBleGl0PVwiZXhpdFwiIC8vIEV4aXQgc3RhdGUgKHVzZWQgbGF0ZXIpIHRvIHZhcmlhbnRzLmV4aXRcbiAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogXCJsaW5lYXJcIiB9fSAvLyBTZXQgdGhlIHRyYW5zaXRpb24gdG8gbGluZWFyXG4gICAgICBjbGFzc05hbWU9XCJjb250YWluZXJcIlxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L21vdGlvbi5tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwidmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwieCIsInkiLCJlbnRlciIsImV4aXQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIm1haW4iLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_2__]);\n_components_Layout__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst About = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-6xl lg:text-8xl font-semibold py-32\",\n                children: \"About Me\"\n            }, void 0, false, {\n                fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/about.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-4xl font-semibold\",\n                children: \"About Me\"\n            }, void 0, false, {\n                fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/about.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Here you write more about your experience. Include things such as:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/about.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined),\n                    \"1. Your professional experiences\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/about.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined),\n                    \"2. Your hobby\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/about.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined),\n                    \"3. An image of yourself\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/about.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/about.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNnQjtBQUUxQyxNQUFNRSxLQUFLLEdBQUcsSUFBTTtJQUNsQixxQkFDRSw4REFBQ0QsMERBQU07OzBCQUNMLDhEQUFDRSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsMENBQTBDOzBCQUFDLFVBQVE7Ozs7O3lCQUFNOzBCQUN4RSw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHdCQUF3QjswQkFBQyxVQUFROzs7Ozt5QkFBTTswQkFFdEQsOERBQUNELEtBQUc7O29CQUFDLG9FQUVIO2tDQUFBLDhEQUFDRSxJQUFFOzs7O2lDQUFHO29CQUFBLGtDQUVOO2tDQUFBLDhEQUFDQSxJQUFFOzs7O2lDQUFHO29CQUFBLGVBRU47a0NBQUEsOERBQUNBLElBQUU7Ozs7aUNBQUc7b0JBQUEseUJBRVI7Ozs7Ozt5QkFBTTs7Ozs7O2lCQUNDLENBQ1Q7Q0FDSDtBQUVELGlFQUFlSCxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udi1jcmVhdGUtcG9ydGZvbGlvLy4vcGFnZXMvYWJvdXQuanM/MGM0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5cbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC02eGwgbGc6dGV4dC04eGwgZm9udC1zZW1pYm9sZCBweS0zMic+QWJvdXQgTWU8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LTR4bCBmb250LXNlbWlib2xkJz5BYm91dCBNZTwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICBIZXJlIHlvdSB3cml0ZSBtb3JlIGFib3V0IHlvdXIgZXhwZXJpZW5jZS4gSW5jbHVkZSB0aGluZ3Mgc3VjaCBhczpcbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDEuIFlvdXIgcHJvZmVzc2lvbmFsIGV4cGVyaWVuY2VzXG4gICAgICAgIDxiciAvPlxuICAgICAgICAyLiBZb3VyIGhvYmJ5XG4gICAgICAgIDxiciAvPlxuICAgICAgICAzLiBBbiBpbWFnZSBvZiB5b3Vyc2VsZlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkFib3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/about.js"));
module.exports = __webpack_exports__;

})();