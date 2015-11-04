//R1 属性的简洁表示法

//R1.1
var name = 'dreamapple';
var person = {name};

console.log(person);

//R1.2
var setDefault = function(name, age){
    return {name, age};
};
console.log(setDefault('dreamapple', 20));

// R1.3
var obj = {
    getAge() {
        return 18;
    }
};
console.log(obj.getAge());

// R1.4 (TODO)
var Person = {

    name: '张三',

    //等同于birth: birth
    birth: '1992-12-29',

    // 等同于hello: function ()...
    hello() { console.log('我的名字是', this.name); }

};

// R1.5
function getPoint(){
    var x = 1;
    var y = 2;
    return {x, y};
}
console.log(getPoint());


