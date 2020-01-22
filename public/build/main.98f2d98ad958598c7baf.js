(window.webpackJsonp=window.webpackJsonp||[]).push([["main"],{"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "ul {\\n  max-width: 50%; }\\n\\n.collapsible-header {\\n  background-color: #ffc600; }\\n\\n.collapsible-body {\\n  position: relative;\\n  height: 230px;\\n  background-color: #dedede; }\\n\\n.container {\\n  display: grid;\\n  grid-template-columns: 1fr 2fr;\\n  grid-gap: 2rem;\\n  width: 100%; }\\n\\nlabel {\\n  display: block;\\n  color: black;\\n  font-size: 1.5rem; }\\n\\nform {\\n  display: grid;\\n  grid-template-columns: 1fr 2fr; }\\n\\ninput, select {\\n  border-radius: 10px;\\n  border-style: none;\\n  height: 30px;\\n  width: 172px; }\\n\\n.btn {\\n  position: absolute;\\n  bottom: 0;\\n  right: 0;\\n  margin: 10px;\\n  border-radius: 15px;\\n  border-style: none;\\n  width: 150px;\\n  height: 35px;\\n  background-color: #3e4ab8;\\n  color: #fff; }\\n\\n.dob {\\n  display: flex; }\\n\\n.dob input {\\n  width: 50px;\\n  margin-right: 7px; }\\n\\ntextarea {\\n  border-style: none;\\n  background-color: #fff;\\n  resize: none;\\n  border-radius: 10px;\\n  height: 133px;\\n  width: 350px; }\\n\\n.is-danger {\\n  color: red; }\\n", ""]);\n\n\n//# sourceURL=webpack:///./src/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js')},"./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('var map = {\n\t"./log": "./node_modules/webpack/hot/log.js"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error("Cannot find module \'" + req + "\'");\n\t\te.code = \'MODULE_NOT_FOUND\';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = "./node_modules/webpack/hot sync ^\\\\.\\\\/log$";\n\n//# sourceURL=webpack:///(webpack)/hot_sync_nonrecursive_^\\.\\/log$?')},"./src/app/components/App.js":
/*!***********************************!*\
  !*** ./src/app/components/App.js ***!
  \***********************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useForm */ "./src/app/components/useForm.js");\n/* harmony import */ var _validationRules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validationRules */ "./src/app/components/validationRules.js");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar App = function App(props) {\n  var _useForm = Object(_useForm__WEBPACK_IMPORTED_MODULE_2__["default"])(submit, _validationRules__WEBPACK_IMPORTED_MODULE_3__["default"]),\n      values = _useForm.values,\n      handleChange = _useForm.handleChange,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),\n      _useState2 = _slicedToArray(_useState, 2),\n      gender = _useState2[0],\n      setGender = _useState2[1];\n\n  function submit() {\n    var data = {\n      firstName: values.name,\n      lastName: values.lastName,\n      email: values.email,\n      number: values.number,\n      gender: gender,\n      dob: "".concat(values.day, "-").concat(values.month, "-").concat(values.year),\n      comments: values.comment\n    };\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\'/\', data).then(function (response) {\n      console.log(response);\n    })["catch"](function (error) {\n      console.log(error);\n    });\n    console.log(toggle);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {\n    className: "collapsible"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {\n    className: "one"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "collapsible-header"\n  }, "Step 1: Your details"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "collapsible-body"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "container"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "First name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {\n    className: "browser-default",\n    type: "text",\n    name: "name",\n    value: values.name || \'\',\n    onChange: handleChange\n  }), errors.empty && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {\n    className: "is-danger"\n  }, errors.empty)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Last name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {\n    className: "browser-default",\n    type: "text",\n    name: "lastName",\n    value: values.lastName || \'\',\n    onChange: handleChange\n  }), errors.empty && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {\n    className: "is-danger"\n  }, errors.empty)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Email"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {\n    className: "browser-default",\n    type: "text",\n    name: "email",\n    value: values.email || \'\',\n    onChange: handleChange\n  }), errors.email && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {\n    className: "is-danger"\n  }, errors.email)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {\n    id: "first",\n    className: "browser-default btn"\n  }, "Next>")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {\n    className: "two"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "collapsible-header"\n  }, "Step 2: More comments"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "collapsible-body"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "container"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Telephone number"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {\n    className: "browser-default",\n    type: "text",\n    name: "number",\n    value: values.number || \'\',\n    onChange: handleChange\n  }), errors.empty && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {\n    className: "is-danger"\n  }, errors.empty)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Gender"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {\n    onClick: function onClick(e) {\n      return setGender(e.target.value);\n    },\n    className: "browser-default"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {\n    value: "male"\n  }, "M"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {\n    value: "female"\n  }, "F"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {\n    value: "not_specified"\n  }, "Prefer not to say"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Date of birth"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "dob"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {\n    className: "browser-default",\n    type: "text",\n    name: "day",\n    value: values.day || \'\',\n    onChange: handleChange\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {\n    className: "browser-default",\n    type: "text",\n    name: "month",\n    value: values.month || \'\',\n    onChange: handleChange\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {\n    className: "browser-default",\n    type: "text",\n    name: "year",\n    value: values.year || \'\',\n    onChange: handleChange\n  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {\n    id: "second",\n    className: "browser-default btn"\n  }, "Next>")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {\n    className: "three"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "collapsible-header"\n  }, "Step 3: Final comments"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "collapsible-body"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "container"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Comments"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {\n    name: "comment",\n    value: values.comment || \'\',\n    onChange: handleChange,\n    cols: "30"\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {\n    id: "third",\n    onClick: handleSubmit,\n    type: "submit",\n    className: "browser-default btn"\n  }, "Next>"))))));\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (App);\n\n//# sourceURL=webpack:///./src/app/components/App.js?')},"./src/app/components/useForm.js":
/*!***************************************!*\
  !*** ./src/app/components/useForm.js ***!
  \***************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar useForm = function useForm(callback, validate) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),\n      _useState2 = _slicedToArray(_useState, 2),\n      values = _useState2[0],\n      setValues = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),\n      _useState4 = _slicedToArray(_useState3, 2),\n      errors = _useState4[0],\n      setErrors = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),\n      _useState6 = _slicedToArray(_useState5, 2),\n      isSubmitting = _useState6[0],\n      setIsSubmitting = _useState6[1];\n\n  var handleSubmit = function handleSubmit(event) {\n    if (event) event.preventDefault();\n    setIsSubmitting(true);\n    setErrors(validate(values));\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {\n    if (Object.keys(errors).length === 0 && isSubmitting) {\n      callback();\n    }\n  }, [errors]);\n\n  var handleChange = function handleChange(event) {\n    event.persist();\n    setValues(function (values) {\n      return _objectSpread({}, values, _defineProperty({}, event.target.name, event.target.value));\n    });\n  };\n\n  return {\n    handleChange: handleChange,\n    handleSubmit: handleSubmit,\n    values: values,\n    errors: errors\n  };\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (useForm);\n\n//# sourceURL=webpack:///./src/app/components/useForm.js?')},"./src/app/components/validationRules.js":
/*!***********************************************!*\
  !*** ./src/app/components/validationRules.js ***!
  \***********************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\nfunction validate(values) {\n  var errors = {};\n\n  if (!values.email) {\n    errors.email = 'Email address is required';\n  } else if (!/\\S+@\\S+\\.\\S+/.test(values.email)) {\n    errors.email = 'Email address is invalid';\n  }\n\n  if (!values.name || !values.lastName || !values.number) {\n    errors.empty = \"the field can't be empty\";\n  }\n\n  return errors;\n}\n;\n\n//# sourceURL=webpack:///./src/app/components/validationRules.js?")},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");\n/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/components/App */ "./src/app/components/App.js");\n\n\n\n\n\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_3__["render"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_app_components_App__WEBPACK_IMPORTED_MODULE_5__["default"], null), document.querySelector(\'#root-app\'));\n\n//# sourceURL=webpack:///./src/index.js?')},"./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");\n\nif (typeof content === \'string\') {\n  content = [[module.i, content, \'\']];\n}\n\nvar options = {}\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss",\n      function () {\n        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");\n\n        if (typeof newContent === \'string\') {\n          newContent = [[module.i, newContent, \'\']];\n        }\n        \n        update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\n//# sourceURL=webpack:///./src/index.scss?')},0:
/*!********************************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:8081 (webpack)/hot/dev-server.js ./src/index.js ***!
  \********************************************************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('__webpack_require__(/*! C:\\xampp\\htdocs\\dev-test\\node_modules\\webpack-dev-server\\client\\index.js?http://0.0.0.0:8081 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8081");\n__webpack_require__(/*! C:\\xampp\\htdocs\\dev-test\\node_modules\\webpack\\hot\\dev-server.js */"./node_modules/webpack/hot/dev-server.js");\nmodule.exports = __webpack_require__(/*! C:\\xampp\\htdocs\\dev-test\\src\\index.js */"./src/index.js");\n\n\n//# sourceURL=webpack:///multi_(webpack)-dev-server/client?')}},[[0,"runtime","vendors"]]]);