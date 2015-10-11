import { h } from 'virtual-dom'
import { Component, Widget, collectRef } from './component'
import { getId } from './util'
import { types } from 'refer'
import { assignProperties } from './DOMPropertyOperations'
import { injection } from './DOMProperty'
import HTMLDOMPropertyConfig from './HTMLDOMPropertyConfig'
import SVGDOMPropertyConfig from './SVGDOMPropertyConfig'

injection.injectDOMPropertyConfig(HTMLDOMPropertyConfig)
injection.injectDOMPropertyConfig(SVGDOMPropertyConfig)

let { isFn, isStr } = types
let isKey = name => name === 'key'
let isEvent = name => /^on/.test(name)
let isStyleAttr = (name, value) => name === 'style' && isStr(value)
let isRef = name => name === 'ref'
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
		if (isKey(name)) {
			if (value != null) {
				props[name] = value
				hasChange = true
			}
		} else if (isEvent(name)) {
			if (isFn(value)) {
				props[name.toLowerCase()] = value
				hasChange = true
			}
		} else if (isStyleAttr(name, value)) {
			props.attributes[name] = value
			hasChange = true
		} else if (isRef(name)) {
			if (isStr(value)) {
				let refKey = value
				let refValue = value
				collectRef(refKey, refValue)
				props.dataset = { ref: value }
				hasChange = true
			}
		} else {
			hasChange = assignProperties(props, name, value) || hasChange
		}
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