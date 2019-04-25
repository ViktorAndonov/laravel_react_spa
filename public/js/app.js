(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Navbar */ "./resources/js/components/Navbar.js");
/* harmony import */ var _components_Welcome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Welcome */ "./resources/js/components/Welcome.js");
/* harmony import */ var _components_NotFound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/NotFound */ "./resources/js/components/NotFound.js");
/* harmony import */ var _components_auth_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/auth/Login */ "./resources/js/components/auth/Login.js");
/* harmony import */ var _components_auth_Register__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/auth/Register */ "./resources/js/components/auth/Register.js");
/* harmony import */ var _components_auth_password_Forget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/auth/password/Forget */ "./resources/js/components/auth/password/Forget.js");
/* harmony import */ var _components_auth_password_ForgetEmailSend__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/auth/password/ForgetEmailSend */ "./resources/js/components/auth/password/ForgetEmailSend.js");
/* harmony import */ var _components_auth_password_Reset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/auth/password/Reset */ "./resources/js/components/auth/password/Reset.js");
/* harmony import */ var _components_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/routes/PrivateRoute */ "./resources/js/components/routes/PrivateRoute.js");
/* harmony import */ var _components_routes_GuestRoute__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/routes/GuestRoute */ "./resources/js/components/routes/GuestRoute.js");
/* harmony import */ var _components_notes_Notes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/notes/Notes */ "./resources/js/components/notes/Notes.js");
/* harmony import */ var _components_notes_AddNote__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/notes/AddNote */ "./resources/js/components/notes/AddNote.js");
/* harmony import */ var _components_notes_EditNote__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/notes/EditNote */ "./resources/js/components/notes/EditNote.js");
/* harmony import */ var _components_context_AuthProvider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/context/AuthProvider */ "./resources/js/components/context/AuthProvider.js");
/* harmony import */ var _components_context_UserProvider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/context/UserProvider */ "./resources/js/components/context/UserProvider.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");



 // App



 // Auth.





 // Routes


 // Notes



 // Context




if (document.getElementById('root')) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_context_AuthProvider__WEBPACK_IMPORTED_MODULE_16__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_context_UserProvider__WEBPACK_IMPORTED_MODULE_17__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/",
    component: _components_Welcome__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_routes_GuestRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
    exact: true,
    path: "/login",
    component: _components_auth_Login__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_routes_GuestRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
    exact: true,
    path: "/register",
    component: _components_auth_Register__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_routes_GuestRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
    exact: true,
    path: "/password/forget",
    component: _components_auth_password_Forget__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_routes_GuestRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
    exact: true,
    path: "/password/forget/send",
    component: _components_auth_password_ForgetEmailSend__WEBPACK_IMPORTED_MODULE_9__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_routes_GuestRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
    exact: true,
    path: "/password/reset",
    component: _components_auth_password_Reset__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/notes",
    component: _components_notes_Notes__WEBPACK_IMPORTED_MODULE_13__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/notes/create",
    component: _components_notes_AddNote__WEBPACK_IMPORTED_MODULE_14__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/notes/:id/edit",
    component: _components_notes_EditNote__WEBPACK_IMPORTED_MODULE_15__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    component: _components_NotFound__WEBPACK_IMPORTED_MODULE_5__["default"]
  })))))), document.getElementById('root'));
}

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */
// try {
//     require('bootstrap');
// } catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/***/ }),

/***/ "./resources/js/components/Navbar.js":
/*!*******************************************!*\
  !*** ./resources/js/components/Navbar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_UserProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/UserProvider */ "./resources/js/components/context/UserProvider.js");
/* harmony import */ var _context_AuthProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/AuthProvider */ "./resources/js/components/context/AuthProvider.js");





function Navbar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-primary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-dark"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    className: "navbar-brand"
  }, "Laravel React SPA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navbar-toggler-icon"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_UserProvider__WEBPACK_IMPORTED_MODULE_2__["UserContext"].Consumer, null, function (user) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "collapse navbar-collapse",
      id: "navbarSupportedContent"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "navbar-nav pl-3 mr-auto"
    }, user.isAuthenticated && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/notes",
      className: "nav-link"
    }, "Notes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item active"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/",
      className: "nav-link"
    }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/about",
      className: "nav-link"
    }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/contact",
      className: "nav-link"
    }, "Contact")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/faq",
      className: "nav-link"
    }, "FAQ"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "navbar-nav ml-auto"
    }, user.isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "nav-link disabled"
    }, user.first_name, " ", user.last_name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "nav-link disabled"
    }, "|")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/",
      onClick: props.logout,
      className: "nav-link btn btn-link"
    }, "Logout"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item mr-1"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/login",
      className: "nav-link"
    }, "Login")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/register",
      className: "btn btn-light"
    }, "Sign up")))));
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_AuthProvider__WEBPACK_IMPORTED_MODULE_3__["withAuth"])(Navbar));

/***/ }),

/***/ "./resources/js/components/NotFound.js":
/*!*********************************************!*\
  !*** ./resources/js/components/NotFound.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function NotFound() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "not-found"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 | Not Found")));
}

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./resources/js/components/Welcome.js":
/*!********************************************!*\
  !*** ./resources/js/components/Welcome.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



function Welcome() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mt-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "jumbotron"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "display-4"
  }, "Welcome View"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead"
  }, "This is a landing page placeholder/example."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "my-4"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/notes",
    className: "btn btn-primary btn-lg"
  }, "View Your Notes"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Welcome);

/***/ }),

/***/ "./resources/js/components/auth/Login.js":
/*!***********************************************!*\
  !*** ./resources/js/components/auth/Login.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_AuthProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthProvider */ "./resources/js/components/context/AuthProvider.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Login =
/*#__PURE__*/
function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));
    _this.state = {
      username: '',
      password: '',
      errors: []
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Login, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var user = {
        username: this.state.username,
        password: this.state.password
      };
      this.props.login(user).then(function () {
        _this2.setState({
          errors: []
        });

        _this2.props.history.push('/notes');
      })["catch"](function (err) {
        var error = err.response.data.error;

        _this2.setState({
          errors: error
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var err = this.state.errors;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-center mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header"
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        method: "POST",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "login_email",
        className: "col-md-4 col-form-label text-md-right"
      }, "E-Mail Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "login_email",
        type: "email",
        name: "username",
        className: "form-control",
        value: this.state.username,
        onChange: this.handleChange,
        placeholder: "Enter your email",
        autoComplete: "email" // required
        ,
        autoFocus: true
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "login_password",
        className: "col-md-4 col-form-label text-md-right"
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "login_password",
        type: "password",
        name: "password",
        className: "form-control",
        value: this.state.password,
        onChange: this.handleChange,
        placeholder: "Enter your password",
        autoComplete: "current-password" // required

      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row form-group mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-8 offset-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/password/forget",
        className: "btn btn-link"
      }, "Forgot Your Password?")), err && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "col-md-8 offset-md-4 mt-3 text-danger"
      }, err))))))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_AuthProvider__WEBPACK_IMPORTED_MODULE_2__["withAuth"])(Login));

/***/ }),

/***/ "./resources/js/components/auth/Register.js":
/*!**************************************************!*\
  !*** ./resources/js/components/auth/Register.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AuthProvider */ "./resources/js/components/context/AuthProvider.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Register =
/*#__PURE__*/
function (_Component) {
  _inherits(Register, _Component);

  function Register() {
    var _this;

    _classCallCheck(this, Register);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Register).call(this));
    _this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: []
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Register, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var newUser = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation
      };
      this.props.register(newUser).then(function () {
        return _this2.props.history.push('/confirm-email');
      })["catch"](function (err) {
        var errors = err.response.data.errors;

        _this2.setState({
          errors: errors
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var err = this.state.errors;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-center mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header"
      }, "Sign up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        method: "POST",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "register_fname",
        className: "col-md-4 col-form-label text-md-right"
      }, "First Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "register_fname",
        type: "text",
        name: "first_name",
        className: "form-control ".concat(err.first_name && 'is-invalid'),
        value: this.state.first_name,
        onChange: this.handleChange,
        placeholder: "Enter your first name",
        autoComplete: "first-name" // required
        ,
        autoFocus: true
      }), err.first_name && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "invalid-feedback"
      }, err.first_name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "register_lname",
        className: "col-md-4 col-form-label text-md-right"
      }, "Last Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "register_lname",
        type: "text",
        name: "last_name",
        className: "form-control ".concat(err.last_name && 'is-invalid'),
        value: this.state.last_name,
        onChange: this.handleChange,
        placeholder: "Enter your last name",
        autoComplete: "last-name" // required

      }), err.last_name && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "invalid-feedback"
      }, err.last_name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "register_email",
        className: "col-md-4 col-form-label text-md-right"
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "register_email",
        type: "email",
        name: "email",
        className: "form-control ".concat(err.email && 'is-invalid'),
        value: this.state.email,
        onChange: this.handleChange,
        placeholder: "Enter your email",
        autoComplete: "email" // required

      }), err.email && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "invalid-feedback"
      }, err.email))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "register_password",
        className: "col-md-4 col-form-label text-md-right"
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "register_password",
        type: "password",
        name: "password",
        className: "form-control ".concat(err.password && 'is-invalid'),
        value: this.state.password,
        onChange: this.handleChange,
        placeholder: "Enter a password",
        autoComplete: "new-password" // required

      }), err.password && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "invalid-feedback"
      }, err.password))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "register_password_confirm",
        className: "col-md-4 col-form-label text-md-right"
      }, "Confirm Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "register_password_confirm",
        type: "password",
        name: "password_confirmation",
        className: "form-control ".concat(err.password && 'is-invalid'),
        value: this.state.password_confirmation,
        onChange: this.handleChange,
        placeholder: "Re-enter your password",
        autoComplete: "confirm-new-password" // required

      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row form-group mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-8 offset-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Sign up")))))))));
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_AuthProvider__WEBPACK_IMPORTED_MODULE_1__["withAuth"])(Register));

/***/ }),

/***/ "./resources/js/components/auth/password/Forget.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/auth/password/Forget.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Forget =
/*#__PURE__*/
function (_Component) {
  _inherits(Forget, _Component);

  function Forget() {
    var _this;

    _classCallCheck(this, Forget);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Forget).call(this));
    _this.state = {
      email: '',
      errors: null
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Forget, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var forgot = {
        email: this.state.email
      };
      axios.post('/api/forgot', forgot).then(function (res) {
        console.log(res.data);

        _this2.setState({
          email: '',
          errors: null
        });

        _this2.props.history.push('/password/forget/send');
      })["catch"](function (err) {
        var message = err.response.data.message;

        _this2.setState({
          errors: message
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var err = this.state.errors;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-center mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header"
      }, "Forget Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        method: "POST",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "forget_email",
        className: "col-md-4 col-form-label text-md-right"
      }, "E-Mail Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "forget_email",
        type: "email",
        name: "email",
        className: "form-control ".concat(err && 'is-invalid'),
        value: this.state.email,
        onChange: this.handleChange,
        placeholder: "Enter your email",
        autoComplete: "email" // required
        ,
        autoFocus: true
      }), err && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "invalid-feedback"
      }, err))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row form-group mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-8 offset-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Send Password Reset Link")))))))));
    }
  }]);

  return Forget;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Forget);

/***/ }),

/***/ "./resources/js/components/auth/password/ForgetEmailSend.js":
/*!******************************************************************!*\
  !*** ./resources/js/components/auth/password/ForgetEmailSend.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ForgetEmailSend() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center mt-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header"
  }, "Reset Email Send"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, "Email to reset your password was send to your email address, please check your inbox and click the button to reset your password.")))));
}

/* harmony default export */ __webpack_exports__["default"] = (ForgetEmailSend);

/***/ }),

/***/ "./resources/js/components/auth/password/Reset.js":
/*!********************************************************!*\
  !*** ./resources/js/components/auth/password/Reset.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Reset =
/*#__PURE__*/
function (_Component) {
  _inherits(Reset, _Component);

  function Reset(props) {
    var _this;

    _classCallCheck(this, Reset);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Reset).call(this, props));
    var params = new URLSearchParams(window.location.search);
    var reset_token = params.get('token');
    var reset_email = params.get('email');
    _this.state = {
      token: reset_token,
      email: reset_email,
      password: '',
      password_confirmation: '',
      errors: null
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Reset, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var reset_password = {
        token: this.state.token,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation
      };
      axios.post('/api/reset', reset_password).then(function (res) {
        _this2.setState({
          errors: null
        });

        _this2.props.history.push('/login');
      })["catch"](function (err) {
        var message = err.response.data.message;
        var password = err.response.data.errors.password;

        _this2.setState({
          errors: [message, ' ', password]
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var err = this.state.errors;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-center mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header"
      }, "Reset Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        method: "POST",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "reset_email",
        className: "col-md-4 col-form-label text-md-right"
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "reset_email",
        type: "email",
        name: "email",
        className: "form-control",
        value: this.state.email != null ? this.state.email : 'Check your email',
        autoComplete: "email",
        disabled: true
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "reset_password",
        className: "col-md-4 col-form-label text-md-right"
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "reset_password",
        type: "password",
        name: "password",
        className: "form-control ".concat(err && 'is-invalid'),
        value: this.state.password,
        onChange: this.handleChange,
        placeholder: "Enter a new password",
        autoComplete: "new-password",
        autoFocus: true // required

      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "reset_password_confirm",
        className: "col-md-4 col-form-label text-md-right"
      }, "Confirm Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "reset_password_confirm",
        type: "password",
        name: "password_confirmation",
        className: "form-control ".concat(err && 'is-invalid'),
        value: this.state.password_confirmation,
        onChange: this.handleChange,
        placeholder: "Re-enter your password",
        autoComplete: "confirm-new-password" // required

      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row form-group mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-8 offset-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Reset Password"), err && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mt-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-danger"
      }, err))))))))));
    }
  }]);

  return Reset;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Reset);

/***/ }),

/***/ "./resources/js/components/context/AuthProvider.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/context/AuthProvider.js ***!
  \*********************************************************/
/*! exports provided: default, withAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuth", function() { return withAuth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var AuthContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

var AuthProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(AuthProvider, _Component);

  function AuthProvider(props) {
    var _this;

    _classCallCheck(this, AuthProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AuthProvider).call(this, props));
    _this.state = {};
    _this.login = _this.login.bind(_assertThisInitialized(_this));
    _this.register = _this.register.bind(_assertThisInitialized(_this));
    _this.logout = _this.logout.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AuthProvider, [{
    key: "login",
    value: function login(user) {
      return axios.post('/api/login', user).then(function (response) {
        // console.log(response.data)
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('refresh_token', response.data.refresh_token);
        return response;
      });
    }
  }, {
    key: "register",
    value: function register(newUser) {
      return axios.post('/api/register', newUser).then(function (response) {
        // console.log(response.data)
        return response;
      });
    }
  }, {
    key: "logout",
    value: function logout() {
      var _this2 = this;

      var token = localStorage.getItem('access_token');
      axios({
        method: 'POST',
        url: '/api/logout',
        headers: {
          Authorization: "Bearer ".concat(token)
        }
      }).then(function (res) {
        console.log(res.data);

        _this2.setState({
          isAuthenticated: false,
          first_name: '',
          last_name: '',
          email: ''
        });

        localStorage.clear();
      })["catch"](function (err) {
        console.log(err.response);
      });
    }
    /**
    * Passing the "state" and all the methods
    * with context.
    *
    */

  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthContext.Provider, {
        value: _objectSpread({}, this.state, {
          login: this.login,
          register: this.register,
          logout: this.logout
        })
      }, this.props.children);
    }
  }]);

  return AuthProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AuthProvider);
/**
* Creating and exporting HOC so we can augment
* components with the context consumer.
*
*/

var withAuth = function withAuth(Component) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthContext.Consumer, null, function (auth) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, auth, props));
    });
  };
};

/***/ }),

/***/ "./resources/js/components/context/UserProvider.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/context/UserProvider.js ***!
  \*********************************************************/
/*! exports provided: UserContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var UserContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  isAuthenticated: false,
  toggleAuth: function toggleAuth() {}
});

var UserProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(UserProvider, _Component);

  function UserProvider(props) {
    var _this;

    _classCallCheck(this, UserProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserProvider).call(this, props));
    _this.state = {
      isAuthenticated: false,
      first_name: '',
      last_name: '',
      email: ''
    };
    _this.toggleAuth = _this.toggleAuth.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UserProvider, [{
    key: "toggleAuth",
    value: function toggleAuth() {
      this.setState(function (prevState) {
        return {
          isAuthenticated: !prevState.isAuthenticated
        };
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var token = localStorage.getItem('access_token');

      if (token) {
        axios({
          method: 'GET',
          url: '/api/user',
          headers: {
            Authorization: "Bearer ".concat(token)
          }
        }).then(function (res) {
          console.log(res.data);

          _this2.setState({
            email: res.data.email,
            last_name: res.data.last_name,
            first_name: res.data.first_name,
            isAuthenticated: true
          });
        })["catch"](function (err) {
          console.log(err.response);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserContext.Provider, {
        value: _objectSpread({}, this.state, {
          toggleAuth: this.toggleAuth
        })
      }, this.props.children);
    }
  }]);

  return UserProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UserProvider);

/***/ }),

/***/ "./resources/js/components/notes/AddNote.js":
/*!**************************************************!*\
  !*** ./resources/js/components/notes/AddNote.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var AddNote =
/*#__PURE__*/
function (_Component) {
  _inherits(AddNote, _Component);

  function AddNote(props) {
    var _this;

    _classCallCheck(this, AddNote);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddNote).call(this, props));
    _this.state = {
      title: '',
      description: '',
      errors: []
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AddNote, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      delete this.state.errors[e.target.name];
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var token = localStorage.getItem('access_token');
      var newNote = {
        title: this.state.title,
        description: this.state.description
      };
      axios({
        method: 'POST',
        url: '/api/notes',
        data: newNote,
        headers: {
          Authorization: "Bearer ".concat(token)
        }
      }).then(function (res) {
        console.log(res.data);

        _this2.setState({
          title: '',
          description: '',
          errors: []
        });

        _this2.props.history.push('/notes');
      })["catch"](function (err) {
        var errors = err.response.data.errors;

        _this2.setState({
          errors: errors
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var err = this.state.errors;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-center mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header"
      }, "Create a Note"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        onKeyDown: this.handleKeyDown
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "add-note-title"
      }, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "add-note-title",
        className: "form-control ".concat(err.title && 'is-invalid'),
        name: "title",
        value: this.state.title,
        onChange: this.handleChange,
        placeholder: "Give title to your note" // required

      }), err.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "invalid-feedback"
      }, err.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "add-note-desc"
      }, "Note Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        rows: "5",
        id: "add-note-desc",
        className: "form-control ".concat(err.description && 'is-invalid'),
        name: "description",
        value: this.state.description,
        onChange: this.handleChange,
        placeholder: "Write your note" // required

      }), err.description && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "invalid-feedback"
      }, err.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-lg btn-primary",
        disabled: err.title || err.description
      }, "Add Note")))))));
    }
  }]);

  return AddNote;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AddNote);

/***/ }),

/***/ "./resources/js/components/notes/AddNoteButton.js":
/*!********************************************************!*\
  !*** ./resources/js/components/notes/AddNoteButton.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



function AddNoteButton() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-3 mt-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card add-note-card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/notes/create",
    className: "add-note-link"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "add-note-symbol"
  }, "+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Add Note")))));
}

/* harmony default export */ __webpack_exports__["default"] = (AddNoteButton);

/***/ }),

/***/ "./resources/js/components/notes/EditNote.js":
/*!***************************************************!*\
  !*** ./resources/js/components/notes/EditNote.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var EditNote =
/*#__PURE__*/
function (_Component) {
  _inherits(EditNote, _Component);

  function EditNote(props) {
    var _this;

    _classCallCheck(this, EditNote);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditNote).call(this, props));
    _this.state = {
      title: '',
      description: '',
      errors: []
    };
    _this.getNote = _this.getNote.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EditNote, [{
    key: "getNote",
    value: function getNote() {
      var _this2 = this;

      var token = localStorage.getItem('access_token');
      axios({
        method: 'GET',
        url: "/api/notes/".concat(this.props.match.params.id),
        headers: {
          Authorization: "Bearer ".concat(token)
        }
      }).then(function (res) {
        _this2.setState({
          title: res.data.title,
          description: res.data.description
        });
      })["catch"](function (err) {
        console.log("Errors showing note to edit: ".concat(err.response));
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      delete this.state.errors[e.target.name];
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this3 = this;

      e.preventDefault();
      var id = this.props.match.params.id;
      var token = localStorage.getItem('access_token');
      var updatedNote = {
        title: this.state.title,
        description: this.state.description
      };
      axios({
        method: 'PUT',
        url: "/api/notes/".concat(id),
        data: updatedNote,
        headers: {
          Authorization: "Bearer ".concat(token)
        }
      }).then(function (res) {
        console.log('Note updated.');

        _this3.setState({
          errors: []
        });

        _this3.props.history.push('/notes');
      })["catch"](function (err) {
        var errors = err.response.data.errors;

        _this3.setState({
          errors: errors
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getNote();
    }
  }, {
    key: "render",
    value: function render() {
      var err = this.state.errors;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-center mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header"
      }, "Edit the Note"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        onKeyDown: this.handleKeyDown
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "add-note-title"
      }, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "add-note-title",
        className: "form-control ".concat(err.title && 'is-invalid'),
        name: "title",
        value: this.state.title,
        onChange: this.handleChange,
        placeholder: "Give title to your note" // required

      }), err.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "invalid-feedback"
      }, err.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "add-note-desc"
      }, "Note Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        rows: "5",
        id: "add-note-desc",
        className: "form-control ".concat(err.description && 'is-invalid'),
        name: "description",
        value: this.state.description,
        onChange: this.handleChange,
        placeholder: "Write your note" // required

      }), err.description && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "invalid-feedback"
      }, err.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-lg btn-primary",
        disabled: err.title || err.description
      }, "Update Note")))))));
    }
  }]);

  return EditNote;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (EditNote);

/***/ }),

/***/ "./resources/js/components/notes/NoteCard.js":
/*!***************************************************!*\
  !*** ./resources/js/components/notes/NoteCard.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



function NoteCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-3 mt-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card note-card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "card-title"
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card-text"
  }, props.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-control"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/notes/".concat(props.id, "/edit"),
    className: "card-link btn btn-sm btn-primary"
  }, "Edit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return props.deleteNote(props.id);
    },
    className: "card-link btn btn-sm btn-secondary"
  }, "Delete")))));
}

/* harmony default export */ __webpack_exports__["default"] = (NoteCard);

/***/ }),

/***/ "./resources/js/components/notes/Notes.js":
/*!************************************************!*\
  !*** ./resources/js/components/notes/Notes.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NoteCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoteCard */ "./resources/js/components/notes/NoteCard.js");
/* harmony import */ var _AddNoteButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddNoteButton */ "./resources/js/components/notes/AddNoteButton.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Notes =
/*#__PURE__*/
function (_Component) {
  _inherits(Notes, _Component);

  function Notes(props) {
    var _this;

    _classCallCheck(this, Notes);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Notes).call(this, props));
    _this.state = {
      notes: []
    };
    _this.getNotes = _this.getNotes.bind(_assertThisInitialized(_this));
    _this.deleteNote = _this.deleteNote.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Notes, [{
    key: "getNotes",
    value: function getNotes() {
      var _this2 = this;

      var token = localStorage.getItem('access_token');
      axios({
        method: 'GET',
        url: '/api/notes',
        headers: {
          Authorization: "Bearer ".concat(token)
        }
      }).then(function (res) {
        _this2.setState({
          notes: res.data
        });
      })["catch"](function (err) {
        console.log(err.response);
      });
    }
  }, {
    key: "deleteNote",
    value: function deleteNote(id) {
      var _this3 = this;

      var token = localStorage.getItem('access_token');
      axios["delete"]("/api/notes/".concat(id), {
        headers: {
          Authorization: "Bearer ".concat(token)
        }
      }).then(function (res) {
        console.log('Note was deleted.'); // also delete the Note form the state

        var removeDeletedNote = function removeDeletedNote(note) {
          return note.id !== id;
        };

        var updateStateAfterDelete = _this3.state.notes.filter(removeDeletedNote);

        _this3.setState({
          notes: updateStateAfterDelete
        });
      })["catch"](function (err) {
        console.log("Errors on delete: ".concat(err));
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getNotes();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var NoteCards = this.state.notes.map(function (note) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NoteCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          id: note.id,
          key: note.id,
          title: note.title,
          description: note.description,
          deleteNote: _this4.deleteNote
        });
      }).reverse(); // this reverse the order 'last note, first'

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddNoteButton__WEBPACK_IMPORTED_MODULE_2__["default"], null), NoteCards));
    }
  }]);

  return Notes;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Notes);

/***/ }),

/***/ "./resources/js/components/routes/GuestRoute.js":
/*!******************************************************!*\
  !*** ./resources/js/components/routes/GuestRoute.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var hasToken = localStorage.getItem('access_token');

function GuestRoute(_ref) {
  var Component = _ref.component,
      rest = _objectWithoutProperties(_ref, ["component"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], _extends({}, rest, {
    render: function render(props) {
      return hasToken ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: {
          pathname: '/',
          state: {
            from: props.location
          }
        }
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props);
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (GuestRoute);

/***/ }),

/***/ "./resources/js/components/routes/PrivateRoute.js":
/*!********************************************************!*\
  !*** ./resources/js/components/routes/PrivateRoute.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_UserProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/UserProvider */ "./resources/js/components/context/UserProvider.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function PrivateRoute(_ref) {
  var Component = _ref.component,
      rest = _objectWithoutProperties(_ref, ["component"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_UserProvider__WEBPACK_IMPORTED_MODULE_2__["UserContext"].Consumer, null, function (context) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], _extends({}, rest, {
      render: function render(props) {
        return context.isAuthenticated === true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
          to: {
            pathname: '/login',
            state: {
              from: props.location
            }
          }
        });
      }
    }));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (PrivateRoute);

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/V/Dropbox/Tuts & Practice/Laravel Test Apps/laravel_react_spa/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/V/Dropbox/Tuts & Practice/Laravel Test Apps/laravel_react_spa/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);