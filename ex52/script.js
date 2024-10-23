//com async

async function clicou () {
    let requisição = await fetch("https://jsonplaceholder.typicode.com/posts")
    let json = await requisição.json()
    alert(`Titulo do primeiro post: ${json[0].title}`)

    //sem async

    /*
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            return responde.json()
        })
        .then((json) => {
            alert(`Titulo do primeiro post: ${json[0].title}`)
        })
        .catch(() => {
            alert("Deu problema")
        }) */
    alert("clicou")
}

    
async function inserir() {
    let inserir2 = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Titulo de teste",
                body: "Corpo de teste",
                userId: 2
            })
        })
        let json = await inserir2.json()

        console.log(json)
}

document.querySelector("#botao").addEventListener("click", clicou)
document.querySelector("#inserir").addEventListener("click", inserir)