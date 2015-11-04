var Person = function(name, age){
  this.name = name || 'dreamapple';
  this.age = age || 20;

  this.sayWhat = sayWhat;

  function sayWhat(){
      console.log('Say What');
  }
};

Person.prototype.sayHello = function(){
  console.log('Welcome to here');
};
Person.prototype.sayHi = function(){
    console.log('Welcome to here, hi');
};

var People = function(){};
People.prototype = new Person();

var p = new People();

console.log(Person);
console.log('\n');
console.log(Person.prototype);
console.log('\n');
console.log(p);
console.log('\n');
console.log(p.__proto__);
console.log('\n');

p.sayHi();
p.sayHello();
p.sayWhat();