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
      <path d="M40 31.5a8.48 8.48 0 0 1-2.1-4.7V17a13.81 13.81 0 0 0-9.6-13.2A4.25 4.25 0 0 0 24 0a4.42 4.42 0 0 0-4.4 3.7A14 14 0 0 0 10 16.9v9.8a7.91 7.91 0 0 1-2.6 4.7A10.45 10.45 0 0 0 4 38.7v.2h38.8v-.2a9.64 9.64 0 0 0-2.8-7.2zM18 42a6 6 0 0 0 12 0v-.2H18z" ></path>
    </Icon>
  )
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = {"aria-hidden":"true","className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};
SvgIcon.displayName = "notification";

export default SvgIcon;
