// Array destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits; // Asigna a las variables a y b los valores 1 y 2 del array
console.log(a, b); // Se puede tomar directamente los valores asignados a las variables...
console.log(a, fruits[1]); //... o se puede ir directamente al valor de una posición específica del array

//Object destructuring

let user = { userName: 'Cesar', age: 41 };
let { userName, age } = user;
console.log(userName, age); // Se puede tomar directamente los valores asignados a las variables...
console.log(userName, user.age); //... o se puede ir directamente al valor de un atributo del objeto

// Spread operator

let person = { name: 'Cesar', age: 41};
let country = 'MX';

let data = { ...person, country}; // de esta manera podemos agregar atributos a un objeto. En este caso data tendrá todos los atributos de person y el atributo country desde la variable country

console.log(data);

let moreData = { id:1, ...person, country}; // de esta manera podemos agregar atributos a un objeto. En este caso moreData tendrá el atributo id que le pasamos, todos los atributos de person y el atributo country

console.log(moreData);

// rest

function sum(num, ...values) { // Esta funcion sumará o concatenará el parámetro num y el 'array' values
    console.log(values); // acá mostramos el array values
    console.log(num + values[0]); // acá mostramos el resultado de num + el array values
    return num + values[0]; // acá retornamos la suma (o concatenación) de num + el primer elemento del array values
}

sum(1, 2, 3, 4); // en este ejemplo num = 1 y values = [2, 3, 4]