// Symbol  第七种数据类型
// 前六中分别是：undefined,null,boolean,string,number,object

let s = Symbol();
console.log(typeof s);

let s1 = Symbol();
let s2 = Symbol();

console.log(s1 === s2);

let s3 = Symbol('s3 symbol');
let s4 = Symbol('s4 symbol');

console.log(s3 === s4);

console.log(s3.toString());
console.log(s4.toString());

// 如果是同一个标识符，还是标记为不是同一个标识符
let s5 = Symbol('s5 symbol');
let s6 = Symbol('s5 symbol');

console.log(s5 === s6);
console.log(s5.toString());
console.log(s6.toString());

// Symbol值可以显式转为字符串
let str = String(s5);
console.log(str,'symbol -> str');

// Symbol值也可以转为布尔值，但是不能转为数值

let bool = Boolean(s1);
console.log(bool);

var mySymbol = Symbol();
// 第一种写法
var a = {};
a[mySymbol] = 'hello';
// 第二种写法
var b = {
    [mySymbol]: 'hello'
};
// 第三种写法
// Object.defineProperty(对象, 属性名, 值)
var c = {};
Object.defineProperty(c, mySymbol, {value: 'hello'});

console.log(a[mySymbol]);
console.log(b[mySymbol]);
console.log(c[mySymbol]);
// 注意，Symbol值作为对象属性名时，不能用点运算符。

var s = Symbol();
var a = {};
a.s = 'world';
console.log(a[s], '<- a[s]');
console.log(a.s);

let obj = {
    [s](a){
        console.log(a);
    }
}

obj[s]('hello world');

// 还有一点需要注意，Symbol值作为属性名时，该属性还是公开属性，不是私有属性。
let obj1 = {};
let s2 = Symbol('a');
let s3 = Symbol.for('b');

obj1[s2] = 'hello';
obj1[s3] = 'world';

let allSymbols = Object.getOwnPropertySymbols(obj1);
console.log(allSymbols);

var obj = {};
var a = Symbol('a');
var b = Symbol.for('b');

obj[a] = 'Hello';
obj[b] = 'World';

var objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols);

let obj1 = {
    [Symbol('hello')]: 'hello',
    get: 'get',
    set: 'set'
};
console.log(Reflect.ownKeys(obj1));

let size = Symbol('size');

class Collection{
    constructor(){
        this[size] = 0
    }

    add(item){
        this[this[size]] = item;
        this[size]++;
    }

    static sizeOf(instance){
        return instance[size]
    }
}

let c = new Collection();
c.add(1);

console.log(Collection.sizeOf(c));

console.log(Object.keys(c), '<- keys');
console.log(Object.getOwnPropertyNames(c), '<- name');
console.log(Object.getOwnPropertySymbols(c), '<- symbol');



let s1 = Symbol.for('a');
let s2 = Symbol.for('b');
let s3 = Symbol('c');
let s4 = Symbol.for('a');
let s5 = Symbol('c');

console.log(s1 === s4);
console.log(s3 === s5);

console.log(Symbol.keyFor(s1));
console.log(Symbol.keyFor(s4));


// 内置的Symbol值

// 1 Symbol.hasInstance

class A {
}
let a = new A();
console.log(a instanceof A);

class B {
    [Symbol.hasInstance](ins){
        return ins instanceof Array;
    }
}
let b = new B();
console.log(b instanceof B);

let arr1 = [1,2];
console.log([3,4].concat(arr1,9));


let arr2 = [1,2];
console.log(arr2[Symbol.isConcatSpreadable]);
arr2[Symbol.isConcatSpreadable] = false;
console.log([3,4].concat(arr2,9));
