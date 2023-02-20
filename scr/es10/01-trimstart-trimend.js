// Con trimstart y trimend podemos eliminar caracteres al comienzo o al final de un string según sea necesario

const hello = '          Hello World!     ' // Por ejemplo en este string tenemos caracteres vacíos al comienzo y al final
console.log(hello.trimStart()); //De esta manera elimino los espacios al comienzo del string
console.log(hello.trimEnd()); //De esta manera elimino los espacios al final del string
console.log(hello.trimStart().trimEnd()); //De esta manera elimino los espacios al comienzo y al final del string