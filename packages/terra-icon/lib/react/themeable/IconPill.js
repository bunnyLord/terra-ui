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
  attributes.className = (0, _classnames2.default)(" ", attributes.className);

  return _react2.default.createElement(
    _Icon2.default,
    attributes,
    _react2.default.createElement('path', { d: 'M44.7 3.2a10.83 10.83 0 0 0-15.5.1l-26 26c-4.3 4.3-4.2 11.3.1 15.6 2.1 2 4.9 3.1 7.7 3.1s5.7-1.1 7.8-3.3l26-26c4.3-4.3 4.3-11.3-.1-15.5zm-2 13.4l-13 13-11.4-11.2 13-13C32.8 3.8 34.8 3 37 3a8.02 8.02 0 0 1 8 8c0 2.1-.8 4.1-2.3 5.6z' })
  );
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = { "aria-hidden": "true", "className": " ", "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg", "isBidi": true };
SvgIcon.displayName = "pill";

exports.default = SvgIcon;