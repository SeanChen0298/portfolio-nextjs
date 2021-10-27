"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/section.js":
/*!*******************************!*\
  !*** ./components/section.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\git-repo\\portfolio-nextjs\\components\\section.js",
    _this = undefined;




var StyledDiv = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.chakra)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
  shouldForwardProp: function shouldForwardProp(prop) {
    return (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.shouldForwardProp)(prop) || prop === 'transition';
  }
});
_c = StyledDiv;

var Section = function Section(_ref) {
  var children = _ref.children,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv, {
    initial: {
      y: 10,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    },
    transition: {
      duration: 0.8,
      delay: delay
    },
    mb: 6,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, _this);
};

_c2 = Section;
/* harmony default export */ __webpack_exports__["default"] = (Section);

var _c, _c2;

$RefreshReg$(_c, "StyledDiv");
$RefreshReg$(_c2, "Section");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/section */ "./components/section.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\git-repo\\portfolio-nextjs\\pages\\index.js",
    _this = undefined;





var Page = function Page() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
      borderRadius: "lg",
      bg: "red",
      p: 3,
      mb: 6,
      align: "center",
      children: "Hello, I'm a Software Engineer from Malaysia!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
      display: {
        md: 'flex'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        flexGrow: 1,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
          as: "h2",
          variant: "page-title",
          children: "Chen Yoon Sean"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          children: "Software Engineer / Science & Technology Hobbyist / Orchestral Player"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        flexShrink: 0,
        mt: {
          base: 4,
          md: 0
        },
        ml: {
          md: 6
        },
        textAlign: "center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
          borderColor: "whiteAlpha.800",
          borderWidth: 2,
          borderStyle: "solid",
          maxWidth: "100px",
          display: "inline-block",
          borderRadius: "full",
          src: "/images/sean.jpg",
          alt: "Profile image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = Page;
/* harmony default export */ __webpack_exports__["default"] = (Page);

var _c;

$RefreshReg$(_c, "Page");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWRmMjZhNjlmOTQwZjNjZTY4ZDAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1HLFNBQVMsR0FBR0Ysd0RBQU0sQ0FBQ0QscURBQUQsRUFBYTtBQUNuQ0UsRUFBQUEsaUJBQWlCLEVBQUUsMkJBQUFHLElBQUksRUFBSTtBQUN6QixXQUFPSCxtRUFBaUIsQ0FBQ0csSUFBRCxDQUFqQixJQUEyQkEsSUFBSSxLQUFLLFlBQTNDO0FBQ0Q7QUFIa0MsQ0FBYixDQUF4QjtLQUFNRjs7QUFNTixJQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLHdCQUFhQyxLQUFiO0FBQUEsTUFBYUEsS0FBYiwyQkFBcUIsQ0FBckI7QUFBQSxzQkFDZCw4REFBQyxTQUFEO0FBQ0UsV0FBTyxFQUFFO0FBQUVDLE1BQUFBLENBQUMsRUFBRSxFQUFMO0FBQVNDLE1BQUFBLE9BQU8sRUFBRTtBQUFsQixLQURYO0FBRUUsV0FBTyxFQUFFO0FBQUVELE1BQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLE1BQUFBLE9BQU8sRUFBRTtBQUFqQixLQUZYO0FBR0UsY0FBVSxFQUFFO0FBQUVDLE1BQUFBLFFBQVEsRUFBRSxHQUFaO0FBQWlCSCxNQUFBQSxLQUFLLEVBQUxBO0FBQWpCLEtBSGQ7QUFJRSxNQUFFLEVBQUUsQ0FKTjtBQUFBLGNBTUdEO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURjO0FBQUEsQ0FBaEI7O01BQU1EO0FBV04sK0RBQWVBLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7OztBQUVBLElBQU1VLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakIsc0JBQ0UsOERBQUMsdURBQUQ7QUFBQSw0QkFDRSw4REFBQyxpREFBRDtBQUFLLGtCQUFZLEVBQUMsSUFBbEI7QUFBdUIsUUFBRSxFQUFDLEtBQTFCO0FBQWdDLE9BQUMsRUFBRSxDQUFuQztBQUFzQyxRQUFFLEVBQUUsQ0FBMUM7QUFBNkMsV0FBSyxFQUFDLFFBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRSw4REFBQyxpREFBRDtBQUFLLGFBQU8sRUFBRTtBQUFFQyxRQUFBQSxFQUFFLEVBQUU7QUFBTixPQUFkO0FBQUEsOEJBQ0UsOERBQUMsaURBQUQ7QUFBSyxnQkFBUSxFQUFFLENBQWY7QUFBQSxnQ0FDRSw4REFBQyxxREFBRDtBQUFTLFlBQUUsRUFBQyxJQUFaO0FBQWlCLGlCQUFPLEVBQUMsWUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FLDhEQUFDLGlEQUFEO0FBQ0Usa0JBQVUsRUFBRSxDQURkO0FBRUUsVUFBRSxFQUFFO0FBQUVDLFVBQUFBLElBQUksRUFBRSxDQUFSO0FBQVdELFVBQUFBLEVBQUUsRUFBRTtBQUFmLFNBRk47QUFHRSxVQUFFLEVBQUU7QUFBRUEsVUFBQUEsRUFBRSxFQUFFO0FBQU4sU0FITjtBQUlFLGlCQUFTLEVBQUMsUUFKWjtBQUFBLCtCQU1FLDhEQUFDLG1EQUFEO0FBQ0UscUJBQVcsRUFBQyxnQkFEZDtBQUVFLHFCQUFXLEVBQUUsQ0FGZjtBQUdFLHFCQUFXLEVBQUMsT0FIZDtBQUlFLGtCQUFRLEVBQUMsT0FKWDtBQUtFLGlCQUFPLEVBQUMsY0FMVjtBQU1FLHNCQUFZLEVBQUMsTUFOZjtBQU9FLGFBQUcsRUFBQyxrQkFQTjtBQVFFLGFBQUcsRUFBQztBQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQ0QsQ0FsQ0Q7O0tBQU1EO0FBb0NOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IHsgY2hha3JhLCBzaG91bGRGb3J3YXJkUHJvcCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcblxyXG5jb25zdCBTdHlsZWREaXYgPSBjaGFrcmEobW90aW9uLmRpdiwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+IHtcclxuICAgIHJldHVybiBzaG91bGRGb3J3YXJkUHJvcChwcm9wKSB8fCBwcm9wID09PSAndHJhbnNpdGlvbidcclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBTZWN0aW9uID0gKHsgY2hpbGRyZW4sIGRlbGF5ID0gMCB9KSA9PiAoXHJcbiAgPFN0eWxlZERpdlxyXG4gICAgaW5pdGlhbD17eyB5OiAxMCwgb3BhY2l0eTogMCB9fVxyXG4gICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxIH19XHJcbiAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjgsIGRlbGF5IH19XHJcbiAgICBtYj17Nn1cclxuICA+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9TdHlsZWREaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24iLCJpbXBvcnQgeyBDb250YWluZXIsIEJveCwgSW1hZ2UsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb24nXHJcblxyXG5jb25zdCBQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Qm94IGJvcmRlclJhZGl1cz1cImxnXCIgYmc9XCJyZWRcIiBwPXszfSBtYj17Nn0gYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICBIZWxsbywgSSZhcG9zO20gYSBTb2Z0d2FyZSBFbmdpbmVlciBmcm9tIE1hbGF5c2lhIVxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIDxCb3ggZGlzcGxheT17eyBtZDogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxCb3ggZmxleEdyb3c9ezF9PlxyXG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHZhcmlhbnQ9XCJwYWdlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIENoZW4gWW9vbiBTZWFuXHJcbiAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICA8cD5Tb2Z0d2FyZSBFbmdpbmVlciAvIFNjaWVuY2UgJmFtcDsgVGVjaG5vbG9neSBIb2JieWlzdCAvIE9yY2hlc3RyYWwgUGxheWVyPC9wPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGZsZXhTaHJpbms9ezB9XHJcbiAgICAgICAgICBtdD17eyBiYXNlOiA0LCBtZDogMCB9fVxyXG4gICAgICAgICAgbWw9e3sgbWQ6IDYgfX1cclxuICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yPVwid2hpdGVBbHBoYS44MDBcIlxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aD17Mn1cclxuICAgICAgICAgICAgYm9yZGVyU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgIG1heFdpZHRoPVwiMTAwcHhcIlxyXG4gICAgICAgICAgICBkaXNwbGF5PVwiaW5saW5lLWJsb2NrXCJcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiZnVsbFwiXHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvc2Vhbi5qcGdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJQcm9maWxlIGltYWdlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlXHJcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJjaGFrcmEiLCJzaG91bGRGb3J3YXJkUHJvcCIsIlN0eWxlZERpdiIsImRpdiIsInByb3AiLCJTZWN0aW9uIiwiY2hpbGRyZW4iLCJkZWxheSIsInkiLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJDb250YWluZXIiLCJCb3giLCJJbWFnZSIsIkhlYWRpbmciLCJQYWdlIiwibWQiLCJiYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==