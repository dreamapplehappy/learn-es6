// Set & Map

// Set数据结构中不允许有重复的值
// 向Set数据结构中添加元素使用 s.add() 相当于数组的 array.push()
// 计算Set数据结构使用 s.size 相当于数组的 s.length;


let s = new Set();
// 向Set数据结构中添加数据 s.add();
[1,2,4,3,4].map(m => s.add(m));

for(let val of s){
    console.log(val);
}

// 给Set结构传入一个类数组结构的参数，进行初始化

let s1 = new Set([1,2,2,3,4]);
console.log(...s1);

let s2 = new Set([1,2,3,3,3,4,5]);
console.log(s2.size);

//  类似数组的数据结构有一个方法 array.forEach(x => todo)
// Set数据结构的操作方法
// 链式调用

let s3 = new Set();
console.log(...s3);
s3.add(1).add(2).add('1');
console.log(...s3);
s3.delete('1');
console.log(...s3);
s3.clear();
console.log(...s3);
console.log(s3.has('1'));
console.log(s3.delete(1));

// 将Set结构转换为数组
// Array.from() 很实用的一个方法

// method one
function delDup(array){
    return new Array(...new Set(array));
}

function delDup1(array){
    return Array.from(new Set(array));
}

console.log(delDup([1,2,3,3,3]));
console.log(delDup1([1,2,3,3,3]));




// 遍历Set结构

let s = new Set(['red','blue','yellow']);

for(let item of s.keys()){
    console.log('key: ' + item);
}
for(let item of s.values()){
    console.log('value: ' + item);
}
for(let item of s.entries()){
    console.log(item);
}
for(let item of s){
    console.log('-->' + item);
}

console.log(...new Set([1,2,3]));

//数组的map和filter方法

let s1 = new Set([1,2,3,4,5]);
console.log([...s1].map(x => x * 2));
let s2 = new Set([1,2,3,4,5]);
console.log([...s2].filter(x => (x % 2 === 0)));
console.log('---');

// 集合的交，并，差集

let s3 = new Set([2,3,4,5]);
let s4 = new Set([2,4,6,7]);

// 并集
console.log(...new Set([...s3,...s4])); // 还是要注意一点的
// 交集
console.log(...new Set([...s3].filter(x => s4.has(x))));
// 差集
console.log(...new Set([...s3].filter(x => !s4.has(x))));

// Array.form()方法的使用
let s5 = new Set([1,2,3,9]);
console.log(Array.from(s5, val => val * 2));

//WeakSet
let ws = new WeakSet();
let obj = {};
let foo = {};

// WeakSet 不能遍历，没有size属性

ws.add(obj);
ws.add(window);

console.log(ws.has(obj));
console.log(ws.has(foo));

console.log(ws.size,'size');

// forEach((key,value,self) => todo)

console.log(ws.forEach,'forEach');


// WeakSet 最大的一个好处就是存储DOM节点
const foos = new WeakSet()
class Foo {
    constructor() {
        foos.add(this)
    }
    method () {
        if (!foos.has(this)) {
            throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！')
        }
    }
}

// Map数据结构
let map = new Map();

// Map的方法有
// map.set()
// map.get()
// map.has()

let p = {name: 'dreamapple'}

map.set(p,'happy');

console.log(map.has(p));
console.log(map.get(p));

map.delete(p);
console.log(map.has(p));

// Map的构造函数可以接受一个以键值对作为数组元素的数组作为参数

let map1 = new Map([['name','dreamapple'],['age','22']]);
console.log(map1.get('name'));
console.log(map1.get('age'));

// Map 结构对同一个键多次赋值后面的值将覆盖前面的值
map1.set('name','happy');
console.log(map1.get('name'));

// 注意，只有对同一个对象的引用，Map结构才将其视为同一个键。这一点要非常小心。
let a = [1];
map1.set(a, 'hello');
console.log(map1.get(a));

let map = new Map();

map.set(NaN, 123);
console.log(map.get(NaN));

map.set(-0, 123);
console.log(map.get(+0));

// Map实例对象的方法

// map.set() 因为返回的是实例本身所以可以采用链式调用
// map.size

let map = new Map();
map.set('hello','world');
map.set('dreamapple','happy');

console.log(map.size);

// map.delete()
// map.get()
// map.has()
// map.clear()

// map.keys()
// map.values()
// map.entries()
// map.forEach()

// item[0],item[1]
for(let item of map.entries()){
    console.log(item[0] + ' : ' + item[1]);
}

// Map结构快速转换为数组结构
console.log(...map.keys());
console.log(...map.values());
console.log(...map.entries());
console.log(...map);

// 结合数组的map方法、filter方法，可以实现Map的遍历和过滤

console.log([...map].filter(([k,v]) => k === 'hello'));
// 注意array.map()的使用方法
console.log([...map].map(([k,v]) => [k + '.', v + 'l']));

// forEach方法还可以接受第二个参数，用来绑定this。这个非常重要

