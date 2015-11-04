function* HelloGenerator() {
    yield 'Hello';
    yield 'World';

    return 'Welcome!';
}

var hg = new HelloGenerator();

console.log(hg.next());
console.log(hg.next());
console.log(hg.next());
console.log(hg.next());
