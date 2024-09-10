// Utility Types

interface Assigment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssigment =
    (assign: Assigment, propsToUpdate: Partial<Assigment>): Assigment => {
        return { ...assign, ...propsToUpdate }
    }

const assign1: Assigment = {
    studentId: "asdfa",
    title: "this is title",
    grade: 233
}

console.log(updateAssigment(assign1, { grade: 12 }))

// Required and readonly

const recordAssignment = (assign: Required<Assigment>): Assigment => {
    return assign
}

const assignVerified: Readonly<Assigment> = assign1

// assignVerified.verified = false


const hexColorMap: Record<string, string> = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
}

type AssignResult = Pick<Assigment, 'studentId'>

const score: AssignResult = {
    studentId: 'sdf',
}

type AssigmentPrev = Omit<Assigment, 'verified'>

const pre: AssigmentPrev = {
    studentId: "",
    title: "",
    grade: 0
}

console.log(pre)


type AllPoss = 'DDD' | 'asf' | null | undefined

type NamesOnly = NonNullable<AllPoss>

// Return Type

// type newAssign = {
//     title: string,
//     points: number,
// }

const creatNewAssign = (title: string, points: number) => {
    return {
        title, points
    }
}

let a = typeof creatNewAssign
let b = creatNewAssign

console.log(a)
console.log(b)
type newAssign = ReturnType<typeof creatNewAssign>
type AssignParam = Parameters<typeof creatNewAssign>

const arg: AssignParam = ['asdf', 1] 
interface User {
    id: number,
    name: string,
    username: string,
    emails: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users.map(user => user.emails)))