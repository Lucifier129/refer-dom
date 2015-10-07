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

export class Component {
	constructor(props, handlers = {}, initialState) {
		if (isFn(this.render)) {
			throw new Error('expect Component#render to be function')
		}
		Object.assign(this, createStore(handlers, initialState))
		this.props = props
		this.unbind = this.subscribe(() => this.refresh())
	}
	refresh() {
		let { props, getState } = this
		if (isFn(props.onupdate) && props.onupdate(getState()) === false) {
			return
		}
		this.forceUpdate()
	}
	get state() {
		return this.getState()
	}
	get setState() {
		return this.replaceState
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
	}
}