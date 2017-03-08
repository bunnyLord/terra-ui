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
      <path d="M47.4 43.3L33.8 29.6c2.2-3.1 3.6-6.8 3.6-10.9C37.3 8.4 29 0 18.7 0S0 8.4 0 18.7s8.4 18.6 18.7 18.6c4.1 0 7.9-1.3 10.9-3.6l13.6 13.6c.8.8 2 .8 2.8 0l1.4-1.4c.8-.6.8-1.9 0-2.6zM2.9 18.7C2.9 10 10 2.9 18.7 2.9S34.4 10 34.4 18.7s-7.1 15.8-15.8 15.8S2.9 27.4 2.9 18.7zM7 17h23v3H7v-3z" ></path>
    </Icon>
  )
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = {"aria-hidden":"true","className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};
SvgIcon.displayName = "zoomOut";

export default SvgIcon;
