import React, { PropTypes } from 'react';
import Icon from './Icon';

const propTypes = {
  /**
   * Should the svg mirror when dir="rtl".
   */
  isBidi: PropTypes.bool,
  /**
   * Child nodes.
   */
  children: PropTypes.node,
  /**
   * Height of SVG.
   */
  height: PropTypes.string,
  /**
   * Width of SVG.
   */
  width: PropTypes.string,
  /**
   * String that labels the current element. If ariaLabel is present,
   * role is set to 'img' and aria-hidden is removed.
   */
  'aria-label': PropTypes.string,
  /**
   * Focusable attribute. IE 10/11 are focusable without this attribute.
   */
  focusable: PropTypes.bool,
};

const defaultProps = {
  isBidi: true,
  isSpin: false,
  height: '1em',
  width: '1em',
  'aria-label': null,
  focusable: false,
};

const IconAdd = customProps => (
  <Icon viewBox="0 0 48 48" {...customProps}>
    <path d="M48 21H27V0h-6v21H0v6h21v21h6V27h21z" />
  </Icon>
);

IconAdd.propTypes = propTypes;
IconAdd.defaultProps = defaultProps;
IconAdd.displayName = 'add';

export default IconAdd;
