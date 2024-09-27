function createPerson(name, lastName, age) {
    return {
        name, 
        lastName,
        age,
        NomeCompleto() {
            return `${this.name} ${this.lastName}`
        }
    }
}

let person1 = createPerson("Davi", "Almeida", 90)

console.log(person1.NomeCompleto())