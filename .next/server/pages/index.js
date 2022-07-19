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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst variants = {\n    hidden: {\n        opacity: 0,\n        x: -200,\n        y: 0\n    },\n    enter: {\n        opacity: 1,\n        x: 0,\n        y: 0\n    },\n    exit: {\n        opacity: 0,\n        x: 0,\n        y: -100\n    }\n};\nconst Layout = ({ children  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.main, {\n        variants: variants,\n        initial: \"hidden\" // Set the initial state to variants.hidden\n        ,\n        animate: \"enter\" // Animated state to variants.enter\n        ,\n        exit: \"exit\" // Exit state (used later) to variants.exit\n        ,\n        transition: {\n            type: \"linear\"\n        },\n        className: \"container\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/components/Layout.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNhO0FBRXZDLE1BQU1FLFFBQVEsR0FBRztJQUNmQyxNQUFNLEVBQUU7UUFBRUMsT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUFFQyxDQUFDLEVBQUUsQ0FBQztLQUFFO0lBQ3JDQyxLQUFLLEVBQUU7UUFBRUgsT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUM7S0FBRTtJQUNqQ0UsSUFBSSxFQUFFO1FBQUVKLE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDLEdBQUc7S0FBRTtDQUNwQztBQUVELE1BQU1HLE1BQU0sR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBQy9CLHFCQUNFLDhEQUFDVCxzREFBVztRQUNWQyxRQUFRLEVBQUVBLFFBQVE7UUFDbEJVLE9BQU8sRUFBQyxRQUFRLENBQUMsMkNBQTJDO1FBQTVDO1FBQ2hCQyxPQUFPLEVBQUMsT0FBTyxDQUFDLG1DQUFtQztRQUFwQztRQUNmTCxJQUFJLEVBQUMsTUFBTSxDQUFDLDJDQUEyQztRQUE1QztRQUNYTSxVQUFVLEVBQUU7WUFBRUMsSUFBSSxFQUFFLFFBQVE7U0FBRTtRQUM5QkMsU0FBUyxFQUFDLFdBQVc7a0JBRXBCTixRQUFROzs7OztpQkFDRyxDQUNkO0NBQ0g7QUFFRCxpRUFBZUQsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnYtY3JlYXRlLXBvcnRmb2xpby8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzUxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgdmFyaWFudHMgPSB7XG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB4OiAtMjAwLCB5OiAwIH0sXG4gIGVudGVyOiB7IG9wYWNpdHk6IDEsIHg6IDAsIHk6IDAgfSxcbiAgZXhpdDogeyBvcGFjaXR5OiAwLCB4OiAwLCB5OiAtMTAwIH0sXG59O1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5tYWluXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9IC8vIFBhc3MgdGhlIHZhcmlhbnQgb2JqZWN0IGludG8gRnJhbWVyIE1vdGlvblxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiIC8vIFNldCB0aGUgaW5pdGlhbCBzdGF0ZSB0byB2YXJpYW50cy5oaWRkZW5cbiAgICAgIGFuaW1hdGU9XCJlbnRlclwiIC8vIEFuaW1hdGVkIHN0YXRlIHRvIHZhcmlhbnRzLmVudGVyXG4gICAgICBleGl0PVwiZXhpdFwiIC8vIEV4aXQgc3RhdGUgKHVzZWQgbGF0ZXIpIHRvIHZhcmlhbnRzLmV4aXRcbiAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogXCJsaW5lYXJcIiB9fSAvLyBTZXQgdGhlIHRyYW5zaXRpb24gdG8gbGluZWFyXG4gICAgICBjbGFzc05hbWU9XCJjb250YWluZXJcIlxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L21vdGlvbi5tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwidmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwieCIsInkiLCJlbnRlciIsImV4aXQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIm1haW4iLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_2__]);\n_components_Layout__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-1/2 lg:block hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        css: \"height: 20px;\",\n                        src: \"/ProfilePhoto.jpeg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/index.js\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/index.js\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/profile_male.png\",\n                            className: \"w-40 mx-auto\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/index.js\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"py-4\",\n                            children: \"Zhou Yi Kelvin\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/index.js\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pb-4\",\n                            children: [\n                                \"I am a Penultimate Year Computer Science and Business Student (DDP) from NUS.\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/index.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 13\n                                }, undefined),\n                                \"I am currently a Software Engineer Intern at Ninja Van,\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/index.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 13\n                                }, undefined),\n                                \"and I am always looking for new opportunities to improve myself before I graduate in 2024.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/index.js\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-lg text-blue-500\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://www.linkedin.com/in/zhou-yi-kelvin\",\n                                    target: \"_blank\",\n                                    rel: \"noreferrer noopener\",\n                                    children: \"LinkedIn\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/index.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-black dark:text-white\",\n                                    children: \" | \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/index.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 14\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://www.github.com/zhoube\",\n                                    target: \"_blank\",\n                                    rel: \"noreferrer noopener\",\n                                    children: \"Github\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/index.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/index.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/index.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/index.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBRTFDLE1BQU1FLElBQUksR0FBRyxJQUFNO0lBQ2pCLHFCQUNFLDhEQUFDRCwwREFBTTtrQkFDTCw0RUFBQ0UsS0FBRztZQUFDQyxTQUFTLEVBQUMsbUJBQW1COzs4QkFDaEMsOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyx1QkFBdUI7OEJBRXBDLDRFQUFDQyxLQUFHO3dCQUFDQyxHQUFHLEVBQUUsZUFBZTt3QkFBRUMsR0FBRyxFQUFDLG9CQUFvQjs7Ozs7aUNBQUc7Ozs7OzZCQUNsRDs4QkFDTiw4REFBQ0osS0FBRztvQkFBQ0MsU0FBUyxFQUFDLG9CQUFvQjs7c0NBQ2pDLDhEQUFDQyxLQUFHOzRCQUFDRSxHQUFHLEVBQUMsbUJBQW1COzRCQUFDSCxTQUFTLEVBQUMsY0FBYzs7Ozs7cUNBQUc7c0NBQ3hELDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsTUFBTTtzQ0FBRSxnQkFBZ0I7Ozs7O3FDQUFPO3NDQUM5Qyw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLE1BQU07O2dDQUFDLCtFQUdwQjs4Q0FBQSw4REFBQ0ksSUFBRTs7Ozs2Q0FBTTtnQ0FBQSx5REFDVDs4Q0FBQSw4REFBQ0EsSUFBRTs7Ozs2Q0FBTTtnQ0FBQSw0RkFHWDs7Ozs7O3FDQUFNO3NDQUNOLDhEQUFDTCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsdUJBQXVCOzs4Q0FHbEMsOERBQUNLLEdBQUM7b0NBQ0FDLElBQUksRUFBQyw0Q0FBNEM7b0NBQ2pEQyxNQUFNLEVBQUMsUUFBUTtvQ0FDZkMsR0FBRyxFQUFDLHFCQUFxQjs4Q0FDMUIsVUFFRDs7Ozs7NkNBQUk7OENBRUwsOERBQUNDLE1BQUk7b0NBQUNULFNBQVMsRUFBQyw0QkFBNEI7OENBQUMsS0FBRzs7Ozs7NkNBQU87OENBRXRELDhEQUFDSyxHQUFDO29DQUNBQyxJQUFJLEVBQUMsK0JBQStCO29DQUNwQ0MsTUFBTSxFQUFDLFFBQVE7b0NBQ2ZDLEdBQUcsRUFBQyxxQkFBcUI7OENBQzFCLFFBRUQ7Ozs7OzZDQUFJOzs7Ozs7cUNBR0Y7Ozs7Ozs2QkFDRjs7Ozs7O3FCQUNGOzs7OztpQkFDQyxDQUNUO0NBQ0g7QUFFRCxpRUFBZVYsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnYtY3JlYXRlLXBvcnRmb2xpby8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xLzIgbGc6YmxvY2sgaGlkZGVuJz5cbiAgICAgICAgICB7LyogSGVybyBpbWFnZSBoZXJlICovfVxuICAgICAgICAgIDxpbWcgY3NzPXsnaGVpZ2h0OiAyMHB4Oyd9IHNyYz0nL1Byb2ZpbGVQaG90by5qcGVnJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIHctZnVsbCc+XG4gICAgICAgICAgPGltZyBzcmM9Jy9wcm9maWxlX21hbGUucG5nJyBjbGFzc05hbWU9J3ctNDAgbXgtYXV0bycgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktNCc+eydaaG91IFlpIEtlbHZpbid9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BiLTQnPlxuICAgICAgICAgICAgSSBhbSBhIFBlbnVsdGltYXRlIFllYXIgQ29tcHV0ZXIgU2NpZW5jZSBhbmQgQnVzaW5lc3MgU3R1ZGVudCAoRERQKVxuICAgICAgICAgICAgZnJvbSBOVVMuXG4gICAgICAgICAgICA8YnI+PC9icj5JIGFtIGN1cnJlbnRseSBhIFNvZnR3YXJlIEVuZ2luZWVyIEludGVybiBhdCBOaW5qYSBWYW4sXG4gICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgIGFuZCBJIGFtIGFsd2F5cyBsb29raW5nIGZvciBuZXcgb3Bwb3J0dW5pdGllcyB0byBpbXByb3ZlIG15c2VsZlxuICAgICAgICAgICAgYmVmb3JlIEkgZ3JhZHVhdGUgaW4gMjAyNC5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1sZyB0ZXh0LWJsdWUtNTAwJz5cbiAgICAgICAgICAgIHsvKiBQbGFjZSB5b3VyIGxpbmtzIGhlcmUgKi99XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3pob3UteWkta2VsdmluJ1xuICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgICAgIHJlbD0nbm9yZWZlcnJlciBub29wZW5lcidcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIExpbmtlZEluXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHs8c3BhbiBjbGFzc05hbWU9J3RleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlJz4gfCA8L3NwYW4+fVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3LmdpdGh1Yi5jb20vemhvdWJlJ1xuICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgICAgIHJlbD0nbm9yZWZlcnJlciBub29wZW5lcidcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEdpdGh1YlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7LyogRW5kIG9mIExpbmtzICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkhvbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJjc3MiLCJzcmMiLCJiciIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();