// Las promesas se refieren a casos de funciones que tienen como parámetro otra función que puede suceder o no

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Oops!');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));

// Debo decir que a la hora de tomar esta clase quedé sin entender casi nada.
//Espero a futuro comprender mejor esto de las promesas...