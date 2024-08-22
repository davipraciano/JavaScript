let cars = ["Ferrari", "Audi", "Chevrolet", "Gol"]

cars.pop()

if(cars.includes("Gol")) {
    console.log("Está no mercado")
} else {
    console.log("Não está no mercado")
} 


// .includes() = Se eu tenho item que eu passei no ()
// .every() = só retorna true quando todos combinarem
// .some() = só retorna true quandoa alguns combinarem
// .filter() = ele filtra os itens