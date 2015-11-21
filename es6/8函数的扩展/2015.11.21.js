/* ES6 函数  */

// @1 函数参数的默认值
function sayHello(x, y = 'World'){
    console.log('say hello to ' + x + ' & ' + y);
}

sayHello('dream');
sayHello('dream','apple');
console.log('----------');

// @2 参数默认值的位置

// function sayHi(x = 'a', y){
//   console.log('say hi to ' + x + ' & ' + y);
// }

function sayHi(x, y = 'a'){
    console.log('say hi to ' + x + ' & ' + y);
}

sayHi();
sayHi('dream');
sayHi('dream', 'apple');
console.log('----------');

//@3 函数的length属性

console.log((function(x, y){}).length);
console.log((function(x, y = 'default'){}).length);
console.log((function(...args){}).length);
console.log('----------');

// @4 作用域 先是函数作用域，然后是全局作用域

// let x = 1;
// let y = 9;

// function sayWhat(x, y = x){
//   console.log('say what to ' + x + ' & ' + y);
// }


// sayWhat();
// sayWhat(2);
// sayWhat(1,2);

// let x = 1;

// function f(y = x) {
//   let x = 2;
//   console.log(y);
// }

// f()

var x = 1;

function f(x, y = x) {
    console.log(y);
}

f(); // 有问题？

let name = 'dreamapple';

function sayThanks(x = () => name){
    let name = 'happy';
    let y = x;
    console.log(y);
    console.log(y());
}

sayThanks();

function throwErrorIfMissing(){
    throw new Error('参数缺失！');
}

let foo = (x = throwErrorIfMissing()) => x;

console.log(foo(1));

console.log('----------');

// 2

// @ rest参数

function sum(...args){
    let sum = 0;
    // of 循环
    for(let val of args){
        sum += val;
    }

    return sum;
}

console.log(sum(1,2,3));

function copy(array, ...args){
    array = [];
    args.forEach(function(arg){
        array.push(arg);
        console.log(arg);
    })
    return array;
}

let array = [];
array = copy(array, 1,2,3);
console.log(array);

// 3











// 3 扩展运算符

console.log(...[1,2,3]);
console.log(1,...[1,2,3],3);

function copy(array, ...args){
    array.push(...args);
    console.log(array);
}
let array = [];
copy(array,1,2,3,4);

let numbers = [1,2,3];
console.log(Math.max(...numbers));
// @数组的合并

let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = [];

// array3 = array2.concat(array1);
// console.log(array3);
array2.push(...array1);
console.log(array2);
// @函数可以返回多个参数值
// @对字符串进行扩展运算

console.log(...'length');

// 5

//  箭头函数

let func = v => v + 1;
console.log(func(1));

let func1 = (x, y) => x + y;
console.log(func1(2,3));

let func2 = (x, y) => ({x: x, y: y});
console.log(func2(2,3));

var handler = {
    id: "123456",

    init: function() {
        document.addEventListener("click",
                event => this.doSomething(event.type), false);
    },

    doSomething: function(type) {
        console.log("Handling " + type  + " for " + this.id);
    }
};

function Timer () {
    this.seconds = 0
    setInterval(() => this.seconds++, 1000)
    // setInterval(function(){
    //   this.seconds++;
    // },1000);
}
// var timer = new Timer()
// console.log(timer);
// setTimeout(() => {console.log(timer);
// console.log(timer.seconds);}, 3100)

// function foo() {
//   console.log('args:', arguments);
//   // setTimeout( (x,y) => {
//   //     console.log("args:", arguments);
//   // },100);
// }

// foo( 2, 4, 6, 8 );

var x = 'dreamapple';
function Person(){
    this.x = 'happ';
    // console.log(this.x);
    setTimeout( () => console.log(this.x+'kl') ,1000)
}

var p = new Person();
// console.log(p.x);
























