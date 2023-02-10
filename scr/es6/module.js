// Creamos un módulo que pueda ser importado desde otros archivos

const helloModules = () => { // En este caso creamos una función con arrow
    console.log('Hello World from module!');
}

export default helloModules; // Exportamos la función para que esté disponible en el resto del proyecto

/* Cabe agregar que para que nuestro proyecto acepte exportación e importación de código, debemos configurarlo
en el archivo package.json agregando la línea
"type": "module" */