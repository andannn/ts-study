"use strict";
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg != null);
};
console.log(isObj(true));
console.log();
console.log(`${typeof [1, 2, 3]}`);
console.log(`${typeof null}`);
console.log(`${Array.isArray([1, 2, 3])}`);
console.log(isObj([1, 2, 3]));
