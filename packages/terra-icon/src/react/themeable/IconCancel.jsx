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
      <path d="M24 0a24 24 0 1 0 24 24A23.94 23.94 0 0 0 24 0zM5.5 24A18.52 18.52 0 0 1 24 5.5a18.05 18.05 0 0 1 10.9 3.6L9.2 35a18.43 18.43 0 0 1-3.7-11zM24 42.5a18.05 18.05 0 0 1-10.9-3.6L38.8 13A18.42 18.42 0 0 1 24 42.5z" ></path>
    </Icon>
  )
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = {"aria-hidden":"true","className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};
SvgIcon.displayName = "cancel";

export default SvgIcon;
