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
            // context.fillStyle = "#ff0000";
            // context.fillRect(10, 10, 50, 50);
            // context.strokeStyle = "ff0000";
            // context.strokeRect(10, 10, 50, 50);
            
            // context.fillStyle = "rgba(0, 0, 255, 0.5)";
            // context.fillRect(30, 30, 50, 50);
            // context.strokeStyle = "rgba(0, 0, 255, 0.5)";
            // context.strokeRect(30, 30, 50, 50);
            // context.clearRect(40, 40, 10, 10);

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

            context.fillStyle = "#ff0000";
            context.save();

            context.fillStyle = "#00ff00";
            context.translate(100, 100);
            context.save();

            context.fillStyle = "#0000ff";
            context.fillRect(0, 0, 100, 200);

            context.restore();
            context.fillRect(10, 10, 100, 200);

            context.restore();
            context.fillRect(0, 0, 100, 200);

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