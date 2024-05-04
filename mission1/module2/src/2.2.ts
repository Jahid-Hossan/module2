{
    // 

    // type alias

    type user1 = {
        name: string,
        age: number
    }


    const user1: user1 = {
        name: 'jahid',
        age: 28
    }




    // i can extend a property using intersection

    type userWithRole = user1 & { role: string }

    const user2: userWithRole = {
        name: 'jahid',
        age: 28,
        role: 'student'
    }


    //Interface

    interface user2 {
        name: string,
        age: number
    }

    const user3: user1 = {
        name: 'jahid',
        age: 28
    }

    // we can also extend property with interface

    interface userWithRole2 extends user2 {
        role: string
    }

    const user4: userWithRole2 = {
        name: 'jahid',
        age: 28,
        role: "manager"
    }


    // Interface and type with array

    type roll = number[]

    const roll = [1, 2, 3, 4]

    interface roll1 {
        [index: number]: number
    }

    const roll1 = [1, 2, 3, 4]


    // Interface and type with function

    type add = (a: number, b: number) => number

    const add: add = (a, b) => a + b


    interface add1 {
        (a: number, b: number): number
    }

    const add1: add = (a, b) => a + b





    // 
}