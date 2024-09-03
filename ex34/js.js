function clicou () {
    const teste = document.querySelector("#teste")
    const ul = teste.querySelector("ul")

    let newul = document.createElement("ul")
    ul.after(newul)

    for (let i = 0; i < 5; i++) {
        let newli = document.createElement("li")
        newli.innerHTML = "Item add" + i
        newul.append(newli)
    }
}