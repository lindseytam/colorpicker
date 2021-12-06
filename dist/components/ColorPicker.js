"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./ColorPicker.css");

var _hexagon = _interopRequireDefault(require("./helpers/hexagon"));

var _circle = _interopRequireDefault(require("./helpers/circle"));

var _square = _interopRequireDefault(require("./helpers/square"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ColorPicker = _ref => {
  let {
    height = 100,
    shape = "square",
    defaultColor = "#14E298",
    onChange
  } = _ref;

  const handleChange = change => {
    onChange(change);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, shape === 'circle' && /*#__PURE__*/_react.default.createElement(_circle.default, {
    height: height,
    defaultColor: defaultColor,
    onChange: handleChange
  }), shape === 'square' && /*#__PURE__*/_react.default.createElement(_square.default, {
    defaultColor: defaultColor,
    height: height,
    onChange: handleChange
  }), shape === 'hexagon' && /*#__PURE__*/_react.default.createElement(_hexagon.default, {
    height: height,
    defaultColor: defaultColor,
    onChange: handleChange
  }));
};

var _default = ColorPicker;
exports.default = _default;