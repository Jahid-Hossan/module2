{
    //instanceof guard

    class Animal {
        constructor(
            public name: string,
            public species: string
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

    // this is normal way
    const getAnimal = (animal: Animal) => {
        if (animal instanceof Dog) {
            animal.makeBark()
        } else if (animal instanceof Cat) {
            animal.makeMeaw()
        } else {
            animal.makeSound()
        }
    }

    // this is adhunik way

    // const getDog=(animal: Animal) : boolean => animal instanceof Dog "it will return true false value"
    const getDog = (animal: Animal): animal is Dog => animal instanceof Dog
    const getCat = (animal: Animal): animal is Cat => animal instanceof Cat

    const anotherGetAnimal = (animal: Animal) => {
        if (getDog(animal)) {
            animal.makeBark()
        } else if (getCat(animal)) {
            animal.makeMeaw()
        } else {
            animal.makeSound()
        }
    }

    const cat = new Cat('bilai', 'Cat');
    const dog = new Dog('kutta', 'Dog');


    getAnimal(dog)
    anotherGetAnimal(cat)










    //
}