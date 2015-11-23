let arrayLike = {
    '0': 'dream',
    '1': 'apple',
    '2': 'dreamapple',
    'length': 3
};

let map = new Map();
map.set('hello','helloc');
map.set('1','123');

let set = new Set();
set.add(new Object());
set.add(6);

let array = Array.from(arrayLike);
let array1 = Array.from(map);
let array2 = Array.from(set);

console.log(array);
console.log(array1);
console.log(array2);

console.log([...'hello']);

let array3 = Array.from('hello');
console.log(array3);

// 所谓类似数组的对象，本质特征只有一点，即必须有length属性。
// 因此，任何有length属性的对象，都可以通过Array.from方法转为数组，
// 而此时扩展运算符就无法转换。

let array4 = Array.from({length: 3});
console.log(array4);

// Array.from还可以接受第二个参数，
// 作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。

let array5 = Array.from([1,2,3], x => x * x);
console.log(array5);

// 返回数据的类型
function func1(){
    let array = Array.from(arguments, x => typeof x);
    console.log(array);
    return array;
}

func1({},[],NaN);

// Array.of总是返回参数值组成的数组。如果没有参数，就返回一个空数组。

console.log(Array.of(1,2,3));

// [].copyWithin()
// 这里可以做一些小游戏！！！
console.log([1,2,3,4,5].copyWithin(1,0,5))


// [].find() 发现满足条件的第一个元素，然后返回。
let array6 = [-1,1,3,5];

let array7 = array6.find((x) => {
    x = x * x;
    return x > 10
});

console.log(array7);

// [].find(func(value,index,array))
// value: 数组元素的值
// index: 元素的位置
// array: 数组本身

// [].find()里面是有循环的
let array8 = array6.find((value,index,array) => {
    console.log(value,index,array);
    return value > 0;
})

console.log(array8,'I find that.');

// [].findIndex() 与 [].find() 只是返回的值不同

let array9 = array6.findIndex((value,index,array) => {
    console.log(value,index,array);
    return value > 10;
})

console.log(array9,'I find it.');

// [].fill(value,start,end)
// fill方法使用给定值，填充一个数组。
// start 填充的开始位置
// end 填充结束的位置(不包含这个位置)

let array10 = new Array(6);
array10.fill(6);
console.log(array10);

array10.fill(7,0,3);
console.log(array10);

// [].entries() [].keys() [].values()