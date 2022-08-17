'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var material = require('@mui/material');
var TextField = require('@mui/material/TextField');
var Box = require('@mui/material/Box');
var Typography = require('@mui/material/Typography');
var Modal = require('@mui/material/Modal');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var TextField__default = /*#__PURE__*/_interopDefaultLegacy(TextField);
var Box__default = /*#__PURE__*/_interopDefaultLegacy(Box);
var Typography__default = /*#__PURE__*/_interopDefaultLegacy(Typography);
var Modal__default = /*#__PURE__*/_interopDefaultLegacy(Modal);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var PasswordInput = function PasswordInput(_ref) {
  var _ref$isError = _ref.isError,
      isError = _ref$isError === void 0 ? false : _ref$isError,
      _ref$errorMsg = _ref.errorMsg,
      errorMsg = _ref$errorMsg === void 0 ? '' : _ref$errorMsg,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange;
  return /*#__PURE__*/React__default["default"].createElement(TextField__default["default"], {
    id: "standard-password-input",
    label: "Password",
    type: "password",
    autoComplete: "current-password",
    variant: "standard",
    error: isError,
    helperText: errorMsg,
    margin: "normal",
    value: value,
    onChange: onChange
  });
};

var checkPasswordValues = function checkPasswordValues(pwd) {
  var fError = {
    first: '',
    confirm: '',
    isError: false
  };
  var pwd1 = pwd.first;
  var pwd2 = pwd.confirm;

  if (!pwd1.length) {
    fError.isError = true;
    fError.first = 'Please enter your password';
  }

  if (!pwd2.length) {
    fError.isError = true;
    fError.confirm = 'Please enter your password';
  } else if (pwd1 !== pwd2) {
    fError.isError = true;
    fError.confirm = "Those passwords didn't match. Try again!";
  } else if (pwd2.length < 6) {
    fError.isError = true;
    fError.confirm = 'Use 6 or more characters for your password';
  } else if (!/[a-z]/.test(pwd2)) {
    fError.isError = true;
    fError.confirm = "At least 1 lowercase character is required.";
  } else if (!/[A-Z]/.test(pwd2)) {
    fError.isError = true;
    fError.confirm = "At least 1 uppercase character is required.";
  } else if (!/\d/.test(pwd2)) {
    fError.isError = true;
    fError.confirm = "At least 1 number is required.";
  } else if (!/[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/.test(pwd2)) {
    fError.isError = true;
    fError.confirm = "At least 1 special character is required.";
  }

  if (fError.isError) return fError;
  return null;
};

var style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

var ModalDialog = function ModalDialog(_ref) {
  var open = _ref.open,
      setOpen = _ref.setOpen,
      headerMsg = _ref.headerMsg,
      mainMsg = _ref.mainMsg;

  var handleClose = function handleClose() {
    return setOpen(false);
  };

  return /*#__PURE__*/React__namespace.createElement("div", null, /*#__PURE__*/React__namespace.createElement(Modal__default["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/React__namespace.createElement(Box__default["default"], {
    sx: style
  }, /*#__PURE__*/React__namespace.createElement(Typography__default["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, headerMsg), /*#__PURE__*/React__namespace.createElement(Typography__default["default"], {
    id: "modal-modal-description",
    sx: {
      mt: 2
    }
  }, mainMsg))));
};

var FormContainer = function FormContainer() {
  var fieldInfo = ['first', 'confirm'];
  var formContainerStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "20px 30px",
    backgroundColor: "white",
    width: "400px"
  };
  var ulStyle = {
    userSelect: "none",
    paddingInlineStart: "14px"
  };

  var _useState = React.useState({
    first: '',
    confirm: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      pwd = _useState2[0],
      setPwd = _useState2[1];

  var _useState3 = React.useState({
    first: '',
    confirm: '',
    isError: false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      formError = _useState4[0],
      setFormError = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showModal = _useState6[0],
      setShowModal = _useState6[1];

  var handleChange = function handleChange(e, field) {
    setFormError({
      first: '',
      second: '',
      isError: false
    });
    setPwd(_objectSpread2(_objectSpread2({}, pwd), {}, _defineProperty({}, field, e.target.value)));
  };

  var handleSubmit = function handleSubmit() {
    var fError = checkPasswordValues(pwd);

    if (fError === null) {
      setShowModal(true);
    } else {
      setFormError(fError);
    }
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(ModalDialog, {
    open: showModal,
    setOpen: setShowModal,
    headerMsg: "Success!",
    mainMsg: "Set password successful!"
  }), /*#__PURE__*/React__default["default"].createElement(material.FormGroup, {
    style: formContainerStyle
  }, fieldInfo.map(function (field) {
    return /*#__PURE__*/React__default["default"].createElement(PasswordInput, {
      value: pwd[field],
      onChange: function onChange(e) {
        return handleChange(e, field);
      },
      isError: formError.isError,
      errorMsg: formError[field],
      key: field
    });
  }), /*#__PURE__*/React__default["default"].createElement("ul", {
    style: ulStyle
  }, /*#__PURE__*/React__default["default"].createElement("li", null, /*#__PURE__*/React__default["default"].createElement("span", null, "Password has a min length of 6 characters")), /*#__PURE__*/React__default["default"].createElement("li", null, /*#__PURE__*/React__default["default"].createElement("span", null, "Password has at least 1 uppercase character")), /*#__PURE__*/React__default["default"].createElement("li", null, /*#__PURE__*/React__default["default"].createElement("span", null, "Password has at least 1 lowercase character")), /*#__PURE__*/React__default["default"].createElement("li", null, /*#__PURE__*/React__default["default"].createElement("span", null, "Password has at least 1 number")), /*#__PURE__*/React__default["default"].createElement("li", null, /*#__PURE__*/React__default["default"].createElement("span", null, "Password has at least 1 special character"))), /*#__PURE__*/React__default["default"].createElement(material.Button, {
    variant: "contained",
    onClick: handleSubmit
  }, "submit")));
};

exports.FormContainer = FormContainer;
