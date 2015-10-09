import h from './hyperscript'
import { render, unmount } from './render'
import { Component } from './component'
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
	render,
	unmount,
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