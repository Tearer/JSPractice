import React, {Component} from 'react';
// import * as utils from '../../utils';
// import { file } from '@babel/types';
// import { declareFunction } from '@babel/types';

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

        // var indexedDB = window.indexedDB || window.msIndexDB || window.mozIndexDB || window.webkiIndexdDB;
        // var request, database;
        // request = indexedDB.open("admin", "1.0");
        // request.onerror = function(event){
        //     console.log("Something bad happened while trying to open: " + event.target.errorCode);
        // }
        // request.onsuccess = function(event){
        //     database = event.target.result;
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
    
        // }
        // request.onupgradeneeded = function (event){
        //     database = event.target.result;
        //     var store = database.createObjectStore("users", {keyPath: "username"});
        //     store.add(user);
        // }

        // var user = {
        //     username: "007",
        //     firstName: "James",
        //     lastName: "Bond",
        //     password: "foo"
        // }
        // var user2 = {
        //     username: "008",
        //     firstName: "PDD",
        //     lastName: "Bond",
        //     password: "foo"
        // }

        // function handleVisibilityChange(){
        //     if (document.hidden){
        //         console.log("page is hidden");
        //     } else {
        //         console.log("page is visible");
        //     }
        // }
        // utils.EventUtil.addHandler(document, "visibilitychange", handleVisibilityChange);

        // navigator.geolocation.getCurrentPosition(function(position){
        //     console.log(position.coords.latitude, position.coords.longitude);
        // }, function(error){
        //     console.log("Error code: " + error.code);
        //     console.log("Error message: " + error.message);
        // }, {
        //     enableHighAccuracy: true,
        //     timeout: 5000,
        //     maximumAge: 25000
        // });

        // var watchId = navigator.geolocation.watchPosition(function(position){
        //     console.log(position.coords.latitude, position.coords.longitude);
        // }, function(error){
        //     console.log("Error code: " + error.code);
        //     console.log("Error message: " + error.message);
        // });
        // navigator.geolocation.clearWatch(watchId);

        // var filesList = document.getElementById("files-list");
        // var filesList = document.getElementsByName("upload")
        // utils.EventUtil.addHandler(filesList, "change", function(event){
            // var files = utils.EventUtil.getTarget(event).files,
            //     i = 0,
            //     len = files.length;
            
            // while (i < len){
            //     console.log(files[i].name + "(" + files[i].type + "," + files[i].size + " bytes)");
            //     i++;
            // }

            // var files = utils.EventUtil.getTarget(event).files,
            //     output = document.getElementById("myDiv20"),
            //     type = "default",
            //     reader = new FileReader(),
            //     blob = utils.blobSlice(files[0], 0, 32),
            //     url = utils.createObjectURL(files[0]);
            
            // console.log(files[0]);
            // if (/image/.test(files[0].type)){
            //     reader.readAsDataURL(files[0]);
            //     type = "image";
            // } else {
            //     reader.readAsText(files[0]);
            //     type = "text";
            // }
            // reader.onerror = function(){
            //     console.log("error code: " + reader.error.code);
            // };
            // reader.onprogress = function(event){
            //     if (event.lengthComputable){
            //         console.log("event: " + event.loaded + "/" + event.total);
            //     }
            // };
            // reader.onload = function(){
            //     var html = "";
            //     switch(type){
            //         case "image":
            //             html = "<img src=\"" + reader.result + "\">";
            //             break;
            //         case "text":
            //             html = reader.result;
            //             break;
            //     }
            //     output.innerHTML = html;
            // };

            // if (blob){
            //     reader.readAsText(blob);
            //     reader.onerror = function(){
            //         output.innerHTML = "error code:" + reader.error.code;
            //     };
            //     reader.onload = function(){
            //         output.innerHTML = reader.result;
            //     };
            // } else {
            //     console.log("not support");
            // }

        //     if (url){
        //         if (/image/.test(files[0].type)){
        //             output.innerHTML = "<img src=\"" + url + "\">";
        //         } else {
        //             output.innerHTML = "not an image";
        //         }
        //     } else {
        //         output.innerHTML = "not support";
        //     }
        // });

        // var droptarget = document.getElementById("droptarget");
        // function handleEvent(event){
        //     var info = "",
        //         // output = document.getElementById("output"),
        //         data, xhr,
        //         files, i, len;
            
        //     utils.EventUtil.preventDefault(event);

        //     if (event.type == "drop"){
        //         files = event.dataTransfer.files;
        //         i = 0;
        //         len = files.length;
        //         data = new FormData();

        //         while (i < len){
        //             info += files[i].name + " (" + files[i].type + ", " + files[i].size + " bytes)<br>";
        //             data.append("file" + i, files[i]);
        //             i++;
        //         }

        //         // output.innerHTML = info;
        //         console.log(info);
        //         xhr = new XMLHttpRequest();
        //         xhr.open("post", "/", true);
        //         xhr.onreadystatechange = function(){
        //             if (xhr.readyState == 4){
        //                 console.log(xhr.responseText);
        //             }
        //         };
        //         xhr.send(data);
        //     }
        // }

        // utils.EventUtil.addHandler(droptarget, "dragenter", handleEvent);
        // utils.EventUtil.addHandler(droptarget, "dragover", handleEvent);
        // utils.EventUtil.addHandler(droptarget, "drop", handleEvent);

        // console.log(performance)

        // var worker = new Worker("https://www.google-analytics.com/analytics.js");
        // worker.postMessage("start");
        // worker.postMessage({
        //     type: "command",
        //     message: "start!"
        // })
        // worker.onmessage = function(event){
        //     var data = event.data;
        //     console.log(data);
        // };
        // worker.onerror = function(event){
        //     console.log("error: " + event.filename + " (" + event.lineno + "): " + event.message);
        // };
        // worker.terminate();

        //在页面中
        // var data = [23, 4, 7, 9, 2, 14, 6, 651, 87, 41, 7789, 24],
        //     worker = new Worker("./WebWorkerExample.js");
        
        // worker.onmessage = function(event){
        //     var data = event.data;
        //     console.log(data);
        // }
        // worker.postMessage(data);

        /*附录*/
        // for (var i = 0; i < 10; i++){
        // }
        // console.log(i)
        
        // function sum(num1, num2=0, ...nums){
        //     var result = num1 + num2;
        //     for (let i = 0, len = nums.length; i < len; i++){
        //         result += nums[i];
        //     }
        //     return result;
        // }
        // var result = sum(1, 2, 3, 4, 5, 6);
        // var result = sum(...[1, 2, 3, 4, 5, 6]);
        // console.log(result);

        // function myNumbers(){
        //     for (var i = 0; i < 10; i++){
        //         yield i * 2;
        //     }
        // }
        // var generator = myNumbers();
        // try {
        //     while(true){
        //         document.write(generator.next() + "<br/>");
        //     }
        // } catch(ex){

        // } finally {
        //     generator.close();
        // }
        
        // var person = {
        //     name: "Nicholas",
        //     age: 29
        // };
        // var iterator = new Iterator(person);
        // try {
        //     while(true){
        //         let value = iterator.next();
        //         document.write(value.join(":") + "<br>");
        //     }
        // } catch(ex){

        // }

        // function sayName(name){
        //     console.log(name);
        // }
        // function sum(num1, num2){
        //     return num1 + num2;
        // }
        // function sayHi(){
        //     console.log("hi");
        // }
        // console.log(sayName.length, sum.length, sayHi.length);
        // function callSum1(num1, num2){
        //     // return sum.apply(this, arguments);
        //     return sum.call(this, num1, num2);
        // }
        // function callSum2(num1, num2){
        //     return sum.apply(this, [num1, num2]);
        // }
        // console.log(callSum1(10, 10));
        // console.log(callSum2(10, 10));

        // window.color = "red";
        // var o = { color: "blue" };
        // function sayColor(){
            // console.log(this.color);
        // }
        // sayColor();
        // sayColor.call(this);
        // sayColor.call(window);
        // sayColor.call(o);
        // var objectSayColor = sayColor.bind(o);
        // objectSayColor();

        // var obj = new Object("some text");
        // console.log(obj instanceof String);
        // var value = "25";
        // var number = Number(value);
        // console.log(typeof number); //number
        // var obj = new Number(value);
        // console.log(typeof obj); //object

        // var stringValue = "hello world";
        // var result = stringValue.concat("world", "!");
        // console.log(result);
        // console.log(stringValue.slice(3));          //"lo world"
        // console.log(stringValue.substring(3));      //"lo world"
        // console.log(stringValue.substr(3));         //"lo world"
        // console.log(stringValue.slice(3, 7));       //"lo w"
        // console.log(stringValue.substring(3, 7));   //"lo w"
        // console.log(stringValue.substr(3, 7));      //"lo worl"
        // console.log(stringValue.slice(-3));            //"rld"
        // console.log(stringValue.substring(-3));        //"hello world"
        // console.log(stringValue.substr(-3));           //"rld"
        // console.log(stringValue.slice(3, -4));         //"lo w"
        // console.log(stringValue.substring(3, -4));     //"hel"
        // console.log(stringValue.substr(3, -4));        //""
        // console.log(stringValue.indexOf("o"));  //4
        // console.log(stringValue.lastIndexOf("o")); //7
        // console.log(stringValue.indexOf("o", 6));  //7
        // console.log(stringValue.lastIndexOf("o", 6)); //4
        // console.log(stringValue.toLocaleUpperCase());
        // console.log(stringValue.toUpperCase());
        // console.log(stringValue.toLocaleLowerCase());
        // console.log(stringValue.toLowerCase());
        // var text = "cat, bat, sat, fat";
        // var pattern = /.at/;
        // var matches = text.match(pattern);
        // console.log(matches.index);          //0
        // console.log(matches[0]);             //"cat"
        // console.log(pattern.lastIndex);      //0
        // var pos = text.search(/at/);
        // console.log(pos);
        // var result = text.replace("at", "ond");
        // result = text.replace(/at/g, "ond");
        // result = text.replace(/(.at)/g, "word($1)");
        // console.log(result);
        // function htmlEscape(text){
        //     return text.replace(/[<>"&]/g, function(match, pos, originalText){
        //         switch(match){
        //             case "<":
        //                 return "&lt;";
        //             case ">":
        //                 return "&gt;";
        //             case "&":
        //                 return "&amp;";
        //             case "\"":
        //                 return "&quot;";
        //         }
        //     });
        // }
        // console.log(htmlEscape("<p class=\"greating\">Hello world!</p>"));

        // var colorText = "red, blue, green, yellow";
        // var colors1 = colorText.split(",");
        // var colors2 = colorText.split(",", 2);
        // var colors3 = colorText.split(/[^\,]+/);
        // console.log(colors1, colors2, colors3);

        // var stringValue = "yellow";
        // console.log(stringValue.localeCompare("brick"));
        // console.log(stringValue.localeCompare("yellow"));
        // console.log(stringValue.localeCompare("zoo"));

        // console.log(String.fromCharCode(104, 101, 108, 108, 111)); //"hello"

        // var uri = "http://www.wrox.com/illegal value.htm#start";
        // console.log(encodeURI(uri));
        // console.log(encodeURIComponent(uri));
        // var uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start";
        // console.log(decodeURI(uri));
        // console.log(decodeURIComponent(uri));

        // console.log(global === window); //true
        // var global = function(){
        //     return this;
        // }();

        // console.log(Math);
        // var max = Math.max(3, 54, 32, 16);
        // console.log(max);
        // var min = Math.min(3, 54, 32, 16);
        // console.log(min);
        // var values = [1, 2, 3, 4, 5];
        // var max = Math.max.apply(Math, values);
        // console.log(max);
        // Math.ceil(25.9);
        // Math.round(25.9);
        // Math.floor(25.1);
        // 值 = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值);
        // var colors = ["red", "green", "blue", "yellow", "black", "purple", "brown"]; 
        // var color = colors[utils.selectFrom(0, colors.length-1)];
        // console.log(color);
        // console.log(Math.pow(10, 6));






        


















        
        

























    }

    render(){
        return (
        <div>
            <br/>
            <h2>Twenty</h2>
            <button id="my-btn">Button</button>
            <div id="droptarget" className="draggable" style={{width:"200px", height:"200px", position:"absolute", background:"red"}}></div>
            <input name="upload" id="files-list" type="file" multiple></input>
            {/* <input name="upload" type="file" multiple></input> */}

        </div>
        )
    }
}