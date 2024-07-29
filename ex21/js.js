let personagem = {
    nome: "Davi",
    idade: 15,
    País: "Brasil",
    olhos: ["preto", "azul", "amarelo", "verde"],
    caracteristicas: {
        forca: 40,
        magia: 10,
        stamina: 60
    }
}

console.log(`Nome: ${personagem.nome}`)
console.log(`Idade: ${personagem.idade}`)
console.log(`Nacionaldade: ${personagem.País}`)
console.log(`Força: ${personagem.caracteristicas.forca}`)
console.log(`Magia: ${personagem.caracteristicas.magia}`)
console.log(`Stamina ${personagem.caracteristicas.stamina}`)
console.log(`Cor dos olhos: ${personagem.olhos[0]}`)
//[] = array. Acesso com um []
//{} = objeto. Acesso com um .