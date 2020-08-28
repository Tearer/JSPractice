/* eslint-disable */
import React, {Component} from 'react';
import { copySync, futimes } from 'fs-extra';
import { template } from '@babel/core';
// import * as utils from '../../utils';

export default class DontKnow extends Component{

    componentDidMount(){

        /**
         * JavaScript运行环境提供了一种机制来处理程序中多个块的执行，且执行每块时调用JavaScript引擎，
         * 这种机制被称为事件循环。换句话说，JavaScript引擎本身并没有时间的概念，只是一个按需执行JavaScript 
         * 任意代码片段的环境。“事件”(JavaScript 代码执行)调度总是由包含它的环境进行。
         * 举例来说，如果JavaScript程序发出一个Ajax请求，从服务器获取一些数据，那你就在一个函数
         * (通常称为回调函数)中设置好响应代码，然后JavaScript 引擎会通知宿主环境:“嘿，现在我要暂停执行，
         * 你一旦完成网络请求，拿到了数据，就请调用这个函数。”然后浏览器就会设置侦听来自网络的响应，拿到要给你
         * 的数据之后，就会把回调函数插入到事件循环，以此实现对这个回调的调度执行。
         * 
         * 事件循环，不停地查询任务队列并一一执行。
         * 程序通常分成了很多小块，在事件循环队列中一个接一个地执行。
         * 这里使用 setTimeout(..0)(hack)进行异步调度，基本上它的意思就是“把这个函数插入到当前事件循环队列的结尾处”。
         * JavaScript 单线程，不会跨线程共享数据，不会代码并行交错的现象，称为完整运行。
         * 函数顺序的不确定性就是通常所说的竞态条件。
         * 
         * 在 ES6 中，有一个新的概念建立在事件循环队列之上，叫作任务队列(job queue)。它是挂在事件循环队列的
         * 每个 tick 之后的一个队列。在事件循环的每个 tick 中，可能出现的异步动作不会导致一个完整的新事件 
         * 添加到事件循环队列中，而会在当前 tick 的任务队列末尾添加一个项目(一个任务)。
         * 理论上说，任务循环(job loop)可能无限循环(一个任务总是添加另一个任务，以此类推)，进而导致程序的
         * 饿死，无法转移到下一个事件循环 tick。
         * 
         * Promise也可作为异步任务中作为两个或更多步骤的流程控制机制。
         * 如果对一个 Promise 注册了一个完成回调和一个拒绝回调，那么 Promise 在决议时总是会调用其中的一个。
         * 如果向 Promise.resolve(..) 传递一个非 Promise、非 thenable 的立即值，就会得到一个用这个值
         * 填充的promise。如果向 Promise.resolve(..) 传递一个真正的 Promise，就只会返回同一个 promise。
         * 
         * promise特性：调用 Promise 的 then(..) 会自动创建一个新的 Promise 从调用返回。
         * 在完成或拒绝处理函数内部，如果返回一个值或抛出一个异常，新返回的(可链接的)Promise 就相应地决议。
         * 如果完成或拒绝处理函数返回一个 Promise，它将会被展开，这样一来，不管它的决议值是什么，都会成为
         * 当前 then(..) 返回的链接 Promise 的决议值。
         * 
         * Promise 链不仅是一个表达多步异步序列的流程控制，还是一个从一个步骤到下一个步骤传递消息的消息通道。
         * 
         * Promise(..) 构造器的第一个参数回调会展开thenable(和Promise.resolve(..)一样)或真正的Promise。
         * 若向Promise.all([ .. ])传入空数组，它会立即完成，但Promise. race([ .. ]) 会挂住，且永远不会决议。
         * 
         * 
         * 
         */

        /*** let const 创建块作用域变量*/
        // var foo = true;
        // if (foo) {
        //     { //显示的块
        //         let bar = foo * 2;
        //         // console.log(bar);
        //     }
        // }

        // {
        //     let j;
        //     for(j = 0; j < 10; j++){
        //         let i = j; //每个迭代重新绑定
        //         // console.log(i);
        //     }
        // }

        /****************************** */

        /** 函数声明和变量声明都会被提升，函数优先 */
        // console.log( a ); 
        // var a = 2;
        // ->
        // var a; 
        // console.log( a ); 
        // a = 2;

        // foo(); // 1
        // var foo;
        // function foo() { 
        //     console.log( 1 );
        // }
        // foo = function() { 
        //     console.log( 2 );
        // };
        // ->
        // function foo() { 
        //     console.log( 1 );
        // }
        // foo(); // 1
        // foo = function() { 
        //     console.log( 2 );
        // };
        /****************************** */

        /****闭包 
         * 无论通过何种手段将内部函数传递到所在的词法作用域以外，它都会持有对原始定义作用域的引用，无论在何处执行这个函数都会使用闭包。
        */
        // function foo() {
        //     var a = 2;
        //     function bar() {
        //         console.log(a);
        //     }
        //     return bar;
        // }
        // var baz = foo();
        // baz();

        // function foo() {
        //     var a = 2;
        //     function baz() {
        //         console.log(a); //2
        //     }
        //     bar(baz);
        // }
        // function bar(fn) {
        //     fn();
        // }

        // var fn;
        // function foo() {
        //     var a = 2;
        //     function baz() {
        //         console.log(a);
        //     }
        //     fn = baz; //将baz分配给全局变量
        // }
        // function bar() {
        //     fn();
        // }
        // foo();
        // bar(); //2

        // for (var i = 1; i <= 5; i++){
        //     setTimeout( function timer() {
        //         console.log(i);
        //     }, i*1000);
        // }

        // for (var i = 1; i <= 5; i++){
        //     (function(){
        //         var j = i;
        //         setTimeout(function timer() {
        //             console.log(j);
        //         }, j*1000);
        //     })();
        // }

        // for (var i = 1; i <= 5; i++){
        //     (function(j){
        //         setTimeout(function timer() {
        //             console.log(j);
        //         }, j*1000);
        //     })(i);
        // }

        // for (var i = 1; i <= 5; i++){
        //     let j = i; //闭包的块作用域
        //     setTimeout(function timer() {
        //         console.log(j);
        //     }, j*1000);
        // }
        
        /**
         * for 循环头部的 let 声明还会有一个特殊的行为。
         * 这个行为指出变量在循环过程中不止被声明一次，每次迭代都会声明。
         * 随后的每个迭代都会使用上一个迭代结束时的值来初始化这个变量。
         */
        // for (let i = 1; i <= 5; i++){
        //     setTimeout(function timer(){
        //         console.log(i);
        //     }, i*1000);
        // }

        // var MyModules = (function Manager(){
        //     var modules = {};
        //     function define(name, deps, impl) {
        //         for (var i = 0; i < deps.length; i++){
        //             deps[i] = modules[deps[i]];
        //         }
        //         modules[name] = impl.apply(impl, deps);
        //     }

        //     function get(name){
        //         return modules[name];
        //     }

        //     return {
        //         define: define,
        //         get: get
        //     };
        // })();
        // MyModules.define("bar", [], function(){
        //     function hello(who){
        //         return "Let me introduce: " + who;
        //     }

        //     return {
        //         hello: hello
        //     };
        // });
        // MyModules.define("foo", ["bar"], function(bar){
        //     var hungry = "hippo";
            
        //     function awesome(){
        //         console.log(bar.hello(hungry).toUpperCase());
        //     }

        //     return {
        //         awesome: awesome
        //     };
        // });

        // var bar = MyModules.get("bar");
        // var foo = MyModules.get("foo");
        // console.log(bar.hello("hippo"));
        // foo.awesome();

        /***************************** */

        /** 动态作用域 */
        // function foo() { 
        //     console.log( a ); // 2
        // }
        // function bar() { 
        //     var a = 3;
        //     foo(); 
        // }
        // var a = 2; 
        // bar();

        /******************************* */

        /**** 块作用域的代替方案 */
        // ES6之前通过try/catch实现块作用域

        // /*let*/{
        //     let a = 2;
        //     console.log(a);
        // }

        /**** this 词法 */
        // var obj = {
        //     count: 0,
        //     cool: function coolFn() {
        //         var self = this;
        //         // console.log(self);
        //         if (self.count < 1){
        //             setTimeout(function timer(){
        //                 self.count++;
        //                 console.log("awesome?");
        //             },100);
        //         }
        //     }
        // };
        // var obj = {
        //     count: 0,
        //     cool: function coolFn() {
        //         if(this.count < 1){
        //             setTimeout(()=>{
        //                 this.count++;
        //                 console.log("awesome?");
        //             }, 100);
        //         }
        //     }
        // };
        // var obj = {
        //     count: 0,
        //     cool: function coolFn() {
        //         if(this.count < 1){
        //             setTimeout(function timer(){
        //                 this.count++;
        //                 console.log("more awesome");
        //             }.bind(this), 100);
        //         }
        //     }
        // }
        // obj.cool();

        /************************* */

        /***** 关于this */
        // function identify() {
        //     return this.name.toUpperCase();
        // }
        // function speak(){
        //     var greeting = "Hello, Im " + identify.call(this);
        //     console.log(greeting);
        // }
        // var me = {
        //     name: "Kyle"
        // };
        // var you = {
        //     name: "Reader"
        // }
        // identify.call(me);
        // identify.call(you);
        // speak.call(me);
        // speak.call(you);

        // function foo(num) {
        //     console.log("foo: " + num);
        //     this.count++;
        //     // foo.count++;
        // }
        // foo.count = 0;
        // var i;
        // for (i=0; i<10; i++){
        //     if (i>5){
        //         // foo(i);
        //         foo.call(foo, i);
        //     }
        // }
        // console.log(foo.count);

        // function foo() { 
        //     var a = 2;
        //     // this.bar(); 
        //     bar();
        // }
        // function bar() { 
        //     // console.log(this.a);   
        // }
        // foo();

        /******** this全面解析 */
        /** 默认绑定 */
        // function foo(){
        //    console.log(this.a);
        // }
        // var a = 2;       
        // (function(){
        //    foo();
        // })();

        /** 隐式绑定 
         * 当函数引用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象。
        */
        // function foo(){
        //     console.log(this.a);
        // }
        // var obj = {
        //     a: 2,
        //     foo: foo
        // };
        // obj.foo();

        // var obj2 = {
        //     a: 42,
        //     foo: foo
        // };
        // var obj1 = {
        //     a: 2,
        //     obj2: obj2
        // };
        // obj1.obj2.foo();

        /** 隐式丢失 */
        // function foo(){
        //     console.log(this.a);
        // }
        // var obj = {
        //     a: 2,
        //     foo: foo
        // }
        // var bar = obj.foo;
        // var a = "opps, global";
        // bar(); //undefined

        // function foo(){
        //     console.log(this.a);
        // }
        // function doFoo(fn){
        //     // fn其实引用的是foo
        //     fn();
        // }
        // var obj = {
        //     a: 2,
        //     foo: foo
        // };
        // var a = "oops, global";
        // doFoo(obj.foo); //undefined

        // function foo(){
        //     console.log(this.a);
        // }
        // var obj = {
        //     a: 2,
        //     foo: foo
        // };
        // var a = "oops, global";
        // setTimeout(obj.foo, 100); //undefined

        /** 显示绑定 */
        // function foo(){
        //     console.log(this.a);
        // }
        // var obj = {
        //     a: 2
        // }
        // // foo.call(obj);

        // var bar = function(){
        //     foo.call(obj);
        // };
        // bar(); //2
        // setTimeout(bar, 100); //2
        // bar.call(window); //2

        /** 硬绑定 */
        // function foo(something){
        //     console.log(this.a, something);
        //     return this.a + something;
        // }
        // function bind(fn, obj){
        //     return function() {
        //         return fn.apply(obj, arguments);
        //     };
        // }
        // var obj = {
        //     a: 2
        // };
        // // var bar = function(){
        // //     return foo.apply(obj, arguments);
        // // };
        // // var bar = bind(foo, obj);
        // var bar = foo.bind(obj);

        // var b = bar(3); // 2 3
        // console.log(b); // 5

        /** API调用的上下文 */
        // function foo(el){
        //     console.log(el, this.id);
        // }
        // var obj = {
        //     id: "awesome"
        // };
        // //调用foo()时吧this绑定到obj
        // [1, 2, 3].forEach(foo, obj); 

        /** new绑定 
         * 使用 new 来调用 foo(..) 时，我们会构造一个新对象并把它绑定到 foo(..) 调用中的 this 上。
        */
        // function foo(a){
        //     this.a = a;
        // }
        // var bar = new foo(2);
        // console.log(bar.a);

        /** 优先级 */

        /** 绑定例外 */
        // function foo(a, b){
        //     console.log("a:" + a + ", b:" + b);
        // }
        // foo.apply(null, [2, 3]); // a:2, b:3
        // var bar = foo.bind(null, 2);
        // bar(3); // a:2, b:3

        /** 更安全的this */
        // function foo(a, b){
        //     console.log("a:" + a + ", b:" + b);
        // }
        // //创建空对象
        // var dmz = Object.create(null);
        // foo.apply(dmz, [2, 3]); // a:2, b:3
        // var bar = foo.bind(dmz, 2);
        // bar(3); // a:2, b:3

        /** 间接引用 */
        // function foo(){
        //     console.log(this.a);
        // }
        // var a = 2;
        // var o = {a:3, foo:foo};
        // var p = {a:4};
        // o.foo(); // 3
        // (p.foo = foo)(); // 2，赋值表达式的返回值是目标函数的引用，所有调用位置是foo()

        /** 软绑定 */
        // if (!Function.prototype.softBind) { 
        //     Function.prototype.softBind = function(obj) {
        //         var fn = this;
        //         // 捕获所有 curried 参数
        //         var curried = [].slice.call( arguments, 1 ); 
        //         var bound = function() {
        //             return fn.apply(
        //                 (!this || this === (window || global)) ?
        //                     obj : this,
        //                 curried.concat.apply( curried, arguments )
        //             ); 
        //         };
        //         bound.prototype = Object.create( fn.prototype );
        //         return bound; 
        //     };
        // }

        // function foo() {
        //     console.log("name: " + this.name);
        // }
        // var obj = { name: "obj" }, obj2 = { name: "obj2" }, obj3 = { name: "obj3" };
        // var fooOBJ = foo.softBind( obj );
        // fooOBJ(); 
        // obj2.foo = foo.softBind(obj); 
        // obj2.foo(); 
        // fooOBJ.call( obj3 );
        // setTimeout( obj2.foo, 100 );

        // function foo() {
        //     return (a) => {
        //         console.log(this.a);
        //     };
        // }
        // var obj1 = {
        //     a:2
        // };
        // var obj2 = {
        //     a:3
        // };
        // var bar = foo.call(obj1);
        // bar.call(obj2); // 2

        // function foo() {
        //     setTimeout(()=>{
        //         //this继承自foo()
        //         console.log(this.a);
        //     },100);
        // }
        // var obj = {
        //     a:2
        // }
        // foo.call(obj);
        
        /****************************************************/

        /*** 对象 */
        // var myObject = {
        //     // 给 a 定义一个 getter 
        //     get a() {
        //         return this._a_; 
        //     },

        //     // 给 a 定义一个 setter
        //     set a(val) {
        //         this._a_= val * 2;
        //     }
        // };
        // myObject.a = 2;
        // console.log("a" in myObject); 
        // console.log(myObject.hasOwnProperty("a"));

        // var myArray = [ 1, 2, 3 ];
        // var it = myArray[Symbol.iterator]();
        // console.log(it.next()); // { value:1, done:false } 
        // console.log(it.next()); // { value:2, done:false } 
        // console.log(it.next()); // { value:3, done:false } 
        // console.log(it.next()); // { value:undefined, done:true }

        // var myObject = {
        //     a: 2,
        //     b: 3
        // };

        // Object.defineProperty(myObject, Symbol.iterator, {
        //     enumerable: false,
        //     writable: false,
        //     configurable: true,
        //     value: function() {
        //         var o = this;
        //         var idx = 0;
        //         var ks = Object.keys(o);
        //         return {
        //             next: function() {
        //                 return {
        //                     value: o[ks[idx++]],
        //                     done: (idx > ks.length)
        //                 };
        //             }
        //         };
        //     }
        // });
        
        // var it = myObject[Symbol.iterator]();
        // console.log(it.next()); //{value: 2, done: false}
        // console.log(it.next()); //{value: 3, done: false}
        // console.log(it.next()); //{value: undefined, done: true}
        // for (var v of myObject){
        //     console.log(v);
        // }

        /** 显式混入 */
        // function mixin(sourceObj, targetObj){
        //     for (var key in sourceObj){
        //         if (!(key in targetObj)){
        //             targetObj[key] = sourceObj[key];
        //         }
        //     }
        //     return targetObj;
        // }

        /** 寄生继承 */
        // function Vehicle() {
        //     this.engines = 1;
        // }
        // Vehicle.prototype.ignition = function() {
        //     console.log('ignition');
        // };
        // Vehicle.prototype.drive = function() {
        //     this.ignition();
        //     console.log('drive');
        // };
        // function Car() {
        //     //car是一个Vehicle
        //     var car = new Vehicle();

        //     //定制car
        //     car.wheels = 4;

        //     var vehDrive = car.drive;
        //     car.drive = function() {
        //         vehDrive.call(this);
        //         console.log("wheels");
        //     };
        //     return car;
        // }
        // var myCar = new Car();
        // myCar.drive();
        
        /** 隐式混入 */
        // var Something = {
        //     cool: function(){
        //         this.greeting = "Hello World";
        //         this.count = this.count ? this.count + 1 : 1;
        //     }
        // };
        // Something.cool();
        // Something.greeting;
        // Something.count;
        // var Another = {
        //     cool: function() {
        //         Something.cool.call(this);
        //     }
        // };
        // Another.cool();
        // Another.greeting;
        // Another.count;

        /** 原型 */
        // function Foo(){}
        // var a = new Foo();
        // console.log(a);

        // if (!Object.create) { 
        //     Object.create = function(o) {
        //         function F(){} 
        //         F.prototype = o; 
        //         return new F();
        //     }; 
        // }

        // var anotherObject = { a:2 };
        // var obj = Object.create(anotherObject);
        // console.log(obj);

        /** 行为委托 */
        // Task = {
        //     setID: function(ID) { this.id = ID; },
        //     outputID: function() { console.log(this.id); }
        // };
        // XYZ = Object.create( Task );
        // XYZ.prepareTask = function(ID,Label) { 
        //     this.setID( ID );
        //     this.label = Label;
        // };
        // XYZ.outputTaskDetails = function() { 
        //     this.outputID();
        //     console.log( this.label );
        // };
        
        // /** 面向对象风格 */
        // function Foo(who){
        //     this.me = who;
        // }
        // Foo.prototype.identify = function(){
        //     return this.me;
        // };
        // function Bar(who){
        //     Foo.call(this, who);
        // }
        // Bar.prototype = Object.create(Foo.prototype);
        // Bar.prototype.speak = function(){
        //     console.log(this.identify());
        // }

        // var b1 = new Bar("b1");
        // var b2 = new Bar("b2");
        // b1.speak();
        // b2.speak();

        // /** 对象关联风格 */
        // Foo = {
        //     init: function(who){
        //         this.me = who;
        //     },
        //     identify: function(){
        //         return 
        //     }
        // };
        // Bar = Object.create(Foo);
        // Bar.speak = function(){
        //     console.log(this.identify());
        // };

        // var b1 = Object.create(Bar);
        // b1.init("b1");
        // var b2 = Object.create(Bar);
        // b2.init("b2");
        // b1.speak();
        // b2.speak();

        /** 控件类 */
        // function Widget(width, height) {
        //     this.width = width || 50;
        //     this.height = height || 50;
        //     this.$elem = null;
        // }
        // Widget.prototype.render = function($where){
        //     if(this.$elem){
        //         this.$elem.css({
        //             width: this.width + "px",
        //             height: this.height + "px"
        //         }).appendTo($where);
        //     }
        // };
        // function Button(width, height, label) {
        //     Widget.call(this, width, height);
        //     this.label = label || "Default";
        //     this.$elem = $("<button>").text(this.label);
        // }
        // Button.prototype = Object.create(Widget.prototype);
        // Button.prototype.render = function($where){
        //     Widget.prototype.render.call(this, $where);
        //     this.$elem.click(this.onClick.bind(this));
        // };
        // Button.prototype.onClick = function(evt){
        //     console.log(this.label);
        // };

        // function foo(){
        //     console.log(b);
        //     return 1;
        // }
        // var a, b, c;
        // c = {
        //     get bar(){
        //         console.log(a);
        //         return 1;
        //     }
        // };
        // a = 10;
        // b = 30;
        // a += foo();
        // b += c.bar;
        // console.log(a+b);

        // var p3 = new Promise(function(resolve, reject){
        //     resolve("B");
        // });
        // var p1 = new Promise(function(resolve, reject){
        //     resolve(p3);
        // });
        // var p2 = new Promise(function(resolve, reject){
        //     resolve("A");
        // });
        // p1.then(function(v){
        //     console.log(v);
        // });
        // p2.then(function(v){
        //     console.log(v);
        // });

        /** Promise */
        // reject(..) 不会像 resolve(..) 一样进行展开。如果向 reject(..) 传入一个 Promise/thenable 值，
        // 它会把这个值原封不动地设置为 拒绝理由。后续的拒绝处理函数接收到的是你实际传给 reject(..) 的那个 
        // Promise/thenable，而不是其底层的立即值。
        
        // function spread(fn) {
        //     return Function.apply.bind( fn, null );
        // }

        /**generator */
        // value属性是yield语句后面表达式的值，表示当前阶段的值；done属性是一个布尔值，表示 generator 函数是否执行完毕
        // 消息是双向传递的——yield.. 作为一个 表达式可以发出消息响应 next(..) 调用，
        // next(..) 也可以向暂停的 yield 表达式发送值。
        // yield表达式本身没有返回值，或者说总是返回undefined。next()方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
        // 只有暂停的 yield 才能接受这样一个通过 next(..) 传递的值，而在生成器的起始处我们调用第一个 next() 时，
        // 还没有暂停的 yield 来接受这样一个值，会丢弃传递给第一个 next() 的任何东西
        // function *foo(x) {
        //     var y = x * (yield "hello");
        //     return y;
        // }
        // var it = foo( 6 );
        // console.log(it.next()) // hello
        // console.log(it.next(7)) // 42

        // function *foo() {
        //     var x = yield 2;
        //     z++;
        //     var y = yield (x * z);
        //     console.log(x, y, z);
        // }
        // var z = 1;
        // var it1 = foo();
        // var it2 = foo();
        // var val1 = it1.next().value;  // 2 <-- yield 2
        // var val2 = it2.next().value;  // 2 <-- yield 2
        // val1 = it1.next(val2 * 10).value;  // 40 <-- x:20, z:2
        // val2 = it2.next(val1 * 5).value;   // 600 <-- x:200, z:3
        // it1.next(val2/2);  // y:300
        //                    // 20 300 3
        // it2.next(val1/4);  // y:10
        //                    // 200 10 3

        // var a = 1;
        // var b = 2;
        // function *foo() {
        //     a++;
        //     yield;
        //     b = b * a;
        //     a = (yield b) + 3;
        // }
        // function *bar() {
        //     b--;
        //     yield;
        //     a = (yield 8) + b;
        //     b = a * (yield 2);
        // }

        // function step(gen) {
        //     var it = gen();
        //     var last;
        //     return function() {
        //         // 不管yield出来的是什么，下一次都把它原样传回去! 
        //         last = it.next( last ).value;
        //     }; 
        // }

        // var s1 = step( foo );
        // var s2 = step( bar );
        // s2(); 
        // console.log(a, b)  //b--;  => a = 1; b = 1;
        // s2(); 
        // console.log(a, b)  //yield 8;  => a = 1; b = 1;
        // s1(); 
        // console.log(a, b)  //a++;  => a = 2; b = 1;
        // s2(); 
        // console.log(a, b)  //a=8+b; yield 2  => a = 9; b = 1;
        // s1(); 
        // console.log(a, b)  // b=b*a; yield b  => a = 9; b = 9
        // s1(); 
        // console.log(a, b)   // a=b+3  => a = 12; b = 9;
        // s2(); 
        // console.log(a, b)   // b = a*2  => a = 12; b = 18
        /****
            bar的最后一句：b = a * (yield 2);执行到这里时，a的值为9，然后在后半句那里暂停。
            虽然后面两次调用s1导致a的值变为了12，但不会影响到这条语句中的a，因为在此之前就已经完成了对a的取值，
            所以最后执行的是9 * 2，而不是12 * 2。
        ****/

        /**
         * 迭代器
         * 
         * for..of 循环在每次迭代中自动调用 next()，它不会向 next() 传入任何值，
         * 并且会在接收到 done:true 之后自动停止。这对于在一组数据上循环很方便。
         * var a = [1,3,5,7,9];
         * var it = a[Symbol.iterator]();
         */

        // function *something() {
        //     var nextVal;
        //     while (true) {
        //         if (nextVal === undefined) {
        //             nextVal = 1;
        //         }else {
        //             nextVal = (3 * nextVal) + 6;
        //         }
        //         yield nextVal;
        //     }
        // }

        // var it = something()
        // for(var v of it) {
        //     console.log(v);
        //     if(v > 500) {
        //         console.log(it.return('hello').value)
        //     }
        // }
        /* something() 调用产生一个迭代器，生成器的迭代器也有一个 Symbol.iterator 函数，
           基本上这个函数做的就是 return this */

        //    function foo(x,y) {
        //        ajax(
        //            "http://some.url.1/?x="+x+"&y="+y,
        //            function(err, data){
        //                if (err) {
        //                    it.throw(err);
        //                } else {
        //                    it.next(data)
        //                }
        //            }
        //        )
        //    }

        //    function *main() {
        //        try {
        //             var text = yield foo(11,31);
        //             console.log(text);
        //        } catch (err) {
        //             console.error(err);
        //        }
        //    }。
        //    var it = main();
        //    it.next()

        // var it = main();
        // var p = it.next().value;
        // p.then(function(text){
        //         it.next(text)
        //     },
        //     function(err){
        //         it.throw(err);
        //     }
        // )
        /**
         * 迭代器应该侦听这个 promise 的决议(完成或拒绝)，然后要么使用完成消息恢复生成器运行，
         * 要么向生成器抛出一个带有拒绝原因的错误。获得 Promise 和生成器最大效用的最自然的方法就
         * 是 yield 出来一个 Promise，然后通过这个 Promise 来控制生成器的迭代器。
         */

        // function run(gen) {
        //     var args = [].slice.call(arguments, 1), it;
        //     it = gen.apply(this, args);
        //     return Promise.resolve().then(function handleNext(value){
        //         var next = it.next(value);
        //         return (function handleResult(next){
        //             if (next.done){
        //                 return next.value;
        //             }else{
        //                 return Promise.resolve(next.value).then(
        //                     handleNext,
        //                     function handleErr(err){
        //                         return Promise.resolve(
        //                             it.throw(err)
        //                         ).then(handleResult);
        //                     }
        //                 );
        //             }
        //         })(next);
        //     });
        // }
        
        // function *foo() {
        //     // var r1 = yield request("url1");
        //     // var r2 = yield request("url2");
        //     // var r3 = yield request("url3?v="+r1+","+r2);
        //     var results = yield Promise.all([
        //         request("url1"),
        //         request("url2")
        //     ]);
        //     var r1 = results[0];
        //     var r2 = results[1];

        //     console.log(r3);
        // }
        // run(foo)

        /**
         * yield *暂停了迭代控制，而不是生成器控制。当你调用*foo()生成器时，现在 yield 委托到了它的迭代器。
         * 但实际上，你可以 yield 委托到任意 iterable，yield *[1,2,3] 会消耗数组值 [1,2,3] 的默认迭代器。
         */

        // function *foo(){
        //     console.log("inside *foo():", yield "B");
        //     console.log("inside *foo():", yield "C");
        //     return "D";
        // }
        // function *bar(){
        //     console.log("inside *bar():", yield "A");
        //     console.log("inside *bar():", yield *foo());
        //     console.log("inside *bar():", yield "E");
        //     return "F";
        // }
        // var it = bar();
        // console.log("outside:", it.next().value);
        // //outside:A
        // console.log("outside:", it.next(1).value);
        // //inside *bar():1  outside: B
        // console.log("outside:", it.next(2).value);
        // //inside *foo():2  outside: C
        // console.log("outside:", it.next(3).value);
        // //inside *foo():3 inside *bar():D  outside: E
        // console.log("outside:", it.next(4).value);
        // //inside *bar():4 outside: F

        // function *bar() {
        //     console.log("inside *bar():", yield "A");
        //     console.log("inside *bar():", yield *["B", "C", "D"]);
        //     console.log("inside *bar():", yield "E");
        //     return "F";
        // }
        // var it = bar();
        // console.log("outside:", it.next().value);
        // //inside *bar(): A
        // console.log("outside:", it.next(1).value);
        // //inside *bar():1  outside:B
        // console.log("outside:", it.next(2).value);
        // //outside: C
        // console.log("outside:", it.next(3).value);
        // //outside: D
        // console.log("outside:", it.next(4).value);
        // //inside *bar():undefined outside:E
        // console.log("outside:", it.next(5).value);
        // //inside *bar():5 outside:F

        // function *foo(){
        //     try {
        //         yield "B";
        //     }catch (err) {
        //         console.log("error caught inside *foo():", err);
        //     }
        //     yield "C";
        //     throw "D";
        // }
        // function *bar(){
        //     yield "A";
        //     try{
        //         yield *foo();
        //     }catch (err){
        //         console.log("error caught inside *bar():", err);
        //     }
        //     yield "E";
        //     yield *baz();

        //     yield "G";//不会到达这里
        // }
        // function *baz(){
        //     throw "F";
        // }
        // var it = bar();

        // console.log("outside:", it.next().value);
        // //outside: A
        // console.log("outside:", it.next(1).value);
        // //outside: B
        // console.log("outside:", it.throw(2).value);
        // //error caught inside *foo():2  outside: C 
        // console.log("outside:", it.next(3).value);
        // //error caught inside *bar(): D  outside: E
        // try {
        //     console.log("outside:", it.next(4).value);
        // }catch (err){
        //     console.log("error caught outside:", err);
        //     //error caught outside: F
        // }

        // function *foo() {
        //     var r2 = yield request("url2");
        //     var r3 = yield request("url3?v=" + r2);
        //     return r3;
        // }
        // function *bar(){
        //     var r1 = yield request("url1");
        //     var r3 = yield *foo();
        //     console.log(r3);
        // }
        // run(bar);

        // function *foo(val){
        //     if(val > 1){
        //         val = yield *foo(val - 1);
        //     }
        //     return yield request("url?v=" + val);
        // }
        // function *bar(){
        //     var r1 = yield *foo(3);
        //     console.log(r1);
        // }
        // run(bar);

        // var res = [];
        // function *reqData(url) {
        //     var data = yield request(url);
        //     yield;
        //     res.push(data);
        // }
        // var it1 = reqData("url1");
        // var it2 = reqData("url2");
        // var p1 = it1.next();
        // var p2 = it2.next();

        // p1.then(function(data){
        //     it1.next(data);
        // });
        // p2.then(function(data){
        //     it2.next(data);
        // })
        // Promise.all([p1, p2]).then(function(){
        //     it1.next();
        //     it2.next();
        // })

        // runAll(
        //     function*(data){
        //         data.res = [];
        //         var url1 = yield "url2";
        //         var p1 = request(url1);
        //         yield;
        //         data.res.push(yield p1);
        //     },
        //     function*(data){
        //         var url2 = yield "url1";
        //         var p2 = request(url2);
        //         yield;
        //         data.res.push(yield p2);
        //     }
        // )

        // function foo(x,y) {
        //     return x + y;
        // }   
        // function thunkify(fn){
        //     var args = [].slice.call(arguments, 1);
        //     return function(cb){
        //         args.push(cb);
        //         console.log(fn.apply(null, args))
        //         return fn.apply(null, args);
        //     };
        // }
        // var fooThunk = thunkify(foo, 3, 4);
        // fooThunk(function(sum){
        //     console.log(sum);
        // })

        // function *foo(url){
        //     //状态1
        //     try{
        //         console.log("requesting:", url);
        //         var TMP1 = request(url);

        //         //状态2
        //         var val = yield TMP1;
        //         console.log(val);
        //     }catch(err){
        //         //状态3
        //         console.log("Oops:", err);
        //         return false;
        //     }
        // }

        // function foo(url){
        //     var state;
        //     var val;
        //     function process(v){
        //         switch(state){
        //             case 1:
        //                 console.log("requesting:",url);
        //                 return request(url);
        //             case 2:
        //                 val = v;
        //                 console.log(val);
        //                 return;
        //             case 3:
        //                 var err = v;
        //                 console.log('Oops:', err);
        //                 return false;
        //         }
        //     }

        //     return {
        //         next: function(v){
        //             // 初始状态
        //             if(!state){
        //                 state = 1;
        //                 return {
        //                     done: false,
        //                     value: process()
        //                 };
        //             }
        //             //yield成功恢复
        //             else if (state === 1){
        //                 state = 2;
        //                 return {
        //                     done: true,
        //                     value: process(v)
        //                 };
        //             }
        //             // 生成器已经完成
        //             else{
        //                 return {
        //                     done: true,
        //                     value: undefined
        //                 }
        //             }
        //         },
        //         "throw": function(e){
        //             if(state === 1){
        //                 state = 3;
        //                 return {
        //                     done: true,
        //                     value: process(e)
        //                 };
        //             } else {
        //                 throw e;
        //             }
        //         }
        //     };
        // }

        // var it = foo("url1");

        /**
         * 尾调用
         */

        // var defaults = {
        //     options: {
        //         remove: true,
        //         enable: false,
        //         instance: {},
        //     },
        //     log: {
        //         warn: true,
        //         error: true
        //     }
        // }
        // var config = {
        //     options: {
        //         remove: false,
        //         instance: null
        //     }
        // }
        // config.options = config.options || {};
        // config.log = config.log || {};
        // ({
        //     options:{
        //         remove: config.options.remove = defaults.options.remove,
        //         enable: config.options.enable = defaults.options.enable,                
        //         instance: config.options.instance = defaults.options.instance
        //     } = {},
        //     log: {
        //         warn: config.log.warn = defaults.log.warn,
        //         error: config.log.error = defaults.log.error
        //     } = {}
        // } = config);
        // {
        //     let {
        //         options: {
        //             remove = defaults.options.remove,
        //             enable = defaults.options.enable,
        //             instance = defaults.options.instance
        //         } = {},
        //         log: {
        //             warn = defaults.log.warn,
        //             error = defaults.log.error
        //         } = {}
        //     } = config;
        //     config = {
        //         options: {remove, enable, instance},
        //         log: {warn, error}
        //     };
        // }

        // function runSomething(o) {
        //     var x = Math.random(),
        //         y = Math.random();
        //     return o.something(x, y);
        // }
        // runSomething({
        //     something: function something(x, y){
        //         if(x>y){
        //             return something(y, x);
        //         }
        //         return y - x;
        //     }
        // });
        
        // var o = {
        //     __id: 10,
        //     get id() {
        //         return this.__id++;
        //     },
        //     set id(v) {
        //         this.__id = v;
        //     }
        // }
        
        /**
         * 计算属性名也可以作为简洁方法或者简洁生成器的名称
         */

        // var o1 = {
        //     foo() {
        //         console.log("o1: foo");
        //     }
        // };
        // var o2 = {
        //     foo() {
        //         super.foo();
        //         console.log("o2: foo");
        //     }
        // };
        // Object.setPrototypeOf( o2, o1 );
        // o2.foo(); //o1:foo  o2:foo
        
        // function foo(strings, ...values){
        //     console.log(strings);
        //     console.log(values);
        // }
        // var desc = 'awesome';
        // foo`Everything is ${desc}!`;// [ "Everything is ", "!"]  [ "awesome" ]

        // function tag(strings, ...values){
        //     return strings.reduce(function(s,v,idx){
        //         return s + (idx>0 ? values[idx-1]:"") + v;
        //     }, "");
        // }
        // var desc = "awesome";
        // var text = tag`Everything is ${desc}!`;

        // function dollabillsyall(strings, ...values){
        //     return strings.reduce(function(s,v,idx){
        //         if(idx > 0){
        //             if(typeof values[idx-1] == "number"){
        //                 s += `$${values[idx-1].toFixed(2)}`;
        //             }else{
        //                 s += values[idx-1];
        //             }
        //         }
        //         return s + v;
        //     }, "");
        // }
        // var amt1 = 11.99,
        //     amt2 = amt1 * 1.08,
        //     name = "Kyle";
        // var text = dollabillsyall
        // `${name}! Your product const was ${amt1}, which with tax
        //  comes out to ${amt2}.`

        // console.log(String.raw`hello\nworld!`);
        
        
        // var a = ['a','b','c','d','e'];
        // for(var val, ret, it=a[Symbol.iterator]();
        //     (ret = it.next()) && !ret.done;
        // ){
        //     val = ret.value;
        //     console.log(val);
        // }
        // for(var c of 'hello'){
        //     console.log(c);
        // }

        // var snowman = "\uD834\uDD1E";
        // console.log( snowman );
            
        // var s = Symbol.for('something cool');
        // var desc = Symbol.keyFor(s);
        // console.log(desc);
        // var s2 = Symbol.for(desc);
        // console.log(s===s2);

        // function *foo() {
        //     try{
        //         yield 1;
        //         yield 2;
        //         yield 3;
        //     }finally{
        //         console.log('cleanUp');
        //     }
        // }
        // for(var v of foo()){
        //     console.log(v);
        // }
        // var it = foo();
        // console.log(it.next());
        // console.log(it.return(42));

        /**
         * 除了export default ...形式导出一个表达式值绑定，
         * 所有其他的导出形式都是导出局部标识符的绑定。
         * 
         * import foo from "foo";
         * import { default as foo } from "foo";
         * 
         * 作为 import 结果的声明是“提升的”
         * foo();
         * import { foo } from "foo";
         */

        /**
        • class Foo 表明创建一个(具体的)名为 Foo 的函数，与你在前 ES6 中所做的非常类似。
        • constructor(..) 指定 Foo(..) 函数的签名以及函数体内容。
        • 类方法使用对象字面量可用的同样的“简洁方法”语法。这也包含 ES5 getter/setter 语法。但是，
          类方法是不可枚举的，而对象方法默认是可枚举的。
        • 和对象字面量不一样，在 class 定义体内部不用逗号分隔成员。

        * 子类构造器中调用 super(..) 之后才能访问 this。
        */

        // class MyCoolArray extends Array {
        //     first() {return this[0]}
        //     last() {return this[this.length-1]}
        // }
        // var a = new MyCoolArray(1, 2, 3);
        // console.log(a.first());
        // console.log(a.last());

        // class Oops extends Error {
        //     constructor(reason){
        //         super();
        //         this.oops = reason;
        //     }
        // }
        // var ouch = new Oops("I");
        // throw ouch;

        /**
         * new.target 是一个新的在所有函数中都可用值，在一般函数中它通常是 undefined。
         * 在任何构造器中，new.target 总是指向 new 实际上直接调用的构造器，
         * 即使构造器是在父类中且通过子类构造器用 super(..) 委托调用
         */
        // class Foo {
        //     constructor () {
        //         console.log('Foo:', new.target.name);
        //     }
        // }
        // class Bar extends Foo {
        //     constructor () {
        //         super();
        //         console.log('Bar:', new.target.name);
        //     }
        //     baz(){
        //         console.log('baz:',new.target);
        //     }
        // }
        // var a = new Foo();
        // var b = new Bar();
        // b.baz();

        // class MyCoolArray extends Array{
        //     static get [Symbol.species]() {return Array;}
        // }
        // var a = new MyCoolArray(1, 2, 3),
        //     b = a.map(function(v){return v*2;});
        // console.log(b instanceof MyCoolArray);
        // console.log(b instanceof Array);

        // function gen$(_context){
        //     while(1){
        //         switch (_context.prev = _context.next){
        //             case 0:
        //                 _context.next = 2;
        //                 return 'result1';
        //             case 2:
        //                 _context.next = 4;
        //                 return 'result2';
        //             case 4:
        //                 _context.next = 6;
        //                 return 'result3';
        //             case 6:
        //             case 'end':
        //                 return _context.stop();
        //         }
        //     }
        // }
        
        // var context = {
        //     next: 0,
        //     prev: 0,
        //     done: false,
        //     stop: function stop() {
        //         this.done = true
        //     }
        // }

        // let gen = function() {
        //     return {
        //         next: function() {
        //             value = context.done ? undefined : gen$(context);
        //             done = context.done;
        //             return {
        //                 value,
        //                 done
        //             }
        //         }
        //     }
        // }

        // var g = gen();
        // g.next();
        // g.next();
        // g.next();
        // g.next();

        // function* gen() {
        //     yield  123 + 456;
        //     return 1;
        // }
        // var g = gen();
        // console.log(g.next())
        // console.log(g.next())
        // console.log(g.next())

        // function* genFuncWithReturn() {
        //     yield 'a';
        //     yield 'b';
        //     return 'The result';
        //   }
        // function* logReturned(genObj) {
        //     let result = yield* genObj;
        //     console.log(result);
        // }
          
        // console.log([...logReturned(genFuncWithReturn())])

        // function* gen() {
        //     this.a = 1;
        //     yield this.b = 2;
        //     yield this.c = 3;
        // }
        // function F() {
        //     return gen.call(gen.prototype);
        // }
        // var f = new F();
        // console.log(f.next());  
        // console.log(f.next()); 
        // console.log(f.next());  
        // console.log(f.a) 
        // console.log(f.b)
        // console.log(f.c)
        // console.log(gen.prototype)
        // var y = 1
        // function* gen(x) {
        //     y = yield x + 2;
        //     return y;
        // }
        // var g = gen(1);
        // console.log('y:'+ y);
        // console.log(g.next());
        // console.log('y:'+ y);

        // console.log(String.raw`Hi\n${2+3}!`)

        // var s = 'aaa_aa_a';
        // var r = /a+_/y;
        // console.log(r.exec(s))
        // console.log(r.exec(s)) 

        // console.log(Number(BigInt(1)))

        // const cat = {
        //     lives: 9,
        //     jumps: () => {
        //         this.lives--;
        //     }
        // }
        // cat.jumps()
        // console.log(cat.lives)

        // console.log(Object.prototype.toString.call([2]))
        // throw Error('parameter must be an array')

        // function isArray(para){
        //     return Object.prototype.toString.call(para)==='[object Array]'
        // }

        // function * flat(arr){
        //     for(let i=0; i<arr.length; i++){
        //         if(typeof arr[i] !== 'number'){
        //             yield * flat(arr[i])
        //         }else{
        //             yield arr[i]
        //         }
        //     }
        // }
        // for(let value of flat([1,2,[3,[4,5],6],[7]])){
        //     console.log(value)
        // }

        const obj1 = {
            a: {
                b: 1
            }
        }
        // let obj2 = Object.assign({},obj1);
        // console.log(obj2);
        // obj1.a.b = 2;
        // console.log(obj2);
        // let newObj = Object.create(Object.getPrototypeOf(obj1),Object.getOwnPropertyDescriptors(obj1))
        // const obj = Object.create(obj1)
        // obj.foo = 123;
        // const obj = Object.assign(Object.create(obj1),{
        //     foo: 1
        // })
        // const obj = Object.create(obj1, Object.getOwnPropertyDescriptors({
        //     obj: 1
        // }))

        // Object.defineProperty('__proto__',{
        //     get() {
        //         return Object.getPrototypeOf(Object(this));
        //     },
        //     set(proto) {
        //         if(this === null || this === undefined){
        //             throw new TypeError();
        //         }
        //         if(!isObject(this) || !isObject(proto)){
        //             return undefined
        //         }
        //         let op = Reflect.setPrototypeOf(this, proto);
        //         if(!op){
        //             return new TypeError();
        //         }
        //     }
        // })

        // function isObject(value){
        //     return Object(value) === value
        // }

        // function Re(){}
        // let obj = new Re();
        // console.log(obj);
        // console.log(Object.getPrototypeOf(obj)===Re.prototype);
        // Object.setPrototypeOf(obj, Object.prototype)
        // console.log(Object.getPrototypeOf(obj)===Re.prototype);
        // console.log(Object.getPrototypeOf(1)===Number.prototype);
        // console.log(Object.getPrototypeOf('foo')===String.prototype);
        // console.log(Object.getPrototypeOf(false)===Boolean.prototype);
        // console.log(Object.values('abc'));
        // console.log(Object.keys('abc'));
        // console.log(Object(42));
        // console.log(Object(true));
        // let obj = {
        //     a: 111,
        //     b: 222,
        //     toString(){
        //         return 'sss'
        //     }
        // }
        // for(let [key, value] of Object.entries(obj)){
        //     console.log(`${JSON.stringify(key)}: ${JSON.stringify(value)}`)
        // }
        // let m = new Map(Object.entries(obj));
        // Object.fromEntries([
        //     ['a',1],
        //     ['b',2]
        // ])
        // console.log(Object.fromEntries(m));
        // console.log(Boolean(Symbol(obj)))
        // let s = Symbol('fff');
        // let a = {};
        // a[s] = 111;
        // a = {
        //     [s]: 111
        // }
        // Object.defineProperty(a, s ,{
        //     value: 111,
        // })
        // console.log(a[s])
        // console.log(Object.getOwnPropertySymbols(a))
        // let s1 = Symbol.for('foo');
        // let s2 = Symbol.for('foo');
        // console.log(s1===s2)
        // console.log(Symbol.keyFor(s1))

        // class Even {
        //     static [Symbol.hasInstance](foo){
        //         return Number(foo) % 2 === 0 ;
        //     }
        // }
        // const Even = {
        //     [Symbol.hasInstance](foo){
        //         return Number(foo) % 2 === 0 ;
        //     }
        // }
        // let s = 2 instanceof Even;
        // console.log(s)
        // class MyArray extends Array {
        //     static get [Symbol.species]() {return Array}
        // };
        // let arr = new MyArray(1,2);
        // let arr1 = arr.map(item=>item*2);
        // let arr2 = arr.filter(item=>item>1);
        // console.log(arr1 instanceof MyArray);
        // console.log(arr2 instanceof MyArray);
        // let m = new Map([['a', 1]]);
        // console.log(Object.prototype.toString.call(m))
        // console.log( [...new Set([2,3,4,3,2])] );
        // console.log( Array.from(new Set([1,2,3])) );
        // let s = new Set([2,3,4]);
        // let s2 = new Set([...s].map(x=>x*2));
        // let s2 = new Set(Array.from(s, val=>val*3))
        
        // function strMaptoObject(strMap){
        //     let obj = Object.create(null)
        //     for ([k,v] of strMap){
        //         obj[k] = v;
        //     }
        //     return obj;
        // }

        // function objectToStrMap(obj){
        //     let strMap = new Map();
        //     for (k of Object.keys(obj)){
        //         strMap.set(k, obj[k]);
        //     }
        //     return strMap;
        // }
        // let obj = new Proxy({},{
        //     get(target, propKey, recevier){
        //         console.log(`get ${propKey}`);
        //         return Reflect.get(target, propKey, recevier)
        //     },
        //     set(target, propKey, recevier){
        //         console.log(`set ${propKey}`);
        //         return Reflect.set(target, propKey, recevier)
        //     },
        // })
        // obj.a = 1;
        // obj.a++
        // let proxy = new Proxy({}, {
        //     get(target, propKey){
        //         return 35
        //     }
        // })
        // let obj = Object.create(proxy);
        // let target = function () {
        //     console.log('target');
        // }
        // let proxy = new Proxy(target, {
        //     apply() {
        //         console.log('proxy');
        //     }
        // })
        // let twice = function(a, b){
        //     return a+b;
        // }
        // let proxy = new Proxy(twice, {
        //     apply(target, ctx, args){
        //         return Reflect.apply(...arguments)*2
        //     }
        // })
        // let p = new Proxy(function(){},{
        //     construct(target, args, newTarget){
        //         console.log(args)
        //         return {
        //             value: args[0]*10
        //         }
        //     }
        // })   
        // const target = new Date('2020-06-22');
        // let p = new Proxy(target, {
        //     get(target, propKey){
        //         if(propKey==='getDate'){
        //             return target.getDate.bind(target)
        //         }
        //         return Reflect.get(target, propKey);
        //     }
        // })
        // console.log(p.getDate());

        // console.log(Function.prototype.apply.call(Math.floor, undefined, [1.75]));
        // console.log(Reflect.apply(Math.floor, undefined, [1.75]))
        // let obj = {
        //     name: 1,
        //     set bar(value){
        //         this.name = value
        //     }
        // }
        // let objRe = {
        //     name: 2
        // }
        // Reflect.set(obj, 'bar', 4, objRe);
        // function Greeting(name) {
        //     this.name = name;
        // }
        // const instance = Reflect.construct(Greeting, ['name']);
        // console.log(Reflect.getPrototypeOf(instance)===Greeting.prototype)
        // Reflect.setPrototypeOf(instance, Array.prototype);
        // console.log(Reflect.apply(Math.min, Math, [7, 2]));

        // const queuedObservers = new Set();
        // const observe = fn => queuedObservers.add(fn);
        // const observable = obj => new Proxy(obj, {set});
        // function set(target, key, value, recevier) {
        //     const result = Reflect.set(target, key, value, recevier);
        //     queuedObservers.forEach(observer => observer());
        //     return result;
        // }
        // const person = observable({
        //     name: '张三',
        //     age: 20
        // });
        // function print() {
        //     console.log('name改变了');
        //     console.log(`${person.name}, ${person.age}`);
        // }
        // observe(print);
        // person.name = '李四';

        // function timeout(ms){
        //     return new Promise((resolve, reject)=>{
        //         setTimeout(resolve, ms, 'sdone');
        //     })
        // }
        // timeout(1000).then((value)=>{
        //     console.log(value)
        // })
        // function loadImageAsync(url) {
        //     return new Promise(function(resolve, reject){
        //         const image = new Image();
        //         image.src = url;
        //         image.onload = function(){
        //             resolve(image);
        //         }
        //         image.onerror = function(){
        //             reject(new Error('loaded fail'));
        //         }
        //     })
        // }
        // const getJSON = function(url) {
        //     const promise = new Promise(function (resolve, reject){
        //         let handler = function() {
        //             if(this.readyState !== 4){
        //                 return;
        //             }
        //             if(this.status === 200){
        //                 resolve(this.response);
        //             } else {
        //                 reject(new Error(this.statusText));
        //             }
        //         }

        //         const client = new XMLHttpRequest();
        //         client.open("GET", url);
        //         client.onreadystatechange = handler;
        //         client.responseType = "json";
        //         client.setRequestHeader('Accpect','application/json');
        //         client.send();
        //     });
        //     return promise;
        // }
        // getJSON('/').then(function(json){
        //     console.log(json);
        // },function(err){
        //     console.error(err);
        // }).catch(function(err){
        //     console.log(err);
        // })

        // const p1 = new Promise((resolve, reject)=>{
        //     resolve('hello')
        // })
        // .then(result=>result)
        // .catch(e=>e);
        // const p2 = new Promise((resolve, reject)=>{
        //     throw new Error('出错');
        // })
        // .then(result=>result)
        // .catch(e=>e);
        // Promise.all([p1, p2])
        // .then(result=>console.log(result))
        // .catch(e=>console.log('all',e));

        // const resolved = Promise.resolve(42);
        // const rejected = Promise.reject(-1);
        // Promise.allSettled([resolved, rejected])
        // .then(result=>{
        //     let ss = result.filter(p => p.status==='fulfilled').map(p=>p.value);
        //     console.log(ss);
        // });

        // let thenable = {
        //     then(resolve, reject) {
        //         resolve(42);
        //     }
        // }
        // let p1 = Promise.resolve(thenable);
        // p1.then(function(value){
        //     console.log(value);
        // })
        // const p = Promise.reject('出错');
        // p.then(null, function(err){
        //     console.log(err);
        // })
        
        // const preloadImage = function (path) {
        //     return new Promise(function(resolve, reject){
        //         const image = new Image();
        //         image.onload = resolve;
        //         image.onerror = reject;
        //         image.src = path;
        //     })
        // }

        // const f = () => console.log('f');
        // (async () => f())();
        // (() => new Promise(
        //     resolve => resolve(f())
        // ))();
        // const p = Promise.resolve('Hello');
        // p.then(function (s){
        //     console.log(s)
        // });
        // Promise.try(f);
        // console.log('next');
        
        // function * objectEntries(){
        //     let keys = Reflect.ownKeys(this);
        //     for(let key of keys){
        //         yield [key, this[key]];
        //     }
        // }
        // let obj = {
        //     name: 'name',
        //     age: 1
        // }
        // obj[Symbol.iterator] = objectEntries;
        // for(let [key, value] of obj){
        //     if(typeof key !== 'symbol'){
        //         console.log(key, value)
        //     }
        // }

        // function * gen(val){
        //     this.a = val;
        //     yield this.b = 1;
        //     yield this.c = 2;
        // }
        // function nGen(){
        //     return gen.call(gen.prototype, ...arguments)
        // }

        // let obj = new nGen(4);

        // function* gen() {
        //     this.a = 1;
        //     yield this.b = 2;
        //     yield this.c = 3;
        // }
        
        // function F() {
        //     return gen.call(gen.prototype);
        // }
        
        // var f = new F();
        // console.log(f.a)
        
        // function m(x){
        //     console.log(x*2)
        // }
        // function thunk(x){
        //     return x+5
        // }
        // m(thunk(1));

        // fs.readFile(filename, callback);
        // var thunk = function(filename){
        //     return function(callback){
        //         return fs.readFile(filename, callback);
        //     }
        // }
        // var readFileThunk = thunk(filename);
        // readFileThunk(callback);

        // var Thunk = function(fn){
        //     return function(){
        //         var args = Array.prototype.slice.call(arguments);
        //         return function(callback){
        //             args.push(callback);
        //             return fn.apply(this, args);
        //         }
        //     }
        // }

        // const Thunk = function(fn){
        //     return function(...args){
        //         return function(callback){
        //             return fn.call(this, ...args, callback);
        //         }
        //     }
        // }

        // function f(a, cb){
        //     cb(a)
        // }
        // const ft = Thunk(f)
        // ft(1)(console.log);

        // function run(fn){
        //     var gen = fn();
        //     function next(err, data){
        //         var result = gen.next(data);
        //         if(result.done) return;
        //         result.value(next);
        //     }
        //     next();
        // }

        // var readFile = function(filename){
        //     return new Promise(function(resolve, reject){
        //         fs.readFile(filename, function(err, data){
        //             if(err) reject(err);
        //             resolve(data)
        //         });
        //     });
        // };

        // function run(gen){
        //     var g = gen();
        //     function next(data){
        //         let result = g.next(data);
        //         if(result.done) return result.value;
        //         result.value.then(function(data){
        //             next(data);
        //         })
        //     }
        //     next();
        // }

        // function spawn(genF){
        //     return new Promise(function(resolve, reject){
        //         const gen = genF();
        //         function step(genF){
        //             let next;
        //             try {
        //                 next = genF();
        //             } catch(e){
        //                 return reject(e);
        //             }
        //             if(next.done){
        //                 return Promise.resolve(next.value);
        //             }
        //             Promise.resolve(next.value).then(function(v){
        //                 step(function() {
        //                     return gen.next(v);
        //                 });
        //             },function(e) {
        //                 step(function() {
        //                     return gen.throw(e); 
        //                 });
        //             });
        //         }

        //         step(function() { 
        //             return gen.next(undefined); 
        //         });
        //     });
        // }

        // function auto(genF){
        //     return new Promise(function(resolve, reject){
        //         const gen = genF();
        //         function step(next){
        //             if(next.done) {
        //                 return Promise.resolve(next.value)
        //             }
        //             Promise.resolve(next.value).then(function(v){
        //                 step(gen.next(v))
        //             })
        //         }
        //         step(gen.next())
        //     })
        // }

        // class Point {
        //     constructor () {
        //         this.print = this.print.bind(this);
        //     }
        //     dot(){
        //         console.log('dot')
        //     }

        //     print(){
        //         this.dot();
        //     }
        // }
        // let po = new Point();
        // let {print} = po;
        // print();

        // function Point(x, y) {
        //     this.x = x;
        //     this.y = y;
        // }   
        // Point.prototype.toString = function() { 
        //     console.log(this.x, this.y)
        // };
        // var p = new Point(1, 2);
        // p.toString(); 
        // var emptyObj = {};
        // // var YAxisPoint = Point.bind(emptyObj, 0);
        // var YAxisPoint = Point.bind(null, 0);
        // var axisPoint = new YAxisPoint(5);
        // axisPoint.toString(); 

        // let isType = function(type){
        //     return function(obj){
        //         return Object.prototype.toString.call(obj) === `[Object ${type}]`
        //     }
        // }

        // async function  gen(){
        //     let a = await 1;
        //     console.log(a)
        //     let b = await 2;
        //     console.log(b)
        // }
        // gen()

        // class Timer {
        //     constructor(a, b){
        //         this.aa = a;
        //         this.bb = b;
        //     }
        //     start(){
        //         this.run()
        //     }
        //     run(){
        //         console.log(this.bb)
        //     }
        // }
        // let f = function aaaa(){

        // }
        // let obj = new Timer(f, 2);
        // obj.start()

        // var Plane = function(){ 
        //     this.blood = 100; 
        //     this.attackLevel = 1; 
        //     this.defenseLevel = 1;
        // };
        // var plane = new Plane(); 
        // plane.blood = 500; 
        // plane.attackLevel = 10; 
        // plane.defenseLevel = 7;
        // var clonePlane = Object.create( plane );
        // console.log( clonePlane );

        // var obj = function(){
        //     let a = [].shift.call(arguments);
        //     console.log(a)
        // }
        // obj(1)

        // function Person(name){
        //     this.name = name;
        // }
        // Person.prototype.getName = function(){
        //     console.log(this.name)
        // }
        // var objFactory = function(){
        //     var obj = new Object();
        //     var Constructor = [].shift.call(arguments);
        //     // obj.__proto__ = Constructor.prototype;
        //     Object.setPrototypeOf(obj, Constructor.prototype);
        //     var ret = Constructor.apply(obj, arguments);
        //     return typeof ret === 'object' ? ret : obj;
        // }
        // var a = objFactory(Person, 'seven');
        // console.log(a)
        // a.getName()

        // var obj = {name: 'sss'}
        // var A = function(){}
        // A.prototype = obj;
        // var a = new A();
        // var B = function(){}
        // B.prototype = a;
        // var b = new B();

        // Function.prototype.bind = function(ctx){
        //     let self = this;
        //     return function(){
        //         return self.apply(ctx, arguments)
        //     }
        // }

        // var extent = function(){
        //     var value  = 0;
        //     return {
        //         call: function(){
        //             value++;
        //             console.log(value);
        //         }
        //     }
        // } 
        // var e = extent();

        // var extent = {
        //     value: 0,
        //     call: function(){
        //         this.value++;
        //         console.log(this.value);
        //     }
        // }

        // var Extent = function(){
        //     this.value = 0;
        // }
        // Extent.prototype.call = function(){
        //     this.value++;
        //     console.log(this.value);
        // }
        // var extent = new Extent();

        // var isType = function(type){
        //     return function(obj){
        //         return Object.prototype.toString.call(obj) === `[object ${type}]`;
        //     }
        // }
        // let isArray = isType('Array');
        
        // var cost = (function(){
        //     var args = [];
        //     return function(){
        //         if(arguments.length===0){
        //             var cost = 0;
        //             for(var i = 0; i<args.length; i++){
        //                 cost = cost + args[i]
        //             }
        //             return cost;
        //         }else{
        //             Array.prototype.push(args, arguments);
        //         }
        //     }
        // })();

        // var timeThunk = function(fn, count, arr, freq){
        //     let start = function(){
        //         for(let i = 0; i < Math.min(count, arr.length); i++){
        //             fn(arr.shift());
        //         }
        //     }

        //     return function(){
        //         let timer = setInterval(function(){
        //             if (arr.length === 0) clearInterval(timer);
        //             start();
        //         },freq)
        //     }
        // }

        // var Singleton = function(name){
        //     this.name = name;
        //     this.instance = null;
        // }
        // Singleton.getInstance = function(name){
        //     if(!this.instance){
        //         this.instance = new Singleton(name);
        //     }
        //     return this.instance;
        // }
        
        // Singleton.getInstance = (function(){
        //     var instance = null;
        //     return function(name){
        //         if(!instance){
        //             instance = new Singleton(name)
        //         }
        //         return instance;
        //     }
        // })();

        // let a = Singleton.getInstance('a');

        // var CreateDiv = (function(){
        //     var instance;
        //     var CreateDiv = function(html){
        //         if(instance) return instance;
        //         this.html = html;
        //         this.init();
        //         return instance = this;
        //     }
        //     CreateDiv.prototype.init = function(){
        //         var div = document.createElement('div');
        //         div.innerHTML = this.html;
        //         document.body.append(div);
        //     }
        //     return CreateDiv;
        // })();
        // var a = new CreateDiv('a');
        // var b = new CreateDiv('b');

        // var CreateDiv = function(html){
        //     this.html = html;
        //     this.init();
        // }
        // CreateDiv.prototype.init = function(){
        //     var div = document.createElement('div');
        //     div.innerHTML = this.html;
        //     document.body.append(div);
        // }
        // var ProxySingletonCreateDiv = (function(){
        //     var instance = null;
        //     return function(html){
        //         if (!instance) instance = new CreateDiv(html);
        //         return instance;
                
        //     }
        // })()
        // var a = new ProxySingletonCreateDiv('a');
        // var b = new ProxySingletonCreateDiv('b');
        // console.log(a===b)

        // var getSingle = function(fn){
        //     var result = null;
        //     return function(){
        //         if (!result) result = fn.apply(this, arguments);
        //         return result; 
        //     }
        // }
        // var createLoginLayer = function(){
        //     var div = document.createElement('div');
        //     div.innerHTML = '登录浮窗';
        //     div.style.display = 'none';
        //     document.body.appendChild(div);
        //     return div;
        // }
        // var createSingleLoginLayer = getSingle(createLoginLayer);

        // var performanceA = function(){};
        // performanceA.prototype.calculate = function(salary){
        //     return salary*3;
        // }
        // var performanceB = function(){};
        // performanceB.prototype.calculate = function(salary){
        //     return salary*2;
        // }
        // var performanceC = function(){};
        // performanceC.prototype.calculate = function(salary){
        //     return salary*1;
        // }
        // var Bonus = function(){
        //     this.salary = null;
        //     this.strategy = null;
        // }
        // Bonus.prototype.setSalary = function(salary){
        //     this.salary = salary;
        // }
        // Bonus.prototype.setStatety = function(strategy){
        //     this.strategy = strategy;
        // }
        // Bonus.prototype.getBonus = function(){
        //     console.log(this.strategy.calculate(this.salary));
        // }
        // var bonus = new Bonus();
        // bonus.setSalary(1000);
        // bonus.setStatety(new performanceA());
        // bonus.getBonus();

        // var strategies = {
        //     isNonEmpty: function(value, errMsg){
        //         if(value==='') return errMsg;
        //     },
        //     minLength: function(value, length, errMsg){
        //         if(value.length<length) return errMsg;
        //     },
        //     isMobile: function(value, errMsg){
        //         if(!/(^1[3|5|8][0-9]{9}$)/.test(value)) return errMsg;
        //     } 
        // };
        // var Validator = function(){
        //     this.cache = [];
        // };
        // Validator.prototype.add = function(val, strategy, errMsg){
        //     var ary = strategy.split(':');
        //     this.cache.push(function(){
        //         var strategy = ary.shift();
        //         ary.unshift(val);
        //         ary.push(errMsg);
        //         return strategies[strategy].apply(null, ary);
        //     })
        // };
        // Validator.prototype.start = function(){
        //     var length = this.cache.length;
        //     for(var i = 0; i < length; i++){
        //         var msg = this.cache[i]();
        //         if(msg) return msg;
        //     }
        // };
        // var validataFunc = function(){
        //     var validator = new Validator();
        //     validator.add(username, 'isNonEmpty', '不能为空');
        //     validator.add(password, 'minLength:6', '最少为6位');
        //     validator.add(mobilePhone, 'isMoblie', '格式不正确');
        //     var errMsg = validator.start();
        //     return errMsg;
        // };

        // var Flower = function(){};
        // var xiaoming = {
        //     sendFlower: function(target){
        //         var flower = new Flower();
        //         target.receiveFlower(flower);
        //     }
        // };
        // var proxy = {
        //     receiveFlower: function(flower){
        //         girl.listenGoodMood(function(){
        //             var flower = new Flower();
        //             girl.receiveFlower(flower);
        //         })
        //     }
        // };
        // var girl = {
        //     receiveFlower: function(flower){
        //         console.log('收到了:', flower);
        //     },
        //     listenGoodMood: function(callback){
        //         setTimeout(function(){
        //             callback()
        //         },1000)
        //     }
        // };
        // xiaoming.sendFlower(proxy);

        // var myImage = (function(){
        //     var imgNode = document.createElement('img');
        //     document.body.appendChild(imgNode);
        //     return {
        //         setSrc: function(src){
        //             imgNode.src = src;
        //         }
        //     }
        // })();
        // var proxyImage = (function(){
        //     var img = new Image();
        //     img.onload = function(){
        //         myImage.setSrc(this.src)
        //     };
        //     return {
        //         setSrc: function(src){
        //             myImage.setSrc('loading.gif');
        //             img.src = src;
        //         }
        //     }
        // })();
        // proxyImage.setSrc('https://dl.toguw.com/data/upload/img/img_0.svg');
        // var synchronousFile = function(id){
        //     console.log('同步文件：',id);
        // }
        // var checkbox = document.getElementsByTagName('input');
        // for(var i=0; i<checkbox.length; i++){
        //     checkbox[i].onclick = function(){
        //         if(this.checked){
        //             synchronousFile(this.id);
        //         }
        //     }
        // }
        // var proxySynchronousFile = (function(){
        //     var timer, cache =[];
        //     return function(id){
        //         cache.push(id);
        //         if(timer) return;
        //         timer = setTimeout(function(){
        //             synchronousFile(cache.join(','));
        //             clearTimeout(timer);
        //             timer = null;
        //             cache = [];
        //         },2000)
        //     }
        // })();

        // var mult = function(){
        //     // var arr = Array.prototype.slice.apply(arguments)
        //     let arr = [...arguments];
        //     return arr.reduce((prev, curr) => {
        //         return prev * curr
        //     })
        // };
        // var proxyMult = (function(){
        //     var cache = {};
        //     return function(){
        //         var argStr = Array.prototype.join.call(arguments, ',');
        //         if(argStr in cache) return cache[argStr];
        //         var res = mult.apply(null, arguments);
        //         cache[argStr] = res;
        //         return res;
        //     }
        // })();
        // var createProxyFactory = (function(){
        //     var cache = {};
        //     return function(fn){
        //         var argStr = Array.prototype.join.call(arguments, ',');
        //         if(argStr in cache) return cache[argStr];
        //         var res = fn.apply(null, arguments);
        //         cache[argStr] = res;
        //         return res;
        //     }
        // })();
        // proxyMult = createProxyFactory(mult);
        // console.log(proxyMult(2,3,4,5));

        // var each = function(arr, callback){
        //     for(var i=0, l = arr.length; i<l; i++){
        //         if(callback.call(arr[i], i, arr[i]) === false) break;
        //     }
        // };
        // each([2,3,4], function(index, value){
        //     console.log(index, value);
        // });
        // var Iterator = function(obj){
        //     var current = 0;
        //     var next = function(){
        //         current += 1;
        //     };
        //     var isDone = function(){
        //         return current >= obj.length;
        //     };
        //     var getCurrentItem = function(){
        //         return obj[current];
        //     }
        //     return {
        //         next,
        //         isDone,
        //         getCurrentItem
        //     }
        // }
       
        // var salesOffices = {};
        // salesOffices.clientList = [];
        // salesOffices.listen = function(key, fn){
        //     if(!this.clientList[key]){
        //         this.clientList[key] = [];
        //     }
        //     this.clientList[key].push(fn);
        // };
        // salesOffices.publish = function(){
        //     var key = Array.prototype.shift.call(arguments);
        //     var fns = this.clientList[key];
        //     if(!fns || fns.length===0){
        //         return false;
        //     }
        //     for(var i=0, l=fns.length; i<l; i++){
        //         fns[i].apply(null, arguments);
        //     }
        // };
        // var event = {
        //     clientList: [],
        //     listen: function(key, fn){
        //         if(!this.clientList[key]){
        //             this.clientList[key] = [];
        //         }
        //         this.clientList[key].push(fn);
        //     },
        //     trigger: function(){
        //         var key = Array.prototype.shift.call(arguments);
        //         var fns = this.clientList[key];
        //         if(!fns || fns.length===0){
        //             return false;
        //         }
        //         for(var i=0, l=fns.length; i<l; i++){
        //             fns[i].apply(null, arguments);
        //         }
        //     },
        //     remove: function(key, fn){
        //         var fns = this.clientList[key];
        //         if(!fns) return false;
        //         if(!fn){
        //             fns && (fns.length = 0);
        //         }else{
        //             for(var i=fns.length-1; i>=0; i--){
        //                 if(fn===fns[i]){
        //                     fns.splice(i,1);
        //                 }
        //             }
        //         }    

        //     }
        // };
        // var installEvent = function(obj){
        //     for(var i in event){
        //         obj[i] = event[i];
        //     }
        // };
        // installEvent(salesOffices);
        // var fn1 = function (price, square){
        //     console.log(price, square);
        //     console.log('111111');
        // } 
        // var fn2 = function (price, square){
        //     console.log(price, square);
        //     console.log('222222');
        // }
        // salesOffices.listen('88', fn1);
        // salesOffices.listen('88', fn2);
        // salesOffices.trigger('88',20000, 88);
        // salesOffices.remove('88', fn1);
        // salesOffices.trigger('88',20000, 88);
        // var header = (function(){
        //     login.listen('loginSucess', function(data){
        //         header.setAvatar(data.avatar);
        //     });
        //     return {
        //         setAvatar: function(data){
        //             console.log('设置的头像',data);
        //         }
        //     }
        // })();
        // var Event = (function(){
        //     var clientList = {},
        //         listen,
        //         trigger,
        //         remove;
        //     listen = function(key, fn){
        //         if(!clientList[key]) clientList[key] = [];
        //         clientList[key].push(fn);
        //     };
        //     trigger = function(){
        //         var key = Array.prototype.shift.apply(arguments);
        //         var fns = clientList[key];
        //         if(!fns || fns.length ===0) return false;
        //         for(var i=0, l=fns.length; i<l; i++){
        //             fns[i].apply(this, arguments);
        //         }
        //     };
        //     remove = function(key, fn){
        //         var fns = clientList[key];
        //         if(!fns) return false;
        //         if(!fn){
        //             fns=[];
        //         }else{
        //             for(var i=fns.length-1; i>=0; i--){
        //                 if(fns[i]===fn){
        //                     fns.splice(i, 1);
        //                 }
        //             }
        //         }
        //     };
        //     return {
        //         listen,
        //         trigger,
        //         remove
        //     }
        // })();

        // var btn = document.getElementById('btn');
        // var show = document.getElementById('show');
        // var count = 0;
        // btn.onclick = function(){
        //     Event.trigger('add', count++)
        // }
        // btn.oninput = function(){
        //     Event.trigger('ab', btn.value)
        // }
        // Event.listen('ab', function(count){
        //     show.value = count;
        // })
        // show.oninput = function(){
        //     Event.trigger('ba', show.value)
        // }
        // Event.listen('ba', function(count){
        //     btn.value = count;
        // })

        // var Event = (function(){
        //     var global = this,
        //         Event,
        //         _default = 'default';

        //     Event = function(){
        //         var _listen,
        //             _trigger,
        //             _remove,
        //             _slice = Array.prototype.slice,
        //             _shift = Array.prototype.shift,
        //             _unshift = Array.prototype.unshift,
        //             namespaceCache = {},
        //             _create,
        //             find,
        //             each = function(ary, fn){
        //                 var ret;
        //                 for(var i= 0, l=ary.length; i<l; i++){
        //                     var n = ary[i];
        //                     ret = fn.call(n, i, n);
        //                 }
        //                 return ret;
        //             };
                
        //         _listen = function(key, fn, cache){
        //             if(!cache[key]){
        //                 cache[key] = [];
        //             }
        //             cache[key].push(fn);
        //         };

        //         _remove = function(key, cache, fn){
        //             if(cache[key]){
        //                 if(fn){
        //                     for(var i = cache[key].length; i>=0; i--){
        //                         if(cache[key][i] === fn){
        //                             cache[key].splice(i, 1);
        //                         }
        //                     }
        //                 }else{
        //                     cache[key] = [];
        //                 }
        //             }
        //         };
                
        //         _trigger = function(){
        //             var cache = _shift.call(arguments),
        //                 key = _shift.call(arguments),
        //                 args = arguments,
        //                 _self = this,
        //                 ret,
        //                 stack = cache[key];
        //             if(!stack || !stack.length){
        //                 return;
        //             }
        //             return each(stack, function(){
        //                 return this.apply(_self, args);
        //             });
        //         };

        //         _create = function(namespace){
        //             var namespace = namespace || _default;
        //             var cache = {},
        //                 offlineStack = [],
        //                 ret = {
        //                     listen: function(key, fn, last){
        //                         _listen(key, fn, cache);
        //                         if(offlineStack === null){
        //                             return;
        //                         }
        //                         if(last === 'last'){
        //                             offlineStack.length && offlineStack.pop()();
        //                         }else{
        //                             each(offlineStack, function(){
        //                                 this();
        //                             });
        //                         }
        //                         offlineStack = null;
        //                     },
                            
        //                     one: function(key, fn, last){
        //                         _remove(key, cache);
        //                         this.listen(key, fn, last);
        //                     },

        //                     remove: function(key, fn){
        //                         _remove(key, cache, fn);
        //                     },

        //                     trigger: function(){
        //                         var fn,
        //                             args,
        //                             _self = this;
        //                         _unshift.call(arguments, cache);
        //                         args = arguments;
        //                         fn = function(){
        //                             return _trigger.apply(_self, args);
        //                         };
        //                         if(offlineStack){
        //                             return offlineStack.push(fn);
        //                         }
        //                         return fn();
        //                     }
        //                 };
                       
        //             return namespace ? (
        //                 namespaceCache[namespace] ? namespaceCache[namespace] :
        //                     namespaceCache[namespace] = ret) : ret;
        //         };
                
        //         return{
        //             create: _create,
        //             one: function(key, fn, last){
        //                 var event = this.create();
        //                 event.one(key, fn, last);
        //             },
        //             remove: function(key, fn){
        //                 var event = this.create();
        //                 event.remove(key, fn);
        //             },
        //             listen: function(key, fn, last){
        //                 var event = this.create();
        //                 event.listen(key, fn, last);
        //             },
        //             trigger: function(){
        //                 var event = this.create();
        //                 event.trigger.apply(this, arguments);
        //             }
        //         };
        //     }();

        //     return Event;
        // })();

        /*****简单版发布订阅模式*****/
        var event = (function () {
            // 全局的命名空间缓存数据
            var namesapceCaches = {};
            var _default = 'default';
            var shift = Array.prototype.shift;
            var hasNameSpace = function (namespace, key) {
                // 不存在命名空间
                if (!namesapceCaches[namespace]) {
                    namesapceCaches[namespace] = {}
                }
                // 命名空间下不存在该key的订阅对象
                if (!namesapceCaches[namespace][key]) {
                    namesapceCaches[namespace][key] = {
                        // 该key下的订阅的事件缓存列表
                        cache: [],
                        // 该key下的离线事件
                        offlineStack: []
                    }
                }
            }
            // 使用命名空间
            var _use = function (namespace) {
                var namespace = namespace || _default;
                return {
                    // 订阅消息
                    on: function (key, fn) {
                        hasNameSpace(namespace, key);
                        namesapceCaches[namespace][key].cache.push(fn);
                        // 没有订阅之前，发布者发布的信息保存在offlineStack中,现在开始显示离线消息(只发送一次)
                        var offlineStack = namesapceCaches[namespace][key].offlineStack;
                        if (offlineStack.length === 0) { return; }
        
                        for (var i = offlineStack.length - 1; i >= 0; i--) {
                            // 一次性发送所有的离线数据
                            fn(offlineStack[i]);
                        }
                        offlineStack.length = 0;
                    },
                    // 发布消息
                    emit: function () {
                        // 获取key 
                        var key = shift.call(arguments);
                        hasNameSpace(namespace, key);
                        // 获取该key对应缓存的订阅回调函数
                        var fns = namesapceCaches[namespace][key].cache;
                        if (fns.length === 0) {
                            var data = shift.call(arguments);
                            // 还没有订阅，保存发布的信息
                            namesapceCaches[namespace][key].offlineStack.push(data);
                            return;
                        }
                        for (var i = fns.length - 1; i >= 0; i--) {
                            fns[i].apply(this, arguments);
                            if (fns[i].once) {
                                fns.splice(i, 1);
                            }
                        }
                    },
                    remove: function (key, fn) {
                        // 获取key 
                        var key = shift.call(arguments);
                        // 不存在命名空间和订阅对象
                        if (!namesapceCaches[namespace] || !namesapceCaches[namespace][key]) {
                            return;
                        }
                        // 获取该key对应缓存的订阅回调函数
                        var fns = namesapceCaches[namespace][key].cache;
                        if (fns.length === 0) {
                            return;
                        }
                        if (!fn) {
                            fns && (fns=[]);
                        } else {
                            for (var i = fns.length - 1; i >= 0; i--) {
                                if (fn === fns[i]) {
                                    fns.splice(i, 1);
                                }
                            }
                        }
                    },
                    once: function (key, fn) {
                        this.on(key, fn);
                        fn.once = true;
                    }
                }
            }
            return {
                // 用户的命名空间
                use: _use,
                /**
                 * 默认的命名空间
                 * on,emit,remove,once都为代理方法。
                */
                on: function (key, fn) {
                    var event = this.use();
                    event.on(key, fn);
                },
                emit: function () {
                    var event = this.use();
                    event.emit.apply(this, arguments);
                },
                remove: function (key, fn) {
                    var event = this.use();
                    event.remove(key, fn);
                },
                once: function (key, fn) {
                    var event = this.use();
                    event.once(key, fn);
                },
                show: function () {
                    return namesapceCaches;
                }
            }
        })();
        /****/

        // class A {
        //     constructor(){
        //         this.a = 4;
        //         // this.name = this.name;
        //     }
        //     a = 3;
        //     name = function () {
        //         console.log('bbbb')
        //     }
        // }
        // let obja = new A();
        // console.log(obja.hasOwnProperty('name'))

        /**类中this */
        class Point {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                // this.name = this.name.bind(this)
                // this.age = this.age.bind(this)
                // this.age = () => {
                //     console.log(this)
                //     console.log('age')
                // }
            }
            //等于在constructor里this.age = function(){console.log('age')}
            age = function() {
                console.log(this)
                console.log('age')
            }
            name() {
               console.log(this);
               console.log('name')
            }
        }
          
        var point = new Point(2, 3);
        let {age, name} = point;
        // age()
        // name()
        // console.log(point.hasOwnProperty('name')) // false
        // console.log(point.hasOwnProperty('age')) // true
        /***/

        var button1 = document.getElementById( 'button1' ); 
        var button2 = document.getElementById( 'button2' );
        var button3 = document.getElementById( 'button3' );
        // var setCommand = function(button, command){
        //     button.onclick = function(){
        //         command.execute();
        //     }
        // }
        // var MenuBar = {
        //     refresh: function(){
        //         console.log('刷新')
        //     }
        // };
        // var SubMenu = {
        //     add: function(){
        //         console.log('增加');
        //     },
        //     del: function(){
        //         console.log('删除');
        //     }
        // };

        // var RefreshMenuBarCommand = function(receiver){
        //     this.receiver = receiver;
        // };
        // RefreshMenuBarCommand.prototype.execute = function(){
        //     this.receiver.refresh();
        // };

        // var AddSubMenuCommand = function(recevier){
        //     this.recevier = recevier;
        // };
        // AddSubMenuCommand.prototype.execute = function(){
        //     this.receiver.add();
        // };

        // var DelSubMenuCommand = function(receiver){
        //     this.receiver = receiver;
        // };
        // DelSubMenuCommand.prototype.execute = function(){
        //     console.log('删除')
        // };
        // var refreshMenuBarCommand = new RefreshMenuBarCommand(MenuBar);
        // var addSubMenuCommand = new AddSubMenuCommand(SubMenu);
        // var delSubMenuCommand = new DelSubMenuCommand(SubMenu);
        // setCommand(button1, refreshMenuBarCommand);
        // setCommand(button2, addSubMenuCommand);
        // setCommand(button3, delSubMenuCommand);

        // var setCommand = function(button, command){
        //     button.onclick = function(){
        //         command.execute();
        //     }
        // };
        // var MenuBar = {
        //     refresh: function(){
        //         console.log('刷新');
        //     }
        // };
        // var RefreshMenuBarCommand = function(receiver){
        //     return {
        //         execute: function(){
        //             receiver.refresh();
        //         }
        //     }
        // };
        // var refreshMenuBarCommand = new RefreshMenuBarCommand(MenuBar);
        // setCommand(button1, refreshMenuBarCommand);

        // var Ryu = {
        //     attack: function(){
        //         console.log('攻击');
        //     },
        //     defense: function(){
        //         console.log('防御')
        //     },
        //     jump: function(){
        //         console.log('跳');
        //     },
        //     crouch: function(){
        //         console.log('蹲')
        //     }
        // };
        // var makeCommand = function(receiver, state){
        //     return function(){
        //         receiver[state]();
        //     }
        // };
        // var commands = {
        //     119: 'jump',
        //     115: 'crouch',
        //     97: 'defense',
        //     100: 'attack'
        // };

        // var commandStack = [];
        // document.onkeypress = function(ev){
        //     var keyCode = ev.keyCode,
        //         command = makeCommand(Ryu, commands[keyCode]);
        //     if(command){
        //         command();
        //         commandStack.push(command);
        //     }
        // };

        // document.getElementById('replay').onclick = function(){
        //     var command;
        //     while(command = commandStack.shift()){
        //         command();
        //     }
        // };

        // var closeDoorCommand = {
        //     execute: function(){
        //         console.log('关门');
        //     },
        //     undo: function(){
        //         console.log('开门');
        //     }
        // };
        // var openPcCommand = {
        //     execute: function(){
        //         console.log('开电脑');
        //     },
        //     undo: function(){
        //         console.log('关电脑');
        //     }
        // };
        // var openQQCommand = {
        //     execute: function(){
        //         console.log('打开QQ');
        //     },
        //     undo: function(){
        //         console.log('关闭QQ');
        //     }
        // };
        // var MacroCommand = function() {
        //     return {
        //         commandList: [],
        //         add: function(command){
        //             this.commandList.push(command);
        //         },
        //         execute: function(){
        //             for(var i=0, l= this.commandList.length; i<l; i++){
        //                 this.commandList[i].execute();
        //             }
        //         },
        //         undo: function(){
        //             for(var i=0, l= this.commandList.length; i<l; i++){
        //                 this.commandList[i].undo();
        //             }
        //         }
        //     }
        // };
        // var macroCommand1 = MacroCommand();
        // macroCommand1.add(closeDoorCommand);
        // macroCommand1.add(openPcCommand);

        // var macroCommand2 = MacroCommand();
        // macroCommand2.add(openQQCommand);

        // var macroCommand = MacroCommand();
        // macroCommand.add(macroCommand1);
        // macroCommand.add(macroCommand2);
        // macroCommand.execute();

        // var Coffee = function(){};
        // Coffee.prototype.boilWater = function(){
        //     console.log('煮水');
        // };
        // Coffee.prototype.brewCoffee = function(){
        //     console.log('泡咖啡');
        // };
        // Coffee.prototype.pourInCup = function(){
        //     console.log('到咖啡');
        // };
        // Coffee.prototype.addSugarAndMilk = function(){
        //     console.log('加糖奶');
        // };
        // Coffee.prototype.init = function(){
        //     this.boilWater();
        //     this.brewCoffee();
        //     this.pourInCup();
        //     this.addSugarAndMilk();
        // };

        // var Tea = function(){};
        // Tea.prototype.boilWater = function(){
        //     console.log('煮水');
        // };
        // Tea.prototype.brewTea = function(){
        //     console.log('泡茶');
        // };
        // Tea.prototype.pourInCup = function(){
        //     console.log('到茶');
        // };
        // Tea.prototype.addLemon = function(){
        //     console.log('加柠檬');
        // };
        // Tea.prototype.init = function(){
        //     this.boilWater();
        //     this.brewTea();
        //     this.pourInCup();
        //     this.addLemon();
        // };

        // var Beverage = function(){};
        // Beverage.prototype.boilWater = function(){
        //     console.log('煮水');
        // };
        // Beverage.prototype.brew = function(){
        //     throw new Error('子类必须重写brew');
        // };
        // Beverage.prototype.pourInCup = function(){
        //     throw new Error('子类必须重写pourInCup');
        // };
        // Beverage.prototype.addCondiments = function(){
        //     throw new Error('子类必须重写addCondiments');
        // };
        // Beverage.prototype.customerWantsCondiments = function(){
        //     return true;
        // };
        // Beverage.prototype.init = function(){
        //     this.boilWater();
        //     this.brew();
        //     this.pourInCup();
        //     if(this.customerWantsCondiments()){
        //         this.addCondiments();
        //     }
        // };

        // var Coffee = function(){};
        // Coffee.prototype = new Beverage();
        // Coffee.prototype.brew = function(){
        //     console.log('泡咖啡');
        // };
        // Coffee.prototype.pourInCup = function(){
        //     console.log('倒咖啡');
        // };
        // Coffee.prototype.addCondiments = function(){
        //     console.log('加糖奶');
        // };
       
        // var CoffeeWithHook = function(){};
        // CoffeeWithHook.prototype = new Beverage();
        // CoffeeWithHook.prototype.brew = function(){
        //     console.log('泡咖啡')
        // };
        // CoffeeWithHook.prototype.pourInCup = function(){
        //     console.log('到咖啡');
        // };
        // CoffeeWithHook.prototype.addCondiments = function(){
        //     console.log('加糖奶');
        // };
        // CoffeeWithHook.prototype.customerWantsCondiments = function(){
        //     return window.confirm('要加糖吗？')
        // };
        // var coffeeWithHook = new CoffeeWithHook();
        // coffeeWithHook.init();

        // var Beverage = function(param){
        //     var boilWater = function(){
        //         console.log('煮水');
        //     };
        //     var brew = param.brew || function(){
        //         throw new Error('必须brew方法');
        //     };
        //     var pourInCup = param.pourInCup || function(){
        //         throw new Error('必须pourInCup方法');
        //     };
        //     var addCondiments = param.addCondiments || function(){
        //         throw new Error('必须addCondiments');
        //     };
        //     var F = function(){};
        //     F.prototype.init = function(){
        //         boilWater();
        //         brew();
        //         pourInCup();
        //         addCondiments();
        //     };
        //     return F
        // };
        // var Coffee = Beverage({
        //     brew: function(){
        //         console.log('泡咖啡');
        //     },
        //     pourInCup: function(){
        //         console.log('倒咖啡');
        //     },
        //     addCondiments: function(){
        //         console.log('加糖奶');
        //     }
        // });
        // var coffee = new Coffee();
        // coffee.init();

        // var Model = function(sex){
        //     this.sex = sex;
        // };
        // Model.prototype.takePhoto = function(){
        //     console.log(this.sex, this.underwear);
        // };
        // var maleModel = new Model('male');
        // for(var i = 1; i<=50; i++){
        //     maleModel.underwear = 'underwear'+i;
        //     maleModel.takePhoto();
        // }

        // var id = 0;
        // window.startUpload = function(uploadType, files){
        //     for(var i = 0, l=files.length; i<l; i++){
        //         var uploadObj = new Upload( uploadType, files[i].fileName, files[i].fileSize );
        //         uploadObj.init( id++ ); 
        //     }
        // };
        // var Upload = function(uploadType, fileName, fileSize){
        //     this.uploadType = uploadType;
        //     this.fileName = fileName;
        //     this.fileSize = fileSize;
        //     this.dom = null;
        // };
        // Upload.prototype.init = function(id){
        //     var that = this;
        //     this.id = id;
        //     this.dom = document.createElement('div');
        //     this.dom.innerHTML = '<span>文件名称:'+ this.fileName +', 文件大小: '+ this.fileSize +'</span>' + '<button class="delFile">删除</button>';
        //     this.dom.querySelector('.delFile').onclick = function(){
        //         that.delFile();
        //     };
        //     document.body.appendChild(this.dom);
        // };
        // Upload.prototype.delFile = function(){
        //     if(this.fileSize < 3000){
        //         return this.dom.parentNode.removeChild(this.dom);
        //     }
        //     if(window.confirm('确定要删除该文件吗？'+this.fileName)){
        //         return this.dom.parentNode.removeChild(this.dom);
        //     }
        // };
        // var Upload = function(uploadType){
        //     this.uploadType = uploadType;
        // };
        // Upload.prototype.delFile = function(id){
        //     uploadManager.setExternalState(id, this);
        //     if(this.fileSize < 3000){
        //         return this.dom.parentNode.removeChild(this.dom);
        //     }
        //     if(window.confirm('确定要删除该文件吗？'+this.fileName)){
        //         return this.dom.parentNode.removeChild(this.dom);
        //     }
        // };

        // var UploadFactory = (function(){
        //     var createdFlyWeightObjs = {};
        //     return {
        //         create: function(uploadType){
        //             if(createdFlyWeightObjs[uploadType]){
        //                 return createdFlyWeightObjs[uploadType];
        //             }
        //             return createdFlyWeightObjs[uploadType] = new Upload(uploadType);
        //         }
        //     }
        // })();
        
        // var uploadManager = (function(){
        //     var uploadDatabase = {};
        //     return {
        //         add: function(id, uploadType, fileName, fileSize){
        //             var flyWeightObj = UploadFactory.create(uploadType);
        //             var dom = document.createElement( 'div' ); dom.innerHTML =
        //             '<span>文件名称:'+ fileName +', 文件大小: '+ fileSize +'</span>' + '<button class="delFile">删除</button>';
        //             dom.querySelector( '.delFile' ).onclick = function(){ 
        //                 flyWeightObj.delFile( id );
        //             }
        //             document.body.appendChild( dom );

        //             uploadDatabase[id] = {
        //                 fileName,
        //                 fileSize,
        //                 dom
        //             };
        //             return flyWeightObj;
        //         },
        //         setExternalState: function(id, flyWeightObj){
        //             var uploadData = uploadDatabase[id];
        //             for(var i in uploadData){
        //                 flyWeightObj[i] = uploadData[i];
        //             }
        //         }
        //     }
        // })();

        // var id = 0;
        // window.startUpload = function(uploadType, files){
        //     for(var i = 0, l=files.length; i<l; i++){
        //         var uploadObj = uploadManager.add( ++id, uploadType, files[i].fileName, files[i].fileSize );
        //     }
        // };
        // startUpload('plugin',[
        //     {
        //         fileName: '1.txt',
        //         fileSize: 1000
        //     },
        //     {
        //         fileName: '2.html',
        //         fileSize: 3000
        //     },
        //     {
        //         fileName: '3.txt',
        //         fileSize: 5000
        //     }
        // ]);
        // startUpload('flash',[
        //     {
        //         fileName: '4.txt',
        //         fileSize: 1000
        //     },
        //     {
        //         fileName: '5.html',
        //         fileSize: 3000
        //     },
        //     {
        //         fileName: '6.txt',
        //         fileSize: 5000
        //     }
        // ]);

        // var toolTipFactory = (function(){
        //     var toolTipTool = [];
        //     return {
        //         create: function(){
        //             if(toolTipTool.length===0){
        //                 var div = document.createElement('div');
        //                 document.body.appendChild(div);
        //                 return div;
        //             }else{
        //                 return toolTipTool.shift();
        //             }
        //         },
        //         recover: function(toolTipDom){
        //             return toolTipTool.push(toolTipDom);
        //         }
        //     }
        // })();

        // var ary = [];
        // for(var i = 0, str; str = ['A','B'][i++];){
        //     var toolTip = toolTipFactory.create();
        //     toolTip.innerHTML = str;
        //     ary.push(toolTip);
        // }
        // for(var i = 0, toolTip; toolTip = ary[i++];){ 
        //     toolTipFactory.recover(toolTip);
        // }

        // var objectPoolFactory = function(createObjFn){
        //     var objectPool = [];
        //     return {
        //         create: function(){
        //             var obj = objectPool.length===0?
        //                 createObjFn.apply(this, arguments) : objectPool.shift();
        //             return obj;
        //         },
        //         recover: function(obj){
        //             objectPool.push(obj);
        //         }
        //     }
        // };

        // var iframeFactory = objectPoolFactory(function(){
        //     var iframe = document.createElement('iframe');
        //     document.body.appendChild(iframe);
        //     iframe.onload = function(){
        //         iframe.onload = null;
        //         iframeFactory.recover(iframe);
        //     }
        //     return iframe;
        // });
        // var iframe1 = iframeFactory.create();

        // var order500 = function(orderType, pay, stock){
        //     if(orderType===1 && pay){
        //         console.log('500定金100优惠');
        //     }else{
        //         return 'nextSuccessor';
        //     }
        // };
        // var order200 = function(orderType, pay, stock){
        //     if(orderType===2 && pay){
        //         console.log('200定金50优惠');
        //     }else{
        //         return 'nextSuccessor';
        //     }
        // };
        // var orderNormal = function(orderType, pay, stock){
        //     if(stock>0){
        //         console.log('普通购买');
        //     }else{
        //         console.log('库存不够');
        //     }
        // };

        // var Chain = function(fn){
        //     this.fn = fn;
        //     this.successor = null;
        // };
        // Chain.prototype.setNextSuccessor = function(successor){
        //     return this.successor = successor;
        // };
        // Chain.prototype.passRequest = function(){
        //     var ret = this.fn.apply(this, arguments);
        //     if(ret === 'nextSuccessor'){
        //         return this.successor && this.successor.passRequest.apply( this.successor, arguments );
        //     }
        //     return ret;
        // };
        // Chain.prototype.next = function(){
        //     return this.successor && this.successor.passRequest.apply( this.successor, arguments );
        // }
        // var chainOrder500 = new Chain(order500);
        // var chainOrder200 = new Chain(order200);
        // var chainOrderNormal = new Chain(orderNormal);
        // chainOrder500.setNextSuccessor(chainOrder200);
        // chainOrder200.setNextSuccessor(chainOrderNormal);

        // var chain1 = new Chain(function(){
        //     console.log(1);
        //     return 'nextSuccessor';
        // });
        // var chain2 = new Chain(function(){
        //     console.log(2);
        //     setTimeout(() => {
        //         this.next();
        //     }, 4000);
        // });
        // var chain3 = new Chain(function(){
        //     console.log(3);
        // });
        // chain1.setNextSuccessor(chain2).setNextSuccessor(chain3);
        // chain1.passRequest();

        // function Player(name, teamColor){
        //     this.name = name;
        //     this.partners = [];
        //     this.enemies = [];
        //     this.state = 'live';
        //     this.teamColor = teamColor;
        // };
        // Player.prototype.win = function(){
        //     console.log('winner:' + this.name);
        // };
        // Player.prototype.lose = function(){
        //     console.log('loser:' + this.name);
        // };
        // Player.prototype.die = function(){
        //     var all_dead = true;
        //     this.state = 'dead';
        //     for(var i = 0, partner; partner = this.partners[i++];){
        //         if(partner.state !== 'dead'){
        //             all_dead = false;
        //             break;
        //         }
        //     }
        //     if(all_dead === true){
        //         this.lose();
        //         this.partners.map(item=>{
        //             item.lose();
        //         })
        //         this.enemies.map(item=>{
        //             item.win();
        //         })
        //     }
        // };

        // var players = [];
        // var playerFactory = function(name, teamColor){
        //     var newPlayer = new Player(name, teamColor);
        //     players.map(player=>{
        //         if(player.teamColor===newPlayer.teamColor){
        //             player.partners.push(newPlayer);
        //             newPlayer.partners.push(player);
        //         }else{
        //             player.enemies.push(newPlayer);
        //             newPlayer.enemies.push(player);
        //         }
        //     });
        //     players.push(newPlayer);
        //     return newPlayer;
        // };
        
        // function Player(name, teamColor){
        //     this.name = name;
        //     this.teamColor = teamColor;
        //     this.state = 'alive';
        // };
        // Player.prototype.win = function(){
        //     console.log(this.name+'won');
        // };
        // Player.prototype.lose = function(){
        //     console.log(this.name+ 'lost');
        // };
        // Player.prototype.die = function(){
        //     this.state = 'dead';
        //     playerDirector.receiveMessage('playerDead', this);
        // };
        // Player.prototype.remove = function(){
        //     playerDirector.receiveMessage('removePlayer', this);
        // };
        // Player.prototype.changeTeam = function(color){
        //     playerDirector.receiveMessage('changeTeam', this, color);
        // };
        // var playerFactory = function(name, teamColor){
        //     var newPlayer = new Player(name, teamColor);
        //     playerDirector.receiveMessage('addPlayer', newPlayer);
        //     return newPlayer;
        // };

        // var playerDirector = (function(){
        //     var players = {},
        //         operations = {};

        //     operations.addPlayer = function(player){
        //         var teamColor = player.teamColor;
        //         players[teamColor] = players[teamColor] || [];
        //         players[teamColor].push(player);
        //     };
        //     operations.removePlayer = function(player){
        //         var teamColor = player.teamColor,
        //             teamPlayers = players[teamColor] || [];
        //         teamPlayers.map((item, index)=>{
        //             if(player===item){
        //                 teamPlayers.splice(index, 1);
        //             }
        //         })
        //     };
        //     operations.changeTeam = function(player, newTeamColor){
        //         operations.removePlayer(player);
        //         player.teamColor = newTeamColor;
        //         operations.addPlayer(player);
        //     };
        //     operations.playerDead = function(player){
        //         var teamColor = player.teamColor,
        //             teamPlayers = players[teamColor];

        //         var all_dead = true;
        //         all_dead = !(teamPlayers.some(item=>{
        //             return item.state!=='dead'
        //         }))

        //         if(all_dead === true){
        //             teamPlayers.map(item=>{
        //                 item.lose();
        //             });
                    
        //             for(var color in players){
        //                 if(color!==teamColor){
        //                     var teamPlayers = players[color];
        //                     teamPlayers.map(item=>{
        //                         item.win();
        //                     });
        //                 }
        //             }
        //         }
        //     };
        //     var receiveMessage = function(){
        //         var message = Array.prototype.shift.call(arguments);
        //         operations[message].apply(this, arguments);
        //     };
        //     return {
        //         receiveMessage
        //     }
        // })();

        // var player1 = playerFactory('1', 'red');
        // var player2 = playerFactory('2', 'red');
        // var player3 = playerFactory('3', 'red');
        // var player4 = playerFactory('4', 'blue');
        // var player5 = playerFactory('5', 'blue');
        // var player6 = playerFactory('6', 'blue');
        // player1.changeTeam('blue');
        // player2.die();
        // player3.die();

        // var colorSelect = document.getElementById( 'colorSelect' ),
        //     numberInput = document.getElementById( 'numberInput' ), 
        //     colorInfo = document.getElementById( 'colorInfo' ), 
        //     numberInfo = document.getElementById( 'numberInfo' ), 
        //     nextBtn = document.getElementById( 'nextBtn' );
        // var goods = {
        //     'red': 3,
        //     'blue': 6
        // };
        // colorSelect.onchange = function(){
        //     var color = this.value,
        //         number = numberInput.value,
        //         stock = goods[color];
        //     colorInfo.innerHTML = color;
        //     if(!color){
        //         nextBtn.disabled = true;
        //         nextBtn.innerHTML = '请选择颜色';
        //         return;
        //     }
        //     if( ( ( number - 0 ) | 0 ) !== number - 0 ){
        //         nextBtn.disabled = true;
        //         nextBtn.innerHTML = '请输入合适的购买数量';
        //         return;
        //     }
        //     if(number > stock){
        //         nextBtn.disabled = true;
        //         nextBtn.innerHTML = '库存不足';
        //         return;
        //     }
        //     nextBtn.disabled = false;
        //     nextBtn.innerHTML = '结算';
        // };
        // numberInput.oninput = function(){
        //     var color = colorSelect.value, 
        //         number = this.value, 
        //         stock = goods[ color ]; 
        //         numberInfo.innerHTML = number;
        //     if ( !color ){
        //         nextBtn.disabled = true; 
        //         nextBtn.innerHTML = '请选择手机颜色'; 
        //         return;
        //     }
        //     if ( ( ( number - 0 ) | 0 ) !== number - 0 ){ 
        //         nextBtn.disabled = true;
        //         nextBtn.innerHTML = '请输入正确的购买数量'; 
        //         return;
        //     }
        //     if(number>stock){
        //         nextBtn.disabled = true;
        //         nextBtn.innerHTML = '库存不足';
        //         return;
        //     }
        //     nextBtn.disabled = false;
        //     nextBtn.innerHTML = '结算';
        // };

        // var Plane = function(){};
        // Plane.prototype.fire = function(){
        //     console.log('子弹');
        // }
        // var MissileDecorator = function(plane){
        //     this.plane = plane;
        // }
        // MissileDecorator.prototype.fire = function(){
        //     this.plane.fire();
        //     console.log('导弹');
        // }
        // var AtomDecorator = function(plane){
        //     this.plane = plane;
        // }
        // AtomDecorator.prototype.fire = function(){
        //     this.plane.fire();
        //     console.log('原子弹');
        // }

        // var plane = new Plane();
        // plane = new MissileDecorator(plane);
        // plane = new AtomDecorator(plane);
        // plane.fire();

        // Function.prototype.before = function(beforefn){
        //     var _self = this;
        //     return function(){
        //         beforefn.apply(this, arguments);
        //         return _self.apply(this, arguments);
        //     }
        // }
        // Function.prototype.after = function(afterfn){
        //     var _self = this;
        //     return function(){
        //         var ret = _self.apply(this, arguments);
        //         afterfn.apply(this, arguments);
        //         return ret;
        //     }
        // }

        // var before = function(fn, beforefn){
        //     return function(){
        //         beforefn.apply(this, arguments);
        //         return fn.apply(this, arguments);
        //     }
        // }
        // var a = before(
        //     function(){
        //         console.log(1)
        //     },
        //     function(){
        //         console.log(2)
        //     }
        // )
        // a = before(a, function(){
        //     console.log(3)
        // });
        // a();

        // var func = function(param){
        //     console.log(param);
        // }
        // func = func.before(function(param){
        //     console.log(param)
        //     param.b = 'b';
        // })
        // func({a: 'a'});

        // var OffLightState = function(light){
        //     this.light = light;
        // }
        // OffLightState.prototype.buttonWasPressed = function(){
        //     console.log('弱光');
        //     this.light.setState(this.light.weakLightState);
        // };
        // var WeakLightState = function(light){
        //     this.light = light;
        // }
        // WeakLightState.prototype.buttonWasPressed = function(){
        //     console.log('强光');
        //     this.light.setState(this.light.strongLightState);
        // };
        // var StrongLightState = function(light){
        //     this.light = light;
        // }
        // StrongLightState.prototype.buttonWasPressed = function(){
        //     console.log('关灯');
        //     this.light.setState(this.light.offLightState);
        // }

        // var Light = function(){
        //     this.offLightState = new OffLightState(this);
        //     this.weakLightState = new WeakLightState(this);
        //     this.strongLightState = new StrongLightState(this);
        //     this.button = null;
        // }
        // Light.prototype.init = function(){
        //     var button = document.createElement('button'),
        //         self = this;
        //     this.button = document.body.appendChild(button);
        //     this.button.innerHTML = '开关';
        //     this.currState = this.offLightState;
        //     this.button.onclick = function(){
        //         self.currState.buttonWasPressed();
        //     }
        // }
        // Light.prototype.setState = function(newState){
        //     this.currState = newState;
        // }
        // var light = new Light();
        // light.init();

        /**状态模式 */
        /*var plugin = (function(){
            var plugin = document.createElement( 'embed' ); 
            plugin.style.display = 'none';
            plugin.type = 'application/txftn-webkit';
            plugin.sign = function(){ 
                console.log( '开始文件扫描' );
            }
            plugin.pause = function(){
             console.log( '暂停文件上传' ); 
            };
            plugin.uploading = function(){ 
                console.log( '开始文件上传' );
            };
            plugin.del = function(){ 
                console.log( '删除文件上传' );
            }
            plugin.done = function(){ 
                console.log( '文件上传完成' );
            }
            document.body.appendChild( plugin );
            return plugin; 
        })();

        window.external.upload = function( state ){
            console.log( state ); 
        };

        var Upload = function(fileName){
            this.plugin = plugin;
            this.fileName = fileName;
            this.button1 = null;
            this.button2 = null;
            this.signState = new SignState(this);
            this.uploadingState = new UploadingState(this);
            this.pauseState = new PauseState(this);
            this.doneState = new DoneState(this);
            this.errorState = new ErrorState(this);
            this.currState = this.signState;
        };
        Upload.prototype.init = function(){
            var that = this;
            this.dom = document.createElement('div');
            this.dom.innerHTML = 
            '<span>文件名称:'+ this.fileName +'</span>\
            <button data-action="button1">扫描中</button>\
            <button data-action="button2">删除</button>';
            document.body.appendChild(this.dom);
            this.button1 = this.dom.querySelector( '[data-action="button1"]' );
            this.button2 = this.dom.querySelector( '[data-action="button2"]' );
            this.bindEvent();
        };
        Upload.prototype.bindEvent = function(){
            var self = this;
            this.button1.onclick = function(){
                self.currState.clickHandler1();
            };
            this.button2.onclick = function(){
                self.currState.clickHandler2();
            };
        };
        Upload.prototype.sign = function(){
            this.plugin.sign();
            this.currState = this.signState;
        };
        Upload.prototype.uploading = function(){ 
            this.button1.innerHTML = '正在上传，点击暂停'; 
            this.plugin.uploading();
            this.currState = this.uploadingState;
        };
        Upload.prototype.pause = function(){ 
            this.button1.innerHTML = '已暂停，点击继续上传'; 
            this.plugin.pause();
            this.currState = this.pauseState;
        };
        Upload.prototype.done = function(){ 
            this.button1.innerHTML = '上传完成'; 
            this.plugin.done();
            this.currState = this.doneState;
        };
        Upload.prototype.error = function(){ 
            this.button1.innerHTML = '上传失败'; 
            this.currState = this.errorState;
        };
        Upload.prototype.del = function(){ 
            this.plugin.del(); 
            this.dom.parentNode.removeChild( this.dom );
        };

        var StateFactory = (function(){
            var State = function(){};
            State.prototype.clickHandler1 = function(){
                throw new Error('子类必须重写');
            }
            State.prototype.clickHandler2 = function(){
                throw new Error('子类必须重写');
            }
            return function(param){
                var F = function(uploadObj){
                    this.uploadObj = uploadObj;
                };
                F.prototype = new State();
                for(var i in param){
                    F.prototype[i] = param[i];
                }
                return F;
            }
        })();
        var SignState = StateFactory({
            clickHandler1: function(){
                console.log( '扫描中，点击无效...' );
            },
            clickHandler2: function(){
                console.log( '文件正在上传中，不能删除' );
            },
        });
        var UploadingState = StateFactory({ 
            clickHandler1: function(){
                this.uploadObj.pause(); 
            },
            clickHandler2: function(){
                console.log( '文件正在上传中，不能删除' );
            } 
        });
        var PauseState = StateFactory({ 
            clickHandler1: function(){
                this.uploadObj.uploading(); 
            },
            clickHandler2: function(){ 
                this.uploadObj.del();
            } 
        });
        var DoneState = StateFactory({ 
            clickHandler1: function(){
                console.log( '文件已完成上传, 点击无效' ); 
            },
            clickHandler2: function(){ 
                this.uploadObj.del();
            } 
        });
        var ErrorState = StateFactory({ 
            clickHandler1: function(){
                console.log( '文件上传失败, 点击无效' ); 
            },
            clickHandler2: function(){ 
                this.uploadObj.del();
            } 
        });
        
        var uploadObj = new Upload('JavaScript');
        uploadObj.init();
        window.external.upload = function( state ){
            uploadObj[ state ]();
        };  
        window.external.upload('sign');
        setTimeout(function(){
            window.external.upload( 'uploading' ); // 1 秒后开始上传
        }, 1000 );
        setTimeout(function(){
            window.external.upload( 'done' ); // 5 秒后上传完成
        }, 5000 );*/



         








        







       











       

        


















    


       





        



        
            
        









        
 

























    }

    render(){
        return (
        <div>
            <br/>
            <h2>You Dont Know Js</h2>
        </div>
        )
    }
}