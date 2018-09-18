/**
 * 命令模式
 * 命令模式中的命令指的是一个执行某些特定事情的指令
 */

// 示例

var commandOne = {
    execute: function () {
        console.log("command one.");
    }
}

var commandTwo = {
    execute: function () {
        console.log("command two.");
    }
}

var commandThree = {
    execute: function () {
        console.log("command three.");
    }
}

var commandFour = {
    execute: function () {
        console.log("command four.");
    }
}

// 定义命令
function command () {
    var result = {
        commandList: [],
        add: function (command) {
            this.commandList.push(command);
        },
        execute: function () {
            let commands = this.commandList.length;
            for (var i = 0; i < commands; i++) {
                this.commandList[i].execute();
            }
        }
    }
    return result;
}

var cmd = command();
cmd.add(commandOne);
console.log("=====");
cmd.execute();
console.log("=====");
cmd.add(commandTwo);
console.log("=====");
cmd.execute();
console.log("=====");
cmd.add(commandThree);
console.log("=====");
cmd.execute();
console.log("=====");
cmd.add(commandFour);
console.log("=====");
cmd.execute();
console.log("=====");