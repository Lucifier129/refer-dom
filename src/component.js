import { createStore, types, constants } from 'refer'
import { diff, patch, create } from 'virtual-dom'

let { isFn, isThenable } = types
let {
	GET_TABLE,
	DISPATCH,
	SHOULD_DISPATCH,
	WILL_UPDATE,
	SHOULD_UPDATE,
	DID_UPDATE,
	THROW_ERROR,
	ASYNC_START,
	ASYNC_END,
	SYNC
} = constants

let didMounts = []
let pushDidMount = didMount => didMounts.push(didMount)
export let clearDidMounts = () => {
	while (didMounts.length) {
		didMounts.shift()()
	}
}

export class Widget {
	constructor(component, props) {
		this.type = 'Widget'
		this.component = component
		this.props = props
	}
	init() {
		let { component } = this
		let vnode = component.vnode = component.render()
		let node = component.node = create(vnode)
		component.componentWillMount()
		pushDidMount(() => component.componentDidMount())
		return node
	}
	update() {
		let { component, props } = this
		let { $cache, state } = component
		$cache.props = props
		$cache.state = state
		component.forceUpdate()
	}
	destroy() {
		this.component.componentWillUnmount()
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
			this.component = component = new Component(props || Component.defaultProps)
			return new Widget(component)
		}
		component = this.component = previous.component
		let { $cache } = component
		$cache.keepSilent = true
		component.componentWillReceiveProps(props)
		$cache.keepSilent = false
		let shouldUpdate = component.shouldComponentUpdate(props, component.state)
		return shouldUpdate ? new Widget(component, props) : previous.vnode
	}
}

let getHook = component => {
	let { $cache } = component
	let shouldComponentUpdate = ({ nextState }) => {
		if ($cache.keepSilent) {
			return
		}
		let { props, state } = component
		$cache.props = props
		$cache.state = nextState
		let shouldUpdate = component.shouldComponentUpdate(props, nextState)
		if (shouldUpdate) {
			component.forceUpdate()
		}
	}
	return {
		[WILL_UPDATE]: shouldComponentUpdate
	}
}

let merge = nextState => state => Object.assign({}, state, nextState)

export class Component {
	constructor(props) {
		let $cache = this.$cache = {
			keepSilent: false
		}
		let handlers = [this.getHandlers(), getHook(this)]
		let store = this.$store = createStore(handlers)
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
		let { $cache } = this
		$cache.keepSilent = true
		this.$store.replaceState(nextState, true)
		$cache.keepSilent = false
	}
	setState(nextState, callback) {
		let { $store, state, props } = this
		if (isFn(nextState)) {
			nextState = nextState(state, props)
		}
		this.$store.dispatch(merge, nextState)
		if (isFn(callback)) {
			callback()
		}
	}
	shouldComponentUpdate(nextProps, nextState) {
		return true
	}
	componentWillUpdate(nextProps, nextState) {}
	componentDidUpdate(prevProps, prevState) {}
	componentWillReceiveProps(nextProps) {}
	componentWillMount() {}
	componentDidMount() {}
	componentWillUnmount() {}
	forceUpdate(callback) {
		let { vnode, node, $cache, state, props } = this
		let nextProps = $cache.props
		let nextState = $cache.state
		this.componentWillUpdate(nextProps, nextState)
		this.props = nextProps
		this.state = nextState
		let nextVnode = this.render()
		let patches = diff(vnode, nextVnode)
		patch(node, patches)
		clearDidMounts()
		this.vnode = nextVnode
		this.componentDidUpdate(props, state)
		if (isFn(callback)) {
			callback()
		}
	}
}