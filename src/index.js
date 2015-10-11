import h from './hyperscript'
import { render, unmount } from './render'
import { Component, createClass } from './component'
import {
	createStore,
	createLogger,
	createDispatch,
	createHandler,
	combineHandlers,
	constants,
	mapValues,
	types
} from 'refer'

export default {
	h,
	Component,
	createClass,
	render,
	unmount,
	unmountComponentAtNode: unmount,
	createElement: h,
	createStore,
	createLogger,
	createDispatch,
	createHandler,
	combineHandlers,
	constants,
	mapValues,
	types
}