import React, { Component } from 'react'
import Counter from '../component/Counter'
import { getState, subscribe, actions } from '../store'

Component.prototype.actions = actions

export default class App extends Component {
	componentDidMount() {
		this.unsubscribe = subscribe(() => this.forceUpdate())
	}
	componentWillUnmount() {
		this.unsubscribe()
	}
	render() {
		return <Counter count={getState()} />
	}
}