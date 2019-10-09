//web worker 内部的代码 
self.onmessage = function(event){
    var data = event.data;
    console.log("内部: " + data);
    data.sort(function(a, b){
        return a - b;
    });
    self.postMessage(data);
}