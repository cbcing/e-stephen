
// 高阶函数：操作函数的函数，接收一个或多个函数作为参数，并返回一个新函数

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