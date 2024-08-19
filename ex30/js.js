let cars = [
    {brand: "Fiat", year: 2022},
    {brand: "BMW", year: 2018},
    {brand: "Ferrari", year: 2020}
]

cars.sort((a, b) => a.year - b.year)

console.log(cars)

//.sort() => coloca os itens do array em ordem alfabetica
//.reverse() => coloca em ordem aleatoria os itens do array