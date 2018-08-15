/**
 * JavaScript方法借用（多重继承）
 */

 var generic = {
     sayHello: function () {
         return "Hello man.";
     },
     toString: function () {
        var s = '[';
        if (this.constructor && this.constructor.name) {
            s += this.constructor.name + ": ";
        }
        var n = 0;
        for (var name in this) {
            if (!this.hasOwnProperty(name)) {
                continue;
            }
            var value = this[name];
            if (typeof value === "function") {
                continue;
            }
            if (n++) {
                s += ", ";
            }
        }
        return s + ']';
     },
     equals: function(that) {
         if (that == null) {
             return false;
         }
         if (this.constructor !== that.constructor) {
             return false;
         }
         for (var name in this) {
             if (name === "|**objectid**|") {
                 continue;
             }
             if (!this.hasOwnProperty(name)) {
                 continue;
             }
             if (this[name] !== that[name]) {
                 return false;
             }
         }
         return true;
     }
 }

 export function generic() {
     return generic;
 }

 export function testExport() {
     return "test export."
 }