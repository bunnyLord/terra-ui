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
      <path d="M34.6 13.6L22.4 1.4C21.5.6 20.3.1 19 0H2a2 2 0 0 0-2 2v44c0 1.1.9 2 2 2h32a2 2 0 0 0 2-2V17c-.1-1.3-.6-2.5-1.4-3.4zm-2.1 2.1c.1.1.1.2.2.3H21V4.2l11.5 11.5zM3 45V3h15v14c0 1.1.9 2 2 2h13v26H3z" ></path>
    </Icon>
  )
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = {"aria-hidden":"true","className":" ","viewBox":"0 0 36 48","xmlns":"http://www.w3.org/2000/svg","isBidi":true};
SvgIcon.displayName = "paperFolded";

export default SvgIcon;
