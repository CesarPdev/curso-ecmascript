// Enhanced Object Literals

// En versiones de ES5 y anteriores se realizaba de la siguiente manera

function newUser(user, age, country){
    return {
        user: user,
        age: age,
        country: country
    }
}

// desde ES6 podemos asignar los valores de la siguiente manera quedando el código más limpio

function nuevoUsr(user, age, country){
    return {
        user,
        age,
        country
    }
}

console.log(nuevoUsr('cpdev', 41, 'AR'));