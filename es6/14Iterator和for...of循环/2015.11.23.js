// Iterator 和 for..of 循环

function makeIterator(array){
    var index = 0;
    return {
        next: function(){
            return index < array.length
                ? {value: array[index++], done: false}
                : {value: undefined, done: true};
        }
    }
}

let iterator = makeIterator([1,2,3]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


let array = ['a','b','c'];
// Symbol.iterator 本身是一个表达式
console.log(Symbol.iterator);
let iter = array[Symbol.iterator]();
console.log(iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// 如何自己手动的为一个对象添加iterator接口
let Person = {
    data: ['hello','world'],
    [Symbol.iterator](){
        const self = this;
        let index = 0;
        return {
            next: function(){
                if(index < self.data.length){
                    return {
                        value: self.data[index++],
                        done: false
                    }
                }
                else{
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        };
    }
};

for(let p of Person){
    console.log(p);
}

let arrayLike = {
    0: 'a',
    1: 'b',
    2: '3',
    length: 3,
    [Symbol.iterator]: [][Symbol.iterator]
};

for(let item of arrayLike){
    console.log(item);
}

