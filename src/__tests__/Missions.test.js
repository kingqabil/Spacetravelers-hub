import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import Missions from '../components/missions/Missions';
import { createAction } from '../redux/missions/missions';

describe('Missions Component snapshot test', () => {
  it('Renders Mission Page', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
  it('has a text in the DOM', () => {
    const { container } = render(<Provider store={store}><Missions /></Provider>);
    expect(container.getElementsByClassName('table-wrapper').length).toBe(1);
  });
  it('Returns a createAction() object', () => {
    expect(createAction('add', '1234')).toStrictEqual({ type: 'add', payload: '1234' });
  });
});
