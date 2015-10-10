import { create, diff } from 'virtual-dom'
import { types } from 'refer'
import { richPatch, clearDidMounts, callUnmounts } from './component'
import { getId } from './util'

let { isFn } = types

let store = {}

export let render = (vnode, container, callback) => {
	let id = container.dataset.referid
	if (id) {
		let prevVnode = store[id]
		let patches = diff(prevVnode, vnode)
		richPatch(container.firstChild, patches)
		store[id] = vnode
	} else {
		let node = create(vnode)
		id = container.dataset.referid = getId()
		store[id] = vnode
		container.innerHTML = ''
		container.appendChild(node)
		clearDidMounts()
	}
	if (isFn(callback)) {
		callback()
	}
}

export let unmount = container => {
	let id = container.dataset.referid
	if (id) {
		let prevVnode = store[id]
		if (prevVnode) {
			store[id] = undefined
			callUnmounts(container)
			container.innerHTML = ''
		}
		delete container.dataset.referid
	}
}