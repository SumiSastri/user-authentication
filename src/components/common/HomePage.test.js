import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { shallow } from 'enzyme';

import HomePage from './HomePage';

describe('Tests for the HomePage', () => {
	afterEach(cleanup);
	test('renders HomePage component without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<HomePage />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	//  console.log(wrapper.debug())
	test('renders the link for the GitHub repo', () => {
		const { getByText } = render(<HomePage />);
		const linkElement = getByText('GitHub Repo');
		expect(linkElement).toBeInTheDocument();
	});
	test('renders the title of the HomePage component', () => {
		const wrapper = shallow(<HomePage />);
		// console.log(wrapper.debug())
		const text = wrapper.find('#home').text();
		expect(text).toBe('User Authentication');
	});
});
