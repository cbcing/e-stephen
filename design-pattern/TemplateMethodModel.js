/**
 * 模版方法模式
 * 模版方法由抽象父类和具体实现细节的子类组成
 */

// 示例：招聘流程

var Interview = function () {};

Interview.prototype = {
    constructor: Interview,
    writtenTest: function () {
        // console.log("笔试");
        throw new Error("父类是抽象类不能直接调用，需要子类重写该方法");
    },
    interviewOne: function () {
        // console.log("一面");
        throw new Error("父类是抽象类不能直接调用，需要子类重写该方法");
    },
    interviewTwo: function () {
        // console.log("二面");
        throw new Error("父类是抽象类不能直接调用，需要子类重写该方法");
    },
    interviewThree: function () {
        // console.log("三面");
        throw new Error("父类是抽象类不能直接调用，需要子类重写该方法");
    },
    waitNotice: function () {
        // console.log("通知");
        throw new Error("父类是抽象类不能直接调用，需要子类重写该方法");
    }
}
Interview.prototype.init = function () {
    this.writtenTest();
    this.interviewOne();
    this.interviewTwo();
    this.interviewThree();
    this.waitNotice();
}

var TencentInterview = function () {}

TencentInterview.prototype = new Interview();

TencentInterview.prototype.writtenTest = function () {
    console.log("腾讯笔试");
}
TencentInterview.prototype.interviewOne = function () {
    console.log("腾讯一面");
}
TencentInterview.prototype.interviewTwo = function () {
    console.log("腾讯二面");
}
TencentInterview.prototype.interviewThree = function () {
    console.log("腾讯三面");
}
TencentInterview.prototype.waitNotice = function () {
    console.log("等待腾讯的通知");
}

TencentInterview.init();