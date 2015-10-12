
export let getId = () => Math.random().toString(36).substr(2)

export let pipe = (fn1, fn2) => function(...args) {
	fn1.apply(this, args)
	return fn2.apply(this, args)
}

export let createCallbackStore = name => {
	let store = []
	return {
		name,
		clear() {
			while (store.length) {
				store.shift()()
			}
		},
		push(item) {
			store.push(item)
		}
	}
}

export let wrapNative = (obj, method, fn) => {
	let nativeMethod = obj[method]
	let wrapper = function(...args) {
		fn.apply(this, args)
		return nativeMethod.apply(this, args)
	}
	obj[method] = wrapper
	return () => obj[method] = nativeMethod
}