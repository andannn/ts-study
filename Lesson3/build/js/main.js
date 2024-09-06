"use strict";
let strArray = ['1', '2'];
let guitars = ['strat', 'Les paul', 544];
let mixedData = ['E', 122, true];
strArray[0] = '12';
strArray.push('1');
guitars[0] = 2323;
guitars.unshift(1);
guitars = strArray;
mixedData = guitars;
let test = [];
let bands = [];
bands.push('asas');
// Tuple
let myTuple = ['ass', 1, false];
let mixed = ['ass', 1, false];
myTuple[1] = 33;
// objects
let myObject;
myObject = [];
console.log(typeof myObject);
myObject = bands;
const exampleObject = {
    prop1: '12',
    prop2: false
};
let evh = {
    name: "adf",
    activie: false,
    albums: [12, 'efrwf']
};
console.log(typeof evh);
const greetGuitarist = (guitars) => {
    var _a;
    if (guitars.name) {
        return `Hello ${(_a = guitars.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(evh));
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["D"] = 3] = "D";
})(Grade || (Grade = {}));
console.log(Grade.A);
