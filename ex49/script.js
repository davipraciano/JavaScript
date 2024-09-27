const defaultUser = {
    name: "",
    email: "",
    level: 1
}

const user1 = {
    ...defaultUser,
    name: "Bonieky",
    email: "dasdasdaw@.com.br"
}

const adm1 = {
    ...defaultUser,
    name: "admin",
    email: "adamdamsdm@dasdawd",
    level: 2
}

console.log(adm1)