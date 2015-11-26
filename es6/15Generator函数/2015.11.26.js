// Generator函数

function* welcome(){
    yield 'Hello, ';
    yield 'World';
    return 'end';
}

let w = welcome();

console.log(w.next());
console.log(w.next());
console.log(w.next());
console.log(w.next());

let array = [1,2,[3,4],5,[6,7,8]];

function* show(items){
    let len = items.length;
    for(let i = 0; i < len; i++){
        if(typeof items[i] !== 'number'){
            yield* show(items[i]);
        }
        else{
            console.log(items[i]);
        }
    }
}

let s = show(array);
// console.log(s.next());

// for(let item of s){
//   console.log(item);
// }

function* gen(){
    // TODO
}

let g = gen();

// 遍历器对象本身也有Symbol.iterator方法，执行后返回自身
console.log(g[Symbol.iterator]() === g);

console.log('-----------------------------');

// yield句本身没有返回值，或者说总是返回undefined。
// next方法可以带一个参数，该参数就会被当作上一个yield语句的返回值。

function* func(){
    for(let i = 0; true; i++){
        let flag = yield i;
        if(flag){
            console.log(flag);
            i = -1;
        }
    }
}

let f = func();

console.log(f.next(3));
console.log(f.next(1));
console.log(f.next(2));
console.log(f.next(4));

// Generator.prototype.throw()

function* gen1(){
    while(true){
        try{
            yield;
        }
        catch(e){
            if(e){
                console.log('内部捕获错误 ' + e);
            }
        }
    }
}

let f1 = gen1();
f1.next();

try{
    f1.throw('a');
    f1.throw('b');
    throw(123);
}
catch(e){
    console.log('外部捕获错误 ' + e);
}

function* func1(){
    yield console.log('hello');
    yield console.log('world');
}

let f1 = func1();

try{
    // throw('error');
    f1.throw(1);
}catch(e){
    f1.next();
    f1.next();
}

// Generator函数的错误也可以被外部捕获到
function* func2(){
    var x = yield 6;
    var y = x.toUpperCase();
    yield y;
    return 0;
}

let f2 = func2();
console.log(f2.next());

try{
    f2.next();
}catch(e){
    console.log('发现错误：',e);
}

function* func3(){
    yield 1;
    yield 2;
    yield 3;
}

let f3 = func3();

console.log(f3.next());
console.log(f3.return(6));
console.log(f3.next());

// 如果Generator函数内部有try...finally代码块;
// 那么return方法会推迟到finally代码块执行完再执行

function* func4(){
    yield 1;
    try{
        yield 2;
    }
    finally{
        yield 3;
    }
}

let f4 = func4();
console.log('-----------------');
console.log(f4.next());
console.log(f4.return(100));
console.log(f4.next());

// 实际上，任何数据结构只要有Iterator接口，就可以被yield*遍历。

function* func5(){
    yield* [90,2,3];
}

let f5 = func5();

console.log(f5.next());

