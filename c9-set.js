/**
 * JavaScript Set数据结构（部分）
 */

 //构造函数
 function Set() {
     this.values = {};                  //数据保存
     this.n = 0;                        //集合中的个数
     this.add.apply(this, arguments);   //将参数添加到这个集合
 };

 /**
  * 添加数据，数据来源于参数
  */
 Set.prototype.add = function() {
     for (var i = 0; i < arguments.length; i++) {
        var val = arguments[i];
        var str = Set._v2s(val);
        if (!this.values.hasOwnProperty(str)) {
            this.values[str] = val;
            this.n++;
        }
     }
     return this;                       //返回this，可以支持链路调用
 };

 /**
  * 删除元素，由参数决定
  */
 Set.prototype.remove = function () {
     for (var i = 0; i < arguments.length; i++) {
         var str = Set._v2s(arguments[i]);
         if (this.values.hasOwnProperty(str)) {
             /**
              * The JavaScript delete operator removes a property from an object; 
              * if no more references to the same property are held, it is eventually released automatically.
              */
             delete this.values[str];
             this.n--;
         }
     }
     return this;
 }

 /**
  * 查询集合中是否包含某个值
  * 是则返回tre，否则返回false
  */
 Set.prototype.contains = function (values) {
     var result = this.values.hasOwnProperty(Set._v2s(values));
     return result;
 }

 /**
  * 返回集合的大小
  */
 Set.prototype.size = function (values) {
     return this.n;
 }

 /**
  * 遍历集合中的所有元素
  */
 Set.prototype.foreach = function (f, context) {
    for (var val in this.values) {
        if (this.values.hasOwnProperty(val)) {
            f.call(context, this.values[s]);
        }
    }
 }

 /**
  * 内部函数，将任意JavaScript值和唯一的字符串对应起来
  * @param {*} val 
  */
 Set._v2s = function (val) {
     switch (val) {
        case undefined:
            return 'u';
        case null:
            return 'n';
        case true:
            return 't';
        case false:
            return 'f';
        default: switch (typeof val) {
            case 'number':
                return '#' + val;
            case 'string':
                return '"' + val;
            default:
                return '@' + objectId(val);
        }
     }

     function objectId(object) {
         var prop = "|**objectid**|";           //私有属性，用于存放id
         if (!object.hasOwnProperty(prop)) {    //如果对象没有id
             object[prop] = Set._v2s.next++;
         }
         return object[prop];
     }
 };

//设置初始id的值
Set._v2s.next = 100;