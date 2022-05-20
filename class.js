'use strict';

// class : template
// object : 객체 
// classes는 ES6부터 추가됨

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name)
console.log(ellie.age)
ellie.speak();

//Getter Setter

class User {
    constructor(firstNmae, lastName, age){
        this.firstNmae = firstNmae;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age
    }

    set age(value){
        // if(value < 0){
        //     throw Error('age can not be negative')
        // }
        this._age = value < 0 ? 0 : value;

        //get set 의 변수가 같다면 무한 루프가 돌기때문에 변수명을 바꿔야한다.
    }
}

const user1 = new User('Steve', 'Job', -1);
const user2 = new User('SeungSoo', 'Nam', 29)
console.log(user1.age);
console.log(user2)
console.log(user2.firstNmae)
console.log(user2.lastName)
// 상속 과 다양성

class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return this.width * this.height;
    }
}
class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        console.log('△');
    }

    getArea(){
        return (this.width * this.height) / 2
    }
    
    toString(){
        retun `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle (20, 20, 'red');
console.log(triangle.getArea());

//instance of
//비교 할 수 있다?