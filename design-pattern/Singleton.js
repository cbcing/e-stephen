/**
 * 单例模式
 * 单体模式：一个用来划分命名空间并将一批属性和方法组织在一起的对象，如果它可以被实例化，那么它只能被实例化一次
 */

// 单例模式
var Singleton = function (name = null) {
    this.name = name;
}

Singleton.prototype.getName = function () {
    return this.name;
}

var count = 1;
// 获取实例对象
function getInstance (name) {
    var instance = null;
    console.log(count);
    console.log(this.instance);
    console.log(!this.instance);
    // 这里的instance只实例一次
    if (!this.instance) {
        this.instance = new Singleton(name);
    }
    return this.instance;
}

// 测试
const objA = getInstance("erHa");
console.log(objA.getName());    // erHa
count++;
const objB = getInstance("siJia");
console.log(objB.getName());    // erHa
count++;
const objC = getInstance("saMo");
console.log(objC.getName());    // erHa

console.log(objA === objB);     // true