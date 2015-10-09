import { create, diff, patch } from 'virtual-dom'
import { types } from 'refer'
import { clearDidMounts } from './component'

let { isFn } = types

let store = {}
let getId = () => Math.random().toString(36).substr(2)

export let render = (vnode, container, callback) => {
	let id = container.dataset.referid
	if (id) {
		let prevVnode = store[id]
		let patches = diff(prevVnode, vnode)
		patch(container.firstChild, patches)
		store[id] = vnode
	} else {
		let node = create(vnode)
		id = container.dataset.referid = getId()
		store[id] = vnode
		container.innerHTML = ''
		container.appendChild(node)
	}
	clearDidMounts()
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
			let patches = diff(prevVnode)
			patch(container.firstChild, patches)
			container.innerHTML = ''
		}
		delete container.dataset.referid
	}
}