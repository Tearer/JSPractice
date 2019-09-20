import React, {Component} from 'react';
import * as utils from '../../utils';
import { declareFunction } from '@babel/types';

export default class Twenty extends Component{

    componentDidMount(){
        // var book = {
        //     title: "Professional JavaScript",
        //     authors: ["Nicholas C. Zakas"],
        //     edition: 3,
        //     year: 2011,
        //     // toJSON: function(){
        //     //     return this.title;
        //     // },
        //     releaseDate: new Date(2011, 11, 1)
        // };
        // 理解序列化的顺序很重要
        // var jsonText = JSON.stringify(book);
        // var jsonText = JSON.stringify(book, ["title", "edition"]);
        // var jsonText = JSON.stringify(book, function(key, value){
        //     switch(key){
        //         case "authors":
        //             return value.join(",");
        //         case "year":
        //             return 5000;
        //         case "edition":
        //             return undefined;
        //         default:
        //             return value;
        //     }
        // });
        // var jsonText = JSON.stringify(book, null, 4);
        // var jsonText = JSON.stringify(book, null, "--");
        // console.log(jsonText);

        // var bookCopy = JSON.parse(jsonText, function(key, value){
        //     if (key === "releaseDate"){
        //         return new Date(value);
        //     } else {
        //         return value;
        //     }
        // });
        // console.log(bookCopy.releaseDate.getFullYear());
        // function createCORSRequest(method, url){
        //     var xhr = new XMLHttpRequest();
        //     if ("withCredentials" in xhr){
        //         xhr.open(method, url, true);
        //     } else if (typeof XDomainRequest != "undefined"){
        //         xhr = new XDomainRequest();
        //         xhr.open(method, url);
        //     } else {
        //         xhr = null;
        //     }
        //     return xhr;
        // }
        // console.log(typeof XDomainRequest);

        // function createStreamingClient(url, progress, finished){
        //     var xhr = new XMLHttpRequest(),
        //         received = 0;
        //     xhr.open("get", url, true);
        //     xhr.onreadystatechange = function(){
        //         var result;
        //         if (xhr.readyState === 3){
        //             result = xhr.responseText.substring(received);
        //             received += result.length;
        //             progress(result);
        //         } else if (xhr.readyState == 4){
        //             finished(xhr.responseText);
        //         }
        //     };
        //     xhr.send(null);
        //     return xhr;
        // }

        // var value = [];
        // console.log(value instanceof Array);
        // console.log(Object.prototype.toString.call(value));
        // console.log(utils.isArray(value));
        // function Person(name, age, job){
        //     this.name = name;
        //     this.age = age;
        //     this.job = job;
        // }
        // var person = Person("Nicholas", 29, "Software Engineer");
        // console.log(person);

        // function Polygon(sides){
        //     console.log("polygon")
        //     console.log(this)
        //     if (this instanceof Polygon){
        //         console.log("side")
        //         this.sides = sides;
        //         this.getArea = function(){
        //             return 0;
        //         };
        //     } else {
        //         return new Polygon(sides);
        //     }
        // }
        // function Rectangle(width, height){
        //     console.log("rectangle")
        //     Polygon.call(this, 2);
        //     this.width = width;
        //     this.height = height;
        //     this.getArea = function(){
        //         return this.width * this.height;
        //     };
        // }
        // Rectangle.prototype = new Polygon();
        // var rect = new Rectangle(5, 10);
        // console.log(rect);

        //函数绑定
        // var hander = {
        //     message: "Event handled",
        //     handleClick: function(event){
        //         console.log(this.message, event);
        //     }
        // }
        // var btn = document.getElementById("my-btn");
        // utils.EventUtil.addHandler(btn, "click", function(event){
        //     hander.handClick(event);
        // });

        // function bind(fn, context){
        //     return function(){
        //         console.log(arguments)
        //         return fn.apply(context, arguments);
        //     };
        // }
        // utils.EventUtil.addHandler(btn, "click", bind(hander.handleClick, hander));
        // utils.EventUtil.addHandler(btn, "click", hander.handleClick.bind(hander));

        //函数柯里化
        // function add(num1, num2){
        //     return num1 + num2;
        // }
        // function curriedAdd(num2){
        //     return add(5, num2);
        // }
        // console.log(add(2, 3)); //5
        // console.log(curriedAdd(3)); //8
        // function curry(fn){
        //     console.log(arguments)
        //     var args = Array.prototype.slice.call(arguments, 1);
        //     console.log(args);
        //     return function(){
        //         console.log(arguments);
        //         var innerArgs = Array.prototype.slice.call(arguments);
        //         console.log(innerArgs);
        //         var finalArgs = args.concat(innerArgs);
        //         console.log(finalArgs);
        //         return fn.apply(null, finalArgs);
        //     }
        // }
        // var curriedAdd = curry(add, 5);
        // console.log(curriedAdd(3));
        // function bind(fn, context){
        //     var args = Array.prototype.slice.call(arguments, 2);
        //     return function(){
        //         var innerArgs = Array.prototype.slice.call(arguments);
        //         var finalArgs = args.concat(innerArgs);
        //         return fn.apply(context, finalArgs);
        //     }
        // }

        // var handler = {
        //     message: "Event handled",
        //     handleClick: function(name, event){
        //         console.log(this.message + ":" + name + ":" + event.type);
        //     }
        // };
        // var btn = document.getElementById("my-btn");
        // utils.EventUtil.addHandler(btn, "click", bind(handler.handleClick, handler, "my-btn"));
       
        /*22.2*/
        // var person = { name: "Nicholas" };
        // Object.preventExtensions(person);
        // person.age = 29; //error
        // person.name = "ccc";
        // console.log(Object.isExtensible(person));

        // Object.seal(person);
        // person.age = 29; //error
        // delete person.name; //error
        // console.log(Object.isSealed(person));

        // Object.freeze(person);
        // console.log(Object.isFrozen(person));

        /*22.3.3*/
        // function throtte(method, context){
        //     clearTimeout(method.tId);
        //     method.tId = setTimeout(function(){
        //         method.call(context); //如果没给出第二个参数，那么就在全局作用域执行该fangf
        //     }, 100)
        // }
        // function resizeDiv(){
        //     var div = document.getElementById("my-btn");
        //     div.style.height = div.offsetWidth + "px";
        // }
        // window.onresize = function(){
        //     throtte(resizeDiv);
        // }

        /*22.4*/
        // function EventTarget(){
        //     this.handlers = {};
        // }
        // EventTarget.prototype = {
        //     constructor: EventTarget,
        //     addHandler: function(type, handler){
        //         if (typeof this.handlers[type] == "undefined"){
        //             this.handlers[type] = [];
        //         }
        //         this.handlers[type].push(handler);
        //     },
        //     fire: function(event){
        //         if (!event.target){
        //             event.target = this;
        //         }
        //         if (this.handlers[event.type] instanceof Array){
        //             var handlers = this.handlers[event.type];
        //             for (var i = 0, len = handlers.length; i < len; i++){
        //                 handlers[i](event);
        //             }
        //         }
        //     },
        //     removeHandler: function(type, handler){
        //         if (this.handlers[type] instanceof Array){
        //             var handlers = this.handlers[type];
        //             for (var i = 0, len = handler.length; i < len; i++){
        //                 if (handler[i] === handler){
        //                     break;
        //                 }
        //             }
        //             handlers.splice(i, 1);
        //         }
        //     }
        // };
        // function handleMessage(event){
        //     console.log("message received: " + event.message);
        // }
        // var target = new EventTarget();
        // target.addHandler("message", handleMessage);
        // console.log(target);
        // target.fire({type: "message", message: "Hello world!"});
        // target.removeHandler("message", handleMessage);
        // target.fire({type: "message", message: "Hello world!"});
        
        // function Person(name, age){
        //     EventTarget.call(this);
        //     this.name = name;
        //     this.age = age;
        // }
        // function inheritPrototype(subType, superType){
        //     function object(o){
        //         function F(){}
        //         F.prototype = o;
        //         return new F();
        //     }
        //     var prototype = object(superType.prototype);
        //     prototype.constructor = subType;
        //     subType.prototype = prototype;
        // }
        // inheritPrototype(Person, EventTarget);
        // Person.prototype.say = function(message){
        //     this.fire({type: "message", message: message});
        // }

        // var person = new Person("Nicholas", 29);
        // person.addHandler("message", handleMessage);
        // person.say("Hi there.");

        /*22.5*/
        // utils.EventUtil.addHandler(document, "mousemove", function(event){
        //     var myDiv20 = document.getElementById("myDiv20");
        //     myDiv20.style.left = event.clientX + "px";
        //     myDiv20.style.top = event.clientY + "px";
        // });
        // var DragDrop = function(){
        //     var dragging = null,
        //         dragdrop = new EventTarget(),
        //         diffX = 0,
        //         diffY = 0;
        //     function handleEvent(event){
        //         //获取事件和目标
        //         event = utils.EventUtil.getEvent(event);
        //         var target = utils.EventUtil.getTarget(event);

        //         switch(event.type){
        //             case "mousedown":
        //                 if (target.className.indexOf("draggable") > -1){
        //                     dragging = target;
        //                     diffX = event.clientX - target.offsetLeft;
        //                     diffY = event.clientY - target.offsetTop;
        //                     dragdrop.fire({type: "dragstart", target: dragging, x: event.clientX, y: event.clientY});
        //                 }
        //                 break;
                    
        //             case "mousemove":
        //                 if (dragging !==null){
        //                     dragging.style.left = (event.clientX - diffX) + "px";
        //                     dragging.style.top = (event.clientY - diffY) + "px";
        //                     dragdrop.fire({type: "drag", target: dragging, x: event.clientX, y: event.clientY});
        //                 }
        //                 break;
                    
        //             case "mouseup":
        //                 dragdrop.fire({type:"dragend", target: dragging, x: event.clientX, y: event.clientY});
        //                 dragging = null;
        //                 break;
        //             default:
        //                 break;
        //         }
        //     };
            // return {
            //     enable: function(){
            //         utils.EventUtil.addHandler(document, "mousedown", handleEvent);
            //         utils.EventUtil.addHandler(document, "mousemove", handleEvent);
            //         utils.EventUtil.addHandler(document, "mouseup", handleEvent);
            //     },
            //     disable: function(){
            //         utils.EventUtil.removeHandler(document, "mousedown", handleEvent);
            //         utils.EventUtil.removeHandler(document, "mousemove", handleEvent);
            //         utils.EventUtil.removeHandler(document, "mouseup", handleEvent);
            //     }
            // }
        //     dragdrop.enable = function(){
        //         utils.EventUtil.addHandler(document, "mousedown", handleEvent);
        //         utils.EventUtil.addHandler(document, "mousemove", handleEvent);
        //         utils.EventUtil.addHandler(document, "mouseup", handleEvent);
        //     };
        //     dragdrop.disable = function(){
        //         utils.EventUtil.removeHandler(document, "mousedown", handleEvent);
        //         utils.EventUtil.removeHandler(document, "mousemove", handleEvent);
        //         utils.EventUtil.removeHandler(document, "mouseup", handleEvent);
        //     };
        //     return dragdrop;
        // }();
        // DragDrop.addHandler("dragstart", function(event){
        //     var status = document.getElementById("myDiv20");
        //     status.innerHTML = "Started dragging " + event.target.id;
        // });
        // DragDrop.addHandler("drag", function(event){
        //     var status = document.getElementById("myDiv20");
        //     status.innerHTML += "<br/> Dragged " + event.target.id + " to (" +event.x + "," + event.y + ")";
        // });
        // DragDrop.addHandler("dragend", function(event){
        //     var status = document.getElementById("myDiv20");
        //     status.innerHTML += "<br/> Dropped " + event.target.id + " at (" + event.x + "," + event.y + ")";
        // });

        // DragDrop.enable();

        /*23*/
        // utils.EventUtil.addHandler(window, "online", function(){
        //     console.log("Online");
        // });
        // utils.EventUtil.addHandler(window, "offline", function(){
        //     console.log("Offline");
        // });
        // console.log(navigator.onLine);

        // console.log(applicationCache);
        // applicationCache.update();
        // utils.EventUtil.addHandler(applicationCache, "updateready", function(){
        //     applicationCache.swapCache();
        // });

        // utils.CookieUtil.set("name", "Nicholas", "/books/projs/", "http://localhost:3000", new Date("January 1, 2020"));
        // utils.CookieUtil.set("book", "Professional Javastript");
        // utils.CookieUtil.unset("name");
        // utils.CookieUtil.unset("book"); 
        // console.log(utils.CookieUtil.get("name"));
        // console.log(utils.CookieUtil.get("book"));

        // sessionStorage.book = "Professional Javascript";
        // utils.EventUtil.addHandler(document, "storage", function(event){
        //     console.log("Storage changed for " + event);
        // })
        // sessionStorage.setItem("name", "Nicholas");
        // sessionStorage.setItem("name", "Bob");
        // sessionStorage.removeItem("name");

        var indexedDB = window.indexedDB || window.msIndexDB || window.mozIndexDB || window.webkiIndexdDB;
        var request, database;
        request = indexedDB.open("admin", "1.0");
        request.onerror = function(event){
            console.log("Something bad happened while trying to open: " + event.target.errorCode);
        }
        request.onsuccess = function(event){
            database = event.target.result;
            // database = request.result;

            //已废弃
            /*if (database.version !== "1.0"){
                request = database.setVersion("1.0");
                request.onerror = function(event){
                    console.log("error to set version: " + event.target.errorCode);
                };
                request.onsuccess = function(event){
                    console.log("Database initialization complete. Database name: " + database.name + ", Version: " + database.version);
                };
            } else {
                console.log("Database already initialized. Database name: " + database.name + ", Version: " + database.version);
            }*/

            // var transaction = db.transaction("users");
            // var IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction; 
            // var transaction = database.transaction("users", IDBTransaction.READ_WRITE); //已废弃

            // var request = database.transaction("users").objectStore("users").get("007");
            // request.onerror = function(event){
            //     console.log("Did not get the object!");
            // };
            // request.onsuccess = function(event){
            //     var result = event.target.result;
            //     console.log(result.firstName);    //"James"
            // };

            // var store = database.transaction("users",'readwrite').objectStore("users"),
            //     request = store.openCursor();
            // store.add(user2);

            // var IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;
            // var onlyRange = IDBKeyRange.only("007"); 
            // var lowerRange = IDBKeyRange.lowerBound("007");
            // var lowerRange = IDBKeyRange.lowerBound("007", true);
            // var upperRange = IDBKeyRange.upperRange("ace");
            // var upperRange = IDBKeyRange.upperRange("ace", true);
            // var boundRange = IDBKeyRange.bound("007", "ace");
            // var boundRange = IDBKeyRange.bound("007", "ace", true);
            // var boundRange = IDBKeyRange.bound("007", "ace", true, true);
            // var boundRange = IDBKeyRange.bound("007", "ace", false, true);
            // var store = database.transaction("users").objectStore("users"),
            //     range = IDBKeyRange.bound("007", "ace"),
            //     request = store.openCursor(range, "nextunique"); //"next", "nextunique", "prev", and "prevunique". The default is "next".
            
            // request.onsuccess = function(event){
            //     var cursor = event.target.result;
            //     if (cursor){
            //         console.log("Key: " + cursor.key + ", Value: " + JSON.stringify(cursor.value));
            //         cursor.continue(); //移动到下一项
            //     } else {
            //         console.log("Done!");
            //     }
            // };
            // request.onsuccess = function(event){
            //     var cursor = event.target.result,
            //         value,
            //         updateRequest;
            //     if (cursor){
            //         if (cursor.key == "007"){
            //             value = cursor.value;
            //             value.password = "mageic!";

            //             updateRequest = cursor.update(value);
            //             updateRequest.onsuccess = function(){
            //             };
            //             updateRequest.onerror = function(){
            //             };
            //         }
            //     }
            // };
            // request.onsuccess = function(event){
            //     var cursor = event.target.result,
            //         value,
            //         deleteRequest;
            //     if (cursor){
            //         if (cursor.key == "007"){
            //             deleteRequest = cursor.delete();
            //             deleteRequest.onsuccess = function(){
            //             };
            //             deleteRequest.onerror = function(){
            //             };
            //         }
            //     }
            // }

            // var store = database.transaction("users").objectStore("users"),
                // index = store.createIndex("username", "username", { unique: false });
                // index = store.index("username"),
                // request = index.openCursor();
                // request = index.openKeyCursor();
                // request = index.get("007");
                // request = index.getKey("007");
            
            // var store = database.transaction("users").objectStore("users"),
            //     indexNames = store.indexNames,
            //     index,
            //     i = 0,
            //     len = indexNames.length;
            // while(i < len){
            //     index = store.index(indexNames[i++]);
            //     console.log(index.name, index.keyPath, index.unique);
            // }

            // store.deleteIndex("username");


        }
        request.onupgradeneeded = function (event){
            database = event.target.result;
            var store = database.createObjectStore("users", {keyPath: "username"});
            store.add(user);
        }

        var user = {
            username: "007",
            firstName: "James",
            lastName: "Bond",
            password: "foo"
        }
        var user2 = {
            username: "008",
            firstName: "PDD",
            lastName: "Bond",
            password: "foo"
        }













        
        

























    }

    render(){
        return (
        <div>
            <br/>
            <h2>Twenty</h2>
            <button id="my-btn">Button</button>
            <div id="myDiv20" className="draggable" style={{width:"200px", height:"200px", position:"absolute", background:"red"}}></div>
        </div>
        )
    }
}