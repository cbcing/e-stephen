
// 高阶函数：操作函数的函数，接收一个或多个函数作为参数，并返回一个新函数
// 示例1
function not (f) {
    return function () {
        var result = f.apply(this, arguments);
        return !result;
    }
}

var even = function (x) {
    return x % 2 === 0;
}

var odd = not(even);

console.log([1, 1, 3, 5, 5].every(odd));    // true

// 示例2
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