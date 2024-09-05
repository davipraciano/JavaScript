function soltou(event) {
    console.log(`Tecla apertada ${event.code}`)
    console.log(`Shift? ${event.shiftKey}`)
    console.log(`CTRL? ${event.ctrlKey}`)
    console.log(`ALT? ${event.altKey}`)
    console.log("--")
}

const input = document.querySelector("input")
document.addEventListener("keyup", soltou)