import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/missions/Missions';
import { createAction } from '../redux/missions/missions';
import {render} from '@testing-library/react'

describe('Missions Component snapshot test', () => {
  it('Renders Mission Page', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
  it('Action creator work correctly', () => {
    expect(createAction('add', '1234')).toStrictEqual({ type: 'add', payload: '1234' });
  });
  it('has a text in the DOM', () => {
    const { container } = render(<Provider store={store}><Missions /></Provider>)
    expect(container.getElementsByClassName('table-wrapper').length).toBe(1);
})
});
