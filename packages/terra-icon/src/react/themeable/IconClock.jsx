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
      <path d="M32 29.4a1.72 1.72 0 1 1-2.4 2.4l-6.9-6.9a2.2 2.2 0 0 1-.6-1.9V11.4a1.9 1.9 0 0 1 1.7-2 1.9 1.9 0 0 1 1.7 2v11.5zM48 24a24 24 0 0 1-24 24 24 24 0 0 1 0-48 24.47 24.47 0 0 1 7.1 1.1A23.82 23.82 0 0 1 48 24zm-3 0A20.91 20.91 0 0 0 30.2 3.9 21.63 21.63 0 0 0 24 3a21 21 0 1 0 21 21z" ></path>
    </Icon>
  )
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = {"aria-hidden":"true","className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};
SvgIcon.displayName = "clock";

export default SvgIcon;
