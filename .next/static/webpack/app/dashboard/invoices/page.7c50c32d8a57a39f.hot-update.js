"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/invoices/page",{

/***/ "(app-pages-browser)/./app/ui/invoices/pagination.tsx":
/*!****************************************!*\
  !*** ./app/ui/invoices/pagination.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.11_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-20240704__rea_hie2i4gu4qrvpjvwathkjk27lm/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeftIcon,ArrowRightIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/.pnpm/@heroicons+react@2.1.4_react@19.0.0-rc-f38c22b244-20240704/node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeftIcon,ArrowRightIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/.pnpm/@heroicons+react@2.1.4_react@19.0.0-rc-f38c22b244-20240704/node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.11_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-20240704__rea_hie2i4gu4qrvpjvwathkjk27lm/node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction Pagination(param) {\n    let { totalPages } = param;\n    // NOTE: Uncomment this code in Chapter 11\n    // const allPages = generatePagination(currentPage, totalPages);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"inline-flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationArrow, {\n                    direction: \"left\",\n                    href: createPageURL(currentPage - 1),\n                    isDisabled: currentPage <= 1\n                }, void 0, false, {\n                    fileName: \"D:\\\\NextDocApp\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex -space-x-px\",\n                    children: allPages.map((page, index)=>{\n                        let position;\n                        if (index === 0) position = \"first\";\n                        if (index === allPages.length - 1) position = \"last\";\n                        if (allPages.length === 1) position = \"single\";\n                        if (page === \"...\") position = \"middle\";\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationNumber, {\n                            href: createPageURL(page),\n                            page: page,\n                            position: position,\n                            isActive: currentPage === page\n                        }, page, false, {\n                            fileName: \"D:\\\\NextDocApp\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\NextDocApp\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationArrow, {\n                    direction: \"right\",\n                    href: createPageURL(currentPage + 1),\n                    isDisabled: currentPage >= totalPages\n                }, void 0, false, {\n                    fileName: \"D:\\\\NextDocApp\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\NextDocApp\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Pagination;\nfunction PaginationNumber(param) {\n    let { page, href, isActive, position } = param;\n    const className = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex h-10 w-10 items-center justify-center text-sm border\", {\n        \"rounded-l-md\": position === \"first\" || position === \"single\",\n        \"rounded-r-md\": position === \"last\" || position === \"single\",\n        \"z-10 bg-blue-600 border-blue-600 text-white\": isActive,\n        \"hover:bg-gray-100\": !isActive && position !== \"middle\",\n        \"text-gray-300\": position === \"middle\"\n    });\n    return isActive || position === \"middle\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        children: page\n    }, void 0, false, {\n        fileName: \"D:\\\\NextDocApp\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        href: href,\n        className: className,\n        children: page\n    }, void 0, false, {\n        fileName: \"D:\\\\NextDocApp\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_c1 = PaginationNumber;\nfunction PaginationArrow(param) {\n    let { href, direction, isDisabled } = param;\n    const className = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex h-10 w-10 items-center justify-center rounded-md border\", {\n        \"pointer-events-none text-gray-300\": isDisabled,\n        \"hover:bg-gray-100\": !isDisabled,\n        \"mr-2 md:mr-4\": direction === \"left\",\n        \"ml-2 md:ml-4\": direction === \"right\"\n    });\n    const icon = direction === \"left\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"w-4\"\n    }, void 0, false, {\n        fileName: \"D:\\\\NextDocApp\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n        lineNumber: 107,\n        columnNumber: 7\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        className: \"w-4\"\n    }, void 0, false, {\n        fileName: \"D:\\\\NextDocApp\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n        lineNumber: 109,\n        columnNumber: 7\n    }, this);\n    return isDisabled ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        children: icon\n    }, void 0, false, {\n        fileName: \"D:\\\\NextDocApp\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        className: className,\n        href: href,\n        children: icon\n    }, void 0, false, {\n        fileName: \"D:\\\\NextDocApp\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, this);\n}\n_c2 = PaginationArrow;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Pagination\");\n$RefreshReg$(_c1, \"PaginationNumber\");\n$RefreshReg$(_c2, \"PaginationArrow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9pbnZvaWNlcy9wYWdpbmF0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRTJFO0FBQ3BEO0FBQ0s7QUFHYixTQUFTSSxXQUFXLEtBQXNDO1FBQXRDLEVBQUVDLFVBQVUsRUFBMEIsR0FBdEM7SUFDakMsMENBQTBDO0lBRTFDLGdFQUFnRTtJQUVoRSxxQkFDRTtrQkFHRSw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUNDQyxXQUFVO29CQUNWQyxNQUFNQyxjQUFjQyxjQUFjO29CQUNsQ0MsWUFBWUQsZUFBZTs7Ozs7OzhCQUc3Qiw4REFBQ047b0JBQUlDLFdBQVU7OEJBQ1pPLFNBQVNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQzt3QkFDbkIsSUFBSUM7d0JBRUosSUFBSUQsVUFBVSxHQUFHQyxXQUFXO3dCQUM1QixJQUFJRCxVQUFVSCxTQUFTSyxNQUFNLEdBQUcsR0FBR0QsV0FBVzt3QkFDOUMsSUFBSUosU0FBU0ssTUFBTSxLQUFLLEdBQUdELFdBQVc7d0JBQ3RDLElBQUlGLFNBQVMsT0FBT0UsV0FBVzt3QkFFL0IscUJBQ0UsOERBQUNFOzRCQUVDVixNQUFNQyxjQUFjSzs0QkFDcEJBLE1BQU1BOzRCQUNORSxVQUFVQTs0QkFDVkcsVUFBVVQsZ0JBQWdCSTsyQkFKckJBOzs7OztvQkFPWDs7Ozs7OzhCQUdGLDhEQUFDUjtvQkFDQ0MsV0FBVTtvQkFDVkMsTUFBTUMsY0FBY0MsY0FBYztvQkFDbENDLFlBQVlELGVBQWVQOzs7Ozs7Ozs7Ozs7O0FBS3JDO0tBN0N3QkQ7QUErQ3hCLFNBQVNnQixpQkFBaUIsS0FVekI7UUFWeUIsRUFDeEJKLElBQUksRUFDSk4sSUFBSSxFQUNKVyxRQUFRLEVBQ1JILFFBQVEsRUFNVCxHQVZ5QjtJQVd4QixNQUFNWCxZQUFZTCxnREFBSUEsQ0FDcEIsNkRBQ0E7UUFDRSxnQkFBZ0JnQixhQUFhLFdBQVdBLGFBQWE7UUFDckQsZ0JBQWdCQSxhQUFhLFVBQVVBLGFBQWE7UUFDcEQsK0NBQStDRztRQUMvQyxxQkFBcUIsQ0FBQ0EsWUFBWUgsYUFBYTtRQUMvQyxpQkFBaUJBLGFBQWE7SUFDaEM7SUFHRixPQUFPRyxZQUFZSCxhQUFhLHlCQUM5Qiw4REFBQ1o7UUFBSUMsV0FBV0E7a0JBQVlTOzs7Ozs2QkFFNUIsOERBQUNiLGlEQUFJQTtRQUFDTyxNQUFNQTtRQUFNSCxXQUFXQTtrQkFDMUJTOzs7Ozs7QUFHUDtNQTdCU0k7QUErQlQsU0FBU1osZ0JBQWdCLEtBUXhCO1FBUndCLEVBQ3ZCRSxJQUFJLEVBQ0pELFNBQVMsRUFDVEksVUFBVSxFQUtYLEdBUndCO0lBU3ZCLE1BQU1OLFlBQVlMLGdEQUFJQSxDQUNwQixnRUFDQTtRQUNFLHFDQUFxQ1c7UUFDckMscUJBQXFCLENBQUNBO1FBQ3RCLGdCQUFnQkosY0FBYztRQUM5QixnQkFBZ0JBLGNBQWM7SUFDaEM7SUFHRixNQUFNYSxPQUNKYixjQUFjLHVCQUNaLDhEQUFDVCxzSEFBYUE7UUFBQ08sV0FBVTs7Ozs7NkJBRXpCLDhEQUFDTixzSEFBY0E7UUFBQ00sV0FBVTs7Ozs7O0lBRzlCLE9BQU9NLDJCQUNMLDhEQUFDUDtRQUFJQyxXQUFXQTtrQkFBWWU7Ozs7OzZCQUU1Qiw4REFBQ25CLGlEQUFJQTtRQUFDSSxXQUFXQTtRQUFXRyxNQUFNQTtrQkFDL0JZOzs7Ozs7QUFHUDtNQWpDU2QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3VpL2ludm9pY2VzL3BhZ2luYXRpb24udHN4PzgwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IEFycm93TGVmdEljb24sIEFycm93UmlnaHRJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lJ1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IGdlbmVyYXRlUGFnaW5hdGlvbiB9IGZyb20gJ0AvYXBwL2xpYi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IHRvdGFsUGFnZXMgfTogeyB0b3RhbFBhZ2VzOiBudW1iZXIgfSkge1xuICAvLyBOT1RFOiBVbmNvbW1lbnQgdGhpcyBjb2RlIGluIENoYXB0ZXIgMTFcblxuICAvLyBjb25zdCBhbGxQYWdlcyA9IGdlbmVyYXRlUGFnaW5hdGlvbihjdXJyZW50UGFnZSwgdG90YWxQYWdlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qICBOT1RFOiBVbmNvbW1lbnQgdGhpcyBjb2RlIGluIENoYXB0ZXIgMTEgKi99XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXhcIj5cbiAgICAgICAgPFBhZ2luYXRpb25BcnJvd1xuICAgICAgICAgIGRpcmVjdGlvbj1cImxlZnRcIlxuICAgICAgICAgIGhyZWY9e2NyZWF0ZVBhZ2VVUkwoY3VycmVudFBhZ2UgLSAxKX1cbiAgICAgICAgICBpc0Rpc2FibGVkPXtjdXJyZW50UGFnZSA8PSAxfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAtc3BhY2UteC1weFwiPlxuICAgICAgICAgIHthbGxQYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb246ICdmaXJzdCcgfCAnbGFzdCcgfCAnc2luZ2xlJyB8ICdtaWRkbGUnIHwgdW5kZWZpbmVkXG5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkgcG9zaXRpb24gPSAnZmlyc3QnXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IGFsbFBhZ2VzLmxlbmd0aCAtIDEpIHBvc2l0aW9uID0gJ2xhc3QnXG4gICAgICAgICAgICBpZiAoYWxsUGFnZXMubGVuZ3RoID09PSAxKSBwb3NpdGlvbiA9ICdzaW5nbGUnXG4gICAgICAgICAgICBpZiAocGFnZSA9PT0gJy4uLicpIHBvc2l0aW9uID0gJ21pZGRsZSdcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25OdW1iZXJcbiAgICAgICAgICAgICAgICBrZXk9e3BhZ2V9XG4gICAgICAgICAgICAgICAgaHJlZj17Y3JlYXRlUGFnZVVSTChwYWdlKX1cbiAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17Y3VycmVudFBhZ2UgPT09IHBhZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxQYWdpbmF0aW9uQXJyb3dcbiAgICAgICAgICBkaXJlY3Rpb249XCJyaWdodFwiXG4gICAgICAgICAgaHJlZj17Y3JlYXRlUGFnZVVSTChjdXJyZW50UGFnZSArIDEpfVxuICAgICAgICAgIGlzRGlzYWJsZWQ9e2N1cnJlbnRQYWdlID49IHRvdGFsUGFnZXN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5mdW5jdGlvbiBQYWdpbmF0aW9uTnVtYmVyKHtcbiAgcGFnZSxcbiAgaHJlZixcbiAgaXNBY3RpdmUsXG4gIHBvc2l0aW9uLFxufToge1xuICBwYWdlOiBudW1iZXIgfCBzdHJpbmdcbiAgaHJlZjogc3RyaW5nXG4gIHBvc2l0aW9uPzogJ2ZpcnN0JyB8ICdsYXN0JyB8ICdtaWRkbGUnIHwgJ3NpbmdsZSdcbiAgaXNBY3RpdmU6IGJvb2xlYW5cbn0pIHtcbiAgY29uc3QgY2xhc3NOYW1lID0gY2xzeChcbiAgICAnZmxleCBoLTEwIHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtc20gYm9yZGVyJyxcbiAgICB7XG4gICAgICAncm91bmRlZC1sLW1kJzogcG9zaXRpb24gPT09ICdmaXJzdCcgfHwgcG9zaXRpb24gPT09ICdzaW5nbGUnLFxuICAgICAgJ3JvdW5kZWQtci1tZCc6IHBvc2l0aW9uID09PSAnbGFzdCcgfHwgcG9zaXRpb24gPT09ICdzaW5nbGUnLFxuICAgICAgJ3otMTAgYmctYmx1ZS02MDAgYm9yZGVyLWJsdWUtNjAwIHRleHQtd2hpdGUnOiBpc0FjdGl2ZSxcbiAgICAgICdob3ZlcjpiZy1ncmF5LTEwMCc6ICFpc0FjdGl2ZSAmJiBwb3NpdGlvbiAhPT0gJ21pZGRsZScsXG4gICAgICAndGV4dC1ncmF5LTMwMCc6IHBvc2l0aW9uID09PSAnbWlkZGxlJyxcbiAgICB9XG4gIClcblxuICByZXR1cm4gaXNBY3RpdmUgfHwgcG9zaXRpb24gPT09ICdtaWRkbGUnID8gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntwYWdlfTwvZGl2PlxuICApIDogKFxuICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHtwYWdlfVxuICAgIDwvTGluaz5cbiAgKVxufVxuXG5mdW5jdGlvbiBQYWdpbmF0aW9uQXJyb3coe1xuICBocmVmLFxuICBkaXJlY3Rpb24sXG4gIGlzRGlzYWJsZWQsXG59OiB7XG4gIGhyZWY6IHN0cmluZ1xuICBkaXJlY3Rpb246ICdsZWZ0JyB8ICdyaWdodCdcbiAgaXNEaXNhYmxlZD86IGJvb2xlYW5cbn0pIHtcbiAgY29uc3QgY2xhc3NOYW1lID0gY2xzeChcbiAgICAnZmxleCBoLTEwIHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyJyxcbiAgICB7XG4gICAgICAncG9pbnRlci1ldmVudHMtbm9uZSB0ZXh0LWdyYXktMzAwJzogaXNEaXNhYmxlZCxcbiAgICAgICdob3ZlcjpiZy1ncmF5LTEwMCc6ICFpc0Rpc2FibGVkLFxuICAgICAgJ21yLTIgbWQ6bXItNCc6IGRpcmVjdGlvbiA9PT0gJ2xlZnQnLFxuICAgICAgJ21sLTIgbWQ6bWwtNCc6IGRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyxcbiAgICB9XG4gIClcblxuICBjb25zdCBpY29uID1cbiAgICBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IChcbiAgICAgIDxBcnJvd0xlZnRJY29uIGNsYXNzTmFtZT1cInctNFwiIC8+XG4gICAgKSA6IChcbiAgICAgIDxBcnJvd1JpZ2h0SWNvbiBjbGFzc05hbWU9XCJ3LTRcIiAvPlxuICAgIClcblxuICByZXR1cm4gaXNEaXNhYmxlZCA/IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57aWNvbn08L2Rpdj5cbiAgKSA6IChcbiAgICA8TGluayBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaHJlZj17aHJlZn0+XG4gICAgICB7aWNvbn1cbiAgICA8L0xpbms+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJBcnJvd0xlZnRJY29uIiwiQXJyb3dSaWdodEljb24iLCJjbHN4IiwiTGluayIsIlBhZ2luYXRpb24iLCJ0b3RhbFBhZ2VzIiwiZGl2IiwiY2xhc3NOYW1lIiwiUGFnaW5hdGlvbkFycm93IiwiZGlyZWN0aW9uIiwiaHJlZiIsImNyZWF0ZVBhZ2VVUkwiLCJjdXJyZW50UGFnZSIsImlzRGlzYWJsZWQiLCJhbGxQYWdlcyIsIm1hcCIsInBhZ2UiLCJpbmRleCIsInBvc2l0aW9uIiwibGVuZ3RoIiwiUGFnaW5hdGlvbk51bWJlciIsImlzQWN0aXZlIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/invoices/pagination.tsx\n"));

/***/ })

});