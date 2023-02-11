// Desde ES8 podemos 'rellenar' un string con un padding según necesitemos
// Por ejemplo sea el caso de un string que tiene 5 caracteres (Hello), y queremos anteponerle un _ al inicio

const string = 'Hello';

console.log(string.padStart(6, '_'));

// Así mismo, podemos agregar caracteres al final de la siguiente manera

console.log(string.padEnd(6, '_'));

// Esto nos serviría por ejemplo si tenemos que tener un String con una cantidad específica de caracteres