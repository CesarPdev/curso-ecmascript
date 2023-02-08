// Declarando y asignando (inicializando) una variable var
var lastName = 'David';

//Reasignando (reinicializando) una variable var
lastName = 'Oscar';

console.log(lastName);

// Declarando y asignando (inicializando) una variable let
let fruit = 'Apple';

//Reasignando (reinicializando) una variable let
fruit = 'Orange';

console.log(fruit);

// Declarando y asignando (inicializando) una variable const
const animal = 'Cat';

//Reasignando (reinicializando) una variable const
animal = 'Dog';

console.log(animal); //Las variables const no se pueden reasignar (reinicializar)

//Arrow functions => nueva manera de declarar funciones de ES6
//Ejemplo para ver el SCOPE de var let y const
const fruits = () => {
    if(true) {
        var fruit1 = 'Apple'; //el scope de var es la función
        let fruit2 = 'Orange'; //el scope de let es la el bloque if
        const fruit3 = 'Banana'; //el scope de const es el bloque if
    }
    console.log(fruit1);
    console.log(fruit2); //error y detiene el código porque fruit2 no está definido fuera del bloque if
    console.log(fruit3); //error y detiene el código porque fruit3 no está definido fuera del bloque if
}

fruits();
