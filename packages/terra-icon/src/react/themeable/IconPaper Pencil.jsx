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
      <path d="M30.1 8.8l-7.5-7.4C21.8.6 20.3 0 19.2 0H4.5a2 2 0 0 0-2 2v34c0 1.1.9 2 2 2H25l3-3H5.5V3h13v9c0 1.1.9 2 2 2h8v20.5l3-3V12.2c0-1.1-.6-2.7-1.4-3.4zm-8.6-4.3l6.5 6.4s0 .1.1.1h-6.5V4.5z" ></path><path d="M21.5 48l2.8-6.4 3.5 3.5-6.3 2.9zm22.4-18.7l1.4-1.4c.3-.3.3-.9 0-1.2l-2.4-2.4c-.3-.3-.9-.3-1.2 0l-1.4 1.4 3.6 3.6zm-4.7-2.6L25.3 40.6l3.6 3.6 13.9-13.9-3.6-3.6z" ></path>
    </Icon>
  )
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = {"aria-hidden":"true","className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};
SvgIcon.displayName = "paperPencil";

export default SvgIcon;
