type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific

let a: One = 'hello'
let b = a as Two

let c = a as Three

let d = <One>'word'
let e = <string>'word'
let f = <string | number>'word'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2, 2, 'concat') as string
let nextVal: number = addOrConcat(2, 2, 'add') as number

// the DOM

const img = document.querySelector('img')
const img2 = document.getElementById('#sd') as HTMLImageElement
const img3 = <HTMLImageElement>document.getElementById('#sd')

img?.src
img2.src