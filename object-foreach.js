/**
 * JavaScript 遍历对象
 */

 const objHere = {
     name: "david",
     age: 24,
     height: 175,
     weight: 65,
     tech: ["JavaScript", "Java", "Database"],
     say: function() {
         console.log("hello.");
     },
     body: {
        hand: "hand",
        foot: "foot"
     }
 };

 // 方法1
 // Object.keys()
 console.log("方法1");
 Object.keys(objHere).forEach(function(key){    // 写法1
     console.log(`${key} ${objHere[key]}`);
 });
 Object.keys(objHere).forEach((key) => console.log(`${key} ${objHere[key]}`));  // 写法2

 // 方法2
 // for in
 console.log("方法2");
for (let i in objHere) {
    console.log(`${i} ${objHere[i]}`);
}

// 方法3
// Object.getOwnPropertyNames(obj)
console.log("方法3");
Object.getOwnPropertyNames(objHere).forEach((key) => console.log(`${key} ${objHere[key]}`));

// 方法4
// Reflect.ownKeys(obj)
console.log("方法4");
Reflect.ownKeys(objHere).forEach((key) => console.log(`${key} ${objHere[key]}`));