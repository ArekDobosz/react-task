import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import PeoplePage from './PeoplePage';

it('PeoplePage without crashing', () => {
	const props = {
		user: {
			id: 1,
			first_name: 'Jan',
			last_name: 'Kowal',
			age: 32,
			avatar: ''
		},
		isLoaded: true,
		openUser: 1,
		error: false,
		match: {
			params: {}
		}
	}
	shallow(<PeoplePage {...props} />).render();
});