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
    _react2.default.createElement('path', { d: 'M46.1 9.2H29.3a5.63 5.63 0 0 1-3.2-1.3l-3.3-3.3a5.12 5.12 0 0 0-3.2-1.3L9 3a1.9 1.9 0 0 0-1.9 1.9V9h9.5a5.63 5.63 0 0 1 3.2 1.3l3.3 3.3a5.12 5.12 0 0 0 3.2 1.3h16.9a1.9 1.9 0 0 1 1.9 1.9v18.9h1.1a1.9 1.9 0 0 0 1.9-1.9V11a2 2 0 0 0-2-1.8zM40 18a1.9 1.9 0 0 1 1.9 1.9V43a1.81 1.81 0 0 1-1.8 1.9L2 45a2 2 0 0 1-2-1.9V13.9A1.9 1.9 0 0 1 1.9 12H13a5.37 5.37 0 0 1 3.2 1.3l3.3 3.4a5.37 5.37 0 0 0 3.2 1.3z' })
  );
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = { "aria-hidden": "true", "className": " ", "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg", "data-name": "Layer 1", "isBidi": true };
SvgIcon.displayName = "projects";

exports.default = SvgIcon;