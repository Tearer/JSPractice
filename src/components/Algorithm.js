/* eslint-disable */
import React, {Component} from 'react';

export default class Algorithm extends Component{

    componentDidMount(){
      /**
       * 程序的运行的总时间与执行每条语句的耗时和执行每条语句的频率有关，两者相乘并将程序中所有指令
       * 的成本相加得到总运行时间。
       * 
       * 
       */


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

      /** 选择排序 
       *  ~N^2/2 
       */
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

      /** 插入排序 
       *  最坏~N^2/2比较和~N^2/2交换，最好N-1比较和0次交换；
       *  对于部分有序的数组十分高效，也适合小规模数组。
       */
      function insertionSort(arr){
        let l = arr.length;
        for(let i = 1; i < l; i++){
          for(let j = i; j>0&&less(arr[j],arr[j-1]); j--){
            exch(arr, j, j-1);
          }
        }
      }

      /**
       * 将较大的元素向右移动而不总是交换两个元素，访问数组的次数能减半
       */
      function insertionSort2(arr){
        let l = arr.length;
        for(let i = 1; i < l; i++){
          let temp = arr[i]
          for(var j = i; j>0&&temp<arr[j-1]; j--){
            arr[j] = arr[j-1]
          }
          arr[j] = temp;
        }
      }

      /**
       * 希尔排序，通过增量将数组分成小块，逐个插入排序，减小增量，最后全部有序
       */
      function shellSort(arr){
        let l = arr.length,
            temp,
            gap = 1;
        while(gap < l/3){
          gap = gap*3 + 1;
        }
        for(gap; gap > 0; gap = Math.floor(gap/3)){
          for(var i = gap; i < l; i++){
            temp = arr[i];
            for(var j = i - gap; j >= 0 && arr[j] > temp; j-=gap){
              arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
          }
        }
        return arr;
      }

      /**
       * 归并排序(自顶向下)，层层拆分再层层合并
       * 
       * 时间复杂度 NlgN 
       * 可以用归并排序处理数百万甚至更大规模的数组，这是插入排序或选择排序做不到的，主要缺点是辅助
       * 数组所使用的额外空间和N的大小成正比。
       * 
       * 优化：
       * 对小规模子数组使用插入排序；
       * 测试数组是否有序，添加一个判断条件，如果a[mid]<=a[mid+1]，就跳过merge()；
       * 不将元素复制到辅助数组，要在递归调用的每个层次交换输入数组和辅助数组的角色；
       * 
       * 归并排序(自底向上)，先归并微型数组，再成对归并
       * 当数组长度为2的幂次时，自顶向下与自底向上所用到的比较次数和数组访问次数相同，其他时候有所
       * 不同。
       * 
       * 归并排序在最坏情况下的比较次数和任意基于比较的排序算法所需的最少比较次数都是 ~NlgN。
       * 
       */
      function mergeSort(arr){
        let l = arr.length;
        if(l<2) return arr;
        
        let middle = Math.floor(l/2),
            left = arr.slice(0, middle),
            right = arr.slice(middle);
        return merge(mergeSort(left), mergeSort(right));
      }
      function merge(left, right){
        let result = [];
        while(left.length && right.length){
          if(left[0] <= right[0]){
            result.push(left.shift());
          }else{
            result.push(right.shift());
          }
        }

        while(left.length){
          result.push(left.shift());
        }
        while(right.length){
          result.push(right.shift());
        }
        return result;
      }

      //自底向上
      function mergeSort2(arr){
        if(arr.length < 2) return;
        var step = 1;
        var left,right;
        while(step<arr.length){
          left=0;
          right=step;
          while(right+step<=arr.length){
            mergeArrays(arr, left, left+step, right, right+step);
            left=right+step;
            right=left+step;
          }
          if(right<arr.length){
            mergeArrays(arr, left, left+step, right, arr.length);
          }
          step*=2;
        }
      }

      function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight){
        //建立左右数组
        var rightArr = new Array(stopRight - startRight + 1);
        var leftArr = new Array(stopLeft - startLeft + 1);

        //给右数组赋值
        k=startRight;
        for(var i = 0; i<(rightArr.length-1); ++i){
          rightArr[i]=arr[k];
          ++k;
        }

        //给左数组赋值
        k=startLeft;
        for(var i=0; i<(leftArr.length-1); ++i){
          leftArr[i]=arr[k];
          ++k;
        }

        /*当左子数组或右子数组读取的最后一个时，因为是infinity，所有可以让另一个子数组的剩下的值直接
        插入到数组中*/
        rightArr[rightArr.length-1] = Infinity;
        leftArr[leftArr.length-1] = Infinity;
        var m = 0;
        var n = 0;
        for(var k = startLeft; k<stopRight; ++k){
          if(leftArr[m]<=rightArr[n]){
            arr[k]=leftArr[m];
            m++
          }else{
            arr[k] = rightArr[n];
            n++;
          }
        }
      }

      /**
       * 快速排序，选一个基准点切分数组，递归最终有序
       * 
       * 改进：
       * 对于小数组，快速排序比插入排序慢，因此在排序小数组时应该切换到插入排序；
       * 三取样切分，使用中位数切分数组，效果更好，但需要计算中位数。经验表明取样大小设为3并用大小居中
       * 的元素切分的效果更好；
       * 三向切分，加一个等于切分项的数据，对于有大量重复元素的数组，效率高些。
       * 
       * 
       */
      function quickSort(arr){
        if(arr.length<2) return arr;
        // let pivot = Math.floor((arr.length-1)/2);
        let pivot = 0;
        let val = arr[pivot], less = [], more = [];

        arr.splice(pivot, 1);
        arr.forEach(function(e){
          e<val ? less.push(e) : more.push(e)
        });

        return quickSort(less).concat([val],quickSort(more));
      }

      let arr = [2, 8, 6, 4, 1];
      arr = quickSort(arr);

      /**
       * 优先队列
       * 
       * 初级实现：
       * 数组实现(无序)，insert()方法的代码和栈的push代码一样，在实现删除最大元素时，添加一段类似
       * 于选择排序的内循环代码，将最大元素与边界元素交换然后删除它。
       * 
       * 数组实现(有序)，insert()方法中将所有较大的元素向右边移动一格以使数组保持有序，这样删除最大
       * 元素就像栈的pop()操作一样。
       * 
       * 链表表示法，和上面类似。
       * 
       * 堆的定义
       * 数据结构二叉堆能够很好的实现优先队列的基本操作。
       * 当一颗二叉树的每个结点都大于等于它的两个叶子结点，就称为堆有序。
       * 如果用指针来表示堆有序的二叉树，那么每个元素都需要三个指针来找到他的上下结点。完全二叉树可以
       * 只用数组表示，根结点在位置1，它的子结点在位置2，3，子结点的子结点在位置4，5，6，7，以此类推。
       * 
       * 一个大小为N的完全二叉树的高度为lgN(向下取整)。
       * 
       * 由下至上的堆有序化(上浮)
       * 如果堆的有序状态因为某个结点变得比它的父结点更大而被打破，就需要交换它和它的父节点来修复堆。
       * 与父结点交换直到遇到别自己大的父结点。
       * 
       * 由上至下的堆有序化(下沉)
       * 如果一个结点变得比它的两个子结点或者其中之一更小，就需要将它和它的两个子结点中较大者交换。
       * 
       * 优先队列由一个基于堆的完全二叉树表示，存储于数组pq[1...N]中，pq[0]没有使用。在insert()
       * 中，将N+1并把新元素添加在数组最后，然后用swim()恢复堆的秩序。在dexMax()中，从pq[1]中得到
       * 需要返回的元素，然后将pq[N]移动到pq[1]，将N-1并用sink()恢复堆的秩序。同时将pq[N+1]设为
       * null，便于回收。
       * 对于一个含有N个元素的基于堆的优先队列，插入元素操作只需不超过lgN+1次比较，删除最大元素的操作
       * 需要不超过2lgN次比较。
       * 
       * 索引优先队列，给每一个元素一个索引，直接访问已存在优先队列中的对象。
       * 
       * 使用优先队列实现多向归并。
       * 
       * 堆排序
       * 可以把任意优先队列变成一种排序方法，将所有元素插入一个查找最小元素的优先队列，然后再重复调用
       * 删除最小元素的操作将它们按顺序删除。
       * 在堆的构造阶段中，将原始数组重新组织安排进一个堆中，在下沉排序阶段，我们从堆中按递减顺序取出
       * 所有元素并得到排序结果。
       * 就是把最大堆堆顶的最大数取出，将剩余的堆继续调整为最大堆，再次将堆顶的最大数取出，这个过程持续
       * 到剩余数只有一个时结束，包含最大堆调整（Max-Heapify）：将堆的末端子节点作调整，使得子节点永远小于父节点
       * 创建最大堆（Build-Max-Heap）：将堆所有数据重新排序，使其成为最大堆
       * 堆排序（Heap-Sort）：移除位在第一个数据的根节点，并做最大堆调整的递归运算
       * 
       */

      /**
       * 如果排序算法能够保留数组中重复元素的相对位置则可以被称为稳定的。
       */

      /**
      * 符号表是一种存储键值对的数据结构，支持插入(将新的键值对存入表中)，查找(根据给定的键得到相应的值)。
      * 
      * 基于无序链表
      * 
      * 基于二分查找的有序符号表，用一对平行数组，一个储存键一个存储值。
      * 在N个键的有序数组中进行二分查找最多需要lgN+1次比较。
      * 
      * 二叉查找树
      * 能够将链表插入的灵活性和有序数组查找的高效性结合起来的符号表实现。具体来说就是使用每个节点含有
      * 两个链接的二叉查找树，每个结点的键都大于其左子树的任意结点的键小于右子树的任意结点的键。
      * 
      * 由N个随机键构造的二叉查找树中，查找命中平均所需的比较次数为~2lgN
      * 
      * 
      * 
      */
      

























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