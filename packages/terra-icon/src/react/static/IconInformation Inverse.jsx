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
      <path fill="#FFF" d="M24 0a24 24 0 1 0 .01 48.01A24 24 0 0 0 24 0zm2.7 36.8l-.2 1.7c-4.4 3-10.7 2.1-8.1-5.1 1-2.7 4.5-7.8 3.5-10.7-.4-1.2-1.8-1.2-3.2-.7l.2-1.6c2.4-1.7 5.4-2.6 7.6-1.2 3.9 2.5-1.7 11.7-2.4 13.5-1.4 3.8.3 4.7 2.6 4.1zM26.5 15c-1.9 0-3.5-1.6-3.5-3.5S24.6 8 26.5 8 30 9.6 30 11.5 28.4 15 26.5 15z" ></path>
    </Icon>
  )
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = {"aria-hidden":"true","className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};
SvgIcon.displayName = "information_inverse";

export default SvgIcon;
