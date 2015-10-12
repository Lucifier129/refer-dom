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

const isUnitlessNumber = {
  animationIterationCount: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  stopOpacity: true,
  strokeDashoffset: true,
  strokeOpacity: true,
  strokeWidth: true
}

/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

let RE_UNITLESS_PROPS = /transform|translate|transition|animation|background|color|shadow/i
let checkUnit = style => {
	for (let key in style) {
		if (style[key] && !isUnitlessNumber[key] && !RE_UNITLESS_PROPS.test(key) && ('' + style[key]).substr(-2) !== 'px') {
			style[key] += 'px'
		}
	}
}

let checkChildren  = children => {
	if (children.length === 1 && isFn(children[0])) {
		return children[0]
	}
	return children.filter(child => typeof child !== 'boolean')
}

let { isFn, isStr, isObj } = types
let isKey = name => name === 'key'
let isEvent = name => /^on/.test(name)
let isStyle = name => name === 'style'
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
		} else if (isStyle(name)) {
			if (isStr(value)) {
				props.attributes[name] = value
				hasChange = true
			} else if (isObj(value)) {
				checkUnit(value)
				props[name] = value
				hasChange = true
			}
		} else if (isRef(name)) {
			if (isStr(value)) {
				let refKey = value
				let refValue = value
				props.dataset = collectRef(refKey, refValue)
				hasChange = true
			}
		} else {
			hasChange = assignProperties(props, name, value) || hasChange
		}
	}
	return hasChange ? props : null
}

let getProps = (properties, children) => children.length > 0 ? {children, ...properties} : (properties || {})

export default (tagName, properties, ...children) => {
	children = checkChildren(children)
	if (Component.isPrototypeOf(tagName)) {
		return new Widget(tagName, getProps(properties, children))
	}
	if (isFn(tagName)) {
		tagName = tagName(getProps(properties, children))
	}
	let props = assign(properties)
	return h(tagName, props, children)
}