// Con el método fromentries podremos crear un objeto a partir de un array de arrays

const entries = new Map([["name", "Cesar"], ["age", 41]]);
console.log(entries);
console.log(Object.fromEntries(entries));