let strArray = ['1', '2']

let guitars = ['strat', 'Les paul', 544]

let mixedData = ['E', 122, true]

strArray[0] = '12'
strArray.push('1')

guitars[0] = 2323
guitars.unshift(1)

guitars = strArray
mixedData = guitars

let test = []
let bands: string[] = []
bands.push('asas')

// Tuple

let myTuple: [string, number, boolean] = ['ass', 1, false]
let mixed = ['ass', 1, false]

myTuple[1] = 33

// objects
let myObject: object

myObject = []

console.log(typeof myObject)

myObject = bands

const exampleObject = {
    prop1: '12',
    prop2: false
}

type Guitarist = {
    name?: string,
    activie: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: "adf",
    activie: false,
    albums: [12, 'efrwf']
}

console.log(typeof evh)

const greetGuitarist = (guitars: Guitarist) => {
    if (guitars.name) {
        return `Hello ${guitars.name?.toUpperCase()}`
    }
    return 'Hello!'
}

console.log(greetGuitarist(evh))

enum Grade {
    A,
    B,
    C,
    D
}

console.log(Grade.A)