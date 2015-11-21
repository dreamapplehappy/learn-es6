class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    toString() {
        return this.x + ' : ' + this.y;
    }
}

class ColorPoint extends Point{
    constructor(x, y, color){
        // console.log(this); // 在子类构造函数内
        super(x,y);
        this.color = color;
    }

    toString(){
        return this.color + ' : ' + super.toString();
    }
}

let cpoint = new ColorPoint(6,6,'black');

console.log(cpoint);
console.log(cpoint.toString());

console.log(ColorPoint.__proto__ === Point);
console.log(ColorPoint.__proto__.prototype === Point.prototype);



