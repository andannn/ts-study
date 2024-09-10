"use strict";
// Index Signatures
// interface TransactionObj {
//     pizza: number,
//     books: number,
//     job: number
// }
const today = {
    pizza: 0,
    books: 0,
    job: 0,
};
console.log(today.books);
console.log(today.pizza);
console.log(today.job);
let prop = 'pizza';
console.log(today[prop]);
const todaysNet = (transaction) => {
    let total = 0;
    for (const trans in transaction) {
        total += transaction[trans];
    }
    return total;
};
console.log(today["asdf"]);
const some = {
    pizza: 0,
    books: 0,
    job: 0,
    ne: 1
};
const stu = {
    name: "D",
    GPA: 0,
    class: [],
};
console.log(stu.test);
// keyof
for (const key in stu) {
    console.log(`${key} ${stu[key]}`);
    console.log(`${key} ${stu[key]}`);
    console.log('');
}
// typeof retrive type from obj 
Object.keys(stu).map(key => {
    console.log(stu[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(stu, 'name');
