'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('../src/list-item.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  className: _react.PropTypes.string,
  content: _react.PropTypes.element,
  isSelected: _react.PropTypes.bool,
  isSelectable: _react.PropTypes.bool,
  hasChevron: _react.PropTypes.bool
};

var defaultProps = {
  className: '',
  content: undefined,
  isSelected: false,
  isSelectable: undefined,
  hasChevron: false
};

var ListItem = function ListItem(_ref) {
  var className = _ref.className,
      content = _ref.content,
      isSelected = _ref.isSelected,
      isSelectable = _ref.isSelectable,
      hasChevron = _ref.hasChevron,
      customProps = _objectWithoutProperties(_ref, ['className', 'content', 'isSelected', 'isSelectable', 'hasChevron']);

  var listItemClassNames = (0, _classnames2.default)(['terra-ListItem', { 'terra-ListItem--selected': isSelected }, { 'terra-ListItem-selectable': isSelectable }, { 'terra-ListItem-chevron': hasChevron }, className]);

  return _react2.default.createElement(
    'li',
    _extends({}, customProps, { className: listItemClassNames }),
    content
  );
};

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

exports.default = ListItem;