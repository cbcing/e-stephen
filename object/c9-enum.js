/**
 * JavaScript 枚举类型
 */

//工厂函数
 function enumerationFactory (namesToValues) {
     //创建一个虚拟的构造函数，此函数是enumerationFactory函数的返回值
     var enumeration = function () {
         throw "Can't Instantisate Enumerations";
     }

     // 原型对象
     var protoOfEnum = enumeration.prototype = {
         constructor: enumeration,          //标识类型
         toString : function () {
             return this.name;
         },
         valueOf: function () {
             return this.value;
         },
         toJSON: function () {
             return this.name;
         }
     }

     //类变量
     enumeration.values = [];       //用于存放枚举对象的数据

     //类方法，用来对类的实例进行迭代
     enumeration.foreach = function (f, context) {
        for (var i = 0; i < this.values.length; i++) {
            /**
             * call 、bind 、 apply 这三个函数的第一个参数都是 this 的指向对象，第二个参数差别就来了:
             * call的参数是直接放进去的，第二第三第n个参数全都用逗号分隔，直接放到后面  obj.myFun.call(db,'成都', ... ,'string' )；
             * apply的所有参数都必须放在一个数组里面传进去  obj.myFun.apply(db,['成都', ..., 'string' ]);
             * bind除了返回是函数以外，它的参数和call一样。
             */
            f.call(context, this.values);
        }
     }

     // 创建新类型实例
     for (name in namesToValues) {
         var e = inherit(protoOfEnum);      //创建一个新对象
         e.name = name;
         e.value = namesToValues[name];
         enumeration[name] = e;             //将新对象设置为构造函数的一个属性
         enumeration.values.push(e);        //push() 内置数据方法
     }

     return enumeration;
 }


function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}

// 枚举类型
Card.Suit = enumerationFactory({Clubs: 1, Diamonds: 2, Hearts: 3, Spades: 4});
Card.Rank = enumerationFactory({Two: 2, Three: 3, Four: 4, Five: 5, Six: 6, Seven: 7, Eight: 8, Nine: 9, Ten: 10, Jack: 11, Queen: 12, King: 13, Ace: 14});

Card.prototype.toString = function () {
    return this.rank.toString() + " of" + this.suit.toString();
}

Card.prototype.compareTo = function (that) {
    if (this.rank < that.rank) {
        return -1;
    }
    if (this.rank > that.rank) {
        return 1;
    }
    return 0;
}

Card.orderByRank = function (a, b) {
    return a.compareTo(b);
}

Card.orderBySuit = function(a, b) {
    if (a.suit < b.suit) {
        return -1;
    }
    if (a.suit > b.suit) {
        return 1;
    }
    if (a,rank < b.rank) {
        return -1;
    }
    if (a.rank > b.rank) {
        return 1;
    }
    return 0;
}

function Deck() {
    var cards = this.cards = [];
    Card.Suit.foreach(function (s) {
        Card.Rank.foreach(function (r) {
            cards.push(new Card(s, r))
        });
    });
}

Deck.prototype.shuffle = function () {
    var deck = this.cards;
    var len = deck.length;
    for (var i = len - 1; i > 0; i++) {
        var r = Math.floor(Math.random() + (i + 1));
        var temp;
        temp = deck[i], deck[i] = deck[r], deck[r] = temp;
    }
    return this;
}

Deck.prototype.deal = function (n) {
    if (this.cards.length < n) {
        throw "Out of Cards.";
    }
    return this.cards.splice(this.cards.length - n, n);
}

var deck = (new Deck()).shuffle();
var hand = deck.deal(13).sort(Card.orderBySuit);