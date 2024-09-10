"use strict";
// Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssigment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "asdfa",
    title: "this is title",
    grade: 233
};
console.log(updateAssigment(assign1, { grade: 12 }));
// Required and readonly
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = assign1;
// assignVerified.verified = false
const hexColorMap = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
};
const score = {
    studentId: 'sdf',
};
const pre = {
    studentId: "",
    title: "",
    grade: 0
};
console.log(pre);
// Return Type
// type newAssign = {
//     title: string,
//     points: number,
// }
const creatNewAssign = (title, points) => {
    return {
        title, points
    };
};
let a = typeof creatNewAssign;
let b = creatNewAssign;
console.log(a);
console.log(b);
const arg = ['asdf', 1];
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users.map(user => user.emails)));
