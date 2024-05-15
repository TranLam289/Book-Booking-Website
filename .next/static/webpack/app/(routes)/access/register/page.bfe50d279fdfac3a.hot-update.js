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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Register; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/dist/api/router.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Register() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        username: \"\",\n        email: \"\",\n        pass: \"\",\n        role_type: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setValues((prevValues)=>({\n                ...prevValues,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:7000/register\", values).then((res)=>{\n            if (res.data.Status === \"User registered successfully\") {\n                router.push(\"/access/login\");\n                console.log(\"Registration successful\");\n            } else {\n                alert(\"Registration failed\");\n            }\n        }).then((err)=>console.log(err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center min-h-screen bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-8 rounded-lg shadow-lg w-full max-w-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-bold mb-6 text-center text-gray-800\",\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"username\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"User Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Enter your username\",\n                                    name: \"username\",\n                                    onChange: (e)=>setValues({\n                                            ...values,\n                                            username: e.target.value\n                                        }),\n                                    className: \"w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Email\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Enter your email\",\n                                    name: \"email\",\n                                    onChange: (e)=>setValues({\n                                            ...values,\n                                            email: e.target.value\n                                        }),\n                                    className: \"w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"password\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Password\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Enter your password\",\n                                    name: \"pass\",\n                                    onChange: (e)=>setValues({\n                                            ...values,\n                                            pass: e.target.value\n                                        }),\n                                    className: \"w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"role_type\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Role Type\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    name: \"book_status\",\n                                    onChange: (e)=>setValues({\n                                            ...values,\n                                            role_type: e.target.value\n                                        }),\n                                    className: \"block w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                                    children: [\n                                        \"Select Your Role Type\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"user\",\n                                            children: \"User\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"admin\",\n                                            children: \"Admin\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300\",\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-black flex justify-center items-center py-2\",\n                            children: [\n                                \" \",\n                                \"Already have an account?\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition duration-300 inline-block w-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    href: \"/access/login\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\access\\\\register.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Register, \"20ne8XyhLigQQzSlg+FzeebUeho=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Register;\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2FjY2Vzcy9yZWdpc3Rlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzZCO0FBQ2dCO0FBQ25CO0FBQ3NCO0FBRWpDLFNBQVNLOztJQUN0QixNQUFNQyxTQUFTRixzREFBU0E7SUFFeEIsTUFBTSxDQUFDRyxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFDO1FBQ25DTyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxXQUFXO0lBQ2I7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ1QsVUFBVSxDQUFDVSxhQUFnQjtnQkFDekIsR0FBR0EsVUFBVTtnQkFDYixDQUFDSCxLQUFLLEVBQUVDO1lBQ1Y7SUFDRjtJQUVBLE1BQU1HLGVBQWUsQ0FBQ0w7UUFDcEJBLEVBQUVNLGNBQWM7UUFDaEJqQiw2Q0FBS0EsQ0FDRmtCLElBQUksQ0FBQyxrQ0FBa0NkLFFBQ3ZDZSxJQUFJLENBQUMsQ0FBQ0M7WUFDTCxJQUFJQSxJQUFJQyxJQUFJLENBQUNDLE1BQU0sS0FBSyxnQ0FBZ0M7Z0JBQ3REbkIsT0FBT29CLElBQUksQ0FBQztnQkFDWkMsUUFBUUMsR0FBRyxDQUFDO1lBQ2QsT0FBTztnQkFDTEMsTUFBTTtZQUNSO1FBQ0YsR0FDQ1AsSUFBSSxDQUFDLENBQUNRLE1BQVFILFFBQVFDLEdBQUcsQ0FBQ0U7SUFDL0I7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUFvRDs7Ozs7OzhCQUdsRSw4REFBQ0U7b0JBQUtDLFVBQVVoQjs7c0NBQ2QsOERBQUNZOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0k7b0NBQU1DLFNBQVE7OENBQ2IsNEVBQUNDO2tEQUFPOzs7Ozs7Ozs7Ozs4Q0FFViw4REFBQ0M7b0NBQ0NDLE1BQUs7b0NBQ0xDLGFBQVk7b0NBQ1oxQixNQUFLO29DQUNMMkIsVUFBVSxDQUFDNUIsSUFDVE4sVUFBVTs0Q0FBRSxHQUFHRCxNQUFNOzRDQUFFRSxVQUFVSyxFQUFFRyxNQUFNLENBQUNELEtBQUs7d0NBQUM7b0NBRWxEZ0IsV0FBVTs7Ozs7Ozs7Ozs7O3NDQUdkLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNJO29DQUFNQyxTQUFROzhDQUNiLDRFQUFDQztrREFBTzs7Ozs7Ozs7Ozs7OENBRVYsOERBQUNDO29DQUNDQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaMUIsTUFBSztvQ0FDTDJCLFVBQVUsQ0FBQzVCLElBQU1OLFVBQVU7NENBQUUsR0FBR0QsTUFBTTs0Q0FBRUcsT0FBT0ksRUFBRUcsTUFBTSxDQUFDRCxLQUFLO3dDQUFDO29DQUM5RGdCLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FHZCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDSTtvQ0FBTUMsU0FBUTs4Q0FDYiw0RUFBQ0M7a0RBQU87Ozs7Ozs7Ozs7OzhDQUVWLDhEQUFDQztvQ0FDQ0MsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWjFCLE1BQUs7b0NBQ0wyQixVQUFVLENBQUM1QixJQUFNTixVQUFVOzRDQUFFLEdBQUdELE1BQU07NENBQUVJLE1BQU1HLEVBQUVHLE1BQU0sQ0FBQ0QsS0FBSzt3Q0FBQztvQ0FDN0RnQixXQUFVOzs7Ozs7Ozs7Ozs7c0NBSWQsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0k7b0NBQU1DLFNBQVE7OENBQ2IsNEVBQUNDO2tEQUFPOzs7Ozs7Ozs7Ozs4Q0FFViw4REFBQ0s7b0NBQ0M1QixNQUFLO29DQUNMMkIsVUFBVSxDQUFDNUIsSUFDVE4sVUFBVTs0Q0FBRSxHQUFHRCxNQUFNOzRDQUFFSyxXQUFXRSxFQUFFRyxNQUFNLENBQUNELEtBQUs7d0NBQUM7b0NBRW5EZ0IsV0FBVTs7d0NBQ1g7c0RBRUMsOERBQUNZOzRDQUFPNUIsT0FBTTtzREFBTzs7Ozs7O3NEQUNyQiw4REFBQzRCOzRDQUFPNUIsT0FBTTtzREFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUkxQiw4REFBQzZCOzRCQUNDTCxNQUFLOzRCQUNMUixXQUFVO3NDQUNYOzs7Ozs7c0NBSUQsOERBQUNEOzRCQUFJQyxXQUFVOztnQ0FDWjtnQ0FBSTs7Ozs7OztzQ0FJUCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNhO2dDQUNDTCxNQUFLO2dDQUNMUixXQUFVOzBDQUVWLDRFQUFDaEMsaURBQUlBO29DQUFDOEMsTUFBSzs4Q0FDVCw0RUFBQ2Y7a0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXJCO0dBMUh3QjFCOztRQUNQRCxrREFBU0E7OztLQURGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hY2Nlc3MvcmVnaXN0ZXIudHN4Pzg1YzMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgIHVzZXJuYW1lOiAnJyxcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBhc3M6ICcnLFxyXG4gICAgcm9sZV90eXBlOiAnJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRWYWx1ZXMoKHByZXZWYWx1ZXMpID0+ICh7XHJcbiAgICAgIC4uLnByZXZWYWx1ZXMsXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IGFueSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NzAwMC9yZWdpc3RlcicsIHZhbHVlcylcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuZGF0YS5TdGF0dXMgPT09ICdVc2VyIHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5Jykge1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9hY2Nlc3MvbG9naW4nKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbGVydCgnUmVnaXN0cmF0aW9uIGZhaWxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gYmctZ3JheS0xMDAnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctd2hpdGUgcC04IHJvdW5kZWQtbGcgc2hhZG93LWxnIHctZnVsbCBtYXgtdy1tZCc+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1ib2xkIG1iLTYgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTgwMCc+XHJcbiAgICAgICAgICBSZWdpc3RlclxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNCc+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSd1c2VybmFtZSc+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5Vc2VyIE5hbWU8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciB1c2VybmFtZSdcclxuICAgICAgICAgICAgICBuYW1lPSd1c2VybmFtZSdcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBweC0zIHB5LTIgYm9yZGVyIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTQnPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+RW1haWw8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBlbWFpbCdcclxuICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50J1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNCc+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdwYXNzd29yZCc+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5QYXNzd29yZDwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIHBhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgIG5hbWU9J3Bhc3MnXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIHBhc3M6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50J1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTQnPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncm9sZV90eXBlJz5cclxuICAgICAgICAgICAgICA8c3Ryb25nPlJvbGUgVHlwZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgbmFtZT0nYm9va19zdGF0dXMnXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCByb2xlX3R5cGU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmxvY2sgdy1mdWxsIHAtMiBtYi00IGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2VsZWN0IFlvdXIgUm9sZSBUeXBlXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0ndXNlcic+VXNlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2FkbWluJz5BZG1pbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcHktMiByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNjAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBSZWdpc3RlclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtYmxhY2sgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHktMic+XHJcbiAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P1xyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTQnPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBweS0yIHJvdW5kZWQtbWQgaG92ZXI6YmctZ3JlZW4tNjAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGlubGluZS1ibG9jayB3LWZ1bGwnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPScvYWNjZXNzL2xvZ2luJz5cclxuICAgICAgICAgICAgICAgIDxkaXY+TG9naW48L2Rpdj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJSZWdpc3RlciIsInJvdXRlciIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzIiwicm9sZV90eXBlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZWYWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIlN0YXR1cyIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJlcnIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsInN0cm9uZyIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJzZWxlY3QiLCJvcHRpb24iLCJidXR0b24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/access/register.tsx\n"));

/***/ })

});