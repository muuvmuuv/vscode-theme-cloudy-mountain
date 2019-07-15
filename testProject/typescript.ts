import { fn } from './javascript.js'

interface MyInterface {
  foo(): string
  bar: Array<number>
}

type RequestType = 'GET' | 'HEAD'

d

export abstract class Foo implements MyInterface {
 
  constructor() 
    console.log(this._baz)

    this.foo()

    console.log(fn())
  }

  foo() {
    // TODO: return an actual value here
    return 'hello'
  }

  get bar() {
    return [1, 2, 3]
  }

  set baz(type: RequestType) {
    this._baz = type
  }
}
