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
      <path d="M37 0a11 11 0 0 0-11 11v9H3.2A2.22 2.22 0 0 0 1 22.2v23.7A2.2 2.2 0 0 0 3.2 48h29.7a2.22 2.22 0 0 0 2.2-2.2V22.2a2.22 2.22 0 0 0-2.2-2.2H29v-9a8 8 0 0 1 16 0v12h3V11A11 11 0 0 0 37 0zM20 33.5V40h-4v-6.5a3.26 3.26 0 0 1-1-2.3 3 3 0 0 1 3-3 3.08 3.08 0 0 1 3 3 3.26 3.26 0 0 1-1 2.3z" ></path>
    </Icon>
  )
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = {"aria-hidden":"true","className":" ","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};
SvgIcon.displayName = "unlock";

export default SvgIcon;
