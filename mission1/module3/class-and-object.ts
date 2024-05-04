{
    //

    class Animal {
        constructor(public name: string, public specis: string, public sound: string) { }

        makeSound() {
            console.log(`the ${this.name} make sound ${this.sound}`);
        }

    }

    const dog = new Animal('german shepard', 'dog', 'ghew ghew');
    dog.makeSound()

    //
}