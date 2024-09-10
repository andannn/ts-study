"use strict";
// Literal type
let myName;
let userName;
userName = 'asdf';
// functions
const add = (a, b) => {
    return a + b;
};
const logMessage = (message) => {
    console.log(message);
};
logMessage("hello");
logMessage(add(1, 2));
logMessage("hello");
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a: number, b: number): number
// }
const multiply = function (c, d) {
    return c * d;
};
logMessage(multiply(1, 2));
// optional paramters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 2, b, c = 2) => {
    return a + b + c;
};
logMessage(addAll(2, 4, 3));
logMessage(addAll(2, 4));
logMessage(sumAll(undefined, 4));
// rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, current) => prev + current);
};
// never
const createError = (errorMessage) => {
    throw new Error(errorMessage);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100) {
            break;
        }
    }
};
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === 'number') {
        return 'string';
    }
    if (typeof value === 'string') {
        return 'string';
    }
    return createError('never');
};
