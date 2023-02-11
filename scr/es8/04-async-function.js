// Desde ES8 podemos usar funciones asíncronas
// que podrán pasar más luego, en otro momento o nunca, de la siguiente manera

const fnAsync = () => { // Acá definimos una función que contiene una promesa que podrá suceder o no
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Async!'), 2000) // En este ejemplo la función debe esperar 2 segundos y mostrar el mensaje Async!
        : reject(new Error('Error!'));
    });
}

const anotherFn = async () => { // Acá creamos una función asíncrona
    const something = await fnAsync(); // que espera el resultado de la función (promesa) fnAsync
    console.log(something); // Acá imprimimos el resultado de la promesa
    console.log('Hello'); // Luego imprimimos Hello
}

// En el siguiente ejemplo imprimimos Before, corremos la función asíncrona y luego imprimimos After
// En consola se verá Before, After, Async! y Hello al final
// Porque corre el After mientras la función asíncrona sigue esperando el resultado de la promesa

console.log('Before');
anotherFn();
console.log('After');