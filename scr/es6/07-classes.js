/* Para declarar una clase, lo hacemos de la siguiente manera
class User {};*/

/* Para instanciar la clase, lo podemos hacer de la siguiente manera
const newUser = new User();*/

class User { // Declaro la clase
    //métodos
    greeting() { // Declaro uno o más métodos
        return 'Hello!';
    }
};

const user = new User; // Instancio la clase con un objeto nuevo
console.log(user.greeting()); // Llamo al método de esa clase

// Método constructor

class User {
    constructor() {
        console.log('Nuevo Usuario');
    }
    greeting() { // Declaro uno o más métodos
        return 'Hello!';
    }
};

const usuario = new User();

// Uso del elemento this

class User {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}!`;
    }
};

const ana = new User('Ana');
console.log(ana.greeting());

// getters y setters

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}!`;
    }
    //método getter
    get uAge() {
        return this.age;
    }
    //método setter
    set uAge(n) {
        this.age = n;
    }
};

const usr1 = new User('Cesar', 41);
console.log(usr1.uAge);