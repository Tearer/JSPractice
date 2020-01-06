import React, {Component} from 'react';

export default class ES6 extends Component{

    componentDidMount(){
        /**
         * 块级作用域绑定*
         * *
         * const声明对象，不允许修改绑定，但可以修改值。
         * typeof访问TDZ里的变量会报错。
         * 
         * 字符串与正则表达式*
         * 
         * 在进行排序和比较前，将被操作字符串按照同一标准进行标准化，normalize()。
         * startsWith()
         * endsWith()
         * includes()
         * repeat()
         * 
         * 函数*
         * *
         * 函数默认参数。
         * 函数的length属性统计的是函数的命名参数，不统计不定参数。
         * 函数的name属性。
         * 函数内部方法：[[Call]], [[Construct]]。
         * new.target。
         * 箭头函数，this值取决于外部非箭头函数的this值，且不能通过call()、apply()或bind()方法来改变this的值。
         * 
         * 扩展对象的功能性*
         * *
         * 对象方法的简写语法
         * 可计算属性名
         * Object.is()
         * Object.assign()可以接受任意数量的源对象，并按指定的顺序将属性复制到接受对象中
         * Object.getOwnPropertyNames()、Reflect.ownKeys()、Object.assign()枚举顺序规定
         * for-in、Object.keys()、JSON.stringify()枚举顺序尚未指定
         * Object.setPrototypeOf()改变对象原型
         * 通过super引用调用对象原型上所有其他的方法
         * 方法有[[HomeObject]]属性
         * 
         * 解构*
         * *
         * 代码块语句不允许出现在赋值语句左侧，添加小括号后可以将块语句转化为一个表达式
         * 数组解构，可通过不定元素复制数组
         * 
         * Symbol*
         * *
         * Symbol.for(symbolstring)、Symbol.keyFor(symbolstring)
         * Object.getOwnPropertySymbols(object)
         * Symbol.hasInstance()、Symbol.isConcatSpreadable()、
         * Symbol.match()、Symbol.replace()、Symbol.search()、Symbol.split()、
         * Symbol.toPrimitive()
         * Symbol.toStringTag()
         * Symbol.unscopables()
         * 
         * Set Map*
         * *
         * Set集合唱被用于检查对象中是否存在某个健名，Map集合常被用于获取已存的信息
         * Set集合中的forEach()
         * Set集合转成数组，array = [...set]，自动去重
         * 数组去重：newArray = [...new Set(array)]
         * WeakSet()，保存对象的弱引用
         * Map，set(key,value)，get(key)，可用对象做键名
         * map = new Map([["name", "Nicholas"], ["age", 25]])
         * Map集合的forEach()
         * WeakMap()，键名必须是对象，保存对象的弱引用
         * 
         * Iterator、Generator*
         * *
         * 不能用箭头函数来创建生成器。
         * for-of循环通过调用Symbol.iterator方法来获取迭代器，
         * 如果只需迭代数组或集合中的值，用for-of循环代替for循环是个不错的选择。
         * Symbol.iterator
         * 默认情况下，开发者定义的对象都是不可迭代对象，但如果给Symbol.iterator属性添加一个生成器，
         * 可将其变成可迭代对象。
         * entries()返回一个迭代器，值为多个键值对
         * values()返回一个迭代器，值为集合的值
         * keys()返回一个迭代器，值为集合中的所有键名
         * NodeList默认迭代器
         * 展开运算符(...)与非数组可迭代对象。
         * 如果给迭代器的next()方法传递参数，则这个参数的值会代替生成器内部上一条yield语句的返回值。
         * return语句可以提前退出函数执行，展开运算符与for-of循环语句会直接忽略通过return语句返回值，
         * 只有done变成true就停止读取其他的值。
         * 
         * JavaScript中的类*
         * *
         * class声明类
         * 类声明不能被提升；类声明中的代码自动运行在严格模式下，不能改变；类中所有方法都是不可枚举；
         * 使用除new以外的方式调用类的构造函数会导致程序出错；不能在类中修改类名。
         * 类有声明形式和表达式形式。
         * 类可以有访问器属性。
         * 类属性支持可计算名称。
         * 类中可以定义生成器。*[Symbol.iterator](){}，定义默认迭代器。
         * 静态方法，不可在实例中访问静态成员，只能再类中访问静态成员。
         * 类继承，指定了构造函数则必须调用super()，如果不使用构造函数，则会自动调用并传入所有参数。
         * 只能再派生类的构造函数中使用super()；
         * 在构造函数中访问this前要调用super()，负责初始化this；
         * 如果不想调用super()，唯一的方法是让类的构造函数返回一个对象。
         * 如果基类有静态成员，在派生类中也可用。
         * 只有表达式可以被解析为一个函数并且具有[[Construct]]属性和原型，那么就可以用extends派生。
         * 内建对象继承，原本在内建对象中返回实例自身的方法将自动返回派生类的实例。
         * Symbol.species属性，实例对象在运行过程中，需要再次调用自身的构造函数时，会调用该属性指定的构造函数；
         * 每当在实例的方法中创建类的实例是必须使用这个构造函数；
         * 通过Symbol.species可以定义当派生类的方法返回实例时，应该返回的值的类型。
         * 在类的构造函数中使用new.target
         * 
         * 改进的数组功能*
         * *
         * Array.of()，创建包含所有参数的数组。
         * Array.from()，接受可迭代对象或类数组对象作为第一个参数，返回一个数组，
         * 可以提供一个映射函数作为第二个参数，传入第三个参数来表示映射的this值；
         * 可将所有含有Symbol.iterator属性的对象转换成数组。
         * find()和findIndex()，两个参数，回调函数与指定回调函数中this的值。
         * fill()，用指定的值填充一到多个数组元素。
         * copyWithin()，从数组中复制元素。
         * 
         * 定型数组，将任何数字转换为一个包含数字比特的数组。
         * 8种数值数据类型。
         * 数组缓冲区，ArrayBuffer()。
         * 通过视图DataView操作数组缓冲区，只读属性：buffer、byteOffset、byteLength。
         * 定型数组不是Array的实例。
         * 数组length不能更改。
         * 非法数据类型转换成0。
         * set()将其他数组复制到已有的定型数组，subarray()提前已有定型数组的一部分作为一个新的定型数组。
         * 
         * Promise与异步编程*
         * *
         * promise状态改变，可以用then()方法，接受两个参数，fulfilled时调用的函数，rejected时调用的函数。
         * 
         * 创建未完成的Promise：用Promise构造函数创建Promise，构造函数只接受一个执行器函数作为参数，该函数接受两个参数，
         * resolve()和reject()，执行器成功完成时调用resolve()，失败时调用reject()；
         * 执行器函数本身会立刻执行，完成处理程序和拒绝处理程序总在执行器完成后被添加至任务队列的末尾。
         * 创建已处理的Promise：Promise.resolve()方法只接受一个参数并返回一个完成态的Promise，
         * Promise.reject()方法创建已拒绝的Promise，
         * 如果向Promise.resolve()或Promise.reject()传入一个Promise，则会被直接返回，
         * 如果传入非Promise的thenable对象，则会创建一个新的Promise，并在then()函数中被调用。
         * 
         * 如果执行器内部抛出一个错误，则Promise的拒绝处理程序就会被调用，
         * 执行器会捕获所有抛出的错误，只有当拒绝处理程序存在时才会记录执行器中抛出的错误，否则错误会被忽略。
         * node.js环境的拒绝处理，unhandledRejection事件，rejectionHandled事件，
         * 通过事件rejectionHandled和事件unhandledRejection将潜在未处理的拒绝存储为一个列表，
         * 等待一段时间后检查列表便能够正确地跟踪潜在的未处理拒绝。
         * 
         * 
         */

        // let m1 = `Multiline\nstring`,
        //     m2 = String.raw`Multiline\nstring`;
        // console.log(m1);
        // console.log(m2);
        
        // function mixArgs(first, second="b"){
        //     console.log(arguments.length);
        //     console.log(first===arguments[0]);
        //     console.log(second===arguments[1]);
        //     first = "c";
        //     second = "d";
        //     console.log(first===arguments[0]);
        //     console.log(second===arguments[1]);
        // }
        // console.log(mixArgs.name);
        // mixArgs("a")

        // let values = [-25, -50, -75, -100];
        // console.log(Math.max(...values, 0));

        // function Person(name){
        //     if(typeof new.target !== "undefined"){
        //         this.name = name;
        //     } else {
        //         throw new Error("must use new")
        //     }
        // }
        // if(true){
        //     console.log(typeof doSomething);
        //     function doSomething(){
        //     }
        //     doSomething();
        // }
        // console.log(typeof doSomething);
         
        // let firstName = Symbol("first name");
        // let person = {
        //     [firstName]: "Nicholas"
        // };
        // Object.defineProperty(person, firstName, {writable: false});
        // let lastName = Symbol("last name");
        // Object.defineProperties(person,{
        //     [lastName]: {
        //         value: "Zakas",
        //         writable: false
        //     }
        // });
        // console.log(person[firstName]);
        // console.log(person[lastName]);
        // let uid = Symbol.for("uid");
        // let object = {
        //     [uid]: "12345"
        // };
        // let symbols = Object.getOwnPropertySymbols(object);
        // console.log(symbols.length);
        // console.log(symbols[0]);
        // console.log(object[symbols[0]]);
        // let o = {
        //     *createIterator(items){
        //         for(let i = 0; i < items.length; i++){
        //             yield items[i];
        //         }
        //     }
        // };
        // let iterator = o.createIterator([1,2,3]);
        // let colors = ["red", "green", "blue"];
        // for (let value of colors.entries()){
        //     console.log(value);
        // }
        // console.log(colors[Symbol.iterator]().next());
         
        // class PersonClass {
        //     //等价于PersonType构造函数
        //     constructor(name) {
        //         this.name = name;
        //     }
        //     //等价于PersonType.prototype.sayName
        //     sayName() {
        //         console.log(this.name);
        //     }
        //     //等价于PersonType.create
        //     static create(name) {
        //         return new PersonClass(name);
        //     }
        // }
        // let person = PersonClass.create("Nicholas");
        // let PersonClass = class PersonClass2 {}
        // let PersonClass = class {
        //     constructor(name) {
        //         this.name = name;
        //     }
        //     sayName() {
        //         console.log(this.name);
        //     }
        // }
        // let person = new PersonClass("Nicholas");
        // person.sayName();
        // PersonClass.prototype.age = 12;
        // console.log(PersonClass.prototype);
        
        // let person = new class {

        // }("参数"); //立即执行的匿名类表达式

        // class Rectangle {
        //     constructor(length, width){
        //         this.length = length;
        //         this.width = width;
        //     }
        //     getArea() {
        //         return this.length * this.width;
        //     }
        // }
        // class Square extends Rectangle {
        //     constructor(length) {
        //         super(length, length);
        //     }
        // }
        // var square = new Square(3);
        // console.log(square.getArea());
        // console.log(square instanceof Square);
        // console.log(square instanceof Rectangle);

        // class MyArray extends Array {
        //     static get [Symbol.species]() {
        //         return Array;
        //     }
        // }
        // let items = new MyArray(1,2,3,4),
        //     subitems = items.slice(1,3);
        // console.log(subitems);
        // console.log(items instanceof MyArray);
        // console.log(subitems instanceof Array);
        // console.log(subitems instanceof MyArray);

        // let thenable = {
        //     then: function(resolve, reject) {
        //         resolve(42);
        //     }
        // };
        // let p1 = Promise.resolve(thenable);
        // p1.then(function(value) {
        //     console.log(value);
        // });

























    }

    render(){
        return (
        <div>
            <br/>
            <h2>ES6</h2>
        </div>
        )
    }
}