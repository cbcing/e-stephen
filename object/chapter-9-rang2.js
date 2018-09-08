

//构造函数，用于初始化一个对象
function Range(from, to) {
    this.from = from;
    this.to = to;
}

// JavaScript私有状态定义
// 这些值保存在闭包中
// function Range(from, to) {
//     this.from = function () {
//         return from;
//     }
//     this.to = function () {
//         return to;
//     }
// }

//构造函数Range()的prototype属性被用作使用构造函数Range()创建的对象的原型，所有使用Range()构造的对象都继承自这个对象
Range.prototype = {

    constructor: Range,     //显示这是构造函数的原型引用

    includes: function(x) {
        return this.from <= x && x <= this.to;
    },
    foreach: function(f) {
        for (var x = Math.ceil(this.from); x <= this.to; x++) {
            f(x);
        }
    },
    toString: function() {
        return "(" + this.from + "..." + this.to + ")";
    }
}

console.log("Start new object.")
var r = new Range(1, 3);        //使用new创建对象

console.log("判断某个对象是否属于某个类时：")
var isClass = r instanceof Range;
console.log(isClass); //resule: true

console.log("includes.")
r.includes(2);

console.log("foreach")
r.foreach(console.log);

// console.log(r);
// var rp = r.prototype;
// var rpc = rp.constructor;       //报错：无法读取原型对象的constructor属性，没有定义
// console.log(r === rpc);


// =====================

// 任何JavaScript函数都可以用作构造函数，调用构造函数需要用到其prototype属性，
// 此属性的值是一个对象，该对象又一个constructor属性，该属性的值是一个函数对象。
var F = function() {};      //F：函数对象
var p = F.prototype;        //p：F相关联的原型对象
var c = p.constructor;      //c：与原型相关联的函数
console.log(c === F);       //true