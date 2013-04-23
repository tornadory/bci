/*
* EaselJS
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2011 gskinner.com, inc.
* 
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
*/
this.createjs=this.createjs||{};(function(){var c=function(){throw"UID cannot be instantiated";};c._nextID=0;c.get=function(){return c._nextID++};createjs.UID=c})();this.createjs=this.createjs||{};
(function(){var c=function(){this.initialize()},b=c.prototype;c.initialize=function(a){a.addEventListener=b.addEventListener;a.removeEventListener=b.removeEventListener;a.removeAllEventListeners=b.removeAllEventListeners;a.hasEventListener=b.hasEventListener;a.dispatchEvent=b.dispatchEvent};b._listeners=null;b.initialize=function(){};b.addEventListener=function(a,m){var b=this._listeners;b?this.removeEventListener(a,m):b=this._listeners={};var d=b[a];d||(d=b[a]=[]);d.push(m);return m};b.removeEventListener=
function(a,m){var b=this._listeners;if(b){var d=b[a];if(d)for(var e=0,c=d.length;e<c;e++)if(d[e]==m){1==c?delete b[a]:d.splice(e,1);break}}};b.removeAllEventListeners=function(a){a?this._listeners&&delete this._listeners[a]:this._listeners=null};b.dispatchEvent=function(a,m){var b=!1,d=this._listeners;if(a&&d){"string"==typeof a&&(a={type:a});a.target=m||this;d=d[a.type];if(!d)return b;for(var d=d.slice(),c=0,f=d.length;c<f;c++){var h=d[c];h instanceof Function?b=b||h.apply(null,[a]):h.handleEvent&&
(b=b||h.handleEvent(a))}}return!!b};b.hasEventListener=function(a){var m=this._listeners;return!(!m||!m[a])};b.toString=function(){return"[EventDispatcher]"};createjs.EventDispatcher=c})();this.createjs=this.createjs||{};
(function(){var c=function(){throw"Ticker cannot be instantiated.";};c.useRAF=!1;c.addEventListener=null;c.removeEventListener=null;c.removeAllEventListeners=null;c.dispatchEvent=null;c.hasEventListener=null;c._listeners=null;createjs.EventDispatcher.initialize(c);c._listeners=null;c._pauseable=null;c._paused=!1;c._inited=!1;c._startTime=0;c._pausedTime=0;c._ticks=0;c._pausedTicks=0;c._interval=50;c._lastTime=0;c._times=null;c._tickTimes=null;c._rafActive=!1;c._timeoutID=null;c.addListener=function(a,
m){null!=a&&(c.removeListener(a),c._pauseable[c._listeners.length]=null==m?!0:m,c._listeners.push(a))};c.init=function(){c._inited=!0;c._times=[];c._tickTimes=[];c._pauseable=[];c._listeners=[];c._times.push(c._lastTime=c._startTime=c._getTime());c.setInterval(c._interval)};c.removeListener=function(a){var m=c._listeners;m&&(a=m.indexOf(a),-1!=a&&(m.splice(a,1),c._pauseable.splice(a,1)))};c.removeAllListeners=function(){c._listeners=[];c._pauseable=[]};c.setInterval=function(a){c._interval=a;c._inited&&
c._setupTick()};c.getInterval=function(){return c._interval};c.setFPS=function(a){c.setInterval(1E3/a)};c.getFPS=function(){return 1E3/c._interval};c.getMeasuredFPS=function(a){if(2>c._times.length)return-1;null==a&&(a=c.getFPS()|0);a=Math.min(c._times.length-1,a);return 1E3/((c._times[0]-c._times[a])/a)};c.setPaused=function(a){c._paused=a};c.getPaused=function(){return c._paused};c.getTime=function(a){return c._getTime()-c._startTime-(a?c._pausedTime:0)};c.getTicks=function(a){return c._ticks-(a?
c._pausedTicks:0)};c._handleAF=function(){c._rafActive=!1;c._setupTick();c._getTime()-c._lastTime>=0.97*(c._interval-1)&&c._tick()};c._handleTimeout=function(){c.timeoutID=null;c._setupTick();c._tick()};c._setupTick=function(){if(!(c._rafActive||null!=c.timeoutID)){if(c.useRAF){var a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;if(a){a(c._handleAF);c._rafActive=!0;return}}c.timeoutID=
setTimeout(c._handleTimeout,c._interval)}};c._tick=function(){var a=c._getTime();c._ticks++;var m=a-c._lastTime,b=c._paused;b&&(c._pausedTicks++,c._pausedTime+=m);c._lastTime=a;for(var d=c._pauseable,e=c._listeners.slice(),f=e?e.length:0,h=0;h<f;h++){var j=e[h];null==j||b&&d[h]||(j.tick?j.tick(m,b):j instanceof Function&&j(m,b))}c.dispatchEvent({type:"tick",paused:b,delta:m,time:a,runTime:a-c._pausedTime});for(c._tickTimes.unshift(c._getTime()-a);100<c._tickTimes.length;)c._tickTimes.pop();for(c._times.unshift(a);100<
c._times.length;)c._times.pop()};var b=window.performance&&(performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow);c._getTime=function(){return b&&b.call(performance)||(new Date).getTime()};c.init();createjs.Ticker=c})();this.createjs=this.createjs||{};
(function(){var c=function(a,m,b,d,c,f,h,j,k){this.initialize(a,m,b,d,c,f,h,j,k)},b=c.prototype;b.stageX=0;b.stageY=0;b.rawX=0;b.rawY=0;b.type=null;b.nativeEvent=null;b.onMouseMove=null;b.onMouseUp=null;b.target=null;b.pointerID=0;b.primary=!1;b.addEventListener=null;b.removeEventListener=null;b.removeAllEventListeners=null;b.dispatchEvent=null;b.hasEventListener=null;b._listeners=null;createjs.EventDispatcher.initialize(b);b.initialize=function(a,m,b,d,c,f,h,j,k){this.type=a;this.stageX=m;this.stageY=
b;this.target=d;this.nativeEvent=c;this.pointerID=f;this.primary=h;this.rawX=null==j?m:j;this.rawY=null==k?b:k};b.clone=function(){return new c(this.type,this.stageX,this.stageY,this.target,this.nativeEvent,this.pointerID,this.primary,this.rawX,this.rawY)};b.toString=function(){return"[MouseEvent (type="+this.type+" stageX="+this.stageX+" stageY="+this.stageY+")]"};createjs.MouseEvent=c})();this.createjs=this.createjs||{};
(function(){var c=function(a,m,b,d,c,f){this.initialize(a,m,b,d,c,f)},b=c.prototype;c.identity=null;c.DEG_TO_RAD=Math.PI/180;b.a=1;b.b=0;b.c=0;b.d=1;b.tx=0;b.ty=0;b.alpha=1;b.shadow=null;b.compositeOperation=null;b.initialize=function(a,b,g,d,c,f){null!=a&&(this.a=a);this.b=b||0;this.c=g||0;null!=d&&(this.d=d);this.tx=c||0;this.ty=f||0;return this};b.prepend=function(a,b,g,d,c,f){var h=this.tx;if(1!=a||0!=b||0!=g||1!=d){var j=this.a,k=this.c;this.a=j*a+this.b*g;this.b=j*b+this.b*d;this.c=k*a+this.d*
g;this.d=k*b+this.d*d}this.tx=h*a+this.ty*g+c;this.ty=h*b+this.ty*d+f;return this};b.append=function(a,b,g,d,c,f){var h=this.a,j=this.b,k=this.c,l=this.d;this.a=a*h+b*k;this.b=a*j+b*l;this.c=g*h+d*k;this.d=g*j+d*l;this.tx=c*h+f*k+this.tx;this.ty=c*j+f*l+this.ty;return this};b.prependMatrix=function(a){this.prepend(a.a,a.b,a.c,a.d,a.tx,a.ty);this.prependProperties(a.alpha,a.shadow,a.compositeOperation);return this};b.appendMatrix=function(a){this.append(a.a,a.b,a.c,a.d,a.tx,a.ty);this.appendProperties(a.alpha,
a.shadow,a.compositeOperation);return this};b.prependTransform=function(a,b,g,d,e,f,h,j,k){if(e%360){var l=e*c.DEG_TO_RAD;e=Math.cos(l);l=Math.sin(l)}else e=1,l=0;if(j||k)this.tx-=j,this.ty-=k;f||h?(f*=c.DEG_TO_RAD,h*=c.DEG_TO_RAD,this.prepend(e*g,l*g,-l*d,e*d,0,0),this.prepend(Math.cos(h),Math.sin(h),-Math.sin(f),Math.cos(f),a,b)):this.prepend(e*g,l*g,-l*d,e*d,a,b);return this};b.appendTransform=function(a,b,g,d,e,f,h,j,k){if(e%360){var l=e*c.DEG_TO_RAD;e=Math.cos(l);l=Math.sin(l)}else e=1,l=0;f||
h?(f*=c.DEG_TO_RAD,h*=c.DEG_TO_RAD,this.append(Math.cos(h),Math.sin(h),-Math.sin(f),Math.cos(f),a,b),this.append(e*g,l*g,-l*d,e*d,0,0)):this.append(e*g,l*g,-l*d,e*d,a,b);if(j||k)this.tx-=j*this.a+k*this.c,this.ty-=j*this.b+k*this.d;return this};b.rotate=function(a){var b=Math.cos(a);a=Math.sin(a);var g=this.a,d=this.c,c=this.tx;this.a=g*b-this.b*a;this.b=g*a+this.b*b;this.c=d*b-this.d*a;this.d=d*a+this.d*b;this.tx=c*b-this.ty*a;this.ty=c*a+this.ty*b;return this};b.skew=function(a,b){a*=c.DEG_TO_RAD;
b*=c.DEG_TO_RAD;this.append(Math.cos(b),Math.sin(b),-Math.sin(a),Math.cos(a),0,0);return this};b.scale=function(a,b){this.a*=a;this.d*=b;this.tx*=a;this.ty*=b;return this};b.translate=function(a,b){this.tx+=a;this.ty+=b;return this};b.identity=function(){this.alpha=this.a=this.d=1;this.b=this.c=this.tx=this.ty=0;this.shadow=this.compositeOperation=null;return this};b.invert=function(){var a=this.a,b=this.b,g=this.c,d=this.d,c=this.tx,f=a*d-b*g;this.a=d/f;this.b=-b/f;this.c=-g/f;this.d=a/f;this.tx=
(g*this.ty-d*c)/f;this.ty=-(a*this.ty-b*c)/f;return this};b.isIdentity=function(){return 0==this.tx&&0==this.ty&&1==this.a&&0==this.b&&0==this.c&&1==this.d};b.decompose=function(a){null==a&&(a={});a.x=this.tx;a.y=this.ty;a.scaleX=Math.sqrt(this.a*this.a+this.b*this.b);a.scaleY=Math.sqrt(this.c*this.c+this.d*this.d);var b=Math.atan2(-this.c,this.d),g=Math.atan2(this.b,this.a);b==g?(a.rotation=g/c.DEG_TO_RAD,0>this.a&&0<=this.d&&(a.rotation+=0>=a.rotation?180:-180),a.skewX=a.skewY=0):(a.skewX=b/c.DEG_TO_RAD,
a.skewY=g/c.DEG_TO_RAD);return a};b.reinitialize=function(a,b,g,d,c,f,h,j,k){this.initialize(a,b,g,d,c,f);this.alpha=h||1;this.shadow=j;this.compositeOperation=k;return this};b.appendProperties=function(a,b,g){this.alpha*=a;this.shadow=b||this.shadow;this.compositeOperation=g||this.compositeOperation;return this};b.prependProperties=function(a,b,g){this.alpha*=a;this.shadow=this.shadow||b;this.compositeOperation=this.compositeOperation||g;return this};b.clone=function(){var a=new c(this.a,this.b,
this.c,this.d,this.tx,this.ty);a.shadow=this.shadow;a.alpha=this.alpha;a.compositeOperation=this.compositeOperation;return a};b.toString=function(){return"[Matrix2D (a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+")]"};c.identity=new c(1,0,0,1,0,0);createjs.Matrix2D=c})();this.createjs=this.createjs||{};(function(){var c=function(a,b){this.initialize(a,b)},b=c.prototype;b.x=0;b.y=0;b.initialize=function(a,b){this.x=null==a?0:a;this.y=null==b?0:b};b.clone=function(){return new c(this.x,this.y)};b.toString=function(){return"[Point (x="+this.x+" y="+this.y+")]"};createjs.Point=c})();this.createjs=this.createjs||{};(function(){var c=function(a,b,g,d){this.initialize(a,b,g,d)},b=c.prototype;b.x=0;b.y=0;b.width=0;b.height=0;b.initialize=function(a,b,g,d){this.x=null==a?0:a;this.y=null==b?0:b;this.width=null==g?0:g;this.height=null==d?0:d};b.clone=function(){return new c(this.x,this.y,this.width,this.height)};b.toString=function(){return"[Rectangle (x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+")]"};createjs.Rectangle=c})();this.createjs=this.createjs||{};
(function(){var c=function(a,b,g,d,c,f,h){this.initialize(a,b,g,d,c,f,h)},b=c.prototype;b.target=null;b.overLabel=null;b.outLabel=null;b.downLabel=null;b.play=!1;b._isPressed=!1;b._isOver=!1;b.initialize=function(a,b,g,d,c,f,h){a.addEventListener&&(this.target=a,a.cursor="pointer",this.overLabel=null==g?"over":g,this.outLabel=null==b?"out":b,this.downLabel=null==d?"down":d,this.play=c,this.setEnabled(!0),this.handleEvent({}),f&&(h&&(f.actionsEnabled=!1,f.gotoAndStop&&f.gotoAndStop(h)),a.hitArea=f))};
b.setEnabled=function(a){var b=this.target;a?(b.addEventListener("mouseover",this),b.addEventListener("mouseout",this),b.addEventListener("mousedown",this)):(b.removeEventListener("mouseover",this),b.removeEventListener("mouseout",this),b.removeEventListener("mousedown",this))};b.toString=function(){return"[ButtonHelper]"};b.handleEvent=function(a){var b=this.target,g=a.type;"mousedown"==g?(a.addEventListener("mouseup",this),this._isPressed=!0,a=this.downLabel):"mouseup"==g?(this._isPressed=!1,a=
this._isOver?this.overLabel:this.outLabel):"mouseover"==g?(this._isOver=!0,a=this._isPressed?this.downLabel:this.overLabel):(this._isOver=!1,a=this._isPressed?this.overLabel:this.outLabel);this.play?b.gotoAndPlay&&b.gotoAndPlay(a):b.gotoAndStop&&b.gotoAndStop(a)};createjs.ButtonHelper=c})();this.createjs=this.createjs||{};(function(){var c=function(a,b,g,d){this.initialize(a,b,g,d)},b=c.prototype;c.identity=null;b.color=null;b.offsetX=0;b.offsetY=0;b.blur=0;b.initialize=function(a,b,g,d){this.color=a;this.offsetX=b;this.offsetY=g;this.blur=d};b.toString=function(){return"[Shadow]"};b.clone=function(){return new c(this.color,this.offsetX,this.offsetY,this.blur)};c.identity=new c("transparent",0,0,0);createjs.Shadow=c})();this.createjs=this.createjs||{};
(function(){var c=function(a){this.initialize(a)},b=c.prototype;b.complete=!0;b.onComplete=null;b.addEventListener=null;b.removeEventListener=null;b.removeAllEventListeners=null;b.dispatchEvent=null;b.hasEventListener=null;b._listeners=null;createjs.EventDispatcher.initialize(b);b._animations=null;b._frames=null;b._images=null;b._data=null;b._loadCount=0;b._frameHeight=0;b._frameWidth=0;b._numFrames=0;b._regX=0;b._regY=0;b.initialize=function(a){var b,g,d;if(null!=a){if(a.images&&0<(g=a.images.length)){d=
this._images=[];for(b=0;b<g;b++){var c=a.images[b];if("string"==typeof c){var f=c,c=new Image;c.src=f}d.push(c);!c.getContext&&!c.complete&&(this._loadCount++,this.complete=!1,function(a){c.onload=function(){a._handleImageLoad()}}(this))}}if(null!=a.frames)if(a.frames instanceof Array){this._frames=[];d=a.frames;b=0;for(g=d.length;b<g;b++)f=d[b],this._frames.push({image:this._images[f[4]?f[4]:0],rect:new createjs.Rectangle(f[0],f[1],f[2],f[3]),regX:f[5]||0,regY:f[6]||0})}else g=a.frames,this._frameWidth=
g.width,this._frameHeight=g.height,this._regX=g.regX||0,this._regY=g.regY||0,this._numFrames=g.count,0==this._loadCount&&this._calculateFrames();if(null!=(g=a.animations)){this._animations=[];this._data={};for(var h in g){a={name:h};f=g[h];if("number"==typeof f)d=a.frames=[f];else if(f instanceof Array)if(1==f.length)a.frames=[f[0]];else{a.frequency=f[3];a.next=f[2];d=a.frames=[];for(b=f[0];b<=f[1];b++)d.push(b)}else a.frequency=f.frequency,a.next=f.next,b=f.frames,d=a.frames="number"==typeof b?[b]:
b.slice(0);a.next=2>d.length||!1==a.next?null:null==a.next||!0==a.next?h:a.next;a.frequency||(a.frequency=1);this._animations.push(h);this._data[h]=a}}}};b.getNumFrames=function(a){if(null==a)return this._frames?this._frames.length:this._numFrames;a=this._data[a];return null==a?0:a.frames.length};b.getAnimations=function(){return this._animations.slice(0)};b.getAnimation=function(a){return this._data[a]};b.getFrame=function(a){var b;return this.complete&&this._frames&&(b=this._frames[a])?b:null};
b.getFrameBounds=function(a){return(a=this.getFrame(a))?new createjs.Rectangle(-a.regX,-a.regY,a.rect.width,a.rect.height):null};b.toString=function(){return"[SpriteSheet]"};b.clone=function(){var a=new c;a.complete=this.complete;a._animations=this._animations;a._frames=this._frames;a._images=this._images;a._data=this._data;a._frameHeight=this._frameHeight;a._frameWidth=this._frameWidth;a._numFrames=this._numFrames;a._loadCount=this._loadCount;return a};b._handleImageLoad=function(){0==--this._loadCount&&
(this._calculateFrames(),this.complete=!0,this.onComplete&&this.onComplete(),this.dispatchEvent("complete"))};b._calculateFrames=function(){if(!(this._frames||0==this._frameWidth)){this._frames=[];for(var a=0,b=this._frameWidth,g=this._frameHeight,d=0,c=this._images;d<c.length;d++){for(var f=c[d],h=(f.width+1)/b|0,j=(f.height+1)/g|0,j=0<this._numFrames?Math.min(this._numFrames-a,h*j):h*j,k=0;k<j;k++)this._frames.push({image:f,rect:new createjs.Rectangle(k%h*b,(k/h|0)*g,b,g),regX:this._regX,regY:this._regY});
a+=j}this._numFrames=a}};createjs.SpriteSheet=c})();this.createjs=this.createjs||{};
(function(){function c(a,b,d){this.f=a;this.params=b;this.path=null==d?!0:d}c.prototype.exec=function(a){this.f.apply(a,this.params)};var b=function(){this.initialize()},a=b.prototype;b.getRGB=function(a,b,d,c){null!=a&&null==d&&(c=b,d=a&255,b=a>>8&255,a=a>>16&255);return null==c?"rgb("+a+","+b+","+d+")":"rgba("+a+","+b+","+d+","+c+")"};b.getHSL=function(a,b,d,c){return null==c?"hsl("+a%360+","+b+"%,"+d+"%)":"hsla("+a%360+","+b+"%,"+d+"%,"+c+")"};b.BASE_64={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,
K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25,a:26,b:27,c:28,d:29,e:30,f:31,g:32,h:33,i:34,j:35,k:36,l:37,m:38,n:39,o:40,p:41,q:42,r:43,s:44,t:45,u:46,v:47,w:48,x:49,y:50,z:51,"0":52,1:53,2:54,3:55,4:56,5:57,6:58,7:59,8:60,9:61,"+":62,"/":63};b.STROKE_CAPS_MAP=["butt","round","square"];b.STROKE_JOINTS_MAP=["miter","round","bevel"];b._ctx=(createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")).getContext("2d");b.beginCmd=new c(b._ctx.beginPath,
[],!1);b.fillCmd=new c(b._ctx.fill,[],!1);b.strokeCmd=new c(b._ctx.stroke,[],!1);a._strokeInstructions=null;a._strokeStyleInstructions=null;a._ignoreScaleStroke=!1;a._fillInstructions=null;a._instructions=null;a._oldInstructions=null;a._activeInstructions=null;a._active=!1;a._dirty=!1;a.initialize=function(){this.clear();this._ctx=b._ctx};a.isEmpty=function(){return!(this._instructions.length||this._oldInstructions.length||this._activeInstructions.length)};a.draw=function(a){this._dirty&&this._updateInstructions();
for(var b=this._instructions,d=0,c=b.length;d<c;d++)b[d].exec(a)};a.drawAsPath=function(a){this._dirty&&this._updateInstructions();for(var b,d=this._instructions,c=0,f=d.length;c<f;c++)((b=d[c]).path||0==c)&&b.exec(a)};a.moveTo=function(a,b){this._activeInstructions.push(new c(this._ctx.moveTo,[a,b]));return this};a.lineTo=function(a,b){this._dirty=this._active=!0;this._activeInstructions.push(new c(this._ctx.lineTo,[a,b]));return this};a.arcTo=function(a,b,d,e,f){this._dirty=this._active=!0;this._activeInstructions.push(new c(this._ctx.arcTo,
[a,b,d,e,f]));return this};a.arc=function(a,b,d,e,f,h){this._dirty=this._active=!0;null==h&&(h=!1);this._activeInstructions.push(new c(this._ctx.arc,[a,b,d,e,f,h]));return this};a.quadraticCurveTo=function(a,b,d,e){this._dirty=this._active=!0;this._activeInstructions.push(new c(this._ctx.quadraticCurveTo,[a,b,d,e]));return this};a.bezierCurveTo=function(a,b,d,e,f,h){this._dirty=this._active=!0;this._activeInstructions.push(new c(this._ctx.bezierCurveTo,[a,b,d,e,f,h]));return this};a.rect=function(a,
b,d,e){this._dirty=this._active=!0;this._activeInstructions.push(new c(this._ctx.rect,[a,b,d,e]));return this};a.closePath=function(){this._active&&(this._dirty=!0,this._activeInstructions.push(new c(this._ctx.closePath,[])));return this};a.clear=function(){this._instructions=[];this._oldInstructions=[];this._activeInstructions=[];this._strokeStyleInstructions=this._strokeInstructions=this._fillInstructions=null;this._active=this._dirty=!1;return this};a.beginFill=function(a){this._active&&this._newPath();
this._fillInstructions=a?[new c(this._setProp,["fillStyle",a],!1),b.fillCmd]:null;return this};a.beginLinearGradientFill=function(a,g,d,e,f,h){this._active&&this._newPath();d=this._ctx.createLinearGradient(d,e,f,h);e=0;for(f=a.length;e<f;e++)d.addColorStop(g[e],a[e]);this._fillInstructions=[new c(this._setProp,["fillStyle",d],!1),b.fillCmd];return this};a.beginRadialGradientFill=function(a,g,d,e,f,h,j,k){this._active&&this._newPath();d=this._ctx.createRadialGradient(d,e,f,h,j,k);e=0;for(f=a.length;e<
f;e++)d.addColorStop(g[e],a[e]);this._fillInstructions=[new c(this._setProp,["fillStyle",d],!1),b.fillCmd];return this};a.beginBitmapFill=function(a,g,d){this._active&&this._newPath();a=this._ctx.createPattern(a,g||"");a=new c(this._setProp,["fillStyle",a],!1);this._fillInstructions=d?[a,new c(this._ctx.save,[],!1),new c(this._ctx.transform,[d.a,d.b,d.c,d.d,d.tx,d.ty],!1),b.fillCmd,new c(this._ctx.restore,[],!1)]:[a,b.fillCmd];return this};a.endFill=function(){return this.beginFill()};a.setStrokeStyle=
function(a,g,d,e,f){this._active&&this._newPath();this._strokeStyleInstructions=[new c(this._setProp,["lineWidth",null==a?"1":a],!1),new c(this._setProp,["lineCap",null==g?"butt":isNaN(g)?g:b.STROKE_CAPS_MAP[g]],!1),new c(this._setProp,["lineJoin",null==d?"miter":isNaN(d)?d:b.STROKE_JOINTS_MAP[d]],!1),new c(this._setProp,["miterLimit",null==e?"10":e],!1)];this._ignoreScaleStroke=f;return this};a.beginStroke=function(a){this._active&&this._newPath();this._strokeInstructions=a?[new c(this._setProp,
["strokeStyle",a],!1)]:null;return this};a.beginLinearGradientStroke=function(a,b,d,e,f,h){this._active&&this._newPath();d=this._ctx.createLinearGradient(d,e,f,h);e=0;for(f=a.length;e<f;e++)d.addColorStop(b[e],a[e]);this._strokeInstructions=[new c(this._setProp,["strokeStyle",d],!1)];return this};a.beginRadialGradientStroke=function(a,b,d,e,f,h,j,k){this._active&&this._newPath();d=this._ctx.createRadialGradient(d,e,f,h,j,k);e=0;for(f=a.length;e<f;e++)d.addColorStop(b[e],a[e]);this._strokeInstructions=
[new c(this._setProp,["strokeStyle",d],!1)];return this};a.beginBitmapStroke=function(a,b){this._active&&this._newPath();var d=this._ctx.createPattern(a,b||"");this._strokeInstructions=[new c(this._setProp,["strokeStyle",d],!1)];return this};a.endStroke=function(){this.beginStroke();return this};a.curveTo=a.quadraticCurveTo;a.drawRect=a.rect;a.drawRoundRect=function(a,b,d,c,f){this.drawRoundRectComplex(a,b,d,c,f,f,f,f);return this};a.drawRoundRectComplex=function(a,b,d,e,f,h,j,k){var l=(d<e?d:e)/
2,n=0,p=0,q=0,s=0;0>f&&(f*=n=-1);f>l&&(f=l);0>h&&(h*=p=-1);h>l&&(h=l);0>j&&(j*=q=-1);j>l&&(j=l);0>k&&(k*=s=-1);k>l&&(k=l);this._dirty=this._active=!0;var l=this._ctx.arcTo,r=this._ctx.lineTo;this._activeInstructions.push(new c(this._ctx.moveTo,[a+d-h,b]),new c(l,[a+d+h*p,b-h*p,a+d,b+h,h]),new c(r,[a+d,b+e-j]),new c(l,[a+d+j*q,b+e+j*q,a+d-j,b+e,j]),new c(r,[a+k,b+e]),new c(l,[a-k*s,b+e+k*s,a,b+e-k,k]),new c(r,[a,b+f]),new c(l,[a-f*n,b-f*n,a+f,b,f]),new c(this._ctx.closePath));return this};a.drawCircle=
function(a,b,d){this.arc(a,b,d,0,2*Math.PI);return this};a.drawEllipse=function(a,b,d,e){this._dirty=this._active=!0;var f=0.5522848*(d/2),h=0.5522848*(e/2),j=a+d,k=b+e;d=a+d/2;e=b+e/2;this._activeInstructions.push(new c(this._ctx.moveTo,[a,e]),new c(this._ctx.bezierCurveTo,[a,e-h,d-f,b,d,b]),new c(this._ctx.bezierCurveTo,[d+f,b,j,e-h,j,e]),new c(this._ctx.bezierCurveTo,[j,e+h,d+f,k,d,k]),new c(this._ctx.bezierCurveTo,[d-f,k,a,e+h,a,e]));return this};a.drawPolyStar=function(a,b,d,e,f,h){this._dirty=
this._active=!0;null==f&&(f=0);f=1-f;h=null==h?0:h/(180/Math.PI);var j=Math.PI/e;this._activeInstructions.push(new c(this._ctx.moveTo,[a+Math.cos(h)*d,b+Math.sin(h)*d]));for(var k=0;k<e;k++)h+=j,1!=f&&this._activeInstructions.push(new c(this._ctx.lineTo,[a+Math.cos(h)*d*f,b+Math.sin(h)*d*f])),h+=j,this._activeInstructions.push(new c(this._ctx.lineTo,[a+Math.cos(h)*d,b+Math.sin(h)*d]));return this};a.decodePath=function(a){for(var g=[this.moveTo,this.lineTo,this.quadraticCurveTo,this.bezierCurveTo,
this.closePath],d=[2,2,4,6,0],c=0,f=a.length,h=[],j=0,k=0,l=b.BASE_64;c<f;){var n=a.charAt(c),p=l[n],q=p>>3,s=g[q];if(!s||p&3)throw"bad path data (@"+c+"): "+n;n=d[q];q||(j=k=0);h.length=0;c++;p=(p>>2&1)+2;for(q=0;q<n;q++){var r=l[a.charAt(c)],u=r>>5?-1:1,r=(r&31)<<6|l[a.charAt(c+1)];3==p&&(r=r<<6|l[a.charAt(c+2)]);r=u*r/10;q%2?j=r+=j:k=r+=k;h[q]=r;c+=p}s.apply(this,h)}return this};a.clone=function(){var a=new b;a._instructions=this._instructions.slice();a._activeInstructions=this._activeInstructions.slice();
a._oldInstructions=this._oldInstructions.slice();this._fillInstructions&&(a._fillInstructions=this._fillInstructions.slice());this._strokeInstructions&&(a._strokeInstructions=this._strokeInstructions.slice());this._strokeStyleInstructions&&(a._strokeStyleInstructions=this._strokeStyleInstructions.slice());a._active=this._active;a._dirty=this._dirty;return a};a.toString=function(){return"[Graphics]"};a.mt=a.moveTo;a.lt=a.lineTo;a.at=a.arcTo;a.bt=a.bezierCurveTo;a.qt=a.quadraticCurveTo;a.a=a.arc;a.r=
a.rect;a.cp=a.closePath;a.c=a.clear;a.f=a.beginFill;a.lf=a.beginLinearGradientFill;a.rf=a.beginRadialGradientFill;a.bf=a.beginBitmapFill;a.ef=a.endFill;a.ss=a.setStrokeStyle;a.s=a.beginStroke;a.ls=a.beginLinearGradientStroke;a.rs=a.beginRadialGradientStroke;a.bs=a.beginBitmapStroke;a.es=a.endStroke;a.dr=a.drawRect;a.rr=a.drawRoundRect;a.rc=a.drawRoundRectComplex;a.dc=a.drawCircle;a.de=a.drawEllipse;a.dp=a.drawPolyStar;a.p=a.decodePath;a._updateInstructions=function(){this._instructions=this._oldInstructions.slice();
this._instructions.push(b.beginCmd);this._instructions.push.apply(this._instructions,this._activeInstructions);this._fillInstructions&&this._instructions.push.apply(this._instructions,this._fillInstructions);this._strokeInstructions&&(this._strokeStyleInstructions&&this._instructions.push.apply(this._instructions,this._strokeStyleInstructions),this._instructions.push.apply(this._instructions,this._strokeInstructions),this._ignoreScaleStroke?this._instructions.push(new c(this._ctx.save,[],!1),new c(this._ctx.setTransform,
[1,0,0,1,0,0],!1),b.strokeCmd,new c(this._ctx.restore,[],!1)):this._instructions.push(b.strokeCmd))};a._newPath=function(){this._dirty&&this._updateInstructions();this._oldInstructions=this._instructions;this._activeInstructions=[];this._active=this._dirty=!1};a._setProp=function(a,b){this[a]=b};createjs.Graphics=b})();this.createjs=this.createjs||{};
(function(){var c=function(){this.initialize()},b=c.prototype;c.suppressCrossDomainErrors=!1;c._hitTestCanvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");c._hitTestCanvas.width=c._hitTestCanvas.height=1;c._hitTestContext=c._hitTestCanvas.getContext("2d");c._nextCacheID=1;b.alpha=1;b.cacheCanvas=null;b.id=-1;b.mouseEnabled=!0;b.name=null;b.parent=null;b.regX=0;b.regY=0;b.rotation=0;b.scaleX=1;b.scaleY=1;b.skewX=0;b.skewY=0;b.shadow=null;b.visible=!0;b.x=0;b.y=0;b.compositeOperation=
null;b.snapToPixel=!1;b.onPress=null;b.onClick=null;b.onDoubleClick=null;b.onMouseOver=null;b.onMouseOut=null;b.onTick=null;b.filters=null;b.cacheID=0;b.mask=null;b.hitArea=null;b.cursor=null;b.addEventListener=null;b.removeEventListener=null;b.removeAllEventListeners=null;b.dispatchEvent=null;b.hasEventListener=null;b._listeners=null;createjs.EventDispatcher.initialize(b);b._cacheOffsetX=0;b._cacheOffsetY=0;b._cacheScale=1;b._cacheDataURLID=0;b._cacheDataURL=null;b._matrix=null;b.initialize=function(){this.id=
createjs.UID.get();this._matrix=new createjs.Matrix2D};b.isVisible=function(){return!(!this.visible||!(0<this.alpha&&0!=this.scaleX&&0!=this.scaleY))};b.draw=function(a,b){var c=this.cacheCanvas;if(b||!c)return!1;var d=this._cacheScale;a.drawImage(c,this._cacheOffsetX,this._cacheOffsetY,c.width/d,c.height/d);return!0};b.updateContext=function(a){var b,c=this.mask;c&&(c.graphics&&!c.graphics.isEmpty())&&(b=c.getMatrix(c._matrix),a.transform(b.a,b.b,b.c,b.d,b.tx,b.ty),c.graphics.drawAsPath(a),a.clip(),
b.invert(),a.transform(b.a,b.b,b.c,b.d,b.tx,b.ty));b=this._matrix.identity().appendTransform(this.x,this.y,this.scaleX,this.scaleY,this.rotation,this.skewX,this.skewY,this.regX,this.regY);createjs.Stage._snapToPixelEnabled&&this.snapToPixel?a.transform(b.a,b.b,b.c,b.d,b.tx+0.5|0,b.ty+0.5|0):a.transform(b.a,b.b,b.c,b.d,b.tx,b.ty);a.globalAlpha*=this.alpha;this.compositeOperation&&(a.globalCompositeOperation=this.compositeOperation);this.shadow&&this._applyShadow(a,this.shadow)};b.cache=function(a,
b,c,d,e){e=e||1;this.cacheCanvas||(this.cacheCanvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"));this.cacheCanvas.width=Math.ceil(c*e);this.cacheCanvas.height=Math.ceil(d*e);this._cacheOffsetX=a;this._cacheOffsetY=b;this._cacheScale=e||1;this.updateCache()};b.updateCache=function(a){var b=this.cacheCanvas,g=this._cacheScale,d=this._cacheOffsetX*g,e=this._cacheOffsetY*g;if(!b)throw"cache() must be called before updateCache()";var f=b.getContext("2d");f.save();a||
f.clearRect(0,0,b.width,b.height);f.globalCompositeOperation=a;f.setTransform(g,0,0,g,-d,-e);this.draw(f,!0);this._applyFilters();f.restore();this.cacheID=c._nextCacheID++};b.uncache=function(){this._cacheDataURL=this.cacheCanvas=null;this.cacheID=this._cacheOffsetX=this._cacheOffsetY=0;this._cacheScale=1};b.getCacheDataURL=function(){if(!this.cacheCanvas)return null;this.cacheID!=this._cacheDataURLID&&(this._cacheDataURL=this.cacheCanvas.toDataURL());return this._cacheDataURL};b.getStage=function(){for(var a=
this;a.parent;)a=a.parent;return a instanceof createjs.Stage?a:null};b.localToGlobal=function(a,b){var c=this.getConcatenatedMatrix(this._matrix);if(null==c)return null;c.append(1,0,0,1,a,b);return new createjs.Point(c.tx,c.ty)};b.globalToLocal=function(a,b){var c=this.getConcatenatedMatrix(this._matrix);if(null==c)return null;c.invert();c.append(1,0,0,1,a,b);return new createjs.Point(c.tx,c.ty)};b.localToLocal=function(a,b,c){a=this.localToGlobal(a,b);return c.globalToLocal(a.x,a.y)};b.setTransform=
function(a,b,c,d,e,f,h,j,k){this.x=a||0;this.y=b||0;this.scaleX=null==c?1:c;this.scaleY=null==d?1:d;this.rotation=e||0;this.skewX=f||0;this.skewY=h||0;this.regX=j||0;this.regY=k||0;return this};b.getMatrix=function(a){return(a?a.identity():new createjs.Matrix2D).appendTransform(this.x,this.y,this.scaleX,this.scaleY,this.rotation,this.skewX,this.skewY,this.regX,this.regY).appendProperties(this.alpha,this.shadow,this.compositeOperation)};b.getConcatenatedMatrix=function(a){a?a.identity():a=new createjs.Matrix2D;
for(var b=this;null!=b;)a.prependTransform(b.x,b.y,b.scaleX,b.scaleY,b.rotation,b.skewX,b.skewY,b.regX,b.regY).prependProperties(b.alpha,b.shadow,b.compositeOperation),b=b.parent;return a};b.hitTest=function(a,b){var g=c._hitTestContext,d=c._hitTestCanvas;g.setTransform(1,0,0,1,-a,-b);this.draw(g);g=this._testHit(g);d.width=0;d.width=1;return g};b.set=function(a){for(var b in a)this[b]=a[b];return this};b.clone=function(){var a=new c;this.cloneProps(a);return a};b.toString=function(){return"[DisplayObject (name="+
this.name+")]"};b.cloneProps=function(a){a.alpha=this.alpha;a.name=this.name;a.regX=this.regX;a.regY=this.regY;a.rotation=this.rotation;a.scaleX=this.scaleX;a.scaleY=this.scaleY;a.shadow=this.shadow;a.skewX=this.skewX;a.skewY=this.skewY;a.visible=this.visible;a.x=this.x;a.y=this.y;a.mouseEnabled=this.mouseEnabled;a.compositeOperation=this.compositeOperation;this.cacheCanvas&&(a.cacheCanvas=this.cacheCanvas.cloneNode(!0),a.cacheCanvas.getContext("2d").putImageData(this.cacheCanvas.getContext("2d").getImageData(0,
0,this.cacheCanvas.width,this.cacheCanvas.height),0,0))};b._applyShadow=function(a,b){b=b||Shadow.identity;a.shadowColor=b.color;a.shadowOffsetX=b.offsetX;a.shadowOffsetY=b.offsetY;a.shadowBlur=b.blur};b._tick=function(a){this.onTick&&this.onTick.apply(this,a);var b=this._listeners;b&&b.tick&&this.dispatchEvent({type:"tick",params:a})};b._testHit=function(a){try{var b=1<a.getImageData(0,0,1,1).data[3]}catch(g){if(!c.suppressCrossDomainErrors)throw"An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images.";
}return b};b._applyFilters=function(){if(this.filters&&0!=this.filters.length&&this.cacheCanvas)for(var a=this.filters.length,b=this.cacheCanvas.getContext("2d"),c=this.cacheCanvas.width,d=this.cacheCanvas.height,e=0;e<a;e++)this.filters[e].applyFilter(b,0,0,c,d)};b._hasMouseHandler=function(a){var b=this._listeners;return!!(a&1&&(this.onPress||this.onClick||this.onDoubleClick||b&&(this.hasEventListener("mousedown")||this.hasEventListener("click")||this.hasEventListener("dblclick")))||a&2&&(this.onMouseOver||
this.onMouseOut||this.cursor||b&&(this.hasEventListener("mouseover")||this.hasEventListener("mouseout"))))};createjs.DisplayObject=c})();this.createjs=this.createjs||{};
(function(){var c=function(){this.initialize()},b=c.prototype=new createjs.DisplayObject;b.children=null;b.DisplayObject_initialize=b.initialize;b.initialize=function(){this.DisplayObject_initialize();this.children=[]};b.isVisible=function(){var a=this.cacheCanvas||this.children.length;return!(!this.visible||!(0<this.alpha&&0!=this.scaleX&&0!=this.scaleY&&a))};b.DisplayObject_draw=b.draw;b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;for(var c=this.children.slice(0),d=0,e=c.length;d<
e;d++){var f=c[d];f.isVisible()&&(a.save(),f.updateContext(a),f.draw(a),a.restore())}return!0};b.addChild=function(a){if(null==a)return a;var b=arguments.length;if(1<b){for(var c=0;c<b;c++)this.addChild(arguments[c]);return arguments[b-1]}a.parent&&a.parent.removeChild(a);a.parent=this;this.children.push(a);return a};b.addChildAt=function(a,b){var c=arguments.length,d=arguments[c-1];if(0>d||d>this.children.length)return arguments[c-2];if(2<c){for(var e=0;e<c-1;e++)this.addChildAt(arguments[e],d+e);
return arguments[c-2]}a.parent&&a.parent.removeChild(a);a.parent=this;this.children.splice(b,0,a);return a};b.removeChild=function(a){var b=arguments.length;if(1<b){for(var c=!0,d=0;d<b;d++)c=c&&this.removeChild(arguments[d]);return c}return this.removeChildAt(this.children.indexOf(a))};b.removeChildAt=function(a){var b=arguments.length;if(1<b){for(var c=[],d=0;d<b;d++)c[d]=arguments[d];c.sort(function(a,b){return b-a});for(var e=!0,d=0;d<b;d++)e=e&&this.removeChildAt(c[d]);return e}if(0>a||a>this.children.length-
1)return!1;if(b=this.children[a])b.parent=null;this.children.splice(a,1);return!0};b.removeAllChildren=function(){for(var a=this.children;a.length;)a.pop().parent=null};b.getChildAt=function(a){return this.children[a]};b.getChildByName=function(a){for(var b=this.children,c=0,d=b.length;c<d;c++)if(b[c].name==a)return b[c];return null};b.sortChildren=function(a){this.children.sort(a)};b.getChildIndex=function(a){return this.children.indexOf(a)};b.getNumChildren=function(){return this.children.length};
b.swapChildrenAt=function(a,b){var c=this.children,d=c[a],e=c[b];d&&e&&(c[a]=e,c[b]=d)};b.swapChildren=function(a,b){for(var c=this.children,d,e,f=0,h=c.length;f<h&&!(c[f]==a&&(d=f),c[f]==b&&(e=f),null!=d&&null!=e);f++);f!=h&&(c[d]=b,c[e]=a)};b.setChildIndex=function(a,b){var c=this.children,d=c.length;if(!(a.parent!=this||0>b||b>=d)){for(var e=0;e<d&&c[e]!=a;e++);e==d||e==b||(c.splice(e,1),b<e&&b--,c.splice(b,0,a))}};b.contains=function(a){for(;a;){if(a==this)return!0;a=a.parent}return!1};b.hitTest=
function(a,b){return null!=this.getObjectUnderPoint(a,b)};b.getObjectsUnderPoint=function(a,b){var c=[],d=this.localToGlobal(a,b);this._getObjectsUnderPoint(d.x,d.y,c);return c};b.getObjectUnderPoint=function(a,b){var c=this.localToGlobal(a,b);return this._getObjectsUnderPoint(c.x,c.y)};b.clone=function(a){var b=new c;this.cloneProps(b);if(a)for(var g=b.children=[],d=0,e=this.children.length;d<e;d++){var f=this.children[d].clone(a);f.parent=b;g.push(f)}return b};b.toString=function(){return"[Container (name="+
this.name+")]"};b.DisplayObject__tick=b._tick;b._tick=function(a){for(var b=this.children.length-1;0<=b;b--){var c=this.children[b];c._tick&&c._tick(a)}this.DisplayObject__tick(a)};b._getObjectsUnderPoint=function(a,b,g,d){var e=createjs.DisplayObject._hitTestContext,f=createjs.DisplayObject._hitTestCanvas,h=this._matrix,j=this._hasMouseHandler(d);if(!this.hitArea&&(this.cacheCanvas&&j)&&(this.getConcatenatedMatrix(h),e.setTransform(h.a,h.b,h.c,h.d,h.tx-a,h.ty-b),e.globalAlpha=h.alpha,this.draw(e),
this._testHit(e)))return f.width=0,f.width=1,this;for(var k=this.children.length-1;0<=k;k--){var l=this.children[k],n=l.hitArea;if(l.visible&&!(!n&&!l.isVisible()||d&&!l.mouseEnabled)){var p=d&&l._hasMouseHandler(d);if(l instanceof c&&(!n||!p))if(j){if(l=l._getObjectsUnderPoint(a,b))return this}else{if(l=l._getObjectsUnderPoint(a,b,g,d),!g&&l)return l}else if(!d||j||p)if(l.getConcatenatedMatrix(h),n&&(h.appendTransform(n.x,n.y,n.scaleX,n.scaleY,n.rotation,n.skewX,n.skewY,n.regX,n.regY),h.alpha=n.alpha),
e.globalAlpha=h.alpha,e.setTransform(h.a,h.b,h.c,h.d,h.tx-a,h.ty-b),(n||l).draw(e),this._testHit(e)){f.width=0;f.width=1;if(j)return this;if(g)g.push(l);else return l}}}return null};createjs.Container=c})();this.createjs=this.createjs||{};
(function(){var c=function(a){this.initialize(a)},b=c.prototype=new createjs.Container;c._snapToPixelEnabled=!1;b.autoClear=!0;b.canvas=null;b.mouseX=0;b.mouseY=0;b.onMouseMove=null;b.onMouseUp=null;b.onMouseDown=null;b.snapToPixelEnabled=!1;b.mouseInBounds=!1;b.tickOnUpdate=!0;b.mouseMoveOutside=!1;b._pointerData=null;b._pointerCount=0;b._primaryPointerID=null;b._mouseOverIntervalID=null;b.Container_initialize=b.initialize;b.initialize=function(a){this.Container_initialize();this.canvas="string"==
typeof a?document.getElementById(a):a;this._pointerData={};this.enableDOMEvents(!0)};b.update=function(){if(this.canvas){this.autoClear&&this.clear();c._snapToPixelEnabled=this.snapToPixelEnabled;this.tickOnUpdate&&this._tick(arguments.length?arguments:null);var a=this.canvas.getContext("2d");a.save();this.updateContext(a);this.draw(a,!1);a.restore()}};b.tick=b.update;b.handleEvent=function(a){"tick"==a.type&&this.update(a)};b.clear=function(){if(this.canvas){var a=this.canvas.getContext("2d");a.setTransform(1,
0,0,1,0,0);a.clearRect(0,0,this.canvas.width,this.canvas.height)}};b.toDataURL=function(a,b){b||(b="image/png");var c=this.canvas.getContext("2d"),d=this.canvas.width,e=this.canvas.height,f;if(a){f=c.getImageData(0,0,d,e);var h=c.globalCompositeOperation;c.globalCompositeOperation="destination-over";c.fillStyle=a;c.fillRect(0,0,d,e)}var j=this.canvas.toDataURL(b);a&&(c.clearRect(0,0,d,e),c.putImageData(f,0,0),c.globalCompositeOperation=h);return j};b.enableMouseOver=function(a){this._mouseOverIntervalID&&
(clearInterval(this._mouseOverIntervalID),this._mouseOverIntervalID=null);if(null==a)a=20;else if(0>=a)return;var b=this;this._mouseOverIntervalID=setInterval(function(){b._testMouseOver()},1E3/Math.min(50,a))};b.enableDOMEvents=function(a){null==a&&(a=!0);var b,c=this._eventListeners;if(!a&&c){for(b in c)a=c[b],a.t.removeEventListener(b,a.f);this._eventListeners=null}else if(a&&!c){a=window.addEventListener?window:document;var d=this,c=this._eventListeners={};c.mouseup={t:a,f:function(a){d._handleMouseUp(a)}};
c.mousemove={t:a,f:function(a){d._handleMouseMove(a)}};c.dblclick={t:a,f:function(a){d._handleDoubleClick(a)}};(a=this.canvas)&&(c.mousedown={t:a,f:function(a){d._handleMouseDown(a)}});for(b in c)a=c[b],a.t.addEventListener(b,a.f)}};b.clone=function(){var a=new c(null);this.cloneProps(a);return a};b.toString=function(){return"[Stage (name="+this.name+")]"};b._getPointerData=function(a){var b=this._pointerData[a];b||(b=this._pointerData[a]={x:0,y:0},null==this._primaryPointerID&&(this._primaryPointerID=
a));return b};b._handleMouseMove=function(a){a||(a=window.event);this._handlePointerMove(-1,a,a.pageX,a.pageY)};b._handlePointerMove=function(a,b,c,d){if(this.canvas){var e=this._getPointerData(a),f=e.inBounds;this._updatePointerPosition(a,c,d);if(f||e.inBounds||this.mouseMoveOutside){if(this.onMouseMove||this.hasEventListener("stagemousemove"))c=new createjs.MouseEvent("stagemousemove",e.x,e.y,this,b,a,a==this._primaryPointerID,e.rawX,e.rawY),this.onMouseMove&&this.onMouseMove(c),this.dispatchEvent(c);
if((d=e.event)&&(d.onMouseMove||d.hasEventListener("mousemove")))c=new createjs.MouseEvent("mousemove",e.x,e.y,d.target,b,a,a==this._primaryPointerID,e.rawX,e.rawY),d.onMouseMove&&d.onMouseMove(c),d.dispatchEvent(c,d.target)}}};b._updatePointerPosition=function(a,b,c){var d=this._getElementRect(this.canvas);b-=d.left;c-=d.top;var e=this.canvas.width,f=this.canvas.height;b/=(d.right-d.left)/e;c/=(d.bottom-d.top)/f;d=this._getPointerData(a);(d.inBounds=0<=b&&0<=c&&b<=e-1&&c<=f-1)?(d.x=b,d.y=c):this.mouseMoveOutside&&
(d.x=0>b?0:b>e-1?e-1:b,d.y=0>c?0:c>f-1?f-1:c);d.rawX=b;d.rawY=c;a==this._primaryPointerID&&(this.mouseX=d.x,this.mouseY=d.y,this.mouseInBounds=d.inBounds)};b._getElementRect=function(a){var b;try{b=a.getBoundingClientRect()}catch(c){b={top:a.offsetTop,left:a.offsetLeft,width:a.offsetWidth,height:a.offsetHeight}}var d=(window.pageXOffset||document.scrollLeft||0)-(document.clientLeft||document.body.clientLeft||0),e=(window.pageYOffset||document.scrollTop||0)-(document.clientTop||document.body.clientTop||
0),f=window.getComputedStyle?getComputedStyle(a):a.currentStyle;a=parseInt(f.paddingLeft)+parseInt(f.borderLeftWidth);var h=parseInt(f.paddingTop)+parseInt(f.borderTopWidth),j=parseInt(f.paddingRight)+parseInt(f.borderRightWidth),f=parseInt(f.paddingBottom)+parseInt(f.borderBottomWidth);return{left:b.left+d+a,right:b.right+d-j,top:b.top+e+h,bottom:b.bottom+e-f}};b._handleMouseUp=function(a){this._handlePointerUp(-1,a,!1)};b._handlePointerUp=function(a,b,c){var d=this._getPointerData(a),e;if(this.onMouseMove||
this.hasEventListener("stagemouseup"))e=new createjs.MouseEvent("stagemouseup",d.x,d.y,this,b,a,a==this._primaryPointerID,d.rawX,d.rawY),this.onMouseUp&&this.onMouseUp(e),this.dispatchEvent(e);var f=d.event;if(f&&(f.onMouseUp||f.hasEventListener("mouseup")))e=new createjs.MouseEvent("mouseup",d.x,d.y,f.target,b,a,a==this._primaryPointerID,d.rawX,d.rawY),f.onMouseUp&&f.onMouseUp(e),f.dispatchEvent(e,f.target);if((f=d.target)&&(f.onClick||f.hasEventListener("click"))&&this._getObjectsUnderPoint(d.x,
d.y,null,!0,this._mouseOverIntervalID?3:1)==f)e=new createjs.MouseEvent("click",d.x,d.y,f,b,a,a==this._primaryPointerID,d.rawX,d.rawY),f.onClick&&f.onClick(e),f.dispatchEvent(e);c?(a==this._primaryPointerID&&(this._primaryPointerID=null),delete this._pointerData[a]):d.event=d.target=null};b._handleMouseDown=function(a){this._handlePointerDown(-1,a,!1)};b._handlePointerDown=function(a,b,c,d){var e=this._getPointerData(a);null!=d&&this._updatePointerPosition(a,c,d);if(this.onMouseDown||this.hasEventListener("stagemousedown"))c=
new createjs.MouseEvent("stagemousedown",e.x,e.y,this,b,a,a==this._primaryPointerID,e.rawX,e.rawY),this.onMouseDown&&this.onMouseDown(c),this.dispatchEvent(c);if(d=this._getObjectsUnderPoint(e.x,e.y,null,this._mouseOverIntervalID?3:1))if(e.target=d,d.onPress||d.hasEventListener("mousedown"))if(c=new createjs.MouseEvent("mousedown",e.x,e.y,d,b,a,a==this._primaryPointerID,e.rawX,e.rawY),d.onPress&&d.onPress(c),d.dispatchEvent(c),c.onMouseMove||c.onMouseUp||c.hasEventListener("mousemove")||c.hasEventListener("mouseup"))e.event=
c};b._testMouseOver=function(){if(-1==this._primaryPointerID&&!(this.mouseX==this._mouseOverX&&this.mouseY==this._mouseOverY&&this.mouseInBounds)){var a=null;this.mouseInBounds&&(a=this._getObjectsUnderPoint(this.mouseX,this.mouseY,null,3),this._mouseOverX=this.mouseX,this._mouseOverY=this.mouseY);var b=this._mouseOverTarget;if(b!=a){var c=this._getPointerData(-1);if(b&&(b.onMouseOut||b.hasEventListener("mouseout"))){var d=new createjs.MouseEvent("mouseout",c.x,c.y,b,null,-1,c.rawX,c.rawY);b.onMouseOut&&
b.onMouseOut(d);b.dispatchEvent(d)}b&&(this.canvas.style.cursor="");if(a&&(a.onMouseOver||a.hasEventListener("mouseover")))d=new createjs.MouseEvent("mouseover",c.x,c.y,a,null,-1,c.rawX,c.rawY),a.onMouseOver&&a.onMouseOver(d),a.dispatchEvent(d);a&&(this.canvas.style.cursor=a.cursor||"");this._mouseOverTarget=a}}};b._handleDoubleClick=function(a){var b=this._getPointerData(-1),c=this._getObjectsUnderPoint(b.x,b.y,null,this._mouseOverIntervalID?3:1);if(c&&(c.onDoubleClick||c.hasEventListener("dblclick")))evt=
new createjs.MouseEvent("dblclick",b.x,b.y,c,a,-1,!0,b.rawX,b.rawY),c.onDoubleClick&&c.onDoubleClick(evt),c.dispatchEvent(evt)};createjs.Stage=c})();this.createjs=this.createjs||{};
(function(){var c=function(a){this.initialize(a)},b=c.prototype=new createjs.DisplayObject;b.image=null;b.snapToPixel=!0;b.sourceRect=null;b.DisplayObject_initialize=b.initialize;b.initialize=function(a){this.DisplayObject_initialize();"string"==typeof a?(this.image=new Image,this.image.src=a):this.image=a};b.isVisible=function(){var a=this.cacheCanvas||this.image&&(this.image.complete||this.image.getContext||2<=this.image.readyState);return!(!this.visible||!(0<this.alpha&&0!=this.scaleX&&0!=this.scaleY&&
a))};b.DisplayObject_draw=b.draw;b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;var c=this.sourceRect;c?a.drawImage(this.image,c.x,c.y,c.width,c.height,0,0,c.width,c.height):a.drawImage(this.image,0,0);return!0};b.clone=function(){var a=new c(this.image);this.sourceRect&&(a.sourceRect=this.sourceRect.clone());this.cloneProps(a);return a};b.toString=function(){return"[Bitmap (name="+this.name+")]"};createjs.Bitmap=c})();this.createjs=this.createjs||{};
(function(){var c=function(a){this.initialize(a)},b=c.prototype=new createjs.DisplayObject;b.onAnimationEnd=null;b.currentFrame=-1;b.currentAnimation=null;b.paused=!0;b.spriteSheet=null;b.snapToPixel=!0;b.offset=0;b.currentAnimationFrame=0;b.addEventListener=null;b.removeEventListener=null;b.removeAllEventListeners=null;b.dispatchEvent=null;b.hasEventListener=null;b._listeners=null;createjs.EventDispatcher.initialize(b);b._advanceCount=0;b._animation=null;b.DisplayObject_initialize=b.initialize;b.initialize=
function(a){this.DisplayObject_initialize();this.spriteSheet=a};b.isVisible=function(){var a=this.cacheCanvas||this.spriteSheet.complete&&0<=this.currentFrame;return!(!this.visible||!(0<this.alpha&&0!=this.scaleX&&0!=this.scaleY&&a))};b.DisplayObject_draw=b.draw;b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;this._normalizeFrame();var c=this.spriteSheet.getFrame(this.currentFrame);if(c){var d=c.rect;a.drawImage(c.image,d.x,d.y,d.width,d.height,-c.regX,-c.regY,d.width,d.height);return!0}};
b.play=function(){this.paused=!1};b.stop=function(){this.paused=!0};b.gotoAndPlay=function(a){this.paused=!1;this._goto(a)};b.gotoAndStop=function(a){this.paused=!0;this._goto(a)};b.advance=function(){this._animation?this.currentAnimationFrame++:this.currentFrame++;this._normalizeFrame()};b.getBounds=function(){return this.spriteSheet.getFrameBounds(this.currentFrame)};b.clone=function(){var a=new c(this.spriteSheet);this.cloneProps(a);return a};b.toString=function(){return"[BitmapAnimation (name="+
this.name+")]"};b.DisplayObject__tick=b._tick;b._tick=function(a){var b=this._animation?this._animation.frequency:1;!this.paused&&0==(++this._advanceCount+this.offset)%b&&this.advance();this.DisplayObject__tick(a)};b._normalizeFrame=function(){var a=this._animation,b=this.currentFrame,c=this.paused,d;if(a)if(d=a.frames.length,this.currentAnimationFrame>=d){var e=a.next;this._dispatchAnimationEnd(a,b,c,e,d-1)||(e?this._goto(e):(this.paused=!0,this.currentAnimationFrame=a.frames.length-1,this.currentFrame=
a.frames[this.currentAnimationFrame]))}else this.currentFrame=a.frames[this.currentAnimationFrame];else d=this.spriteSheet.getNumFrames(),b>=d&&!this._dispatchAnimationEnd(a,b,c,d-1)&&(this.currentFrame=0)};b._dispatchAnimationEnd=function(a,b,c,d,e){var f=a?a.name:null;this.onAnimationEnd&&this.onAnimationEnd(this,f,d);this.dispatchEvent({type:"animationend",name:f,next:d});!c&&this.paused&&(this.currentAnimationFrame=e);return this.paused!=c||this._animation!=a||this.currentFrame!=b};b.DisplayObject_cloneProps=
b.cloneProps;b.cloneProps=function(a){this.DisplayObject_cloneProps(a);a.onAnimationEnd=this.onAnimationEnd;a.currentFrame=this.currentFrame;a.currentAnimation=this.currentAnimation;a.paused=this.paused;a.offset=this.offset;a._animation=this._animation;a.currentAnimationFrame=this.currentAnimationFrame};b._goto=function(a){if(isNaN(a)){var b=this.spriteSheet.getAnimation(a);b&&(this.currentAnimationFrame=0,this._animation=b,this.currentAnimation=a,this._normalizeFrame())}else this.currentAnimation=
this._animation=null,this.currentFrame=a};createjs.BitmapAnimation=c})();this.createjs=this.createjs||{};
(function(){var c=function(a){this.initialize(a)},b=c.prototype=new createjs.DisplayObject;b.graphics=null;b.DisplayObject_initialize=b.initialize;b.initialize=function(a){this.DisplayObject_initialize();this.graphics=a?a:new createjs.Graphics};b.isVisible=function(){var a=this.cacheCanvas||this.graphics&&!this.graphics.isEmpty();return!(!this.visible||!(0<this.alpha&&0!=this.scaleX&&0!=this.scaleY&&a))};b.DisplayObject_draw=b.draw;b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;this.graphics.draw(a);
return!0};b.clone=function(a){a=new c(a&&this.graphics?this.graphics.clone():this.graphics);this.cloneProps(a);return a};b.toString=function(){return"[Shape (name="+this.name+")]"};createjs.Shape=c})();this.createjs=this.createjs||{};
(function(){var c=function(a,b,c){this.initialize(a,b,c)},b=c.prototype=new createjs.DisplayObject;c._workingContext=(createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")).getContext("2d");b.text="";b.font=null;b.color="#000";b.textAlign="left";b.textBaseline="top";b.maxWidth=null;b.outline=!1;b.lineHeight=0;b.lineWidth=null;b.DisplayObject_initialize=b.initialize;b.initialize=function(a,b,c){this.DisplayObject_initialize();this.text=a;this.font=b;this.color=c?c:"#000"};
b.isVisible=function(){var a=this.cacheCanvas||null!=this.text&&""!==this.text;return!(!this.visible||!(0<this.alpha&&0!=this.scaleX&&0!=this.scaleY&&a))};b.DisplayObject_draw=b.draw;b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;this.outline?a.strokeStyle=this.color:a.fillStyle=this.color;a.font=this.font;a.textAlign=this.textAlign||"start";a.textBaseline=this.textBaseline||"alphabetic";this._drawText(a);return!0};b.getMeasuredWidth=function(){return this._getWorkingContext().measureText(this.text).width};
b.getMeasuredLineHeight=function(){return 1.2*this._getWorkingContext().measureText("M").width};b.getMeasuredHeight=function(){return this._drawText()*(this.lineHeight||this.getMeasuredLineHeight())};b.clone=function(){var a=new c(this.text,this.font,this.color);this.cloneProps(a);return a};b.toString=function(){return"[Text (text="+(20<this.text.length?this.text.substr(0,17)+"...":this.text)+")]"};b.DisplayObject_cloneProps=b.cloneProps;b.cloneProps=function(a){this.DisplayObject_cloneProps(a);a.textAlign=
this.textAlign;a.textBaseline=this.textBaseline;a.maxWidth=this.maxWidth;a.outline=this.outline;a.lineHeight=this.lineHeight;a.lineWidth=this.lineWidth};b._getWorkingContext=function(){var a=c._workingContext;a.font=this.font;a.textAlign=this.textAlign||"start";a.textBaseline=this.textBaseline||"alphabetic";return a};b._drawText=function(a){var b=!!a;b||(a=this._getWorkingContext());for(var c=String(this.text).split(/(?:\r\n|\r|\n)/),d=this.lineHeight||this.getMeasuredLineHeight(),e=0,f=0,h=c.length;f<
h;f++){var j=a.measureText(c[f]).width;if(null==this.lineWidth||j<this.lineWidth)b&&this._drawTextLine(a,c[f],e*d);else{for(var j=c[f].split(/(\s)/),k=j[0],l=1,n=j.length;l<n;l+=2)a.measureText(k+j[l]+j[l+1]).width>this.lineWidth?(b&&this._drawTextLine(a,k,e*d),e++,k=j[l+1]):k+=j[l]+j[l+1];b&&this._drawTextLine(a,k,e*d)}e++}return e};b._drawTextLine=function(a,b,c){this.outline?a.strokeText(b,0,c,this.maxWidth||65535):a.fillText(b,0,c,this.maxWidth||65535)};createjs.Text=c})();this.createjs=this.createjs||{};
(function(){var c=function(){throw"SpriteSheetUtils cannot be instantiated";};c._workingCanvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");c._workingContext=c._workingCanvas.getContext("2d");c.addFlippedFrames=function(b,a,m,g){if(a||m||g){var d=0;a&&c._flip(b,++d,!0,!1);m&&c._flip(b,++d,!1,!0);g&&c._flip(b,++d,!0,!0)}};c.extractFrame=function(b,a){isNaN(a)&&(a=b.getAnimation(a).frames[0]);var m=b.getFrame(a);if(!m)return null;var g=m.rect,d=c._workingCanvas;d.width=
g.width;d.height=g.height;c._workingContext.drawImage(m.image,g.x,g.y,g.width,g.height,0,0,g.width,g.height);m=new Image;m.src=d.toDataURL("image/png");return m};c.mergeAlpha=function(b,a,c){c||(c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"));c.width=Math.max(a.width,b.width);c.height=Math.max(a.height,b.height);var g=c.getContext("2d");g.save();g.drawImage(b,0,0);g.globalCompositeOperation="destination-in";g.drawImage(a,0,0);g.restore();return c};c._flip=function(b,
a,m,g){for(var d=b._images,e=c._workingCanvas,f=c._workingContext,h=d.length/a,j=0;j<h;j++){var k=d[j];k.__tmp=j;e.width=0;e.width=k.width;e.height=k.height;f.setTransform(m?-1:1,0,0,g?-1:1,m?k.width:0,g?k.height:0);f.drawImage(k,0,0);var l=new Image;l.src=e.toDataURL("image/png");l.width=k.width;l.height=k.height;d.push(l)}f=b._frames;e=f.length/a;for(j=0;j<e;j++){var k=f[j],n=k.rect.clone(),l=d[k.image.__tmp+h*a],p={image:l,rect:n,regX:k.regX,regY:k.regY};m&&(n.x=l.width-n.x-n.width,p.regX=n.width-
k.regX);g&&(n.y=l.height-n.y-n.height,p.regY=n.height-k.regY);f.push(p)}m="_"+(m?"h":"")+(g?"v":"");g=b._animations;b=b._data;d=g.length/a;for(j=0;j<d;j++){f=g[j];k=b[f];h={name:f+m,frequency:k.frequency,next:k.next,frames:[]};k.next&&(h.next+=m);f=k.frames;k=0;for(l=f.length;k<l;k++)h.frames.push(f[k]+e*a);b[h.name]=h;g.push(h.name)}};createjs.SpriteSheetUtils=c})();this.createjs=this.createjs||{};
(function(){var c=function(){this.initialize()},b=c.prototype;c.ERR_DIMENSIONS="frame dimensions exceed max spritesheet dimensions";c.ERR_RUNNING="a build is already running";b.maxWidth=2048;b.maxHeight=2048;b.spriteSheet=null;b.scale=1;b.padding=1;b.timeSlice=0.3;b.progress=-1;b.onComplete=null;b.onProgress=null;b.addEventListener=null;b.removeEventListener=null;b.removeAllEventListeners=null;b.dispatchEvent=null;b.hasEventListener=null;b._listeners=null;createjs.EventDispatcher.initialize(b);b._frames=
null;b._animations=null;b._data=null;b._nextFrameIndex=0;b._index=0;b._timerID=null;b._scale=1;b.initialize=function(){this._frames=[];this._animations={}};b.addFrame=function(a,b,g,d,e,f){if(this._data)throw c.ERR_RUNNING;b=b||a.bounds||a.nominalBounds;!b&&a.getBounds&&(b=a.getBounds());if(!b)return null;g=g||1;return this._frames.push({source:a,sourceRect:b,scale:g,funct:d,params:e,scope:f,index:this._frames.length,height:b.height*g})-1};b.addAnimation=function(a,b,g,d){if(this._data)throw c.ERR_RUNNING;
this._animations[a]={frames:b,next:g,frequency:d}};b.addMovieClip=function(a,b,g){if(this._data)throw c.ERR_RUNNING;var d=a.frameBounds,e=b||a.bounds||a.nominalBounds;!e&&a.getBounds&&(e=a.getBounds());if(!e&&!d)return null;b=this._frames.length;for(var f=a.timeline.duration,h=0;h<f;h++)this.addFrame(a,d&&d[h]?d[h]:e,g,function(a){var b=this.actionsEnabled;this.actionsEnabled=!1;this.gotoAndStop(a);this.actionsEnabled=b},[h],a);h=a.timeline._labels;a=[];for(var j in h)a.push({index:h[j],label:j});
if(a.length){a.sort(function(a,b){return a.index-b.index});h=0;for(j=a.length;h<j;h++){g=a[h].label;for(var d=b+(h==j-1?f:a[h+1].index),e=[],k=b+a[h].index;k<d;k++)e.push(k);this.addAnimation(g,e,!0)}}};b.build=function(){if(this._data)throw c.ERR_RUNNING;for(this._startBuild();this._drawNext(););this._endBuild();return this.spriteSheet};b.buildAsync=function(a){if(this._data)throw c.ERR_RUNNING;this.timeSlice=a;this._startBuild();var b=this;this._timerID=setTimeout(function(){b._run()},50-50*Math.max(0.01,
Math.min(0.99,this.timeSlice||0.3)))};b.stopAsync=function(){clearTimeout(this._timerID);this._data=null};b.clone=function(){throw"SpriteSheetBuilder cannot be cloned.";};b.toString=function(){return"[SpriteSheetBuilder]"};b._startBuild=function(){var a=this.padding||0;this.progress=0;this.spriteSheet=null;this._index=0;this._scale=this.scale;var b=[];this._data={images:[],frames:b,animations:this._animations};var g=this._frames.slice();g.sort(function(a,b){return a.height<=b.height?-1:1});if(g[g.length-
1].height+2*a>this.maxHeight)throw c.ERR_DIMENSIONS;for(var d=0,e=0,f=0;g.length;){var h=this._fillRow(g,d,f,b,a);h.w>e&&(e=h.w);d+=h.h;if(!h.h||!g.length){var j=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");j.width=this._getSize(e,this.maxWidth);j.height=this._getSize(d,this.maxHeight);this._data.images[f]=j;h.h||(e=d=0,f++)}}};b._getSize=function(a,b){for(var c=4;Math.pow(2,++c)<a;);return Math.min(b,Math.pow(2,c))};b._fillRow=function(a,b,g,d,e){var f=this.maxWidth,
h=this.maxHeight;b+=e;for(var h=h-b,j=e,k=0,l=a.length-1;0<=l;l--){var n=a[l],p=this._scale*n.scale,q=n.sourceRect,s=n.source,r=Math.floor(p*q.x-e),u=Math.floor(p*q.y-e),t=Math.ceil(p*q.height+2*e),q=Math.ceil(p*q.width+2*e);if(q>f)throw c.ERR_DIMENSIONS;t>h||j+q>f||(n.img=g,n.rect=new createjs.Rectangle(j,b,q,t),k=k||t,a.splice(l,1),d[n.index]=[j,b,q,t,g,Math.round(-r+p*s.regX-e),Math.round(-u+p*s.regY-e)],j+=q)}return{w:j,h:k}};b._endBuild=function(){this.spriteSheet=new createjs.SpriteSheet(this._data);
this._data=null;this.progress=1;this.onComplete&&this.onComplete(this);this.dispatchEvent("complete")};b._run=function(){for(var a=50*Math.max(0.01,Math.min(0.99,this.timeSlice||0.3)),b=(new Date).getTime()+a,c=!1;b>(new Date).getTime();)if(!this._drawNext()){c=!0;break}if(c)this._endBuild();else{var d=this;this._timerID=setTimeout(function(){d._run()},50-a)}a=this.progress=this._index/this._frames.length;this.onProgress&&this.onProgress(this,a);this.dispatchEvent({type:"progress",progress:a})};b._drawNext=
function(){var a=this._frames[this._index],b=a.scale*this._scale,c=a.rect,d=a.sourceRect,e=this._data.images[a.img].getContext("2d");a.funct&&a.funct.apply(a.scope,a.params);e.save();e.beginPath();e.rect(c.x,c.y,c.width,c.height);e.clip();e.translate(Math.ceil(c.x-d.x*b),Math.ceil(c.y-d.y*b));e.scale(b,b);a.source.draw(e);e.restore();return++this._index<this._frames.length};createjs.SpriteSheetBuilder=c})();this.createjs=this.createjs||{};
(function(){var c=function(a){this.initialize(a)},b=c.prototype=new createjs.DisplayObject;b.htmlElement=null;b._oldMtx=null;b.DisplayObject_initialize=b.initialize;b.initialize=function(a){"string"==typeof a&&(a=document.getElementById(a));this.DisplayObject_initialize();this.mouseEnabled=!1;this.htmlElement=a;a=a.style;a.position="absolute";a.transformOrigin=a.WebkitTransformOrigin=a.msTransformOrigin=a.MozTransformOrigin=a.OTransformOrigin="0% 0%"};b.isVisible=function(){return null!=this.htmlElement};
b.draw=function(){if(null!=this.htmlElement){var a=this.getConcatenatedMatrix(this._matrix),b=this.htmlElement.style;if(this.visible)b.visibility="visible";else return!0;var c=this._oldMtx||{};c.alpha!=a.alpha&&(b.opacity=""+a.alpha,c.alpha=a.alpha);if(c.tx!=a.tx||c.ty!=a.ty||c.a!=a.a||c.b!=a.b||c.c!=a.c||c.d!=a.d)b.transform=b.WebkitTransform=b.OTransform=b.msTransform=["matrix("+a.a,a.b,a.c,a.d,a.tx+0.5|0,(a.ty+0.5|0)+")"].join(),b.MozTransform=["matrix("+a.a,a.b,a.c,a.d,(a.tx+0.5|0)+"px",(a.ty+
0.5|0)+"px)"].join(),this._oldMtx=a.clone();return!0}};b.cache=function(){};b.uncache=function(){};b.updateCache=function(){};b.hitTest=function(){};b.localToGlobal=function(){};b.globalToLocal=function(){};b.localToLocal=function(){};b.clone=function(){throw"DOMElement cannot be cloned.";};b.toString=function(){return"[DOMElement (name="+this.name+")]"};b.DisplayObject__tick=b._tick;b._tick=function(a){this.htmlElement.style.visibility="hidden";this.DisplayObject__tick(a)};createjs.DOMElement=c})();this.createjs=this.createjs||{};(function(){var c=function(){this.initialize()},b=c.prototype;b.initialize=function(){};b.getBounds=function(){return new createjs.Rectangle(0,0,0,0)};b.applyFilter=function(){};b.toString=function(){return"[Filter]"};b.clone=function(){return new c};createjs.Filter=c})();this.createjs=this.createjs||{};
(function(){var c=function(){throw"Touch cannot be instantiated";};c.isSupported=function(){return"ontouchstart"in window||window.navigator.msPointerEnabled};c.enable=function(b,a,m){if(!b||!b.canvas||!c.isSupported())return!1;b.__touch={pointers:{},multitouch:!a,preventDefault:!m,count:0};"ontouchstart"in window?c._IOS_enable(b):window.navigator.msPointerEnabled&&c._IE_enable(b);return!0};c.disable=function(b){b&&("ontouchstart"in window?c._IOS_disable(b):window.navigator.msPointerEnabled&&c._IE_disable(b))};
c._IOS_enable=function(b){var a=b.canvas,m=b.__touch.f=function(a){c._IOS_handleEvent(b,a)};a.addEventListener("touchstart",m,!1);a.addEventListener("touchmove",m,!1);a.addEventListener("touchend",m,!1);a.addEventListener("touchcancel",m,!1)};c._IOS_disable=function(b){var a=b.canvas;a&&(b=b.__touch.f,a.removeEventListener("touchstart",b,!1),a.removeEventListener("touchmove",b,!1),a.removeEventListener("touchend",b,!1),a.removeEventListener("touchcancel",b,!1))};c._IOS_handleEvent=function(b,a){if(b){b.__touch.preventDefault&&
a.preventDefault&&a.preventDefault();for(var c=a.changedTouches,g=a.type,d=0,e=c.length;d<e;d++){var f=c[d],h=f.identifier;f.target==b.canvas&&("touchstart"==g?this._handleStart(b,h,a,f.pageX,f.pageY):"touchmove"==g?this._handleMove(b,h,a,f.pageX,f.pageY):("touchend"==g||"touchcancel"==g)&&this._handleEnd(b,h,a))}}};c._IE_enable=function(b){var a=b.canvas,m=b.__touch.f=function(a){c._IE_handleEvent(b,a)};a.addEventListener("MSPointerDown",m,!1);window.addEventListener("MSPointerMove",m,!1);window.addEventListener("MSPointerUp",
m,!1);window.addEventListener("MSPointerCancel",m,!1);b.__touch.preventDefault&&(a.style.msTouchAction="none");b.__touch.activeIDs={}};c._IE_disable=function(b){var a=b.__touch.f;window.removeEventListener("MSPointerMove",a,!1);window.removeEventListener("MSPointerUp",a,!1);window.removeEventListener("MSPointerCancel",a,!1);b.canvas&&b.canvas.removeEventListener("MSPointerDown",a,!1)};c._IE_handleEvent=function(b,a){if(b){b.__touch.preventDefault&&a.preventDefault&&a.preventDefault();var c=a.type,
g=a.pointerId,d=b.__touch.activeIDs;if("MSPointerDown"==c)a.srcElement==b.canvas&&(d[g]=!0,this._handleStart(b,g,a,a.pageX,a.pageY));else if(d[g])if("MSPointerMove"==c)this._handleMove(b,g,a,a.pageX,a.pageY);else if("MSPointerUp"==c||"MSPointerCancel"==c)delete d[g],this._handleEnd(b,g,a)}};c._handleStart=function(b,a,c,g,d){var e=b.__touch;if(e.multitouch||!e.count){var f=e.pointers;f[a]||(f[a]=!0,e.count++,b._handlePointerDown(a,c,g,d))}};c._handleMove=function(b,a,c,g,d){b.__touch.pointers[a]&&
b._handlePointerMove(a,c,g,d)};c._handleEnd=function(b,a,c){var g=b.__touch,d=g.pointers;d[a]&&(g.count--,b._handlePointerUp(a,c,!0),delete d[a])};createjs.Touch=c})();(function(){var c=this.createjs=this.createjs||{},c=c.EaselJS=c.EaselJS||{};c.version="0.6.0";c.buildDate="Tue, 12 Feb 2013 21:12:22 GMT"})();
/*
* Filter
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

// namespace:
this.createjs = this.createjs||{};

(function() {

/**
 * Base class that all filters should inherit from. Filters need to be applied to objects that have been cached using
 * the {{#crossLink "DisplayObject/cache"}}{{/crossLink}} method. If an object changes, please cache it again, or use
 * {{#crossLink "DisplayObject/updateCache"}}{{/crossLink}}.
 *
 * <h4>Example</h4>
 *      myInstance.cache(0,0, 100, 100);
 *      myInstance.filters = [
 *          new createjs.ColorFilter(0, 0, 0, 1, 255, 0, 0),
 *          new createjs.BoxBlurFilter(5, 5, 10)
 *      ];
 *
 * <h4>EaselJS Filters</h4>
 * EaselJS comes with a number of pre-built filters. Note that individual filters are not compiled into the minified
 * version of EaselJS. To use them, you must include them manually in the HTML.
 * <ul><li>AlphaMapFilter: Map a greyscale image to the alpha channel of a display object</li>
 *      <li>{{#crossLink "AlphaMapFilter"}}{{/crossLink}}: Map an image's alpha channel to the alpha channel of a display object</li>
 *      <li>{{#crossLink "BoxBlurFilter"}}{{/crossLink}}: Apply vertical and horizontal blur to a display object</li>
 *      <li>{{#crossLink "ColorFilter"}}{{/crossLink}}: Color transform a display object</li>
 *      <li>{{#crossLink "ColorMatrixFilter"}}{{/crossLink}}: Transform an image using a {{#crossLink "ColorMatrix"}}{{/crossLink}}</li>
 * </ul>
 *
 * @class Filter
 * @constructor
 **/
var Filter = function() {
  this.initialize();
}
var p = Filter.prototype;
  
// constructor:
  /** 
   * Initialization method.
   * @method initialize
   * @protected
   **/
  p.initialize = function() {}
  
// public methods:
  /**
   * Returns a rectangle with values indicating the margins required to draw the filter.
   * For example, a filter that will extend the drawing area 4 pixels to the left, and 7 pixels to the right
   * (but no pixels up or down) would return a rectangle with (x=-4, y=0, width=11, height=0).
   * @method getBounds
   * @return {Rectangle} a rectangle object indicating the margins required to draw the filter.
   **/
  p.getBounds = function() {
    return new createjs.Rectangle(0,0,0,0);
  }
  
  /**
   * Applies the filter to the specified context.
   * @method applyFilter
   * @param {CanvasRenderingContext2D} ctx The 2D context to use as the source.
   * @param {Number} x The x position to use for the source rect.
   * @param {Number} y The y position to use for the source rect.
   * @param {Number} width The width to use for the source rect.
   * @param {Number} height The height to use for the source rect.
   * @param {CanvasRenderingContext2D} targetCtx Optional. The 2D context to draw the result to. Defaults to the context passed to ctx.
   * @param {Number} targetX Optional. The x position to draw the result to. Defaults to the value passed to x.
   * @param {Number} targetY Optional. The y position to draw the result to. Defaults to the value passed to y.
   * @return {Boolean}
   **/
  p.applyFilter = function(ctx, x, y, width, height, targetCtx, targetX, targetY) {}

  /**
   * Returns a string representation of this object.
   * @method toString
   * @return {String} a string representation of the instance.
   **/
  p.toString = function() {
    return "[Filter]";
  }
  
  
  /**
   * Returns a clone of this Filter instance.
   * @method clone
   @return {Filter} A clone of the current Filter instance.
   **/
  p.clone = function() {
    return new Filter();
  }
  
createjs.Filter = Filter;
}());

/*
* AlphaMapFilter
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

// namespace:
this.createjs = this.createjs||{};

(function() {

/**
 * Applies a greyscale alpha map image (or canvas) to the target, such that the alpha channel of the result will
 * be copied from the red channel of the map, and the RGB channels will be copied from the target.
 *
 * Generally, it is recommended that you use {{#crossLink "AlphaMaskFilter"}}{{/crossLink}}, because it has much better
 * performance.
 *
 * See {{#crossLink "Filter"}}{{/crossLink}} for an example of how to apply filters.
 * @class AlphaMapFilter
 * @extends Filter
 * @constructor
 * @param {Image} alphaMap The greyscale image (or canvas) to use as the alpha value for the result. This should be
 * exactly the same dimensions as the target.
 **/
var AlphaMapFilter = function(alphaMap) {
  this.initialize(alphaMap);
}
var p = AlphaMapFilter.prototype = new createjs.Filter();

// constructor:
  /** @ignore */
  p.initialize = function(alphaMap) {
    this.alphaMap = alphaMap;
  }

// public properties:

  /**
   * The greyscale image (or canvas) to use as the alpha value for the result. This should be exactly the same
    * dimensions as the target.
   * @property alphaMap
   * @type Image
   **/
  p.alphaMap = null;
  
// private properties:
  p._alphaMap = null;
  p._mapData = null;

// public methods:

  /**
   * Applies the filter to the specified context.
   * @method applyFilter
   * @param {CanvasRenderingContext2D} ctx The 2D context to use as the source.
   * @param {Number} x The x position to use for the source rect.
   * @param {Number} y The y position to use for the source rect.
   * @param {Number} width The width to use for the source rect.
   * @param {Number} height The height to use for the source rect.
   * @param {CanvasRenderingContext2D} targetCtx Optional. The 2D context to draw the result to. Defaults to the context passed to ctx.
   * @param {Number} targetX Optional. The x position to draw the result to. Defaults to the value passed to x.
   * @param {Number} targetY Optional. The y position to draw the result to. Defaults to the value passed to y.
   * @return {Boolean}
   **/
  p.applyFilter = function(ctx, x, y, width, height, targetCtx, targetX, targetY) {
    if (!this.alphaMap) { return true; }
    if (!this._prepAlphaMap()) { return false; }
    targetCtx = targetCtx || ctx;
    if (targetX == null) { targetX = x; }
    if (targetY == null) { targetY = y; }
    
    try {
      var imageData = ctx.getImageData(x, y, width, height);
    } catch(e) {
      //if (!this.suppressCrossDomainErrors) throw new Error("unable to access local image data: " + e);
      return false;
    }
    var data = imageData.data;
    var map = this._mapData;
    var l = data.length;
    for (var i=0; i<l; i+=4) {
      data[i+3] = map[i]||0;
    }
    imageData.data = data;
    targetCtx.putImageData(imageData, targetX, targetY);
    return true;
  }

  /**
   * Returns a clone of this object.
   * @return {AlphaMapFilter} A clone of the current AlphaMapFilter instance.
   **/
  p.clone = function() {
    return new AlphaMapFilter(this.mask);
  }

  /**
   * Returns a string representation of this object.
   * @return {String} a string representation of the instance.
   **/
  p.toString = function() {
    return "[AlphaMapFilter]";
  }

// private methods:
  p._prepAlphaMap = function() {
    if (!this.alphaMap) { return false; }
    if (this.alphaMap == this._alphaMap && this._mapData) { return true; }
    
    this._mapData = null;
    var map = this._alphaMap = this.alphaMap;
    var canvas = map;
    if (map instanceof HTMLCanvasElement) {
      ctx = canvas.getContext("2d");
    } else {
      canvas = createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");
      canvas.width = map.width;
      canvas.height = map.height;
      ctx = canvas.getContext("2d");
      ctx.drawImage(map,0,0);
    }
    
    try {
      var imgData = ctx.getImageData(0, 0, map.width, map.height);
    } catch(e) {
      //if (!this.suppressCrossDomainErrors) throw new Error("unable to access local image data: " + e);
      return false;
    }
    this._mapData = imgData.data;
    return true;
  }


createjs.AlphaMapFilter = AlphaMapFilter;
}());

/*
* AlphaMaskFilter
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

// namespace:
this.createjs = this.createjs||{};

(function() {

/**
 * Applies the alpha from the mask image (or canvas) to the target, such that the alpha channel of the result will
 * be derived from the mask, and the RGB channels will be copied from the target. This can be used, for example, to
 * apply an alpha mask to a display object. This can also be used to combine a JPG compressed RGB image with a PNG32
 * alpha mask, which can result in a much smaller file size than a single PNG32 containing ARGB.
 *
 * <b>IMPORTANT NOTE: This filter currently does not support the targetCtx, or targetX/Y parameters correctly.</b>
 *
 * See {{#crossLink "Filter"}}{{/crossLink}} for an example of how to apply filters.
 * @class AlphaMaskFilter
 * @extends Filter
 * @constructor
 * @param {Image} mask 
 **/
var AlphaMaskFilter = function(mask) {
  this.initialize(mask);
}
var p = AlphaMaskFilter.prototype = new createjs.Filter();

// constructor:
  /** @ignore */
  p.initialize = function(mask) {
    this.mask = mask;
  }

// public properties:

  /**
   * The image (or canvas) to use as the mask.
   * @property mask
   * @type Image
   **/
  p.mask = null;

// public methods:

  /**
   * Applies the filter to the specified context. IMPORTANT NOTE: This filter currently does not support the targetCtx,
   * or targetX/Y parameters correctly.
   * @method applyFilter
   * @param {CanvasRenderingContext2D} ctx The 2D context to use as the source.
   * @param {Number} x The x position to use for the source rect.
   * @param {Number} y The y position to use for the source rect.
   * @param {Number} width The width to use for the source rect.
   * @param {Number} height The height to use for the source rect.
   * @param {CanvasRenderingContext2D} targetCtx Optional. The 2D context to draw the result to. Defaults to the context passed to ctx.
   * @param {Number} targetX Optional. The x position to draw the result to. Defaults to the value passed to x.
   * @param {Number} targetY Optional. The y position to draw the result to. Defaults to the value passed to y.
   * @return {Boolean}
   **/
  p.applyFilter = function(ctx, x, y, width, height, targetCtx, targetX, targetY) {
    if (!this.mask) { return true; }
    targetCtx = targetCtx || ctx;
    if (targetX == null) { targetX = x; }
    if (targetY == null) { targetY = y; }
    
    targetCtx.save();
    if (ctx != targetCtx) {
      // TODO: support targetCtx and targetX/Y
      // clearRect, then draw the ctx in?
    }
    
    targetCtx.globalCompositeOperation = "destination-in";
    targetCtx.drawImage(this.mask, targetX, targetY);
    targetCtx.restore();
    return true;
  }

  /**
   * Returns a clone of this object.
   * @return {AlphaMaskFilter}
   **/
  p.clone = function() {
    return new AlphaMaskFilter(this.mask);
  }

  /**
   * Returns a string representation of this object.
   * @return {String} a string representation of the instance.
   **/
  p.toString = function() {
    return "[AlphaMaskFilter]";
  }

// private methods:



createjs.AlphaMaskFilter = AlphaMaskFilter;
}());

/*
* BoxBlurFilter
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

// namespace:
this.createjs = this.createjs||{};

(function() {

/**
 * BoxBlurFilter applies a box blur to DisplayObjects
 *
 * See {{#crossLink "Filter"}}{{/crossLink}} for an example of how to apply filters.
 * @class BoxBlurFilter
 * @extends Filter
 * @constructor
 * @param {Number} blurX
 * @param {Number} blurY
 * @param {Number} quality
 **/
var BoxBlurFilter = function( blurX, blurY, quality ) {
  this.initialize( blurX, blurY, quality );
}
var p = BoxBlurFilter.prototype = new createjs.Filter();

// constructor:
  /** @ignore */
  p.initialize = function( blurX, blurY, quality ) {
    if ( isNaN(blurX) || blurX < 0 ) blurX = 0;
    this.blurX = blurX | 0;
    if ( isNaN(blurY) || blurY < 0 ) blurY = 0;
    this.blurY = blurY | 0;
    if ( isNaN(quality) || quality < 1  ) quality = 1;
    this.quality = quality | 0;
  }

// public properties:

  /**
   * Horizontal blur radius
   * @property blurX
   * @type Number
   **/
  p.blurX = 0;

  /**
   * Vertical blur radius
   * @property blurY
   * @type Number
   **/
  p.blurY = 0;

  /**
   * Number of blur iterations. For example, a value of 1 will produce a rough blur.
   * A value of 2 will produce a smoother blur, but take twice as long to run.
   * @property quality
   * @type Number
   **/
  p.quality = 1;

// public methods:
  /**
   * Returns a rectangle with values indicating the margins required to draw the filter.
   * For example, a filter that will extend the drawing area 4 pixels to the left, and 7 pixels to the right
   * (but no pixels up or down) would return a rectangle with (x=-4, y=0, width=11, height=0).
   * @method getBounds
   * @return {Rectangle} a rectangle object indicating the margins required to draw the filter.
   **/
  p.getBounds = function() {
    // TODO: this doesn't properly account for blur quality.
    return new createjs.Rectangle(-this.blurX,-this.blurY,2*this.blurX,2*this.blurY);
  }

  /**
   * Applies the filter to the specified context.
   * @method applyFilter
   * @param {CanvasRenderingContext2D} ctx The 2D context to use as the source.
   * @param {Number} x The x position to use for the source rect.
   * @param {Number} y The y position to use for the source rect.
   * @param {Number} width The width to use for the source rect.
   * @param {Number} height The height to use for the source rect.
   * @param {CanvasRenderingContext2D} targetCtx Optional. The 2D context to draw the result to. Defaults to the context passed to ctx.
   * @param {Number} targetX Optional. The x position to draw the result to. Defaults to the value passed to x.
   * @param {Number} targetY Optional. The y position to draw the result to. Defaults to the value passed to y.
   * @return {Boolean} 
   **/
  p.applyFilter = function(ctx, x, y, width, height, targetCtx, targetX, targetY) {
    targetCtx = targetCtx || ctx;
    if (targetX == null) { targetX = x; }
    if (targetY == null) { targetY = y; }
    try {
      var imageData = ctx.getImageData(x, y, width, height);
    } catch(e) {
      //if (!this.suppressCrossDomainErrors) throw new Error("unable to access local image data: " + e);
      return false;
    }

    var radiusX = this.blurX;
    if ( isNaN(radiusX) || radiusX < 0 ) return false;
    radiusX |= 0;

    var radiusY = this.blurY;
    if ( isNaN(radiusY) || radiusY < 0 ) return false;
    radiusY |= 0;

    if ( radiusX == 0 && radiusY == 0 ) return false;

    var iterations = this.quality;
    if ( isNaN(iterations) || iterations < 1  ) iterations = 1;
    iterations |= 0;
    if ( iterations > 3 ) iterations = 3;
    if ( iterations < 1 ) iterations = 1;

    var pixels = imageData.data;

    var rsum,gsum,bsum,asum,x,y,i,p,p1,p2,yp,yi,yw;
    var wm = width - 1;
    var hm = height - 1;
    var rad1x = radiusX + 1;
    var divx = radiusX + rad1x;
    var rad1y = radiusY + 1;
    var divy = radiusY + rad1y;
    var div2 = 1 / (divx * divy);

    var r = [];
    var g = [];
    var b = [];
    var a = [];

    var vmin = [];
    var vmax = [];

    while ( iterations-- > 0 ) {
      yw = yi = 0;

      for ( y=0; y < height; y++ ){
        rsum = pixels[yw]   * rad1x;
        gsum = pixels[yw+1] * rad1x;
        bsum = pixels[yw+2] * rad1x;
        asum = pixels[yw+3] * rad1x;


        for( i = 1; i <= radiusX; i++ ) {
          p = yw + (((i > wm ? wm : i )) << 2 );
          rsum += pixels[p++];
          gsum += pixels[p++];
          bsum += pixels[p++];
          asum += pixels[p]
        }

        for ( x = 0; x < width; x++ ) {
          r[yi] = rsum;
          g[yi] = gsum;
          b[yi] = bsum;
          a[yi] = asum;

          if(y==0){
            vmin[x] = Math.min( x + rad1x, wm ) << 2;
            vmax[x] = Math.max( x - radiusX, 0 ) << 2;
          }

          p1 = yw + vmin[x];
          p2 = yw + vmax[x];

          rsum += pixels[p1++] - pixels[p2++];
          gsum += pixels[p1++] - pixels[p2++];
          bsum += pixels[p1++] - pixels[p2++];
          asum += pixels[p1]   - pixels[p2];

          yi++;
        }
        yw += ( width << 2 );
      }

      for ( x = 0; x < width; x++ ) {
        yp = x;
        rsum = r[yp] * rad1y;
        gsum = g[yp] * rad1y;
        bsum = b[yp] * rad1y;
        asum = a[yp] * rad1y;

        for( i = 1; i <= radiusY; i++ ) {
          yp += ( i > hm ? 0 : width );
          rsum += r[yp];
          gsum += g[yp];
          bsum += b[yp];
          asum += a[yp];
        }

        yi = x << 2;
        for ( y = 0; y < height; y++) {
          pixels[yi]   = (rsum * div2 + 0.5) | 0;
          pixels[yi+1] = (gsum * div2 + 0.5) | 0;
          pixels[yi+2] = (bsum * div2 + 0.5) | 0;
          pixels[yi+3] = (asum * div2 + 0.5) | 0;

          if( x == 0 ){
          vmin[y] = Math.min( y + rad1y, hm ) * width;
          vmax[y] = Math.max( y - radiusY,0 ) * width;
          }

          p1 = x + vmin[y];
          p2 = x + vmax[y];

          rsum += r[p1] - r[p2];
          gsum += g[p1] - g[p2];
          bsum += b[p1] - b[p2];
          asum += a[p1] - a[p2];

          yi += width << 2;
        }
      }
    }

    targetCtx.putImageData(imageData, targetX, targetY);
    return true;
  }

  /**
   * Returns a clone of this object.
   * @return {BoxBlurFilter}
   **/
  p.clone = function() {
    return new BoxBlurFilter(this.blurX, this.blurY, this.quality);
  }

  /**
   * Returns a string representation of this object.
   * @return {String}
   **/
  p.toString = function() {
    return "[BoxBlurFilter]";
  }

// private methods:



createjs.BoxBlurFilter = BoxBlurFilter;
}());

/*
* ColorFilter
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

// namespace:
this.createjs = this.createjs||{};

(function() {

/**
 * Applies color transforms.
 *
 * See {{#crossLink "Filter"}}{{/crossLink}} for an example of how to apply filters.
 * @class ColorFilter
 * @constructor
 * @extends Filter
 * @param {Number} redMultiplier
 * @param {Number} greenMultiplier
 * @param {Number} blueMultiplier
 * @param {Number} alphaMultiplier
 * @param {Number} redOffset
 * @param {Number} greenOffset
 * @param {Number} blueOffset
 * @param {Number} alphaOffset
 **/
var ColorFilter = function(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset) {
  this.initialize(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset);
}
var p = ColorFilter.prototype = new createjs.Filter();

// public properties:
  /**
   * Red channel multiplier.
   * @property redMultiplier
   * @type Number
   **/
  p.redMultiplier = 1;
  
  /** 
   * Green channel multiplier.
   * @property greenMultiplier
   * @type Number
   **/
  p.greenMultiplier = 1;
  
  /**
   * Blue channel multiplier.
   * @property blueMultiplier
   * @type Number
   **/
  p.blueMultiplier = 1;
  
  /**
   * Alpha channel multiplier.
   * @property redMultiplier
   * @type Number
   **/
  p.alphaMultiplier = 1;
  
  /**
   * Red channel offset (added to value).
   * @property redOffset
   * @type Number
   **/
  p.redOffset = 0;
  
  /**
   * Green channel offset (added to value).
   * @property greenOffset
   * @type Number
   **/
  p.greenOffset = 0;
  
  /**
   * Blue channel offset (added to value).
   * @property blueOffset
   * @type Number
   **/
  p.blueOffset = 0;
  
  /**
   * Alpha channel offset (added to value).
   * @property alphaOffset
   * @type Number
   **/
  p.alphaOffset = 0;

// constructor:
  /**
   * Initialization method.
   * @method initialize
   * @protected
   **/
  p.initialize = function(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset) {
    this.redMultiplier = redMultiplier != null ? redMultiplier : 1;
    this.greenMultiplier = greenMultiplier != null ? greenMultiplier : 1;
    this.blueMultiplier = blueMultiplier != null ? blueMultiplier : 1;
    this.alphaMultiplier = alphaMultiplier != null ? alphaMultiplier : 1;
    this.redOffset = redOffset || 0;
    this.greenOffset = greenOffset || 0;
    this.blueOffset = blueOffset || 0;
    this.alphaOffset = alphaOffset || 0;
  }

// public methods:
  /**
   * Applies the filter to the specified context.
   * @method applyFilter
   * @param {CanvasRenderingContext2D} ctx The 2D context to use as the source.
   * @param {Number} x The x position to use for the source rect.
   * @param {Number} y The y position to use for the source rect.
   * @param {Number} width The width to use for the source rect.
   * @param {Number} height The height to use for the source rect.
   * @param {CanvasRenderingContext2D} targetCtx Optional. The 2D context to draw the result to. Defaults to the context passed to ctx.
   * @param {Number} targetX Optional. The x position to draw the result to. Defaults to the value passed to x.
   * @param {Number} targetY Optional. The y position to draw the result to. Defaults to the value passed to y.
   * @return {Boolean}
   **/
  p.applyFilter = function(ctx, x, y, width, height, targetCtx, targetX, targetY) {
    targetCtx = targetCtx || ctx;
    if (targetX == null) { targetX = x; }
    if (targetY == null) { targetY = y; }
    try {
      var imageData = ctx.getImageData(x, y, width, height);
    } catch(e) {
      //if (!this.suppressCrossDomainErrors) throw new Error("unable to access local image data: " + e);
      return false;
    }
    var data = imageData.data;
    var l = data.length;
    for (var i=0; i<l; i+=4) {
      data[i] = data[i]*this.redMultiplier+this.redOffset;
      data[i+1] = data[i+1]*this.greenMultiplier+this.greenOffset;
      data[i+2] = data[i+2]*this.blueMultiplier+this.blueOffset;
      data[i+3] = data[i+3]*this.alphaMultiplier+this.alphaOffset;
    }
    imageData.data = data;
    targetCtx.putImageData(imageData, targetX, targetY);
    return true;
  }

  /**
   * Returns a string representation of this object.
   * @method toString
   * @return {String} a string representation of the instance.
   **/
  p.toString = function() {
    return "[ColorFilter]";
  }


  /**
   * Returns a clone of this ColorFilter instance.
   * @method clone
   * @return {ColorFilter} A clone of the current ColorFilter instance.
   **/
  p.clone = function() {
    return new ColorFilter(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset);
  }

createjs.ColorFilter = ColorFilter;
}());

/*
* ColorMatrix
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

// namespace:
this.createjs = this.createjs||{};

(function() {
  
  /**
   * Provides helper functions for assembling a matrix for use with the {{#crossLink "ColorMatrixFilter"}}{{/crossLink}},
   * or can be used directly as the matrix for a ColorMatrixFilter. Most methods return the instance to facilitate
   * chained calls.
   *
   * <h4>Example</h4>
   *      myColorMatrix.adjustHue(20).adjustBrightness(50);
   *
   * See {{#crossLink "Filter"}}{{/crossLink}} for an example of how to apply filters.
   * @class ColorMatrix
   * @constructor
   * @extends Array
   * @param {Number} brightness
   * @param {Number} contrast
   * @param {Number} saturation
   * @param {Number} hue
   **/
  ColorMatrix = function(brightness, contrast, saturation, hue) {
    this.initialize(brightness, contrast, saturation, hue);
  };
  var p = ColorMatrix.prototype = [];
  
  /**
   * Array of delta values for contrast calculations.
   * @property DELTA_INDEX
   * @type Array
   * @static
   **/
  ColorMatrix.DELTA_INDEX = [
    0,    0.01, 0.02, 0.04, 0.05, 0.06, 0.07, 0.08, 0.1,  0.11,
    0.12, 0.14, 0.15, 0.16, 0.17, 0.18, 0.20, 0.21, 0.22, 0.24,
    0.25, 0.27, 0.28, 0.30, 0.32, 0.34, 0.36, 0.38, 0.40, 0.42,
    0.44, 0.46, 0.48, 0.5,  0.53, 0.56, 0.59, 0.62, 0.65, 0.68, 
    0.71, 0.74, 0.77, 0.80, 0.83, 0.86, 0.89, 0.92, 0.95, 0.98,
    1.0,  1.06, 1.12, 1.18, 1.24, 1.30, 1.36, 1.42, 1.48, 1.54,
    1.60, 1.66, 1.72, 1.78, 1.84, 1.90, 1.96, 2.0,  2.12, 2.25, 
    2.37, 2.50, 2.62, 2.75, 2.87, 3.0,  3.2,  3.4,  3.6,  3.8,
    4.0,  4.3,  4.7,  4.9,  5.0,  5.5,  6.0,  6.5,  6.8,  7.0,
    7.3,  7.5,  7.8,  8.0,  8.4,  8.7,  9.0,  9.4,  9.6,  9.8, 
    10.0
  ];
  
  /**
   * Identity matrix values.
   * @property IDENTITY_MATRIX
   * @type Array
   * @static
   **/
  ColorMatrix.IDENTITY_MATRIX = [
    1,0,0,0,0,
    0,1,0,0,0,
    0,0,1,0,0,
    0,0,0,1,0,
    0,0,0,0,1
  ];
  
  /**
   * The constant length of a color matrix.
   * @property LENGTH
   * @type Number
   * @static
   **/
  ColorMatrix.LENGTH = ColorMatrix.IDENTITY_MATRIX.length;
  
  
  /**
   * Initialization method.
   * @method initialize
   * @protected
   */
  p.initialize = function(brightness,contrast,saturation,hue) {
    this.reset();
    this.adjustColor(brightness,contrast,saturation,hue);
    return this;
  };
  
  /**
   * Resets the matrix to identity values.
   * @method reset
   * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
   */
  p.reset = function() {
    return this.copyMatrix(ColorMatrix.IDENTITY_MATRIX);
  };
  
  /**
   * Shortcut method to adjust brightness, contrast, saturation and hue.
   * Equivalent to calling adjustHue(hue), adjustContrast(contrast),
   * adjustBrightness(brightness), adjustSaturation(saturation), in that order.
   * @param {Number} brightness
   * @param {Number} contrast
   * @param {Number} saturation
   * @param {Number} hue
   * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
   **/
  p.adjustColor = function(brightness,contrast,saturation,hue) {
    this.adjustHue(hue);
    this.adjustContrast(contrast);
    this.adjustBrightness(brightness);
    return this.adjustSaturation(saturation);
  };
  
  /**
   * Adjusts the brightness of pixel color by adding the specified value to the red, green and blue channels.
   * Positive values will make the image brighter, negative values will make it darker.
   * @param {Number} value A value between -255 & 255 that will be added to the RGB channels.
   * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
   **/
  p.adjustBrightness = function(value) {
    if (value == 0 || isNaN(value)) { return this; }
    value = this._cleanValue(value,255);
    this._multiplyMatrix([
      1,0,0,0,value,
      0,1,0,0,value,
      0,0,1,0,value,
      0,0,0,1,0,
      0,0,0,0,1
    ]);
    return this;
  },
  
  /**
   * Adjusts the contrast of pixel color.
   * Positive values will increase contrast, negative values will decrease contrast.
   * @param {Number} value A value between -100 & 100.
   * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
   **/
  p.adjustContrast = function(value) {
    if (value == 0 || isNaN(value)) { return this; }
    value = this._cleanValue(value,100);
    var x;
    if (value<0) {
      x = 127+value/100*127;
    } else {
      x = value%1;
      if (x == 0) {
        x = ColorMatrix.DELTA_INDEX[value];
      } else {
        x = ColorMatrix.DELTA_INDEX[(value<<0)]*(1-x)+ColorMatrix.DELTA_INDEX[(value<<0)+1]*x; // use linear interpolation for more granularity.
      }
      x = x*127+127;
    }
    this._multiplyMatrix([
      x/127,0,0,0,0.5*(127-x),
      0,x/127,0,0,0.5*(127-x),
      0,0,x/127,0,0.5*(127-x),
      0,0,0,1,0,
      0,0,0,0,1
    ]);
    return this;
  };
  
  /**
   * Adjusts the color saturation of the pixel.
   * Positive values will increase saturation, negative values will decrease saturation (trend towards greyscale).
   * @param {Number} value A value between -100 & 100.
   * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
   **/
  p.adjustSaturation = function(value) {
    if (value == 0 || isNaN(value)) { return this; }
    value = this._cleanValue(value,100);
    var x = 1+((value > 0) ? 3*value/100 : value/100);
    var lumR = 0.3086;
    var lumG = 0.6094;
    var lumB = 0.0820;
    this._multiplyMatrix([
      lumR*(1-x)+x,lumG*(1-x),lumB*(1-x),0,0,
      lumR*(1-x),lumG*(1-x)+x,lumB*(1-x),0,0,
      lumR*(1-x),lumG*(1-x),lumB*(1-x)+x,0,0,
      0,0,0,1,0,
      0,0,0,0,1
    ]);
    return this;
  };
  
  
  /**
   * Adjusts the hue of the pixel color.
   * @param {Number} value A value between -180 & 180.
   * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
   **/
  p.adjustHue = function(value) {
    if (value == 0 || isNaN(value)) { return this; }
    value = this._cleanValue(value,180)/180*Math.PI;
    var cosVal = Math.cos(value);
    var sinVal = Math.sin(value);
    var lumR = 0.213;
    var lumG = 0.715;
    var lumB = 0.072;
    this._multiplyMatrix([
      lumR+cosVal*(1-lumR)+sinVal*(-lumR),lumG+cosVal*(-lumG)+sinVal*(-lumG),lumB+cosVal*(-lumB)+sinVal*(1-lumB),0,0,
      lumR+cosVal*(-lumR)+sinVal*(0.143),lumG+cosVal*(1-lumG)+sinVal*(0.140),lumB+cosVal*(-lumB)+sinVal*(-0.283),0,0,
      lumR+cosVal*(-lumR)+sinVal*(-(1-lumR)),lumG+cosVal*(-lumG)+sinVal*(lumG),lumB+cosVal*(1-lumB)+sinVal*(lumB),0,0,
      0,0,0,1,0,
      0,0,0,0,1
    ]);
    return this;
  };
  
  /**
   * Concatenates (multiplies) the specified matrix with this one.
   * @param {Array} matrix An array or ColorMatrix instance.
   * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
   **/
  p.concat = function(matrix) {
    matrix = this._fixMatrix(matrix);
    if (matrix.length != ColorMatrix.LENGTH) { return this; }
    this._multiplyMatrix(matrix);
    return this;
  };
  
  /**
   * Returns a clone of this ColorMatrix.
   * @return {ColorMatrix} A clone of this ColorMatrix.
   **/
  p.clone = function() {
    return new ColorMatrix(this);
  };
  
  /**
   * Return a length 25 (5x5) array instance containing this matrix's values.
   * @return {Array} An array holding this matrix's values.
   **/
  p.toArray = function() {
    return this.slice(0,ColorMatrix.LENGTH);
  };
  
  /**
   * Copy the specified matrix's values to this matrix.
   * @param {Array} matrix An array or ColorMatrix instance.
   * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
   **/
  p.copyMatrix = function(matrix) {
    var l = ColorMatrix.LENGTH;
    for (var i=0;i<l;i++) {
      this[i] = matrix[i];
    }
    return this;
  };
  
// private methods:
  
  /**
   * @method _multiplyMatrix
   * @protected
   **/
  p._multiplyMatrix = function(matrix) {
    var col = [];
    
    for (var i=0;i<5;i++) {
      for (var j=0;j<5;j++) {
        col[j] = this[j+i*5];
      }
      for (var j=0;j<5;j++) {
        var val=0;
        for (var k=0;k<5;k++) {
          val += matrix[j+k*5]*col[k];
        }
        this[j+i*5] = val;
      }
    }
  };
  
  /**
   * Make sure values are within the specified range, hue has a limit of 180, brightness is 255, others are 100.
   * @method _cleanValue
   * @protected
   **/
  p._cleanValue = function(value,limit) {
    return Math.min(limit,Math.max(-limit,value));
  };
  
  // 
  /**
   * Makes sure matrixes are 5x5 (25 long).
   * @method _fixMatrix
   * @protected
   **/
  p._fixMatrix = function(matrix) {
    if (matrix instanceof ColorMatrix) { matrix = matrix.slice(0); }
    if (matrix.length < ColorMatrix.LENGTH) {
      matrix = matrix.slice(0,matrix.length).concat(ColorMatrix.IDENTITY_MATRIX.slice(matrix.length,ColorMatrix.LENGTH));
    } else if (matrix.length > ColorMatrix.LENGTH) {
      matrix = matrix.slice(0,ColorMatrix.LENGTH);
    }
    return matrix;
  };
  
  createjs.ColorMatrix = ColorMatrix;

}());

/*
* ColorMatrixFilter
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

// namespace:
this.createjs = this.createjs||{};

(function() {

/**
 * Allows you to carry out complex color operations such as modifying saturation, brightness, or inverting. See the
 * {{#crossLink "ColorMatrix"}}{{/crossLink}} for more information on changing colors.
 *
 * See {{#crossLink "Filter"}}{{/crossLink}} for an example of how to apply filters.
 * @class ColorMatrixFilter
 * @constructor
 * @extends Filter
 * @param {Array} matrix A 4x5 matrix describing the color operation to perform. See also the ColorMatrix class.
 **/
var ColorMatrixFilter = function(matrix) {
  this.initialize(matrix);
}
var p = ColorMatrixFilter.prototype = new createjs.Filter();

// public properties:
  p.matrix = null;
  
// constructor:
  // TODO: detailed docs.
  /** 
   * @method initialize
   * @protected
   * @param {Array} matrix A 4x5 matrix describing the color operation to perform.
   **/
  p.initialize = function(matrix) {
    this.matrix = matrix;
  }

// public methods:
  /**
   * Applies the filter to the specified context.
   * @method applyFilter
   * @param {CanvasRenderingContext2D} ctx The 2D context to use as the source.
   * @param {Number} x The x position to use for the source rect.
   * @param {Number} y The y position to use for the source rect.
   * @param {Number} width The width to use for the source rect.
   * @param {Number} height The height to use for the source rect.
   * @param {CanvasRenderingContext2D} targetCtx Optional. The 2D context to draw the result to. Defaults to the context passed to ctx.
   * @param {Number} targetX Optional. The x position to draw the result to. Defaults to the value passed to x.
   * @param {Number} targetY Optional. The y position to draw the result to. Defaults to the value passed to y.
   * @return {Boolean}
   **/
  p.applyFilter = function(ctx, x, y, width, height, targetCtx, targetX, targetY) {
    targetCtx = targetCtx || ctx;
    if (targetX == null) { targetX = x; }
    if (targetY == null) { targetY = y; }
    try {
      var imageData = ctx.getImageData(x, y, width, height);
    } catch(e) {
      //if (!this.suppressCrossDomainErrors) throw new Error("unable to access local image data: " + e);
      return false;
    }
    var data = imageData.data;
    var l = data.length;
    var r,g,b,a;
    var mtx = this.matrix;
    var m0 =  mtx[0],  m1 =  mtx[1],  m2 =  mtx[2],  m3 =  mtx[3],  m4 =  mtx[4];
    var m5 =  mtx[5],  m6 =  mtx[6],  m7 =  mtx[7],  m8 =  mtx[8],  m9 =  mtx[9];
    var m10 = mtx[10], m11 = mtx[11], m12 = mtx[12], m13 = mtx[13], m14 = mtx[14];
    var m15 = mtx[15], m16 = mtx[16], m17 = mtx[17], m18 = mtx[18], m19 = mtx[19];
    
    for (var i=0; i<l; i+=4) {
      r = data[i];
      g = data[i+1];
      b = data[i+2];
      a = data[i+3];
      data[i] = r*m0+g*m1+b*m2+a*m3+m4; // red
      data[i+1] = r*m5+g*m6+b*m7+a*m8+m9; // green
      data[i+2] = r*m10+g*m11+b*m12+a*m13+m14; // blue
      data[i+3] = r*m15+g*m16+b*m17+a*m18+m19; // alpha
    }
    imageData.data = data;
    targetCtx.putImageData(imageData, targetX, targetY);
    return true;
  }

  /**
   * Returns a string representation of this object.
   * @method toString
   * @return {String} a string representation of the instance.
   **/
  p.toString = function() {
    return "[ColorMatrixFilter]";
  }
  
  
  /**
   * Returns a clone of this ColorMatrixFilter instance.
   * @method clone
   * @return {ColorMatrixFilter} A clone of the current ColorMatrixFilter instance.
   **/
  p.clone = function() {
    return new ColorMatrixFilter(this.matrix);
  }
  
createjs.ColorMatrixFilter = ColorMatrixFilter;
}());
