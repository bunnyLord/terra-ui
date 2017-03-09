import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './compact-card.scss';
import Display from './Display';
import Comment from './Comment';

const propTypes = {
  className: PropTypes.string,
  layout: PropTypes.oneOf(['oneColumn', 'twoColumns']),
  textEmphasis: PropTypes.oneOf(['default', 'left']),
  isTruncated: PropTypes.bool,
  accessoryAlignment: PropTypes.oneOf(['alignTop', 'alignCenter']),
  leftAccessory: PropTypes.element,
  rightAccessory: PropTypes.element,
  displays: PropTypes.arrayOf(PropTypes.element),
  comment: PropTypes.element,
};

const defaultProps = {
  className: '',
  layout: 'oneColumn',
  textEmphasis: 'default',
  isTruncated: false,
  accessoryAlignment: 'alignCenter',
  leftAccessory: undefined,
  rightAccessory: undefined,
  display: [],
  comment: undefined,
};

class CompactCard extends React.Component {

  static renderAccessory(accessory) {
    return (
      <div className="terra-CompactCard-accessory">
        {accessory}
      </div>
    );
  }

  static renderRows(displays, layout, emphasis) {
    if (displays === null || displays === undefined || !displays.length) {
      return undefined;
    }

    const displaysSlice = displays.slice(0, 7);
    let sliceValue = 1;
    if (layout === 'twoColumns') {
      sliceValue = 2;
    }

    const displayGroups = [];
    let displayGroup = [];
    const sliceLength = displaysSlice.length;
    for (let i = 0; i < sliceLength; i += 1) {
      displayGroup.push(displaysSlice[i]);

      if ((i + 1) % sliceValue === 0) {
        displayGroups.push(displayGroup);
        displayGroup = [];
      }
    }

    return (
      <div className="terra-CompactCard-rowContainer">
        {displayGroups.map((group, index) => {
          const row = CompactCard.renderRow(group, index, displayGroups.length, emphasis);
          return row;
        })}
      </div>
    );
  }

  static renderRow(row, rowIndex, rowCount, emphasis) {
    const rowKey = rowIndex;
    return (
      <div className="terra-CompactCard-row" key={rowKey}>
        {row.map((display, contentIndex) => {
          const contentKey = contentIndex;
          const contentClasses = CompactCard.classesForContent(rowIndex,
                                                               rowCount,
                                                               contentIndex,
                                                               emphasis);
          return (
            <div {...{ className: contentClasses }} key={contentKey}>
              {display}
            </div>
          );
        })}
      </div>
    );
  }

  static classesForContent(rowIndex, rowCount, contentIndex, emphasis) {
    let classes;
    if (emphasis === 'left') {
      classes = CompactCard.leftEmphasisContentClassesFromIndexes(rowIndex, rowCount, contentIndex);
    } else {
      classes = CompactCard.defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
    }
    return ['terra-CompactCard-content'].concat(classes).join(' ');
  }

  static defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount) {
    let contentSize = 'terra-CompactCard-content--primarySize';
    let contentColor = 'terra-CompactCard-content--primaryColor';

    if (rowIndex > 0) {
      contentSize = 'terra-CompactCard-content--secondarySize';
    }

    if (rowCount === 2 && rowIndex === 1) {
      contentColor = 'terra-CompactCard-content--secondaryColor';
    }

    if (rowIndex >= 2) {
      contentColor = 'terra-CompactCard-content--secondaryColor';
    }

    return [contentSize, contentColor];
  }

  static leftEmphasisContentClassesFromIndexes(rowIndex, rowCount, contentIndex) {
    if (contentIndex === 1) {
      return ['terra-CompactCard-content--secondarySize', 'terra-CompactCard-content--secondaryColor'];
    }

    return CompactCard.defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
  }

  render() {
    const { className,
            layout,
            textEmphasis,
            isTruncated,
            accessoryAlignment,
            leftAccessory,
            rightAccessory,
            displays,
            comment,
            ...customProps } = this.props;

    const cardClassNames = classNames([
      'terra-CompactCard',
      { 'terra-CompactCard--isTruncated': isTruncated },
      { [`terra-CompactCard--${layout}`]: layout },
      { [`terra-CompactCard-accessory--${accessoryAlignment}`]: accessoryAlignment },
      className,
    ]);

    return (
      <div {...customProps} className={cardClassNames}>
        {CompactCard.renderAccessory(leftAccessory)}
        <div className="terra-CompactCard-body">
          {CompactCard.renderRows(displays, layout, textEmphasis)}
          {comment}
        </div>
        {CompactCard.renderAccessory(rightAccessory)}
      </div>
    );
  }
}

CompactCard.propTypes = propTypes;
CompactCard.defaultProps = defaultProps;
CompactCard.Display = Display;
CompactCard.Comment = Comment;

export default CompactCard;
