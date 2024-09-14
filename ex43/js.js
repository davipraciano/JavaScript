class Person {

    age = 0
    steps = 0

        constructor(name) {
            this.name = name
        }
    
        takeAStep() {
            this.steps++
        }

        setAge(newAge) {
            if(typeof newAge == "number")
            this.age = newAge
        }
}

let p1 = new Person("João")
let p2 = new Person("Maria")
let p3 = new Person("Pedro")

p1.takeAStep()
p1.setAge(20)
console.log(`${p1.name} tem ${p1.steps} passo e ${p1.age} anos.`)