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
      <path d="M10.5 26.3a16 16 0 0 1 .9-5.3L8 17.6a6.73 6.73 0 0 1-2-4.8A6.41 6.41 0 0 1 8 8a6.76 6.76 0 0 1 9.6 0l9 9a6.88 6.88 0 0 1 0 9.6 6.27 6.27 0 0 1-3.4 1.8 2.65 2.65 0 0 0 .5.6l4.1 4.1a11.36 11.36 0 0 0 3.1-2.3 12.8 12.8 0 0 0 0-18.1l-9-9a12.63 12.63 0 0 0-9-3.7 12.63 12.63 0 0 0-9 3.7A12.1 12.1 0 0 0 0 12.8a12.63 12.63 0 0 0 3.7 9l7 7a21.05 21.05 0 0 1-.2-2.5zm27-4.6a16 16 0 0 1-.9 5.3l3.4 3.4a6.79 6.79 0 1 1-9.6 9.6l-9-9a6.88 6.88 0 0 1 0-9.6 6.27 6.27 0 0 1 3.4-1.8 2.65 2.65 0 0 0-.5-.6l-4-4a11.36 11.36 0 0 0-3.1 2.3 12.8 12.8 0 0 0 0 18.1l9 9a12.73 12.73 0 0 0 18-18l-7-7a8 8 0 0 1 .3 2.3z" ></path>
    </Icon>
  )
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = {"aria-hidden":"true","className":" ","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};
SvgIcon.displayName = "link";

export default SvgIcon;
