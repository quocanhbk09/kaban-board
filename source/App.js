import React from 'react';
import {render} from 'react-dom';

class Hello extends React.Component {
	render() {
		return(
			<h1>Hello world</h1>
		);
	}
}

render(<Hello />, document.getElementById('root'));