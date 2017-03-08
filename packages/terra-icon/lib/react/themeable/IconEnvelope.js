'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * Should the svg mirror when dir="rtl".
   */
  isBidi: _react.PropTypes.bool,
  /**
   * Should the SVG rotate".
   */
  isSpin: _react.PropTypes.bool,
  /**
   * Child nodes.
   */
  children: _react.PropTypes.node,
  /**
   * Height of SVG.
   */
  height: _react.PropTypes.string,
  /**
   * Width of SVG.
   */
  width: _react.PropTypes.string,
  /**
   * String that labels the current element. If ariaLabel is present,
   * role is set to 'img' and aria-hidden is removed.
   */
  'aria-label': _react.PropTypes.string,
  /**
   * Focusable attribute. IE 10/11 are focusable without this attribute.
   */
  focusable: _react.PropTypes.bool
};

var SvgIcon = function SvgIcon(customProps) {
  var attributes = _extends({}, customProps);
  attributes.className = (0, _classnames2.default)("", attributes.className);

  return _react2.default.createElement(
    _Icon2.default,
    attributes,
    _react2.default.createElement('path', { d: 'M45.8 8H2.2C1 8 0 9 0 10.2v27.7C0 39 1 40 2.2 40h43.7c1.2 0 2.2-1 2.2-2.2V10.2C48 9 47 8 45.8 8zM3 37V14.6l21 15 21-15V37H3zm.1-26h41.7L24 25.9 3.1 11z' })
  );
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = { "aria-hidden": "true", "className": "", "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg" };
SvgIcon.displayName = "envelope";

exports.default = SvgIcon;