/**
 * 特性一： 无副作用
 * 副作用： 除了返回值意以外，函数对外部的状态产生了变化
 */
console.log("无副作用");
// 有副作用的函数，
var x = 1;
var y = 2;

var effect = function (z) {
    x = x + 1;
    y = y + 1;
    z = x + y;
    return z;
}

// 无副作用的函数

var x1_1 = 1;
var y1_1 = 2;

var noeffect = function (z) {
    return x1_1 + y1_1 + z;
}

console.log("数据不可变");
/**
 * 特性二：数据不可变
 * 数据不可变指的是一个值一旦被创建，就永远不会发生改变
 */

 // 数组可变
 var x2 = [1, 2, 3, 4];
 console.log(x2);   // [ 1, 2, 3, 4 ]
 x2.push(999);
 console.log(x2);   // // [ 1, 2, 3, 4, 999 ]

 // 对象可变
 var obj2 = {
     num : 1
 }
console.log(obj2.num);  // 1
obj2.num = 2;
console.log(obj2.num);  // 2

// 数组不变
var x2_1 = [1, 2, 3, 4];
var y2_1;
console.log(x2_1);      // [ 1, 2, 3, 4 ]
y2_1 = x2_1.concat([3]);
console.log(x2_1);      // [ 1, 2, 3, 4 ]
console.log(y2_1);      // [ 1, 2, 3, 4, 3 ]

// 对象不变
var obj2_1 = {
    num : 1
}
var objHere2 = Object.assign({}, obj2_1, {num : 2});
console.log(obj2_1);        // { num: 1 }
console.log(objHere2);      // { num: 2 }

console.log("纯函数");
/**
 * 特性三：纯函数
 * 纯函数是一种函数，不会改变程序的外部状态（无副作用），也不会造成数据的可变性。
 * 纯函数输入依赖于输出，相同的输入一定会产生相同的输出。
 */

// 示例
var data = [
    {
        id: 1,
        status: "blue"
    },
    {
        id: 2,
        status: "red"
    }
]

// 此函数没有改变外部状态，数据也没有发生变化
function purefunc(data) {
    return [
        {
            id: 3,
            status: "blank"
        },
        ...data
    ]
}

var otherData = purefunc(data);
console.log(data);          // [ { id: 1, status: 'blue' }, { id: 2, status: 'red' } ]
console.log(otherData);     // [ { id: 3, status: 'blank' }, { id: 1, status: 'blue' }, { id: 2, status: 'red' } ]

console.log("组合函数");
/**
 * 特性四：组合函数（高阶函数）
 * 函数组合指把多个函数通过嵌套的方式，把函数作为入参传入，把函数作为返回值传出，组合成为一个全新的函数，形成管道数据流。
 */

// 示例
function compose(f, g) {
    return function () {
        return f.call(this, g.apply(this, arguments));
    }
}

var square = function (x) {
    return x * x;
}

var sum = function (x, y) {
    return x + y;
}

var squareofsum = compose(square, sum);
console.log(squareofsum(2, 3)); // (2+3)*5=25

console.log("函数柯里化");
/**
 * 特性五：函数柯里化
 * 函数柯里化指把接受多个参数的多参函数转换成每次只接受一个参数的单参函数，并且返回可以接受余下参数的新函数。
 */

// 示例
// 普通函数
function add (x, y) {
    return x + y;
}

// 将上面函数进行函数柯里化
function addKlh (x) {
    return function (y) {
        return x + y;
    }
}
var added = addKlh(3);
console.log(added(4));