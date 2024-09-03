function clicou () {
    const teste = document.querySelector("#teste")
    const ul = teste.querySelector("ul")

    ul.children[0].innerHTML= `Item <i> Alterado! </i>`
    console.log(ul.outerHTML)
}

