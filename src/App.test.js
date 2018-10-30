import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import App from './App';
import Header from './components/layouts/Header';
import Routes from './routes';

it('renders without crashing', () => {
  shallow(<App />);
});

it('includes header', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<Header />)).toEqual(true)
});

it('includes routes', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<Routes />)).toEqual(true)
});
