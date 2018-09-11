/**
 * 模块模式
 * 模块模式的思路是为单体模式添加私有变量和私有方法能够减少全局变量的使用
 */

function CustomType() {
    this.name = "David";
};
CustomType.prototype.getName = function () {
    return this.name;
}
var application = (function () {
    // 定义私有
    var privateA = "haha";
    // 定义私有函数
    function A(){};

    // 实例化一个对象后，返回该实例，然后为该实例增加一些公有属性和方法
    var object = new CustomType();

    // 添加公有属性
    object.A = "heihei";
    // 添加公有方法
    object.B = function () {
        return privateA;
    }
    // 返回该对象
    return object;
})();

console.log(application);               // CustomType { name: 'David', A: 'heihei', B: [Function] }
console.log(application.A);
console.log(application.B());
console.log(application.name);
console.log(application.getName());