/* eslint-disable */
import React, {Component} from 'react';
// import * as utils from '../../utils';

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
        myObject.increment();
        // console.log(myObject.value);
        myObject.increment(2);
        // console.log(myObject.value);

        var sum = add(3, 4);
        // console.log(sum);

        myObject.double = function () {
            var that = this;
            // console.log(this);
            var helper = function () {
                // console.log(this);
                that.value = add(that.value, that.value);
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
        var sum = add.apply(null, array);
        var statusObject = {
            status: 'A-OK'
        };
        var status = Quo.prototype.get_status.apply(statusObject);


























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