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
      <path d="M37 0H11a2 2 0 0 0-2 2v44c0 1.1.9 2 2 2h26a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM21 3.9c0-.5.4-.9.9-.9H26c.6 0 1 .4 1 .9V4c0 .6-.4 1-.9 1H22c-.6 0-1-.4-1-.9v-.2zM24 45a2 2 0 0 1-2-2c0-1.1.9-2 2-2s2 .9 2 2a2 2 0 0 1-2 2zm12-7H12V8h24v30z" ></path>
    </Icon>
  )
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = {"aria-hidden":"true","className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};
SvgIcon.displayName = "device";

export default SvgIcon;
