import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Dragons from '../components/dragons/Dragons';

describe('Dragons Component test', () => {
  it('Renders Rocket Page', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Dragons />

      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});
