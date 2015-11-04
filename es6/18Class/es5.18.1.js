
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

"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function Point(x, y) {
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
};

Object.assign(Point.prototype, {
    toString: function toString() {
        return { x: this.x, y: this.y };
    },
    setPoint: function setPoint(x, y) {
        this.x = x;
        this.y = y;
    }
});

var c = new Point(1, 2);
console.log(c.toString());
