// 在Javascript中，类的实现是基于原型继承机制的
// 鸭式辩型 ———— 弱化对象的类型，强化对象的功能

// 类的所有实例对象都从同一个原型对象上继承属性
// inherit():该函数创建一个继承自她的对象，这样定义了一个原型对象


//该方法返回一个新的“范围对象”
 function range(from, to) {
     var r = inherit(range.methods);

     //这两个属性是非共享的、不可继承的
     r.from = from;
     r.to = to;

     return r;
 }

// 原型对象
range.methods = {
    includes: function(x) {
        return this.from <= x && x <= this.to;
    },
    foreach: function(f) {
        for(var x = Math.ceil(this.from); x <= this.to; x++) {
            f(x);
        }
    },
    toString: function() {
        return "(" + this.from + "..." + this.to + ")";
    }
};

var r = range(1, 3);
r.includes(2);
r.foreach(console.log);
console.log(r);