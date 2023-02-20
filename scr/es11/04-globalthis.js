// Hay ciertas variables de entorno que son lo mismo pero según desde donde se acceda pueden llamarse distinto

console.log(window); // navegador
console.log(global); // node
console.log(selft); // webworker

// Desde ES11 podemos utilizar el método globalThis que unifica los métodos anteriores y facilita el acceso según dónde se ejecute

console.log(globalThis);