/**
 * 1、let const
 */

 // es6 以前
 // es5只有全局作用域和函数作用域
 var name = "bestName";
while (true) {
    var name = "notBestName";
    console.log(name);  // notBestName
    break;
}
console.log(name);      // notBestName

// es6
// let是JavaScript新增了块级作用域，用它所声明的变量，只在let命令所在的代码块内有效
var es6Name = "es6Name";
while (true) {
    let es6Name = "es6NameHere";
    console.log(es6Name);   // es6NameHere
    break;
}
console.log(es6Name);       // es6Name

// const变量为常量
const pi = Math.PI;
console.log(pi);        // 3.141592653589793

/**
 * 2. class extends super
 */

class Animal {
    constructor () {
        this.type = "Animal";
    }
    say (word) {
        console.log(this.type + " say " + word);
    }
}

let animal = new Animal();
animal.say("Hahaha.");          // Animal say Hahaha.

class Dog extends Animal{
    constructor () {
        super();
        this.type = "Dog";
    }
}

let erHa = new Dog();
erHa.say("wangwangwang.");      // Dog say wangwangwang.

/**
 * 3. 模版字符串
 */

 // es5
 var stres5 = "es5";
 console.log("This is " + stres5);      // This is es5

 // es6
 const stres6 = "es6";
 console.log(`This is ${stres6}`);      // This is es5

 /**
  * 4. 函数
  */
 
// 4.1 函数默认参数
function add(x = 100, y = 100) {
    return x + y;
}
console.log(add());     // 200
console.log(add(1, 2)); // 3

// 4.2 箭头函数
var funcName = (params) => params + 2; // 单个参数
console.log(funcName(2)); // 4
var sum = (x = 123, y = 321) => x + y; // 两个参数
console.log(sum());     // 444
console.log(sum(3, 4)); // 7
var fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(fullName('David', 'Chen'));     // David Chen
var multSum = (param1, param2, ...params) => {  // 多个参数
    var i = 0;
    var sum = param1 + param2;
    for (i = 0; i < params.length; i++) {
        sum += params[i];
    }
    return sum;
}
console.log(multSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55