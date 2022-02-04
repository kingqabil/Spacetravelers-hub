import React from 'react';
import { Provider } from 'react-redux';
import {render} from '@testing-library/react'
import Dragons from '../components/dragons/Dragons';
import store from '../redux/configureStore';

const ReactTestRenderer = require('react-test-renderer');

describe('Dragon component tests', () => {

	it('renders correctly', () => {
		const tree = ReactTestRenderer
			.create(
				<Provider store={store}><Dragons /></Provider>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
  
	it('has a text in the DOM', () => {
		const { container } = render(<Provider store={store}><Dragons /></Provider>)
		expect(container.getElementsByClassName('dragons-list').length).toBe(1);
})
})

