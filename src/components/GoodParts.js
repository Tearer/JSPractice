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
        console.log(fibonacci(10));
        var factorial = memoizer([1, 1], function (recur, n) {
            return n * recur (n - 1);
        });
        console.log(factorial(3));
























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