import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import Button from './Button';

describe('Tests for Buttons', () => {
	test('renders button component without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Button />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
