class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    
    sayHello(name) {
        console.log(`Hello ${name}`);
    }

    static sayHello2(name) {
        console.log(`Hello ${name}`);
    }
}

let leonan = new Person('Luiz', 32, 1.78);
console.log(leonan);
Person.sayHello2('Leonan')
// leonan.name = 'Luiz';
// leonan.age = 32;
// leonan.height = 1.78;
// console.log(leonan);
// leonan.sayHello('Leonan');
// leonan.sayHello(leonan.name);