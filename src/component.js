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
	if (!node || !node.dataset || !node.dataset.referid) {
		return
	}
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

let refsStore = {}
let getDOMNode = (context, refs, refKey, refValue) => {
	let selector = `[data-referid="${ context }"] [data-ref="${ refValue }"]`
	Object.defineProperty(refs, refKey, {
		get() {
			let node = document.querySelector(selector)
			if (node) {
				node.getDOMNode = () => node
			}
			return node
		}
	})
}
let compId
export let collectRef = (refKey, refValue) => {
	if (!isStr(compId)) {
		return
	}
	let refs = refsStore[compId] = refsStore[compId] || {}
	if (isStr(refValue)) {
		getDOMNode(compId, refs, refKey, refValue)
	} else if (refValue instanceof Component) {
		refs[refKey] = refValue
	}
}
let getRefs = id => refsStore[id]

export class Widget {
	constructor(Component, props) {
		this.type = 'Widget'
		this.Component = Component
		this.props = props
	}
	init() {
		let { props, Component } = this
		let component = this.component = new Component(props || Component.defaultProps)
		if (isStr(props.ref)) {
			collectRef(props.ref, component)
		}
		let oldCompId = compId
		let id = compId = getId()
		let vnode = component.vnode = component.render()
		let node = component.node = create(vnode)
		node.dataset.referid = id
		component.componentWillMount()
		component.refs = getRefs(id) || {}
		compId = oldCompId
		let didMount = () => {
			component.componentDidMount()
			unmounts[id] = () => {
				if (refsStore[id]) {
					refsStore[id] = undefined
				}
				component.componentWillUnmount()
			}
		}
		didMounts.push(didMount)
		return node
	}
	update(previous) {
		let component = this.component = previous.component
		let { props } = this
		let { $cache } = component
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
		let shouldUpdate = component.shouldComponentUpdate(props, nextState)
		if (!shouldUpdate) {
			return
		}
		$cache.props = props
		$cache.state = nextState
		component.forceUpdate()
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
		let oldCompId = compId
		let id = compId = node.dataset.referid
		refsStore[id] = {}
		let nextVnode = this.render()
		this.refs = getRefs(id) || {}
		compId = oldCompId
		let patches = diff(vnode, nextVnode)
		richPatch(node, patches)
		this.vnode = nextVnode
		this.componentDidUpdate(props, state)
		if (isFn(callback)) {
			callback()
		}
	}
}


export let createClass = options => {
	if (!options && isFn(types)) {
		throw new Error('miss render method')
	}
	let Class = class extends Component {
		static defaultProps = isFn(options.getDefaultProps) ? options.getDefaultProps() : {}
		constructor(props, context) {
			super(props, context)
			this.state = options.getInitialState()
		}
	}

	for (let key in options) {
		if (!options.hasOwnProperty(key) ) {
			continue
		}
		Class.prototype[key] = options[key]
	}
	Object.assign(Class, options.statics || {})
	return Class
}



