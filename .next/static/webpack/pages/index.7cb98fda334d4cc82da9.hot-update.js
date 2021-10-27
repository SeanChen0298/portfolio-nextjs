"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\git-repo\\portfolio-nextjs\\pages\\index.js",
    _this = undefined;




var Page = function Page() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
      borderRadius: "lg",
      bg: "red",
      p: 3,
      mb: 6,
      align: "center",
      children: "Hello, I'm a .NET developer from Malaysia!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
      display: {
        md: 'flex'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        flexGrow: 1,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
          as: "h2",
          variant: "page-title",
          children: "Chen Yoon Sean"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Software Engineer / Science & Technology Hobbyist / Orchestral Player"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        flexShrink: 0,
        mt: {
          base: 4,
          md: 0
        },
        ml: {
          md: 6
        },
        textAlign: "center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
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
          lineNumber: 23,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2NiOThmZGEzMzRkNGNjODJkYTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFFQSxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLHNCQUNFLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0UsOERBQUMsaURBQUQ7QUFBSyxrQkFBWSxFQUFDLElBQWxCO0FBQXVCLFFBQUUsRUFBQyxLQUExQjtBQUFnQyxPQUFDLEVBQUUsQ0FBbkM7QUFBc0MsUUFBRSxFQUFFLENBQTFDO0FBQTZDLFdBQUssRUFBQyxRQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0UsOERBQUMsaURBQUQ7QUFBSyxhQUFPLEVBQUU7QUFBRUMsUUFBQUEsRUFBRSxFQUFFO0FBQU4sT0FBZDtBQUFBLDhCQUNFLDhEQUFDLGlEQUFEO0FBQUssZ0JBQVEsRUFBRSxDQUFmO0FBQUEsZ0NBQ0UsOERBQUMscURBQUQ7QUFBUyxZQUFFLEVBQUMsSUFBWjtBQUFpQixpQkFBTyxFQUFDLFlBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFPRSw4REFBQyxpREFBRDtBQUNFLGtCQUFVLEVBQUUsQ0FEZDtBQUVFLFVBQUUsRUFBRTtBQUFFQyxVQUFBQSxJQUFJLEVBQUUsQ0FBUjtBQUFXRCxVQUFBQSxFQUFFLEVBQUU7QUFBZixTQUZOO0FBR0UsVUFBRSxFQUFFO0FBQUVBLFVBQUFBLEVBQUUsRUFBRTtBQUFOLFNBSE47QUFJRSxpQkFBUyxFQUFDLFFBSlo7QUFBQSwrQkFNRSw4REFBQyxtREFBRDtBQUNFLHFCQUFXLEVBQUMsZ0JBRGQ7QUFFRSxxQkFBVyxFQUFFLENBRmY7QUFHRSxxQkFBVyxFQUFDLE9BSGQ7QUFJRSxrQkFBUSxFQUFDLE9BSlg7QUFLRSxpQkFBTyxFQUFDLGNBTFY7QUFNRSxzQkFBWSxFQUFDLE1BTmY7QUFPRSxhQUFHLEVBQUMsa0JBUE47QUFRRSxhQUFHLEVBQUM7QUFSTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUNELENBbENEOztLQUFNRDtBQW9DTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIEJveCwgSW1hZ2UsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEJveCBib3JkZXJSYWRpdXM9XCJsZ1wiIGJnPVwicmVkXCIgcD17M30gbWI9ezZ9IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgSGVsbG8sIEkmYXBvczttIGEgLk5FVCBkZXZlbG9wZXIgZnJvbSBNYWxheXNpYSFcclxuICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICA8Qm94IGRpc3BsYXk9e3sgbWQ6ICdmbGV4JyB9fT5cclxuICAgICAgICA8Qm94IGZsZXhHcm93PXsxfT5cclxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiB2YXJpYW50PVwicGFnZS10aXRsZVwiPlxyXG4gICAgICAgICAgICBDaGVuIFlvb24gU2VhblxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPHA+U29mdHdhcmUgRW5naW5lZXIgLyBTY2llbmNlICZhbXA7IFRlY2hub2xvZ3kgSG9iYnlpc3QgLyBPcmNoZXN0cmFsIFBsYXllcjwvcD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBmbGV4U2hyaW5rPXswfVxyXG4gICAgICAgICAgbXQ9e3sgYmFzZTogNCwgbWQ6IDAgfX1cclxuICAgICAgICAgIG1sPXt7IG1kOiA2IH19XHJcbiAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcj1cIndoaXRlQWxwaGEuODAwXCJcclxuICAgICAgICAgICAgYm9yZGVyV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgIGJvcmRlclN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICBtYXhXaWR0aD1cIjEwMHB4XCJcclxuICAgICAgICAgICAgZGlzcGxheT1cImlubGluZS1ibG9ja1wiXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cImZ1bGxcIlxyXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3NlYW4uanBnXCJcclxuICAgICAgICAgICAgYWx0PVwiUHJvZmlsZSBpbWFnZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZVxyXG4iXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiQm94IiwiSW1hZ2UiLCJIZWFkaW5nIiwiUGFnZSIsIm1kIiwiYmFzZSJdLCJzb3VyY2VSb290IjoiIn0=