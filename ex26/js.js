let cores = [
    {nome: "preto", qt: 10},
    {nome: "azul", qt: 5},
    {nome: "vermelho", qt: 15}
]

/*for (let n = 0; n < cores.length; n++) {
    cores[n].nome = cores[n].nome.toUpperCase()
    console.log(`Nome: ${cores[n].nome} - ${cores[n].qt}`)
}*/

for(let i in cores) {
    cores[i].nome = cores[i].nome.toUpperCase()
    console.log(`Nome: ${cores[i].nome} - ${cores[i].qt}`)
}

/*
for(let cor of cores) {
    console.log(`Nome: ${cor.nome} - ${cor.qt}`)
}*/