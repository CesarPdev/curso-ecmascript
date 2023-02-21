// Con ES11 se incorpora la posibilidad de buscar dentro de un string otro string o valor

const regex = /\b(Apple)+\b/g; // Creamos un regex con el valor 'Apple'

const fruit = 'Apple, Banana, Kiwi, Apple, Orange, etc., etc., etc.'; // Luego tenemos un string que incluye una o más veces el valor 'Apple'

for (const match of fruit.matchAll(regex)) {
    console.log(match)
}; // Con macthAll podemos encontrar todas las veces que aparezca el valor buscado