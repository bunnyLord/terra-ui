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
      <path d="M15.4 18.5c3.1 0 5.5 2.5 5.6 5.5 0 3.1-2.5 5.5-5.5 5.6-3.1 0-5.5-2.5-5.6-5.5 0-3.1 2.4-5.6 5.5-5.6zm0-18.5c3.1 0 5.5 2.5 5.6 5.5 0 3.1-2.5 5.5-5.5 5.6-3.1 0-5.5-2.5-5.6-5.5 0-3.1 2.4-5.6 5.5-5.6zm0 36.9c3.1 0 5.5 2.5 5.6 5.5 0 3.1-2.5 5.5-5.5 5.6-3.1 0-5.5-2.5-5.6-5.5-.1-3.1 2.4-5.6 5.5-5.6zm17.2-18.4c3.1 0 5.5 2.5 5.5 5.5s-2.5 5.5-5.5 5.5-5.5-2.5-5.5-5.5 2.4-5.5 5.5-5.5zm0-18.5c3.1 0 5.5 2.5 5.5 5.5S35.6 11 32.6 11s-5.5-2.5-5.5-5.5S29.5 0 32.6 0zm0 36.9c3.1 0 5.5 2.5 5.5 5.5S35.7 48 32.6 48s-5.5-2.5-5.5-5.5c0-3.1 2.4-5.6 5.5-5.6z" ></path>
    </Icon>
  )
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = {"aria-hidden":"true","className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};
SvgIcon.displayName = "knurling";

export default SvgIcon;
