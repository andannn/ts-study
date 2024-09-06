
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]
type Guitarist = {
    name?: string,
    activie: boolean,
    albums: stringOrNumberArray
}

// Literal type

let myName: "SFD"
let userName: 'asd' | 'af' | 'asdf'
userName = 'asdf'

// functions

const add = (a: number, b: number): number => {
    return a + b
}

const logMessage = (message: any) => {
    console.log(message)
}

logMessage("hello")
logMessage(add(1, 2))
logMessage("hello")

let subtract = function (c: number, d: number) {
    return c - d
}

type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//     (a: number, b: number): number
// }

const multiply: mathFunction = function (c, d) {
    return c * d
}

logMessage(multiply(1, 2))

// optional paramters
const addAll = (a: number, b: number, c?: number) => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }

    return a + b
}
const sumAll = (a: number = 2, b: number, c: number = 2) => {
    return a + b + c
}

logMessage(addAll(2, 4, 3))
logMessage(addAll(2, 4))
logMessage(sumAll(undefined, 4))

// rest parameters
const total = (a: number, ...nums: number[]) => {
    return a + nums.reduce((prev, current) => prev + current)
}

// never
const createError = (errorMessage: string) => {
    throw new Error(errorMessage)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) {
            break
        }
    }
}

const isNumber = (value: any) : boolean => {
    return typeof value === 'number' ? true: false
}

const numberOrString = (value: number | string) : string => {
    if (typeof value === 'number') {
        return 'string'
    }
    
    if (typeof value === 'string') {
        return 'string'
    }

    return createError('never')
}