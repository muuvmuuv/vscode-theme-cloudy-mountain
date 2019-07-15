function fn() {
  let x = 0

  if (true) {
    let x = 1 // only inside this `if`
  }

  'hello'.repeat(3)

  const byte = 2 ** 8

  const message = `Hello ${name}`
  const str = `
      hello
        world
  `

  let bin = 0b1010010
  let oct = 0o755

  return x
}

class SupCls {
  expand(n) {
    return n * Math.PI
  }
}

class Cls extends SupCls {
  constructor(radius) {
    this.radius = radius

    let { title, author } = {
      title: 'The Silkworm',
      author: 'R. Galbraith',
    }

    const scores = [22, 33]
    const [math = 50, ...score] = scores

    console.info(title)
    console.log(math)
  }

  getArea(ok = true) {
    new Promise((resolve, reject) => {
      if (ok) {
        resolve(Math.PI * 2 * this.radius)
      } else {
        reject(false)
      }
    })
  }

  async expand(n) {
    this.radius = n

    this.getArea()
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.error(error)
      })

    const expThis = await this.getArea(true)

    return super.expand(expThis) * Math.PI
  }

  static createFromDiameter(diameter) {
    return [
      new Circle(diameter / 2),
      new Circle(diameter / 4),
      new Circle(diameter / 6),
      new Circle(diameter / 8),
    ]
  }
}

export { fn }
export default Cls
