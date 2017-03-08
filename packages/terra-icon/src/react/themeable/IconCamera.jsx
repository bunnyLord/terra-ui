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
      <path d="M24 16.9a9.2 9.2 0 1 0 9.2 9.2 9.18 9.18 0 0 0-9.2-9.2zM42 9h-6l-4.9-4H16.9L12 9H6c-2.7 0-6 3.3-6 6v22a6.45 6.45 0 0 0 6 6h36a6.37 6.37 0 0 0 6-6V15c0-2.6-3.3-6-6-6zM8 19a3 3 0 0 1 0-6 3 3 0 0 1 0 6zm16 20a13 13 0 1 1 13-13 13 13 0 0 1-13 13z" ></path>
    </Icon>
  )
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = {"aria-hidden":"true","className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};
SvgIcon.displayName = "camera";

export default SvgIcon;
