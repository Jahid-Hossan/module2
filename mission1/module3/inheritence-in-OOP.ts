{
    //
    class Person {
        constructor(
            public name: string,
            public age: number,
            public email: string,
        ) { }

        showAge() {
            console.log(`this employees age is ${this.age}`);
        }
    }


    class Employee extends Person {
        constructor(
            public name: string,
            public age: number,
            public email: string,
        ) {
            super(name, age, email)
        }

        showAge() {
            console.log(`this employees age is ${this.age}`);
        }
    }

    class Owner extends Person {
        constructor(
            public name: string,
            public age: number,
            public email: string,
            public money: number,
        ) {
            super(name, age, email)
        }

        showMoney() {
            console.log(`this person have ${this.money}$`);
        }
    }

    const employee = new Employee('jahid', 28, 'jahid@gg.com');
    employee.showAge()

    const owner = new Owner('jahid', 25, 'afd', 100000);
    owner.showMoney()









    //
}