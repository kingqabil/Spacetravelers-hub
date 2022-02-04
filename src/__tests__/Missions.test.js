import React from 'react';
import { Provider } from 'react-redux';
import Missions from '../components/missions/Missions';
import store from '../redux/configureStore';
import {render} from '@testing-library/react'

const ReactTestRenderer = require('react-test-renderer');

describe('Missions component tests', () => {

	it('renders correctly', () => {
		const tree = ReactTestRenderer
			.create(
				<Provider store={store}><Missions /></Provider>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
  
	it('has a text in the DOM', () => {
		const { container } = render(<Provider store={store}><Missions /></Provider>)
		expect(container.getElementsByClassName('table-wrapper').length).toBe(1);
})
})
