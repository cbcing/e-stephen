/**
 * 数组遍历方法
 */

 const arrayAHere = [1, 2, 3, "red", "blue", "yellow"];

// 方法1
// foreach
console.log("方法1");
arrayAHere.forEach((value, index) => console.log(`${value} ${index}`)); // 第一个参数为值，第二个参数为数组下标

// 方法2
// for in
console.log("方法2");
for (let i in arrayAHere) {
    console.log(console.log(`${i} ${arrayAHere[i]}`));
}

// 方法3
// for of
console.log("方法3");
for (let i of arrayAHere) {
    console.log(console.log(`${i} ${arrayAHere[i]}`));
}
