import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

import CarPolicyPage from '../policy-containers-components/car-policy-pages/CarPolicyPage';

describe('Tests for the CarPolicyPage component', () => {
	test('renders CarPolicyPage component without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<CarPolicyPage />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	test('renders the title of the page', () => {
		const wrapper = shallow(<CarPolicyPage />);
		// console.log(wrapper.debug())
		const text = wrapper.find('h3').text();
		expect(text).toEqual('My Policy');
	});
	test('renders text input fields without crashing', () => {
		const wrapper = shallow(<CarPolicyPage />);
		const policy = wrapper.find('#pol-ref').text();
		const cover = wrapper.find('#cov-type').text();
		const car = wrapper.find('#make-model').text();
		const address = wrapper.find('#address').text();
		expect(policy).toBe('');
		expect(cover).toBe('');
		expect(car).toBe('');
		expect(address).toBe('');
	});
});
