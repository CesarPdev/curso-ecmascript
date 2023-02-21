// Con ES12 se incorporan los getters y setters privados -> que viven sólo dentro de la clase

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    #speak() { //Al agregarle el # hacemos este método privado
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}!`;
    }
    //método getter
    get #uAge() { // En este caso volvemos el método uAge privado con #
        return this.age;
    }
    //método setter
    set #uAge(n) { // Tanto en el getter como en el setter debemos poner el # para que sea privado
        this.age = n;
    }
};

const usr1 = new User('Cesar', 41);
console.log(usr1.uAge);