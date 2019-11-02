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