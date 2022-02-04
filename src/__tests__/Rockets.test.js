import React from 'react';
import { Provider } from 'react-redux';
import Rockets from '../components/rockets/Rockets';
import store from '../redux/configureStore';

const ReactTestRenderer = require('react-test-renderer');

it('renders correctly', () => {
  const tree = ReactTestRenderer
    .create(
      <Provider store={store}><Rockets /></Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
