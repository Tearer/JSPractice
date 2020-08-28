import React, {Component} from 'react';

export default class Algorithm extends Component{

    componentDidMount(){
      /**
       * 排序
       */

      function less(v, w){
        return v < w;
      }
      function exch(arr, i, j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      function show(arr){
        console.log(arr)
      }
      function isSorted(arr){
        for(let i = 1; i < arr.length; i++){
          if(less(arr[i], arr[i-1])) return false;
          return true
        }
      }

      //选择排序
      function selectionSort(arr){
        let l = arr.length;
        for(let i = 0; i < l; i++){
          let min = i;
          for(let j = i+1; j < l; j++){
            if(less(arr[j], arr[min])){
              min = j;
              exch(arr, i, min);
            }
          }
        }
      }

      let arr = [2, 8, 6, 4, 1];
      selectionSort(arr);

 
      

























    }

    render(){
        return (
        <div>
            <br/>
            <h2>Algorithm</h2>
        </div>
        )
    }
}