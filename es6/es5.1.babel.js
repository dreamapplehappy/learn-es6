//{
//    var a = 1;
//    let b = 2;
//}
//console.log(a);
//console.log(b);

//var a = [];
//
//for(let i = 0; i < 10; i++){
//    a[i] = function(){
//        console.log(i);
//    }
//}
//
//a[6]();

//var ul = document.querySelector('#ul');
//var li = ul.children;
//
//function helper(n){
//    return function(){
//        alert(n);
//    }
//}
//
//for(let i = 0; i < li.length; i++){
//    li[i].onclick = helper(i);
//}

/* 暂时性死区 不存在变量提升 */

//var a = 'welcome';
//
//function try_let(){
//    'use strict'
//    //a = 'hello';
//    console.log(a);
//    let a = 'a';
//}
//try_let();

//function bar(x=y, y=2){
//    return [x, y];
//}
//console.log(bar());
//
//var tmp = new Date();
//
//function f(){
//    console.log(tmp);
//    if (false){
//        var tmp = "hello world";
//    }
//}
//
//f()

//function f1() {
//    let n = 5;
//    if (true) {
//        let n = 10;
//    }
//    console.log(n); // 5
//}
//
//f1();

//function f() { console.log('I am outside!'); }
//(function () {
//    if(false) {
//        // 重复声明一次函数f
//        function f() { console.log('I am inside!'); }
//    }
//
//    f();
//}());

//const foo = {};
//foo.prop = 123;
//
//console.log(foo.prop);
//// 123
//
////foo = {}

//const foo = Object.freeze({});
//foo.prop = 123;
//console.log(foo.prop);

//import {App} from './constant.js';
//
//console.log(App);

'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _constants = require('constants');

var constants = _interopRequireWildcard(_constants);

console.log(constants.A); // 1
console.log(constants.B);
