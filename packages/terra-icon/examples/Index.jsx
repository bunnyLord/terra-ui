/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from '../../../packages/terra-site/src/PropsTable';
import Markdown from '../../../packages/terra-site/src/Markdown';
import ReadMe from '../docs/README.md';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import IconSrc from '!raw-loader!../src/Icon.jsx';
// Example Files
import IconBidi from './IconBidi';
import IconSpin from './IconSpin';
import IconStatic from './IconStatic';
import IconThemeable from './IconThemeable';
import IconUserProvidedClass from './IconUserProvidedClass';

const IconExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Icon</h2>
    <PropsTable id="props" src={IconSrc} />
    <h2 id="static_icons">Static Icons</h2>
    <IconStatic />
    <h2 id="themeable_icons">Themeable Icons</h2>
    <IconThemeable />
    <h2 id="spin_icons">Spinning Icons</h2>
    <IconSpin />
    <h2 id="user_provided_classes_icons">User provided classes</h2>
    <IconUserProvidedClass />
    <h2 id="bidi_icons">Bidi Icons</h2>
    <IconBidi />
  </div>
);

export default IconExamples;
