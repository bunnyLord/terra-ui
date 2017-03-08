import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from './Icon';

const propTypes = {
  /**
   * Should the svg mirror when dir="rtl".
   */
  isBidi: PropTypes.bool,
  /**
   * Should the SVG rotate".
   */
  isSpin: PropTypes.bool,
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

const SvgIcon = customProps => {
  const attributes = Object.assign({}, customProps);
  attributes.className = classNames("", attributes.className);

  return (
    <Icon {...attributes}>
      <path d="M34 20v3H14v-3h20zm0 8H14v3h20v-3zm0 8H14v3h20v-3zm8-28v38a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5l1.1-1.4C16.6 1.7 20.2 0 24 0s7.4 1.7 9.8 4.6L35 6h5a2 2 0 0 1 2 2zM22.3 4.7c0 .5.3 1 .7 1.3h2c.4-.3.7-.8.7-1.3 0-1-.8-1.7-1.7-1.7s-1.7.7-1.7 1.7zM39 9h-3v3a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V9H9v36h30V9z" ></path>
    </Icon>
  )
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = {"aria-hidden":"true","className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};
SvgIcon.displayName = "clipboard";

export default SvgIcon;
