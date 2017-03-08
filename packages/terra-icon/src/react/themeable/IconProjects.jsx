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
      <path d="M46.1 9.2H29.3a5.63 5.63 0 0 1-3.2-1.3l-3.3-3.3a5.12 5.12 0 0 0-3.2-1.3L9 3a1.9 1.9 0 0 0-1.9 1.9V9h9.5a5.63 5.63 0 0 1 3.2 1.3l3.3 3.3a5.12 5.12 0 0 0 3.2 1.3h16.9a1.9 1.9 0 0 1 1.9 1.9v18.9h1.1a1.9 1.9 0 0 0 1.9-1.9V11a2 2 0 0 0-2-1.8zM40 18a1.9 1.9 0 0 1 1.9 1.9V43a1.81 1.81 0 0 1-1.8 1.9L2 45a2 2 0 0 1-2-1.9V13.9A1.9 1.9 0 0 1 1.9 12H13a5.37 5.37 0 0 1 3.2 1.3l3.3 3.4a5.37 5.37 0 0 0 3.2 1.3z" ></path>
    </Icon>
  )
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = {"aria-hidden":"true","className":" ","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};
SvgIcon.displayName = "projects";

export default SvgIcon;
