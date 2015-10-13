/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _referDom = __webpack_require__(1);

	var _referDom2 = _interopRequireDefault(_referDom);

	var count = function count(type) {
		return function (state) {
			switch (type) {
				case 'INCREMENT':
					return state + 1;
				case 'DECREMENT':
					return state - 1;
				case 'INCREMENT_IF_ODD':
					return state % 2 !== 0 ? state + 1 : state;
				default:
					return state;
			}
		};
	};

	var Counter = (function (_Component) {
		_inherits(Counter, _Component);

		function Counter(props) {
			_classCallCheck(this, Counter);

			_Component.call(this, props);
			this.state = 0;
		}

		Counter.prototype.componentWillMount = function componentWillMount() {
			console.time('Counter mount');
		};

		Counter.prototype.componentDidMount = function componentDidMount() {
			console.timeEnd('Counter mount');
		};

		Counter.prototype.toNum = function toNum(num, callback) {
			var _this = this;

			cancelAnimationFrame(this.rid);
			var COUNT = this.props.COUNT;

			var count = function count() {
				var state = _this.state;

				switch (true) {
					case state > num:
						COUNT('DECREMENT');
						break;
					case state < num:
						COUNT('INCREMENT');
						break;
					case state === num:
						return callback && callback();
				}
				_this.rid = requestAnimationFrame(count);
			};
			count();
		};

		Counter.prototype.componentWillUpdate = function componentWillUpdate() {
			// debugger
			console.log('willUpdate', 'Counter');
		};

		Counter.prototype.componentDidUpdate = function componentDidUpdate() {
			this;
			//debugger
			console.log('DidUpdate', 'Counter');
		};

		Counter.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
			this.state = nextProps.src;
		};

		Counter.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
			return true;
		};

		Counter.prototype.componentWillUnmount = function componentWillUnmount() {
			console.log('unmount', 'Counter');
		};

		Counter.prototype.render = function render() {
			var _this2 = this;

			//let { COUNT } = this.actions
			var state = this.state;
			var props = this.props;
			var COUNT = props.COUNT;

			var getNum = function getNum(e) {
				var num = parseInt(_this2.refs.input.value, 10);
				if (typeof num === 'number') {
					_this2.toNum(num);
				}
			};
			return _referDom2['default'].createElement(
				'div',
				{ id: 'abc', key: '123', ref: state % 2 ? "counter" : null },
				_referDom2['default'].createElement(
					'span',
					{ ref: 'efg', 'data-test': 'abaasdf' },
					'count: ',
					state
				),
				' ',
				_referDom2['default'].createElement(
					'button',
					{ onclick: function () {
							return COUNT('INCREMENT');
						} },
					'+'
				),
				' ',
				_referDom2['default'].createElement(
					'button',
					{ onclick: function () {
							return COUNT('DECREMENT');
						} },
					'-'
				),
				' ',
				_referDom2['default'].createElement(
					'button',
					{ onclick: function () {
							return COUNT('INCREMENT_IF_ODD');
						} },
					'incrementIfOdd'
				),
				' ',
				_referDom2['default'].createElement('input', { type: 'text', ref: 'input' }),
				_referDom2['default'].createElement(
					'button',
					{ onclick: getNum },
					'run'
				)
			);
		};

		return Counter;
	})(_referDom.Component);

	var Wrap = (function (_Component2) {
		_inherits(Wrap, _Component2);

		function Wrap(props) {
			_classCallCheck(this, Wrap);

			_Component2.call(this, props);
			this.state = 0;
		}

		Wrap.prototype.getHandlers = function getHandlers() {
			return [{ COUNT: count }, _referDom.createLogger({ scope: 'Wrap', debug: true })];
		};

		Wrap.prototype.componentWillMount = function componentWillMount() {
			console.time('Wrap mount');
		};

		Wrap.prototype.componentDidMount = function componentDidMount() {
			console.timeEnd('Wrap mount');
			//this.actions.COUNT('INCREMENT')
		};

		Wrap.prototype.componentWillUpdate = function componentWillUpdate() {
			// debugger
			console.log('willUpdate', 'Wrap');
		};

		Wrap.prototype.componentDidUpdate = function componentDidUpdate() {
			//debugger
			console.log('DidUpdate', 'Wrap');
		};

		Wrap.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
			this.state = props.count;
		};

		Wrap.prototype.componentWillUnmount = function componentWillUnmount() {
			console.log('unmount', 'wrap');
		};

		Wrap.prototype.render = function render() {
			return _referDom2['default'].createElement(
				'div',
				{ className: 'wrap' },
				_referDom2['default'].createElement(Counter, { ref: 'counter', src: this.state, COUNT: this.actions.COUNT })
			);
		};

		return Wrap;
	})(_referDom.Component);

	var update = function update(count) {
		_referDom.render(_referDom2['default'].createElement(Wrap, { count: count }), document.getElementById('container'), console.log.bind(console));
	};

	update(0);

	// setTimeout(() => {
	// 	React.unmountComponentAtNode(document.getElementById('container'))
	// }, 1000)
	var num = 0;
	// setInterval(() => {
	// 	update(num++)
	// }, 1000)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _hyperscript = __webpack_require__(2);

	var _hyperscript2 = _interopRequireDefault(_hyperscript);

	var _render = __webpack_require__(58);

	var _component = __webpack_require__(38);

	var _util = __webpack_require__(48);

	var _refer = __webpack_require__(39);

	var check = function check() {
		return check;
	};
	check.isRequired = check;
	var PropTypes = {
		"array": check,
		"bool": check,
		"func": check,
		"number": check,
		"object": check,
		"string": check,
		"any": check,
		"arrayOf": check,
		"element": check,
		"instanceOf": check,
		"node": check,
		"objectOf": check,
		"oneOf": check,
		"oneOfType": check,
		"shape": check
	};

	var Children = {
		only: function only(children) {
			return children;
		}
	};

	exports['default'] = {
		h: _hyperscript2['default'],
		info: _util.info,
		Component: _component.Component,
		createClass: _component.createClass,
		Children: Children,
		render: _render.render,
		findDOMNode: _component.findDOMNode,
		PropTypes: PropTypes,
		unmount: _render.unmount,
		unmountComponentAtNode: _render.unmount,
		createElement: _hyperscript2['default'],
		createStore: _refer.createStore,
		createLogger: _refer.createLogger,
		createDispatch: _refer.createDispatch,
		createHandler: _refer.createHandler,
		combineHandlers: _refer.combineHandlers,
		constants: _refer.constants,
		mapValues: _refer.mapValues,
		types: _refer.types
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _virtualDom = __webpack_require__(3);

	var _component = __webpack_require__(38);

	var _refer = __webpack_require__(39);

	var _DOMPropertyOperations = __webpack_require__(49);

	var _DOMProperty = __webpack_require__(51);

	var _HTMLDOMPropertyConfig = __webpack_require__(55);

	var _HTMLDOMPropertyConfig2 = _interopRequireDefault(_HTMLDOMPropertyConfig);

	var _SVGDOMPropertyConfig = __webpack_require__(57);

	var _SVGDOMPropertyConfig2 = _interopRequireDefault(_SVGDOMPropertyConfig);

	var _util = __webpack_require__(48);

	var isFn = _refer.types.isFn;
	var isStr = _refer.types.isStr;
	var isObj = _refer.types.isObj;
	var isNum = _refer.types.isNum;

	_DOMProperty.injection.injectDOMPropertyConfig(_HTMLDOMPropertyConfig2['default']);
	_DOMProperty.injection.injectDOMPropertyConfig(_SVGDOMPropertyConfig2['default']);

	var isUnitlessNumber = {
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
	};

	/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */
	var prefixKey = function prefixKey(prefix, key) {
		return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	};

	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

	// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.
	Object.keys(isUnitlessNumber).forEach(function (prop) {
		return prefixes.forEach(function (prefix) {
			return isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
		});
	});

	var RE_NUMBER = /^\d+(\.\d+)?$/;
	var checkNum = function checkNum(obj) {
		return isNum(obj) || isStr(obj) && RE_NUMBER.test(obj);
	};
	var checkUnit = function checkUnit(style) {
		for (var key in style) {
			if (checkNum(style[key]) && !isUnitlessNumber[key]) {
				style[key] += 'px';
			}
		}
		return style;
	};
	var onchanging = null;
	var checkEvent = function checkEvent(props) {
		var handle = props.onchange;
		if (isFn(handle)) {
			var onchange = function onchange(e) {
				onchanging = handle;
				handle.call(this, e);
				onchanging = null;
			};
			props.onchange = onchange;
			props.oninput = isFn(props.oninput) ? _util.pipe(props.oninput, onchange) : onchange;
			if (onchanging === handle && 'value' in props) {
				delete props.value;
			}
		}
		return props;
	};
	var isKey = function isKey(name) {
		return name === 'key';
	};
	var isEvent = function isEvent(name) {
		return (/^on/.test(name)
		);
	};
	var isStyle = function isStyle(name) {
		return name === 'style';
	};
	var isRef = function isRef(name) {
		return name === 'ref';
	};
	var assign = function assign(properties) {
		if (properties == null) {
			return properties;
		}
		var props = {
			attributes: {}
		};
		var hasChange = undefined;
		for (var _name in properties) {
			if (!properties.hasOwnProperty(_name)) {
				continue;
			}
			var value = properties[_name];
			if (isKey(_name)) {
				if (value != null) {
					props[_name] = value;
					hasChange = true;
				}
			} else if (isEvent(_name)) {
				if (isFn(value)) {
					props[_name.toLowerCase()] = value;
					hasChange = true;
				}
			} else if (isStyle(_name)) {
				if (isStr(value)) {
					props.attributes[_name] = value;
					hasChange = true;
				} else if (isObj(value)) {
					props[_name] = checkUnit(value);
					hasChange = true;
				}
			} else if (isRef(_name)) {
				if (isStr(value)) {
					var refKey = value;
					var refValue = value;
					props.dataset = _component.collectRef(refKey, refValue);
					hasChange = true;
				}
			} else {
				hasChange = _DOMPropertyOperations.assignProperties(props, _name, value) || hasChange;
			}
		}
		return hasChange ? checkEvent(props) : null;
	};

	var getProps = function getProps(properties, children) {
		var length = children.length;

		properties = properties || {};
		if (length > 0) {
			properties.children = length === 1 ? children[0] : children;
		}
		return properties;
	};

	exports['default'] = function (tagName, properties) {
		for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
			children[_key - 2] = arguments[_key];
		}

		if (_component.Component.isPrototypeOf(tagName)) {
			return new _component.Widget(tagName, getProps(properties, children));
		}
		if (isFn(tagName)) {
			tagName = tagName(getProps(properties, children));
		}
		var props = assign(properties);
		return _virtualDom.h(tagName, props, children.filter(function (child) {
			return typeof child !== 'boolean';
		}));
	};

	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var diff = __webpack_require__(4)
	var patch = __webpack_require__(17)
	var h = __webpack_require__(26)
	var create = __webpack_require__(37)
	var VNode = __webpack_require__(28)
	var VText = __webpack_require__(29)

	module.exports = {
	    diff: diff,
	    patch: patch,
	    h: h,
	    create: create,
	    VNode: VNode,
	    VText: VText
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var diff = __webpack_require__(5)

	module.exports = diff


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(6)

	var VPatch = __webpack_require__(7)
	var isVNode = __webpack_require__(9)
	var isVText = __webpack_require__(10)
	var isWidget = __webpack_require__(11)
	var isThunk = __webpack_require__(12)
	var handleThunk = __webpack_require__(13)

	var diffProps = __webpack_require__(14)

	module.exports = diff

	function diff(a, b) {
	    var patch = { a: a }
	    walk(a, b, patch, 0)
	    return patch
	}

	function walk(a, b, patch, index) {
	    if (a === b) {
	        return
	    }

	    var apply = patch[index]
	    var applyClear = false

	    if (isThunk(a) || isThunk(b)) {
	        thunks(a, b, patch, index)
	    } else if (b == null) {

	        // If a is a widget we will add a remove patch for it
	        // Otherwise any child widgets/hooks must be destroyed.
	        // This prevents adding two remove patches for a widget.
	        if (!isWidget(a)) {
	            clearState(a, patch, index)
	            apply = patch[index]
	        }

	        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b))
	    } else if (isVNode(b)) {
	        if (isVNode(a)) {
	            if (a.tagName === b.tagName &&
	                a.namespace === b.namespace &&
	                a.key === b.key) {
	                var propsPatch = diffProps(a.properties, b.properties)
	                if (propsPatch) {
	                    apply = appendPatch(apply,
	                        new VPatch(VPatch.PROPS, a, propsPatch))
	                }
	                apply = diffChildren(a, b, patch, apply, index)
	            } else {
	                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
	                applyClear = true
	            }
	        } else {
	            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
	            applyClear = true
	        }
	    } else if (isVText(b)) {
	        if (!isVText(a)) {
	            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
	            applyClear = true
	        } else if (a.text !== b.text) {
	            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
	        }
	    } else if (isWidget(b)) {
	        if (!isWidget(a)) {
	            applyClear = true
	        }

	        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b))
	    }

	    if (apply) {
	        patch[index] = apply
	    }

	    if (applyClear) {
	        clearState(a, patch, index)
	    }
	}

	function diffChildren(a, b, patch, apply, index) {
	    var aChildren = a.children
	    var orderedSet = reorder(aChildren, b.children)
	    var bChildren = orderedSet.children

	    var aLen = aChildren.length
	    var bLen = bChildren.length
	    var len = aLen > bLen ? aLen : bLen

	    for (var i = 0; i < len; i++) {
	        var leftNode = aChildren[i]
	        var rightNode = bChildren[i]
	        index += 1

	        if (!leftNode) {
	            if (rightNode) {
	                // Excess nodes in b need to be added
	                apply = appendPatch(apply,
	                    new VPatch(VPatch.INSERT, null, rightNode))
	            }
	        } else {
	            walk(leftNode, rightNode, patch, index)
	        }

	        if (isVNode(leftNode) && leftNode.count) {
	            index += leftNode.count
	        }
	    }

	    if (orderedSet.moves) {
	        // Reorder nodes last
	        apply = appendPatch(apply, new VPatch(
	            VPatch.ORDER,
	            a,
	            orderedSet.moves
	        ))
	    }

	    return apply
	}

	function clearState(vNode, patch, index) {
	    // TODO: Make this a single walk, not two
	    unhook(vNode, patch, index)
	    destroyWidgets(vNode, patch, index)
	}

	// Patch records for all destroyed widgets must be added because we need
	// a DOM node reference for the destroy function
	function destroyWidgets(vNode, patch, index) {
	    if (isWidget(vNode)) {
	        if (typeof vNode.destroy === "function") {
	            patch[index] = appendPatch(
	                patch[index],
	                new VPatch(VPatch.REMOVE, vNode, null)
	            )
	        }
	    } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
	        var children = vNode.children
	        var len = children.length
	        for (var i = 0; i < len; i++) {
	            var child = children[i]
	            index += 1

	            destroyWidgets(child, patch, index)

	            if (isVNode(child) && child.count) {
	                index += child.count
	            }
	        }
	    } else if (isThunk(vNode)) {
	        thunks(vNode, null, patch, index)
	    }
	}

	// Create a sub-patch for thunks
	function thunks(a, b, patch, index) {
	    var nodes = handleThunk(a, b)
	    var thunkPatch = diff(nodes.a, nodes.b)
	    if (hasPatches(thunkPatch)) {
	        patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch)
	    }
	}

	function hasPatches(patch) {
	    for (var index in patch) {
	        if (index !== "a") {
	            return true
	        }
	    }

	    return false
	}

	// Execute hooks when two nodes are identical
	function unhook(vNode, patch, index) {
	    if (isVNode(vNode)) {
	        if (vNode.hooks) {
	            patch[index] = appendPatch(
	                patch[index],
	                new VPatch(
	                    VPatch.PROPS,
	                    vNode,
	                    undefinedKeys(vNode.hooks)
	                )
	            )
	        }

	        if (vNode.descendantHooks || vNode.hasThunks) {
	            var children = vNode.children
	            var len = children.length
	            for (var i = 0; i < len; i++) {
	                var child = children[i]
	                index += 1

	                unhook(child, patch, index)

	                if (isVNode(child) && child.count) {
	                    index += child.count
	                }
	            }
	        }
	    } else if (isThunk(vNode)) {
	        thunks(vNode, null, patch, index)
	    }
	}

	function undefinedKeys(obj) {
	    var result = {}

	    for (var key in obj) {
	        result[key] = undefined
	    }

	    return result
	}

	// List diff, naive left to right reordering
	function reorder(aChildren, bChildren) {
	    // O(M) time, O(M) memory
	    var bChildIndex = keyIndex(bChildren)
	    var bKeys = bChildIndex.keys
	    var bFree = bChildIndex.free

	    if (bFree.length === bChildren.length) {
	        return {
	            children: bChildren,
	            moves: null
	        }
	    }

	    // O(N) time, O(N) memory
	    var aChildIndex = keyIndex(aChildren)
	    var aKeys = aChildIndex.keys
	    var aFree = aChildIndex.free

	    if (aFree.length === aChildren.length) {
	        return {
	            children: bChildren,
	            moves: null
	        }
	    }

	    // O(MAX(N, M)) memory
	    var newChildren = []

	    var freeIndex = 0
	    var freeCount = bFree.length
	    var deletedItems = 0

	    // Iterate through a and match a node in b
	    // O(N) time,
	    for (var i = 0 ; i < aChildren.length; i++) {
	        var aItem = aChildren[i]
	        var itemIndex

	        if (aItem.key) {
	            if (bKeys.hasOwnProperty(aItem.key)) {
	                // Match up the old keys
	                itemIndex = bKeys[aItem.key]
	                newChildren.push(bChildren[itemIndex])

	            } else {
	                // Remove old keyed items
	                itemIndex = i - deletedItems++
	                newChildren.push(null)
	            }
	        } else {
	            // Match the item in a with the next free item in b
	            if (freeIndex < freeCount) {
	                itemIndex = bFree[freeIndex++]
	                newChildren.push(bChildren[itemIndex])
	            } else {
	                // There are no free items in b to match with
	                // the free items in a, so the extra free nodes
	                // are deleted.
	                itemIndex = i - deletedItems++
	                newChildren.push(null)
	            }
	        }
	    }

	    var lastFreeIndex = freeIndex >= bFree.length ?
	        bChildren.length :
	        bFree[freeIndex]

	    // Iterate through b and append any new keys
	    // O(M) time
	    for (var j = 0; j < bChildren.length; j++) {
	        var newItem = bChildren[j]

	        if (newItem.key) {
	            if (!aKeys.hasOwnProperty(newItem.key)) {
	                // Add any new keyed items
	                // We are adding new items to the end and then sorting them
	                // in place. In future we should insert new items in place.
	                newChildren.push(newItem)
	            }
	        } else if (j >= lastFreeIndex) {
	            // Add any leftover non-keyed items
	            newChildren.push(newItem)
	        }
	    }

	    var simulate = newChildren.slice()
	    var simulateIndex = 0
	    var removes = []
	    var inserts = []
	    var simulateItem

	    for (var k = 0; k < bChildren.length;) {
	        var wantedItem = bChildren[k]
	        simulateItem = simulate[simulateIndex]

	        // remove items
	        while (simulateItem === null && simulate.length) {
	            removes.push(remove(simulate, simulateIndex, null))
	            simulateItem = simulate[simulateIndex]
	        }

	        if (!simulateItem || simulateItem.key !== wantedItem.key) {
	            // if we need a key in this position...
	            if (wantedItem.key) {
	                if (simulateItem && simulateItem.key) {
	                    // if an insert doesn't put this key in place, it needs to move
	                    if (bKeys[simulateItem.key] !== k + 1) {
	                        removes.push(remove(simulate, simulateIndex, simulateItem.key))
	                        simulateItem = simulate[simulateIndex]
	                        // if the remove didn't put the wanted item in place, we need to insert it
	                        if (!simulateItem || simulateItem.key !== wantedItem.key) {
	                            inserts.push({key: wantedItem.key, to: k})
	                        }
	                        // items are matching, so skip ahead
	                        else {
	                            simulateIndex++
	                        }
	                    }
	                    else {
	                        inserts.push({key: wantedItem.key, to: k})
	                    }
	                }
	                else {
	                    inserts.push({key: wantedItem.key, to: k})
	                }
	                k++
	            }
	            // a key in simulate has no matching wanted key, remove it
	            else if (simulateItem && simulateItem.key) {
	                removes.push(remove(simulate, simulateIndex, simulateItem.key))
	            }
	        }
	        else {
	            simulateIndex++
	            k++
	        }
	    }

	    // remove all the remaining nodes from simulate
	    while(simulateIndex < simulate.length) {
	        simulateItem = simulate[simulateIndex]
	        removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key))
	    }

	    // If the only moves we have are deletes then we can just
	    // let the delete patch remove these items.
	    if (removes.length === deletedItems && !inserts.length) {
	        return {
	            children: newChildren,
	            moves: null
	        }
	    }

	    return {
	        children: newChildren,
	        moves: {
	            removes: removes,
	            inserts: inserts
	        }
	    }
	}

	function remove(arr, index, key) {
	    arr.splice(index, 1)

	    return {
	        from: index,
	        key: key
	    }
	}

	function keyIndex(children) {
	    var keys = {}
	    var free = []
	    var length = children.length

	    for (var i = 0; i < length; i++) {
	        var child = children[i]

	        if (child.key) {
	            keys[child.key] = i
	        } else {
	            free.push(i)
	        }
	    }

	    return {
	        keys: keys,     // A hash of key name to index
	        free: free      // An array of unkeyed item indices
	    }
	}

	function appendPatch(apply, patch) {
	    if (apply) {
	        if (isArray(apply)) {
	            apply.push(patch)
	        } else {
	            apply = [apply, patch]
	        }

	        return apply
	    } else {
	        return patch
	    }
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	var nativeIsArray = Array.isArray
	var toString = Object.prototype.toString

	module.exports = nativeIsArray || isArray

	function isArray(obj) {
	    return toString.call(obj) === "[object Array]"
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(8)

	VirtualPatch.NONE = 0
	VirtualPatch.VTEXT = 1
	VirtualPatch.VNODE = 2
	VirtualPatch.WIDGET = 3
	VirtualPatch.PROPS = 4
	VirtualPatch.ORDER = 5
	VirtualPatch.INSERT = 6
	VirtualPatch.REMOVE = 7
	VirtualPatch.THUNK = 8

	module.exports = VirtualPatch

	function VirtualPatch(type, vNode, patch) {
	    this.type = Number(type)
	    this.vNode = vNode
	    this.patch = patch
	}

	VirtualPatch.prototype.version = version
	VirtualPatch.prototype.type = "VirtualPatch"


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "2"


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(8)

	module.exports = isVirtualNode

	function isVirtualNode(x) {
	    return x && x.type === "VirtualNode" && x.version === version
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(8)

	module.exports = isVirtualText

	function isVirtualText(x) {
	    return x && x.type === "VirtualText" && x.version === version
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = isWidget

	function isWidget(w) {
	    return w && w.type === "Widget"
	}


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = isThunk

	function isThunk(t) {
	    return t && t.type === "Thunk"
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isVNode = __webpack_require__(9)
	var isVText = __webpack_require__(10)
	var isWidget = __webpack_require__(11)
	var isThunk = __webpack_require__(12)

	module.exports = handleThunk

	function handleThunk(a, b) {
	    var renderedA = a
	    var renderedB = b

	    if (isThunk(b)) {
	        renderedB = renderThunk(b, a)
	    }

	    if (isThunk(a)) {
	        renderedA = renderThunk(a, null)
	    }

	    return {
	        a: renderedA,
	        b: renderedB
	    }
	}

	function renderThunk(thunk, previous) {
	    var renderedThunk = thunk.vnode

	    if (!renderedThunk) {
	        renderedThunk = thunk.vnode = thunk.render(previous)
	    }

	    if (!(isVNode(renderedThunk) ||
	            isVText(renderedThunk) ||
	            isWidget(renderedThunk))) {
	        throw new Error("thunk did not return a valid node");
	    }

	    return renderedThunk
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15)
	var isHook = __webpack_require__(16)

	module.exports = diffProps

	function diffProps(a, b) {
	    var diff

	    for (var aKey in a) {
	        if (!(aKey in b)) {
	            diff = diff || {}
	            diff[aKey] = undefined
	        }

	        var aValue = a[aKey]
	        var bValue = b[aKey]

	        if (aValue === bValue) {
	            continue
	        } else if (isObject(aValue) && isObject(bValue)) {
	            if (getPrototype(bValue) !== getPrototype(aValue)) {
	                diff = diff || {}
	                diff[aKey] = bValue
	            } else if (isHook(bValue)) {
	                 diff = diff || {}
	                 diff[aKey] = bValue
	            } else {
	                var objectDiff = diffProps(aValue, bValue)
	                if (objectDiff) {
	                    diff = diff || {}
	                    diff[aKey] = objectDiff
	                }
	            }
	        } else {
	            diff = diff || {}
	            diff[aKey] = bValue
	        }
	    }

	    for (var bKey in b) {
	        if (!(bKey in a)) {
	            diff = diff || {}
	            diff[bKey] = b[bKey]
	        }
	    }

	    return diff
	}

	function getPrototype(value) {
	  if (Object.getPrototypeOf) {
	    return Object.getPrototypeOf(value)
	  } else if (value.__proto__) {
	    return value.__proto__
	  } else if (value.constructor) {
	    return value.constructor.prototype
	  }
	}


/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function isObject(x) {
		return typeof x === "object" && x !== null;
	};


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = isHook

	function isHook(hook) {
	    return hook &&
	      (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") ||
	       typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"))
	}


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var patch = __webpack_require__(18)

	module.exports = patch


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var document = __webpack_require__(19)
	var isArray = __webpack_require__(6)

	var render = __webpack_require__(21)
	var domIndex = __webpack_require__(23)
	var patchOp = __webpack_require__(24)
	module.exports = patch

	function patch(rootNode, patches, renderOptions) {
	    renderOptions = renderOptions || {}
	    renderOptions.patch = renderOptions.patch && renderOptions.patch !== patch
	        ? renderOptions.patch
	        : patchRecursive
	    renderOptions.render = renderOptions.render || render

	    return renderOptions.patch(rootNode, patches, renderOptions)
	}

	function patchRecursive(rootNode, patches, renderOptions) {
	    var indices = patchIndices(patches)

	    if (indices.length === 0) {
	        return rootNode
	    }

	    var index = domIndex(rootNode, patches.a, indices)
	    var ownerDocument = rootNode.ownerDocument

	    if (!renderOptions.document && ownerDocument !== document) {
	        renderOptions.document = ownerDocument
	    }

	    for (var i = 0; i < indices.length; i++) {
	        var nodeIndex = indices[i]
	        rootNode = applyPatch(rootNode,
	            index[nodeIndex],
	            patches[nodeIndex],
	            renderOptions)
	    }

	    return rootNode
	}

	function applyPatch(rootNode, domNode, patchList, renderOptions) {
	    if (!domNode) {
	        return rootNode
	    }

	    var newNode

	    if (isArray(patchList)) {
	        for (var i = 0; i < patchList.length; i++) {
	            newNode = patchOp(patchList[i], domNode, renderOptions)

	            if (domNode === rootNode) {
	                rootNode = newNode
	            }
	        }
	    } else {
	        newNode = patchOp(patchList, domNode, renderOptions)

	        if (domNode === rootNode) {
	            rootNode = newNode
	        }
	    }

	    return rootNode
	}

	function patchIndices(patches) {
	    var indices = []

	    for (var key in patches) {
	        if (key !== "a") {
	            indices.push(Number(key))
	        }
	    }

	    return indices
	}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var topLevel = typeof global !== 'undefined' ? global :
	    typeof window !== 'undefined' ? window : {}
	var minDoc = __webpack_require__(20);

	if (typeof document !== 'undefined') {
	    module.exports = document;
	} else {
	    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

	    if (!doccy) {
	        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
	    }

	    module.exports = doccy;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 20 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var document = __webpack_require__(19)

	var applyProperties = __webpack_require__(22)

	var isVNode = __webpack_require__(9)
	var isVText = __webpack_require__(10)
	var isWidget = __webpack_require__(11)
	var handleThunk = __webpack_require__(13)

	module.exports = createElement

	function createElement(vnode, opts) {
	    var doc = opts ? opts.document || document : document
	    var warn = opts ? opts.warn : null

	    vnode = handleThunk(vnode).a

	    if (isWidget(vnode)) {
	        return vnode.init()
	    } else if (isVText(vnode)) {
	        return doc.createTextNode(vnode.text)
	    } else if (!isVNode(vnode)) {
	        if (warn) {
	            warn("Item is not a valid virtual dom node", vnode)
	        }
	        return null
	    }

	    var node = (vnode.namespace === null) ?
	        doc.createElement(vnode.tagName) :
	        doc.createElementNS(vnode.namespace, vnode.tagName)

	    var props = vnode.properties
	    applyProperties(node, props)

	    var children = vnode.children

	    for (var i = 0; i < children.length; i++) {
	        var childNode = createElement(children[i], opts)
	        if (childNode) {
	            node.appendChild(childNode)
	        }
	    }

	    return node
	}


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15)
	var isHook = __webpack_require__(16)

	module.exports = applyProperties

	function applyProperties(node, props, previous) {
	    for (var propName in props) {
	        var propValue = props[propName]

	        if (propValue === undefined) {
	            removeProperty(node, propName, propValue, previous);
	        } else if (isHook(propValue)) {
	            removeProperty(node, propName, propValue, previous)
	            if (propValue.hook) {
	                propValue.hook(node,
	                    propName,
	                    previous ? previous[propName] : undefined)
	            }
	        } else {
	            if (isObject(propValue)) {
	                patchObject(node, props, previous, propName, propValue);
	            } else {
	                node[propName] = propValue
	            }
	        }
	    }
	}

	function removeProperty(node, propName, propValue, previous) {
	    if (previous) {
	        var previousValue = previous[propName]

	        if (!isHook(previousValue)) {
	            if (propName === "attributes") {
	                for (var attrName in previousValue) {
	                    node.removeAttribute(attrName)
	                }
	            } else if (propName === "style") {
	                for (var i in previousValue) {
	                    node.style[i] = ""
	                }
	            } else if (typeof previousValue === "string") {
	                node[propName] = ""
	            } else {
	                node[propName] = null
	            }
	        } else if (previousValue.unhook) {
	            previousValue.unhook(node, propName, propValue)
	        }
	    }
	}

	function patchObject(node, props, previous, propName, propValue) {
	    var previousValue = previous ? previous[propName] : undefined

	    // Set attributes
	    if (propName === "attributes") {
	        for (var attrName in propValue) {
	            var attrValue = propValue[attrName]

	            if (attrValue === undefined) {
	                node.removeAttribute(attrName)
	            } else {
	                node.setAttribute(attrName, attrValue)
	            }
	        }

	        return
	    }

	    if(previousValue && isObject(previousValue) &&
	        getPrototype(previousValue) !== getPrototype(propValue)) {
	        node[propName] = propValue
	        return
	    }

	    if (!isObject(node[propName])) {
	        node[propName] = {}
	    }

	    var replacer = propName === "style" ? "" : undefined

	    for (var k in propValue) {
	        var value = propValue[k]
	        node[propName][k] = (value === undefined) ? replacer : value
	    }
	}

	function getPrototype(value) {
	    if (Object.getPrototypeOf) {
	        return Object.getPrototypeOf(value)
	    } else if (value.__proto__) {
	        return value.__proto__
	    } else if (value.constructor) {
	        return value.constructor.prototype
	    }
	}


/***/ },
/* 23 */
/***/ function(module, exports) {

	// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
	// We don't want to read all of the DOM nodes in the tree so we use
	// the in-order tree indexing to eliminate recursion down certain branches.
	// We only recurse into a DOM node if we know that it contains a child of
	// interest.

	var noChild = {}

	module.exports = domIndex

	function domIndex(rootNode, tree, indices, nodes) {
	    if (!indices || indices.length === 0) {
	        return {}
	    } else {
	        indices.sort(ascending)
	        return recurse(rootNode, tree, indices, nodes, 0)
	    }
	}

	function recurse(rootNode, tree, indices, nodes, rootIndex) {
	    nodes = nodes || {}


	    if (rootNode) {
	        if (indexInRange(indices, rootIndex, rootIndex)) {
	            nodes[rootIndex] = rootNode
	        }

	        var vChildren = tree.children

	        if (vChildren) {

	            var childNodes = rootNode.childNodes

	            for (var i = 0; i < tree.children.length; i++) {
	                rootIndex += 1

	                var vChild = vChildren[i] || noChild
	                var nextIndex = rootIndex + (vChild.count || 0)

	                // skip recursion down the tree if there are no nodes down here
	                if (indexInRange(indices, rootIndex, nextIndex)) {
	                    recurse(childNodes[i], vChild, indices, nodes, rootIndex)
	                }

	                rootIndex = nextIndex
	            }
	        }
	    }

	    return nodes
	}

	// Binary search for an index in the interval [left, right]
	function indexInRange(indices, left, right) {
	    if (indices.length === 0) {
	        return false
	    }

	    var minIndex = 0
	    var maxIndex = indices.length - 1
	    var currentIndex
	    var currentItem

	    while (minIndex <= maxIndex) {
	        currentIndex = ((maxIndex + minIndex) / 2) >> 0
	        currentItem = indices[currentIndex]

	        if (minIndex === maxIndex) {
	            return currentItem >= left && currentItem <= right
	        } else if (currentItem < left) {
	            minIndex = currentIndex + 1
	        } else  if (currentItem > right) {
	            maxIndex = currentIndex - 1
	        } else {
	            return true
	        }
	    }

	    return false;
	}

	function ascending(a, b) {
	    return a > b ? 1 : -1
	}


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var applyProperties = __webpack_require__(22)

	var isWidget = __webpack_require__(11)
	var VPatch = __webpack_require__(7)

	var updateWidget = __webpack_require__(25)

	module.exports = applyPatch

	function applyPatch(vpatch, domNode, renderOptions) {
	    var type = vpatch.type
	    var vNode = vpatch.vNode
	    var patch = vpatch.patch

	    switch (type) {
	        case VPatch.REMOVE:
	            return removeNode(domNode, vNode)
	        case VPatch.INSERT:
	            return insertNode(domNode, patch, renderOptions)
	        case VPatch.VTEXT:
	            return stringPatch(domNode, vNode, patch, renderOptions)
	        case VPatch.WIDGET:
	            return widgetPatch(domNode, vNode, patch, renderOptions)
	        case VPatch.VNODE:
	            return vNodePatch(domNode, vNode, patch, renderOptions)
	        case VPatch.ORDER:
	            reorderChildren(domNode, patch)
	            return domNode
	        case VPatch.PROPS:
	            applyProperties(domNode, patch, vNode.properties)
	            return domNode
	        case VPatch.THUNK:
	            return replaceRoot(domNode,
	                renderOptions.patch(domNode, patch, renderOptions))
	        default:
	            return domNode
	    }
	}

	function removeNode(domNode, vNode) {
	    var parentNode = domNode.parentNode

	    if (parentNode) {
	        parentNode.removeChild(domNode)
	    }

	    destroyWidget(domNode, vNode);

	    return null
	}

	function insertNode(parentNode, vNode, renderOptions) {
	    var newNode = renderOptions.render(vNode, renderOptions)

	    if (parentNode) {
	        parentNode.appendChild(newNode)
	    }

	    return parentNode
	}

	function stringPatch(domNode, leftVNode, vText, renderOptions) {
	    var newNode

	    if (domNode.nodeType === 3) {
	        domNode.replaceData(0, domNode.length, vText.text)
	        newNode = domNode
	    } else {
	        var parentNode = domNode.parentNode
	        newNode = renderOptions.render(vText, renderOptions)

	        if (parentNode && newNode !== domNode) {
	            parentNode.replaceChild(newNode, domNode)
	        }
	    }

	    return newNode
	}

	function widgetPatch(domNode, leftVNode, widget, renderOptions) {
	    var updating = updateWidget(leftVNode, widget)
	    var newNode

	    if (updating) {
	        newNode = widget.update(leftVNode, domNode) || domNode
	    } else {
	        newNode = renderOptions.render(widget, renderOptions)
	    }

	    var parentNode = domNode.parentNode

	    if (parentNode && newNode !== domNode) {
	        parentNode.replaceChild(newNode, domNode)
	    }

	    if (!updating) {
	        destroyWidget(domNode, leftVNode)
	    }

	    return newNode
	}

	function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
	    var parentNode = domNode.parentNode
	    var newNode = renderOptions.render(vNode, renderOptions)

	    if (parentNode && newNode !== domNode) {
	        parentNode.replaceChild(newNode, domNode)
	    }

	    return newNode
	}

	function destroyWidget(domNode, w) {
	    if (typeof w.destroy === "function" && isWidget(w)) {
	        w.destroy(domNode)
	    }
	}

	function reorderChildren(domNode, moves) {
	    var childNodes = domNode.childNodes
	    var keyMap = {}
	    var node
	    var remove
	    var insert

	    for (var i = 0; i < moves.removes.length; i++) {
	        remove = moves.removes[i]
	        node = childNodes[remove.from]
	        if (remove.key) {
	            keyMap[remove.key] = node
	        }
	        domNode.removeChild(node)
	    }

	    var length = childNodes.length
	    for (var j = 0; j < moves.inserts.length; j++) {
	        insert = moves.inserts[j]
	        node = keyMap[insert.key]
	        // this is the weirdest bug i've ever seen in webkit
	        domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to])
	    }
	}

	function replaceRoot(oldRoot, newRoot) {
	    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
	        oldRoot.parentNode.replaceChild(newRoot, oldRoot)
	    }

	    return newRoot;
	}


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var isWidget = __webpack_require__(11)

	module.exports = updateWidget

	function updateWidget(a, b) {
	    if (isWidget(a) && isWidget(b)) {
	        if ("name" in a && "name" in b) {
	            return a.id === b.id
	        } else {
	            return a.init === b.init
	        }
	    }

	    return false
	}


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var h = __webpack_require__(27)

	module.exports = h


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isArray = __webpack_require__(6);

	var VNode = __webpack_require__(28);
	var VText = __webpack_require__(29);
	var isVNode = __webpack_require__(9);
	var isVText = __webpack_require__(10);
	var isWidget = __webpack_require__(11);
	var isHook = __webpack_require__(16);
	var isVThunk = __webpack_require__(12);

	var parseTag = __webpack_require__(30);
	var softSetHook = __webpack_require__(32);
	var evHook = __webpack_require__(33);

	module.exports = h;

	function h(tagName, properties, children) {
	    var childNodes = [];
	    var tag, props, key, namespace;

	    if (!children && isChildren(properties)) {
	        children = properties;
	        props = {};
	    }

	    props = props || properties || {};
	    tag = parseTag(tagName, props);

	    // support keys
	    if (props.hasOwnProperty('key')) {
	        key = props.key;
	        props.key = undefined;
	    }

	    // support namespace
	    if (props.hasOwnProperty('namespace')) {
	        namespace = props.namespace;
	        props.namespace = undefined;
	    }

	    // fix cursor bug
	    if (tag === 'INPUT' &&
	        !namespace &&
	        props.hasOwnProperty('value') &&
	        props.value !== undefined &&
	        !isHook(props.value)
	    ) {
	        props.value = softSetHook(props.value);
	    }

	    transformProperties(props);

	    if (children !== undefined && children !== null) {
	        addChild(children, childNodes, tag, props);
	    }


	    return new VNode(tag, props, childNodes, key, namespace);
	}

	function addChild(c, childNodes, tag, props) {
	    if (typeof c === 'string') {
	        childNodes.push(new VText(c));
	    } else if (typeof c === 'number') {
	        childNodes.push(new VText(String(c)));
	    } else if (isChild(c)) {
	        childNodes.push(c);
	    } else if (isArray(c)) {
	        for (var i = 0; i < c.length; i++) {
	            addChild(c[i], childNodes, tag, props);
	        }
	    } else if (c === null || c === undefined) {
	        return;
	    } else {
	        throw UnexpectedVirtualElement({
	            foreignObject: c,
	            parentVnode: {
	                tagName: tag,
	                properties: props
	            }
	        });
	    }
	}

	function transformProperties(props) {
	    for (var propName in props) {
	        if (props.hasOwnProperty(propName)) {
	            var value = props[propName];

	            if (isHook(value)) {
	                continue;
	            }

	            if (propName.substr(0, 3) === 'ev-') {
	                // add ev-foo support
	                props[propName] = evHook(value);
	            }
	        }
	    }
	}

	function isChild(x) {
	    return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x);
	}

	function isChildren(x) {
	    return typeof x === 'string' || isArray(x) || isChild(x);
	}

	function UnexpectedVirtualElement(data) {
	    var err = new Error();

	    err.type = 'virtual-hyperscript.unexpected.virtual-element';
	    err.message = 'Unexpected virtual child passed to h().\n' +
	        'Expected a VNode / Vthunk / VWidget / string but:\n' +
	        'got:\n' +
	        errorString(data.foreignObject) +
	        '.\n' +
	        'The parent vnode is:\n' +
	        errorString(data.parentVnode)
	        '\n' +
	        'Suggested fix: change your `h(..., [ ... ])` callsite.';
	    err.foreignObject = data.foreignObject;
	    err.parentVnode = data.parentVnode;

	    return err;
	}

	function errorString(obj) {
	    try {
	        return JSON.stringify(obj, null, '    ');
	    } catch (e) {
	        return String(obj);
	    }
	}


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(8)
	var isVNode = __webpack_require__(9)
	var isWidget = __webpack_require__(11)
	var isThunk = __webpack_require__(12)
	var isVHook = __webpack_require__(16)

	module.exports = VirtualNode

	var noProperties = {}
	var noChildren = []

	function VirtualNode(tagName, properties, children, key, namespace) {
	    this.tagName = tagName
	    this.properties = properties || noProperties
	    this.children = children || noChildren
	    this.key = key != null ? String(key) : undefined
	    this.namespace = (typeof namespace === "string") ? namespace : null

	    var count = (children && children.length) || 0
	    var descendants = 0
	    var hasWidgets = false
	    var hasThunks = false
	    var descendantHooks = false
	    var hooks

	    for (var propName in properties) {
	        if (properties.hasOwnProperty(propName)) {
	            var property = properties[propName]
	            if (isVHook(property) && property.unhook) {
	                if (!hooks) {
	                    hooks = {}
	                }

	                hooks[propName] = property
	            }
	        }
	    }

	    for (var i = 0; i < count; i++) {
	        var child = children[i]
	        if (isVNode(child)) {
	            descendants += child.count || 0

	            if (!hasWidgets && child.hasWidgets) {
	                hasWidgets = true
	            }

	            if (!hasThunks && child.hasThunks) {
	                hasThunks = true
	            }

	            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
	                descendantHooks = true
	            }
	        } else if (!hasWidgets && isWidget(child)) {
	            if (typeof child.destroy === "function") {
	                hasWidgets = true
	            }
	        } else if (!hasThunks && isThunk(child)) {
	            hasThunks = true;
	        }
	    }

	    this.count = count + descendants
	    this.hasWidgets = hasWidgets
	    this.hasThunks = hasThunks
	    this.hooks = hooks
	    this.descendantHooks = descendantHooks
	}

	VirtualNode.prototype.version = version
	VirtualNode.prototype.type = "VirtualNode"


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(8)

	module.exports = VirtualText

	function VirtualText(text) {
	    this.text = String(text)
	}

	VirtualText.prototype.version = version
	VirtualText.prototype.type = "VirtualText"


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var split = __webpack_require__(31);

	var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
	var notClassId = /^\.|#/;

	module.exports = parseTag;

	function parseTag(tag, props) {
	    if (!tag) {
	        return 'DIV';
	    }

	    var noId = !(props.hasOwnProperty('id'));

	    var tagParts = split(tag, classIdSplit);
	    var tagName = null;

	    if (notClassId.test(tagParts[1])) {
	        tagName = 'DIV';
	    }

	    var classes, part, type, i;

	    for (i = 0; i < tagParts.length; i++) {
	        part = tagParts[i];

	        if (!part) {
	            continue;
	        }

	        type = part.charAt(0);

	        if (!tagName) {
	            tagName = part;
	        } else if (type === '.') {
	            classes = classes || [];
	            classes.push(part.substring(1, part.length));
	        } else if (type === '#' && noId) {
	            props.id = part.substring(1, part.length);
	        }
	    }

	    if (classes) {
	        if (props.className) {
	            classes.push(props.className);
	        }

	        props.className = classes.join(' ');
	    }

	    return props.namespace ? tagName : tagName.toUpperCase();
	}


/***/ },
/* 31 */
/***/ function(module, exports) {

	/*!
	 * Cross-Browser Split 1.1.1
	 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
	 * Available under the MIT License
	 * ECMAScript compliant, uniform cross-browser split method
	 */

	/**
	 * Splits a string into an array of strings using a regex or string separator. Matches of the
	 * separator are not included in the result array. However, if `separator` is a regex that contains
	 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
	 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
	 * cross-browser.
	 * @param {String} str String to split.
	 * @param {RegExp|String} separator Regex or string to use for separating the string.
	 * @param {Number} [limit] Maximum number of items to include in the result array.
	 * @returns {Array} Array of substrings.
	 * @example
	 *
	 * // Basic use
	 * split('a b c d', ' ');
	 * // -> ['a', 'b', 'c', 'd']
	 *
	 * // With limit
	 * split('a b c d', ' ', 2);
	 * // -> ['a', 'b']
	 *
	 * // Backreferences in result array
	 * split('..word1 word2..', /([a-z]+)(\d+)/i);
	 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
	 */
	module.exports = (function split(undef) {

	  var nativeSplit = String.prototype.split,
	    compliantExecNpcg = /()??/.exec("")[1] === undef,
	    // NPCG: nonparticipating capturing group
	    self;

	  self = function(str, separator, limit) {
	    // If `separator` is not a regex, use `nativeSplit`
	    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
	      return nativeSplit.call(str, separator, limit);
	    }
	    var output = [],
	      flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + // Proposed for ES6
	      (separator.sticky ? "y" : ""),
	      // Firefox 3+
	      lastLastIndex = 0,
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      separator = new RegExp(separator.source, flags + "g"),
	      separator2, match, lastIndex, lastLength;
	    str += ""; // Type-convert
	    if (!compliantExecNpcg) {
	      // Doesn't need flags gy, but they don't hurt
	      separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
	    }
	    /* Values for `limit`, per the spec:
	     * If undefined: 4294967295 // Math.pow(2, 32) - 1
	     * If 0, Infinity, or NaN: 0
	     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
	     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
	     * If other: Type-convert, then use the above rules
	     */
	    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
	    limit >>> 0; // ToUint32(limit)
	    while (match = separator.exec(str)) {
	      // `separator.lastIndex` is not reliable cross-browser
	      lastIndex = match.index + match[0].length;
	      if (lastIndex > lastLastIndex) {
	        output.push(str.slice(lastLastIndex, match.index));
	        // Fix browsers whose `exec` methods don't consistently return `undefined` for
	        // nonparticipating capturing groups
	        if (!compliantExecNpcg && match.length > 1) {
	          match[0].replace(separator2, function() {
	            for (var i = 1; i < arguments.length - 2; i++) {
	              if (arguments[i] === undef) {
	                match[i] = undef;
	              }
	            }
	          });
	        }
	        if (match.length > 1 && match.index < str.length) {
	          Array.prototype.push.apply(output, match.slice(1));
	        }
	        lastLength = match[0].length;
	        lastLastIndex = lastIndex;
	        if (output.length >= limit) {
	          break;
	        }
	      }
	      if (separator.lastIndex === match.index) {
	        separator.lastIndex++; // Avoid an infinite loop
	      }
	    }
	    if (lastLastIndex === str.length) {
	      if (lastLength || !separator.test("")) {
	        output.push("");
	      }
	    } else {
	      output.push(str.slice(lastLastIndex));
	    }
	    return output.length > limit ? output.slice(0, limit) : output;
	  };

	  return self;
	})();


/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	module.exports = SoftSetHook;

	function SoftSetHook(value) {
	    if (!(this instanceof SoftSetHook)) {
	        return new SoftSetHook(value);
	    }

	    this.value = value;
	}

	SoftSetHook.prototype.hook = function (node, propertyName) {
	    if (node[propertyName] !== this.value) {
	        node[propertyName] = this.value;
	    }
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var EvStore = __webpack_require__(34);

	module.exports = EvHook;

	function EvHook(value) {
	    if (!(this instanceof EvHook)) {
	        return new EvHook(value);
	    }

	    this.value = value;
	}

	EvHook.prototype.hook = function (node, propertyName) {
	    var es = EvStore(node);
	    var propName = propertyName.substr(3);

	    es[propName] = this.value;
	};

	EvHook.prototype.unhook = function(node, propertyName) {
	    var es = EvStore(node);
	    var propName = propertyName.substr(3);

	    es[propName] = undefined;
	};


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var OneVersionConstraint = __webpack_require__(35);

	var MY_VERSION = '7';
	OneVersionConstraint('ev-store', MY_VERSION);

	var hashKey = '__EV_STORE_KEY@' + MY_VERSION;

	module.exports = EvStore;

	function EvStore(elem) {
	    var hash = elem[hashKey];

	    if (!hash) {
	        hash = elem[hashKey] = {};
	    }

	    return hash;
	}


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Individual = __webpack_require__(36);

	module.exports = OneVersion;

	function OneVersion(moduleName, version, defaultValue) {
	    var key = '__INDIVIDUAL_ONE_VERSION_' + moduleName;
	    var enforceKey = key + '_ENFORCE_SINGLETON';

	    var versionValue = Individual(enforceKey, version);

	    if (versionValue !== version) {
	        throw new Error('Can only have one copy of ' +
	            moduleName + '.\n' +
	            'You already have version ' + versionValue +
	            ' installed.\n' +
	            'This means you cannot install version ' + version);
	    }

	    return Individual(key, defaultValue);
	}


/***/ },
/* 36 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	/*global window, global*/

	var root = typeof window !== 'undefined' ?
	    window : typeof global !== 'undefined' ?
	    global : {};

	module.exports = Individual;

	function Individual(key, value) {
	    if (key in root) {
	        return root[key];
	    }

	    root[key] = value;

	    return value;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var createElement = __webpack_require__(21)

	module.exports = createElement


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _refer = __webpack_require__(39);

	var _virtualDom = __webpack_require__(3);

	var _util = __webpack_require__(48);

	var isFn = _refer.types.isFn;
	var isThenable = _refer.types.isThenable;
	var isArr = _refer.types.isArr;
	var isObj = _refer.types.isObj;
	var isStr = _refer.types.isStr;
	var isNum = _refer.types.isNum;
	var GET_TABLE = _refer.constants.GET_TABLE;
	var DISPATCH = _refer.constants.DISPATCH;
	var SHOULD_DISPATCH = _refer.constants.SHOULD_DISPATCH;
	var WILL_UPDATE = _refer.constants.WILL_UPDATE;
	var SHOULD_UPDATE = _refer.constants.SHOULD_UPDATE;
	var DID_UPDATE = _refer.constants.DID_UPDATE;
	var THROW_ERROR = _refer.constants.THROW_ERROR;
	var ASYNC_START = _refer.constants.ASYNC_START;
	var ASYNC_END = _refer.constants.ASYNC_END;
	var SYNC = _refer.constants.SYNC;

	var didMounts = _util.info.didMounts = _util.createCallbackStore('didMounts');
	var clearDidMounts = didMounts.clear;

	exports.clearDidMounts = clearDidMounts;
	var unmounts = _util.info.unmounts = {};
	var callUnmount = function callUnmount(node) {
		var id = node.dataset.referid;
		if (id && isFn(unmounts[id])) {
			unmounts[id]();
			delete unmounts[id];
		}
	};
	var callUnmounts = function callUnmounts(node) {
		if (!node || !node.dataset || !node.dataset.referid) {
			return;
		}
		callUnmount(node);
		var widgets = node.querySelectorAll('[data-referid]');
		Array.prototype.slice.call(widgets).forEach(callUnmount);
	};
	exports.callUnmounts = callUnmounts;
	var checkUnmounts = function checkUnmounts(patch) {
		var NodeProto = Node.prototype;
		var resetRemove = _util.wrapNative(NodeProto, 'removeChild', callUnmounts);
		var resetReplace = _util.wrapNative(NodeProto, 'replaceChild', callUnmounts);
		patch();
		resetRemove();
		resetReplace();
	};

	var richPatch = function richPatch(node, patches) {
		checkUnmounts(function () {
			return _virtualDom.patch(node, patches);
		});
		clearDidMounts();
	};

	exports.richPatch = richPatch;
	var refsStore = _util.info.refsStore = {};
	var clearRefs = function clearRefs(id) {
		if (id in refsStore) {
			delete refsStore[id];
		}
	};
	var getDOMNode = function getDOMNode(refs, refKey, refValue) {
		var selector = '[data-referid="' + refValue + '"]';
		Object.defineProperty(refs, refKey, {
			get: function get() {
				var node = document.body.querySelector(selector);
				if (node) {
					node.getDOMNode = function () {
						return node;
					};
				}
				return node;
			}
		});
	};

	var compId = undefined;
	var oldCompId = undefined;
	var setCompId = function setCompId(newCompId) {
		oldCompId = compId;
		compId = newCompId;
	};
	var resetCompId = function resetCompId() {
		return compId = oldCompId;
	};
	var collectRef = function collectRef(refKey, refValue) {
		if (compId == null || !refValue) {
			return;
		}
		var refs = refsStore[compId] = refsStore[compId] || {};
		if (isStr(refValue)) {
			var referid = compId + '-' + refValue;
			getDOMNode(refs, refKey, referid);
			return { referid: referid };
		}
		refs[refKey] = refValue;
	};
	exports.collectRef = collectRef;
	var getRefs = function getRefs(id) {
		return refsStore[id] || {};
	};
	var findDOMNode = function findDOMNode(node) {
		return node || node.getDOMNode();
	};

	exports.findDOMNode = findDOMNode;

	var Widget = (function () {
		function Widget(Component, props) {
			_classCallCheck(this, Widget);

			this.type = 'Widget';
			this.Component = Component;
			this.props = props;
		}

		Widget.prototype.init = function init() {
			var props = this.props;
			var Component = this.Component;

			var component = this.component = new Component(props || Component.defaultProps);
			if (isStr(props.ref)) {
				collectRef(props.ref, component);
			}
			var id = component.$id = _util.getId();
			setCompId(id);
			var vnode = component.vnode = component.render();
			var node = component.node = _virtualDom.create(vnode);
			var referid = node.dataset.referid = node.dataset.referid || id;
			resetCompId();
			component.componentWillMount();
			component.refs = getRefs(id);
			_util.info.component.amount += 1;
			var willUnmount = function willUnmount() {
				_util.info.component.mounts -= 1;
				_util.info.component.unmounts += 1;
				clearRefs(id);
				component.componentWillUnmount();
			};
			var didMount = function didMount() {
				_util.info.component.mounts += 1;
				component.componentDidMount();
				if (isFn(unmounts[referid])) {
					unmounts[referid] = _util.pipe(willUnmount, unmounts[referid]);
				} else {
					unmounts[referid] = willUnmount;
				}
			};
			didMounts.push(didMount);
			return node;
		};

		Widget.prototype.update = function update(previous) {
			var component = this.component = previous.component;
			var props = this.props;
			var $cache = component.$cache;

			if (isStr(props.ref)) {
				collectRef(props.ref, component);
			}
			$cache.keepSilent = true;
			component.componentWillReceiveProps(props);
			$cache.keepSilent = false;
			var shouldUpdate = component.shouldComponentUpdate(props, component.state);
			if (!shouldUpdate) {
				return;
			}
			$cache.props = props;
			$cache.state = component.state;
			component.forceUpdate();
		};

		return Widget;
	})();

	exports.Widget = Widget;

	var getHook = function getHook(component) {
		var _ref;

		var $cache = component.$cache;

		var shouldComponentUpdate = function shouldComponentUpdate(_ref2) {
			var nextState = _ref2.nextState;

			if ($cache.keepSilent) {
				return;
			}
			debugger;
			var props = component.props;
			var state = component.state;

			var shouldUpdate = component.shouldComponentUpdate(props, nextState);
			if (!shouldUpdate) {
				return;
			}
			$cache.props = props;
			$cache.state = nextState;
			component.forceUpdate();
		};
		return (_ref = {}, _ref[WILL_UPDATE] = shouldComponentUpdate, _ref);
	};

	var merge = function merge(nextState) {
		return function (state) {
			return Object.assign({}, state, nextState);
		};
	};

	var Component = (function () {
		function Component(props) {
			_classCallCheck(this, Component);

			var $cache = this.$cache = {
				keepSilent: false
			};
			var handlers = [this.getHandlers(), getHook(this)];
			var store = this.$store = _refer.createStore(handlers);
			this.dispatch = store.dispatch;
			this.actions = store.actions;
			this.props = props;
			this.refs = {};
		}

		Component.prototype.getDOMNode = function getDOMNode() {
			return this.node;
		};

		Component.prototype.getHandlers = function getHandlers() {
			return {};
		};

		Component.prototype.setState = function setState(nextState, callback) {
			var $store = this.$store;
			var state = this.state;
			var props = this.props;

			if (isFn(nextState)) {
				nextState = nextState(state, props);
			}
			this.$store.dispatch(merge, nextState);
			if (isFn(callback)) {
				callback();
			}
		};

		Component.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
			return true;
		};

		Component.prototype.componentWillUpdate = function componentWillUpdate(nextProps, nextState) {};

		Component.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {};

		Component.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {};

		Component.prototype.componentWillMount = function componentWillMount() {};

		Component.prototype.componentDidMount = function componentDidMount() {};

		Component.prototype.componentWillUnmount = function componentWillUnmount() {};

		Component.prototype.forceUpdate = function forceUpdate(callback) {
			var vnode = this.vnode;
			var node = this.node;
			var $cache = this.$cache;
			var state = this.state;
			var props = this.props;
			var id = this.$id;

			var nextProps = $cache.props;
			var nextState = $cache.state;
			$cache.props = $cache.state = null;
			this.componentWillUpdate(nextProps, nextState);
			this.props = nextProps;
			this.state = nextState;
			setCompId(id);
			clearRefs(id);
			var nextVnode = this.render();
			var patches = _virtualDom.diff(vnode, nextVnode);
			richPatch(node, patches);
			resetCompId();
			this.refs = getRefs(id);
			this.vnode = nextVnode;
			this.componentDidUpdate(props, state);
			if (isFn(callback)) {
				callback();
			}
		};

		_createClass(Component, [{
			key: 'state',
			get: function get() {
				return this.$store.getState();
			},
			set: function set(nextState) {
				var $cache = this.$cache;

				$cache.keepSilent = true;
				this.$store.replaceState(nextState, true);
				$cache.keepSilent = false;
			}
		}]);

		return Component;
	})();

	exports.Component = Component;

	var combineMixin = function combineMixin(proto, mixin) {
		for (var key in mixin) {
			if (!mixin.hasOwnProperty(key)) {
				continue;
			}
			var source = mixin[key];
			var currentValue = proto[key];
			if (currentValue === undefined) {
				proto[key] = source;
			} else if (isFn(currentValue) && isFn(source)) {
				proto[key] = _util.pipe(currentValue, source);
			}
		}
	};
	var combineMixins = function combineMixins(proto, mixins) {
		mixins.forEach(function (mixin) {
			return combineMixin(proto, mixin);
		});
	};

	var bindContext = function bindContext(obj, source) {
		for (var key in source) {
			if (source.hasOwnProperty(key) && isFn(source[key])) {
				obj[key] = source[key].bind(obj);
			}
		}
	};

	var createClass = function createClass(options) {
		var mixins = options.mixins || [];
		var defaultProps = isFn(options.getDefaultProps) ? options.getDefaultProps() : null;
		var mixinsForDefaultProps = undefined;
		if (isObj(defaultProps)) {
			mixinsForDefaultProps = {
				componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
					for (var key in defaultProps) {
						if (!(key in nextProps)) {
							nextProps[key] = defaultProps[key];
						}
					}
				}
			};
			mixins.push(mixinsForDefaultProps);
		}
		var Class = (function (_Component) {
			_inherits(Class, _Component);

			function Class(props, context) {
				_classCallCheck(this, Class);

				_Component.call(this, props, context);
				bindContext(this, Class.prototype);
				if (isObj(defaultProps)) {
					mixinsForDefaultProps.componentWillReceiveProps(props);
				}
				if (isFn(this.getInitialState)) {
					this.state = this.getInitialState();
				}
			}

			return Class;
		})(Component);
		combineMixins(Class.prototype, mixins.concat(options));
		if (isObj(options.statics)) {
			Object.assign(Class, options.statics);
		}
		return Class;
	};
	exports.createClass = createClass;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createDispatch2 = __webpack_require__(40);

	var _createDispatch3 = _interopRequireDefault(_createDispatch2);

	exports.createDispatch = _createDispatch3['default'];

	var _createStore2 = __webpack_require__(44);

	var _createStore3 = _interopRequireDefault(_createStore2);

	exports.createStore = _createStore3['default'];

	var _createHandler2 = __webpack_require__(46);

	var _createHandler3 = _interopRequireDefault(_createHandler2);

	exports.createHandler = _createHandler3['default'];

	var _combineHandlers2 = __webpack_require__(45);

	var _combineHandlers3 = _interopRequireDefault(_combineHandlers2);

	exports.combineHandlers = _combineHandlers3['default'];

	var _constants2 = __webpack_require__(43);

	var _constants3 = _interopRequireDefault(_constants2);

	exports.constants = _constants3['default'];

	var _createLogger2 = __webpack_require__(47);

	var _createLogger3 = _interopRequireDefault(_createLogger2);

	exports.createLogger = _createLogger3['default'];

	var _mapValues2 = __webpack_require__(42);

	var _mapValues3 = _interopRequireDefault(_mapValues2);

	exports.mapValues = _mapValues3['default'];

	var _types2 = __webpack_require__(41);

	var _types = _interopRequireWildcard(_types2);

	exports.types = _types;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _types = __webpack_require__(41);

	var _mapValues = __webpack_require__(42);

	var _mapValues2 = _interopRequireDefault(_mapValues);

	var _constants = __webpack_require__(43);

	var createDispatche = function createDispatche(table) {
		if (!_types.isObj(table)) {
			throw new Error('createDispatche(table): Expected table to be an object which is ' + table);
		}
		var dispatch = function dispatch(_x, _x2) {
			var _again = true;

			_function: while (_again) {
				var key = _x,
				    value = _x2;
				handler = undefined;
				_again = false;

				var handler = undefined;
				switch (true) {
					case key === null:
						return value;
					case key === undefined:
						throw new Error('dispatch(key, value): Expected the key not to be undefined');
					case key === _constants.GET_TABLE:
						return table; // special key to get table
					case _types.isStr(key) || _types.isNum(key):
						handler = table[key];
						break;
					default:
						handler = key;
				}

				switch (true) {
					case handler == null:
						return value;
					case _types.isFn(handler):
						return _types.isThenable(value) ? value.then(handler) : handler(value);
					case _types.isStr(handler) || _types.isNum(handler):
						_x = handler;
						_x2 = value;
						_again = true;
						continue _function;

					case _types.isArr(handler):
						return dispatchOnList(handler, value);
					case _types.isThenable(handler):
						return handler.then(function (asyncHandler) {
							return dispatch(asyncHandler, value);
						});
					case _types.isObj(handler):
						return _mapValues2['default'](handler, function (item) {
							return dispatch(item, value);
						});
					default:
						return value;
				}
			}
		};
		var dispatchOnList = function dispatchOnList(handlers, value) {
			for (var i = 0, len = handlers.length; i < len; i++) {
				value = dispatch(handlers[i], value);
				if (_types.isThenable(value)) {
					return i === len - 1 ? value : value.then(function (result) {
						return dispatch(handlers.slice(i + 1), result);
					});
				}
			}
			return value;
		};

		return dispatch;
	};

	exports['default'] = createDispatche;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports) {

	//types.js
	'use strict';

	exports.__esModule = true;
	var isType = function isType(type) {
	  return function (obj) {
	    return obj != null && Object.prototype.toString.call(obj) === '[object ' + type + ']';
	  };
	};
	exports.isType = isType;
	var isObj = isType('Object');
	exports.isObj = isObj;
	var isStr = isType('String');
	exports.isStr = isStr;
	var isNum = isType('Number');
	exports.isNum = isNum;
	var isFn = isType('Function');
	exports.isFn = isFn;
	var isArr = Array.isArray || isType('Array');
	exports.isArr = isArr;
	var isThenable = function isThenable(obj) {
	  return obj != null && isFn(obj.then);
	};
	exports.isThenable = isThenable;

/***/ },
/* 42 */
/***/ function(module, exports) {

	/**
	 * Applies a function to every key-value pair inside an object.
	 *
	 * @param {Object} obj The source object.
	 * @param {Function} fn The mapper function that receives the value and the key.
	 * @returns {Object} A new object that contains the mapped values for the keys.
	 */
	"use strict";

	exports.__esModule = true;
	var mapValues = function mapValues(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    result[key] = fn(obj[key], key);
	    return result;
	  }, {});
	};

	exports["default"] = mapValues;
	module.exports = exports["default"];

/***/ },
/* 43 */
/***/ function(module, exports) {

	//life cycle key
	'use strict';

	exports.__esModule = true;
	exports['default'] = {
		GET_TABLE: '@REFER_GET_TABLE_' + Math.random().toString(36).substr(2),
		DISPATCH: '@DISPATCH',
		SHOULD_DISPATCH: '@SHOULD_DISPATCH',
		WILL_UPDATE: '@WILL_UPDATE',
		SHOULD_UPDATE: '@SHOULD_UPDATE',
		DID_UPDATE: '@DID_UPDATE',
		THROW_ERROR: '@THROW_ERROR',
		ASYNC_START: '@ASYNC_START',
		ASYNC_END: '@ASYNC_END',
		SYNC: '@SYNC'
	};
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _types = __webpack_require__(41);

	var _combineHandlers = __webpack_require__(45);

	var _combineHandlers2 = _interopRequireDefault(_combineHandlers);

	var _createDispatch = __webpack_require__(40);

	var _createDispatch2 = _interopRequireDefault(_createDispatch);

	var _mapValues = __webpack_require__(42);

	var _mapValues2 = _interopRequireDefault(_mapValues);

	var _constants = __webpack_require__(43);

	var createStore = function createStore(rootDisaptch) {
		var initialState = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

		if (_types.isArr(rootDisaptch)) {
			rootDisaptch = _createDispatch2['default'](_combineHandlers2['default'].apply(undefined, rootDisaptch));
		} else if (_types.isObj(rootDisaptch)) {
			rootDisaptch = _createDispatch2['default'](rootDisaptch);
		}

		if (!_types.isFn(rootDisaptch)) {
			throw new Error('Expected the rootDisaptch to be a function which is ' + rootDisaptch);
		}

		var listeners = [];
		var subscribe = function subscribe(listener) {
			listeners.push(listener);
			return function () {
				var index = listeners.indexOf(listener);
				if (index !== -1) {
					listeners.splice(index, 1);
				}
			};
		};

		var currentState = initialState;
		var replaceState = function replaceState(nextState, silent) {
			currentState = nextState;
			if (!silent) {
				listeners.forEach(function (listener) {
					return listener();
				});
			}
		};
		var updateCurrentState = function updateCurrentState(data) {
			if (rootDisaptch(_constants.SHOULD_UPDATE, data) !== false) {
				rootDisaptch(_constants.WILL_UPDATE, data);
				replaceState(data.nextState);
				rootDisaptch(_constants.DID_UPDATE, data);
			}
		};

		var getState = function getState() {
			return currentState;
		};
		var getNextState = function getNextState(f) {
			return f(currentState);
		};
		var dispatchError = function dispatchError(error) {
			return Promise.reject(rootDisaptch(_constants.THROW_ERROR, error));
		};

		var isDispatching = false;
		var dispatch = function dispatch(key, value) {
			if (isDispatching) {
				throw new Error('store.dispatch(key, value): handler may not dispatch');
			}

			var currentData = { currentState: currentState, key: key, value: value };

			if (rootDisaptch(_constants.SHOULD_DISPATCH, currentData) === false) {
				return currentState;
			}

			rootDisaptch(_constants.DISPATCH, currentData);

			var nextState = undefined;
			try {
				isDispatching = true;
				nextState = rootDisaptch([key, getNextState], value);
			} catch (error) {
				return dispatchError(error);
			} finally {
				isDispatching = false;
			}

			if (nextState === currentState) {
				return currentState;
			}

			var data = { currentState: currentState, nextState: nextState, key: key, value: value };

			if (!_types.isThenable(nextState)) {
				updateCurrentState(data);
				rootDisaptch(_constants.SYNC, data);
				return currentState;
			}

			rootDisaptch(_constants.ASYNC_START, data);
			return nextState.then(function (nextState) {
				var data = { currentState: currentState, nextState: nextState, key: key, value: value };
				rootDisaptch(_constants.ASYNC_END, data);
				updateCurrentState(data);
				return currentState;
			})['catch'](function (error) {
				rootDisaptch(_constants.ASYNC_END, { currentState: currentState, key: key, value: value });
				return dispatchError(error);
			});
		};

		var createActions = function createActions(obj) {
			return _mapValues2['default'](obj, function (_, key) {
				return function (value) {
					return dispatch(key, value);
				};
			});
		};
		var actions = createActions(rootDisaptch(_constants.GET_TABLE));

		return {
			dispatch: dispatch,
			actions: actions,
			getState: getState,
			replaceState: replaceState,
			subscribe: subscribe,
			createActions: createActions
		};
	};

	exports['default'] = createStore;
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createDispatch = __webpack_require__(40);

	var _createDispatch2 = _interopRequireDefault(_createDispatch);

	var _types = __webpack_require__(41);

	var combineHandlers = function combineHandlers() {
		for (var _len = arguments.length, handlers = Array(_len), _key = 0; _key < _len; _key++) {
			handlers[_key] = arguments[_key];
		}

		return handlers.reduce(function (rootHandler, handler) {
			if (_types.isArr(handler)) {
				handler = combineHandlers.apply(undefined, handler);
			}
			var dispatch = _createDispatch2['default'](handler);
			return Object.keys(handler).reduce(function (rootHandler, key) {
				if (!rootHandler[key]) {
					rootHandler[key] = [];
				}
				rootHandler[key].push(function (value) {
					return dispatch(key, value);
				});
				return rootHandler;
			}, rootHandler);
		}, {});
	};

	exports['default'] = combineHandlers;
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _types = __webpack_require__(41);

	var combine = function combine(resolve, reject) {
		return function (value) {
			try {
				return resolve(value);
			} catch (error) {
				return reject(error);
			}
		};
	};

	var then = function then(resolve, reject) {
		var item = undefined;
		if (_types.isFn(resolve) && _types.isFn(reject)) {
			item = combine(resolve, reject);
		} else {
			item = resolve;
		}
		this.push(item);
		return this;
	};

	var pipe = function pipe() {
		this.push.apply(this, arguments);
		return this;
	};

	var createHandler = function createHandler() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var handler = [].concat(args);
		handler.then = then;
		handler.pipe = pipe;
		return handler;
	};

	exports['default'] = createHandler;
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var attr = 'info' in console ? 'info' : "log";
	var pad = function pad(num) {
		return ('0' + num).slice(-2);
	};

	var timeStore = {};
	var getTime = function getTime() {
		return performance ? performance.now() : new Date().getTime();
	};

	var createLogger = function createLogger(_ref) {
		var _ref$scope = _ref.scope;
		var scope = _ref$scope === undefined ? "ROOT" : _ref$scope;
		var debug = _ref.debug;

		var logger = {
			'@DISPATCH': function DISPATCH() {
				timeStore[scope] = getTime();
			},
			'@DID_UPDATE': function DID_UPDATE(_ref2) {
				var key = _ref2.key;
				var value = _ref2.value;
				var currentState = _ref2.currentState;
				var nextState = _ref2.nextState;

				var time = new Date();
				var formattedTime = time.getHours() + ':' + pad(time.getMinutes()) + ':' + pad(time.getSeconds());
				var takeTime = (getTime() - timeStore[scope]).toFixed(2);
				var message = scope + ': action [' + key + '] end at ' + formattedTime + ', take ' + takeTime + 'ms';

				try {
					console.groupCollapsed(message);
				} catch (e) {
					try {
						console.group(message);
					} catch (e) {
						console.log(message);
					}
				}

				console[attr]('%c value', 'color: #03A9F4; font-weight: bold', value);
				console[attr]('%c prev state', 'color: #9E9E9E; font-weight: bold', currentState);
				console[attr]('%c next state', 'color: #4CAF50; font-weight: bold', nextState);

				try {
					console.groupEnd();
				} catch (e) {
					console.log('-- log end --');
				}
			},
			'@THROW_ERROR': function THROW_ERROR(error) {
				if (debug) {
					throw error;
				}
				return error;
			}
		};
		return logger;
	};

	exports['default'] = createLogger;
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var info = {
		component: {
			amount: 0,
			mounts: 0,
			unmounts: 0
		}
	};

	exports.info = info;
	var getId = function getId() {
		return Math.random().toString(36).substr(2);
	};

	exports.getId = getId;
	var pipe = function pipe(fn1, fn2) {
		return function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			fn1.apply(this, args);
			return fn2.apply(this, args);
		};
	};

	exports.pipe = pipe;
	var createCallbackStore = function createCallbackStore(name) {
		var store = [];
		return {
			name: name,
			clear: function clear() {
				while (store.length) {
					store.shift()();
				}
			},
			push: function push(item) {
				store.push(item);
			},
			store: store
		};
	};

	exports.createCallbackStore = createCallbackStore;
	var wrapNative = function wrapNative(obj, method, fn) {
		var nativeMethod = obj[method];
		var wrapper = function wrapper() {
			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			fn.apply(this, args);
			return nativeMethod.apply(this, args);
		};
		obj[method] = wrapper;
		return function () {
			return obj[method] = nativeMethod;
		};
	};
	exports.wrapNative = wrapNative;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMPropertyOperations
	 * @typechecks static-only
	 */

	'use strict';

	var DOMProperty = __webpack_require__(51);
	var quoteAttributeValueForBrowser = __webpack_require__(53);

	function shouldIgnoreValue(name, value) {
	  return value == null || DOMProperty.hasBooleanValue[name] && !value || DOMProperty.hasNumericValue[name] && isNaN(value) || DOMProperty.hasPositiveNumericValue[name] && value < 1 || DOMProperty.hasOverloadedBooleanValue[name] && value === false;
	}

	if ("production" !== process.env.NODE_ENV) {
	  var reactProps = {
	    children: true,
	    dangerouslySetInnerHTML: true,
	    key: true,
	    ref: true
	  };
	  var warnedProperties = {};

	  var warnUnknownProperty = function warnUnknownProperty(name) {
	    if (reactProps.hasOwnProperty(name) && reactProps[name] || warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
	      return;
	    }

	    warnedProperties[name] = true;
	    var lowerCasedName = name.toLowerCase();

	    // data-* attributes should be lowercase; suggest the lowercase version
	    var standardName = DOMProperty.isCustomAttribute(lowerCasedName) ? lowerCasedName : DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ? DOMProperty.getPossibleStandardName[lowerCasedName] : null;

	    // For now, only warn when we have a suggested correction. This prevents
	    // logging too much when using transferPropsTo.
	    "production" !== process.env.NODE_ENV ? warning(standardName == null, 'Unknown DOM property %s. Did you mean %s?', name, standardName) : null;
	  };
	}

	/**
	 * Operations for dealing with DOM properties.
	 */
	var DOMPropertyOperations = {

	  /**
	   * Creates markup for the ID property.
	   *
	   * @param {string} id Unescaped ID.
	   * @return {string} Markup string.
	   */
	  createMarkupForID: function createMarkupForID(id) {
	    return DOMProperty.ID_ATTRIBUTE_NAME + '=' + quoteAttributeValueForBrowser(id);
	  },
	  /**
	   * Sets the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   * @param {*} value
	   */
	  assignProperties: function assignProperties(props, name, value) {
	    var hasChange;
	    if (DOMProperty.isStandardName.hasOwnProperty(name) && DOMProperty.isStandardName[name]) {
	      if (!shouldIgnoreValue(name, value) && DOMProperty.mustUseAttribute[name]) {
	        // `setAttribute` with objects becomes only `[object]` in IE8/9,
	        // ('' + value) makes it output the correct toString()-value.
	        props.attributes[DOMProperty.getAttributeName[name]] = '' + value;
	        hasChange = true;
	      } else {
	        var propName = DOMProperty.getPropertyName[name];
	        // Must explicitly cast values for HAS_SIDE_EFFECTS-properties to the
	        // property type before comparing; only `value` does and is string.
	        if (!DOMProperty.hasSideEffects[name] || '' + props[propName] !== '' + value) {
	          // Contrary to `setAttribute`, object properties are properly
	          // `toString`ed by IE8/9.
	          props[propName] = value;
	          hasChange = true;
	        }
	      }
	    } else if (DOMProperty.isCustomAttribute(name) && value != null) {
	      props.attributes[name] = '' + value;
	      hasChange = true;
	    } else if ("production" !== process.env.NODE_ENV) {
	      console.warn('unknow props: %s', name);
	    }
	    return hasChange;
	  }
	};

	module.exports = DOMPropertyOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ },
/* 50 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMProperty
	 * @typechecks static-only
	 */

	/*jslint bitwise: true */

	'use strict';

	var invariant = __webpack_require__(52);

	function checkMask(value, bitmask) {
	  return (value & bitmask) === bitmask;
	}

	var DOMPropertyInjection = {
	  /**
	   * Mapping from normalized, camelcased property names to a configuration that
	   * specifies how the associated DOM property should be accessed or rendered.
	   */
	  MUST_USE_ATTRIBUTE: 0x1,
	  MUST_USE_PROPERTY: 0x2,
	  HAS_SIDE_EFFECTS: 0x4,
	  HAS_BOOLEAN_VALUE: 0x8,
	  HAS_NUMERIC_VALUE: 0x10,
	  HAS_POSITIVE_NUMERIC_VALUE: 0x20 | 0x10,
	  HAS_OVERLOADED_BOOLEAN_VALUE: 0x40,

	  /**
	   * Inject some specialized knowledge about the DOM. This takes a config object
	   * with the following properties:
	   *
	   * isCustomAttribute: function that given an attribute name will return true
	   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
	   * attributes where it's impossible to enumerate all of the possible
	   * attribute names,
	   *
	   * Properties: object mapping DOM property name to one of the
	   * DOMPropertyInjection constants or null. If your attribute isn't in here,
	   * it won't get written to the DOM.
	   *
	   * DOMAttributeNames: object mapping React attribute name to the DOM
	   * attribute name. Attribute names not specified use the **lowercase**
	   * normalized name.
	   *
	   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
	   * Property names not specified use the normalized name.
	   *
	   * DOMMutationMethods: Properties that require special mutation methods. If
	   * `value` is undefined, the mutation method should unset the property.
	   *
	   * @param {object} domPropertyConfig the config as described above.
	   */
	  injectDOMPropertyConfig: function injectDOMPropertyConfig(domPropertyConfig) {
	    var Properties = domPropertyConfig.Properties || {};
	    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
	    var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
	    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

	    if (domPropertyConfig.isCustomAttribute) {
	      DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
	    }

	    for (var propName in Properties) {
	      "production" !== process.env.NODE_ENV ? invariant(!DOMProperty.isStandardName.hasOwnProperty(propName), 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property ' + '\'%s\' which has already been injected. You may be accidentally ' + 'injecting the same DOM property config twice, or you may be ' + 'injecting two configs that have conflicting property names.', propName) : invariant(!DOMProperty.isStandardName.hasOwnProperty(propName));

	      DOMProperty.isStandardName[propName] = true;

	      var lowerCased = propName.toLowerCase();
	      DOMProperty.getPossibleStandardName[lowerCased] = propName;

	      if (DOMAttributeNames.hasOwnProperty(propName)) {
	        var attributeName = DOMAttributeNames[propName];
	        DOMProperty.getPossibleStandardName[attributeName] = propName;
	        DOMProperty.getAttributeName[propName] = attributeName;
	      } else {
	        DOMProperty.getAttributeName[propName] = lowerCased;
	      }

	      DOMProperty.getPropertyName[propName] = DOMPropertyNames.hasOwnProperty(propName) ? DOMPropertyNames[propName] : propName;

	      if (DOMMutationMethods.hasOwnProperty(propName)) {
	        DOMProperty.getMutationMethod[propName] = DOMMutationMethods[propName];
	      } else {
	        DOMProperty.getMutationMethod[propName] = null;
	      }

	      var propConfig = Properties[propName];
	      DOMProperty.mustUseAttribute[propName] = checkMask(propConfig, DOMPropertyInjection.MUST_USE_ATTRIBUTE);
	      DOMProperty.mustUseProperty[propName] = checkMask(propConfig, DOMPropertyInjection.MUST_USE_PROPERTY);
	      DOMProperty.hasSideEffects[propName] = checkMask(propConfig, DOMPropertyInjection.HAS_SIDE_EFFECTS);
	      DOMProperty.hasBooleanValue[propName] = checkMask(propConfig, DOMPropertyInjection.HAS_BOOLEAN_VALUE);
	      DOMProperty.hasNumericValue[propName] = checkMask(propConfig, DOMPropertyInjection.HAS_NUMERIC_VALUE);
	      DOMProperty.hasPositiveNumericValue[propName] = checkMask(propConfig, DOMPropertyInjection.HAS_POSITIVE_NUMERIC_VALUE);
	      DOMProperty.hasOverloadedBooleanValue[propName] = checkMask(propConfig, DOMPropertyInjection.HAS_OVERLOADED_BOOLEAN_VALUE);

	      "production" !== process.env.NODE_ENV ? invariant(!DOMProperty.mustUseAttribute[propName] || !DOMProperty.mustUseProperty[propName], 'DOMProperty: Cannot require using both attribute and property: %s', propName) : invariant(!DOMProperty.mustUseAttribute[propName] || !DOMProperty.mustUseProperty[propName]);
	      "production" !== process.env.NODE_ENV ? invariant(DOMProperty.mustUseProperty[propName] || !DOMProperty.hasSideEffects[propName], 'DOMProperty: Properties that have side effects must use property: %s', propName) : invariant(DOMProperty.mustUseProperty[propName] || !DOMProperty.hasSideEffects[propName]);
	      "production" !== process.env.NODE_ENV ? invariant(!!DOMProperty.hasBooleanValue[propName] + !!DOMProperty.hasNumericValue[propName] + !!DOMProperty.hasOverloadedBooleanValue[propName] <= 1, 'DOMProperty: Value can be one of boolean, overloaded boolean, or ' + 'numeric value, but not a combination: %s', propName) : invariant(!!DOMProperty.hasBooleanValue[propName] + !!DOMProperty.hasNumericValue[propName] + !!DOMProperty.hasOverloadedBooleanValue[propName] <= 1);
	    }
	  }
	};
	var defaultValueCache = {};

	/**
	 * DOMProperty exports lookup objects that can be used like functions:
	 *
	 *   > DOMProperty.isValid['id']
	 *   true
	 *   > DOMProperty.isValid['foobar']
	 *   undefined
	 *
	 * Although this may be confusing, it performs better in general.
	 *
	 * @see http://jsperf.com/key-exists
	 * @see http://jsperf.com/key-missing
	 */
	var DOMProperty = {

	  ID_ATTRIBUTE_NAME: 'data-referid',

	  /**
	   * Checks whether a property name is a standard property.
	   * @type {Object}
	   */
	  isStandardName: {},

	  /**
	   * Mapping from lowercase property names to the properly cased version, used
	   * to warn in the case of missing properties.
	   * @type {Object}
	   */
	  getPossibleStandardName: {},

	  /**
	   * Mapping from normalized names to attribute names that differ. Attribute
	   * names are used when rendering markup or with `*Attribute()`.
	   * @type {Object}
	   */
	  getAttributeName: {},

	  /**
	   * Mapping from normalized names to properties on DOM node instances.
	   * (This includes properties that mutate due to external factors.)
	   * @type {Object}
	   */
	  getPropertyName: {},

	  /**
	   * Mapping from normalized names to mutation methods. This will only exist if
	   * mutation cannot be set simply by the property or `setAttribute()`.
	   * @type {Object}
	   */
	  getMutationMethod: {},

	  /**
	   * Whether the property must be accessed and mutated as an object property.
	   * @type {Object}
	   */
	  mustUseAttribute: {},

	  /**
	   * Whether the property must be accessed and mutated using `*Attribute()`.
	   * (This includes anything that fails `<propName> in <element>`.)
	   * @type {Object}
	   */
	  mustUseProperty: {},

	  /**
	   * Whether or not setting a value causes side effects such as triggering
	   * resources to be loaded or text selection changes. We must ensure that
	   * the value is only set if it has changed.
	   * @type {Object}
	   */
	  hasSideEffects: {},

	  /**
	   * Whether the property should be removed when set to a falsey value.
	   * @type {Object}
	   */
	  hasBooleanValue: {},

	  /**
	   * Whether the property must be numeric or parse as a
	   * numeric and should be removed when set to a falsey value.
	   * @type {Object}
	   */
	  hasNumericValue: {},

	  /**
	   * Whether the property must be positive numeric or parse as a positive
	   * numeric and should be removed when set to a falsey value.
	   * @type {Object}
	   */
	  hasPositiveNumericValue: {},

	  /**
	   * Whether the property can be used as a flag as well as with a value. Removed
	   * when strictly equal to false; present without a value when strictly equal
	   * to true; present with a value otherwise.
	   * @type {Object}
	   */
	  hasOverloadedBooleanValue: {},

	  /**
	   * All of the isCustomAttribute() functions that have been injected.
	   */
	  _isCustomAttributeFunctions: [],

	  /**
	   * Checks whether a property name is a custom attribute.
	   * @method
	   */
	  isCustomAttribute: function isCustomAttribute(attributeName) {
	    for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
	      var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
	      if (isCustomAttributeFn(attributeName)) {
	        return true;
	      }
	    }
	    return false;
	  },
	  injection: DOMPropertyInjection
	};

	module.exports = DOMProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function invariant(condition, format, a, b, c, d, e, f) {
	  if ("production" !== process.env.NODE_ENV) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule quoteAttributeValueForBrowser
	 */

	'use strict';

	var escapeTextContentForBrowser = __webpack_require__(54);

	/**
	 * Escapes attribute value to prevent scripting attacks.
	 *
	 * @param {*} value Value to escape.
	 * @return {string} An escaped string.
	 */
	function quoteAttributeValueForBrowser(value) {
	  return '"' + escapeTextContentForBrowser(value) + '"';
	}

	module.exports = quoteAttributeValueForBrowser;

/***/ },
/* 54 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule escapeTextContentForBrowser
	 */

	'use strict';

	var ESCAPE_LOOKUP = {
	  '&': '&amp;',
	  '>': '&gt;',
	  '<': '&lt;',
	  '"': '&quot;',
	  '\'': '&#x27;'
	};

	var ESCAPE_REGEX = /[&><"']/g;

	function escaper(match) {
	  return ESCAPE_LOOKUP[match];
	}

	/**
	 * Escapes text to prevent scripting attacks.
	 *
	 * @param {*} text Text value to escape.
	 * @return {string} An escaped string.
	 */
	function escapeTextContentForBrowser(text) {
	  return ('' + text).replace(ESCAPE_REGEX, escaper);
	}

	module.exports = escapeTextContentForBrowser;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule HTMLDOMPropertyConfig
	 */

	/*jslint bitwise: true*/

	'use strict';

	var DOMProperty = __webpack_require__(51);
	var ExecutionEnvironment = __webpack_require__(56);

	var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
	var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
	var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
	var HAS_SIDE_EFFECTS = DOMProperty.injection.HAS_SIDE_EFFECTS;
	var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
	var HAS_POSITIVE_NUMERIC_VALUE = DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
	var HAS_OVERLOADED_BOOLEAN_VALUE = DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;

	var hasSVG;
	if (ExecutionEnvironment.canUseDOM) {
	  var implementation = document.implementation;
	  hasSVG = implementation && implementation.hasFeature && implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1');
	}

	var HTMLDOMPropertyConfig = {
	  isCustomAttribute: RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),
	  Properties: {
	    /**
	     * Standard Properties
	     */
	    accept: null,
	    acceptCharset: null,
	    accessKey: null,
	    action: null,
	    allowFullScreen: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    allowTransparency: MUST_USE_ATTRIBUTE,
	    alt: null,
	    async: HAS_BOOLEAN_VALUE,
	    autoComplete: null,
	    // autoFocus is polyfilled/normalized by AutoFocusMixin
	    autoFocus: HAS_BOOLEAN_VALUE,
	    autoPlay: HAS_BOOLEAN_VALUE,
	    cellPadding: null,
	    cellSpacing: null,
	    charSet: MUST_USE_ATTRIBUTE,
	    checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    classID: MUST_USE_ATTRIBUTE,
	    // To set className on SVG elements, it's necessary to use .setAttribute;
	    // this works on HTML elements too in all browsers except IE8. Conveniently,
	    // IE8 doesn't support SVG and so we can simply use the attribute in
	    // browsers that support SVG and the property in browsers that don't,
	    // regardless of whether the element is HTML or SVG.
	    className: hasSVG ? MUST_USE_ATTRIBUTE : MUST_USE_PROPERTY,
	    cols: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    colSpan: null,
	    content: null,
	    contentEditable: null,
	    contextMenu: MUST_USE_ATTRIBUTE,
	    controls: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    coords: null,
	    crossOrigin: null,
	    data: null, // For `<object />` acts as `src`.
	    dateTime: MUST_USE_ATTRIBUTE,
	    defer: HAS_BOOLEAN_VALUE,
	    dir: null,
	    disabled: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    download: HAS_OVERLOADED_BOOLEAN_VALUE,
	    draggable: null,
	    encType: null,
	    form: MUST_USE_ATTRIBUTE,
	    formAction: MUST_USE_ATTRIBUTE,
	    formEncType: MUST_USE_ATTRIBUTE,
	    formMethod: MUST_USE_ATTRIBUTE,
	    formNoValidate: HAS_BOOLEAN_VALUE,
	    formTarget: MUST_USE_ATTRIBUTE,
	    frameBorder: MUST_USE_ATTRIBUTE,
	    headers: null,
	    height: MUST_USE_ATTRIBUTE,
	    hidden: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    high: null,
	    href: null,
	    hrefLang: null,
	    htmlFor: null,
	    httpEquiv: null,
	    icon: null,
	    id: MUST_USE_PROPERTY,
	    label: null,
	    lang: null,
	    list: MUST_USE_ATTRIBUTE,
	    loop: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    low: null,
	    manifest: MUST_USE_ATTRIBUTE,
	    marginHeight: null,
	    marginWidth: null,
	    max: null,
	    maxLength: MUST_USE_ATTRIBUTE,
	    media: MUST_USE_ATTRIBUTE,
	    mediaGroup: null,
	    method: null,
	    min: null,
	    multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    name: null,
	    noValidate: HAS_BOOLEAN_VALUE,
	    open: HAS_BOOLEAN_VALUE,
	    optimum: null,
	    pattern: null,
	    placeholder: null,
	    poster: null,
	    preload: null,
	    radioGroup: null,
	    readOnly: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    rel: null,
	    required: HAS_BOOLEAN_VALUE,
	    role: MUST_USE_ATTRIBUTE,
	    rows: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    rowSpan: null,
	    sandbox: null,
	    scope: null,
	    scoped: HAS_BOOLEAN_VALUE,
	    scrolling: null,
	    seamless: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    shape: null,
	    size: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    sizes: MUST_USE_ATTRIBUTE,
	    span: HAS_POSITIVE_NUMERIC_VALUE,
	    spellCheck: null,
	    src: null,
	    srcDoc: MUST_USE_PROPERTY,
	    srcSet: MUST_USE_ATTRIBUTE,
	    start: HAS_NUMERIC_VALUE,
	    step: null,
	    style: null,
	    tabIndex: null,
	    target: null,
	    title: null,
	    type: null,
	    useMap: null,
	    value: MUST_USE_PROPERTY | HAS_SIDE_EFFECTS,
	    width: MUST_USE_ATTRIBUTE,
	    wmode: MUST_USE_ATTRIBUTE,

	    /**
	     * Non-standard Properties
	     */
	    // autoCapitalize and autoCorrect are supported in Mobile Safari for
	    // keyboard hints.
	    autoCapitalize: null,
	    autoCorrect: null,
	    // itemProp, itemScope, itemType are for
	    // Microdata support. See http://schema.org/docs/gs.html
	    itemProp: MUST_USE_ATTRIBUTE,
	    itemScope: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    itemType: MUST_USE_ATTRIBUTE,
	    // itemID and itemRef are for Microdata support as well but
	    // only specified in the the WHATWG spec document. See
	    // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
	    itemID: MUST_USE_ATTRIBUTE,
	    itemRef: MUST_USE_ATTRIBUTE,
	    // property is supported for OpenGraph in meta tags.
	    property: null,
	    // IE-only attribute that controls focus behavior
	    unselectable: MUST_USE_ATTRIBUTE
	  },
	  DOMAttributeNames: {
	    acceptCharset: 'accept-charset',
	    className: 'class',
	    htmlFor: 'for',
	    httpEquiv: 'http-equiv'
	  },
	  DOMPropertyNames: {
	    autoCapitalize: 'autocapitalize',
	    autoComplete: 'autocomplete',
	    autoCorrect: 'autocorrect',
	    autoFocus: 'autofocus',
	    autoPlay: 'autoplay',
	    // `encoding` is equivalent to `enctype`, IE8 lacks an `enctype` setter.
	    // http://www.w3.org/TR/html5/forms.html#dom-fs-encoding
	    encType: 'encoding',
	    hrefLang: 'hreflang',
	    radioGroup: 'radiogroup',
	    spellCheck: 'spellcheck',
	    srcDoc: 'srcdoc',
	    srcSet: 'srcset'
	  }
	};

	module.exports = HTMLDOMPropertyConfig;

/***/ },
/* 56 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ExecutionEnvironment
	 */

	/*jslint evil: true */

	"use strict";

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SVGDOMPropertyConfig
	 */

	/*jslint bitwise: true*/

	'use strict';

	var DOMProperty = __webpack_require__(51);

	var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;

	var SVGDOMPropertyConfig = {
	  Properties: {
	    clipPath: MUST_USE_ATTRIBUTE,
	    cx: MUST_USE_ATTRIBUTE,
	    cy: MUST_USE_ATTRIBUTE,
	    d: MUST_USE_ATTRIBUTE,
	    dx: MUST_USE_ATTRIBUTE,
	    dy: MUST_USE_ATTRIBUTE,
	    fill: MUST_USE_ATTRIBUTE,
	    fillOpacity: MUST_USE_ATTRIBUTE,
	    fontFamily: MUST_USE_ATTRIBUTE,
	    fontSize: MUST_USE_ATTRIBUTE,
	    fx: MUST_USE_ATTRIBUTE,
	    fy: MUST_USE_ATTRIBUTE,
	    gradientTransform: MUST_USE_ATTRIBUTE,
	    gradientUnits: MUST_USE_ATTRIBUTE,
	    markerEnd: MUST_USE_ATTRIBUTE,
	    markerMid: MUST_USE_ATTRIBUTE,
	    markerStart: MUST_USE_ATTRIBUTE,
	    offset: MUST_USE_ATTRIBUTE,
	    opacity: MUST_USE_ATTRIBUTE,
	    patternContentUnits: MUST_USE_ATTRIBUTE,
	    patternUnits: MUST_USE_ATTRIBUTE,
	    points: MUST_USE_ATTRIBUTE,
	    preserveAspectRatio: MUST_USE_ATTRIBUTE,
	    r: MUST_USE_ATTRIBUTE,
	    rx: MUST_USE_ATTRIBUTE,
	    ry: MUST_USE_ATTRIBUTE,
	    spreadMethod: MUST_USE_ATTRIBUTE,
	    stopColor: MUST_USE_ATTRIBUTE,
	    stopOpacity: MUST_USE_ATTRIBUTE,
	    stroke: MUST_USE_ATTRIBUTE,
	    strokeDasharray: MUST_USE_ATTRIBUTE,
	    strokeLinecap: MUST_USE_ATTRIBUTE,
	    strokeOpacity: MUST_USE_ATTRIBUTE,
	    strokeWidth: MUST_USE_ATTRIBUTE,
	    textAnchor: MUST_USE_ATTRIBUTE,
	    transform: MUST_USE_ATTRIBUTE,
	    version: MUST_USE_ATTRIBUTE,
	    viewBox: MUST_USE_ATTRIBUTE,
	    x1: MUST_USE_ATTRIBUTE,
	    x2: MUST_USE_ATTRIBUTE,
	    x: MUST_USE_ATTRIBUTE,
	    y1: MUST_USE_ATTRIBUTE,
	    y2: MUST_USE_ATTRIBUTE,
	    y: MUST_USE_ATTRIBUTE
	  },
	  DOMAttributeNames: {
	    clipPath: 'clip-path',
	    fillOpacity: 'fill-opacity',
	    fontFamily: 'font-family',
	    fontSize: 'font-size',
	    gradientTransform: 'gradientTransform',
	    gradientUnits: 'gradientUnits',
	    markerEnd: 'marker-end',
	    markerMid: 'marker-mid',
	    markerStart: 'marker-start',
	    patternContentUnits: 'patternContentUnits',
	    patternUnits: 'patternUnits',
	    preserveAspectRatio: 'preserveAspectRatio',
	    spreadMethod: 'spreadMethod',
	    stopColor: 'stop-color',
	    stopOpacity: 'stop-opacity',
	    strokeDasharray: 'stroke-dasharray',
	    strokeLinecap: 'stroke-linecap',
	    strokeOpacity: 'stroke-opacity',
	    strokeWidth: 'stroke-width',
	    textAnchor: 'text-anchor',
	    viewBox: 'viewBox'
	  }
	};

	module.exports = SVGDOMPropertyConfig;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _virtualDom = __webpack_require__(3);

	var _refer = __webpack_require__(39);

	var _component = __webpack_require__(38);

	var _util = __webpack_require__(48);

	var isFn = _refer.types.isFn;

	var store = _util.info.store = {};

	var render = function render(vnode, container, callback) {
		var id = container.dataset.referid;
		if (id) {
			var prevVnode = store[id];
			var patches = _virtualDom.diff(prevVnode, vnode);
			_component.richPatch(container.firstChild, patches);
			store[id] = vnode;
		} else {
			var node = _virtualDom.create(vnode);
			id = container.dataset.referid = _util.getId();
			store[id] = vnode;
			container.innerHTML = '';
			container.appendChild(node);
			_component.clearDidMounts();
		}
		if (isFn(callback)) {
			callback();
		}
	};

	exports.render = render;
	var unmount = function unmount(container) {
		var id = container.dataset.referid;
		if (id) {
			var prevVnode = store[id];
			if (prevVnode) {
				delete store[id];
				_component.callUnmounts(container);
				container.innerHTML = '';
			}
			delete container.dataset.referid;
		}
	};
	exports.unmount = unmount;

/***/ }
/******/ ]);