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
    _react2.default.createElement('path', { d: 'M31.1 31.4a1.51 1.51 0 1 1-2.1 2.1l-6.1-6.1a3 3 0 0 1-.5-.7.31.31 0 0 0-.1-.2c0-.1-.1-.3-.1-.4V15.3a1.69 1.69 0 0 1 1.5-1.8 1.69 1.69 0 0 1 1.5 1.8v10.3zm14.3-4.8a21.26 21.26 0 0 1-4.6 13.3A21.42 21.42 0 1 1 20.9 5.4V2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3.4a18.63 18.63 0 0 1 3.4.7 24.25 24.25 0 0 1 6.4 3.3l2.2-2.2a2.05 2.05 0 0 1 2.9 0l1.4 1.4a2.05 2.05 0 0 1 0 2.9l-2.1 2.1a22 22 0 0 1 4.3 13zm-3 0A18.34 18.34 0 0 0 29.5 9a20.32 20.32 0 0 0-5.5-.8A18.4 18.4 0 1 0 38.4 38a18.16 18.16 0 0 0 4-11.4z' })
  );
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = { "aria-hidden": "true", "className": "", "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg", "data-name": "Layer 1" };
SvgIcon.displayName = "due";

exports.default = SvgIcon;