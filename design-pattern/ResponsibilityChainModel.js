/**
 * 职责链条模式
 * 职责连是由多个不同的对象组成的，发送者是发送请求的对象，而接收者则是链中那些接收这种请求并且对其进行处理或传递的对象。
 */

// 示例：中国移动客服使用指南

function numberOne(num) {
    if (num == 1) {
        console.log("账本服务、查询用户资料以及缴费方法");
    } else {
        return "next";
    }
}

function numberTwo(num) {
    if (num == 2) {
        console.log("操控遥控来电转接");
    } else {
        return "next";
    }
}

function numberThree(num) {
    if (num == 3) {
        console.log("最新服务计划以及手机优惠");
    } else {
        return "next";
    }
}

function numberShift(num) {
    if (num == 4) {
        console.log("重听");
    } else {
        console.log("挂断");
    }
}

// 编写职责链模式的封装构造函数方法
var Chain = function (func) {
    this.func = func;
    this.success = null;
}

// 原型
Chain.prototype = {
    constructor: Chain,
    setNextSuccessor: function (successor) {
        this.successor = successor;
        return this.successor;
    },
    passRequest: function () {
        var ret = this.func.apply(this,arguments);
        if (ret === 'next') {
            return this.successor && this.successor.passRequest.apply(this.successor, arguments);
        }
        return ret;
    }
}

// 将函数封装成职责链节点
var callOne = new Chain(numberOne);
var callTwo = new Chain(numberTwo);
var callThree = new Chain(numberThree);
var callShift = new Chain(numberShift);

// 将节点设置成职责链
callOne.setNextSuccessor(callTwo);
callTwo.setNextSuccessor(callThree);
callThree.setNextSuccessor(callShift);

// 开始请求
callOne.passRequest(1);     // 账本服务、查询用户资料以及缴费方法
callOne.passRequest(2);     // 操控遥控来电转接
callOne.passRequest(3);     // 最新服务计划以及手机优惠
callOne.passRequest(4);     // 重听