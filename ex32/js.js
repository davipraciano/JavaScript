function clicou () {
    console.log("Clicou no botão")
}

let doc = document.querySelector(".botao")
doc.addEventListener("click", () => {
    clicou()
})