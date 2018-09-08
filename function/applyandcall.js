// call()和apply()的作用十分相似，只是参数类型上的差别，以适应不同的使用场景。
// 它们都是为了改变函数运行时的 context（上下文）而存在的，再说的直白一点，就是为了改变函数内部 this 的指向。

// test1
function Animal (name, food) {
    this.name = name;
    this.food = food;
    this.say = function () {
        console.log(this.name + " likes " + this.food  + '.')
    }
}

function Dog (name, food) {
    // 这个this在rabbit函数里指的是未来将要实例化这个函数的对象，当声明了Judy的时候，这个this指的就是Judy。
    // 除了第一个参数，后面所有的参数都是传给父函数本身使用的参数。
    Animal.call(this, name, food);
}

var erHa = new Dog("erGo", "Gouliang"); // erGo likes Gouliang.

console.log(erHa.say());


// test2
function Fruits() {}

Fruits.prototype = {
    color: "red",
    say: function () {
        console.log("My color is " + this.color);
    }
}

var apple = new Fruits;
console.log(apple.say());       // My color is red

banana = {
    color: "yellow",
    say: function () {
        console.log("I m banana.");
    }
}

console.log(apple.say.call(banana));    // My color is yellow
console.log(apple.say.apply(banana));   // My color is yellow
console.log(banana.say());  // I m banana.
