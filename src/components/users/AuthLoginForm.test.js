import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

import AuthLoginForm from './AuthLoginForm';

describe('tests for <AuthLoginForm />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<AuthLoginForm />);
	});
	test('renders component without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<AuthLoginForm />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	test('renders the title of the form component', () => {
		const wrapper = shallow(<AuthLoginForm />);
		// console.log(wrapper.debug())
		const text = wrapper.find('#h3-authuser').text();
		expect(text).toBe('Sign In');
	});
	test('renders the form text input fields without crashing', () => {
		const wrapper = shallow(<AuthLoginForm />);
		const name = wrapper.find('#authuserlogin').text();
		const password = wrapper.find('#authuserpassword').text();

		expect(name).toBe('');
		expect(password).toBe('');
	});
});
