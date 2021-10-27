"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/paragraph.js":
/*!*********************************!*\
  !*** ./components/paragraph.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_git_repo_portfolio_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _templateObject;


var Paragraph = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__.default.p(_templateObject || (_templateObject = (0,D_git_repo_portfolio_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  text-align: justify;\n  text-indent: 1em;\n"])));
/* harmony default export */ __webpack_exports__["default"] = (Paragraph);

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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/section */ "./components/section.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/paragraph */ "./components/paragraph.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\git-repo\\portfolio-nextjs\\pages\\index.js",
    _this = undefined;






var Page = function Page() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
      borderRadius: "lg",
      bg: "red",
      p: 3,
      mb: 6,
      align: "center",
      children: "Hello, I'm a Software Engineer from Malaysia!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
      display: {
        md: 'flex'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
        flexGrow: 1,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
          as: "h2",
          variant: "page-title",
          children: "Chen Yoon Sean"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          children: "Software Engineer / Science & Technology Hobbyist / Orchestral Player"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
        flexShrink: 0,
        mt: {
          base: 4,
          md: 0
        },
        ml: {
          md: 6
        },
        textAlign: "center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
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
          lineNumber: 25,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_0__.default, {
      delay: 0.1,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
        as: "h3",
        variant: "section-title",
        children: "Work"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_paragraph__WEBPACK_IMPORTED_MODULE_1__.default, {
        children: "Sean is a Software Engineer based in Malaysia with experience in building, restructuring and optimizing ASP.NET Core APIs and web platforms. He is a core developer and team player in numerous rearchitecting projects. In his free time, he loves going outside for walks, hiking and doing sports like swimming and playing badminton. "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
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


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _taggedTemplateLiteral; }
/* harmony export */ });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWVhNjg1MThlMzZhMDY4M2Q1OGQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUMsU0FBUyxHQUFHRCxzREFBSCxpUEFBZjtBQUlBLCtEQUFlQyxTQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNTyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLHNCQUNFLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0UsOERBQUMsaURBQUQ7QUFBSyxrQkFBWSxFQUFDLElBQWxCO0FBQXVCLFFBQUUsRUFBQyxLQUExQjtBQUFnQyxPQUFDLEVBQUUsQ0FBbkM7QUFBc0MsUUFBRSxFQUFFLENBQTFDO0FBQTZDLFdBQUssRUFBQyxRQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0UsOERBQUMsaURBQUQ7QUFBSyxhQUFPLEVBQUU7QUFBRUMsUUFBQUEsRUFBRSxFQUFFO0FBQU4sT0FBZDtBQUFBLDhCQUNFLDhEQUFDLGlEQUFEO0FBQUssZ0JBQVEsRUFBRSxDQUFmO0FBQUEsZ0NBQ0UsOERBQUMscURBQUQ7QUFBUyxZQUFFLEVBQUMsSUFBWjtBQUFpQixpQkFBTyxFQUFDLFlBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFPRSw4REFBQyxpREFBRDtBQUNFLGtCQUFVLEVBQUUsQ0FEZDtBQUVFLFVBQUUsRUFBRTtBQUFFQyxVQUFBQSxJQUFJLEVBQUUsQ0FBUjtBQUFXRCxVQUFBQSxFQUFFLEVBQUU7QUFBZixTQUZOO0FBR0UsVUFBRSxFQUFFO0FBQUVBLFVBQUFBLEVBQUUsRUFBRTtBQUFOLFNBSE47QUFJRSxpQkFBUyxFQUFDLFFBSlo7QUFBQSwrQkFNRSw4REFBQyxtREFBRDtBQUNFLHFCQUFXLEVBQUMsZ0JBRGQ7QUFFRSxxQkFBVyxFQUFFLENBRmY7QUFHRSxxQkFBVyxFQUFDLE9BSGQ7QUFJRSxrQkFBUSxFQUFDLE9BSlg7QUFLRSxpQkFBTyxFQUFDLGNBTFY7QUFNRSxzQkFBWSxFQUFDLE1BTmY7QUFPRSxhQUFHLEVBQUMsa0JBUE47QUFRRSxhQUFHLEVBQUM7QUFSTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLGVBOEJFLDhEQUFDLHdEQUFEO0FBQVMsV0FBSyxFQUFFLEdBQWhCO0FBQUEsOEJBQ0ksOERBQUMscURBQUQ7QUFBUyxVQUFFLEVBQUMsSUFBWjtBQUFpQixlQUFPLEVBQUMsZUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkNELENBNUNEOztLQUFNRDtBQThDTiwrREFBZUEsSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRGU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJhZ3JhcGguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5cclxuY29uc3QgUGFyYWdyYXBoID0gc3R5bGVkLnBgXHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB0ZXh0LWluZGVudDogMWVtO1xyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IFBhcmFncmFwaCIsImltcG9ydCB7IENvbnRhaW5lciwgQm94LCBJbWFnZSwgSGVhZGluZyB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbidcclxuaW1wb3J0IFBhcmFncmFwaCBmcm9tICcuLi9jb21wb25lbnRzL3BhcmFncmFwaCdcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxCb3ggYm9yZGVyUmFkaXVzPVwibGdcIiBiZz1cInJlZFwiIHA9ezN9IG1iPXs2fSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgIEhlbGxvLCBJJmFwb3M7bSBhIFNvZnR3YXJlIEVuZ2luZWVyIGZyb20gTWFsYXlzaWEhXHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgPEJveCBkaXNwbGF5PXt7IG1kOiAnZmxleCcgfX0+XHJcbiAgICAgICAgPEJveCBmbGV4R3Jvdz17MX0+XHJcbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgdmFyaWFudD1cInBhZ2UtdGl0bGVcIj5cclxuICAgICAgICAgICAgQ2hlbiBZb29uIFNlYW5cclxuICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgIDxwPlNvZnR3YXJlIEVuZ2luZWVyIC8gU2NpZW5jZSAmYW1wOyBUZWNobm9sb2d5IEhvYmJ5aXN0IC8gT3JjaGVzdHJhbCBQbGF5ZXI8L3A+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgZmxleFNocmluaz17MH1cclxuICAgICAgICAgIG10PXt7IGJhc2U6IDQsIG1kOiAwIH19XHJcbiAgICAgICAgICBtbD17eyBtZDogNiB9fVxyXG4gICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I9XCJ3aGl0ZUFscGhhLjgwMFwiXHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoPXsyfVxyXG4gICAgICAgICAgICBib3JkZXJTdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgbWF4V2lkdGg9XCIxMDBweFwiXHJcbiAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJmdWxsXCJcclxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9zZWFuLmpwZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cIlByb2ZpbGUgaW1hZ2VcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxTZWN0aW9uIGRlbGF5PXswLjF9PlxyXG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIHZhcmlhbnQ9XCJzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgV29ya1xyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPFBhcmFncmFwaD5TZWFuIGlzIGEgU29mdHdhcmUgRW5naW5lZXIgYmFzZWQgaW4gTWFsYXlzaWEgd2l0aCBleHBlcmllbmNlIGluIGJ1aWxkaW5nLCBcclxuICAgICAgICAgICAgICByZXN0cnVjdHVyaW5nIGFuZCBvcHRpbWl6aW5nIEFTUC5ORVQgQ29yZSBBUElzIGFuZCB3ZWIgcGxhdGZvcm1zLiBIZSBpcyBhIGNvcmUgXHJcbiAgICAgICAgICAgICAgZGV2ZWxvcGVyIGFuZCB0ZWFtIHBsYXllciBpbiBudW1lcm91cyByZWFyY2hpdGVjdGluZyBwcm9qZWN0cy4gSW4gaGlzIGZyZWUgdGltZSwgXHJcbiAgICAgICAgICAgICAgaGUgbG92ZXMgZ29pbmcgb3V0c2lkZSBmb3Igd2Fsa3MsIGhpa2luZyBhbmQgZG9pbmcgc3BvcnRzIGxpa2Ugc3dpbW1pbmcgYW5kIFxyXG4gICAgICAgICAgICAgIHBsYXlpbmcgYmFkbWludG9uLiA8L1BhcmFncmFwaD5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoc3RyaW5ncywgcmF3KSB7XG4gIGlmICghcmF3KSB7XG4gICAgcmF3ID0gc3RyaW5ncy5zbGljZSgwKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHN0cmluZ3MsIHtcbiAgICByYXc6IHtcbiAgICAgIHZhbHVlOiBPYmplY3QuZnJlZXplKHJhdylcbiAgICB9XG4gIH0pKTtcbn0iXSwibmFtZXMiOlsic3R5bGVkIiwiUGFyYWdyYXBoIiwicCIsIkNvbnRhaW5lciIsIkJveCIsIkltYWdlIiwiSGVhZGluZyIsIlNlY3Rpb24iLCJQYWdlIiwibWQiLCJiYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==