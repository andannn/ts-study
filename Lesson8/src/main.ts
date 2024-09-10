const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg != null)
}

console.log(isObj(true))
console.log()
console.log(`${typeof [1, 2, 3]}`)
console.log(`${typeof null}`)
console.log(`${Array.isArray([1, 2, 3])}`)
console.log(isObj([1, 2, 3]))


const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    return {
        arg,
        is: !!arg
    }
}

interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T): T => {
    return user
}

console.log({ id: 1, name: 'dd' })
// console.log({ name: 'dd' })

const getUsersProperty =
    <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
        return users.map(user => user[key])
    }

class StateObject<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }
    set setState(value: T) {
        this.data = value
    }
}

const store = new StateObject('ddd')

console.log(store.state)