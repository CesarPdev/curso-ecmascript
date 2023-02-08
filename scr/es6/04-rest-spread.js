// Array destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits; // Asigna a las variables a y b los valores 1 y 2 del array
console.log(a, b); // Se puede tomar directamente los valores asignados a las variables...
console.log(a, fruits[1]); //... o se puede ir directamente al valor de una posición específica del array

//Object destructuring

let user = { userName: 'Cesar', age:41 };
let { userName, age } = user;
console.log(userName, age); // Se puede tomar directamente los valores asignados a las variables...
console.log(userName, user.age); //... o se puede ir directamente al valor de un atributo del objeto