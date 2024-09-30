//CallBack
function clickCallBack() {
    alert("clicou")
}

// Nesse exemplo, a função clickCallBack é passada como argumento para addEventListener, e quando clickCallBack termina, ela chama o addEventListener.
document.querySelector("#botao").addEventListener("click", clickCallBack)