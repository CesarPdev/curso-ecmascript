// La forma típica de encadenar strings en ES5 es
var hello = 'Hello';
var world = 'World';
var epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);

//A partir de ES6 se pueden usar los Template Literal de la siguiente manera

let epicPhrase2 = `${hello} ${world}!`; // en este ejemplo usamos las mismas var declaradas al inicio
console.log(epicPhrase2);

//Hasta ES5 para hacer un párrafo multilínea lo hacíamos de la siguiente manera

let lorem = 'esto es un string \n' + 'esta es la segunda línea del string';
console.log(lorem);

//Con ES6 también se pueden agregar multilíneas de esta manera

let lorem2 = `Esta es una línea
Esta es la segunda línea
Y esta es la tercera
`;
console.log(lorem2);