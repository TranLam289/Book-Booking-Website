"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(routes)/access/register/page",{

/***/ "(app-pages-browser)/./src/components/access/register.tsx":
/*!********************************************!*\
  !*** ./src/components/access/register.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Register; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Register() {\n    _s();\n    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        username: \"\",\n        email: \"\",\n        pass: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setValues((prevValues)=>({\n                ...prevValues,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:7000/register\", values).then((res)=>console.log(res)).then((err)=>console.log(err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center min-h-screen bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-8 rounded-lg shadow-lg w-full max-w-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-bold mb-6 text-center text-gray-800\",\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"username\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"User Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Enter your username\",\n                                    name: \"username\",\n                                    onChange: (e)=>setValues({\n                                            ...values,\n                                            username: e.target.value\n                                        }),\n                                    className: \"w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Email\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Enter your email\",\n                                    name: \"email\",\n                                    onChange: (e)=>setValues({\n                                            ...values,\n                                            email: e.target.value\n                                        }),\n                                    className: \"w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"password\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"User Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Enter your password\",\n                                    name: \"password\",\n                                    onChange: (e)=>setValues({\n                                            ...values,\n                                            pass: e.target.value\n                                        }),\n                                    className: \"w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300\",\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-black flex justify-center items-center py-2\",\n                            children: [\n                                \" \",\n                                \"Already have an account?\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition duration-300 inline-block w-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    href: \"/access/login\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Register, \"b6LTgBB0cNJNQOp/Z7MI5bSKmj4=\");\n_c = Register;\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2FjY2Vzcy9yZWdpc3Rlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDNkI7QUFDVztBQUNkO0FBRVgsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQztRQUNuQ0ssVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLE1BQU07SUFDUjtJQUVBLE1BQU1DLGVBQWUsQ0FBQ0M7UUFDcEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ2hDUixVQUFVLENBQUNTLGFBQWdCO2dCQUN6QixHQUFHQSxVQUFVO2dCQUNiLENBQUNILEtBQUssRUFBRUM7WUFDVjtJQUNGO0lBRUEsTUFBTUcsZUFBZSxDQUFDTDtRQUNwQkEsRUFBRU0sY0FBYztRQUNoQmQsNkNBQUtBLENBQ0ZlLElBQUksQ0FBQyxrQ0FBa0NiLFFBQ3ZDYyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUMsUUFBUUMsR0FBRyxDQUFDRixNQUMxQkQsSUFBSSxDQUFDLENBQUNJLE1BQVFGLFFBQVFDLEdBQUcsQ0FBQ0M7SUFDL0I7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUFvRDs7Ozs7OzhCQUdsRSw4REFBQ0U7b0JBQUtDLFVBQVVaOztzQ0FDZCw4REFBQ1E7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDSTtvQ0FBTUMsU0FBUTs4Q0FDYiw0RUFBQ0M7a0RBQU87Ozs7Ozs7Ozs7OzhDQUVWLDhEQUFDQztvQ0FDQ0MsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWnRCLE1BQUs7b0NBQ0x1QixVQUFVLENBQUN4QixJQUNUTCxVQUFVOzRDQUFFLEdBQUdELE1BQU07NENBQUVFLFVBQVVJLEVBQUVHLE1BQU0sQ0FBQ0QsS0FBSzt3Q0FBQztvQ0FFbERZLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FHZCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDSTtvQ0FBTUMsU0FBUTs4Q0FDYiw0RUFBQ0M7a0RBQU87Ozs7Ozs7Ozs7OzhDQUVWLDhEQUFDQztvQ0FDQ0MsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWnRCLE1BQUs7b0NBQ0x1QixVQUFVLENBQUN4QixJQUFNTCxVQUFVOzRDQUFFLEdBQUdELE1BQU07NENBQUVHLE9BQU9HLEVBQUVHLE1BQU0sQ0FBQ0QsS0FBSzt3Q0FBQztvQ0FDOURZLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FHZCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDSTtvQ0FBTUMsU0FBUTs4Q0FDYiw0RUFBQ0M7a0RBQU87Ozs7Ozs7Ozs7OzhDQUVWLDhEQUFDQztvQ0FDQ0MsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWnRCLE1BQUs7b0NBQ0x1QixVQUFVLENBQUN4QixJQUFNTCxVQUFVOzRDQUFFLEdBQUdELE1BQU07NENBQUVJLE1BQU1FLEVBQUVHLE1BQU0sQ0FBQ0QsS0FBSzt3Q0FBQztvQ0FDN0RZLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FHZCw4REFBQ1c7NEJBQ0NILE1BQUs7NEJBQ0xSLFdBQVU7c0NBQ1g7Ozs7OztzQ0FJRCw4REFBQ0Q7NEJBQUlDLFdBQVU7O2dDQUNaO2dDQUFJOzs7Ozs7O3NDQUlQLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ1c7Z0NBQ0NILE1BQUs7Z0NBQ0xSLFdBQVU7MENBRVYsNEVBQUN6QixpREFBSUE7b0NBQUNxQyxNQUFLOzhDQUNULDRFQUFDYjtrREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckI7R0E5RndCcEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYWNjZXNzL3JlZ2lzdGVyLnRzeD84NWMzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0ZXIoKSB7XHJcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgIHVzZXJuYW1lOiAnJyxcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBhc3M6ICcnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIHNldFZhbHVlcygocHJldlZhbHVlcykgPT4gKHtcclxuICAgICAgLi4ucHJldlZhbHVlcyxcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogYW55KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo3MDAwL3JlZ2lzdGVyJywgdmFsdWVzKVxyXG4gICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gICAgICAudGhlbigoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBiZy1ncmF5LTEwMCc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSBwLTggcm91bmRlZC1sZyBzaGFkb3ctbGcgdy1mdWxsIG1heC13LW1kJz5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBmb250LWJvbGQgbWItNiB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktODAwJz5cclxuICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi00Jz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3VzZXJuYW1lJz5cclxuICAgICAgICAgICAgICA8c3Ryb25nPlVzZXIgTmFtZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIHVzZXJuYW1lJ1xyXG4gICAgICAgICAgICAgIG5hbWU9J3VzZXJuYW1lJ1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50J1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNCc+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCc+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5FbWFpbDwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIGVtYWlsJ1xyXG4gICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItdHJhbnNwYXJlbnQnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi00Jz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3Bhc3N3b3JkJz5cclxuICAgICAgICAgICAgICA8c3Ryb25nPlVzZXIgTmFtZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIHBhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBwYXNzOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBweC0zIHB5LTIgYm9yZGVyIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBweS0yIHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS02MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAnXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ibGFjayBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBweS0yJz5cclxuICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktNCc+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHB5LTIgcm91bmRlZC1tZCBob3ZlcjpiZy1ncmVlbi02MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgaW5saW5lLWJsb2NrIHctZnVsbCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hY2Nlc3MvbG9naW4nPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5Mb2dpbjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIlJlZ2lzdGVyIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3MiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldlZhbHVlcyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJzdHJvbmciLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/access/register.tsx\n"));

/***/ })

});