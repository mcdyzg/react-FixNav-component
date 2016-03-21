import React from 'react'
import Nav from '../../lib'
import reactDOM from 'react-dom'

export default class App extends React.Component {
	constructor(props,context) {
		super(props,context)
	}

	render() {
		return (
			<div>
				<Nav>
				asdfffffffffffffff
				</Nav>
				<div style={{height:2100,width:100,background:'#eee'}}>
				</div>
			</div>
			)
	}
}

reactDOM.render(<App />,document.getElementById('app'))

