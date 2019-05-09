import Model from './model';
function wrap(decorator) {
  return function (Model, key) {
    let target = Model.prototype
    let descriptor = Object.getOwnPropertyDescriptor(target, key)

    decorator(target, key, descriptor)
  }
}

let log = function (target, key, descriptor) {
  Object.defineProperty(target, key, {
    ...descriptor,
    value: function (...arg) {
      let start = new Date().valueOf()
      try {
        return descriptor.value.apply(this, arg)
      } finally {
        let end = new Date().valueOf()
        console.log(`start: ${start} end: ${end} consume: ${end - start}`)
      }
    }
  })
}

let seal = function (target, key, descriptor) {
  Object.defineProperty(target, key, {
    ...descriptor,
    writable: false
  })
}

log = wrap(log)
seal = wrap(seal)
