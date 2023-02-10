// las funciones generadoras se caracterizan por definirse como function*

function* iterate(array) {
    for (let value of array) {
        yield value;
    }
};

const it = iterate(['Cesar', 'Adrian', 'Lautaro', 'Ezequiel', 'Alejandro', 'Nicolas']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


// Otro ejemplo sería

function* getId() { //Esta función crea IDs desde el 1 hasta el número que sea
    let lastId = 1;
    while (true) {
        yield lastId++;
    }
}

const id = getId(); // Acá se crea el ID
console.log(id.next().value); // A partir de acá vamos viendo los valores asignados a los IDs
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);