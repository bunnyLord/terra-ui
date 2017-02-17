/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { storiesOf, addDecorator } from '@kadira/storybook';
import '@kadira/storybook-addon-knobs';
import { setOptions } from '@kadira/storybook-addon-options';
import { checkA11y } from 'storybook-addon-a11y';
import 'storybook-addon-i18n-tools';

import List from '../src/List';
import ListItem from '../src/ListItem';
import SingleSelectList from '../src/SingleSelectList';
import MultiSelectList from '../src/MultiSelectList';

setOptions({
  name: 'List',
  url: 'https://github.com/cerner/terra-list',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
});

addDecorator(checkA11y);

const display1 = <ListItem key="123" />;
const display2 = <ListItem key="124" />;
const display3 = <ListItem key="125" />;
const display4 = <ListItem key="126" />;
const display5 = <ListItem key="127" />;
const display6 = <ListItem key="128" isSelectable={false} />;
const displays = [display1, display2, display3, display4, display5, display6];

storiesOf('SelectableList ', module)
  .add('List', () => (
    <List items={displays} />
  ))
  .add('List Divided', () => (
    <List items={displays} isDivided />
  ))
  .add('List Divided', () => (
    <List items={displays} isDivided hasChevrons />
  ))
  .add('SingleSelectList', () => (
    <SingleSelectList items={displays} isDivided hasChevrons />
  ))
  .add('MultiSelectList', () => (
    <MultiSelectList items={displays} maxSelectionCount={3} isDivided />
  ));
