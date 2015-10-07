import { h, Component, render } from 'refer-dom'
import { createLogger } from 'refer'

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
	static initialState = 0
	//static handlers = [{ COUNT: count }, createLogger({ scope: 'Counter', debug: true})]
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
		this.replaceState(nextProps.src, true)
	}
	shouldUpdate() {
	}
	render() {
		//let { COUNT } = this.actions
		let { state, props } = this
		let { COUNT } = props
		return (
			<div>
				<span>count: { state }</span>
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
	static initialState = 0
	static handlers = [{ COUNT: count }, createLogger({ scope: 'Wrap', debug: true})]
	receiveProps(props) {
		this.replaceState(props.count, true)
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







