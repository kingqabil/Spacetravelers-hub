import React from 'react';
import renderer from 'react-test-renderer';
import Dragons from '../components/dragons/Dragons';

it('renders correctly', () => {
  const tree = renderer
    .create(
        <Dragons />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
