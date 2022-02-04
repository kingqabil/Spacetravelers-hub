import React from 'react';
import { Provider } from 'react-redux';
import Rockets from '../components/rockets/Rockets';
import store from '../redux/configureStore';
import {render} from '@testing-library/react'

const ReactTestRenderer = require('react-test-renderer');


describe('Rockets component tests', () => {

	it('renders correctly', () => {
		const tree = ReactTestRenderer
			.create(
				<Provider store={store}><Rockets /></Provider>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
  
	it('has a text in the DOM', () => {
		const { container } = render(<Provider store={store}><Rockets /></Provider>)
		expect(container.getElementsByClassName('rockets-list').length).toBe(1);
})
})
