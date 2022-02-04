import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/missions/Missions';

describe('Missions Component test', () => {
  it('Renders Mission Page', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Missions />

      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});
