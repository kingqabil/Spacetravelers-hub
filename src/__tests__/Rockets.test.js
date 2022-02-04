import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rockets from '../components/rockets/Rockets';
import {render} from '@testing-library/react'


describe('Rockets Component test', () => {
  it('Renders Rocket Page', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Rockets />

      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
  it('has a text in the DOM', () => {
    const { container } = render(<Provider store={store}><Rockets /></Provider>)
    expect(container.getElementsByClassName('rockets-list').length).toBe(1);
})
});
