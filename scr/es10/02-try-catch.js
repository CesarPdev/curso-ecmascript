// Con esta función try podemos validar una función y devolver el error

try {
    hello();
} catch (error) {
    console.log(error);
}

// En este caso podemos validar la función 'anotherHello' y si da error devolvemos el mensaje
//'Esto es un error'

try {
    anotherHello();
} catch {
    console.log('Esto es un error');
}