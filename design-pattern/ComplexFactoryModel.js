/**
 * 复杂工厂模式
 * 定义：将其成员对象的实列化推迟到子类中，子类可以重写父类接口方法以便创建的时候指定自己的对象类型。
 */

// 父类定义（抽象类）
var Person = function (name) {
    this.name = name;
    this.getName = function () {
        return this.name;
    }
}

Person.prototype = {
    constructor: Person,
    sayHello: function () {
        throw new Error("父类是抽象类不能直接调用，需要子类重写该方法");
    }
}

// 实现原型继承
function extend (subClass, supClass) {
    var TempClass = function () {}
    TempClass.prototype = supClass.prototype;
    subClass.prototype = new TempClass();
    subClass.prototype.constructor = subClass;
    subClass.sup = supClass.prototype;
    if (supClass.prototype.constructor === Object.prototype.constructor) {
        supClass.prototype.constructor = supClass;
    }
}

var Chinese = function (name) {
    this.name = name;
    // 继承构造函数父类的属性和方法
    Person.call(this, name);
}
extend(Chinese, Person);

// 子类重写父类方法
Chinese.prototype.sayHello = function () {
    console.log("你好");
}

var xiaoming = new Chinese("xiaoming");
console.log(xiaoming.sayHello());   // 你好
console.log(xiaoming);              // Chinese { name: 'xiaoming', getName: [Function] }

var American = function (name) {
    this.name = name;
    Person.call(this, name);
}
extend(American, Person);
American.prototype.sayHello = function () {
    console.log("Hi man.");
}
var mike = new American("mike");
console.log(mike.sayHello());       // Hi man.
console.log(mike);                  // American { name: 'mike', getName: [Function] }





// others 一些简单测试
console.log(Chinese.prototype.constructor);
/*
{ [Function: Chinese]
  sup:
   Person {
     constructor: [Function: Person],
     sayHello: [Function: sayHello] } }
*/
console.log(American.prototype.constructor);
/*
{ [Function: American]
  sup:
   Person {
     constructor: [Function: Person],
     sayHello: [Function: sayHello] } }
*/
console.log(Chinese.prototype.constructor === American.prototype.constructor); // false

function add (x, y) {
    return x + y;
}
console.log(add.prototype.constructor); // [Function: add]

class A {
    constructor () {
        this.name = "";
    }
    sayHello () {
        throw new Error("父类是抽象类不能直接调用，需要子类重写该方法");
    }
}


// others
class B extends A {
    constructor (name) {
        super();
        this.name = name;
    }
    // 方法重写
    sayHello () {
        console.log("i m b");
    }
}

var objB = new B("bbb");
console.log(objB.sayHello());   // i m b

console.log(A.prototype.constructor);   // [Function: A]
console.log(B.prototype.constructor);   // [Function: B]

class C extends A {
    constructor (name) {
        super();
        this.name = name;
    }
    // 方法重写
    sayHello () {
        console.log("i m c");
    }
}
extend(C, A);
var objC = new C("ccc");
console.log(objC.sayHello());   // i m c
console.log(C.prototype.constructor);   // { [Function: C] sup: A {} }