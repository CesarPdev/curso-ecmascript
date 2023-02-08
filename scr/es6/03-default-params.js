// En ES5 y anteriores para dar valores por defecto se hacía de la siguiente manera

function newUser(name, age, country) {
    var name = name || 'Juan';
    var age = age || 28;
    var country = country || 'AR';
    console.log(name, age, country);
}

newUser(); // Muestra los valores por defecto
newUser('Cesar', 41, 'MX'); // Muestra los argumentos 

// A partir de ES6 se simplifica y se puede expresar de la siguiente manera

function newUsr(name = 'Adrian', age = 42, country = 'CO') {
    console.log(name, age, country);
}

newUsr(); // Muestra los valores por defecto
newUsr('Cesar', 41, 'MX'); // Muestra los argumentos 