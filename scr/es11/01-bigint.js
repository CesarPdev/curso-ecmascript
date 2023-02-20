// Tradicionalmente para representar un nro grande se ponía una n al final para indicar el manejo de ese tipo de dato

const aBigNumber = 23480983459213n;

// con ES11 ya podemos representarlo de la siguiente manera:

const anotherBigNumber = BigInt(23480983459213);

console.log(aBigNumber);
console.log(anotherBigNumber);

// Si bien en consola no se nota diferencia, es una forma más apropiada para el manejo de números grande en JS