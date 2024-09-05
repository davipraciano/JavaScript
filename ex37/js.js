function clicou () {
    const button = document.querySelector("button")

    /*if (button.classList.contains("azul")) {
        button.classList.toggle("verde")
    } else {
        button.classList.toggle("azul")
    }*/

    if (button.classList.contains("azul")) {
        button.classList.add("verde")
        button.classList.remove("azul")
    } else {
        button.classList.add("azul")
        button.classList.remove("verde")
    }

    /*if (button.classList.contains("azul")) {
        button.classList.replace("azul", "verde")
    } else {
        button.classList.replace("verde", "azul")
    }*/

    //button.classList.remove("azul")
}