import { h } from 'virtual-dom'
import { Component, Thunk } from './component'
import { types } from 'refer'

let { isFn } = types

export default (tagName, properties, ...children) => {
	if (Component.isPrototypeOf(tagName)) {
		return new Thunk(tagName, {...properties, children })
	}
	if (isFn(tagName)) {
		tagName = tagName({...properties, children })
	}
	return h(tagName, properties, children)
}