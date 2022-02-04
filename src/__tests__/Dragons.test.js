import React from 'react';
import { Provider } from 'react-redux';
import Dragons from '../components/dragons/Dragons';
import store from '../redux/configureStore';

const ReactTestRenderer = require('react-test-renderer');

it('renders correctly', () => {
  const tree = ReactTestRenderer
    .create(
      <Provider store={store}><Dragons /></Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
