"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(routes)/homepage/page",{

/***/ "(app-pages-browser)/./src/components/booksPage.tsx":
/*!**************************************!*\
  !*** ./src/components/booksPage.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Books = ()=>{\n    _s();\n    const [books, setBooks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchAllBooks = async ()=>{\n            try {\n                const res = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:7000/books\");\n                setBooks(res.data);\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        fetchAllBooks();\n    }, []);\n    // console.log(books);\n    const handleDelete = async (id)=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].delete(\"http://localhost:7000/books/\".concat(id));\n            window.location.reload();\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-6\",\n                children: \"Tokyo Book Shop\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\booksPage.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 pb-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    href: \"/book-crud/add\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600\",\n                        children: \"Add new book\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\booksPage.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\booksPage.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\booksPage.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-y-auto max-h-[550px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 \",\n                    children: books.map((book)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white rounded-lg shadow-md p-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: book.book_cover,\n                                    alt: \"\",\n                                    className: \"w-full h-48 object-cover mb-4\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\booksPage.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-bold mb-2\",\n                                    children: book.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\booksPage.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-700 mb-4\",\n                                    children: book.bookDesc\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\booksPage.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-lg font-semibold text-blue-500\",\n                                    children: book.author\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\booksPage.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-700 mb-4 uppercase font-[600]\",\n                                    children: book.book_status\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\booksPage.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>handleDelete(book.book_id),\n                                            className: \"bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-600 focus:outline-none focus:bg-red-600\",\n                                            children: \"Delete\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\booksPage.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            href: \"/book-crud/update/\".concat(book.book_id),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-blue-500 hover:underline py-4\",\n                                                children: \"Update\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\booksPage.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\booksPage.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\booksPage.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, book.book_id, true, {\n                            fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\booksPage.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\booksPage.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\booksPage.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Eco-mart\\\\Documents\\\\Book-Booking-Website-dev\\\\client\\\\src\\\\components\\\\booksPage.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Books, \"ww1JAI05mMsgubm5EIyBKqdj5S0=\");\n_c = Books;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Books);\nvar _c;\n$RefreshReg$(_c, \"Books\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Jvb2tzUGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFMEI7QUFDUTtBQUNEO0FBQ1A7QUFDRztBQVc3QixNQUFNSyxRQUFROztJQUNaLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBUyxFQUFFO0lBRTdDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1PLGdCQUFnQjtZQUNwQixJQUFJO2dCQUNGLE1BQU1DLE1BQU0sTUFBTU4sNkNBQUtBLENBQUNPLEdBQUcsQ0FBQztnQkFDNUJILFNBQVNFLElBQUlFLElBQUk7WUFDbkIsRUFBRSxPQUFPQyxLQUFLO2dCQUNaQyxRQUFRQyxHQUFHLENBQUNGO1lBQ2Q7UUFDRjtRQUNBSjtJQUNGLEdBQUcsRUFBRTtJQUVMLHNCQUFzQjtJQUV0QixNQUFNTyxlQUFlLE9BQU9DO1FBQzFCLElBQUk7WUFDRixNQUFNYiw2Q0FBS0EsQ0FBQ2MsTUFBTSxDQUFDLCtCQUFrQyxPQUFIRDtZQUNsREUsT0FBT0MsUUFBUSxDQUFDQyxNQUFNO1FBQ3hCLEVBQUUsT0FBT1IsS0FBSztZQUNaQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDUztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTBCOzs7Ozs7MEJBRXhDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ2xCLGlEQUFJQTtvQkFBQ29CLE1BQUs7OEJBQ1QsNEVBQUNIO3dCQUFJQyxXQUFVO2tDQUFxRzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNeEgsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDWmhCLE1BQU1tQixHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNMOzRCQUVDQyxXQUFVOzs4Q0FFViw4REFBQ0s7b0NBQ0NDLEtBQUtGLEtBQUtHLFVBQVU7b0NBQ3BCQyxLQUFJO29DQUNKUixXQUFVOzs7Ozs7OENBRVosOERBQUNTO29DQUFHVCxXQUFVOzhDQUEwQkksS0FBS00sS0FBSzs7Ozs7OzhDQUNsRCw4REFBQ0M7b0NBQUVYLFdBQVU7OENBQXNCSSxLQUFLUSxRQUFROzs7Ozs7OENBQ2hELDhEQUFDQztvQ0FBS2IsV0FBVTs4Q0FDYkksS0FBS1UsTUFBTTs7Ozs7OzhDQUVkLDhEQUFDSDtvQ0FBRVgsV0FBVTs4Q0FDVkksS0FBS1csV0FBVzs7Ozs7OzhDQUduQiw4REFBQ2hCO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ2dCOzRDQUNDQyxTQUFTLElBQU14QixhQUFhVyxLQUFLYyxPQUFPOzRDQUN4Q2xCLFdBQVU7c0RBQ1g7Ozs7OztzREFHRCw4REFBQ2xCLGlEQUFJQTs0Q0FBQ29CLE1BQU0scUJBQWtDLE9BQWJFLEtBQUtjLE9BQU87c0RBQzNDLDRFQUFDbkI7Z0RBQUlDLFdBQVU7MERBQXFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBekJuREksS0FBS2MsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0MvQjtHQTlFTW5DO0tBQUFBO0FBZ0ZOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Jvb2tzUGFnZS50c3g/MDBmYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW50ZXJmYWNlIEJvb2sge1xyXG4gIGJvb2tfaWQ6IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGF1dGhvcjogc3RyaW5nO1xyXG4gIGJvb2tEZXNjOiBzdHJpbmc7XHJcbiAgYm9va19jb3Zlcjogc3RyaW5nOyAvLyBBc3N1bWluZyBjb3ZlciBpcyBhIHN0cmluZyBVUkxcclxuICBib29rX3N0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBCb29rcyA9ICgpID0+IHtcclxuICBjb25zdCBbYm9va3MsIHNldEJvb2tzXSA9IHVzZVN0YXRlPEJvb2tbXT4oW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hBbGxCb29rcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NzAwMC9ib29rcycpO1xyXG4gICAgICAgIHNldEJvb2tzKHJlcy5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoQWxsQm9va3MoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGJvb2tzKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkOiBhbnkpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDo3MDAwL2Jvb2tzLyR7aWR9YCk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG14LWF1dG8gcC02Jz5cclxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1ib2xkIG1iLTYnPlRva3lvIEJvb2sgU2hvcDwvaDE+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtOCBwYi04Jz5cclxuICAgICAgICA8TGluayBocmVmPScvYm9vay1jcnVkL2FkZCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6YmctYmx1ZS02MDAnPlxyXG4gICAgICAgICAgICBBZGQgbmV3IGJvb2tcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ZlcmZsb3cteS1hdXRvIG1heC1oLVs1NTBweF0nPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGdhcC02ICc+XHJcbiAgICAgICAgICB7Ym9va3MubWFwKChib29rKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2Jvb2suYm9va19pZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LW1kIHAtNidcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17Ym9vay5ib29rX2NvdmVyfVxyXG4gICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBoLTQ4IG9iamVjdC1jb3ZlciBtYi00J1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC14bCBmb250LWJvbGQgbWItMic+e2Jvb2sudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtZ3JheS03MDAgbWItNCc+e2Jvb2suYm9va0Rlc2N9PC9wPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtYmx1ZS01MDAnPlxyXG4gICAgICAgICAgICAgICAge2Jvb2suYXV0aG9yfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtZ3JheS03MDAgbWItNCB1cHBlcmNhc2UgZm9udC1bNjAwXSc+XHJcbiAgICAgICAgICAgICAgICB7Ym9vay5ib29rX3N0YXR1c31cclxuICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00Jz5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGJvb2suYm9va19pZCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLW1kIG1yLTIgaG92ZXI6YmctcmVkLTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6YmctcmVkLTYwMCdcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYm9vay1jcnVkL3VwZGF0ZS8ke2Jvb2suYm9va19pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtYmx1ZS01MDAgaG92ZXI6dW5kZXJsaW5lIHB5LTQnPlxyXG4gICAgICAgICAgICAgICAgICAgIFVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9va3M7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJMaW5rIiwiQm9va3MiLCJib29rcyIsInNldEJvb2tzIiwiZmV0Y2hBbGxCb29rcyIsInJlcyIsImdldCIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJkZWxldGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaHJlZiIsIm1hcCIsImJvb2siLCJpbWciLCJzcmMiLCJib29rX2NvdmVyIiwiYWx0IiwiaDIiLCJ0aXRsZSIsInAiLCJib29rRGVzYyIsInNwYW4iLCJhdXRob3IiLCJib29rX3N0YXR1cyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJib29rX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/booksPage.tsx\n"));

/***/ })

});