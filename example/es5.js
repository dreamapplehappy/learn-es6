"use strict";

var a = [];

var _loop = function (_i) {
	a[_i] = function () {
		console.log(_i);
	};
};

for (var _i = 0; _i < 10; _i++) {
	_loop(_i);
}
a[6]();
console.log(i);
