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
    _react2.default.createElement('path', { d: 'M18.5 0a8.9 8.9 0 1 1-8.9 8.9A8.92 8.92 0 0 1 18.5 0zm-5.6 29.2a1.6 1.6 0 1 1-1.6 1.6 1.58 1.58 0 0 1 1.6-1.6zM31 35.4a7.8 7.8 0 0 1-2.7-5.8 7.54 7.54 0 0 1 2-5.1 13.22 13.22 0 0 0-5.6-3.6v4.6a2.23 2.23 0 0 0 1 1.6 1.61 1.61 0 0 1 .6 1.4v4.7a.8.8 0 0 1-1.6 0v-5.5h-1.6v5.5a.8.8 0 1 1-1.6 0v-4.8a2.16 2.16 0 0 1 .6-1.4 2.23 2.23 0 0 0 1-1.6v-5a10.9 10.9 0 0 0-2.6-.3h-4.4a11.53 11.53 0 0 0-2.6.3v7.3a3.2 3.2 0 1 1-1.6 0v-6.9A13.5 13.5 0 0 0 3 33.5V38h24.1a11.6 11.6 0 0 1 3.9-2.6zM36 24a5.6 5.6 0 1 1-5.6 5.6A5.59 5.59 0 0 1 36 24zm9.8 24v-2.8a8.45 8.45 0 0 0-8.4-8.4h-2.7a8.45 8.45 0 0 0-8.4 8.4V48z' })
  );
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = { "aria-hidden": "true", "className": "", "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg", "data-name": "Layer 1" };
SvgIcon.displayName = "personnelPerson";

exports.default = SvgIcon;