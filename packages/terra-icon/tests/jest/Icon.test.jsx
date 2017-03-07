import React from 'react';
import IconAdd from '../../src/IconAdd';

// Snapshot Tests
it('should render a default component', () => {
  const Add = shallow(<IconAdd />);
  expect(Add).toMatchSnapshot();
});
