import { createStore, types } from 'refer'
import { diff, patch, create } from 'virtual-dom'

let { isFn } = types

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
			let { handlers, initialState } = Component
			this.component = component = new Component(props, handlers, initialState)
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

let mergeStates = sources => state => Object.assign({}, state, ...sources)

export class Component {
	constructor(props) {
		if (isFn(this.render)) {
			throw new Error('expect Component#render to be function')
		}
		let store = this.$store = Object.assign(this, createStore(this.handlers || {}))
		store.unbind = store.subscribe(() => this.forceUpdate())
		this.props = props
	}
	get actions() {
		return this.$store.actions
	}
	get state() {
		return this.getState()
	}
	set state(nextState) {
		this.$store.replaceState(nextState, true)
	}
	setState(...srouces) {
		this.$store.dispatch(mergeStates, sources)
	}
	shouldUpdate() {}
	willUpdate() {}
	didUpdate() {}
	receiveProps() {}
	willMount() {}
	didMount() {}
	willUnmount() {}
	forceUpdate() {
		let { vnode, node } = this
		let nextVnode = this.render()
		let patches = diff(vnode, nextVnode)
		this.willUpdate()
		patch(node, patches)
		this.vnode = nextVnode
		this.didUpdate()
		if (isFn(props.onupdate)) {
			props.onupdate(getState())
		}
	}
}