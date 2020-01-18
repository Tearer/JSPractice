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
         * 浏览器环境的拒绝处理：unhandledrejection, rejectionhandled。
         * 响应多个Promise：Promise.all()，当迭代对象中所有Promise都被完成后返回的Promise才会被完成，
         * 只要有一个被拒绝，返回的Promise没等所有的Promise都完成就立即被拒绝。
         * Promise.race()，如果先解决的是已完成的Promise，则返回已完成Promise，先解决的是已拒绝Promise，
         * 则返回已拒绝Promise。
         * 
         * Proxy和Reflection*
         * *
         * new Proxy()可创建代替其他目标对象的代理，
         * Reflection API以对象的形式出现，对象中方法的默认特性与相同的底层操作一致，代理可以覆写这些操作。
         * set代理陷阱可以拦截写入属性操作，get代理陷阱可以拦截读取属性操作。
         * set(trapTarget, key, value, receiver)。
         * get(trapTarget, key, receiver)。
         * receiver指操作发生的对象，通常是proxy对象。
         * has(trapTarget, key)，in操作符检测给定对象中是否含有某个属性，如果自有属性或原型属性匹配这个
         * 名称或Symbol就返回true。拦截HasProperty操作，常见的in运算符。如果原对象不可配置或禁止扩展，
         * has拦截会报错。
         * deleteProperty(trapTarget, key)，拦截delete操作符。
         * setPrototypeOf(trapTarget, key)，拦截Object.setPrototypeOf方法。
         * getPrototypeOf(trapTarget)，拦截Object.getPrototypeOf()。
         * 注意Reflect.getPrototypeOf()和Reflect.setPrototypeOf()与Object.getPrototypeOf()和
         * Object.setPrototypeOf()的区别。
         * preventExtensions(trapTarget)，拦截Object.preventExtentsions操作。
         * isExtensible(trapTarget)，拦截Object.isExtensible操作。
         * defineProperty(trapTarget, key, descriptor)，拦截Object.defineProperty操作，
         * 无论将什么对象作为第三个参数传递给Object.defineProperty()方法，只有属性enumerable、
         * configureable、value、get和set将出现在传递给defineProperty陷阱的描述符对象中。
         * getOwnPropertyDescriptor(trapTarget, key)，拦截Object.getOwnPropertyDescriptor()，
         * 返回值必须是null、undefined或一个对象，且对象属性值必须是如上标准属性。
         * Object.defineProperty返回第一个参数，Reflect.defineProperty返回true或false。
         * Object.getOwnPropertyDescriptor会将非对象参数转换为参数，Reflect.getOwnPropertyDescriptor
         * 非对象参数会报错。
         * ownKeys(trapTarget)代理陷阱拦截内部方法[[OwnPropertyKeys]]，对象自身属性的读写操作。
         * 返回的数组中包含所有自身属性的键名，
         * Object.getOwnPropertyNames()和Object.keys()返回的结果将Symbol类型的属性名排除在外，
         * Object.getOwnPropertySymbols()，
         * Object.assign支持字符串和Symbol两种类型，
         * for-in循环。
         * apply(trapTarget, thisArg, argumentsList)和construct(trapTarget, argumentsList, newTarget)
         * 覆写内部方法[[Call]]和[[Construct]]；
         * 可以在函数内判断new.target是否为undefined来限制必须用new调用，当不能改写函数是，用代理construct
         * 比较方便；
         * 可在apply陷阱中调用Reflect.construct()，这样直接调用就是new调用效果，函数内部new.target等于
         * 函数本身；
         * 可以给Reflect.construct()第三个参数作为赋值给new.target的值；
         * 可调用类构造函数，可以在apply陷阱中给类构造函数创建一个实例，这样不用new可以直接运行类构造函数。
         * Proxy.revocable()创建可撤销的代理，返回值proxy可被撤销的代理对象，revoke撤销代理要调用的函数。
         * 模拟数组行为；
         * 创建使用的代理的类：在构造函数中返回一个代理，当类实例化时返回的对象是代理而不是实例，构造函数中this
         * 的值是该实例，实例成为代理的目标，代理则像原本的实例那样被返回，实例私有化，只有代理间接访问。
         * 将代理用作原型，这样使所有实例共享一个代理；
         * 当代理被用作原型时，trapTarget是原型对象，receiver是实例对象；
         * 在原型上使用get陷阱，处理访问不存在属性；
         * 在原型上使用set陷阱，无论原型中是否存在同名属性，给该属性赋值时都将默认在实例中创建该属性；
         * 在原型上使用has陷阱，in操作符先搜索自身属性，如果不存在，则沿原型链搜索。
         * 类的prototype属性不可写，函数的prototype属性没有限制，可以用代理重写。
         * 
         * 模块*
         * *
         * 模块是自动运行在严格模式下并且没法退出运行的JavaScript代码，在模块顶部this的值是undefined。
         * export关键字导出，未导出的即为模块私有，无法从模块外访问。
         * import关键字导入，不能给导入的绑定重新赋值。
         * 都必须在其他语句和函数之外使用，不能有条件导出或动态导出。
         * 使用as关键词对导入或导出重命名。
         * export default导出模块默认值，只能有一个。
         * 用逗号将默认的本地名称与大括号包裹的非默认值分隔开，import语句中，默认值必须排到非默认值之前。
         * 可以导出已经导入的内容。
         * 可以无绑定导入。
         * Web浏览器加载模块：
         * <script type="module" src="module.js"></script>
         * <script type="module">内联代码</script>
         * <script type="module">会忽略defer属性，因为在执行时defer属性默认是存在的。
         * async脚本的顺序不会影响脚本执行的顺序，脚本下载完立即执行，不必等待包含的文档完成解析，async模块
         * 与之类似。
         * Worker加载：let worker = new Worker("module.js", {type: "module"}) 。
         * 模块说明符以/、./、../开头或完整的URL。
         * 
         * 附录*
         * *
         * Number.isInteger()根据整数与浮点数的储存差异来判断数值是否为整数。
         * Number.isSafeInteger()判断数值是否为安全整数，Number.MAX_SAFE_INTEGER与Number.MIN_SAFE_INTEGER
         * 之间。
         * Math添加一些新的数学运算方法。
         * Unicode标识符。
         * 不建议的__proto__的属性，在es6中，Object.prototype.__proto__被定义成一个访问器属性，其get方法会调用
         * Object.getPrototypeOf()方法，set方法会调用Object.setPrototypeOf()方法。
         * __proto__可以直接设置对象字面量的原型。
         * 
         * ES7(2016)*
         * *
         * 指数运算符：a ** b，与Math.pow(a, b)结果相同，二进制运算符中优先级最高。
         * Array.prototype.includes(要搜索的值, 开始搜索的索引位置)，检查数组是否有某个值，可以includes()，
         * 需要知道值索引位置时用indexOf()。
         * 在es5中，当指令用于全局作用域时，所有代码都将运行在严格模式下，当指令被用于函数作用域时，只有该函数
         * 运行在严格模式下。es6规定在参数被解构或有默认参数的函数中禁止使用"use strict"。
         * 
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

        // function toUint32(value) {
        //     return Math.floor(Math.abs(Number(value))) % Math.pow(2, 32);
        // }
        // function isArrayIndex(key) {
        //     let numericKey = toUint32(key);
        //     return String(numericKey) === key && numericKey < (Math.pow(2, 32) - 1);
        // }

        // function createMyArray(length=0) {
        //     return new Proxy({ length }, {
        //         set(trapTarget, key, value) {
        //             let currentLength = Reflect.get(trapTarget, "length");
        //             if (isArrayIndex(key)) {
        //                 let numericKey = Number(key);
        //                 if (numericKey >= currentLength) {
        //                     Reflect.set(trapTarget, "length", numericKey + 1);
        //                 }
        //             } else if (key === "length") {
        //                 if (value < currentLength) {
        //                     for (let index = currentLength - 1; index >= value; index--) {
        //                         Reflect.deleteProperty(trapTarget, index);
        //                     }
        //                 }
        //             }

        //             return Reflect.set(trapTarget, key, value);
        //         }
        //     });
        // }

        // class Thing { //在构造函数中返回代理
        //     constructor() {
        //         return new Proxy(this, {});
        //     }
        // }

        function NoSuchProperty() {

        }
        let proxy = new Proxy({}, {
            get(trapTarget, key, receiver) {
                throw new ReferenceError(`${key} doesn't exist`);
            }
        });
        NoSuchProperty.prototype = proxy;
        class Square extends NoSuchProperty {
            constructor(length, width) {
                super();
                this.length = length;
                this.width = width;
            }
        }
        let shape = new Square(2, 6);
        let shapeProto = Object.getPrototypeOf(shape);
        console.log(shapeProto === proxy);
        let secondLevelProto = Object.getPrototypeOf(shapeProto);
        console.log(secondLevelProto === proxy);
        console.log(Square.prototype);


        

























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