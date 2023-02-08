// Forma típica de declarar una funci{on en ES5
function square(num) {
    return num * num;
}

// Forma nueva de declarar funciones en ES6 => arrow functions

const cuadrado = (num) => { //se puede usar const, let o var. Pero siendo una función lo recomendable es usar const
    return num * num;
}

// Aún más simplificado y amigable se puede declarar lo mismo de la siguiente manera

const square = num => num * num; //esto es una función con el return implícito

console.log(square(3)); //para ver el resultado de nuestra función