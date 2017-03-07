'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * Should the svg mirror when dir="rtl".
   */
  isBidi: _react.PropTypes.bool,
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

var defaultProps = {
  isBidi: true,
  isSpin: false,
  height: '1em',
  width: '1em',
  'aria-label': null,
  focusable: false
};

var IconAdd = function IconAdd(customProps) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ viewBox: '0 0 48 48' }, customProps),
    _react2.default.createElement('path', { d: 'M48 21H27V0h-6v21H0v6h21v21h6V27h21z' })
  );
};

IconAdd.propTypes = propTypes;
IconAdd.defaultProps = defaultProps;
IconAdd.displayName = 'add';

exports.default = IconAdd;