/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/about"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fkelvinzhou%2FDesktop%2FNinjaVanInternship%2FZhou-Yi-Kelvin-Portfolio%2Fpages%2Fabout.js&page=%2Fabout!":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fkelvinzhou%2FDesktop%2FNinjaVanInternship%2FZhou-Yi-Kelvin-Portfolio%2Fpages%2Fabout.js&page=%2Fabout! ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/about\",\n      function () {\n        return __webpack_require__(/*! ./pages/about.js */ \"./pages/about.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/about\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRmtlbHZpbnpob3UlMkZEZXNrdG9wJTJGTmluamFWYW5JbnRlcm5zaGlwJTJGWmhvdS1ZaS1LZWx2aW4tUG9ydGZvbGlvJTJGcGFnZXMlMkZhYm91dC5qcyZwYWdlPSUyRmFib3V0IS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDBDQUFrQjtBQUN6QztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/N2YzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL2Fib3V0XCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9hYm91dC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvYWJvdXRcIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fkelvinzhou%2FDesktop%2FNinjaVanInternship%2FZhou-Yi-Kelvin-Portfolio%2Fpages%2Fabout.js&page=%2Fabout!\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\n\n\nvar variants = {\n    hidden: {\n        opacity: 0,\n        x: -200,\n        y: 0\n    },\n    enter: {\n        opacity: 1,\n        x: 0,\n        y: 0\n    },\n    exit: {\n        opacity: 0,\n        x: 0,\n        y: -100\n    }\n};\nvar Layout = function(param) {\n    var children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.main, {\n        variants: variants,\n        initial: \"hidden\" // Set the initial state to variants.hidden\n        ,\n        animate: \"enter\" // Animated state to variants.enter\n        ,\n        exit: \"exit\" // Exit state (used later) to variants.exit\n        ,\n        transition: {\n            type: \"linear\"\n        },\n        className: \"container\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/components/Layout.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBMEI7QUFDYTtBQUV2QyxJQUFNRSxRQUFRLEdBQUc7SUFDZkMsTUFBTSxFQUFFO1FBQUVDLE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFBRUMsQ0FBQyxFQUFFLENBQUM7S0FBRTtJQUNyQ0MsS0FBSyxFQUFFO1FBQUVILE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO0tBQUU7SUFDakNFLElBQUksRUFBRTtRQUFFSixPQUFPLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQyxHQUFHO0tBQUU7Q0FDcEM7QUFFRCxJQUFNRyxNQUFNLEdBQUcsZ0JBQWtCO1FBQWZDLFFBQVEsU0FBUkEsUUFBUTtJQUN4QixxQkFDRSw4REFBQ1Qsc0RBQVc7UUFDVkMsUUFBUSxFQUFFQSxRQUFRO1FBQ2xCVSxPQUFPLEVBQUMsUUFBUSxDQUFDLDJDQUEyQztRQUE1QztRQUNoQkMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxtQ0FBbUM7UUFBcEM7UUFDZkwsSUFBSSxFQUFDLE1BQU0sQ0FBQywyQ0FBMkM7UUFBNUM7UUFDWE0sVUFBVSxFQUFFO1lBQUVDLElBQUksRUFBRSxRQUFRO1NBQUU7UUFDOUJDLFNBQVMsRUFBQyxXQUFXO2tCQUVwQk4sUUFBUTs7Ozs7YUFDRyxDQUNkO0NBQ0g7QUFiS0QsS0FBQUEsTUFBTTtBQWVaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanM/NTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCB2YXJpYW50cyA9IHtcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHg6IC0yMDAsIHk6IDAgfSxcbiAgZW50ZXI6IHsgb3BhY2l0eTogMSwgeDogMCwgeTogMCB9LFxuICBleGl0OiB7IG9wYWNpdHk6IDAsIHg6IDAsIHk6IC0xMDAgfSxcbn07XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLm1haW5cbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c30gLy8gUGFzcyB0aGUgdmFyaWFudCBvYmplY3QgaW50byBGcmFtZXIgTW90aW9uXG4gICAgICBpbml0aWFsPVwiaGlkZGVuXCIgLy8gU2V0IHRoZSBpbml0aWFsIHN0YXRlIHRvIHZhcmlhbnRzLmhpZGRlblxuICAgICAgYW5pbWF0ZT1cImVudGVyXCIgLy8gQW5pbWF0ZWQgc3RhdGUgdG8gdmFyaWFudHMuZW50ZXJcbiAgICAgIGV4aXQ9XCJleGl0XCIgLy8gRXhpdCBzdGF0ZSAodXNlZCBsYXRlcikgdG8gdmFyaWFudHMuZXhpdFxuICAgICAgdHJhbnNpdGlvbj17eyB0eXBlOiBcImxpbmVhclwiIH19IC8vIFNldCB0aGUgdHJhbnNpdGlvbiB0byBsaW5lYXJcbiAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiXG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbW90aW9uLm1haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJ2YXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ4IiwieSIsImVudGVyIiwiZXhpdCIsIkxheW91dCIsImNoaWxkcmVuIiwibWFpbiIsImluaXRpYWwiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\nvar _this = undefined;\n\n\n\nvar About = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-6xl lg:text-8xl font-semibold py-32\",\n                children: \"About Me\"\n            }, void 0, false, {\n                fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/about.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-4xl font-semibold\"\n            }, void 0, false, {\n                fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/about.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Hello! Welcome to my About Page.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/about.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, _this),\n                    \"My name is Kelvin, an aspiring Software Engineer that will graduate from NUS in 2024.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/about.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, _this),\n                    \"In the past, I have had multiple Software Engineering Internships, most recent one being in Ninja Van.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/about.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, _this),\n                    \"You may head over to the Work Page to find out more!\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/about.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, _this),\n                    \"In my free time, I like to play International Chess competitively, and perform my duties as the Vice President (Internal) of the NUS Intellectual Games Club.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/about.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this),\n                    \"Last but not least, I follow the NBA and the MCU very closely. Many say that I am somewhat of an encyclopedia on these two topics :D.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/about.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kelvinzhou/Desktop/NinjaVanInternship/Zhou-Yi-Kelvin-Portfolio/pages/about.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this);\n};\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBMEI7QUFDZ0I7QUFFMUMsSUFBTUUsS0FBSyxHQUFHLFdBQU07SUFDbEIscUJBQ0UsOERBQUNELDBEQUFNOzswQkFDTCw4REFBQ0UsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDBDQUEwQzswQkFBQyxVQUFROzs7OztxQkFBTTswQkFDeEUsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyx3QkFBd0I7Ozs7O3FCQUFPOzBCQUU5Qyw4REFBQ0QsS0FBRzs7b0JBQUMsa0NBRUg7a0NBQUEsOERBQUNFLElBQUU7Ozs7NkJBQUc7b0JBQUEsdUZBR047a0NBQUEsOERBQUNBLElBQUU7Ozs7NkJBQUc7b0JBQUEsd0dBR047a0NBQUEsOERBQUNBLElBQUU7Ozs7NkJBQUc7b0JBQUEsc0RBRU47a0NBQUEsOERBQUNBLElBQUU7Ozs7NkJBQUc7b0JBQUEsK0pBSU47a0NBQUEsOERBQUNBLElBQUU7Ozs7NkJBQUc7b0JBQUEsdUlBR1I7Ozs7OztxQkFBTTs7Ozs7O2FBQ0MsQ0FDVDtDQUNIO0FBMUJLSCxLQUFBQSxLQUFLO0FBNEJYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanM/MGM0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5cbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC02eGwgbGc6dGV4dC04eGwgZm9udC1zZW1pYm9sZCBweS0zMic+QWJvdXQgTWU8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LTR4bCBmb250LXNlbWlib2xkJz48L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgSGVsbG8hIFdlbGNvbWUgdG8gbXkgQWJvdXQgUGFnZS5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIE15IG5hbWUgaXMgS2VsdmluLCBhbiBhc3BpcmluZyBTb2Z0d2FyZSBFbmdpbmVlciB0aGF0IHdpbGwgZ3JhZHVhdGUgZnJvbVxuICAgICAgICBOVVMgaW4gMjAyNC5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIEluIHRoZSBwYXN0LCBJIGhhdmUgaGFkIG11bHRpcGxlIFNvZnR3YXJlIEVuZ2luZWVyaW5nIEludGVybnNoaXBzLCBtb3N0XG4gICAgICAgIHJlY2VudCBvbmUgYmVpbmcgaW4gTmluamEgVmFuLlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgWW91IG1heSBoZWFkIG92ZXIgdG8gdGhlIFdvcmsgUGFnZSB0byBmaW5kIG91dCBtb3JlIVxuICAgICAgICA8YnIgLz5cbiAgICAgICAgSW4gbXkgZnJlZSB0aW1lLCBJIGxpa2UgdG8gcGxheSBJbnRlcm5hdGlvbmFsIENoZXNzIGNvbXBldGl0aXZlbHksIGFuZFxuICAgICAgICBwZXJmb3JtIG15IGR1dGllcyBhcyB0aGUgVmljZSBQcmVzaWRlbnQgKEludGVybmFsKSBvZiB0aGUgTlVTXG4gICAgICAgIEludGVsbGVjdHVhbCBHYW1lcyBDbHViLlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgTGFzdCBidXQgbm90IGxlYXN0LCBJIGZvbGxvdyB0aGUgTkJBIGFuZCB0aGUgTUNVIHZlcnkgY2xvc2VseS4gTWFueSBzYXlcbiAgICAgICAgdGhhdCBJIGFtIHNvbWV3aGF0IG9mIGFuIGVuY3ljbG9wZWRpYSBvbiB0aGVzZSB0d28gdG9waWNzIDpELlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkFib3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fkelvinzhou%2FDesktop%2FNinjaVanInternship%2FZhou-Yi-Kelvin-Portfolio%2Fpages%2Fabout.js&page=%2Fabout!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);