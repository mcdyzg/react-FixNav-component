import React from 'react'
import ReactDOM from 'react-dom'
import Events from './events'

export default class FixNav extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			top:0,
			transform:'',
		}
		this.trans=this.trans.bind(this)
	}

	componentDidMount() {
		Events.on(window, 'scroll', this.trans)
	}

	componentWillUnmount() {
		Events.off(window, 'scroll', this.trans)
	}

	getStyle() {
		const style = {
			height: this.props.height||65,
			background: '#fff',
			boxShadow: ' 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23)',
			position:'fixed',
			top:0,
			right:0,
			left:0,
			transition:'all .5s',
		}
		return style
	}

	trans() {
		const before=this.state.top
		const now=document.documentElement.scrollTop || document.body.scrollTop
		if(now>(this.props.offset||600)&&now>before) {
			this.setState({ 
				transform:'translateY(-'+(this.props.height||65)+'px)',
      	top: document.documentElement.scrollTop || document.body.scrollTop,
    	})
		} else {
			this.setState({ 
				transform:'translateY(0)',
      	top: document.documentElement.scrollTop || document.body.scrollTop,
    	})
		}
	};

	render() {
		const style=this.getStyle()
		style.transform=this.state.transform
		const styles={...style,...this.props.style}
		return (
			<nav {...this.props} style={ styles } >
			</nav>
			)
	}

}