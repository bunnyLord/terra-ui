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
      <path d="M31.1 1.1A23.94 23.94 0 0 0 0 24c0 13.3 10.7 24 24 24s24-10.7 24-24c0-10.5-6.8-19.8-16.9-22.9z" ></path><path fill="#FFF" d="M32.4 31.8c-.6.8-1.6.9-2.4.4-.2-.1-.3-.2-.4-.4l-6.9-6.9c-.5-.5-.7-1.2-.6-1.9V11.4c-.1-1 .7-1.9 1.7-2 1 .1 1.8 1 1.7 2v11.5l6.5 6.5c.8.6.9 1.6.4 2.4z" ></path>
    </Icon>
  )
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = {"aria-hidden":"true","className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};
SvgIcon.displayName = "away";

export default SvgIcon;
