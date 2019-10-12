import React, {Component} from 'react';
// import * as utils from '../../utils';

export default class Functions extends Component{

    componentDidMount(){
       
        // var obj = {};
        // Object.defineProperty(obj, "_value", {
        //     configurable: false,
        //     writable: true,
        //     enumerable: false,
        //     value: 0,
        // });
        // Object.defineProperty(obj, "value1", {
        //     enumerable: true,
        //     get: function(){
        //         return this._value
        //     },
        //     set: function(newValue){
        //         this._value = newValue;
        //     }
        // });
        // Object.defineProperty(obj, "value2", {
        //     enumerable: true,
        //     get: function(){
        //         return this._value
        //     },
        //     set: function(newValue){
        //         this._value = newValue;
        //     }
        // });
        // obj.value1 = 1;
        // console.log(obj, obj.value1, obj.value2);
        // var descriptor = Object.getOwnPropertyDescriptor(obj, "_value");
        // descriptor = Object.getOwnPropertyDescriptor(obj, "value1");
        // console.log(descriptor);

        // function Person(name, age, job){
        //     this.name = name;
        //     this.age = age;
        //     this.job = job;
        //     // this.sayName = function(){
        //     //     console.log(this.name);
        //     // }
        //     this.sayName = sayName;
        // }
        // function sayName(){
        //     console.log(this.name);
        // }

        // var person1 = new Person("Nicholas", 29, "Software Engineer");
        // var person2 = new Person("Greg", 27, "Doctor");
        // person1.sayName();
        // Person("Greg", 27, "Doctor"); //添加到window，严格模式下报错
        // window.sayName();
        // var o = new Object();
        // Person.call(o, "Kristen", 25, "Nurse");
        // o.sayName();
        // console.log(person1.sayName === person2.sayName); 

        // function Person(){}
        // Person.prototype.name = "Nicholas";
        // Person.prototype.age = 29;
        // Person.prototype.job = "Software Engineer";
        // Person.prototype.sayName = function(){
        //     console.log(this.name);
        // };
        // var person1 = new Person();
        // console.log(person1.constructor);
        // person1.sayName();
        // var person2 = new Person();
        // person2.sayName();
        // console.log(person1, person2);
        // console.log(Person.prototype.isPrototypeOf(person1));
        // console.log(Person.prototype.isPrototypeOf(person2));
        // console.log(Object.getPrototypeOf(person1) === Person.prototype);
        // console.log(Object.getPrototypeOf(person1).name);
        // console.log(person1.hasOwnProperty("name"));
        // person1.name = "Greg";
        // console.log(person1.hasOwnProperty("name"));
        // console.log("name" in person1);

        // var o = {
        //     toString: function(){
        //         return "My Object";
        //     }
        // };
        // for (var prop in o){
        //     if (prop === "toString"){
        //         console.log("Function toString");
        //     }
        // }

        // var keys = Object.keys(Person.prototype);
        // console.log(keys);
        // var p1 = new Person();
        // p1.name = "Rob";
        // p1.age = 31;
        // var p1keys = Object.keys(p1);
        // console.log(p1keys);

        // var keys = Object.getOwnPropertyNames(Person.prototype);
        // console.log(keys);

        // function Person(){}
        // Person.prototype = {
        //     // constructor: Person,
        //     name: "Nicholas",
        //     age: 29,
        //     job: "Software Engineer",
        //     sayName: function(){
        //         console.log(this.name);
        //     }
        // }
        // var friend = new Person();
        // console.log(friend instanceof Object);        //true
        // console.log(friend instanceof Person);        //true
        // console.log(friend.constructor === Person);   //false
        // console.log(friend.constructor == Object);    //true
        // console.log(friend);
        // Object.defineProperty(Person.prototype, "constructor",  {
        //     enumerable: false,
        //     value: Person
        // });
        // console.log(Object.getOwnPropertyDescriptor(Person.prototype, "constructor"));

        // Person.prototype.sayHi = function(){
        //     console.log("hi");
        // };

        // friend.sayHi();

        // function Person(){}
        // var friend = new Person();
        // Person.prototype = {
        //     constructor: Person,
        //     name: "Nicholas",
        //     age: 29,
        //     job: "Software Engineer",
        //     sayName: function(){
        //         console.log(this.name);
        //     }
        // };
        // friend.sayName(); //error

        // console.log(typeof Array.prototype.sort);
        // console.log(typeof String.prototype.substring);

        // function Person(name, age, job){
        //     this.name = name;
        //     this.age = age;
        //     this.job = job;
        //     this.friends = ["Shelby", "Court"];
        // }
        // Person.prototype = {
        //     constructor: Person,
        //     sayName: function(){
        //         console.log(this.name);
        //     }
        // }

        // function Person(name, age, job){
        //     this.name = name;
        //     this.age = age;
        //     this.job = job;
        //     if (typeof this.sayName != "function"){
        //         Person.prototype.sayName = function(){
        //             console.log(this.name);
        //         }
        //     }
        // }
        // var friend = new Person("Nicholas", 29, "Software Engineer");
        // friend.sayName();

        // function Person(name, age, job){
        //     var o = new Object();
        //     o.name = name;
        //     o.age = age;
        //     o.job = job;
        //     o.sayName = function(){
        //         console.log(this.name);
        //     };
        //     return o;
        // }
        // var friend = new Person("Nicholas", 29, "Software Engineer");
        // friend.sayName();

        // function SpecialArray(){
        //     var values = new Array();
        //     values.push.apply(values, arguments);
        //     // values.push(...arguments)
        //     values.toPipedString = function(){
        //         return this.join("|");
        //     }
        //     return values;
        // }
        // var colors = new SpecialArray("red", "blue", "green");
        // console.log(colors.toPipedString());

        // function Person(name, age, job){
        //     var o = new Object();
        //     o.sayName = function(){
        //         console.log(name);
        //     }
        //     return o;
        // }
        // var friend = Person("Nicholas", 29, "Software Engineer");
        // friend.sayName();
        // console.log(friend);

        // function SuperType(){
        //     this.property = true;
        // }
        // SuperType.prototype.getSuperValue = function(){
        //     return this.property;
        // };
        // function SubType(){
        //     this.subproperty = false;
        // }
        // SubType.prototype = new SuperType();
        // SubType.prototype.getSubValue = function(){
        //     return this.subproperty;
        // }
        // var instance = new SubType();
        // console.log(instance); //true

        // function SuperType(name){
        //     this.name = name;
        //     this.colors = ["red", "blue", "green"];
        // }
        // SuperType.prototype.sayName = function(){
        //     console.log(this.name);
        // };
        // function SubType(name, age){
        //     SuperType.call(this, name);
        //     this.age = age;
        // }
        // SubType.prototype = new SuperType();
        // SubType.prototype.constructor = SubType;
        // SubType.prototype.sayAge = function(){
        //     console.log(this.age);
        // }
        // var instance1 = new SubType("Nicholas", 29);
        // var instance2 = new SubType("Greg", 27);
        // console.log(instance1);
        // console.log(instance2);

        // function object(o){
        //     function F(){}
        //     F.prototype = o;
        //     return new F();
        // }
        // var person = {
        //     name: "Nicholas",
        //     friends: ["Shelby", "Court", "Van"]
        // };
        // // var anotherPerson = object(person);
        // var anotherPerson = Object.create(person, {
        //     name: {
        //         value: "Greg"
        //     }
        // });
        // // anotherPerson.name = "Greg";
        // anotherPerson.friends.push("Rob");
        // // var yetAnotherPerson = object(person);
        // var yetAnotherPerson = Object.create(person);
        // yetAnotherPerson.name = "Linda";
        // yetAnotherPerson.friends.push("Barbie");
        // console.log(person);
        // console.log(anotherPerson);
        // console.log(yetAnotherPerson);

        // function createAnother(original){
        //     var clone = object(original);   //通过调用函数创建一个新对象
        //     clone.sayHi = function(){       //以某种方式来增强这个对象
        //         console.log("hi");
        //     }
        //     return clone;
        // }
        // var person = {
        //     name: "Nicholas",
        //     friends: ["Shelby", "Court", "Van"]
        // };
        // var anotherPerson = createAnother(person);
        // anotherPerson.sayHi();
        // console.log(anotherPerson);

        // function inheritPrototype(subType, superType){
            // var prototype = object(superType.prototype);  //创建对象
            // function F(){}
            // F.prototype = superType.prototype;
            // var prototype = new F();
        //     // console.log(prototype)
        //     prototype.constructor = subType;              //增强对象
        //     subType.prototype = prototype;                //指定对象
        // }
        // function SuperType(name){
        //     this.name = name;
        //     this.colors = ["red", "blue", "green"];
        // }
        // SuperType.prototype.sayName = function(){
        //     console.log(this.name);
        // }
        // function SubType(name, age){
        //     SuperType.call(this, name);
        //     this.age = age;
        // }
        // inheritPrototype(SubType, SuperType);
        // SubType.prototype.sayAge = function(){
        //     console.log(this.age);
        // };
        // var instance = new SubType("Nico", 29);
        // console.log(instance);

        // var name = "The Window";
        // var object = {
        //     name: "My Object",
        //     getName: function(){
        //         return this.name;
        //     }
        // };
        // console.log(object.getName());
        // console.log((object.getName)());
        // console.log((object.getName = object.getName)()); //赋值表达式的值是函数本身，所有this得不到维持

        // function Person(name){
        //     this.getName = function(){
        //         return name;
        //     };
        //     this.setName = function(value){
        //         name = value;
        //     }
        // }
        // var person = new Person("Nicholas");
        // console.log(person.getName());
        // person.setName("Greg");
        // console.log(person.getName());

        // var Person;
        // (function(){
        //     var name = "";
        //     Person = function(value){
        //         name = value;
        //     };
        //     Person.prototype.getName = function(){
        //         return name;
        //     };
        //     Person.prototype.setName = function(value){
        //         name = value;
        //     };
        // })();
        // var person1 = new Person("Nicholas");
        // console.log(person1.getName());
        // person1.setName("Greg");
        // console.log(person1.getName());
        // var person2 = new Person("Michael");
        // console.log(person1.getName()); 
        // console.log(person2.getName());
        
        












        
























    }

    render(){
        return (
        <div>
            <br/>
            <h2>Functions</h2>
        </div>
        )
    }
}