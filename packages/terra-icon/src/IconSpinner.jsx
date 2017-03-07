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
  isSpin: true,
  height: '1em',
  width: '1em',
  'aria-label': null,
  focusable: false,
};

const IconAdd = customProps => (
  <Icon viewBox="0 0 48 48" {...customProps}>
    <path d="M24 0a3.8 3.8 0 1 1-3.8 3.8A3.8 3.8 0 0 1 24 0zm0 40.4a3.8 3.8 0 1 1-3.8 3.8 3.8 3.8 0 0 1 3.8-3.8zm20.2-20.2a3.8 3.8 0 1 1-3.8 3.8 3.8 3.8 0 0 1 3.8-3.8zm-40.4 0A3.8 3.8 0 1 1 0 24a3.8 3.8 0 0 1 3.8-3.8zM38.3 5.9a3.8 3.8 0 1 1-3.8 3.8 3.8 3.8 0 0 1 3.8-3.8zM9.7 34.5a3.8 3.8 0 1 1-3.8 3.8 3.8 3.8 0 0 1 3.8-3.8zm0-28.6a3.8 3.8 0 1 1-3.8 3.8 3.8 3.8 0 0 1 3.8-3.8zm28.6 28.6a3.8 3.8 0 1 1-3.8 3.8 3.8 3.8 0 0 1 3.8-3.8z" />
  </Icon>
);

IconAdd.propTypes = propTypes;
IconAdd.defaultProps = defaultProps;
IconAdd.displayName = 'spinner';

export default IconAdd;
