$.importStyle("body{padding-top:1.06666667rem}.header{display:-webkit-box;position:fixed;left:0;top:0;width:100%;box-sizing:border-box;height:1.06666667rem;line-height:.8rem;padding:.13333333rem .2rem;background-color:rgba(194,46,27,.8);color:#fff;font-size:.53333333rem}.header .back{display:inline-block}.header .search{-webkit-box-flex:1}.header .title{-webkit-box-flex:1}.header .message{display:inline-block}.header.not-opacity{background-color:#c22e1b}.header .countdown{-webkit-animation:scale 1s;animation:scale 1s}@-webkit-keyframes scale{0%{-webkit-transform:scale(0.8);transform:scale(0.8)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes scale{0%{-webkit-transform:scale(0.8);transform:scale(0.8)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}");define("guang/m-activity/0.0.99/p/content/common2/header.jst",[],function(require,exports,module){module.exports=function(obj){obj||(obj={});var __p="",__e=function(a){a=String(a);var b=/[&<>'"]/g,c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};a=a.replace(b,function(a){return c[a]});return a};with(obj)__p+='<div class="header">\n  <div class="title">'+__e(title)+"</div>\n  <div class=\"countdown\" data-config=\"{'leftTime':5,'effetc':'slide'}\">"+__e("${m}:${s}")+"</div>\n</div>";return __p}});$.importStyle(".cd-flip .handlet,.cd-large .hand{background:url(http://img02.taobaocdn.com/tps/i2/T1N4t1XfxgXXXXXXXX-95-35.png) no-repeat}.cd-large,.cd-lite,.cd-medium{display:none;color:grey;font-size:12px;font-family:arial}.cd-large .clock,.cd-lite .clock,.cd-medium .clock{font-weight:700}.cd-large b,.cd-lite b,.cd-medium b{text-decoration:none}.cd-large .hand,.cd-lite .hand,.cd-medium .hand{margin:0 3px}.cd-large .hand{display:inline-block;padding:0 2px;width:32px;height:35px;line-height:35px}.cd-large .hand-s-ext{width:59px;background-position:-36px 0}.cd-large .digital,.cd-lite .digital,.cd-medium .digital{color:#f60;font-size:14px;font-weight:400}.cd-medium .digital{color:#404040;font-size:24px}.cd-large .digital{color:#fff;font-size:28px}.cd-slide .hand{display:inline-block;*position:relative;overflow:hidden;vertical-align:middle}.cd-slide .hand b{top:0}.cd-slide .slide-wrap{position:relative;float:left}.cd-slide .digital{float:left}.cd-slide .slide-wrap .digital{clear:left}.cd-flip .hand{position:relative;vertical-align:middle}.cd-flip .handlet{position:absolute;top:0;left:0;padding:0 2px;width:32px;height:35px}.cd-slide .km-countdown-anim{top:0!important;-webkit-transition:top .5s ease-in;transition:top .5s ease-in}.cd-flip .km-countdown-anim-part1{-webkit-transition:top .15s,height .15s;transition:top .15s,height .15s}.cd-flip .km-countdown-anim-part2{-webkit-transition:height .3s cubic-bezier(.215,.61,.355,1);transition:height .3s cubic-bezier(.215,.61,.355,1)}");define("kg/km-countdown/0.0.6/timer",[],function(a,b,c){var d;d=function(a){"use strict";function b(){for(;d.length;)d.shift()();var a=+new Date-b.nextTime,e=1+Math.floor(a/100);a=100-a%100,b.nextTime+=100*e;var f,g,h,i;for(h=0,i=c.length;i>h;h+=2)f=c[h+1],0===f?c[h](e):(f+=2*e-1,g=Math.floor(f/20),g>0&&c[h](g),c[h+1]=f%20+1);setTimeout(b,a)}var c=[],d=[];return b.nextTime=+new Date,b(),a={add:function(a,b){d.push(function(){c.push(a),c.push(1e3===b?1:0)})},remove:function(a){d.push(function(){var b=$(c).indexOf(a);-1!==b&&c.splice($(c).indexOf(a),2)})}}}(),c.exports=d});define("kg/km-countdown/0.0.6/effect",[],function(a,b,c){var d;d=function(a){"use strict";var b="transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",c={normal:{paint:function(){var a,b=this;Array.prototype.forEach.call(b.hands,function(c){c.lastValue!==c.value&&(a="",Array.prototype.forEach.call(b._toDigitals(c.value,c.bits),function(c){a+=b._html(c,"","digital")}),c.node.html(a))})}},slide:{paint:function(){var a,b,d,e,f=this;Array.prototype.forEach.call(f.hands,function(c){if(c.lastValue!==c.value){for(a="",b=c.bits,d=f._toDigitals(c.value,b),e=void 0===c.lastValue?d:f._toDigitals(c.lastValue,b);b--;)a=e[b]!==d[b]?f._html([f._html(d[b],"","digital"),f._html(e[b],"","digital")],"slide-wrap")+a:f._html(d[b],"","digital")+a;c.node.html(a)}}),c.slide.afterPaint.apply(f)},afterPaint:function(){Array.prototype.forEach.call(this.hands,function(a){if(a.lastValue!==a.value&&void 0!==a.lastValue){var b=a.node,c=$(".digital",b).height();b.css("height",c);var d=$(".slide-wrap",b);d.css("top",-c),setTimeout(function(){d.addClass("km-countdown-anim")},0)}})}},flip:{paint:function(){var a,b,d,e=this;Array.prototype.forEach.call(e.hands,function(c){c.lastValue!==c.value&&(a="",b="",d="",Array.prototype.forEach.call(e._toDigitals(c.value,c.bits),function(a){b+=e._html(a,"","digital")}),void 0===c.lastValue?c.node.html(b):(b=e._html(b,"handlet"),Array.prototype.forEach.call(e._toDigitals(c.lastValue,c.bits),function(a){d+=e._html(a,"","digital")}),a=e._html(d,"handlet mask"),d=e._html(d,"handlet"),c.node.html(b+d+a)))}),c.flip.afterPaint.apply(e)},afterPaint:function(){var a=this;Array.prototype.forEach.call(this.hands,function(c){if(c.lastValue!==c.value&&void 0!==c.lastValue){var d=c.node,e=$(".handlet",d),f=$(e[0]),g=$(e[1]),h=$(e[2]),i=d.width(),j=d.height(),k=Math.floor(j/2);g.css({clip:"rect("+k+"px, "+i+"px, "+j+"px, 0)"}),h.css({overflow:"hidden",height:k+"px"}),h.off(b,a.callback),a.callback=function(){h.html(f.html()),h.removeClass("km-countdown-anim-part1").css({top:0,height:k+"px",clip:"rect("+k+"px, "+i+"px, "+j+"px, 0)"}),setTimeout(function(){h.css({height:j+"px"}).addClass("km-countdown-anim-part2")},0)},setTimeout(function(){h.css({top:k+"px",height:0}).addClass("km-countdown-anim-part1").on(b,a.callback)},0)}})}}};return a=c}(),c.exports=d});define("kg/km-countdown/0.0.6/index",["kg/km-countdown/0.0.6/index.css"],function(a,b,c){var d,e,f;a("kg/km-countdown/0.0.6/index.css");d=function(a){"use strict";function b(){for(;d.length;)d.shift()();var a=+new Date-b.nextTime,e=1+Math.floor(a/100);a=100-a%100,b.nextTime+=100*e;var f,g,h,i;for(h=0,i=c.length;i>h;h+=2)f=c[h+1],0===f?c[h](e):(f+=2*e-1,g=Math.floor(f/20),g>0&&c[h](g),c[h+1]=f%20+1);setTimeout(b,a)}var c=[],d=[];return b.nextTime=+new Date,b(),a={add:function(a,b){d.push(function(){c.push(a),c.push(1e3===b?1:0)})},remove:function(a){d.push(function(){var b=$(c).indexOf(a);-1!==b&&c.splice($(c).indexOf(a),2)})}}}(),e=function(a){"use strict";var b="transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",c={normal:{paint:function(){var a,b=this;Array.prototype.forEach.call(b.hands,function(c){c.lastValue!==c.value&&(a="",Array.prototype.forEach.call(b._toDigitals(c.value,c.bits),function(c){a+=b._html(c,"","digital")}),c.node.html(a))})}},slide:{paint:function(){var a,b,d,e,f=this;Array.prototype.forEach.call(f.hands,function(c){if(c.lastValue!==c.value){for(a="",b=c.bits,d=f._toDigitals(c.value,b),e=void 0===c.lastValue?d:f._toDigitals(c.lastValue,b);b--;)a=e[b]!==d[b]?f._html([f._html(d[b],"","digital"),f._html(e[b],"","digital")],"slide-wrap")+a:f._html(d[b],"","digital")+a;c.node.html(a)}}),c.slide.afterPaint.apply(f)},afterPaint:function(){Array.prototype.forEach.call(this.hands,function(a){if(a.lastValue!==a.value&&void 0!==a.lastValue){var b=a.node,c=$(".digital",b).height();b.css("height",c);var d=$(".slide-wrap",b);d.css("top",-c),setTimeout(function(){d.addClass("km-countdown-anim")},0)}})}},flip:{paint:function(){var a,b,d,e=this;Array.prototype.forEach.call(e.hands,function(c){c.lastValue!==c.value&&(a="",b="",d="",Array.prototype.forEach.call(e._toDigitals(c.value,c.bits),function(a){b+=e._html(a,"","digital")}),void 0===c.lastValue?c.node.html(b):(b=e._html(b,"handlet"),Array.prototype.forEach.call(e._toDigitals(c.lastValue,c.bits),function(a){d+=e._html(a,"","digital")}),a=e._html(d,"handlet mask"),d=e._html(d,"handlet"),c.node.html(b+d+a)))}),c.flip.afterPaint.apply(e)},afterPaint:function(){var a=this;Array.prototype.forEach.call(this.hands,function(c){if(c.lastValue!==c.value&&void 0!==c.lastValue){var d=c.node,e=$(".handlet",d),f=$(e[0]),g=$(e[1]),h=$(e[2]),i=d.width(),j=d.height(),k=Math.floor(j/2);g.css({clip:"rect("+k+"px, "+i+"px, "+j+"px, 0)"}),h.css({overflow:"hidden",height:k+"px"}),h.off(b,a.callback),a.callback=function(){h.html(f.html()),h.removeClass("km-countdown-anim-part1").css({top:0,height:k+"px",clip:"rect("+k+"px, "+i+"px, "+j+"px, 0)"}),setTimeout(function(){h.css({height:j+"px"}).addClass("km-countdown-anim-part2")},0)},setTimeout(function(){h.css({top:k+"px",height:0}).addClass("km-countdown-anim-part1").on(b,a.callback)},0)}})}}};return a=c}(),f=function(a){"use strict";function b(a){if(!(this instanceof b))return new b(a);if(a.el=$(a.el),a.el){var c=a.el.attr("data-config");c&&(c=JSON.parse(c.replace(/'/g,'"')),a=$.mix(c,a)),this.config=$.mix({el:"",stopPoint:"",leftTime:0,template:"",varRegular:/\$\{([\-\w]+)\}/g,clock:["d",100,2,"h",24,2,"m",60,2,"s",60,2,"u",10,1],effect:"normal"},a),this._init()}}$.mix||($.mix=$.extend);var c=d,f=e;return $.mix(b.prototype,{_init:function(){var a,b=this,d=b.get("el"),e=[];b.hands=e,b.frequency=1e3,b._notify=[],a=b.config.template&&""!=b.config.template?b.config.template:$(d).html();var f=b.get("varRegular");f.lastIndex=0,$(d).html(a.replace(f,function(a,c){("u"===c||"s-ext"===c)&&(b.frequency=100);var d="";return"s-ext"===c?(e.push({type:"s"}),e.push({type:"u"}),d=b._html("","s","handlet")+b._html(".","","digital")+b._html("","u","handlet")):e.push({type:c}),b._html(d,c,"hand")}));var g=b.get("clock");Array.prototype.forEach.call(e,function(a){var b,c=a.type,e=100;for(a.node=$(".hand-"+c,d),b=g.length-3;b>-1&&c!==g[b];b-=3)e*=g[b+1];a.base=e,a.radix=g[b+1],a.bits=g[b+2]}),b._getLeft(),b._reflow();var h=b._reflow;b._reflow=function(){return h.apply(b,arguments)},c.add(b._reflow,b.frequency),d.show()},_getLeft:function(){var a=1e3*this.get("leftTime"),b=this.get("stopPoint");!a&&b&&(a=b-(new Date).getTime()),this.left=a-a%this.frequency},_reflow:function(a){a=a||0;var b=this;return b.left=b.left-b.frequency*a,Array.prototype.forEach.call(b.hands,function(a){a.lastValue=a.value,a.value=Math.floor(b.left/a.base)%a.radix}),b._repaint(),b._notify[b.left]&&Array.prototype.forEach.call(b._notify[b.left],function(a){a.call(b)}),b.left<1&&c.remove(b._reflow),b},_repaint:function(){f[this.get("effect")].paint.apply(this)},_toDigitals:function(a,b){a=0>a?0:a;for(var c=[];b--;)c[b]=a%10,a=Math.floor(a/10);return c},_html:function(a,b,c){switch($.isArray(a)&&(a=a.join("")),c){case"hand":b=c+" hand-"+b;break;case"handlet":b=c+" hand-"+b;break;case"digital":b="."===a?c+" "+c+"-point "+b:c+" "+c+"-"+a+" "+b}return'<b class="'+b+'">'+a+"</b>"},notify:function(a,b){a=1e3*a,a-=a%this.frequency;var c=this._notify[a]||[];return c.push(b),this._notify[a]=c,this}}),$.mix(b.prototype,{get:function(a){var b=this;return b.config[a]},set:function(a,b){var c=this;c.config[a]=b}}),a=b}(),c.exports=f});define("guang/m-activity/0.0.99/p/content/common2/header",[],function(require){function a(a){this.json=a.json;this.init()}require("guang/m-activity/0.0.99/p/content/common2/header.css");require("guang/m-activity/0.0.99/p/content/common2/util");var b=require("guang/m-activity/0.0.99/p/content/common2/header.jst");require("guang/m-activity/0.0.99/p/content/common2/event-custom");var c=require("kg/km-countdown/0.0.6/index");a.prototype={init:function(){this.render();this._event()},render:function(){var a=b({title:this.json.title});this.box&&this.box.remove();this.box=$(a);this.box.insertBefore($(document.body).children()[0]);this.initCountdown();$(document).trigger("scroll")},initCountdown:function(){var a=this,b=c({el:this.box.find(".countdown")});b.notify(0,function(){$(a).trigger("countdown_end")})},_event:function(){var a=this;$(document).on("scroll",function(){var b=$(document.body).scrollTop();0>=b?a.box.addClass("not-opacity"):a.box.removeClass("not-opacity")});$(document).trigger("scroll")}};return a});