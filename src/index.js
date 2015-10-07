import { create, diff, patch } from 'virtual-dom'
import h from './hyperscript'
import render from './render'
import { Component } from './component'

let newH = (tagName, properties, ...children) => {
	return h(tagName, properties, children)
}

export default {
	Component,
	h,
	create,
	diff,
	patch,
	render
}