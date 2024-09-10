class Coder {

    constructor(
        public name: string,
        public music: string,
        private age: number,
        protected lang: string,
    ) { }

    /**
     * getAge
     */
    public getAge() {
        return `Hello ${this.age}`
    }
}

let coder = new Coder("", "", 5, "")
console.log(`coder ${coder.getAge()}`)
// console.log(`coder ${coder.age}`)

class WebDev extends Coder {
    constructor(
        public computer: String,
        name: string,
        music: string,
        age: number,
        lang: string,
    ) {
        super(name, music, age, lang)
    }
}
let dev = new WebDev('MAC', "", "", 5, "")

console.log(`coder ${dev.computer}`)


interface Musician {
    name: string,
    instrument: string,
    play(action: string): string,
}

class Guitarist implements Musician {
    constructor(public name: string, public instrument: string) { }
    play(action: string): string {
        return ''
    }
}

const Page = new Guitarist('Jimmy', 'guitar')

console.log(Page.play(''))

class Peeps {
    static count: number = 0
    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.id = ++Peeps.count
    }
}

class Bands {

    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every((element) => typeof element == 'string')) {
            this.dataState = value
        } else {

        }
    }
}

