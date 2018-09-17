/**
 * 代理模式
 * 代理是一个对象，它可以用来控制对本体对象的访问，它与本体对象实现了同样的接口
 */

// A对象对B对象说一句话，由C对象代理

// 实例一个B对象
var B = function (name) {
    this.name = name;
}

// 实例一个A对象，包含B对象
var A = function (aObj) {
    this.aObj = aObj;
    this.sayWord = function (word) {
        console.log(`Hi ${aObj.name}, i just want to say ${word}`);
    }
}

// 实例一个C对象（代理对象），包含A对象
var C = function (bObj) {
    this.bObj = bObj
    this.sayWord = function (word) {
        (new A(this.bObj)).sayWord(word);
    }
}

var cObj = new C(new B("heihei"));
cObj.sayWord("i love you.");    // Hi heihei, i just want to say i love you.
