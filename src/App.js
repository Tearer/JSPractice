/* eslint-disable */
import React, { Component } from 'react';
import * as utils from '../utils';

class App extends Component {

  componentDidMount(){
    /*6.1.1*/
    // var person = {};
    // Object.defineProperty(person, "name", {
    //   configurable: false,
    //   value: "Nicholes"
    // })
    // delete person.name;
    // console.log(person.name);

    // var book = {
    //   _year: 2004,
    //   edition: 1
    // };

    // Object.defineProperty(book, "year", {
    //   get: function() {
    //     return this._year;
    //   },
    //   set: function(newValue){
    //     if (newValue > 2004) {
    //       this._year = newValue;
    //       this.edition += newValue -2004;
    //     }
    //   }
    // });
    // book.__defineGetter__("year", function(){
    //   return this._year;
    // })
    // book.__defineSetter__("year",function (newValue) {
    //   if (newValue > 2004) {
    //     this._year = newValue;
    //     this.edition += newValue - 2004;
    //   }
    // })

    // book.year = 2005;
    // console.log(book.edition);

    /*6.1.2*/
    // var book = {};
    // Object.defineProperties(book, {
    //   _year: {
    //     value: 2004
    //   },

    //   edition: {
    //     value: 1
    //   },

    //   year: {
    //     get: function(){
    //       return this._year;
    //     },

    //     set: function(newValue){
    //       if (newValue > 2004) {
    //         this._year = newValue;
    //         this.edition += newValue -2004;
    //       }
    //     }
    //   }
    // })

    /*6.1.3*/
    // var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
    // console.log(descriptor.value);
    // console.log(descriptor.configurable);
    // console.log(typeof descriptor.get);

    // var descriptor = Object.getOwnPropertyDescriptor(book, "year");
    // console.log(descriptor.value);
    // console.log(descriptor.configurable);
    // console.log(typeof descriptor.get);
    
    /*6.2.1*/
    // function createPerson(name, age, job){
    //   var o = new Object();
    //   o.name = name;
    //   o.age = age;
    //   o.job = job;
    //   o.sayName = function(){
    //     console.log(this.name);
    //   };
    //   return o;
    // }

    // var person1 = createPerson("Nicholas", 29, "Software Engineer");
    // var person2 = createPerson("Greg", 27, "Doctor");

    /*6.2.2 */
    // function Person(name, age, job){
    //   this.name = name;
    //   this.age = age;
    //   this.job = job;
    //   this.sayName = function(){
    //     console.log(this.name);
    //   }
    // }

    // function Person(name, age, job){
    //   this.name = name;
    //   this.age = age;
    //   this.job = job;
    //   this.sayName = sayName;
    // }
    // function sayName(){
    //   console.log(this.name)
    // }

    // var person1 = new Person("Nicholas", 29, "Software Engineer");
    // var person2 = new Person("Greg", 27, "Doctor");
    // console.log(person1.constructor == Person);
    // console.log(person2.constructor == Person);
    // console.log(person1 instanceof Object);
    // console.log(person1 instanceof Person);
    // console.log(person1 instanceof Function);

    // var person = new Person("Nicholas", 29, "Software Engineer");
    // person.sayName();

    // Person("Greg", 27, "Doctor");
    // window.sayName();

    // var o = new Object();
    // Person.call(o, "Kristen", 25, "Nurse");
    // o.sayName();

    // console.log(person1.sayName == person2.sayName)

    /*6.2.3 原型模式*/
    // function Person(){
    // }
    // Person.prototype.name = "Nicholas";
    // Person.prototype.age = 29;
    // Person.prototype.job = "Software Engineer";
    // Person.prototype.sayName = function(){
    //   console.log(this.name);
    // }

    // var person1 = new Person();
    // person1.sayName();
    // var person2 = new Person();
    // person2.sayName();
    // console.log(person1.sayName == person2.sayName); //true
    // console.log(Person)
    // console.log(Person.prototype.constructor == Person) //true
    // console.log(Person.prototype)
    // console.log(person1)
    // console.log(person1.constructor == Person)
    // console.log(Person.prototype.isPrototypeOf(person1)); //true
    // console.log(Object.getPrototypeOf(person1) == Person.prototype); //true
    // console.log(Object.getPrototypeOf(person1));
    // console.log(person1.hasOwnProperty("name")); //false
    // console.log("name" in person1); //true
    // person1.name = "Greg";
    // console.log(person1.name);
    // console.log(person1.hasOwnProperty("name")); //true
    // console.log("name" in person1); //true

    // var keys = Object.keys(Person.prototype);
    // console.log(keys);
    // var p1 = new Person();
    // p1.name = "Rob";
    // p1.age = 31;
    // var p1keys = Object.keys(p1);
    // console.log(p1);
    // console.log(p1keys);
    
    // var keys = Object.getOwnPropertyNames(Person.prototype);
    // console.log(keys);

    // function Person(){
    // }
    // Person.prototype = {
    //   name: "Nocholas",
    //   age: 29,
    //   job: "Software Engineer",
    //   sayName: function() {
    //     console.log(this.name);
    //   }
    // }

    // var friend = new Person();
    // console.log(friend instanceof Object); //true
    // console.log(friend instanceof Person); //true
    // console.log(friend.constructor == Person); // false
    // console.log(friend.constructor == Object); // true
    // console.log(Person.prototype) //没有constructor属性

    // function Person(){
    // }
    // Person.prototype = {
    //   constructor: Person,
    //   name: "Nicholas",
    //   age: 29,
    //   job: "Software Engineer",
    //   sayName: function(){
    //     console.log(this.name);
    //   }
    // }  //重设constructor会导致[[Enumerable]]特性被设置为true

    // Object.defineProperty(Person.prototype, "constructor", {
    //   enumerable: false,
    //   value: Person
    // });
    
    // var friend = new Person();
    // Person.prototype.sayHi = function(){
    //   console.log("hi");
    // };
    // friend.sayHi();
    
    // function Person(){
    // }
    // var friend = new Person();
    // Person.prototype = {
    //   constructor: Person,
    //   name: "Nicholas",
    //   age: 29,
    //   job: "Software Engineer",
    //   sayName: function() {
    //     console.log(this.name);
    //   }
    // }
    // friend.sayName(); //error 实例的[[Prototype]]指向最初原型
    
    // console.log(typeof Array.prototype.sort); //function
    // console.log(typeof String.prototype.substring); //function
    // String.prototype.startsWith = function (text) {
    //   return this.indexOf(text) == 0;
    // }
    // var msg = "Hello world!";
    // console.log(msg.startsWith("Hello")); //true

    /*6.2.4*/
    // function Person(name, age, job){
    //   this.name = name;
    //   this.age = age;
    //   this.job = job;
    //   this.friends = ["Shelby", "Court"];
    // }
    // Person.prototype = {
    //   sayName: function() {
    //     console.log(this.name);
    //   }
    // }
    // var person1 = new Person("Nicholas", 28, "Software Engineer");
    // var person2 = new Person("Greg", 27, "Doctor");
    // person1.friends.push("Van");
    // console.log(person1.friends);
    // console.log(person2.friends);
    // console.log(person1.friends === person2.friends); //false
    // console.log(person1.sayName === person2.sayName); //true

    /*6.2.5*/
    // function Person(name, age, job){
    //   this.name = name;
    //   this.age = age;
    //   this.job = job;
    //   if (typeof this.sayName != "function"){
    //     Person.prototype.sayName = function() {
    //       console.log(this.name);
    //     }
    //   }
    // }
    // var friend = new Person("Nicholas", 29, "Software Engineer");
    // friend.sayName();

    /*6.2.6*/
    // function Person(name, age, job){
    //   var o = new Object();
    //   o.name = name;
    //   o.age = age;
    //   o.job = job;
    //   o.sayName = function(){
    //     console.log(this.name);
    //   }
    //   return o;
    // }
    // var friend = new Person("Nicholas", 29, "Software Engineer");
    // friend.sayName();

    // function SpecialArray(){
    //   var values = new Array();
    //   values.push.apply(values, arguments);
    //   values.toPipedString = function(){
    //     return this.join("|");
    //   }
    //   return values;
    // }
    // var colors = new SpecialArray("red", "blue", "green");
    // console.log(colors.toPipedString());

    /*6.2.7*/
    // function Person(name, age, job){
    //   var o = new Object();
    //   o.sayName = function(){
    //     console.log(name);
    //   }
    //   return o;
    // }
    // var friend = Person("Nicholas", 29, "Software Engineer");
    // friend.sayName();

    /*6.3.1*/
    // function SuperType(){
    //   this.property = true;
    // }
    // SuperType.prototype.getSuperValue = function(){
    //   return this.property;
    // };
    // function SubType(){
    //   this.subproperty = false;
    // }
    // SubType.prototype = new SuperType();
    // SubType.prototype.getSubValue = function(){
    //   return this.subproperty;
    // };
    // var instance = new SubType();
    // console.log(instance.getSuperValue()); //true
    // console.log(instance.constructor) 
    // console.log(SubType.prototype)
    // console.log(instance instanceof Object);
    // console.log(instance instanceof SuperType);
    // console.log(instance instanceof SubType);
    // console.log(Object.prototype.isPrototypeOf(instance));
    // console.log(SuperType.prototype.isPrototypeOf(instance));
    // console.log(SubType.prototype.isPrototypeOf(instance));

    // function SuperType(){
    //   this.colors = ["red", "blue", "green"];
    // }
    // function SubType(){
    // }
    // SubType.prototype = new SuperType();
    // var instance1 = new SubType();
    // instance1.colors.push("black");
    // console.log(instance1.colors);
    // var instance2 = new SubType();
    // console.log(instance2.colors);

    /*6.3.2*/
    // function SuperType(){
    //   this.colors = ["red", "blue", "green"];
    // }
    // function SubType(){
    //   SuperType.call(this);
    // }
    // var instance1 = new SubType();
    // instance1.colors.push("black");
    // console.log(instance1.colors);
    // var instance2 = new SubType();
    // console.log(instance2.colors);

    // function SuperType(name){
    //   this.name = name;
    // }
    // function SubType(){
    //   SuperType.call(this, "Nicholas");
    //   this.age = 29;
    // }
    // var instance = new SubType();
    // console.log(instance.name);
    // console.log(instance.age);

    /*6.3.3*/
    // function SuperType(name){
    //   this.name = name;
    //   this.colors = ["red","blue","green"];
    // }
    // SuperType.prototype.sayName = function(){
    //   console.log(this.name);
    // };
    // function SubType(name, age){
    //   SuperType.call(this, name);
    //   this.age = age;
    // }
    // SubType.prototype = new SuperType();
    // SubType.prototype.constructor = SubType;
    // SubType.prototype.sayAge = function(){
    //   console.log(this.age);
    // }

    // var instance1 = new SubType("Nicholas", 29);
    // instance1.colors.push("black");
    // console.log(instance1.colors);
    // instance1.sayName();
    // instance1.sayAge();

    // var instance2 = new SubType("Greg", 27);
    // console.log(instance2.colors);
    // instance2.sayName();
    // instance2.sayAge();
    // console.log(SubType.prototype)
    // console.log(instance1)
    // console.log(instance2)

    /*6.3.4*/
    // function object(o){
    //   function F(){}
    //   F.prototype = o;
    //   return new F();
    // }
    
    // var person = {
    //   name: "Nicholas",
    //   friends: ["Shelby", "Court", "Van"]
    // }

    // var anotherPerson = object(person);
    // var anotherPerson = Object.create(person);
    // anotherPerson.name = "Greg";
    // anotherPerson.friends.push("Rob");

    // var yetAnotherPerson = object(person);
    // var yetAnotherPerson = Object.create(person);
    // yetAnotherPerson.name = "Linda";
    // yetAnotherPerson.friends.push("Barbie");
    // console.log(person.friends);
    // var anotherPerson = Object.create(person, {
    //   name: {
    //     value: "Greg"
    //   }
    // });
    // console.log(anotherPerson.name);

    /*6.3.5*/
    // function createAnother(original){
    //   var clone = object(original);
    //   clone.sayHi = function(){
    //     console.log("hi");
    //   }
    //   return clone;
    // }
    // var person = {
    //   name: "Nicholas",
    //   friends: ["Shelby", "Court", "Van"]
    // }
    // var anotherPerson = createAnother(person);
    // anotherPerson.sayHi();

    /*6.3.6*/
    // function inheritPrototype(subType, superType){
    //   var prototype = object(superType.prototype);
    //   prototype.constructor = subType;
    //   subType.prototype = prototype;
    // }

    // function SuperType(name){
    //   this.name = name;
    //   this.colors = ["red", "blue", "green"];
    // }
    // SuperType.prototype.sayName = function(){
    //   console.log(this.name);
    // }
    // function SubType(name,age){
    //   SuperType.call(this, name);
    //   this.age = age;
    // }
    // inheritPrototype(SubType, SuperType);
    // SubType.prototype.sayAge = function(){
    //   console.log(this.age);
    // }
    // console.log(SubType.prototype)
    // var instance1 = new SubType("Nicholas", 29);
    // var instance2 = new SubType("Greg", 27);
    // instance2.sayName();
    // instance2.sayAge();
    // console.log(instance1 instanceof SubType)
    // console.log(SubType.prototype.isPrototypeOf(instance1))
    
    /*7.1*/
    // function factorial(num){
    //   if (num <= 1){
    //     return 1;
    //   } else {
    //     // return num * factorial(num-1);
    //     return num * arguments.callee(num-1);
    //   }
    // }
    // var factorial = (function f(num){
    //   if (num <= 1){
    //     return 1;
    //   } else {
    //     return num * f(num - 1);
    //   }
    // })
    // var anotherFactorial = factorial;
    // factorial = null;
    // console.log(anotherFactorial(4));

    /*7.2.1*/
    // function createFunctions(){
    //   var result = new Array();
    //   for (var i = 0; i < 10; i++){
    //     result[i] = function(){
    //       return i;
    //     }();
    //   }
    //   return result;
    // }
    
    // function createFunctions(){
    //   var result = new Array();
    //   for (var i = 0; i < 10; i++){
    //     result[i] = function(num){
    //       return function(){
    //         return num;
    //       };
    //     }(i);
    //   }
    //   return result;
    // }

    // console.log(createFunctions());

    /*7.2.2*/
    // var name = "The Window";
    // var object = {
    //   name: "My Object",
    //   getNameFunc: function(){
    //     return function(){
    //       return this.name;
    //     };
    //   }
    // };

    // var object = {
    //   name: "My Object",
    //   getNameFunc: function(){
    //     var that = this;
    //     return function(){
    //       return that.name;
    //     };
    //   }
    // };

    // console.log(object.getNameFunc()())

    // var object = {
    //   name: "My Object",
    //   getName: function(){
    //     return this.name;
    //   }
    // }
    // console.log( object.getName() );
    // console.log( (object.getName)() );
    // (object.getName = object.getName)();

    /*7.2.3*/
    // function assignHandler(){
    //   var element = document.getElementById("someElement");
    //   element.onclick = function(){
    //     console.log(element.id);
    //   }
    // }
    
    // function assignHandler(){
    //   var element = document.getElementById("someElement");
    //   var id = element.id;
    //   element.onclick = function(){
    //     console.log(id);
    //   }
    //   element = null;
    // }

    /*7.3*/

    /*7.4*/
    // function MyObject(){
    //   var privateVariable = 10;
    //   function privateFunction(){
    //     return false;
    //   }
    //   this.publicMethod = function(){
    //     privateVariable++;
    //     return privateFunction();
    //   }
    // }

    // function Person(name){
    //   this.getName = function(){
    //     return name;
    //   }
    //   this.setName = function(value){
    //     name = value;
    //   }
    // }

    // var person = new Person("Nicholas");
    // console.log(person.getName());
    // person.setName("Greg");
    // console.log(person.getName());

    /*7.4.1*/
    // (function(){
    //   var privateVariable = 10;
    //   function privateFunction(){
    //     return false;
    //   }

    //   MyObject = function(){};
    //   MyObject.prototype.publicMethod = function(){
    //     privateVariable++;
    //     return privateFunction();
    //   };
    // })();

    // (function(){
    //   var name = "";
    //   Person = function(value){
    //     name = value;
    //   };
    //   Person.prototype.getName = function(){
    //     return name;
    //   };
    //   Person.prototype.setName = function(value){
    //     name = value;
    //   };
    // })();

    /*7.4.2*/
    // var singleton = function(){
    //   var privateVariable = 10;
    //   function privateFunction(){
    //     return false;
    //   }
    //   return {
    //     publicProperty: true,
    //     publicMethod: function(){
    //       privateVariable++;
    //       return privateFunction();
    //     }
    //   };
    // }();
    // console.log(singleton.publicMethod());

    // var application = function(){
    //   var components = new Array();
    //   // components.push(new BaseComponent());
    //   return {
    //     getComponentCount: function(){
    //       return components.length;
    //     },
    //     registerComponent: function(component){
    //       if (typeof component == "object"){
    //         components.push(component);
    //       }
    //     }
    //   };
    // }();
    // console.log(application);

    /*7.4.3*/
    
    /*8.1.1*/
    // var age = 29;
    // function sayAge(){
    //   console.log(this.age);
    // }
    // console.log(window.age);
    // sayAge();
    // window.sayAge();
    
    // var age = 29;
    // window.color = "red";
    // delete window.age;
    // delete window.color;
    // console.log(window.age);
    // console.log(window.color);
    
    /*8.1.3*/
    // var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
    // var topPos = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;
    // console.log(leftPos, topPos);

    // var pageWidth = window.innerWidth,
    //     pageHeight = window.innerHeight;
    // if (typeof pageWidth != "number"){
    //   if (document.compatMode == "CSS1Compat"){
    //     pageWidth = document.documentElement.clientWidth;
    //     pageHeight = document.documentElement.clientHeight;
    //   } else {
    //     pageWidth = document.body.clientWidth;
    //     pageHeight = document.body.clientHeight;
    //   }
    // }
    // console.log(pageWidth, pageHeight);
    
    /*8.1.5*/
    // window.open("https://baidu.com", "topFrame");
    // var baidu = window.open("https://baidu.com", "baiduWindow", "height=400,width=400,top=10,left=10,resizable=yes");
    // baidu.resizeTo(500,500);
    // baidu.moveTo(100,100);
    // baidu.close();

    /*8.1.6*/
    // prompt("hello world","Bob")
    // window.print();
    // window.find();

    /*8.2.1*/
    // console.log(window.location === document.location); //true
    // var args = utils.getQueryStringArgs();
    // console.log(args);

    /*8.2.2*/
    // location.assign("https://baidu.com");
    // window.location = "https://baidu.com";
    // location.href = "https://baidu.com";
    // location.hash = "#section1";
    // location.search = "?q=javascript";
    // location.hostname = "www.yahoo.com";
    // location.pathname = "mydir";
    // location.port = 8080;
    // location.reload();
    // location.reload(true);

    /*8.3.1*/
    // function hasPlugin(name){
    //   name = name.toLowerCase();
    //   for (var i = 0; i < navigator.plugins.length; i++){
    //     if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){
    //       return true;
    //     }
    //   }
    //   return false;
    // }

    // console.log(navigator.plugins)
    // console.log(hasPlugin("Flash"));
    // console.log(hasPlugin("Chrome PDF Plugin"));

    // function hasIEPlugin(name){
    //   try {
    //     new ActiveXObject(name);
    //     return true;
    //   } catch (ex) {
    //     return false;
    //   }
    // }
    // console.log(hasIEPlugin("ShockwaveFlash.ShockwaveFlash"));

    /*8.3.2*/

    /*8.4*/
    // console.log(screen);

    /*8.5*/
    // console.log(history === window.history);
    // history.go(-1);
    // history.go(1);
    // history.go(2);
    // history.go("baidu.com");
    // history.back();
    // history.forward();

    /*9.1.2*/
    //确定浏览器是否支持Netscape风格的插件
    // var hasNSPlugins = !!(navigator.plugins && navigator.plugins.length);

    //确定浏览器是否具有DOM1级规定的能力
    // var hasDOM1 = !!(document.getElementById && document.createElement && document.getElementsByTagName);

    /*9.3.3*/
    // console.log(utils.client());

    

























  }  

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>JavaScript</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
