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
    _react2.default.createElement('path', { d: 'M48 27v-6h-7.2a16.37 16.37 0 0 0-2.8-6.8l5-5L38.8 5l-5 5A18 18 0 0 0 27 7.1V0h-6v7.1a16.37 16.37 0 0 0-6.8 2.8l-5-5-4.3 4.3 5 5A17.82 17.82 0 0 0 7.1 21H0v6h7.2a16.37 16.37 0 0 0 2.8 6.8l-5.1 5.1 4.2 4.2 5.1-5.1a17.82 17.82 0 0 0 6.8 2.8V48h6v-7.2a16.37 16.37 0 0 0 6.8-2.8l5.1 5.1 4.2-4.2-5.1-5.1a16.37 16.37 0 0 0 2.8-6.8zm-35.1-3.1A11.1 11.1 0 1 1 24 35a11.14 11.14 0 0 1-11.1-11.1z' })
  );
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = { "aria-hidden": "true", "className": "", "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg", "data-name": "Layer 1" };
SvgIcon.displayName = "settings";

exports.default = SvgIcon;