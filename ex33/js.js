function clicou () {
    const teste = document.querySelector("#teste")
    const ul = teste.querySelector("ul")

    let newli = document.createElement("li")
    newli.innerText = "Item adicionado"

    ul.prepend(newli)
}
