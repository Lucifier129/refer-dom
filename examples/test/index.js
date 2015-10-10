import React, { Component, render, unmount, createLogger } from 'refer-dom'

let count = type => state => {
	switch(type) {
		case 'INCREMENT':
			return state + 1
		case 'DECREMENT':
			return state - 1
		case 'INCREMENT_IF_ODD':
			return state % 2 !== 0 ? state + 1 : state
		default:
			return state
	}
}

class Counter extends Component {
	constructor(props) {
		super(props)
		this.state = 0
	}
	componentWillMount() {
		console.time('Counter mount')
	}
	componentDidMount() {
		console.timeEnd('Counter mount')
	}
	toNum(num, callback) {
		cancelAnimationFrame(this.rid)
		let { COUNT } = this.props
		let count = () => {
			let { state } = this
			switch (true) {
				case state > num:
					COUNT('DECREMENT')
					break
				case state < num:
					COUNT('INCREMENT')
					break
				case state === num:
					return callback && callback()
			}
			this.rid = requestAnimationFrame(count)
		}
		count()
	}
	componentWillUpdate() {
		// debugger
		console.log('willUpdate', 'Counter')
	}
	componentDidUpdate() {
		//debugger
		console.log('DidUpdate', 'Counter')
	}
	componentWillReceiveProps(nextProps) {
		this.state = nextProps.src
	}
	shouldComponentUpdate() {
		return true
	}
	componentWillUnmount() {
		console.log('unmount', 'Counter')
	}
	render() {
		//let { COUNT } = this.actions
		let { state, props } = this
		let { COUNT } = props
		let getNum = e => {
			let num = parseInt(e.currentTarget.previousElementSibling.value, 10)
			if (typeof num === 'number') {
				this.toNum(num)
			}
		}
		return (
			<div id="abc" key="123">
				<span ref="efg" data-test="abaasdf">count: { state }</span>
				{' '}
				<button onclick={ () => COUNT('INCREMENT') }>+</button>
				{' '}
				<button onclick={ () => COUNT('DECREMENT') }>-</button>
				{' '}
				<button onclick={ () => COUNT('INCREMENT_IF_ODD') }>incrementIfOdd</button>
				{' '}
				<input type="text" />
				<button onclick={ getNum }>run</button>
			</div>
		)
	}
}

class Wrap extends Component {
	constructor(props) {
		super(props)
		this.state = 0
	}
	getHandlers() {
		return [{ COUNT: count }, createLogger({ scope: 'Wrap', debug: true})]
	}
	componentWillMount() {
		console.time('Wrap mount')
	}
	componentDidMount() {
		console.timeEnd('Wrap mount')
	}
	componentWillUpdate() {
		// debugger
		console.log('willUpdate', 'Wrap')
	}
	componentDidUpdate() {
		//debugger
		console.log('DidUpdate', 'Wrap')
	}
	componentWillReceiveProps(props) {
		this.state = props.count
	}
	componentWillUnmount() {
		console.log('unmount', 'wrap')
	}
	render() {
		return <div className="wrap"><Counter src={ this.state } COUNT={ this.actions.COUNT } /></div>
	}
}

let update = count => {
	render(
		<Wrap count={ count } />,
		document.getElementById('container'),
		console.log.bind(console)
	)
}

update(0)

// setTimeout(() => {
// 	React.unmountComponentAtNode(document.getElementById('container'))
// }, 1000)
let num = 0
// setInterval(() => {
// 	update(num++)
// }, 1000)







