/**
 * JavaScript 闭包
 */

var scope1 = "global scope 1";

function checkscope1 () {
    var scope1 = "local scope 1";
    function f () {
        return scope1;
    }
    return f(); 
}

console.log(checkscope1());     //等价于：console(f());

var scope2 = "global scope 2";

function checkscope2 () {
    var scope2 = "local scope 2";
    function f () {
        return scope2;
    }
    return f;
}

console.log(checkscope2());     //等价于：console(f)

//等价于：console(f());
//JavaScript词法作用域规则：JavaScript函数的执行用到作用域链，这个作用于链是在函数定义时创建的。
//嵌套的函数f()定义在作用于链里面，其中变量scope一定是局部变量，无论在什么时候执行函数f()，这种绑定在执行f()时依然有效果。
console.log(checkscope2()());
//作用域链：f.A0 -> checkscope2.AO -> Global Object(VO)

// ================================================

// 设置函数对象属性
// uniqueInteger.counter = 0;
// 增加其值
// function uniqueInteger() {
//     return uniqueInteger.counter++;
// }

// 使用闭包优化上面代码
var uniqueInteger = (function() {
    var counter = 0;
    var func = function() {
        return counter++;
    }
    return func;
}());