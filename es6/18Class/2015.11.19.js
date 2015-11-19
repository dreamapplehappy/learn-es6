// @1
// function Point(x, y){
//   this.x = x || 0;
//   this.y = y || 0;
// }

// Point.prototype.toString = function(){
//   return this.x + ':' + this.y;
// }

// var point = new Point(1,9);

// console.log(point);
// console.log(point.toString());

/* --------------------------------------- */

//let getValue = 'toValue';
//
//class Point{
//    constructor(x,y){
//        this.x = x;
//        this.y = y;
//    }
//    toString(){
//        return this.x + " : " + this.y;
//    }
//    [getValue](){
//        /* TODO x,y是数字 */
//        return this.x * this.y;
//    }
//}
//
///* 给对象添加属性 Object.assign()  */
//Object.assign(Point.prototype,{
//    sayHello(){
//        console.log('dreamapple, hello!');
//    }
//})
//
//var point = new Point(3, 4);
//console.log(point);
//console.log(point.sayHello())
//console.log(point.toString());
//console.log(point.constructor === Point.prototype.constructor);
//console.log(point.toString === Point.prototype.toString);
//console.log(point.constructor === Point);
///* Object.keys()列举对象中的键值对  */
//console.log(Object.keys(Point.prototype));
//console.log(Object.getOwnPropertyNames(Point.prototype));


//class Person{
//    constructor(){
//        return Object.create(null);
//    }
//}
//
//console.log(new Person() instanceof Person, '判断');

class Point{
    constructor(x, y, center){
        this.x = x;
        this.y = y;
        this.center = center;
    }

    toString(){
        return this.x + " : " + this.y;
    }
}

let point = new Point();

console.log(point.hasOwnProperty('x'));
console.log(point.hasOwnProperty('y'));
console.log(point.hasOwnProperty('toString'));
console.log(point.__proto__);
console.log(point.__proto__.toString);
console.log(point.__proto__.hasOwnProperty('toString'));

/* 对象实例的__proto__属性是可以为类添加方法的 慎用！  */

point.__proto__.sayHello = function(){
    console.log('hello, I\'m a point at ' + this.x + ':' + this.y);
}

let point1 = new Point(2,2);
point1.sayHello();

console.log(Point.name);


const Point = class P{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    getName(){
        console.log(this);
    }
};

console.log(Point.name);
let point = new Point();

let person = new class{
    constructor(name){
        this.name = name;
    }

    getName(){
        console.log(this.name);
    }
}('dreamapple');

person.getName();

let hello = new Hello()

class Hello{

}

