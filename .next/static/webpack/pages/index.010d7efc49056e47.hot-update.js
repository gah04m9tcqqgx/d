"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Nav.tsx":
/*!********************************!*\
  !*** ./src/components/Nav.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* eslint @typescript-eslint/no-explicit-any: 0 */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  position: relative;\\n  font-size: 1.2rem;\\n  @media screen and (min-width: 768px) {\\n    font-size: 1.5rem;\\n  }\\n  transition: 0.3s;\\n  &:hover {\\n    color: red;\\n  }\\n  &::before {\\n    content: \"\";\\n    width: 100%;\\n    height: 2px;\\n    background-color: red;\\n    position: absolute;\\n    bottom: 0;\\n    left: 0;\\n    transform-origin: right;\\n    transform: scaleX(0);\\n    transition: 0.3s, transform-origin 0s;\\n  }\\n  &:hover::before {\\n    transform-origin: left;\\n    transform: scaleX(1);\\n  }\\n'\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  position: relative;\\n  font-size: 1.2rem;\\n  @media screen and (min-width: 768px) {\\n    font-size: 1.5rem;\\n  }\\n  color: red;\\n  &::before {\\n    content: \"\";\\n    width: 100%;\\n    height: 2px;\\n    background-color: red;\\n    position: absolute;\\n    bottom: 0;\\n    left: 0;\\n  }\\n'\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Nav = ()=>{\n    _s();\n    const isDarkMode = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.darkMode.isDarkMode);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // const ref = useRef(null);\n    // useEffect(() => {\n    //   gsap.registerPlugin(ScrollTrigger);\n    //   gsap.to(ref.current, {\n    //     ScrollTrigger: {},\n    //   });\n    // }, []);\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n        children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"nav\", {\n            className: \"hidden sm:block \" + (isDarkMode ? \"bg-gray-900 text-white\" : \"bg-orange-200 text-slate-700\"),\n            children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"ul\", {\n                className: \"font-bold flex justify-center gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/about\",\n                            css: router.pathname === \"/about\" ? linkActive : link,\n                            children: \"ABOUT\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Joe\\\\Documents\\\\Web\\\\nextjs\\\\d\\\\src\\\\components\\\\Nav.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Joe\\\\Documents\\\\Web\\\\nextjs\\\\d\\\\src\\\\components\\\\Nav.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            css: router.pathname === \"/\" ? linkActive : link,\n                            children: \"HOME\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Joe\\\\Documents\\\\Web\\\\nextjs\\\\d\\\\src\\\\components\\\\Nav.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Joe\\\\Documents\\\\Web\\\\nextjs\\\\d\\\\src\\\\components\\\\Nav.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/contact\",\n                            css: router.pathname === \"/contact\" ? linkActive : link,\n                            children: \"CONTACT\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Joe\\\\Documents\\\\Web\\\\nextjs\\\\d\\\\src\\\\components\\\\Nav.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Joe\\\\Documents\\\\Web\\\\nextjs\\\\d\\\\src\\\\components\\\\Nav.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Joe\\\\Documents\\\\Web\\\\nextjs\\\\d\\\\src\\\\components\\\\Nav.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Joe\\\\Documents\\\\Web\\\\nextjs\\\\d\\\\src\\\\components\\\\Nav.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Nav, \"Ttlhmpa4VlWwSA+8QRThp8eaLf8=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nconst link = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.css)(_templateObject());\nconst linkActive = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.css)(_templateObject1());\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXYudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGdEQUFnRCxHQUNoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBR1I7QUFDVztBQUVFO0FBRTFDLE1BQU1JLE1BQU0sSUFBTTs7SUFDaEIsTUFBTUMsYUFBc0JGLHdEQUFXQSxDQUNyQyxDQUFDRyxRQUFlQSxNQUFNQyxRQUFRLENBQUNGLFVBQVU7SUFFM0MsTUFBTUcsU0FBU04sc0RBQVNBO0lBQ3hCLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsd0NBQXdDO0lBQ3hDLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsUUFBUTtJQUNSLFVBQVU7SUFDVixxQkFDRTtrQkFDRSxxRkFBQ087WUFDQ0MsV0FDRSxxQkFDQ0wsQ0FBQUEsYUFDRywyQkFDQSw4QkFBOEI7c0JBR3BDLHFGQUFDTTtnQkFBR0QsV0FBVTs7a0NBQ1osdUVBQUNFO2tDQUNDLHFGQUFDWCxrREFBSUE7NEJBQ0hZLE1BQUs7NEJBQ0xiLEtBQUtRLE9BQU9NLFFBQVEsS0FBSyxXQUFXQyxhQUFhQyxJQUFJO3NDQUN0RDs7Ozs7Ozs7Ozs7a0NBSUgsdUVBQUNKO2tDQUNDLHFGQUFDWCxrREFBSUE7NEJBQUNZLE1BQUs7NEJBQUliLEtBQUtRLE9BQU9NLFFBQVEsS0FBSyxNQUFNQyxhQUFhQyxJQUFJO3NDQUFFOzs7Ozs7Ozs7OztrQ0FJbkUsdUVBQUNKO2tDQUNDLHFGQUFDWCxrREFBSUE7NEJBQ0hZLE1BQUs7NEJBQ0xiLEtBQUtRLE9BQU9NLFFBQVEsS0FBSyxhQUFhQyxhQUFhQyxJQUFJO3NDQUN4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtHQWhETVo7O1FBQ3dCRCxvREFBV0E7UUFHeEJELGtEQUFTQTs7O0tBSnBCRTtBQWtETiwrREFBZUEsR0FBR0EsRUFBQztBQUVuQixNQUFNWSxPQUFPaEIsbURBQUdBO0FBNEJoQixNQUFNZSxhQUFhZixtREFBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2LnRzeD8xZjQ2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55OiAwICovXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyXCI7XHJcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcC9kaXN0L2dzYXBcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmNvbnN0IE5hdiA9ICgpID0+IHtcclxuICBjb25zdCBpc0RhcmtNb2RlOiBib29sZWFuID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGUuZGFya01vZGUuaXNEYXJrTW9kZVxyXG4gICk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgLy8gY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xyXG4gIC8vICAgZ3NhcC50byhyZWYuY3VycmVudCwge1xyXG4gIC8vICAgICBTY3JvbGxUcmlnZ2VyOiB7fSxcclxuICAvLyAgIH0pO1xyXG4gIC8vIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG5hdlxyXG4gICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICBcImhpZGRlbiBzbTpibG9jayBcIiArXHJcbiAgICAgICAgICAoaXNEYXJrTW9kZVxyXG4gICAgICAgICAgICA/IFwiYmctZ3JheS05MDAgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgIDogXCJiZy1vcmFuZ2UtMjAwIHRleHQtc2xhdGUtNzAwXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBmbGV4IGp1c3RpZnktY2VudGVyIGdhcC00XCI+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9hYm91dFwiXHJcbiAgICAgICAgICAgICAgY3NzPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL2Fib3V0XCIgPyBsaW5rQWN0aXZlIDogbGlua31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFCT1VUXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY3NzPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiID8gbGlua0FjdGl2ZSA6IGxpbmt9PlxyXG4gICAgICAgICAgICAgIEhPTUVcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL2NvbnRhY3RcIlxyXG4gICAgICAgICAgICAgIGNzcz17cm91dGVyLnBhdGhuYW1lID09PSBcIi9jb250YWN0XCIgPyBsaW5rQWN0aXZlIDogbGlua31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENPTlRBQ1RcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcblxyXG5jb25zdCBsaW5rID0gY3NzYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MsIHRyYW5zZm9ybS1vcmlnaW4gMHM7XHJcbiAgfVxyXG4gICY6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgbGlua0FjdGl2ZSA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuICBjb2xvcjogcmVkO1xyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG5gO1xyXG4iXSwibmFtZXMiOlsiY3NzIiwiTGluayIsInVzZVJvdXRlciIsInVzZVNlbGVjdG9yIiwiTmF2IiwiaXNEYXJrTW9kZSIsInN0YXRlIiwiZGFya01vZGUiLCJyb3V0ZXIiLCJuYXYiLCJjbGFzc05hbWUiLCJ1bCIsImxpIiwiaHJlZiIsInBhdGhuYW1lIiwibGlua0FjdGl2ZSIsImxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Nav.tsx\n"));

/***/ })

});