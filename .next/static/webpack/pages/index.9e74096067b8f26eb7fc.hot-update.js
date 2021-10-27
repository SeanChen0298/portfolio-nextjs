"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/bio.js":
/*!***************************!*\
  !*** ./components/bio.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BioSection": function() { return /* binding */ BioSection; },
/* harmony export */   "BioYear": function() { return /* binding */ BioYear; }
/* harmony export */ });
/* harmony import */ var D_git_repo_portfolio_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _templateObject, _templateObject2;



var BioSection = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.default)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box)(_templateObject || (_templateObject = (0,D_git_repo_portfolio_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  padding-left: 3.4em;\n  text-indent: -3.4em;\n"])));
var BioYear = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__.default.span(_templateObject2 || (_templateObject2 = (0,D_git_repo_portfolio_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  font-weight: bold;\n  margin-right: 1em;\n"])));

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/section */ "./components/section.js");
/* harmony import */ var _components_bio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/bio */ "./components/bio.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/paragraph */ "./components/paragraph.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\git-repo\\portfolio-nextjs\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();









var Page = function Page() {
  _s();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
      borderRadius: "lg",
      p: 3,
      mb: 6,
      align: "center",
      bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)('whiteAlpha.500', 'whiteAlpha.200'),
      children: "Hello, I'm a Software Engineer from Malaysia!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
      display: {
        md: 'flex'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
        flexGrow: 1,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {
          as: "h2",
          variant: "page-title",
          children: "Chen Yoon Sean"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          children: "Software Engineer / Science & Technology Hobbyist / Orchestral Player"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
        flexShrink: 0,
        mt: {
          base: 4,
          md: 0
        },
        ml: {
          md: 6
        },
        textAlign: "center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Image, {
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
          lineNumber: 37,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_1__.default, {
      delay: 0.1,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {
        as: "h3",
        variant: "section-title",
        children: "Biography"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__.default, {
        children: "Sean is a Software Engineer based in Malaysia with experience in building, restructuring and optimizing ASP.NET Core APIs and web platforms. He is a core developer and team player in numerous rearchitecting projects. In his free time, he loves going outside for walks, hiking and doing sports like swimming and playing badminton. He used to be a performer in two orchestra based in Malaysia, and now he is still enjoying wide range of music genres."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
        align: "center",
        my: 4,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
          href: "/works",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
            rightIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronRightIcon, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 32
            }, _this),
            colorScheme: "teal",
            children: "My portfolio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_1__.default, {
      delay: 0.1,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {
        as: "h3",
        variant: "section-title",
        children: "Background"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_bio__WEBPACK_IMPORTED_MODULE_2__.BioSection, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_bio__WEBPACK_IMPORTED_MODULE_2__.BioYear, {
          children: "1984"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this), "Born in Osaka (\u5927\u962A), Japan."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_bio__WEBPACK_IMPORTED_MODULE_2__.BioSection, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_bio__WEBPACK_IMPORTED_MODULE_2__.BioYear, {
          children: "2010"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this), "Completed the Master's Program in the Graduate School of Information Science at Nara Institute of Science and Technology (\u5948\u826F\u5148\u7AEF\u79D1\u5B66\u6280\u8853\u5927\u5B66\u9662\u5927\u5B66\u60C5\u5831\u79D1\u5B66\u7814\u7A76\u79D1\u4FEE\u58EB\u8AB2\u7A0B)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_bio__WEBPACK_IMPORTED_MODULE_2__.BioSection, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_bio__WEBPACK_IMPORTED_MODULE_2__.BioYear, {
          children: "2010"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this), "Worked at Yahoo! Japan (\u30E4\u30D5\u30FC\u682A\u5F0F\u4F1A\u793E\u5165\u793E)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_bio__WEBPACK_IMPORTED_MODULE_2__.BioSection, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_bio__WEBPACK_IMPORTED_MODULE_2__.BioYear, {
          children: "2012 to present"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this), "Works as a freelance"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_s(Page, "3skuTHwppfEdh6aKNlffDjyTB8U=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWU3NDA5NjA2N2I4ZjI2ZWI3ZmMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1FLFVBQVUsR0FBR0Qsd0RBQU0sQ0FBQ0QsaURBQUQsQ0FBVCxvUEFBaEI7QUFLQSxJQUFNRyxPQUFPLEdBQUdGLHlEQUFILGtQQUFiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1hLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsc0JBQ0UsOERBQUMsdURBQUQ7QUFBQSw0QkFDRSw4REFBQyxpREFBRDtBQUNFLGtCQUFZLEVBQUMsSUFEZjtBQUVFLE9BQUMsRUFBRSxDQUZMO0FBR0UsUUFBRSxFQUFFLENBSE47QUFJRSxXQUFLLEVBQUMsUUFKUjtBQUtFLFFBQUUsRUFBRUwsbUVBQWlCLENBQUMsZ0JBQUQsRUFBbUIsZ0JBQW5CLENBTHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFXRSw4REFBQyxpREFBRDtBQUFLLGFBQU8sRUFBRTtBQUFFTSxRQUFBQSxFQUFFLEVBQUU7QUFBTixPQUFkO0FBQUEsOEJBQ0UsOERBQUMsaURBQUQ7QUFBSyxnQkFBUSxFQUFFLENBQWY7QUFBQSxnQ0FDRSw4REFBQyxxREFBRDtBQUFTLFlBQUUsRUFBQyxJQUFaO0FBQWlCLGlCQUFPLEVBQUMsWUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVVFLDhEQUFDLGlEQUFEO0FBQ0Usa0JBQVUsRUFBRSxDQURkO0FBRUUsVUFBRSxFQUFFO0FBQUVDLFVBQUFBLElBQUksRUFBRSxDQUFSO0FBQVdELFVBQUFBLEVBQUUsRUFBRTtBQUFmLFNBRk47QUFHRSxVQUFFLEVBQUU7QUFBRUEsVUFBQUEsRUFBRSxFQUFFO0FBQU4sU0FITjtBQUlFLGlCQUFTLEVBQUMsUUFKWjtBQUFBLCtCQU1FLDhEQUFDLG1EQUFEO0FBQ0UscUJBQVcsRUFBQyxnQkFEZDtBQUVFLHFCQUFXLEVBQUUsQ0FGZjtBQUdFLHFCQUFXLEVBQUMsT0FIZDtBQUlFLGtCQUFRLEVBQUMsT0FKWDtBQUtFLGlCQUFPLEVBQUMsY0FMVjtBQU1FLHNCQUFZLEVBQUMsTUFOZjtBQU9FLGFBQUcsRUFBQyxrQkFQTjtBQVFFLGFBQUcsRUFBQztBQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEYsZUF1Q0UsOERBQUMsd0RBQUQ7QUFBUyxXQUFLLEVBQUUsR0FBaEI7QUFBQSw4QkFDRSw4REFBQyxxREFBRDtBQUFTLFVBQUUsRUFBQyxJQUFaO0FBQWlCLGVBQU8sRUFBQyxlQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUUsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQWFFLDhEQUFDLGlEQUFEO0FBQUssYUFBSyxFQUFDLFFBQVg7QUFBb0IsVUFBRSxFQUFFLENBQXhCO0FBQUEsK0JBQ0UsOERBQUMsa0RBQUQ7QUFBVSxjQUFJLEVBQUMsUUFBZjtBQUFBLGlDQUNFLDhEQUFDLG9EQUFEO0FBQVEscUJBQVMsZUFBRSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFuQjtBQUF5Qyx1QkFBVyxFQUFDLE1BQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2Q0YsZUE2REUsOERBQUMsd0RBQUQ7QUFBUyxXQUFLLEVBQUUsR0FBaEI7QUFBQSw4QkFDRSw4REFBQyxxREFBRDtBQUFTLFVBQUUsRUFBQyxJQUFaO0FBQWlCLGVBQU8sRUFBQyxlQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUUsOERBQUMsdURBQUQ7QUFBQSxnQ0FDRSw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQVFFLDhEQUFDLHVEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkYsZUFjRSw4REFBQyx1REFBRDtBQUFBLGdDQUNFLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRGLGVBa0JFLDhEQUFDLHVEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVGRCxDQXhGRDs7R0FBTUQ7VUFRTUw7OztLQVJOSztBQTBGTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Jpby5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcblxyXG5leHBvcnQgY29uc3QgQmlvU2VjdGlvbiA9IHN0eWxlZChCb3gpYFxyXG4gIHBhZGRpbmctbGVmdDogMy40ZW07XHJcbiAgdGV4dC1pbmRlbnQ6IC0zLjRlbTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJpb1llYXIgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuYFxyXG4iLCJpbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEJveCwgSW1hZ2UsIEhlYWRpbmcsIHVzZUNvbG9yTW9kZVZhbHVlLCBCdXR0b259IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCB7IENoZXZyb25SaWdodEljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb24nXHJcbmltcG9ydCB7IEJpb1NlY3Rpb24sIEJpb1llYXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2JpbydcclxuaW1wb3J0IFBhcmFncmFwaCBmcm9tICcuLi9jb21wb25lbnRzL3BhcmFncmFwaCdcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXHJcbiAgICAgICAgcD17M31cclxuICAgICAgICBtYj17Nn1cclxuICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCd3aGl0ZUFscGhhLjUwMCcsICd3aGl0ZUFscGhhLjIwMCcpfVxyXG4gICAgICA+XHJcbiAgICAgICAgSGVsbG8sIEkmYXBvczttIGEgU29mdHdhcmUgRW5naW5lZXIgZnJvbSBNYWxheXNpYSFcclxuICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICA8Qm94IGRpc3BsYXk9e3sgbWQ6ICdmbGV4JyB9fT5cclxuICAgICAgICA8Qm94IGZsZXhHcm93PXsxfT5cclxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiB2YXJpYW50PVwicGFnZS10aXRsZVwiPlxyXG4gICAgICAgICAgICBDaGVuIFlvb24gU2VhblxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIFNvZnR3YXJlIEVuZ2luZWVyIC8gU2NpZW5jZSAmYW1wOyBUZWNobm9sb2d5IEhvYmJ5aXN0IC8gT3JjaGVzdHJhbFxyXG4gICAgICAgICAgICBQbGF5ZXJcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBmbGV4U2hyaW5rPXswfVxyXG4gICAgICAgICAgbXQ9e3sgYmFzZTogNCwgbWQ6IDAgfX1cclxuICAgICAgICAgIG1sPXt7IG1kOiA2IH19XHJcbiAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcj1cIndoaXRlQWxwaGEuODAwXCJcclxuICAgICAgICAgICAgYm9yZGVyV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgIGJvcmRlclN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICBtYXhXaWR0aD1cIjEwMHB4XCJcclxuICAgICAgICAgICAgZGlzcGxheT1cImlubGluZS1ibG9ja1wiXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cImZ1bGxcIlxyXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3NlYW4uanBnXCJcclxuICAgICAgICAgICAgYWx0PVwiUHJvZmlsZSBpbWFnZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPFNlY3Rpb24gZGVsYXk9ezAuMX0+XHJcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIHZhcmlhbnQ9XCJzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICBCaW9ncmFwaHlcclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgPFBhcmFncmFwaD5cclxuICAgICAgICAgIFNlYW4gaXMgYSBTb2Z0d2FyZSBFbmdpbmVlciBiYXNlZCBpbiBNYWxheXNpYSB3aXRoIGV4cGVyaWVuY2UgaW5cclxuICAgICAgICAgIGJ1aWxkaW5nLCByZXN0cnVjdHVyaW5nIGFuZCBvcHRpbWl6aW5nIEFTUC5ORVQgQ29yZSBBUElzIGFuZCB3ZWJcclxuICAgICAgICAgIHBsYXRmb3Jtcy4gSGUgaXMgYSBjb3JlIGRldmVsb3BlciBhbmQgdGVhbSBwbGF5ZXIgaW4gbnVtZXJvdXNcclxuICAgICAgICAgIHJlYXJjaGl0ZWN0aW5nIHByb2plY3RzLiBJbiBoaXMgZnJlZSB0aW1lLCBoZSBsb3ZlcyBnb2luZyBvdXRzaWRlIGZvclxyXG4gICAgICAgICAgd2Fsa3MsIGhpa2luZyBhbmQgZG9pbmcgc3BvcnRzIGxpa2Ugc3dpbW1pbmcgYW5kIHBsYXlpbmcgYmFkbWludG9uLiBIZVxyXG4gICAgICAgICAgdXNlZCB0byBiZSBhIHBlcmZvcm1lciBpbiB0d28gb3JjaGVzdHJhIGJhc2VkIGluIE1hbGF5c2lhLCBhbmQgbm93IGhlXHJcbiAgICAgICAgICBpcyBzdGlsbCBlbmpveWluZyB3aWRlIHJhbmdlIG9mIG11c2ljIGdlbnJlcy5cclxuICAgICAgICA8L1BhcmFncmFwaD5cclxuICAgICAgICA8Qm94IGFsaWduPVwiY2VudGVyXCIgbXk9ezR9PlxyXG4gICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvd29ya3NcIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiByaWdodEljb249ezxDaGV2cm9uUmlnaHRJY29uIC8+fSBjb2xvclNjaGVtZT1cInRlYWxcIj5cclxuICAgICAgICAgICAgICBNeSBwb3J0Zm9saW9cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L1NlY3Rpb24+XHJcblxyXG4gICAgICA8U2VjdGlvbiBkZWxheT17MC4xfT5cclxuICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgdmFyaWFudD1cInNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgIEJhY2tncm91bmRcclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgPEJpb1NlY3Rpb24+XHJcbiAgICAgICAgICA8QmlvWWVhcj4xOTg0PC9CaW9ZZWFyPlxyXG4gICAgICAgICAgQm9ybiBpbiBPc2FrYSAo5aSn6ZiqKSwgSmFwYW4uXHJcbiAgICAgICAgPC9CaW9TZWN0aW9uPlxyXG4gICAgICAgIDxCaW9TZWN0aW9uPlxyXG4gICAgICAgICAgPEJpb1llYXI+MjAxMDwvQmlvWWVhcj5cclxuICAgICAgICAgIENvbXBsZXRlZCB0aGUgTWFzdGVyJmFwb3M7cyBQcm9ncmFtIGluIHRoZSBHcmFkdWF0ZSBTY2hvb2wgb2ZcclxuICAgICAgICAgIEluZm9ybWF0aW9uIFNjaWVuY2UgYXQgTmFyYSBJbnN0aXR1dGUgb2YgU2NpZW5jZSBhbmQgVGVjaG5vbG9neVxyXG4gICAgICAgICAgKOWliOiJr+WFiOerr+enkeWtpuaKgOihk+Wkp+WtpumZouWkp+WtpuaDheWgseenkeWtpueglOeptuenkeS/ruWjq+iqsueoiylcclxuICAgICAgICA8L0Jpb1NlY3Rpb24+XHJcbiAgICAgICAgPEJpb1NlY3Rpb24+XHJcbiAgICAgICAgICA8QmlvWWVhcj4yMDEwPC9CaW9ZZWFyPlxyXG4gICAgICAgICAgV29ya2VkIGF0IFlhaG9vISBKYXBhbiAo44Ok44OV44O85qCq5byP5Lya56S+5YWl56S+KVxyXG4gICAgICAgIDwvQmlvU2VjdGlvbj5cclxuICAgICAgICA8QmlvU2VjdGlvbj5cclxuICAgICAgICAgIDxCaW9ZZWFyPjIwMTIgdG8gcHJlc2VudDwvQmlvWWVhcj5cclxuICAgICAgICAgIFdvcmtzIGFzIGEgZnJlZWxhbmNlXHJcbiAgICAgICAgPC9CaW9TZWN0aW9uPlxyXG4gICAgICA8L1NlY3Rpb24+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VcclxuIl0sIm5hbWVzIjpbIkJveCIsInN0eWxlZCIsIkJpb1NlY3Rpb24iLCJCaW9ZZWFyIiwic3BhbiIsIk5leHRMaW5rIiwiQ29udGFpbmVyIiwiSW1hZ2UiLCJIZWFkaW5nIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJCdXR0b24iLCJDaGV2cm9uUmlnaHRJY29uIiwiU2VjdGlvbiIsIlBhcmFncmFwaCIsIlBhZ2UiLCJtZCIsImJhc2UiXSwic291cmNlUm9vdCI6IiJ9