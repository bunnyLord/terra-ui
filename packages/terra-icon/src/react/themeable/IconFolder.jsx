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
      <path d="M45.8 12c1.2 0 2.2 1 2.2 2.2v26.7c0 1.2-1 2.2-2.2 2.2H2.2C1 43 0 42 0 40.8V7.2C0 6 1 5 2.2 5H15c1.4.1 2.7.6 3.7 1.6l3.8 3.9c1 1 2.3 1.5 3.7 1.6l19.4-.1h.2z" ></path>
    </Icon>
  )
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = {"aria-hidden":"true","className":" ","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","isBidi":true};
SvgIcon.displayName = "folder";

export default SvgIcon;
