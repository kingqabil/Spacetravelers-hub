import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
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

  it('has a text in the DOM', () => {
    const { container } = render(<Provider store={store}><Dragons /></Provider>);
    expect(container.getElementsByClassName('dragons-list').length).toBe(1);
  });
});
