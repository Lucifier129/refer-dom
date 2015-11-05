import React, { Component, render, unmount } from 'refer-dom'


class Test extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = 0
	}
	componentDidUpdate() {
		let { div, p } = this.refs
	}
	render() {
		let isOdd = !!(this.state % 2)
		this.state++
		console.log(isOdd)
		if (isOdd) {
			return <div ref="div">div test</div>
		} else {
			return <p ref="p">p test</p>
		}
	}
}


class Wrap extends Component {
	componentDidMount() {
		setInterval(() => {
			this.forceUpdate()
		}, 1000)
	}
	render() {
		return <div className="wrap"><Test /></div>
	}
}

React.render(
	<Wrap />,
	document.getElementById('container')
)