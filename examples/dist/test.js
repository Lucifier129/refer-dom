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

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _referDom = __webpack_require__(1);

	var referDom = _interopRequireWildcard(_referDom);

	console.log(referDom);

	var count = function count(type) {
		return function (state) {
			switch (type) {
				case 'INCREMENT':
					return state + 1;
				case 'DECREMENT':
					return state - 1;
				case 'INCREMENT_IF_ADD':
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

		//handlers = [{ COUNT: count }, createLogger({ scope: 'Counter', debug: true})]

		Counter.prototype.willMount = function willMount() {
			// debugger
		};

		Counter.prototype.didMount = function didMount() {
			// debugger
		};

		Counter.prototype.willUpdate = function willUpdate() {
			// debugger
		};

		Counter.prototype.didUpdate = function didUpdate() {
			// debugger
		};

		Counter.prototype.receiveProps = function receiveProps(nextProps) {
			this.state = nextProps.src;
			debugger;
		};

		Counter.prototype.shouldUpdate = function shouldUpdate() {};

		Counter.prototype.render = function render() {
			//let { COUNT } = this.actions
			var state = this.state;
			var props = this.props;
			var COUNT = props.COUNT;

			return _referDom.h(
				'div',
				null,
				_referDom.h(
					'span',
					{ 'ev-click': function (e) {
							return console.log(e);
						} },
					'count: ',
					state
				),
				' ',
				_referDom.h(
					'button',
					{ onclick: function () {
							return COUNT('INCREMENT');
						} },
					'+'
				),
				' ',
				_referDom.h(
					'button',
					{ onclick: function () {
							return COUNT('DECREMENT');
						} },
					'-'
				),
				' ',
				_referDom.h(
					'button',
					{ onclick: function () {
							return COUNT('INCREMENT_IF_ADD');
						} },
					'incrementIfOdd'
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

		Wrap.prototype.receiveProps = function receiveProps(props) {
			this.state = props.count;
		};

		Wrap.prototype.render = function render() {
			return _referDom.h(
				'div',
				{ className: 'wrap' },
				_referDom.h(Counter, { src: this.state, COUNT: this.actions.COUNT })
			);
		};

		return Wrap;
	})(_referDom.Component);

	var update = function update(count) {
		_referDom.render(_referDom.h(Wrap, { count: count }), document.getElementById('container'), console.log.bind(console));
	};

	var num = 0;
	setInterval(function () {
		update(num++);
	}, 1000);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }newObj['default'] = obj;return newObj;
	  }
	}

	function _defaults(obj, defaults) {
	  var keys = Object.getOwnPropertyNames(defaults);for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];var value = Object.getOwnPropertyDescriptor(defaults, key);if (value && value.configurable && obj[key] === undefined) {
	      Object.defineProperty(obj, key, value);
	    }
	  }return obj;
	}

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _virtualDom = __webpack_require__(2);

	exports.create = _virtualDom.create;
	exports.diff = _virtualDom.diff;
	exports.patch = _virtualDom.patch;

	var _hyperscript = __webpack_require__(37);

	var _hyperscript2 = _interopRequireDefault(_hyperscript);

	exports.h = _hyperscript2['default'];

	var _render2 = __webpack_require__(48);

	var _render3 = _interopRequireDefault(_render2);

	exports.render = _render3['default'];

	var _component = __webpack_require__(38);

	exports.Component = _component.Component;

	var _refer = __webpack_require__(39);

	_defaults(exports, _interopRequireWildcard(_refer));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var diff = __webpack_require__(3)
	var patch = __webpack_require__(16)
	var h = __webpack_require__(25)
	var create = __webpack_require__(36)
	var VNode = __webpack_require__(27)
	var VText = __webpack_require__(28)

	module.exports = {
	    diff: diff,
	    patch: patch,
	    h: h,
	    create: create,
	    VNode: VNode,
	    VText: VText
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var diff = __webpack_require__(4)

	module.exports = diff


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(5)

	var VPatch = __webpack_require__(6)
	var isVNode = __webpack_require__(8)
	var isVText = __webpack_require__(9)
	var isWidget = __webpack_require__(10)
	var isThunk = __webpack_require__(11)
	var handleThunk = __webpack_require__(12)

	var diffProps = __webpack_require__(13)

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
/* 5 */
/***/ function(module, exports) {

	var nativeIsArray = Array.isArray
	var toString = Object.prototype.toString

	module.exports = nativeIsArray || isArray

	function isArray(obj) {
	    return toString.call(obj) === "[object Array]"
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(7)

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
/* 7 */
/***/ function(module, exports) {

	module.exports = "2"


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(7)

	module.exports = isVirtualNode

	function isVirtualNode(x) {
	    return x && x.type === "VirtualNode" && x.version === version
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(7)

	module.exports = isVirtualText

	function isVirtualText(x) {
	    return x && x.type === "VirtualText" && x.version === version
	}


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = isWidget

	function isWidget(w) {
	    return w && w.type === "Widget"
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = isThunk

	function isThunk(t) {
	    return t && t.type === "Thunk"
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isVNode = __webpack_require__(8)
	var isVText = __webpack_require__(9)
	var isWidget = __webpack_require__(10)
	var isThunk = __webpack_require__(11)

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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14)
	var isHook = __webpack_require__(15)

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
/* 14 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function isObject(x) {
		return typeof x === "object" && x !== null;
	};


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = isHook

	function isHook(hook) {
	    return hook &&
	      (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") ||
	       typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"))
	}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var patch = __webpack_require__(17)

	module.exports = patch


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var document = __webpack_require__(18)
	var isArray = __webpack_require__(5)

	var render = __webpack_require__(20)
	var domIndex = __webpack_require__(22)
	var patchOp = __webpack_require__(23)
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var topLevel = typeof global !== 'undefined' ? global :
	    typeof window !== 'undefined' ? window : {}
	var minDoc = __webpack_require__(19);

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
/* 19 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var document = __webpack_require__(18)

	var applyProperties = __webpack_require__(21)

	var isVNode = __webpack_require__(8)
	var isVText = __webpack_require__(9)
	var isWidget = __webpack_require__(10)
	var handleThunk = __webpack_require__(12)

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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14)
	var isHook = __webpack_require__(15)

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
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var applyProperties = __webpack_require__(21)

	var isWidget = __webpack_require__(10)
	var VPatch = __webpack_require__(6)

	var updateWidget = __webpack_require__(24)

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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var isWidget = __webpack_require__(10)

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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var h = __webpack_require__(26)

	module.exports = h


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isArray = __webpack_require__(5);

	var VNode = __webpack_require__(27);
	var VText = __webpack_require__(28);
	var isVNode = __webpack_require__(8);
	var isVText = __webpack_require__(9);
	var isWidget = __webpack_require__(10);
	var isHook = __webpack_require__(15);
	var isVThunk = __webpack_require__(11);

	var parseTag = __webpack_require__(29);
	var softSetHook = __webpack_require__(31);
	var evHook = __webpack_require__(32);

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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(7)
	var isVNode = __webpack_require__(8)
	var isWidget = __webpack_require__(10)
	var isThunk = __webpack_require__(11)
	var isVHook = __webpack_require__(15)

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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(7)

	module.exports = VirtualText

	function VirtualText(text) {
	    this.text = String(text)
	}

	VirtualText.prototype.version = version
	VirtualText.prototype.type = "VirtualText"


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var split = __webpack_require__(30);

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
/* 30 */
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
/* 31 */
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var EvStore = __webpack_require__(33);

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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var OneVersionConstraint = __webpack_require__(34);

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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Individual = __webpack_require__(35);

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
/* 35 */
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var createElement = __webpack_require__(20)

	module.exports = createElement


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}return target;
	};

	var _virtualDom = __webpack_require__(2);

	var _component = __webpack_require__(38);

	var _refer = __webpack_require__(39);

	var isFn = _refer.types.isFn;

	exports['default'] = function (tagName, properties) {
		for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
			children[_key - 2] = arguments[_key];
		}

		if (_component.Component.isPrototypeOf(tagName)) {
			return new _component.Thunk(tagName, _extends({}, properties, { children: children }));
		}
		if (isFn(tagName)) {
			tagName = tagName(_extends({}, properties, { children: children }));
		}
		return _virtualDom.h(tagName, properties, children);
	};

	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	})();

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError('Cannot call a class as a function');
		}
	}

	var _refer = __webpack_require__(39);

	var _virtualDom = __webpack_require__(2);

	var isFn = _refer.types.isFn;
	var isThenable = _refer.types.isThenable;

	var Widget = (function () {
		function Widget(component) {
			_classCallCheck(this, Widget);

			this.type = 'Widget';
			this.component = component;
		}

		Widget.prototype.init = function init() {
			var component = this.component;

			component.willMount();
			var vnode = component.vnode = component.render();
			var node = component.node = _virtualDom.create(vnode);
			component.didMount();
			return node;
		};

		Widget.prototype.update = function update() {
			this.component.forceUpdate();
		};

		Widget.prototype.destroy = function destroy(node) {
			this.component.willUnmount(node);
		};

		return Widget;
	})();

	exports.Widget = Widget;

	var Thunk = (function () {
		function Thunk(Component, props) {
			_classCallCheck(this, Thunk);

			this.type = 'Thunk';
			this.Component = Component;
			this.props = props;
		}

		Thunk.prototype.render = function render(previous) {
			var props = this.props;
			var Component = this.Component;

			var component = undefined;
			if (!previous || !previous.component) {
				this.component = component = new Component(props);
				return new Widget(component);
			}
			component = this.component = previous.component;
			props = component.receiveProps(props) || props;
			component.props = props;
			if (component.shouldUpdate() === false) {
				return previous.vnode;
			}
			return new Widget(component);
		};

		return Thunk;
	})();

	exports.Thunk = Thunk;

	var mergeStates = function mergeStates(nextState) {
		return function (state) {
			return Object.assign({}, state, nextState);
		};
	};

	var Component = (function () {
		function Component(props) {
			var _this = this;

			_classCallCheck(this, Component);

			var store = this.$store = _refer.createStore(this.getHandlers());
			store.unbind = store.subscribe(function () {
				return _this.forceUpdate();
			});
			this.dispatch = store.dispatch;
			this.actions = store.actions;
			this.props = props;
		}

		Component.prototype.getHandlers = function getHandlers() {
			return {};
		};

		Component.prototype.$ = function $(selector) {
			return this.node.querySelectorAll(selector || '');
		};

		Component.prototype.setState = function setState(nextState, callback) {
			var $store = this.$store;
			var state = this.state;
			var props = this.props;

			if (isFn(nextState)) {
				nextState = nextState(state, props);
			}
			var result = $store.dispatch(mergeStates, nextState);
			if (isFn(callback)) {
				return isThenable(result) ? result.then(callback) : callback(result);
			}
			return result;
		};

		Component.prototype.shouldUpdate = function shouldUpdate() {};

		Component.prototype.willUpdate = function willUpdate() {};

		Component.prototype.didUpdate = function didUpdate() {};

		Component.prototype.receiveProps = function receiveProps() {};

		Component.prototype.willMount = function willMount() {};

		Component.prototype.didMount = function didMount() {};

		Component.prototype.willUnmount = function willUnmount() {};

		Component.prototype.forceUpdate = function forceUpdate(callback) {
			var vnode = this.vnode;
			var node = this.node;

			var nextVnode = this.render();
			var patches = _virtualDom.diff(vnode, nextVnode);
			this.willUpdate();
			_virtualDom.patch(node, patches);
			this.vnode = nextVnode;
			this.didUpdate();
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
				this.$store.replaceState(nextState, true);
			}
		}]);

		return Component;
	})();

	exports.Component = Component;

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

	exports["default"] = function (obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    result[key] = fn(obj[key], key);
	    return result;
	  }, {});
	};

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

			rootDisaptch(_constants.DISPATCH, currentData);
			if (rootDisaptch(_constants.SHOULD_DISPATCH, currentData) === false) {
				return currentState;
			}

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

			rootDisaptch(_constants.WILL_UPDATE, data);
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

	exports['default'] = function () {
		for (var _len = arguments.length, handlers = Array(_len), _key = 0; _key < _len; _key++) {
			handlers[_key] = arguments[_key];
		}

		return handlers.reduce(function (rootHandler, handler) {
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

	exports['default'] = function () {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var handler = [].concat(args);
		handler.then = then;
		handler.pipe = pipe;
		return handler;
	};

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

	exports['default'] = function (_ref) {
		var _ref$scope = _ref.scope;
		var scope = _ref$scope === undefined ? "ROOT" : _ref$scope;
		var debug = _ref.debug;

		var logger = {
			'@DISPATCH': function DISPATCH() {
				return console.time(scope);
			},
			'@DID_UPDATE': function DID_UPDATE(_ref2) {
				var key = _ref2.key;
				var value = _ref2.value;
				var currentState = _ref2.currentState;
				var nextState = _ref2.nextState;

				console.timeEnd(scope);
				var time = new Date();
				var formattedTime = time.getHours() + ':' + pad(time.getMinutes()) + ':' + pad(time.getSeconds());
				var message = 'action [' + key + '] at ' + formattedTime;

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

	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _virtualDom = __webpack_require__(2);

	var store = {};
	var getId = function getId() {
		return Math.random().toString(36).substr(2);
	};

	var render = function render(vnode, container, callback) {
		var id = container.dataset.referid;
		if (id) {
			var prevVnode = store[id];
			var patches = _virtualDom.diff(prevVnode, vnode);
			_virtualDom.patch(container, patches);
			store[id] = vnode;
			callback && callback();
			return;
		}
		var node = _virtualDom.create(vnode);
		id = container.dataset.referid = getId();
		store[id] = vnode;
		container.innerHTML = '';
		container.appendChild(node);
		callback && callback();
	};

	exports['default'] = render;
	module.exports = exports['default'];

/***/ }
/******/ ]);