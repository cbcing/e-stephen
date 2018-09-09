/**
 * 简单工厂模式
 * 工厂模式是为了解决多个类似对象声明的问题，也就是为了解决实列化对象产生重复的问题。
 * 优点：可以解决多个相似的问题
 * 缺点：无法知道对象的类型
 */

 function createPersion (name, age, sex, height, weight = null) {
    var objHere = new Object();
    // var objHere = {};
    objHere.name = name;
    objHere.age = age;
    objHere.sex = sex;
    objHere.height = height;
    objHere.weight = weight;
    objHere.say = function () {
        console.log("hello. i m " + this.name);
    }
    return objHere;
 }

 var personOne = createPersion("David", 24, "man", "175", "65");
 var personTwo = createPersion("Stephen", 24, "woman", "165", "50");

 Object.keys(personOne).forEach(key => console.log(`${key} ${personOne[key]}`));
 Object.keys(personTwo).forEach(key => console.log(`${key} ${personTwo[key]}`));