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
      <path d="M47.2 24.9c1-.5 1-1.3 0-1.8L28 13.5 25 12c-.7-.3-2.9-1.5-3.9-2L1.9.4C.8-.1 0 .4 0 1.5V19c0 1.2.9 2.2 2.1 2.3L30.3 24c1.1.1 1.1.3 0 .4L2.1 27C.9 27.1 0 28 0 29.2v17.2c-.1.6.3 1.2.9 1.3.3 0 .6 0 .9-.2L21.1 38l3-1.5c.7-.3 2.9-1.5 3.9-2l19.2-9.6z" ></path>
    </Icon>
  )
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = {"aria-hidden":"true","className":" ","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","isBidi":true};
SvgIcon.displayName = "send";

export default SvgIcon;
