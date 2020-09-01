class Polygon {
    constructor(width, height) {
        this.name = 'Polygon';
        this.width = width;
        this.height = height;
    }

    sayMyType() {
        console.log(`This is a ${this.name} with width = ${this.width} and height = ${this.height}`);
    }
}

class Square extends Polygon {
    constructor(value) {
        super(value, value);
        this.name = 'Square';
    }

    getArea() {
        return this.width * this.height;
    }
}

const polygon = new Polygon(10, 30);
const square = new Square(10);
console.log(square);
square.sayMyType();
console.log(square.getArea());
console.log(polygon);
polygon.sayMyType();
