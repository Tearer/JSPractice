/* eslint-disable */
import React, {Component} from 'react';
// import * as utils from '../../utils';

export default class DontKnow extends Component{

    componentDidMount(){
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