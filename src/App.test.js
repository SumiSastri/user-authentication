import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { cleanup } from '@testing-library/react';

import App from './App';

describe('Tests for jest-testing app', () => {
	afterEach(cleanup);
	test('renders App component without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	//   test("matches snapshot for App component", () =>{
	//     const tree = renderer.create(<App/>).toJSON()
	//     expect(tree).toMatchSnapshot();
	// })
});
