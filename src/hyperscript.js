import { h } from 'virtual-dom'
import { Component, Thunk } from './component'


export default (tagName, properties, ...children) => {
	let isComponent = Component.isPrototypeOf(tagName)
	if (isComponent) {
		return new Thunk(tagName, {...properties, children })
	}
	return h(tagName, properties, children)
}