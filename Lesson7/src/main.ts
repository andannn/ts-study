// Index Signatures
// interface TransactionObj {
//     pizza: number,
//     books: number,
//     job: number
// }

interface TransactionObj {
    [index: string]: number
    pizza: number,
    books: number,
    job: number,
}

const today: TransactionObj = {
    pizza: 0,
    books: 0,
    job: 0,
}

console.log(today.books)
console.log(today.pizza)
console.log(today.job)

let prop: string = 'pizza'

console.log(today[prop])

const todaysNet = (transaction: TransactionObj): number => {
    let total = 0

    for (const trans in transaction) {
        total += transaction[trans]
    }

    return total
}

console.log(today["asdf"])

const some: TransactionObj = {
    pizza: 0,
    books: 0,
    job: 0,
    ne: 1
}


interface Student {
    [key: string]: string | number | number[] | undefined,
    name: string,
    GPA: number,
    class?: number[]
}

const stu: Student = {
    name: "D",
    GPA: 0,
    class: [],
}

console.log(stu.test)

// keyof
for (const key in stu) {
    console.log(`${key} ${stu[key]}`)
    console.log(`${key} ${stu[key as keyof Student]}`)
    console.log('')
}

// typeof retrive type from obj 
Object.keys(stu).map(key => {
    console.log(stu[key as keyof typeof stu])
})

const logStudentKey = (student: Student, key: keyof Student) => {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(stu, 'name')


// interface Incoms {
//     [key: string]: number
    
// }


type Streams = 'salary' | 'asdf' | 'dddd'

type Incoms = Record<Streams, number>

const mon: Incoms = {
    salary: 0,
    asdf: 0,
    dddd: 0
}

for (const rev in mon) {
    console.log(mon[rev as keyof Incoms])
}