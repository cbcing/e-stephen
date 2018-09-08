console.log('test');

function length () {
    for (var i = 1; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
};

console.log(length());