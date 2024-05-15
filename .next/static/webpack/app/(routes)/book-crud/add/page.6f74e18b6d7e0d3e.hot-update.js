"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(routes)/book-crud/add/page",{

/***/ "(app-pages-browser)/./src/components/addBook.tsx":
/*!************************************!*\
  !*** ./src/components/addBook.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Add = ()=>{\n    _s();\n    const [book, setBook] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        bookDesc: \"\",\n        author: null,\n        book_cover: \"\",\n        book_status: null\n    });\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // const navigate = useNavigate();\n    const handleChange = (e)=>{\n        setBook((prev)=>({\n                ...prev,\n                [e.target.name]: e.target.value\n            }));\n    };\n    const handleClick = async (e)=>{\n        e.preventDefault();\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:7000/books\", book);\n        //  navigate('/');\n        } catch (err) {\n            console.log(err);\n            setError(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"form max-w-lg mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Add New Book\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\addBook.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Book title\",\n                name: \"title\",\n                onChange: handleChange,\n                className: \"block w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\addBook.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                rows: 5,\n                placeholder: \"Book description\",\n                name: \"bookDesc\",\n                onChange: handleChange,\n                className: \"block w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\addBook.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Author\",\n                name: \"author\",\n                onChange: handleChange,\n                className: \"block w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\addBook.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Book cover\",\n                name: \"book_cover\",\n                onChange: handleChange,\n                className: \"block w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\addBook.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            success && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-green-600 mt-2\",\n                children: \"Added Successfully\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\addBook.tsx\",\n                lineNumber: 70,\n                columnNumber: 19\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                className: \"bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600\",\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\addBook.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-red-500 mt-2\",\n                children: \"Something went wrong!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\addBook.tsx\",\n                lineNumber: 77,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    href: \"/\",\n                    className: \"text-blue-500 hover:underline\",\n                    children: \"See all books\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\addBook.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\addBook.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\addBook.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Add, \"ICPVthgFyJO+v6E+aEhC7seCyPQ=\");\n_c = Add;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Add);\nvar _c;\n$RefreshReg$(_c, \"Add\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2FkZEJvb2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRTBCO0FBQ0E7QUFDTztBQUNKO0FBRTdCLE1BQU1JLE1BQU07O0lBQ1YsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFDO1FBQy9CSyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsUUFBUTtRQUNSQyxZQUFZO1FBQ1pDLGFBQWE7SUFDZjtJQUNBLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7SUFFdkMsa0NBQWtDO0lBRWxDLE1BQU1jLGVBQWUsQ0FBQ0M7UUFDcEJYLFFBQVEsQ0FBQ1ksT0FBVTtnQkFBRSxHQUFHQSxJQUFJO2dCQUFFLENBQUNELEVBQUVFLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVILEVBQUVFLE1BQU0sQ0FBQ0UsS0FBSztZQUFDO0lBQ2hFO0lBRUEsTUFBTUMsY0FBYyxPQUFPTDtRQUN6QkEsRUFBRU0sY0FBYztRQUNoQixJQUFJO1lBQ0YsTUFBTXZCLDZDQUFLQSxDQUFDd0IsSUFBSSxDQUFDLCtCQUErQm5CO1FBQ2hELGtCQUFrQjtRQUNwQixFQUFFLE9BQU9vQixLQUFLO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWlosU0FBUztRQUNYO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUEwQjs7Ozs7OzBCQUN4Qyw4REFBQ0U7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1piLE1BQUs7Z0JBQ0xjLFVBQVVsQjtnQkFDVmEsV0FBVTs7Ozs7OzBCQUVaLDhEQUFDTTtnQkFDQ0MsTUFBTTtnQkFDTkgsYUFBWTtnQkFDWmIsTUFBSztnQkFDTGMsVUFBVWxCO2dCQUNWYSxXQUFVOzs7Ozs7MEJBR1osOERBQUNFO2dCQUNDQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaYixNQUFLO2dCQUNMYyxVQUFVbEI7Z0JBQ1ZhLFdBQVU7Ozs7OzswQkFFWiw4REFBQ0U7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1piLE1BQUs7Z0JBQ0xjLFVBQVVsQjtnQkFDVmEsV0FBVTs7Ozs7O1lBR1hmLHlCQUFXLDhEQUFDdUI7Z0JBQUVSLFdBQVU7MEJBQXNCOzs7Ozs7MEJBQy9DLDhEQUFDUztnQkFDQ0MsU0FBU2pCO2dCQUNUTyxXQUFVOzBCQUNYOzs7Ozs7WUFHQWpCLHVCQUFTLDhEQUFDeUI7Z0JBQUVSLFdBQVU7MEJBQW9COzs7Ozs7MEJBQzNDLDhEQUFDUTtnQkFBRVIsV0FBVTswQkFDWCw0RUFBQzFCLGlEQUFJQTtvQkFBQ3FDLE1BQUs7b0JBQUlYLFdBQVU7OEJBQWdDOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1qRTtHQTdFTXpCO0tBQUFBO0FBK0VOLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2FkZEJvb2sudHN4PzQyYmUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBBZGQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Jvb2ssIHNldEJvb2tdID0gdXNlU3RhdGUoe1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgYm9va0Rlc2M6ICcnLFxyXG4gICAgYXV0aG9yOiBudWxsLFxyXG4gICAgYm9va19jb3ZlcjogJycsXHJcbiAgICBib29rX3N0YXR1czogbnVsbCxcclxuICB9KTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBhbnkpID0+IHtcclxuICAgIHNldEJvb2soKHByZXYpID0+ICh7IC4uLnByZXYsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKGU6IGFueSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo3MDAwL2Jvb2tzJywgYm9vayk7XHJcbiAgICAgIC8vICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybSBtYXgtdy1sZyBteC1hdXRvIG10LTggcC02IGJnLWdyYXktMTAwIHJvdW5kZWQtbGcgc2hhZG93LW1kJz5cclxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1ib2xkIG1iLTQnPkFkZCBOZXcgQm9vazwvaDE+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9J0Jvb2sgdGl0bGUnXHJcbiAgICAgICAgbmFtZT0ndGl0bGUnXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICBjbGFzc05hbWU9J2Jsb2NrIHctZnVsbCBwLTIgbWItNCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMCdcclxuICAgICAgLz5cclxuICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgcm93cz17NX1cclxuICAgICAgICBwbGFjZWhvbGRlcj0nQm9vayBkZXNjcmlwdGlvbidcclxuICAgICAgICBuYW1lPSdib29rRGVzYydcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIGNsYXNzTmFtZT0nYmxvY2sgdy1mdWxsIHAtMiBtYi00IGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwJ1xyXG4gICAgICAvPlxyXG4gICAgICB7LyogKi99XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9J0F1dGhvcidcclxuICAgICAgICBuYW1lPSdhdXRob3InXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICBjbGFzc05hbWU9J2Jsb2NrIHctZnVsbCBwLTIgbWItNCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMCdcclxuICAgICAgLz5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICBwbGFjZWhvbGRlcj0nQm9vayBjb3ZlcidcclxuICAgICAgICBuYW1lPSdib29rX2NvdmVyJ1xyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgY2xhc3NOYW1lPSdibG9jayB3LWZ1bGwgcC0yIG1iLTQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDAnXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7c3VjY2VzcyAmJiA8cCBjbGFzc05hbWU9J3RleHQtZ3JlZW4tNjAwIG10LTInPkFkZGVkIFN1Y2Nlc3NmdWxseTwvcD59XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICBjbGFzc05hbWU9J2JnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS02MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLWJsdWUtNjAwJ1xyXG4gICAgICA+XHJcbiAgICAgICAgQWRkXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPSd0ZXh0LXJlZC01MDAgbXQtMic+U29tZXRoaW5nIHdlbnQgd3JvbmchPC9wPn1cclxuICAgICAgPHAgY2xhc3NOYW1lPSdtdC00Jz5cclxuICAgICAgICA8TGluayBocmVmPScvJyBjbGFzc05hbWU9J3RleHQtYmx1ZS01MDAgaG92ZXI6dW5kZXJsaW5lJz5cclxuICAgICAgICAgIFNlZSBhbGwgYm9va3NcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGQ7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiQWRkIiwiYm9vayIsInNldEJvb2siLCJ0aXRsZSIsImJvb2tEZXNjIiwiYXV0aG9yIiwiYm9va19jb3ZlciIsImJvb2tfc3RhdHVzIiwiZXJyb3IiLCJzZXRFcnJvciIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXYiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVDbGljayIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0ZXh0YXJlYSIsInJvd3MiLCJwIiwiYnV0dG9uIiwib25DbGljayIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/addBook.tsx\n"));

/***/ })

});