"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_git_repo_portfolio_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_git_repo_portfolio_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo */ "./components/logo.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");
/* harmony import */ var _theme_toggle_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-toggle-button */ "./components/theme-toggle-button.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _excluded = ["href", "path", "_target", "children"];

var _jsxFileName = "D:\\git-repo\\portfolio-nextjs\\components\\navbar.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_git_repo_portfolio_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 // import { IoLogoGithub } from 'react-icons/io5'



var LinkItem = function LinkItem(_ref) {
  _s();

  var href = _ref.href,
      path = _ref.path,
      _target = _ref._target,
      children = _ref.children,
      props = (0,D_git_repo_portfolio_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);

  var active = path === href;
  var inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue)('gray200', 'whiteAlpha.900');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: href,
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link, _objectSpread(_objectSpread({
      p: 2,
      bg: active ? 'grassTeal' : undefined,
      color: active ? '#202023' : inactiveColor,
      _target: _target
    }, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_s(LinkItem, "dl0xx8ZlQuUn9JhHFu16yTlHTaE=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue];
});

_c = LinkItem;

var Navbar = function Navbar(props) {
  _s2();

  var path = props.path;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, _objectSpread(_objectSpread({
    position: "fixed",
    as: "nav",
    w: "100%",
    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue)('#ffffff40', '#20202380'),
    style: {
      backdropFilter: 'blur(10px)'
    },
    zIndex: 1
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {
      display: "flex",
      p: 2,
      maxW: "container.md",
      wrap: "wrap",
      align: "center",
      justify: "space-between",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {
        align: "center",
        mr: 5,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {
          as: "h1",
          size: "lg",
          letterSpacing: 'tighter',
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
        direction: {
          base: 'column',
          md: 'row'
        },
        display: {
          base: 'none',
          md: 'flex'
        },
        width: {
          base: 'full',
          md: 'auto'
        },
        alignItems: "center",
        flexGrow: 1,
        mt: {
          base: 4,
          md: 0
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(LinkItem, {
          href: "/works",
          path: path,
          children: "Works"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(LinkItem, {
          href: "/posts",
          path: path,
          children: "Posts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(LinkItem, {
          _target: "_blank",
          href: "https://github.com/SeanChen0298/portfolio-nextjs",
          path: path,
          display: "inline-flex",
          alignItems: "center",
          style: {
            gap: 4
          },
          pl: 2,
          children: "Source"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {
        flex: 1,
        align: "right",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_theme_toggle_button__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {
          ml: 2,
          display: {
            base: 'inline-block',
            md: 'none'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu, {
            isLazy: true,
            id: "navbar-menu",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuButton, {
              as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.IconButton,
              icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__.HamburgerIcon, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 23
              }, _this),
              variant: "outline",
              "aria-label": "Options"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuList, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/",
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
                  as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link,
                  children: "About"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/works",
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
                  as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link,
                  children: "Works"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/posts",
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
                  as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link,
                  children: "Posts"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
                as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link,
                href: "https://github.com/SeanChen0298/portfolio-nextjs",
                children: "View Source"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, _this);
};

_s2(Navbar, "3skuTHwppfEdh6aKNlffDjyTB8U=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue];
});

_c2 = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c, _c2;

$RefreshReg$(_c, "LinkItem");
$RefreshReg$(_c2, "Navbar");

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

/***/ "./components/theme-toggle-button.js":
/*!*******************************************!*\
  !*** ./components/theme-toggle-button.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\git-repo\\portfolio-nextjs\\components\\theme-toggle-button.js",
    _this = undefined,
    _s = $RefreshSig$();






var ThemeToggleButton = function ThemeToggleButton() {
  _s();

  var _useColorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)(),
      toggleColorMode = _useColorMode.toggleColorMode;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
    exitBeforeEnter: true,
    initial: false,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
      style: {
        display: 'inline-block'
      },
      initial: {
        y: -20,
        opacity: 0
      },
      animate: {
        y: 0,
        opacity: 1
      },
      exit: {
        y: 20,
        opacity: 0
      },
      transition: {
        duration: 0.2
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
        "aria-label": "Toggle theme",
        colorScheme: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('purple', 'orange'),
        icon: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 35
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 49
        }, _this)),
        onClick: toggleColorMode
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)
    }, (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('light', 'dark'), false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};

_s(ThemeToggleButton, "nOxe+ebHCqC5bMQGsSWeuYX/oOQ=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue];
});

_c = ThemeToggleButton;
/* harmony default export */ __webpack_exports__["default"] = (ThemeToggleButton);

var _c;

$RefreshReg$(_c, "ThemeToggleButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42YTdiZGZiYTc1YjkxMmMzMGU5My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFjQTtDQUVBOzs7O0FBRUEsSUFBTWdCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWlEO0FBQUE7O0FBQUEsTUFBOUNDLElBQThDLFFBQTlDQSxJQUE4QztBQUFBLE1BQXhDQyxJQUF3QyxRQUF4Q0EsSUFBd0M7QUFBQSxNQUFsQ0MsT0FBa0MsUUFBbENBLE9BQWtDO0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQVpDLEtBQVk7O0FBQ2hFLE1BQU1DLE1BQU0sR0FBR0osSUFBSSxLQUFLRCxJQUF4QjtBQUNBLE1BQU1NLGFBQWEsR0FBR1YsbUVBQWlCLENBQUMsU0FBRCxFQUFZLGdCQUFaLENBQXZDO0FBQ0Esc0JBQ0UsOERBQUMsa0RBQUQ7QUFBVSxRQUFJLEVBQUVJLElBQWhCO0FBQXNCLFlBQVEsTUFBOUI7QUFBQSwyQkFDRSw4REFBQyxrREFBRDtBQUNFLE9BQUMsRUFBRSxDQURMO0FBRUUsUUFBRSxFQUFFSyxNQUFNLEdBQUcsV0FBSCxHQUFpQkUsU0FGN0I7QUFHRSxXQUFLLEVBQUVGLE1BQU0sR0FBRyxTQUFILEdBQWVDLGFBSDlCO0FBSUUsYUFBTyxFQUFFSjtBQUpYLE9BS01FLEtBTE47QUFBQSxnQkFPR0Q7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FoQkQ7O0dBQU1KO1VBRWtCSDs7O0tBRmxCRzs7QUFrQk4sSUFBTVMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUosS0FBSyxFQUFJO0FBQUE7O0FBQ3RCLE1BQVFILElBQVIsR0FBaUJHLEtBQWpCLENBQVFILElBQVI7QUFFQSxzQkFDRSw4REFBQyxpREFBRDtBQUNFLFlBQVEsRUFBQyxP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O0FBQUE7QUFBQSxXQURGO0FBbUJELENBdEJEOztHQUFNRTtVQUN3QmlCLDREQU1qQm5CLGlFQVFVQSxpRUFDUEE7OztLQWhCVkU7QUF3Qk4sK0RBQWVBLGlCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RoZW1lLXRvZ2dsZS1idXR0b24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvJ1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBCb3gsXHJcbiAgTGluayxcclxuICBTdGFjayxcclxuICBIZWFkaW5nLFxyXG4gIEZsZXgsXHJcbiAgTWVudSxcclxuICBNZW51SXRlbSxcclxuICBNZW51TGlzdCxcclxuICBNZW51QnV0dG9uLFxyXG4gIEljb25CdXR0b24sXHJcbiAgdXNlQ29sb3JNb2RlVmFsdWVcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBIYW1idXJnZXJJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcclxuaW1wb3J0IFRoZW1lVG9nZ2xlQnV0dG9uIGZyb20gJy4vdGhlbWUtdG9nZ2xlLWJ1dHRvbidcclxuLy8gaW1wb3J0IHsgSW9Mb2dvR2l0aHViIH0gZnJvbSAncmVhY3QtaWNvbnMvaW81J1xyXG5cclxuY29uc3QgTGlua0l0ZW0gPSAoeyBocmVmLCBwYXRoLCBfdGFyZ2V0LCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IGFjdGl2ZSA9IHBhdGggPT09IGhyZWZcclxuICBjb25zdCBpbmFjdGl2ZUNvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkyMDAnLCAnd2hpdGVBbHBoYS45MDAnKVxyXG4gIHJldHVybiAoXHJcbiAgICA8TmV4dExpbmsgaHJlZj17aHJlZn0gcGFzc0hyZWY+XHJcbiAgICAgIDxMaW5rXHJcbiAgICAgICAgcD17Mn1cclxuICAgICAgICBiZz17YWN0aXZlID8gJ2dyYXNzVGVhbCcgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgY29sb3I9e2FjdGl2ZSA/ICcjMjAyMDIzJyA6IGluYWN0aXZlQ29sb3J9XHJcbiAgICAgICAgX3RhcmdldD17X3RhcmdldH1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvTmV4dExpbms+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBOYXZiYXIgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBwYXRoIH0gPSBwcm9wc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBwb3NpdGlvbj1cImZpeGVkXCJcclxuICAgICAgYXM9XCJuYXZcIlxyXG4gICAgICB3PVwiMTAwJVwiXHJcbiAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgnI2ZmZmZmZjQwJywgJyMyMDIwMjM4MCcpfVxyXG4gICAgICBzdHlsZT17eyBiYWNrZHJvcEZpbHRlcjogJ2JsdXIoMTBweCknIH19XHJcbiAgICAgIHpJbmRleD17MX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICAgIHA9ezJ9XHJcbiAgICAgICAgbWF4Vz1cImNvbnRhaW5lci5tZFwiXHJcbiAgICAgICAgd3JhcD1cIndyYXBcIlxyXG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgID5cclxuICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIG1yPXs1fT5cclxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiBzaXplPVwibGdcIiBsZXR0ZXJTcGFjaW5nPXsndGlnaHRlcid9PlxyXG4gICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgIDwvRmxleD5cclxuXHJcbiAgICAgICAgPFN0YWNrXHJcbiAgICAgICAgICBkaXJlY3Rpb249e3sgYmFzZTogJ2NvbHVtbicsIG1kOiAncm93JyB9fVxyXG4gICAgICAgICAgZGlzcGxheT17eyBiYXNlOiAnbm9uZScsIG1kOiAnZmxleCcgfX1cclxuICAgICAgICAgIHdpZHRoPXt7IGJhc2U6ICdmdWxsJywgbWQ6ICdhdXRvJyB9fVxyXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICBmbGV4R3Jvdz17MX1cclxuICAgICAgICAgIG10PXt7IGJhc2U6IDQsIG1kOiAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpbmtJdGVtIGhyZWY9XCIvd29ya3NcIiBwYXRoPXtwYXRofT5cclxuICAgICAgICAgICAgV29ya3NcclxuICAgICAgICAgIDwvTGlua0l0ZW0+XHJcbiAgICAgICAgICA8TGlua0l0ZW0gaHJlZj1cIi9wb3N0c1wiIHBhdGg9e3BhdGh9PlxyXG4gICAgICAgICAgICBQb3N0c1xyXG4gICAgICAgICAgPC9MaW5rSXRlbT5cclxuICAgICAgICAgIDxMaW5rSXRlbVxyXG4gICAgICAgICAgICBfdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9TZWFuQ2hlbjAyOTgvcG9ydGZvbGlvLW5leHRqc1wiXHJcbiAgICAgICAgICAgIHBhdGg9e3BhdGh9XHJcbiAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtZmxleFwiXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBnYXA6IDQgfX1cclxuICAgICAgICAgICAgcGw9ezJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICB7LyogPElvTG9nb0dpdGh1YiAvPiAqL31cclxuICAgICAgICAgICAgU291cmNlXHJcbiAgICAgICAgICA8L0xpbmtJdGVtPlxyXG4gICAgICAgIDwvU3RhY2s+XHJcblxyXG4gICAgICAgIDxCb3ggZmxleD17MX0gYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgPFRoZW1lVG9nZ2xlQnV0dG9uIC8+XHJcblxyXG4gICAgICAgICAgPEJveCBtbD17Mn0gZGlzcGxheT17eyBiYXNlOiAnaW5saW5lLWJsb2NrJywgbWQ6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgPE1lbnUgaXNMYXp5IGlkPVwibmF2YmFyLW1lbnVcIj5cclxuICAgICAgICAgICAgICA8TWVudUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgYXM9e0ljb25CdXR0b259XHJcbiAgICAgICAgICAgICAgICBpY29uPXs8SGFtYnVyZ2VySWNvbiAvPn1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJPcHRpb25zXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxNZW51TGlzdD5cclxuICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gYXM9e0xpbmt9PkFib3V0PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi93b3Jrc1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gYXM9e0xpbmt9PldvcmtzPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9wb3N0c1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gYXM9e0xpbmt9PlBvc3RzPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgYXM9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vU2VhbkNoZW4wMjk4L3BvcnRmb2xpby1uZXh0anNcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBWaWV3IFNvdXJjZVxyXG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8L01lbnVMaXN0PlxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxyXG4iLCJpbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCB7IEljb25CdXR0b24sIHVzZUNvbG9yTW9kZSwgdXNlQ29sb3JNb2RlVmFsdWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBTdW5JY29uLCBNb29uSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnXHJcblxyXG5jb25zdCBUaGVtZVRvZ2dsZUJ1dHRvbiA9ICgpID0+IHtcclxuICBjb25zdCB7IHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyIGluaXRpYWw9e2ZhbHNlfT5cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fVxyXG4gICAgICAgIGtleT17dXNlQ29sb3JNb2RlVmFsdWUoJ2xpZ2h0JywgJ2RhcmsnKX1cclxuICAgICAgICBpbml0aWFsPXt7IHk6IC0yMCwgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSB9fVxyXG4gICAgICAgIGV4aXQ9e3sgeTogMjAsIG9wYWNpdHk6IDAgfX1cclxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIHRoZW1lXCJcclxuICAgICAgICAgIGNvbG9yU2NoZW1lPXt1c2VDb2xvck1vZGVWYWx1ZSgncHVycGxlJywgJ29yYW5nZScpfVxyXG4gICAgICAgICAgaWNvbj17dXNlQ29sb3JNb2RlVmFsdWUoPE1vb25JY29uIC8+LCA8U3VuSWNvbiAvPil9XHJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVDb2xvck1vZGV9XHJcbiAgICAgICAgPjwvSWNvbkJ1dHRvbj5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZVRvZ2dsZUJ1dHRvbiJdLCJuYW1lcyI6WyJMb2dvIiwiTmV4dExpbmsiLCJDb250YWluZXIiLCJCb3giLCJMaW5rIiwiU3RhY2siLCJIZWFkaW5nIiwiRmxleCIsIk1lbnUiLCJNZW51SXRlbSIsIk1lbnVMaXN0IiwiTWVudUJ1dHRvbiIsIkljb25CdXR0b24iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkhhbWJ1cmdlckljb24iLCJUaGVtZVRvZ2dsZUJ1dHRvbiIsIkxpbmtJdGVtIiwiaHJlZiIsInBhdGgiLCJfdGFyZ2V0IiwiY2hpbGRyZW4iLCJwcm9wcyIsImFjdGl2ZSIsImluYWN0aXZlQ29sb3IiLCJ1bmRlZmluZWQiLCJOYXZiYXIiLCJiYWNrZHJvcEZpbHRlciIsImJhc2UiLCJtZCIsImdhcCIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsInVzZUNvbG9yTW9kZSIsIlN1bkljb24iLCJNb29uSWNvbiIsInRvZ2dsZUNvbG9yTW9kZSIsImRpc3BsYXkiLCJ5Iiwib3BhY2l0eSIsImR1cmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==