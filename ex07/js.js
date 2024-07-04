let membro = true
let valor = 40
let desconto = 35
let frete = 10
let freteMembro = 2

let Membro = membro ? "Você é membro." : "Você não é membro." 
let membro2 = membro ? desconto : valor
let freteMembro2 = membro ? 2 : 10
console.log (Membro)
console.log ("Valor normal ou desconto: "  + membro2)
console.log ("Frete: " + freteMembro2)

