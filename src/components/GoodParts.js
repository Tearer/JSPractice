/* eslint-disable */
import React, {Component} from 'react';
import { util } from 'node-forge';
import * as utils from '../../utils';
import { regExpLiteral } from '@babel/types';

export default class GoodParts extends Component{

    componentDidMount(){
        var walk_the_DOM = function walk(node, func) {
            func(node);
            node = node.firstChild;
            while (node) {
                walk(node, func);
                node = node.nextSibling;
            }
        }

        var getElementsByAttribute = function (att, value) {
            var results = [];
            walk_the_DOM(document.body, function (node) {
                var actual = node.nodeType === 1 && node.getAttribute(att);
                if (typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
                    results.push(node);
                }
            });
            return results;
        };
        
        var nodes =[];
        for (var i=0; i<4; i++){
            nodes.push(function (a) {
                return a;
            }(i))
        }

        if (typeof Object.beget !== 'function') {
            Object.create = function (o) {
                var F = function () {};
                F.prototype = o;
                return new F();
            };
        }

        var add = function (a, b) {
            return a + b;
        };

        var myObject = {
            value: 0,
            increment: function (inc) {
                this.value += typeof inc === 'number' ? inc : 1;
            }
        };
        // myObject.increment();
        // console.log(myObject.value);
        // myObject.increment(2);
        // console.log(myObject.value);

        var sum = add(3, 4);
        // console.log(sum);

        myObject.double = function () {
            var that = this;
            // console.log(this);
            var helper = function () {
                // console.log(this);
                that.value = add(that.value, that.value);
                // this.value = add(this.value, this.value)
            };
            helper();
        };
        myObject.double();
        // console.log(myObject.value);

        var Quo = function (string) {
            this.status = string;
        };
        Quo.prototype.get_status = function () {
            return this.status;
        };
        var myQuo = new Quo("confused");
        // console.log(myQuo.get_status());

        var array = [3, 4];
        var sum = add.apply(null, array);  //7
        var statusObject = {
            status: 'A-OK'
        };
        var status = Quo.prototype.get_status.apply(statusObject);  //'A-OK'

        var sum = function () {
            var i, sum = 0;
            for (i = 0; i < arguments.length; i += 1) {
                sum += arguments[i];
            }
            return sum;
        };
        // console.log(sum(4, 8, 15, 16, 23, 42));

        var add = function (a, b) {
            if (typeof a !== 'number' || typeof b !== 'number') {
                throw {
                    name: 'TypeError',
                    message: 'add needs numbers'
                };
            }
            return a + b;
        }
        var try_it = function () {
            try {
                add("seven");
            } catch (e) {
                // console.log(e.name + ': ' + e.message);
            }
        }
        try_it();

        /*扩充类型的功能*/
        Function.prototype.method = function (name, func) {
            this.prototype[name] = func;
            return this;
        };

        Number.method('integer', function() {
            return Math[this < 0 ? 'ceil' : 'floor'](this);
        });
        // console.log((-10 / 3).integer()); 

        String.method('trim', function () {
            return this.replace(/^\s+|\s+$/g, '');
        });
        // console.log('"' + "  neat  ".trim() + '"');

        Function.prototype.method = function (name, func) {
            if (!this.prototype[name]) {
                this.prototype[name] = func;
            }
            return this;
        };

        /**递归 */
        var hanoi = function (disc, src, aux, dst) {
            if (disc > 0) {
                hanoi(disc - 1, src, dst, aux);
                console.log('Move disc' + disc + ' from ' + src + ' to ' + dst);
                hanoi(disc - 1, aux, src, dst);
            }
        };
        // hanoi(3, 'Src', 'Aux', 'Dst');

        /**作用域 */

        /**闭包 */
        var fade = function (node) {
            var level = 1;
            var step = function () {
                var hex = level.toString(16);
                node.style.backgroundColor = '#FFFF' + hex + hex;
                if (level < 15) {
                    level += 1;
                    setTimeout(step, 100);
                }
            };
            setTimeout(step, 100);
        };
        // fade(document.body);

        var add_the_handlers = function (nodes) {
            var helper = function (i) {
                return function (e) {
                    console.log(i);
                };
            };
            var i;
            for (i = 0; i < nodes.length; i += 1) {
                nodes[i].onclick = helper(i);
            }
        };

        /**回调函数 */

        /**模块 */
        String.method('deentityify', function () {
            var entity = {
                quot: '"',
                lt: '<',
                gt: '>'
            };
            return function () {
                return this.replace(/&([^&;]+);/g,
                    function (a, b) {
                        var r = entity[b];
                        return typeof r === 'string' ? r : a;
                    }
                );
            };
        }());

        // console.log('&lt;&quot;&gt;'.deentityify());

        var serial_maker = function () {
            var prefix = '';
            var seq = 0;
            return {
                set_prefix: function (p) {
                    prefix = String(p);
                },
                set_seq: function (s) {
                    seq = s;
                },
                gensym: function () {
                    var result = prefix + seq;
                    seq += 1;
                    return result;
                }
            };
        };
        var seqer = serial_maker();
        seqer.set_prefix('Q');
        seqer.set_seq(1000);
        var unique = seqer.gensym();
        // console.log(unique);

        /**级联 */

        /**柯里化 */
        Function.method('curry', function () {
            var slice = Array.prototype.slice,
                args = slice.apply(arguments),
                that = this;
            return function () {
                return that.apply(null, args.concat(slice.apply(arguments)));
            };
        });
        var add1 = add.curry(1);
        // console.log(add1(6));

        /**记忆 */
        var fibonacci = function (n) {
            return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
        };
        for (var i = 0; i <= 10; i++) {
            // console.log(i + ': ' + fibonacci(i));
        }

        var fibonacci = function () {
            var memo = [0, 1];
            var fib = function (n) {
                var result = memo[n];
                if (typeof result !== 'number') {
                    result = fib(n - 1) + fib(n - 2);
                    memo[n] = result;
                }
                return result;
            };
            return fib;
        }();

        var memoizer = function (memo, formula) {
            var recur = function (n) {
                var result = memo[n];
                if (typeof result !== 'number') {
                    result = formula (recur, n);
                    memo[n] = result;
                }
                return result;
            };
            return recur;
        };
        var fibonacci = memoizer([0, 1], function (recur, n) {
            return recur (n - 1) + recur (n - 2);
        });
        // console.log(fibonacci(10));
        var factorial = memoizer([1, 1], function (recur, n) {
            return n * recur (n - 1);
        });
        // console.log(factorial(3));

        /**第五章 继承 */
        /**伪类 */
        Function.method('new', function() {
            //创建一个新对象，它继承自构造函数的原型对象
            var that = Object.create(this.prototype);

            //调用构造器函数，绑定this到新对象上
            var other = this.apply(that, arguments);

            //如果它的返回值不是一个对象，就返回改对象
            return (typeof other === 'object' && other) || that;
        });
        
        var Mammal = function (name) {
            this.name = name;
        };
        Mammal.prototype.get_name = function () {
            return this.name;
        };
        Mammal.prototype.says = function () {
            return this.saying || '';
        };

        var myMammal = new Mammal('Herb the Mammal');
        var name = myMammal.get_name();
        // console.log(name);
        
        var Cat = function (name) {
            this.name = name;
            this.saying = 'meow';
        };
        //替换Cat.prototype 为一个新的Mammal实例
        Cat.prototype = new Mammal();
        //扩充新原型对象，增加purr和get_name方法
        Cat.prototype.purr = function (n) {
            var i, s = '';
            for (i = 0; i < n; i++){
                if (s) {
                    s += '-';
                }
                s += 'r';
            }
            return s;
        };
        Cat.prototype.get_name = function () {
            return this.says() + ' ' + this.name + ' ' + this.says();
        };

        var myCat = new Cat('Henrietta');
        // console.log(myCat.says());
        // console.log(myCat.purr(5));
        // console.log(myCat.get_name());

        /**对象说明符 */
        
        /**原型 */
        var myMammal = {
            name: 'Herb the Mammal',
            get_name: function () {
                return this.name;
            },
            says: function () {
                return this.saying || '';
            }
        }

        var myCat = Object.create(myMammal);
        myCat.name = 'Henrietta';
        myCat.saying = 'meow';
        myCat.purr = function (n) {
            var i, s = '';
            for (i = 0; i < n; i++) {
                if (s) {
                    s += '-';
                }
                s += 'r';
            }
            return s;
        };
        myCat.get_name = function () {
            return this.says + ' ' + this.name + ' ' + this.says;
        };

        /**函数化 */
        var mammal = function (spec) {
            var that = {};
            that.get_name = function () {
                return spec.name;
            };
            that.says = function () {
                return spec.saying || '';
            };
            return that;
        };
        var myMammal = mammal({name: 'Herb'});
        var cat = function (spec) {
            spec.saying = spec.saying || 'meow';
            var that = mammal(spec);
            that.purr = function (n) {
                var i, s = '';
                for (i = 0; i < n; i++) {
                    if (s) {
                        s += '-';
                    }
                    s += 'r';
                }
                return s;
            };
            that.get_name = function () {
                return that.says() + ' ' + spec.name + ' ' + that.says();
            };
            return that;
        };
        var myCat = cat({name: 'Henrietta'});

        // Object.method('superior', function (name) {
        //     var that = this,
        //         method = that[name];
        //     return function () {
        //         return method.apply(that, arguments);
        //     };
        // });

        // var coolcat = function (spec) {
        //     var that = cat(spec),
        //         super_get_name = that.superior('get_name');
        //     that.get_name = function (n) {
        //         return 'like ' + super_get_name() + ' baby';
        //     };
        //     return that;
        // };
        // var myCoolCat = coolcat({name: 'Bix'});
        // var name = myCoolCat.get_name(); //like meow Bix meow baby

        /**部件 */
        var eventuality = function (that) {
            var registry = {};
            that.fire = function (event) {
                var array,
                    func,
                    handler,
                    i,
                    type = typeof event === 'string' ? event : event.type;
                if (registry.hasOwnProperty(type)) {
                    array = registry[type];
                    for (i = 0; i < array.length; i++) {
                        handler = array[i];
                        func = handler.method;
                        if (typeof func === 'string') {
                            func = this[func];
                        }
                        func.apply(this, handler.parameters || [event]);
                    }
                }
                return this;
            };

            that.on = function (type, method, parameters) {
                var handler = {
                    method: method,
                    parameters: parameters
                };
                if (registry.hasOwnProperty(type)) {
                    registry[type].push(handler);
                } else {
                    registry[type] = [handler];
                }
                return this;
            };
            return that;
        };

        /**第六章 数组 */
        /**数组字面量 */
        var empty = [];
        var numbers = [
            'zero', 'one', 'two', 'three', 'four',
            'five', 'six', 'seven', 'eight', 'nine'
        ];
        // console.log(empty[1]);
        // console.log(numbers[1]);
        // console.log(empty.length);
        // console.log(numbers.length);

        var numbers_object = {
            '0': 'zero', '1': 'one', '2': 'two',
            '3': 'three', '4': 'four', '5': 'five',
            '6': 'six', '7': 'seven', '8': 'eight',
            '9': 'nine'
        }
        var misc = [
            'string', 98.6, true, false, null, undefined,
            ['nested', 'array'], {object: true}, NaN,
            Infinity
        ];
        // console.log(misc.length);

        /**长度 */
        var myArray = [];
        // console.log(myArray.length);
        myArray[1000000] = true;
        // console.log(myArray.length);
        numbers.length = 3;
        numbers[numbers.length] = 'shi';
        // console.log(numbers);

        /**删除 */
        delete numbers[2];
        numbers.splice(2, 1);

        /**枚举 */

        /**容易混淆的地方 */
        // var is_array = function (value) {
        //     return value && typeof value === 'object' && value.constructor === Array;
        // };
        var is_array = function (value) {
            return Object.prototype.toString.apply(value) === '[object Array]';
        }

        /**方法 */
        Array.method('newReduce', function (f, value) {
            var i;
            for (i = 0; i < this.length; i++) {
                value = f(this[i], value);
            }
            return value;
        });
        var data = [4, 8, 15, 16, 23, 42];
        var add = function (a, b) {
            return a + b;
        };
        var mult = function (a, b){
            return a * b;
        };
        // console.log(data.newReduce(add, 0));
        // console.log(data.newReduce(mult, 1));
        data.total = function () {
            return this.newReduce(add, 0);
        };
        var total = data.total();
        // console.log(total)

        /**指定初始值 */
        Array.dim = function (dimension, initial) {
            var a = [], i;
            for (i = 0; i < dimension; i++){
                a[i] = initial;
            }
            return a;
        };
        var myArray = Array.dim(10, 0);
        // console.log(myArray);
        var matrix = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
        ];
        // console.log(matrix[2][1]);

        Array.matrix = function (m, n, initial) {
            var a, i, j, mat = [];
            for (i = 0; i < m; i++) {
                a = [];
                for (j = 0; j < n; j++) {
                    a[j] = initial;
                }
                mat[i] = a;
            }
            return mat;
        }
        var myMatrix = Array.matrix(4, 4, 0);
        // console.log(myMatrix);
        Array.identity = function (n) {
            var i, mat = Array.matrix(n, n, 0);
            for (i = 0; i < n; i++){
                mat[i][i] = 1;
            }
            return mat;
        };
        myMatrix = Array.identity(4);
        // console.log(myMatrix);

        /**正则表达式 */
        var parse_url = /^(?:([A-Za-z]+):)? (\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
        var url = "http://www.ora.com:80/goodparts?q#fragment";

        /**结构 */

        /**元素 */

        /**正则表达式分支 */
        "intro".match(/in|int/)

        /**正则表达式序列 */
        
        /**正则表达式因子 */
        
        /**正则表达式转义 */

        /**正则表达式分组 */

        /**正则表达式字符集 */

        /**正则表达式字符转义 */

        /**正则表达式量词 */

        /**方法 */
        /**Array */
        var a = ['a', 'b', 'c'];
        var b = ['x', 'y', 'z'];
        var c = a.concat(b, true); // ['a','b','c','x','y','z',true]

        a.push('d');
        c = a.join(''); // 'abcd'

        c = a.pop(); // a是['a', 'b'] & c 是 'c'

        c = a.push(b, true); // a是['a', 'b', 'c', ['x', 'y', 'z'], true]，c是5

        b = a.reverse(); // a和b都是['c', 'b', 'a']

        c = a.shift(); // a是['b', 'c'] & c 是 'a'

        b = a.slice(0, 1); // b是['a']
        c = a.slice(1); // c是['b', 'c']
        var d = a.slice(1, 2); // d是['b']

        var n = [4, 8, 15, 16, 23, 42];
        n.sort(); // [15, 16, 23, 4, 42, 8]
        n.sort(function (a, b) {
            return a - b;
        }); // [4, 8, 15, 16, 23, 42]

        var m = ['aa', 'bb', 'a', 4, 8, 15, 16, 23, 42];
        m.sort(function (a, b) {
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        }); // [4, 8, 15, 16, 23, 42, 'a', 'aa', 'bb']
        
        var by = function (name) {
            return function (o, p) {
                var a, b;
                if (typeof o === 'object' && typeof p === 'object' && o && p) {
                    a = o[name];
                    b = p[name];
                    if (a === b) {
                        return 0;
                    }
                    if (typeof a === typeof b) {
                        return a < b ? -1 : 1;
                    }
                    return typeof a < typeof b ? -1 : 1;
                } else {
                    throw {
                        name: 'Error',
                        message: 'Expected an object when sorting by ' + name
                    }
                }
            };
        };
        
        var s = [
            {first: 'Joe', last: 'Besser'},
            {first: 'Moe', last: 'Howard'},
            {first: 'Joe', last: 'DeRita'},
            {first: 'Shemp', last: 'Howard'},
            {first: 'Larry', last: 'Fine'},
            {first: 'Curly', last: 'Howard'}
        ];
        // console.log(s.sort(by('first')).sort(by('last')));

        a = ['a', 'b', 'c'];
        var r = a.splice(1, 1, 'ache', 'bug');
        // console.log(a, r);

        // Array.method('splice', function(start, deleteCount) {
        //     var max = Math.max,
        //         min = Math.min,
        //         delta,
        //         element,
        //         insertCount = max(arguments.length - 2, 0), 
        //         k = 0,
        //         len = this.length, 
        //         new_len,
        //         result = [],
        //         shift_count;
            
        //     start = start || 0;
        //     if (start < 0) {
        //         start += len;
        //     }
        //     start = max(min(start, len), 0); 
        //     deleteCount = max(min(typeof deleteCount === 'number' ? deleteCount : len, len - start), 0); //1
        //     delta = insertCount - deleteCount; 
        //     new_len = len + delta; 
        //     while (k < deleteCount) {
        //         element = this[start + k];
        //         if (element !== undefined) {
        //             result[k] = element;
        //         }
        //         k += 1;
        //     }
        //     shift_count = len - start - deleteCount;
        //     if (delta < 0) {
        //         k = start + insertCount;
        //         while (shift_count) {
        //             this[k] = this[k - delta];
        //             k += 1;
        //             shift_count -= 1;
        //         }
        //         this.length = new_len;
        //     } else if (delta > 0) {
        //         k = 1;
        //         while (shift_count) {
        //             this[new_len - k] = this[len - k];
        //             k += 1;
        //             shift_count -= 1;
        //         }
        //         this.length = new_len;
        //     }
        //     for (k = 0; k < insertCount; k += 1) {
        //         this[start + k] = arguments[k + 2];
        //     }
        //     return result;
        // });

        a = ['a', 'b', 'c'];
        // r = a.unshift('?', '@');
        // console.log(a, r);

        Array.method('myshift', function () {
            this.splice.apply(this, [0, 0].concat(Array.prototype.slice.apply(arguments)));
            return this.length;
            // return this.splice.apply(this, [0, 0, '?', '@']); //从0开始删除0个，插入新元素
        });
        r = a.myshift('?', '@');

        /**Function */
        Function.method('mybind', function (that) {
            var method = this,
                slice = Array.prototype.slice,
                args = slice.apply(arguments, [1]);
            return function () {
                return method.apply(that, args.concat(slice.apply(arguments, [0])));
            };
        });
        var x = function () {
            return this.value;
        }.mybind({value: 666});
        // console.log(x())

        /**Number */
        // console.log(
        //     Math.PI.toExponential(0),
        //     Math.PI.toExponential(2),
        //     Math.PI.toExponential(7),
        //     Math.PI.toExponential(16),
        //     Math.PI.toExponential()
        // )

        // console.log(
        //     Math.PI.toFixed(0),
        //     Math.PI.toFixed(2),
        //     Math.PI.toFixed(7),
        //     Math.PI.toFixed(16),
        //     Math.PI.toFixed()
        // )

        // console.log(
        //     Math.PI.toPrecision(2),
        //     Math.PI.toPrecision(7),
        //     Math.PI.toPrecision(16),
        //     Math.PI.toPrecision()
        // )

        // console.log(
        //     Math.PI.toString(2),
        //     Math.PI.toString(8),
        //     Math.PI.toString(16),
        //     Math.PI.toString()
        // )

        /**Object */
        var a = {member: true};
        var b = Object.create(a);
        // console.log(a.hasOwnProperty('member'), b.hasOwnProperty('member'));

        /**RegExp */
        // regexp.exec(string)
        // regexp.test(string)

        /**String */
        var name = 'Curly';
        var initial = name.charAt(0); // 'C'
        // console.log(initial)
        String.method('mycharAt', function (pos) {
            return this.slice(pos, pos + 1);
        });

        initial = name.charCodeAt(0); // 67

        var s = 'C'.concat('a', 't'); // 'Cat'

        var text = 'Mississippi';
        var p = text.indexOf('ss'); // 2
        p = text.indexOf('ss', 3); // 5
        p = text.indexOf('ss', 6); // -1

        p = text.lastIndexOf('ss'); // 5
        p = text.lastIndexOf('ss', 3); // 2
        p = text.lastIndexOf('ss', 6); // 5

        var m = ['AAA', 'A', 'aa', 'a', 'Aa', 'aaa'];
        m.sort(function (a, b) {
            return a.localeCompare(b);
        });

        var result = "mother_in_law".replace('_', '-'); // "mother-in_law"
        var oldareacode = /\((\d{3})\)/g;
        p = '(555)666-1212'.replace(oldareacode, '$1-'); // "555-666-1212"

        text = 'and in it he says "Any damn fool could';
        var pos = text.search(/["']/); // 18

        var a = text.slice(18); // '"Any damn fool could'
        var b = text.slice(0, 3); // 'and'
        var c = text.slice(-5); // 'could'
        var d = text.slice(19, 32); // 'Any damn fool'

        var digits = '0123456789';
        var a = digits.split('', 5); // ['0', '1', '2', '3', '4']

        var ip = '192.168.1.0';
        var b = ip.split('.'); // ['192', '168', '1', '0']
        var c = '|a|b|c'.split('|'); // ['', 'a', 'b', 'c', '']
        var text = 'last, first, middle';
        var d = text.split(/\s*,\s*/); // ["last", "first", "middle"]
        var e = text.split(/\s*(,)\s*/); // ["last", ",", "first", ",", "middle"]

        String.prototype.substring();
        String.prototype.toLocaleLowerCase();
        String.prototype.toLocaleUpperCase();
        String.prototype.toLowerCase();
        String.prototype.toUpperCase();

        a = String.fromCharCode(67, 97, 116); // 'Cat'















    }

    render(){
        return (
        <div>
            <br/>
            <h2>GoodParts</h2>
        </div>
        )
    }
}