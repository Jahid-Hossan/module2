{
    //instanceof guard

    class Animal {
        constructor(
            name: string,
            species: string
        ) { }

        makeSound() {
            console.log('i am making sound');
        }
    }

    class Dog extends Animal {
        constructor(
            name: string,
            species: string
        ) { super(name, species) }

        makeBark() {
            console.log(`I am barking`);
        }
    }

    class Cat extends Animal {
        constructor(
            name: string,
            species: string
        ) { super(name, species) }

        makeMeaw() {
            console.log(`I am meawing`);
        }
    }

















    //
}