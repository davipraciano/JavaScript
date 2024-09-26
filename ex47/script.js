function createPerson(name, lastName, age) {
    return {
        name, 
        lastName,
        age
    }
}

let person1 = createPerson("Davi", "Almeida", 15)

console.log(person1.name)

// Isso seria um funcional, dessa forma não precisa ficar criando varios objetos, para cada pessoa
// Só precisa criar as caracteristicas de uma pessoa normal e depois colocar a identidade dela em uma variavel(let, var ou const)