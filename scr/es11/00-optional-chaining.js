// A partir de un objeto (en este caso users que tiene 2 usuarios y el país de cada uno)

const users = {
    gndx: {
        country: 'MX'
    },
    ana: {
        country: 'CO'
    }
}

console.log(users.gndx.country); // Con este método puedo acceder por ejemplo al país del elemento gndx

// Pero si por alguna razón intentamos acceder a un método de un elemento que no existe, el sistema dará error
//console.log(users.cesar.country);

//Para evitar este tipo de errores, podemos utilizar la siguiente sintaxis

console.log(users.cesar?.country);