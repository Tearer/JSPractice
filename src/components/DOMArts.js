/* eslint-disable */
import React, {Component} from 'react';
import * as utils from '../../utils';

export default class DOMArts extends Component{

    componentDidMount(){
        
        function showPic(whichpic){
            if (!document.getElementById("placeholder")) return false;
            var source = whichpic.getAttribute("href");
            var placeholder = document.getElementById("placeholder");
            if (placeholder.nodeName !== "IMG") return false;
            placeholder.setAttribute("src", source);

            if (document.getElementById("description")){
                var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
                var description = document.getElementById("description");
                if (description.firstChild.nodeType === 3) {
                    description.firstChild.nodeValue = text;
                }
            }
            return true;
        }

        // function countBodyChildren(){
        //     var body_element = document.getElementsByTagName("body")[0];
        //     console.log(body_element.childNodes.length);
        // }
        // window.onload = countBodyChildren;

        function prepareGallery(){
            if (!document.getElementsByTagName) return false;
            if (!document.getElementById) return false;
            if (!document.getElementById("imagegallery")) return false;
            var gallery = document.getElementById("imagegallery");
            var links = gallery.getElementsByTagName("a");
            for (var i = 0; i < links.length; i++){
                links[i].onclick = function(){
                    return showPic(this) ? false : true;
                }
            }
        }

        window.onload = function(){
            var testdiv = document.getElementById("testdiv");
            // testdiv.innerHTML = "<p>I inserted <em>this<em> content.</p>";

            var para = document.createElement("p");
            // var info = "nodeName: ";
            // info+= para.nodeName;
            // info+= " nodeType: ";
            // info+= para.nodeType;
            // // console.log(info);
            // testdiv.appendChild(para);
            // var txt = document.createTextNode("Hello world");
            // para.appendChild(txt);
            var txt1 = document.createTextNode("This is ");
            var emphasis = document.createElement("em");
            var txt2 = document.createTextNode("my");
            var txt3 = document.createTextNode(" content.");
            para.appendChild(txt1);
            emphasis.appendChild(txt2);
            para.appendChild(emphasis);
            para.appendChild(txt3);
            testdiv.appendChild(para);
        }

        function preparePlaceholder(){
            if (!document.createElement) return false;
            if (!document.createTextNode) return false;
            if (!document.getElementById) return false;
            if (!document.getElementById("imagegallery")) return false;

            var placeholder = document.createElement("img");
            placeholder.setAttribute("id", "placeholder");
            placeholder.setAttribute("src", "images/placeholder.gif");
            placeholder.setAttribute("alt", "my image gallery");

            var description = document.createElement("p");
            description.setAttribute("id", "description");
            
            var desctext = document.createTextNode("Choose an image");
            description.appendChild(desctext);

            var gallery = document.getElementById("imagegallery");
            utils.insertAfter(placeholder, gallery);
            utils.insertAfter(description, placeholder);
        }

        // function getHTTPObject() {
        //     if (typeof XMLHttpRequest === "undefined") {
        //         XMLHttpRequest = function () {
        //             try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
        //               catch (e) {}
        //             try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
        //               catch (e) {}
        //             try { return new ActiveXObject("Msxml2.XMLHTTP"); }
        //               catch (e) {}
        //             return false;
        //         }
        //     }
        //     return new XMLHttpRequest();
        // }

        function getNewContent() {
            var request = new XMLHttpRequest();
            if (request) {
                request.open( "GET", "example.txt", true );
                request.onreadystatechange = function () {
                    if (request.readyState === 4){
                        var para = document.createElement("p");
                        var txt = document.createTextNode(request.responseXML);
                        para.appendChild(txt);
                        document.getElementById('new').appendChild(para);
                    }
                };
                request.send(null);
            } else {
                console.log('need XMLHTTPRequest');
            }
        }
        utils.addLoadEvent(getNewContent);
        


        

























    }

    render(){
        return (
        <div>
            <br/>
            <h2>DOMArts</h2>
            <div id="testdiv"></div>
            <div id="new"></div>
        </div>
        )
    }
}