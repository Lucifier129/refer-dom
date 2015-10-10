import { h } from 'virtual-dom'
import { Component, Widget } from './component'
import { getId } from './util'
import { types } from 'refer'
import { assignProperties } from './DOMPropertyOperations'
import DOMProperty from './DOMProperty'
import HTMLDOMPropertyConfig from './HTMLDOMPropertyConfig'
import SVGDOMPropertyConfig from './SVGDOMPropertyConfig'

DOMProperty.injection.injectDOMPropertyConfig(HTMLDOMPropertyConfig)
DOMProperty.injection.injectDOMPropertyConfig(SVGDOMPropertyConfig)

let { isFn, isStr } = types
let isKey = (name, value) => name === 'key' && value != null
let isEvent = (name, value) => /^on/.test(name) && isFn(value)
let isStyleAttr = (name, value) => name === 'style' && isStr(value)
let isRef = (name, value) => name === 'ref' && isStr(value)
let assign = (properties = {}) => {
	let props = {
		attributes: {}
	}
	let hasChange
	for (let name in properties) {
		if (!properties.hasOwnProperty(name)) {
			continue
		}
		let value = properties[name]
		if (isKey(name, value)) {
			props[name] = value
			hasChange = true
			continue
		}
		if (isEvent(name, value)) {
			props[name.toLowerCase()] = value
			hasChange = true
			continue
		}
		if (isStyleAttr(name, value)) {
			props.attributes[name] = value
			hasChange = true
			continue
		}
		if (isRef(name, value)) {
			props.dataset = { [name] : value }
			hasChange = true
			continue
		}
		hasChange = assignProperties(props, name, value) || hasChange
	}
	return hasChange ? props : null
}

export default (tagName, properties, ...children) => {
	if (Component.isPrototypeOf(tagName)) {
		return new Widget(tagName, {...properties, children })
	}
	if (isFn(tagName)) {
		tagName = tagName({...properties, children })
	}
	let props = assign(properties)
	return h(tagName, props, children)
}