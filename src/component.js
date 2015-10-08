import { createStore, types } from 'refer'
import { diff, patch, create } from 'virtual-dom'

let { isFn, isThenable } = types

export class Widget {
	constructor(component) {
		this.type = 'Widget'
		this.component = component
	}
	init() {
		let { component } = this
		component.willMount()
		let vnode = component.vnode = component.render()
		let node = component.node = create(vnode)
		component.didMount()
		return node
	}
	update() {
		this.component.forceUpdate()
	}
	destroy(node) {
		this.component.willUnmount(node)
	}
}

export class Thunk {
	constructor(Component, props) {
		this.type = 'Thunk'
		this.Component = Component
		this.props = props
	}
	render(previous) {
		let { props, Component } = this
		let component
		if (!previous || !previous.component) {
			this.component = component = new Component(props)
			return new Widget(component)
		}
		component = this.component = previous.component
		props = component.receiveProps(props) || props
		component.props = props
		if (component.shouldUpdate() === false) {
			return previous.vnode
		}
		return new Widget(component)
	}
}

let mergeStates = nextState => state => Object.assign({}, state, nextState)

export class Component {
	constructor(props) {
		let store = this.$store = createStore(this.getHandlers())
		store.unbind = store.subscribe(() => 
			this.forceUpdate()
		)
		this.dispatch = store.dispatch
		this.actions = store.actions
		this.props = props
	}
	getHandlers() {
		return {}
	}
	$(selector) {
		return this.node.querySelectorAll(selector || '')
	}
	get state() {
		return this.$store.getState()
	}
	set state(nextState) {
		this.$store.replaceState(nextState, true)
	}
	setState(nextState, callback) {
		let { $store, state, props } = this
		if (isFn(nextState)) {
			nextState = nextState(state, props)
		}
		let result = $store.dispatch(mergeStates, nextState)
		if (isFn(callback)) {
			return isThenable(result) ? result.then(callback) : callback(result)
		}
		return result
	}
	shouldUpdate() {}
	willUpdate() {}
	didUpdate() {}
	receiveProps() {}
	willMount() {}
	didMount() {}
	willUnmount() {}
	forceUpdate(callback) {
		let { vnode, node } = this
		let nextVnode = this.render()
		let patches = diff(vnode, nextVnode)
		this.willUpdate()
		patch(node, patches)
		this.vnode = nextVnode
		this.didUpdate()
		if (isFn(callback)) {
			callback()
		}
	}
}