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
      <path d="M44.4 13.2a3.59 3.59 0 0 0-3.6 3.6 2.77 2.77 0 0 0 .3 1.3l-9.8 9.8a3.65 3.65 0 0 0-1.5-.3 3.14 3.14 0 0 0-2.1.7L19.4 20a5 5 0 0 0 .2-1.2 3.6 3.6 0 0 0-7.2 0 3 3 0 0 0 .2 1l-7.9 7.9a3.59 3.59 0 0 0-1.1-.2 3.6 3.6 0 1 0 3.6 3.6 3.19 3.19 0 0 0-.3-1.4l7.7-7.7a3.19 3.19 0 0 0 1.4.3 2.77 2.77 0 0 0 1.3-.3l8.9 8.9v.2a3.61 3.61 0 1 0 7-1L43.3 20a4.25 4.25 0 0 0 1.1.2 3.59 3.59 0 0 0 3.6-3.6 3.55 3.55 0 0 0-3.6-3.4z" ></path>
    </Icon>
  )
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = {"aria-hidden":"true","className":" ","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};
SvgIcon.displayName = "analytics";

export default SvgIcon;
