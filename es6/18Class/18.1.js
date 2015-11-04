/*   Class基本语法   */
//
//class Point{
//    constructor(x,y){
//        this.x = x;
//        this.y = y;
//    }
//
//    toString() {
//        return {x: this.x, y: this.y};
//    }
//
//    setPoint(x,y) {
//        this.x = x;
//        this.y = y;
//    }
//}
//
//var point = new Point(1,3);
//console.log(point);
//console.log(point.toString());
//point.setPoint(2,2);
//console.log(point);

// 2015.11.3

//class Point{
//    constructor(x,y){
//        this.x = x;
//        this.y = y;
//    }
//}
//
//Object.assign(Point.prototype, {
//    toString() {
//        return {x: this.x, y: this.y};
//    },
//    setPoint(x,y) {
//        this.x = x;
//        this.y = y;
//    }
//});
//
//var c = new Point(1,2);
//console.log(c.toString());

// 2015.11.4

// const MyClass = class Me {
//   constructor(name){
//     this.name = name;
//   }

//   getClassName() {
//     return Me.name;
//   }
// }

// var c = new MyClass('dreamapple');
// console.log(c.getClassName());

// 立即执行的类
// let c = new class{
//   constructor(name){
//     this.name = name;
//   }

//   sayHello(){
//     return this.name;
//   }

// }('dreamapple');

// console.log(c.sayHello());

// 不存在变量提升
// let c = new Foo();
// class Foo{}