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
      <path d="M48 24c0 5.5-1.8 10.6-5.2 14.9C38.2 44.7 31.4 48 24 48 10.8 48 0 37.2 0 24S10.8 0 24 0c2.4 0 4.8.4 7.1 1.1A23.82 23.82 0 0 1 48 24zm-3 0A20.91 20.91 0 0 0 24 3a21 21 0 1 0 0 42c6.5 0 12.5-2.9 16.5-8 2.9-3.7 4.5-8.2 4.5-13z" ></path>
    </Icon>
  )
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = {"aria-hidden":"true","className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};
SvgIcon.displayName = "unavailable";

export default SvgIcon;
