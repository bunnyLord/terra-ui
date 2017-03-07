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

var IconAbnormal = function IconAbnormal(customProps) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ viewBox: '0 0 48 48' }, customProps),
    _react2.default.createElement('path', { fill: '#654A08', d: 'M47.7 23.2L24.8.3c-.5-.4-1.1-.4-1.6 0L.3 23.2c-.4.5-.4 1.1 0 1.6l22.9 22.9c.5.4 1.1.4 1.6 0l22.9-22.9c.4-.5.4-1.1 0-1.6zm-.7.9L24.1 47h-.2L1 24.1v-.2L23.9 1h.2L47 23.9v.2z' }),
    _react2.default.createElement('path', { fill: '#654A08', d: 'M24 8c3.9 3.9 4 13 4 13H15v6c0 10 9 13 9 13-3.9-3.9-4-13-4-13h13v-6c0-10-9-13-9-13z' })
  );
};

IconAbnormal.propTypes = propTypes;
IconAbnormal.defaultProps = defaultProps;
IconAbnormal.displayName = 'abnormal';

exports.default = IconAbnormal;