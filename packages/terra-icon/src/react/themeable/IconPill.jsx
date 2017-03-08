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
  attributes.className = classNames(" ", attributes.className);

  return (
    <Icon {...attributes}>
      <path d="M44.7 3.2a10.83 10.83 0 0 0-15.5.1l-26 26c-4.3 4.3-4.2 11.3.1 15.6 2.1 2 4.9 3.1 7.7 3.1s5.7-1.1 7.8-3.3l26-26c4.3-4.3 4.3-11.3-.1-15.5zm-2 13.4l-13 13-11.4-11.2 13-13C32.8 3.8 34.8 3 37 3a8.02 8.02 0 0 1 8 8c0 2.1-.8 4.1-2.3 5.6z" ></path>
    </Icon>
  )
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = {"aria-hidden":"true","className":" ","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","isBidi":true};
SvgIcon.displayName = "pill";

export default SvgIcon;
