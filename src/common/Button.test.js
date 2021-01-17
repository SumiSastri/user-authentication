import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

import Button from './Button';

describe('Tests for Buttons', () => {
	afterEach(cleanup);
	test('renders button component without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Button />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
