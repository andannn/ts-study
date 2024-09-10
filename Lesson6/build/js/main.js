"use strict";
class Coder {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    /**
     * getAge
     */
    getAge() {
        return `Hello ${this.age}`;
    }
}
let coder = new Coder("", "", 5, "");
console.log(`coder ${coder.getAge()}`);
// console.log(`coder ${coder.age}`)
class WebDev extends Coder {
    constructor(computer, name, music, age, lang) {
        super(name, music, age, lang);
        this.computer = computer;
    }
}
let dev = new WebDev('MAC', "", "", 5, "");
console.log(`coder ${dev.computer}`);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        throw new Error("Method not implemented.");
    }
}
