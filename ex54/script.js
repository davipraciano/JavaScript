//1 Método

/*
let nome = "Davi Almeida"

let resultado = nome.slice(0, 4)

console.log(resultado) //Davi
*/

// O "0" é o parâmetro obrigatório, e o segundo escolhe o local onde deseja encontrar o nome ou número.

//2 Método

/*
let nome = "Davi Almeida"

let resultado = nome.substring(0, 4)

console.log(resultado) //Davi
*/

// Mesmo resultado que o "slice".

//3 Método

/*
let nome = "Davi Almeida"

let resultado = nome.substr(6,3)

console.log(resultado) //lmeida
*/

// Funciona da mesma forma que o "slice" e "substring", pórem, o segundo parâmetro escolhe a quantidade. (Eu escolhi o primeiro parâmetro inicial no 6, que o "lmeida", pórem se colocar o segundo 3, fica "lme", porque? porque o string coloca a quantidade escolhida e não há que foi localizada pelo número.)