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