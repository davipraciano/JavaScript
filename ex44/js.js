class Person {

    age = 0

    constructor(name) {
        this.name = name
    }
    sayHi() {
        console.log(`${this.name} diz: Oi`)
    }
}

class Student extends Person {

    constructor(name, id) {
        super(name)
        this.id = id
    }
    sayHello() {
        super.sayHi()
    }
}

let p1 = new Student("Davi", 1)
p1.age = 15

p1.sayHello()