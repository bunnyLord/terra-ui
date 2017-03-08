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
      <path d="M47.1 38L37 31c-.7-.5-1.6-.5-2.3-.1l-6 3.6c-2.4-1.7-5.2-4-8.2-7-3-3-5.4-5.9-7.1-8.4l3.5-6c.4-.7.4-1.6-.1-2.3L10 .9C9.2-.1 7.7-.3 6.8.6L1.2 5.8l-.4.4c-.7.9-1 2-.7 3.1.2 1.1 2.5 11.3 15 23.8C27.4 45.4 37.3 47.7 38.7 48c1.1.3 2.3 0 3.2-.7 0 0 .4-.3.4-.4l5.1-5.5c.9-1.1.7-2.6-.3-3.4z" ></path>
    </Icon>
  )
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = {"aria-hidden":"true","className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};
SvgIcon.displayName = "phone";

export default SvgIcon;
