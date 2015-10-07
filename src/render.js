import { create, diff, patch } from 'virtual-dom'

let store = {}
let getId = () => Math.random().toString(36).substr(2)

let render = (vnode, container, callback) => {
	let id = container.dataset.referid
	if (id) {
		let prevVnode = store[id]
		let patches = diff(prevVnode, vnode)
		patch(container, patches)
		store[id] = vnode
		callback && callback()
		return
	}
	let node = create(vnode)
	id = container.dataset.referid = getId()
	store[id] = vnode
	container.innerHTML = ''
	container.appendChild(node)
	callback && callback()
}

export default render