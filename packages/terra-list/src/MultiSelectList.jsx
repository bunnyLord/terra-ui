import React, { PropTypes } from 'react';
import '../src/list.scss';
import List from './List';

const propTypes = {
  children: PropTypes.node,
  isDivided: PropTypes.bool,
  onChange: PropTypes.func,
  maxSelectionCount: PropTypes.number,
};

const defaultProps = {
  children: [],
  isDivided: false,
  onChange: undefined,
  maxSelectionCount: 0,
};

class MultiSelectList extends React.Component {

  static selectedIndexesFromItems(items, maxSelectionCount) {
    const selectedIndexes = [];
    for (let i = 0; i < items.length; i += 1) {
      if (selectedIndexes.length >= maxSelectionCount) {
        break;
      }

      if (items[i].props.isSelected) {
        selectedIndexes.push(i);
      }
    }

    return selectedIndexes;
  }

  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
    this.state = { selectedIndexes: MultiSelectList.selectedIndexesFromItems(this.props.children, this.props.maxSelectionCount) };
  }

  componentWillReceiveProps(nextProps) {
    const nextIndexes = MultiSelectList.selectedIndexesFromItems(nextProps.children);

    if (this.shouldUpdateIndexes(nextIndexes)) {
      this.setState({ selectedIndexes: nextIndexes });
    }
  }

  shouldUpdateIndexes(indexes) {
    if (indexes.length !== this.state.selectedIndexes.length) {
      return true;
    }

    for (let i = indexes.length - 1; i >= 0; i -= 1) {
      if (this.state.selectedIndexes.includes(indexes[i]) !== true) {
        return true;
      }
    }

    return false;
  }

  handleSelection(event, index) {
    let newIndexes = [];
    if (this.state.selectedIndexes.length) {
      if (this.state.selectedIndexes.includes(index)) {
        newIndexes = this.state.selectedIndexes.slice();
        newIndexes.splice(newIndexes.indexOf(index), 1);
      } else {
        newIndexes = this.state.selectedIndexes.concat([index]);
      }
    } else {
      newIndexes.push(index);
    }

    this.setState({ selectedIndexes: newIndexes });
  }

  shouldHandleSelection(index) {
    if (this.state.selectedIndexes.length < this.props.maxSelectionCount) {
      return true;
    }
    if (this.state.selectedIndexes.includes(index)) {
      return true;
    }
    return false;
  }

  cloneChildItems(items) {
    const disableUnselectedItems = this.state.selectedIndexes.length >= this.props.maxSelectionCount;

    return items.map((item, index) => {
      const wrappedOnClick = this.wrappedOnClickForItem(item, index);
      const newProps = this.newPropsForItem(item, index, wrappedOnClick, disableUnselectedItems);

      return React.cloneElement(item, newProps);
    });
  }

  wrappedOnClickForItem(item, index) {
    const initialOnClick = item.props.onClick;
    return (event) => {
      if (this.shouldHandleSelection(index)) {
        this.handleSelection(event, index);

        if (this.onChange) {
          this.onChange(event, this.state.selectedIndexes);
        }
      }

      if (initialOnClick) {
        initialOnClick(event);
      }
    };
  }

  newPropsForItem(item, index, onClick, disableUnselectedItems) {
    const isSelected = this.state.selectedIndexes.includes(index);

    let newProps = { onClick };
    if (isSelected !== item.isSelected) {
      newProps.isSelected = isSelected;
    }

    if (item.props.isSelectable === undefined) {
      newProps.isSelectable = true;
    } else if (!item.props.isSelectable) {
      newProps = {};
    }

    if (disableUnselectedItems && isSelected !== true) {
      newProps.isSelectable = false;
    }
    return newProps;
  }

  unusedVariables(variable) {
    return variable === this;
  }

  render() {
    const { children, isDivided, onChange, maxSelectionCount, ...customProps } = this.props;
    const clonedChildItems = this.cloneChildItems(children);

    // Figure out how to handle this scenario.
    this.unusedVariables(onChange);
    this.unusedVariables(maxSelectionCount);

    return (
      <List
        isDivided={isDivided}
        {...customProps}
      >
        {clonedChildItems}
      </List>
    );
  }
}

MultiSelectList.propTypes = propTypes;
MultiSelectList.defaultProps = defaultProps;
MultiSelectList.Item = List.Item;

export default MultiSelectList;