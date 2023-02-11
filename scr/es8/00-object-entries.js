// Desde ES8 tenemos los Object entries que nos permiten 'transformar' objetos en arreglos

const countries = { MX: 'México', CO: 'Colombia', AR: 'Argentina', PE: 'Perú'}; // A partir de un objeto...

console.log(Object.entries(countries)); // ...Podemos crear un array por cada par 'llave - valor' del objeto