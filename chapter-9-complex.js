/**
 * JavaScript中的类牵扯三种不同的对象
 * 构造函数对象/原型对象/实例对象
 * 
 * 
 * JavaScript中定义类的步骤：
 * 1、定义一个构造函数，设置初始化新对象的实例属性
 * 2、给构造函数的prototype对象定义实例的方法
 * 3、给构造函数定义类字段和类属性
 */

/**
 * 用于构造Complex类的构造函数
 */
function Complex(real, imaginary) {
    if (isNaN(real) || isNaN(imaginary)) {
        throw new TypeError();
    }
    
    //定义类字段（如果属性值是函数的话就是类方法）
    this.r = real;     
    this.i = imaginary;
    this.print = function() {
        return "This is Complex.";
    }
}

//定义实例方法
Complex.prototype.add = function(that) {
    return new Complex(this.r + that.r, this.i + that.i);
};

Complex.prototype.mul = function(that) {
    return new Complex(this.r * that.r - this.i * that.i, this.i * that.i + this.r * that.r);
};

Complex.prototype.mag = function() {
    return Math.sqrt(this.r * this.r + this.i + this.i);
};

Complex.prototype.neg = function() {
    return new Complex(-this.r, -this.i);
};

Complex.prototype.toString = function() {
    return "{" + this.r + "," + this.i + "}";
};

Complex.prototype.equals = function(that) {     //检测当前复数对象是否和另外一个复数值相等
    return that != null && that.constructor === Complex && this.r === that.r && this.i === that.i;
};

Complex.prototype.show = 123;

/**
 * JavaScript通过给原型对象添加新方法来扩充JavaScript类
 */
// 返回当前复数的共轭复数
Complex.prototype.conj = function() {
    return new Complex(this.r , -this.i)
};

//预定义一些对附属运算有帮助的类字段
//命名全部为大些，表明是一个常量
Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);
Complex.CONSTANT = "CONSTANT.";

//这个类方法将由实例对象的toString方法返回的字符串格式解析为一个Complex对象
//或者抛出一个类型错误异常
Complex.parse = function(s) {
    try {
        var m = Complex._format.exec(s);
    } catch {
        throw new TypeError("Can't parse '" + s + "' as a complex number.");
    }
};

//定义类的“私有”字段
//下划线前缀表明它是类内部使用的，而不是属于类的共有的API部分
Complex._format = /^\{([^,]+),([^}]+)\}$/;

var c = new Complex(2, 3);
var d = new Complex(c.i, c.r);
console.log(c.add(d).toString());  //{5, 5}
// Complex.parse(c.toString()).add(c.neg()).equals(Complex.ZERO); //报异常

console.log("================================================")

var others = new Complex(6, 8);
console.log("类变量：r: " + others.r + ", i: " + others.i);
console.log("类方法: print: " + others.print);
console.log("类方法: print(): " + others.print());
console.log("实例变量: show: " + others.show);
console.log("实例方法: add(): " + others.add(new Complex(1, 1)));
console.log(others.ZERO);   //undefined
console.log(Complex.ZERO.add(new Complex(1, 1)));
console.log(Complex.CONSTANT);