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
exports.id = "pages/work";
exports.ids = ["pages/work"];
exports.modules = {

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst variants = {\n    hidden: {\n        opacity: 0,\n        x: -200,\n        y: 0\n    },\n    enter: {\n        opacity: 1,\n        x: 0,\n        y: 0\n    },\n    exit: {\n        opacity: 0,\n        x: 0,\n        y: -100\n    }\n};\nconst Layout = ({ children  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.main, {\n        variants: variants,\n        initial: \"hidden\" // Set the initial state to variants.hidden\n        ,\n        animate: \"enter\" // Animated state to variants.enter\n        ,\n        exit: \"exit\" // Exit state (used later) to variants.exit\n        ,\n        transition: {\n            type: \"linear\"\n        },\n        className: \"container\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/components/Layout.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNhO0FBRXZDLE1BQU1FLFFBQVEsR0FBRztJQUNmQyxNQUFNLEVBQUU7UUFBRUMsT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUFFQyxDQUFDLEVBQUUsQ0FBQztLQUFFO0lBQ3JDQyxLQUFLLEVBQUU7UUFBRUgsT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUM7S0FBRTtJQUNqQ0UsSUFBSSxFQUFFO1FBQUVKLE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDLEdBQUc7S0FBRTtDQUNwQztBQUVELE1BQU1HLE1BQU0sR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBQy9CLHFCQUNFLDhEQUFDVCxzREFBVztRQUNWQyxRQUFRLEVBQUVBLFFBQVE7UUFDbEJVLE9BQU8sRUFBQyxRQUFRLENBQUMsMkNBQTJDO1FBQTVDO1FBQ2hCQyxPQUFPLEVBQUMsT0FBTyxDQUFDLG1DQUFtQztRQUFwQztRQUNmTCxJQUFJLEVBQUMsTUFBTSxDQUFDLDJDQUEyQztRQUE1QztRQUNYTSxVQUFVLEVBQUU7WUFBRUMsSUFBSSxFQUFFLFFBQVE7U0FBRTtRQUM5QkMsU0FBUyxFQUFDLFdBQVc7a0JBRXBCTixRQUFROzs7OztpQkFDRyxDQUNkO0NBQ0g7QUFFRCxpRUFBZUQsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnYtY3JlYXRlLXBvcnRmb2xpby8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzUxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgdmFyaWFudHMgPSB7XG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB4OiAtMjAwLCB5OiAwIH0sXG4gIGVudGVyOiB7IG9wYWNpdHk6IDEsIHg6IDAsIHk6IDAgfSxcbiAgZXhpdDogeyBvcGFjaXR5OiAwLCB4OiAwLCB5OiAtMTAwIH0sXG59O1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5tYWluXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9IC8vIFBhc3MgdGhlIHZhcmlhbnQgb2JqZWN0IGludG8gRnJhbWVyIE1vdGlvblxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiIC8vIFNldCB0aGUgaW5pdGlhbCBzdGF0ZSB0byB2YXJpYW50cy5oaWRkZW5cbiAgICAgIGFuaW1hdGU9XCJlbnRlclwiIC8vIEFuaW1hdGVkIHN0YXRlIHRvIHZhcmlhbnRzLmVudGVyXG4gICAgICBleGl0PVwiZXhpdFwiIC8vIEV4aXQgc3RhdGUgKHVzZWQgbGF0ZXIpIHRvIHZhcmlhbnRzLmV4aXRcbiAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogXCJsaW5lYXJcIiB9fSAvLyBTZXQgdGhlIHRyYW5zaXRpb24gdG8gbGluZWFyXG4gICAgICBjbGFzc05hbWU9XCJjb250YWluZXJcIlxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L21vdGlvbi5tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwidmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwieCIsInkiLCJlbnRlciIsImV4aXQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIm1haW4iLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/work.js":
/*!***********************!*\
  !*** ./pages/work.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_2__]);\n_components_Layout__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Work = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-4xl text-center font-semibold pb-24\",\n                children: \"My Work\"\n            }, void 0, false, {\n                fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/work.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-8 grid-cols-3 grid-rows-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://cappcher.com/\",\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"object-cover w-full h-80 mb-6 rounded\",\n                                src: \"/placeholder.jpeg\",\n                                alt: \"Cappcher Website\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/work.js\",\n                                lineNumber: 17,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/work.js\",\n                            lineNumber: 12,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-2 text-xl font-bold leading-none sm:text-2xl\",\n                            children: \"Cappcher Website\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/work.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Sample Description of Project\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/work.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/work.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/work.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/work.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Work);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93b3JrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ2dCO0FBRTFDLE1BQU1FLElBQUksR0FBRyxJQUFNO0lBQ2pCLHFCQUNFLDhEQUFDRCwwREFBTTs7MEJBQ0wsOERBQUNFLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQywwQ0FBMEM7MEJBQUMsU0FBTzs7Ozs7eUJBQU07MEJBRXZFLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsb0NBQW9DOzBCQUVqRCw0RUFBQ0QsS0FBRzs7c0NBQ0YsOERBQUNFLEdBQUM7NEJBQ0FDLElBQUksRUFBQyx1QkFBdUI7NEJBQzVCQyxNQUFNLEVBQUMsUUFBUTs0QkFDZkMsR0FBRyxFQUFDLHFCQUFxQjtzQ0FFekIsNEVBQUNDLEtBQUc7Z0NBQ0ZMLFNBQVMsRUFBQyx1Q0FBdUM7Z0NBQ2pETSxHQUFHLEVBQUMsbUJBQW1CO2dDQUN2QkMsR0FBRyxFQUFDLGtCQUFrQjs7Ozs7eUNBQ3RCOzs7OztxQ0FDQTtzQ0FDSiw4REFBQ0MsR0FBQzs0QkFBQ1IsU0FBUyxFQUFDLGlEQUFpRDtzQ0FBQyxrQkFFL0Q7Ozs7O3FDQUFJO3NDQUNKLDhEQUFDUSxHQUFDO3NDQUFDLCtCQUE2Qjs7Ozs7cUNBQUk7Ozs7Ozs2QkFDaEM7Ozs7O3lCQUVGOzs7Ozs7aUJBQ0MsQ0FDVDtDQUNIO0FBRUQsaUVBQWVWLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL252LWNyZWF0ZS1wb3J0Zm9saW8vLi9wYWdlcy93b3JrLmpzPzI3OTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuY29uc3QgV29yayA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCB0ZXh0LWNlbnRlciBmb250LXNlbWlib2xkIHBiLTI0XCI+TXkgV29yazwvZGl2PlxuICAgICAgey8qIEdyaWQgbGF5b3V0IHRvIHNldCB5b3VyIHByb2plY3RzICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC04IGdyaWQtY29scy0zIGdyaWQtcm93cy0zXCI+XG4gICAgICAgIHsvKiBTdGFydCAqL31cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2FwcGNoZXIuY29tL1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgdy1mdWxsIGgtODAgbWItNiByb3VuZGVkXCJcbiAgICAgICAgICAgICAgc3JjPVwiL3BsYWNlaG9sZGVyLmpwZWdcIlxuICAgICAgICAgICAgICBhbHQ9XCJDYXBwY2hlciBXZWJzaXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC14bCBmb250LWJvbGQgbGVhZGluZy1ub25lIHNtOnRleHQtMnhsXCI+XG4gICAgICAgICAgICBDYXBwY2hlciBXZWJzaXRlXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlNhbXBsZSBEZXNjcmlwdGlvbiBvZiBQcm9qZWN0PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIEVuZCAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV29yaztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIldvcmsiLCJkaXYiLCJjbGFzc05hbWUiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsImltZyIsInNyYyIsImFsdCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/work.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/work.js"));
module.exports = __webpack_exports__;

})();