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
	//handlers = [{ COUNT: count }, createLogger({ scope: 'Counter', debug: true})]
	componentWillMount() {
		// debugger
		console.time('mount')
	}
	componentDidMount() {
		console.timeEnd('mount')
		let count = () => {
			if (this.state === 0) {
				this.toNum(100, count)
			} else if (this.state === 100) {
				this.toNum(0, count)
			}
		}
		//debugger
		//setTimeout(count, 0)
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
			<div>
				<span ev-click={e => console.log(e)}>count: { state }</span>
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
		debugger
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

setTimeout(() => {
	unmount(document.getElementById('container'))
}, 1000)
let num = 0
// setInterval(() => {
// 	update(num++)
// }, 1000)







