import React from 'react';
import { Provider } from 'react-redux';
import Missions from '../components/missions/Missions';
import store from '../redux/configureStore';

const ReactTestRenderer = require('react-test-renderer');

it('renders correctly', () => {
  const tree = ReactTestRenderer
    .create(
      <Provider store={store}><Missions /></Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
