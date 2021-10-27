"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ "./node_modules/@chakra-ui/theme-tools/dist/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var styles = {
  global: function global(props) {
    return {
      body: {
        bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#f0e7db', '#202023')(props)
      }
    };
  }
};
var components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: function baseStyle(props) {
      return {
        color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#3d7aed', '#ff63c3')(props),
        textUnderlineOffset: 3
      };
    }
  }
};
var fonts = {
  heading: "'M PLUS Rounded 1c'"
};
var colors = {
  grassTeal: '#88ccca'
};
var config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};
var theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({
  config: config,
  styles: styles,
  components: components,
  fonts: fonts,
  colors: colors
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45YmVmNGI3OWY5NzQ1YjUwMWI5Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUUsTUFBTSxHQUFHO0FBQ1hDLEVBQUFBLE1BQU0sRUFBRSxnQkFBQUMsS0FBSztBQUFBLFdBQUs7QUFDZEMsTUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLFFBQUFBLEVBQUUsRUFBRUwsNERBQUksQ0FBQyxTQUFELEVBQVksU0FBWixDQUFKLENBQTJCRyxLQUEzQjtBQURGO0FBRFEsS0FBTDtBQUFBO0FBREYsQ0FBZjtBQVFBLElBQU1HLFVBQVUsR0FBRztBQUNqQkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLFFBQVEsRUFBRTtBQUNSLHVCQUFpQjtBQUNmQyxRQUFBQSxjQUFjLEVBQUUsV0FERDtBQUVmQyxRQUFBQSxRQUFRLEVBQUUsRUFGSztBQUdmQyxRQUFBQSxtQkFBbUIsRUFBRSxDQUhOO0FBSWZDLFFBQUFBLG1CQUFtQixFQUFFLFNBSk47QUFLZkMsUUFBQUEsdUJBQXVCLEVBQUUsQ0FMVjtBQU1mQyxRQUFBQSxTQUFTLEVBQUUsQ0FOSTtBQU9mQyxRQUFBQSxZQUFZLEVBQUU7QUFQQztBQURUO0FBREgsR0FEUTtBQWNqQkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLFNBQVMsRUFBRSxtQkFBQWQsS0FBSztBQUFBLGFBQUs7QUFDbkJlLFFBQUFBLEtBQUssRUFBRWxCLDREQUFJLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FBSixDQUEyQkcsS0FBM0IsQ0FEWTtBQUVuQlEsUUFBQUEsbUJBQW1CLEVBQUU7QUFGRixPQUFMO0FBQUE7QUFEWjtBQWRXLENBQW5CO0FBc0JBLElBQU1RLEtBQUssR0FBRztBQUNaQyxFQUFBQSxPQUFPLEVBQUU7QUFERyxDQUFkO0FBSUEsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLEVBQUFBLFNBQVMsRUFBRTtBQURFLENBQWY7QUFJQSxJQUFNQyxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsZ0JBQWdCLEVBQUUsTUFETDtBQUViQyxFQUFBQSxrQkFBa0IsRUFBRTtBQUZQLENBQWY7QUFLQSxJQUFNQyxLQUFLLEdBQUczQiw2REFBVyxDQUFDO0FBQUV3QixFQUFBQSxNQUFNLEVBQU5BLE1BQUY7QUFBVXRCLEVBQUFBLE1BQU0sRUFBTkEsTUFBVjtBQUFrQkssRUFBQUEsVUFBVSxFQUFWQSxVQUFsQjtBQUE4QmEsRUFBQUEsS0FBSyxFQUFMQSxLQUE5QjtBQUFxQ0UsRUFBQUEsTUFBTSxFQUFOQTtBQUFyQyxDQUFELENBQXpCO0FBQ0EsK0RBQWVLLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3RoZW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHttb2RlIH0gZnJvbSAnQGNoYWtyYS11aS90aGVtZS10b29scydcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGdsb2JhbDogcHJvcHMgPT4gKHtcclxuICAgICAgICBib2R5IDp7XHJcbiAgICAgICAgICAgIGJnOiBtb2RlKCcjZjBlN2RiJywgJyMyMDIwMjMnKShwcm9wcylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0ge1xyXG4gIEhlYWRpbmc6IHtcclxuICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICdzZWN0aW9uLXRpdGxlJzoge1xyXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgdGV4dFVuZGVybGluZU9mZnNldDogNixcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiAnIzUyNTI1MicsXHJcbiAgICAgICAgdGV4dERlY29yYXRpb25UaGlja25lc3M6IDQsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAzLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogNFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBMaW5rOiB7XHJcbiAgICBiYXNlU3R5bGU6IHByb3BzID0+ICh7XHJcbiAgICAgIGNvbG9yOiBtb2RlKCcjM2Q3YWVkJywgJyNmZjYzYzMnKShwcm9wcyksXHJcbiAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDNcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBmb250cyA9IHtcclxuICBoZWFkaW5nOiBcIidNIFBMVVMgUm91bmRlZCAxYydcIlxyXG59XHJcblxyXG5jb25zdCBjb2xvcnMgPSB7XHJcbiAgZ3Jhc3NUZWFsOiAnIzg4Y2NjYSdcclxufVxyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gIGluaXRpYWxDb2xvck1vZGU6ICdkYXJrJyxcclxuICB1c2VTeXN0ZW1Db2xvck1vZGU6IHRydWVcclxufVxyXG5cclxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7IGNvbmZpZywgc3R5bGVzLCBjb21wb25lbnRzLCBmb250cywgY29sb3JzIH0pXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lIl0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwibW9kZSIsInN0eWxlcyIsImdsb2JhbCIsInByb3BzIiwiYm9keSIsImJnIiwiY29tcG9uZW50cyIsIkhlYWRpbmciLCJ2YXJpYW50cyIsInRleHREZWNvcmF0aW9uIiwiZm9udFNpemUiLCJ0ZXh0VW5kZXJsaW5lT2Zmc2V0IiwidGV4dERlY29yYXRpb25Db2xvciIsInRleHREZWNvcmF0aW9uVGhpY2tuZXNzIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiTGluayIsImJhc2VTdHlsZSIsImNvbG9yIiwiZm9udHMiLCJoZWFkaW5nIiwiY29sb3JzIiwiZ3Jhc3NUZWFsIiwiY29uZmlnIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==