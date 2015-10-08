import { h, Component, render, createLogger } from 'refer-dom'
import * as referDom from 'refer-dom'
console.log(referDom)

let count = type => state => {
	switch(type) {
		case 'INCREMENT':
			return state + 1
		case 'DECREMENT':
			return state - 1
		case 'INCREMENT_IF_ADD':
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
	willMount() {
		// debugger
	}
	didMount() {
		// debugger
	}
	willUpdate() {
		// debugger
	}
	didUpdate() {
		// debugger
	}
	receiveProps(nextProps) {
		this.state = nextProps.src
		debugger
	}
	shouldUpdate() {
	}
	render() {
		//let { COUNT } = this.actions
		let { state, props } = this
		let { COUNT } = props
		return (
			<div>
				<span ev-click={e => console.log(e)}>count: { state }</span>
				{' '}
				<button onclick={ () => COUNT('INCREMENT') }>+</button>
				{' '}
				<button onclick={ () => COUNT('DECREMENT') }>-</button>
				{' '}
				<button onclick={ () => COUNT('INCREMENT_IF_ADD') }>incrementIfOdd</button>
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
	receiveProps(props) {
		this.state = props.count
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

let num = 0
setInterval(() => {
	update(num++)
}, 1000)







