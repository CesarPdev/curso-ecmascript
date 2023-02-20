// Desde ES10 tenemos el método flat que nos permite "aplanar" el
//contenido de arrays anidados. suponiendo que tenemos un array con tres
//niveles de anidamiento como el siguiente:

const array = [1,2,3,4,[1,3,5,6, [1,2,4]]]; //en este ejemplo creamos un array de 3 niveles
console.log(array.flat(2)); //acá aplanamos el contenido del array hasta el 3er nivel (0, 1 y 2)
console.log(array.flat(1)); //acá aplanamos el contenido del array hasta el 2do nivel (0 y 1)

// El método flatMap primero mapea los elementos de un array y luego los aplana

const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v * 2])); //en este ejemplo con flatMap podemos reestructurar el array original 
// construyendo uno nuevo que me devuelva cada valor del array seguido de ese valor * 2