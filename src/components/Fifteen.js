import React, {Component} from 'react';

export default class Fifteen extends Component{

    componentDidMount(){
        var drawing = document.getElementById("drawing");
        if (drawing.getContext){
            // var imgURI = drawing.toDataURL("image/png");
            // var image = document.createElement("img");
            // image.src = imgURI;
            // document.body.appendChild(image);

            var context = drawing.getContext("2d");

            // context.shadowOffsetX = 5;
            // context.shadowOffsetY = 5;
            // context.shadowBlur = 4;
            // context.shadowColor = "rgba(0, 0, 0, 0.5)";

            // function createRectLinearGradient(context, x, y, width, height){
                // return context.createLinearGradient(x, y, x+width, y+height);
            // }

            // var gradient = context.createLinearGradient(30, 30, 70, 70);
            // var gradient = context.createRadialGradient(55, 55, 10, 55, 55, 30);
            // gradient.addColorStop(0, "white");
            // gradient.addColorStop(1, "black");

            context.fillStyle = "#ff0000";
            context.fillRect(10, 10, 50, 50);
            // context.strokeStyle = "ff0000";
            // context.strokeRect(10, 10, 50, 50);

            // context.globalAlpha = 0.5;

            // context.globalCompositeOperation = "destination-over";
            
            // context.fillStyle = "rgba(0, 0, 255, 0.5)";
            // context.fillStyle = gradient;
            // context.fillRect(30, 30, 50, 50);
            // context.strokeStyle = "rgba(0, 0, 255, 0.5)";
            // context.strokeRect(30, 30, 50, 50);
            // context.clearRect(40, 40, 10, 10);

            // context.globalAlpha = 0;

            // context.beginPath();
            // context.arc(100, 100, 99, 0, 2 * Math.PI, false);

            // context.moveTo(194, 100);
            // context.arc(100, 100, 94, 0, 2 * Math.PI, false);

            // context.moveTo(100, 100);
            // context.lineTo(100, 15);

            // context.moveTo(100, 100);
            // context.lineTo(35, 100);

            // context.translate(100, 100); //100,100变成了0,0
            // context.rotate(1);
            // context.moveTo(0, 0);
            // context.lineTo(0, -85);
            // context.moveTo(0, 0);
            // context.lineTo(-65, 0);

            // context.stroke();

            // context.font = "bold 14px Arial";
            // context.textAlign = "center";
            // context.textBaseline = "middle";
            // context.fillText("12", 100, 20);

            // context.textAlign = "start";
            // context.fillText("12", 100, 40);
            // context.textAlign = "end";
            // context.fillText("12", 100, 60);

            // context.fillStyle = "#ff0000";
            // context.save();

            // context.fillStyle = "#00ff00";
            // context.translate(100, 100);
            // context.save();

            // context.fillStyle = "#0000ff";
            // context.fillRect(0, 0, 100, 200);

            // context.restore();
            // context.fillRect(10, 10, 100, 200);

            // context.restore();
            // context.fillRect(0, 0, 100, 200);

            /**/
            // var gl = drawing.getContext("experimental-webgl", { alpha: false });
            // gl.clearColor(0, 0, 0, 1);
            // gl.clear(gl.COLOR_BUFFER_BIT);
            // gl.viewport(0, drawing.height/2, drawing.width/2, drawing.height/2);
            // var buffer = gl.createBuffer();
            // gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0.5, 1]), gl.STATIC_DRAW);

            // var errorCode = gl.getError();
            // while(errorCode){
            //     console.log("Error occurred: " + errorCode);
            //     errorCode = gl.getError();
            // }
            // var vertexGlsl = document.getElementById("vertexShader").text,
            //     fragmentGlsl = document.getElementById("fragmentShader").text;

            // var vertexShader = gl.createShader(gl.VERTEX_SHADER); 
            // gl.shaderSource(vertexShader, vertexGlsl);
            // gl.compileShader(vertexShader);

            // var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
            // gl.shaderSource(fragmentShader, fragmentGlsl);
            // gl.compileShader(fragmentShader);

            // var program = gl.createProgram();
            // gl.attachShader(program, vertexShader);
            // gl.attachShader(program, fragmentShader);
            // gl.linkProgram(program);
            // gl.useProgram(program);

            // var uColor = gl.getUniformLocation(program, "uColor");
            // gl.uniform4fv(uColor, [0, 0, 0, 1]);

            // var aVertexPosition = gl.getAttribLocation(program, "aVertexPosition"); 
            // gl.enableVertexAttribArray(aVertexPosition); 
            // gl.vertexAttribPointer(aVertexPosition, 1, gl.FLOAT, false, 0, 0);

            // if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)){ 
            //     console.log(gl.getShaderInfoLog(vertexShader));
            // }
            // if (!gl.getProgramParameter(program, gl.LINK_STATUS)){
            //     console.log(gl.getProgramInfoLog(program));
            // }

            // var vertices = new Float32Array([ 0, 1, 1, -1, -1, -1 ]),
            //     buffer = gl.createBuffer(),
            //     vertexSetSize = 2,
            //     vertexSetCount = vertices.length/vertexSetSize,
            //     uColor, aVertexPosition;
            // //把数据放到缓冲区
            // gl.bindBuffer(gl.ARRAY_BUFFER, buffer); 
            // gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
            // //为片段着色器传入颜色值
            // uColor = gl.getUniformLocation(program, "uColor"); 
            // gl.uniform4fv(uColor, [ 0, 0, 0, 1 ]);
            // //为着色器传入顶点信息
            // aVertexPosition = gl.getAttribLocation(program, "aVertexPosition"); 
            // gl.enableVertexAttribArray(aVertexPosition); 
            // gl.vertexAttribPointer(aVertexPosition, vertexSetSize, gl.FLOAT, false, 0, 0);
            // //绘制三角形
            // gl.drawArrays(gl.TRIANGLES, 0, vertexSetCount);


        }
























    }

    render(){
        return (
        <div>
            <br/>
            <h2>Fifteen</h2>
            <canvas id="drawing" width="200" height="200">A drawing of something</canvas>
        </div>
        )
    }
}