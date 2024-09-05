//Elementos
const Newul = document.querySelector("ul")
const input = document.querySelector("input")

//Funções
function tecla(event) {
    if(event.key === "Enter") {
        // Adicionar elemento LI na lista
        const Newli = document.createElement("li")
        Newli.innerHTML = input.value
        Newul.append(Newli)

        //Limpar o campo de texto
        input.value = ""
    }
        
}

//Eventos
input.addEventListener("keyup", tecla)