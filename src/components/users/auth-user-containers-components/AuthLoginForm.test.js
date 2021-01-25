import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

import AuthLoginForm from './AuthLoginForm';

// function declaration simulates an onChange event
const simulateOnChange = (wrapper, inputSelector, userInputUpdates) => {
	let input = wrapper.find(inputSelector);
	input.simulate('change', {
		target: { value: userInputUpdates }
	});
	return wrapper.find(inputSelector);
};
describe('tests for AuthLoginForm component', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<AuthLoginForm />);
	});

	test('renders component without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<AuthLoginForm />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	test('renders the title of AuthLoginForm component', () => {
		const wrapper = shallow(<AuthLoginForm />);
		// console.log(wrapper.debug())
		const text = wrapper.find('#h3-authuser').text();
		expect(text).toBe('Sign In');
	});
	test('renders empty form text inputs', () => {
		const wrapper = shallow(<AuthLoginForm />);
		const name = wrapper.find('#authuserlogin').text();
		const password = wrapper.find('#authuserpassword').text();

		expect(name).toBe('');
		expect(password).toBe('');
	});
	// function call
	test('renders updated user inputs', () => {
		const wrapper = shallow(<AuthLoginForm />);
		simulateOnChange(wrapper, '#authuserlogin', 'testuser');
		simulateOnChange(wrapper, '#authuserpassword', 'EbpucVzUP5cvsYha0E9i');
	});

	test('checks click function of the submit button', () => {
		const wrapper = shallow(<AuthLoginForm />);
		const submitButton = wrapper.find('#btn-authuserpayload');
		submitButton.simulate('click');
		const text = wrapper.find('button').text();
		expect(text).toEqual('Sign-in');
	});
});
