let reais = "reais";

function valor(x) {
    console.log("Valores NÃO CADASTRADOS abaixo:");
    let frete= 10;
    console.log("- Valor sem cadastro: " + `${x}` + " " + `${reais}`);
    console.log("- Frete sem cadastro: " + `${frete}` + " " + `${reais}`);
}

function valor2(x2) {
    console.log(" ");
    console.log("Valores CADASTRADOS abaixo:");
    let frete2 = 5;
    console.log("- Valor com cadastro: " + `${x2}` + " " + `${reais}`);
    console.log("- Frete com cadastro: " + `${frete2}` + " " + `${reais}`);
}
valor(100);
valor2(50);