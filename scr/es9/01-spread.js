// Desde ES9 podemos usar el concepto de Spread con objetos

const user = { username: 'cesar', age: 41, country: 'AR'}; // A partir de un objeto...
const { username, ...values } = user; // ...podemos separar un elemento de otros

console.log(username); // acá mostramos el elemento 'separado' del objeto original
console.log(values); // acá mostramos el resto de los elementos del objeto