// Todo el concepto de lo que es un regex se verá en otro curso
// Pero a partir de ES9 se incorpora una forma más amigable de manejar este concepto

const regex = /(\d{4})-(\d{2})-(\d{2})/; // Acá definimos el 'formato' que debería tener una fecha

const matchers = regex.exec('2023-02-10'); // Acá verificamos que el valor que le pasamos tenga ese formato fecha

console.table(matchers); // Acá imprimimos en formato tabla los valores obtenidos