//判断属性是否是原型中的属性
export function hasPrototypeProperty(object, name){
    return !object.hasPrototypeProperty(name) && (name in object);
}

//解析URL包含的查询字符串
export function getQueryStringArgs(){
    //取得查询字符串并去掉开头的问号
    var qs = (location.search.length > 0 ? location.search.substring(1) : ""),

    //保存数据的对象
    args = {},

    //取得每一项
    items = qs.length ? qs.split("&") : [],
    item = null,
    name = null,
    value = null,

    //在for循环中使用
    i = 0,
    len = items.length;

    //逐个将每一项添加到args对象中
    for (i = 0; i < len; i++){
        item = items[i].split("=");
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if (name.length) {
           args[name] = value;
        }
    }

    return args;
}

//在浏览器环境下测试任何对象的某个特性是否存在，考虑到IE8及之前版本的怪异行为
export function isHostMethod(object, property){
    var t = typeof object[property];
    return t == 'function' || 
         (!!(t == 'object' && object[property])) ||
         t == 'unknown';
}

//用户代理字符串检测，包括检测呈现平台引擎、平台、Windows操作系统、移动设备和游戏系统
export function client(){

  //呈现引擎
  var engine = {
    ie: 0,
    gecko: 0,
    wekkit: 0,
    khtml: 0,
    opera: 0,

    //完整的版本号
    ver: null
  };

  //浏览器
  var browser = {
    //主要浏览器
    ie: 0,
    firefox: 0,
    safari: 0,
    konq: 0,
    opera: 0,
    chrome: 0,

    //具体的版本号
    ver: null
  };

  //平台、设备和操作系统
  var system = {
    win: false,
    mac: false,
    x11: false,

    //移动设备
    iphone: false,
    ipod: false,
    ipad: false,
    ios: false,
    android: false,
    nokiaN: false,
    winMobile: false,

    //游戏系统
    wii: false,
    ps: false
  };

  //检测呈现引擎和浏览器
  var ua = navigator.userAgent; 
  if (window.opera){
    engine.ver = browser.ver = window.opera.version();
    engine.opera = browser.opera = parseFloat(engine.ver);
  } else if (/AppleWebKit\/(\S+)/.test(ua)){
    engine.ver = RegExp["$1"];
    engine.webkit = parseFloat(engine.ver);

    //确定是 Chrome 还是 Safari
    if (/Chrome\/(\S+)/.test(ua)){
        browser.ver = RegExp["$1"];
        browser.chrome = parseFloat(browser.ver);
    } else if (/Version\/(\S+)/.test(ua)){
        browser.ver = RegExp["$1"];
        browser.safari = parseFloat(browser.ver);
    } else {
      //近似地确定版本号
      var safariVersion = 1;
      if (engine.webkit < 100){
        safariVersion = 1;
      } else if (engine.webkit < 312){
        safariVersion = 1.2;
      } else if (engine.webkit < 412){
        safariVersion = 1.3;
      } else {
        safariVersion = 2;
      }
      browser.safari = browser.ver = safariVersion;
    }
  } else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)){ 
    engine.ver = browser.ver = RegExp["$1"];
    engine.khtml = browser.konq = parseFloat(engine.ver);
  } else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){
      engine.ver = RegExp["$1"];
      engine.gecko = parseFloat(engine.ver);

      //确定是不是 Firefox
      if (/Firefox\/(\S+)/.test(ua)){
        browser.ver = RegExp["$1"];
        browser.firefox = parseFloat(browser.ver);
      }
  } else if (/MSIE ([^;]+)/.test(ua)){
    engine.ver = browser.ver = RegExp["$1"];
    engine.ie = browser.ie = parseFloat(engine.ver);
  }

  //检测浏览器
  browser.ie = engine.ie; 
  browser.opera = engine.opera;

  //检测平台
  var p = navigator.platform;
  system.win = p.indexOf("Win") == 0;
  system.mac = p.indexOf("Mac") == 0;
  system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);

  //检测 Windows 操作系统 
  if (system.win){
      if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua)){
          if (RegExp["$1"] == "NT"){
                switch(RegExp["$2"]){
                    case "5.0":
                        system.win = "2000";
                        break;
                    case "5.1":
                        system.win = "XP";
                        break;
                    case "6.0":
                        system.win = "Vista";
                        break;
                    case "6.1":
                        system.win = "7";
                        break;
                    default:
                        system.win = "NT";
                        break; 
                }
            } else if (RegExp["$1"] == "9x"){
                system.win = "ME";
            } else {
                system.win = RegExp["$1"];
            } 
        }
    } 

    //移动设备
    system.iphone = ua.indexOf("iPhone") > -1;
    system.ipod = ua.indexOf("iPod") > -1;
    system.ipad = ua.indexOf("iPad") > -1;
    system.nokiaN = ua.indexOf("NokiaN") > -1;

    //windows mobile
    if (system.win == "CE"){
        system.winMobile = system.win;
    } else if (system.win == "Ph"){
        if(/Windows Phone OS (\d+.\d+)/.test(ua)){
            system.win = "Phone";
            system.winMobile = parseFloat(RegExp["$1"]);
        } 
    }

    //检测 iOS 版本
    if (system.mac && ua.indexOf("Mobile") > -1){
        if (/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua)){
            system.ios = parseFloat(RegExp.$1.replace("_", "."));
        } else {
            system.ios = 2; //不能真正检测出来，所以只能猜测
        } 
    }

    //检测 Android 版本
    if (/Android (\d+\.\d+)/.test(ua)){
        system.android = parseFloat(RegExp.$1);
    }

    //游戏系统
    system.wii = ua.indexOf("Wii") > -1; 
    system.ps = /playstation/i.test(ua);
    
    return {
        engine: engine,
        browser: browser,
        system: system
    };
  
}

//动态加载js文件，e.g: loadScript("client.js")
export function loadScript(url){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.scr = url;
    document.body.appendChild(script);
}

//动态加载js代码，e.g: loadScriptString("function sayHi() {alert('hi');}")
export function loadScriptString(code){
    var script = document.createElement("script");
    script.type = "text/javascript";
    try {
        script.appendChild(document.createTextNode(code));
    } catch (ex) {
        script.text = code;
    }
    document.body.appendChild(script);
}

//动态加载css文件，e.g: loadStyles("styles.css")
export function loadStyles(url){
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(link);
}

//动态加载css代码，e.g: loadStyleString("body{background-color:red}")
export function loadStyleString(css){
    var style = document.createElement("style");
    style.type = "text/css";
    try {
        style.appendChild(document.createTextNode(css));
    } catch (ex) {
        style.styleSheet.cssText = css;
    }
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(style);
}

//检查一个节点是不是另一个节点的后代
function contains(refNode, otherNode){
    if (typeof refNode.contains == "function" && (!client().engine.webkit >=522)){
        return refNode.contains(otherNode);
    } else if (typeof refNode.compareDocumentPosition == "function"){
        return !!(refNode.compareDocumentPosition(otherNode) & 16);
    } else { //兼容Safari 3以下版本，<522
        var node = otherNode.parentNode;
        do {
            if (node === refNode){
                return true;
            } else {
                node = node.parentNode;
            }
        } while (node !== null);
        return false;
    }
}

//获取dom元素文本，e.g: alert(getInnerText(div));    //"Hello world!"
export function getInnerText(element){
    return (typeof element.textContent == "string") ? element.textContent : element.innerText;
}

//设置dom元素文本，e.g: setInnerText(div, "Hello world!");
export function setInnerText(element, text){
    if (typeof element.textContent == "string"){
        element.textContent = text;
    } else {
        element.innerText = text;
    }
}

//获取dom元素在页面上的左偏移量
export function getElementLeft(element){
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    while (current !== null){
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
}

//获取dom元素在页面上的上偏移量
export function getElementTop(element){
    var actualTop = element.offsetTop;
    var current = element.offsetParent;
    while (current !== null){
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
}

//获取浏览器视口大小
export function getViewport(){
    if (document.compatMode == "BackCompat"){
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight,
        };
    } else {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
       }
    }
}

//跨浏览器的事件处理程序
export var EventUtil = {
    addHandler: function(element, type, handler){
        if (element.addEventListener){
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent){
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },

    removeHandler: function(element, type, handler){
        if (element.removeEventListener){
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent){
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },

    getEvent: function(event){
        return event ? event : window.event;
    },

    getTarget: function(event){
        return event.target || event.srcElement;
    },

    preventDefault: function(event){
        if (event.preventDefault){
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    stopPropagation: function(event){
        if (event.stopPropagation){
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    getRelatedTarget: function(event){
        if (event.relatedTarget){
            return event.relatedTarget;
        } else if (event.toElement){
            return event.toElement;
        } else if (event.fromElement){
            return event.fromElement;
        } else {
            return null;
        }
    },

    getButton: function(event){
        if (document.implementation.hasFeature("MouseEvents", "2.0")){
            return event.button;
        } else {
            switch (event.button){
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },

    getWheelDelta: function(event){
        if (event.wheelDelta){
            return (client().engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40;
        }
    },

    getCharCode: function(event){
        if (typeof event.charCode == "number"){
            return event.charCode;
        } else {
            return event.keyCode;
        }
    },

    getClipboardText: function(event){
        var clipboardData = (event.clipboardData || window.clipboardData);
        return clipboardData.getData("text");
    },

    setClipboardText: function(event, value){
        if (event.clipboardData){
            return event.clipboardData.setData("text/plain", value);
        } else if (window.clipboardData){
            return window.clipboardData.setData("text", value);
        }
    }
}

//判断是否是数组
export function isArray(value){
    return Object.prototype.toString.call(value) == "[object Array]";
}

//判断是否是原生函数，不适用COM对象实现的函数
export function isFunction(value){
    return Object.prototype.toString.call(value) == "[object Function]";
}

//判断是否是正则表达式
export function isRegExp(value){
    return Object.prototype.toString.call(value) == "[object RegExp]";
}

//函数节流
export function throttle(method, context){
    clearTimeout(method.tId);
    method.Id = setTimeout(function(){
        method.call(context);
    }, 100);
}

//cookie操作
export var CookieUtil = {
    get: function(name){
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
        
        if (cookieStart > -1){
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1){
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }

        return cookieValue;
    },

    set: function(name, value, expires, path, domain, secure){
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        if (expires instanceof Date){
            cookieText += "; expires=" + expires.toUTCString();
        }

        if (path){
            cookieText += "; path=" + path;
        }

        if (domain){
            cookieText += "; domain=" + domain;
        }

        if (secure){
            cookieText += "; secure";
        }

        document.cookie = cookieText;
    },

    unset: function(name, path, domain, secure){
        this.set(name, "", new Date(0), path, domain, secure);
    }
}

//子cookie操作
export var SubCookieUtil = {
    get: function (name, subName){
        var subCookies = this.getAll(name);
        if (subCookies){
            return subCookies[subName];
        } else {
            return null;
        }
    },

    getAll: function(name){
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName);
            cookieValue = null,
            cookieEnd,
            subCookies,
            i,
            parts,
            result = {};
        
        if (cookieStart > -1){
            cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1){
                cookieEnd = document.cookie.length;
            }
            cookieValue = document.cookie.substring(cookieStart + cookieName.length, cookieEnd);

            if (cookieValue.length > 0){
                subCookies = cookieValue.split("&");
    
                for (i=0, len = subCookies.length; i < len; i++){
                    parts = subCookies[i].split("=");
                    result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
                }
                return result;
            }
        }
        
        return null;
    },

    set: function(name, subName, value, expires, path, domain, secure) {
        var subcookies = this.getAll(name) || {};
        subcookies[subName] = value;
        this.setAll(name, subcookies, expires, path, domain, secure);
    },

    setAll: function(name, subcookies, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + "=",
            subcookiesParts = new Array(),
            subName;
        
        for (subName in subcookies){
            if (subName.length > 0 && subcookies.hasOwnProperty(subName)){
                subcookiesParts.push(encodeURIComponent(subName) + "=" + encodeURIComponent(subcookies[subName]));
            }
        }

        if (cookieParts.length > 0){
            cookieText += subcookiesParts.join("&");

            if (expires instanceof Date){
                cookieText += "; expires=" + expires.toUTCString();
            }

            if (path){
                cookieText += "; path=" + path;
            }

            if (domain){
                cookieText += "; domain" + domain;
            }

            if (secure){
                cookieText += "; secure";
            }
        } else {
            cookieText += "; expires=" + (new Date(0)).toUTCString();
        }

        document.cookie = cookieText;
    },

    unset: function (name, subName, path, domain, secure){
        var subcookies = this.getAll(name);
        if (subcookies){
            delete subcookies[subName];
            this.setAll(name, subcookies, null, path, domain, secure);
        }
    },

    unsetAll: function(name, path, domain, secure){
        this.setAll(name, null, new Date(0), path, domain, secure);
    }
}

//blob slice()方法
export function blobSlice(blob, startByte, length){
    if (blob.slice){
        return blob.slice(startByte, length);
    } else if (blob.webkitSlice){
        return blob.webkitSlice(startByte, length);
    } else if (blob.mozSlize){
        return blob.mozSlize(startByte, length);
    } else {
        return null;
    }
}

//创建URL对象
export function createObjectURL(blob){
    if (window.URL){
        return window.URL.createObjectURL(blob);
    } else if (window.webkitURL){
        return window.webkitURL.createObjectURL(blob);
    } else {
        return null;
    }
}

//释放对象URL占用的内存
export function revokeObjectURL(url){
    if (window.URL){
        window.URL.revokeObjectURL(url);
    } else if (window.webkitURL){
        window.webkitURL.revokeObjectURL(url);
    }
}

//生成随机数
export function selectFrom(lowerValue, upperValue) {
    var choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}

//添加函数在页面加载完成后执行
export function addLoadEvent(func){
    var oldonload = window.onload;
    if (typeof window.onload != 'function'){
        window.onload = func;
    } else {
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

//把一个节点插入到另一个节点之后
export function insertAfter(newElement, targetElement){
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement){
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

//获取下一个元素节点，e.g: getNextElement(headers[i].nextSibling)
export function getNextElement(node) {
    if (node.nodeType === 1){
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    return null;
}

//检测是否支持特定的属性，e.g: elementSupportsAttribute('input', 'placeholder')
export function elementSupportsAttribute(elementName, attribute) {
    if (!document.createElement) return false;
    var temp = document.createElement(elementName);
    return (attribute in temp);
}

//去科学计数法格式
export function toNonExponential(num) {
    if (typeof num !== 'number') {
        num = Number(num);
    }
    var m = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/);
    return num.toFixed(Math.max(0, (m[1] || '').length - m[2]));
}

//取整
export function integer(num) {
    return Math[num < 0 ? 'ceil' : 'floor'](num);
}

//记忆函数
export var memoizer = function (memo, formula) {
    var recur = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = formula (recur, n);
            memo[n] = result;
        }
        return result;
    };
    return recur;
}

//除法函数
export function accDiv(arg1, arg2){ 
    var t1 = 0, t2 = 0, r1, r2; 
    var arg1Str = toNonExponential(arg1.toString());
    var arg2Str = toNonExponential(arg2.toString());
    try{
        t1 = arg1Str.split(".")[1].length
    }catch(e){}   //--小数点后的长度
    try{
        t2 = arg2Str.split(".")[1].length
    }catch(e){}  //--小数点后的长度
    r1 = Number(arg1Str.replace(".",""))  //--去除小数点变整数
    r2 = Number(arg2Str.replace(".",""))  //--去除小数点变整数
    return (r1 / r2) * Math.pow(10, t2 - t1);   //---整数相除 在乘上10的平方  小数点的长度
} 

//乘法函数
export function accMul(arg1,arg2){ 
    var m = 0,
        s1 = toNonExponential(arg1.toString()),
        s2 = toNonExponential(arg2.toString());;
    try{
        m += s1.split(".")[1].length
    }catch(e){} 
    try{
        m += s2.split(".")[1].length
    }catch(e){} 
    return Number(s1.replace(".","")) * Number(s2.replace(".","")) / Math.pow(10, m) 
} 

//加法函数
export function accAdd(arg1,arg2){ 
    var r1, r2, m; 
    var arg1Str = toNonExponential(arg1.toString());
    var arg2Str = toNonExponential(arg2.toString());
    try{
        r1 = arg1Str.split(".")[1].length
    }catch(e){
        r1 = 0
    } 
    try{
        r2 = arg2Str.split(".")[1].length
    }catch(e){
        r2 = 0
    } 
    m = Math.pow(10,Math.max(r1, r2)) 
    return (arg1 * m + arg2 * m) / m 
} 

//减法函数
export function accSub(arg1,arg2){ 
    var r1,r2,m,n; 
    try{
        r1 = toNonExponential(arg1.toString()).split(".")[1].length
    }catch(e){
        r1 = 0
    } 
    try{
        r2 = toNonExponential(arg2.toString()).split(".")[1].length
    }catch(e){
        r2 = 0
    } 
    m = Math.pow(10, Math.max(r1, r2)); 
    n = (r1 >= r2) ? r1 : r2; 
    return ((arg1 * m - arg2 * m) / m).toFixed(n); 
}

