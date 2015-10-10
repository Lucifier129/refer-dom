import { createStore, types, constants } from 'refer'
import { diff, patch, create } from 'virtual-dom'
import { getId, createCallbackStore, wrapNative } from './util'

let { isFn, isThenable, isArr, isObj, isStr } = types
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

let didMounts = createCallbackStore('didMounts')
export let clearDidMounts = didMounts.clear

let unmounts = {}
let callUnmount = node => {
	let id = node.dataset.referid
	if (id && isFn(unmounts[id])) {
		unmounts[id]()
		unmounts[id] = undefined
	}
}
export let callUnmounts = node => {
	callUnmount(node)
	let widgets = node.querySelectorAll('[data-referid]')
	Array.prototype.slice.call(widgets).forEach(callUnmount)
}
let checkUnmounts = patch => {
	let NodeProto = Node.prototype
	let resetRemove = wrapNative(NodeProto, 'removeChild', callUnmounts)
	let resetReplace = wrapNative(NodeProto, 'replaceChild', callUnmounts)
	patch()
	resetRemove()
	resetReplace()
}

export let richPatch = (node, patches) => {
	checkUnmounts(() => patch(node, patches))
	clearDidMounts()
}


let isVnode = obj => obj && obj.type === 'VirtualNode'
let refsStore = {}
let getRefs = name => {
	let refs = refsStore[name] = isObj(refsStore[name]) ? refsStore[name] : {}
	return refs
}
let defRef = (refs, ref) => {
}
let compId
let collectRef = ref => {
	let randomId = getId()
}



export class Widget {
	constructor(Component, props) {
		this.type = 'Widget'
		this.Component = Component
		this.props = props
	}
	init() {
		let { props, Component } = this
		let component = this.component = new Component(props || Component.defaultProps)
		let oldCompId = compId
		compId = getId()
		let vnode = component.vnode = component.render()
		compId = oldCompId
		let node = component.node = create(vnode)
		let id = node.dataset.referid = getId()
		component.componentWillMount()
		didMounts.push(() => component.componentDidMount())
		unmounts[id] = () => component.componentWillUnmount()
		return node
	}
	update(previous) {
		let { component } = previous
		let { props } = this
		let { $cache } = component
		this.component = component
		$cache.keepSilent = true
		component.componentWillReceiveProps(props)
		$cache.keepSilent = false
		let shouldUpdate = component.shouldComponentUpdate(props, component.state)
		if (!shouldUpdate) {
			return
		}
		$cache.props = props
		$cache.state = component.state
		component.forceUpdate()
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
		this.refs = {}
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
		richPatch(node, patches)
		this.vnode = nextVnode
		this.componentDidUpdate(props, state)
		if (isFn(callback)) {
			callback()
		}
	}
}