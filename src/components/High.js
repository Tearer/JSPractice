/* eslint-disable */
import React, {Component} from 'react';
// import * as utils from '../../utils';

export default class High extends Component{

    componentDidMount(){

        function merge(left, right){
            var result = [];
            while(left.length > 0 && right.length > 0){
                if(left[0] < right[0]){
                    result.push(left.shift());
                } else {
                    result.push(right.shift());
                }
            }
            return result.concat(left).concat(right);
        }

        // function mergeSort(items){
        //     if(items.length === 1){
        //         return items;
        //     }
        //     var middle = Math.floor(items.length/2),
        //         left = items.slice(0, middle),
        //         right = items.slice(middle);
        //     return merge(mergeSort[left], mergeSort(right));
        // }

        function mergeSort(items){
            if(items.length === 1){
                return items;
            }
            var work = [];
            for (var i=0, len = items.length; i<len; i++){
                work.push([items[i]]);
            }
            work.push([]);
            // console.log(work); //[[2],[1],[3],[]]

            for (var lim=len; lim > 1; lim = (lim+1)/2){
                for(var j=0,k=0; k < lim; j++,k+=2){
                    work[j] = merge(work[k], work[k+1]);
                    //lim = 3
                    //work[0] = [1, 2]
                    //work[1] = [3]
                    //work = [ [1, 2], [3], [3], [] ]

                    //lim = 2
                    //work[0] = [1, 2, 3]
                    //work = [[1,2,3], [3], [], []]

                    //lim = 1.5
                    //work[0] = [1, 2, 3]
                    // work = [[1,2,3], [], [], []]
                }
                work[j] = [];
                //work = [ [1, 2], [3], [], [] ]

                //lim = 2
                //work = [ [1,2,3], [], [], [] ]
                
                //lim = 1.5
                //work = [ [1,2,3], [], [], [] ]

                //lim = 1

            }
            return work[0];
        }
        // console.log(mergeSort([2,1,3]))
        // console.log(merge([4,5],[3,1,2]));

        function memfactorial(n){
            if(!memfactorial.cache){
                memfactorial.cache = {
                    "0": 1,
                    "1": 1
                };
            }
            if(!memfactorial.cache.hasOwnProperty(n)){
                memfactorial.cache[n] = n * memfactorial(n-1);
            }
            return memfactorial.cache[n];
        }

        function processArray(items, process, callback){
            var todo = items.concat();
            setTimeout(function (){
                process(todo.shift());
                if(todo.length > 0){
                    setTimeout(arguments.callee, 25);
                } else {
                    callback(items);
                }
            }, 25);
        }
        var items = [123, 789, 323, 778, 232, 654, 219, 543, 321, 160];
        function outputValue(value) {
            console.log(value);
        }
        // processArray(items, outputValue, function(){
        //     console.log("Done!");
        // });

        // var req = new XMLHttpRequest();
        // var getLatestPacketInterval, lastLength = 0;
        // function readyStateHandler() {
        //     if (req.readyState === 3 && getLatestPacketInterval === null) {
        //         getLatestPacketInterval = window.setInterval(function(){
        //             getLatestPacket();
        //         }, 15);
        //     }
        //     if (req.readyState === 4) {
        //         clearInterval(getLatestPacketInterval);
        //         getLatestPacket();
        //     }
        // }
        // function getLatestPacket() {
        //     var length = req.responseText.length;
        //     var packet = req.responseText.substring(lastLength, length);
        //     // processPacket(packet);
        //     lastLength = length;
        // }

        // var url = '/data.php';
        // var params = [
        //     'id=934875',
        //     'limit=20'
        // ];

        // function xhrPost(url, params, callback) {
        //     var req = new XMLHttpRequest();
        //     req.onerror = function () {
        //         //error
        //         setTimeout(function() {
        //             xhrPost(url, params, callback);
        //         }, 1000);
        //     };
        //     req.onreadystatechange = function () {
        //         if (req.readyState === 4) {
        //             //success
        //             if (callback && typeof callback === 'function') {
        //                 callback();
        //             }
        //         }
        //     };
        //     req.open('POST', url, true);
        //     req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //     req.setRequestHeader('Content-Length', params.length);
        //     req.send(params.join('&'));
        // }
       
        // var beacon = new Image();
        // beacon.src = url + '?' + params.join('&');
        // beacon.onload = function () {
        //     if (this.width === 1) {
        //         //success
        //     } else if (this.width === 2){
        //         //failed
        //     }
        // };
        // beacon.onerror = function () {
        //     //error
        // }

        /*[
            [ 1, "alice", "Alice Smith", "alice@alicesmith.com" ],
            [ 2, "bob", "Bob Jones", "bob@bobjones.com" ],
            [ 3, "carol", "Carol Williams", "carol@carolwilliams.com" ], 
            [ 4, "dave", "Dave Johnson", "dave@davejohnson.com" ]
        ]*/

        function parseJSON(responseText) {
            var users = [];
            var usersArray = ('(' + responseText + ')');
            for (var i = 0, len = usersArray.length; i < len; i++) {
                users[i] = {
                    id: usersArray[i][0],
                    username: usersArray[i][1],
                    realname: usersArray[i][2],
                    email: usersArray[i][3]
                }
            }
            return users;
        }
        
        /*parseJSON([
        {"id":1, "username":"alice", "realname":"Alice Smith", "email":"alice@alicesmith.com"}, 
        {"id":2, "username":"bob", "realname":"Bob Jones", "email":"bob@bobjones.com"},
        {"id":3, "username":"carol", "realname":"Carol Williams", "email":"carol@carolwilliams.com"}, 
        {"id":4, "username":"dave", "realname":"Dave Johnson", "email":"dave@davejohnson.com"}
        ]);*/

        /**
         * 自定义数据格式
           1:alice:Alice Smith:alice@alicesmith.com; 
           2:bob:Bob Jones:bob@bobjones.com;
           3:carol:Carol Williams:carol@carolwilliams.com; 
           4:dave:Dave Johnson:dave@davejohnson.com
         */

        // function parseCustomFormat(responseText) {
        //     var users = [];
        //     var usersEncoded = responseText.split(';');
        //     var userArray;
        //     for (var i=0, len = usersEncoded.length; i<len; i++){
        //         userArray = usersEncoded[i].split(':');
        //         users[i] = {
        //             id: userArray[0],
        //             username: userArray[1],
        //             realname: userArray[2],
        //             email: userArray[3]
        //         };
        //     }
        //     return users;
        // }

        //延迟加载，首次调用时间较长，适用于函数不会被页面立即被用到的场合
        function addHandler(target, eventType, handler){
            if(target.addEventListener){
                addHandler = function(target, eventType, handler) {
                    target.addEventListener(eventType, handler, false);
                };
            } else {
                addHandler = function(target, eventType, handler) {
                    target.attachEvent("on" + eventType, handler);
                };
            }
            addHandler(target, eventType, handler);
        }

        //条件预加载，脚本加载时进行检查，适用于函数马上被用到
        var addHandler = document.body.addEventListener ? 
            function(target, eventType, handler) {
                target.addEventListener(eventType, handler, false);
            } : 
            function(target, eventType, handler) {
                target.attachEvent("on" + eventType, handler);
            };





















    }

    render(){
        return (
        <div>
            <br/>
            <h2>High</h2>
        </div>
        )
    }
}