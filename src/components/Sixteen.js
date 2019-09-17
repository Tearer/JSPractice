import React, {Component} from 'react';
// import * as utils from '../../utils';

export default class Sixteen extends Component{

    componentDidMount(){
        // //取得元素的引用
        // var player = document.getElementById("player"),
        //     btn = document.getElementById("video-btn"),
        //     curtime = document.getElementById("curtime"),
        //     duration = document.getElementById("duration");

        // player.src = require('./vsys_video.mp4');
        // //更新播放时间
        // duration.innerHTML = player.duration;
      
        // //为按钮添加事件处理程序
        // utils.EventUtil.addHandler(btn, "click", function(event){
        //     if (player.paused){
        //         player.play();
        //         btn.value = "Pause";
        //     } else {
        //         player.pause();
        //         btn.value = "Play";
        //     }
        // });
        // //定时更新当前时间 
        // setInterval(function(){
        //         curtime.innerHTML = player.currentTime;
        //     }, 1000
        // );

        // console.log(window.history);
        // window.history.pushState({name:"Hicholas"}, "Nicholas' page", "nicholas.html");
        // utils.EventUtil.addHandler(window, "popstate", function(event){
        //     var state = event.state;
        //     if (state){
        //         // processState(state);
        //         console.log(state)
        //         window.history.replaceState({name:"Greg"}, "Greg's page");
        //     }
        // })

























    }

    render(){
        return (
        <div>
            <br/>
            <h2>Sixteen</h2>
            {/* <div className="mediaplayer">
                <div className="video">
                    <video id="player" width="300" height="200">
                        Video player not available.
                    </video>
                </div>
                <div className="controls">
                    <input type="button" value="Play" id="video-btn"/>
                    <span id="curtime">0</span>/<span id="duration">0</span>
                </div>
            </div> */}

        </div>
        )
    }
}