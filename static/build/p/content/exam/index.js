$.importStyle("body{padding-top:1.06666667rem}.header{display:-webkit-box;position:fixed;left:0;top:0;width:100%;box-sizing:border-box;height:1.06666667rem;line-height:.8rem;padding:.13333333rem .2rem;background-color:rgba(194,46,27,.8);color:#fff;font-size:.53333333rem}.header .back{display:inline-block}.header .search{-webkit-box-flex:1}.header .title{-webkit-box-flex:1}.header .message{display:inline-block}.header.not-opacity{background-color:#c22e1b}.header .countdown{-webkit-animation:scale 1s;animation:scale 1s}@-webkit-keyframes scale{0%{-webkit-transform:scale(0.8);transform:scale(0.8)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes scale{0%{-webkit-transform:scale(0.8);transform:scale(0.8)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}");define("guang/m-activity/0.0.99/p/content/common2/header.jst",[],function(require,exports,module){module.exports=function(obj){obj||(obj={});var __p="",__e=function(a){a=String(a);var b=/[&<>'"]/g,c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};a=a.replace(b,function(a){return c[a]});return a};with(obj)__p+='<div class="header">\n  <div class="title">\u4e60\u4e3b\u5e2d\u4e2d\u4e1c\u4e4b\u884c\u610f\u6db5\u6df1\u8fdc</div>\n  <div class="countdown" data-config="{\'leftTime\':5,\'effetc\':\'slide\'}">'+__e("${m}:${s}")+"</div>\n</div>";return __p}});$.importStyle(".cd-flip .handlet,.cd-large .hand{background:url(http://img02.taobaocdn.com/tps/i2/T1N4t1XfxgXXXXXXXX-95-35.png) no-repeat}.cd-large,.cd-lite,.cd-medium{display:none;color:grey;font-size:12px;font-family:arial}.cd-large .clock,.cd-lite .clock,.cd-medium .clock{font-weight:700}.cd-large b,.cd-lite b,.cd-medium b{text-decoration:none}.cd-large .hand,.cd-lite .hand,.cd-medium .hand{margin:0 3px}.cd-large .hand{display:inline-block;padding:0 2px;width:32px;height:35px;line-height:35px}.cd-large .hand-s-ext{width:59px;background-position:-36px 0}.cd-large .digital,.cd-lite .digital,.cd-medium .digital{color:#f60;font-size:14px;font-weight:400}.cd-medium .digital{color:#404040;font-size:24px}.cd-large .digital{color:#fff;font-size:28px}.cd-slide .hand{display:inline-block;*position:relative;overflow:hidden;vertical-align:middle}.cd-slide .hand b{top:0}.cd-slide .slide-wrap{position:relative;float:left}.cd-slide .digital{float:left}.cd-slide .slide-wrap .digital{clear:left}.cd-flip .hand{position:relative;vertical-align:middle}.cd-flip .handlet{position:absolute;top:0;left:0;padding:0 2px;width:32px;height:35px}.cd-slide .km-countdown-anim{top:0!important;-webkit-transition:top .5s ease-in;transition:top .5s ease-in}.cd-flip .km-countdown-anim-part1{-webkit-transition:top .15s,height .15s;transition:top .15s,height .15s}.cd-flip .km-countdown-anim-part2{-webkit-transition:height .3s cubic-bezier(.215,.61,.355,1);transition:height .3s cubic-bezier(.215,.61,.355,1)}");define("kg/km-countdown/0.0.6/timer",[],function(a,b,c){var d;d=function(a){"use strict";function b(){for(;d.length;)d.shift()();var a=+new Date-b.nextTime,e=1+Math.floor(a/100);a=100-a%100,b.nextTime+=100*e;var f,g,h,i;for(h=0,i=c.length;i>h;h+=2)f=c[h+1],0===f?c[h](e):(f+=2*e-1,g=Math.floor(f/20),g>0&&c[h](g),c[h+1]=f%20+1);setTimeout(b,a)}var c=[],d=[];return b.nextTime=+new Date,b(),a={add:function(a,b){d.push(function(){c.push(a),c.push(1e3===b?1:0)})},remove:function(a){d.push(function(){var b=$(c).indexOf(a);-1!==b&&c.splice($(c).indexOf(a),2)})}}}(),c.exports=d});define("kg/km-countdown/0.0.6/effect",[],function(a,b,c){var d;d=function(a){"use strict";var b="transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",c={normal:{paint:function(){var a,b=this;Array.prototype.forEach.call(b.hands,function(c){c.lastValue!==c.value&&(a="",Array.prototype.forEach.call(b._toDigitals(c.value,c.bits),function(c){a+=b._html(c,"","digital")}),c.node.html(a))})}},slide:{paint:function(){var a,b,d,e,f=this;Array.prototype.forEach.call(f.hands,function(c){if(c.lastValue!==c.value){for(a="",b=c.bits,d=f._toDigitals(c.value,b),e=void 0===c.lastValue?d:f._toDigitals(c.lastValue,b);b--;)a=e[b]!==d[b]?f._html([f._html(d[b],"","digital"),f._html(e[b],"","digital")],"slide-wrap")+a:f._html(d[b],"","digital")+a;c.node.html(a)}}),c.slide.afterPaint.apply(f)},afterPaint:function(){Array.prototype.forEach.call(this.hands,function(a){if(a.lastValue!==a.value&&void 0!==a.lastValue){var b=a.node,c=$(".digital",b).height();b.css("height",c);var d=$(".slide-wrap",b);d.css("top",-c),setTimeout(function(){d.addClass("km-countdown-anim")},0)}})}},flip:{paint:function(){var a,b,d,e=this;Array.prototype.forEach.call(e.hands,function(c){c.lastValue!==c.value&&(a="",b="",d="",Array.prototype.forEach.call(e._toDigitals(c.value,c.bits),function(a){b+=e._html(a,"","digital")}),void 0===c.lastValue?c.node.html(b):(b=e._html(b,"handlet"),Array.prototype.forEach.call(e._toDigitals(c.lastValue,c.bits),function(a){d+=e._html(a,"","digital")}),a=e._html(d,"handlet mask"),d=e._html(d,"handlet"),c.node.html(b+d+a)))}),c.flip.afterPaint.apply(e)},afterPaint:function(){var a=this;Array.prototype.forEach.call(this.hands,function(c){if(c.lastValue!==c.value&&void 0!==c.lastValue){var d=c.node,e=$(".handlet",d),f=$(e[0]),g=$(e[1]),h=$(e[2]),i=d.width(),j=d.height(),k=Math.floor(j/2);g.css({clip:"rect("+k+"px, "+i+"px, "+j+"px, 0)"}),h.css({overflow:"hidden",height:k+"px"}),h.off(b,a.callback),a.callback=function(){h.html(f.html()),h.removeClass("km-countdown-anim-part1").css({top:0,height:k+"px",clip:"rect("+k+"px, "+i+"px, "+j+"px, 0)"}),setTimeout(function(){h.css({height:j+"px"}).addClass("km-countdown-anim-part2")},0)},setTimeout(function(){h.css({top:k+"px",height:0}).addClass("km-countdown-anim-part1").on(b,a.callback)},0)}})}}};return a=c}(),c.exports=d});define("kg/km-countdown/0.0.6/index",["kg/km-countdown/0.0.6/index.css"],function(a,b,c){var d,e,f;a("kg/km-countdown/0.0.6/index.css");d=function(a){"use strict";function b(){for(;d.length;)d.shift()();var a=+new Date-b.nextTime,e=1+Math.floor(a/100);a=100-a%100,b.nextTime+=100*e;var f,g,h,i;for(h=0,i=c.length;i>h;h+=2)f=c[h+1],0===f?c[h](e):(f+=2*e-1,g=Math.floor(f/20),g>0&&c[h](g),c[h+1]=f%20+1);setTimeout(b,a)}var c=[],d=[];return b.nextTime=+new Date,b(),a={add:function(a,b){d.push(function(){c.push(a),c.push(1e3===b?1:0)})},remove:function(a){d.push(function(){var b=$(c).indexOf(a);-1!==b&&c.splice($(c).indexOf(a),2)})}}}(),e=function(a){"use strict";var b="transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",c={normal:{paint:function(){var a,b=this;Array.prototype.forEach.call(b.hands,function(c){c.lastValue!==c.value&&(a="",Array.prototype.forEach.call(b._toDigitals(c.value,c.bits),function(c){a+=b._html(c,"","digital")}),c.node.html(a))})}},slide:{paint:function(){var a,b,d,e,f=this;Array.prototype.forEach.call(f.hands,function(c){if(c.lastValue!==c.value){for(a="",b=c.bits,d=f._toDigitals(c.value,b),e=void 0===c.lastValue?d:f._toDigitals(c.lastValue,b);b--;)a=e[b]!==d[b]?f._html([f._html(d[b],"","digital"),f._html(e[b],"","digital")],"slide-wrap")+a:f._html(d[b],"","digital")+a;c.node.html(a)}}),c.slide.afterPaint.apply(f)},afterPaint:function(){Array.prototype.forEach.call(this.hands,function(a){if(a.lastValue!==a.value&&void 0!==a.lastValue){var b=a.node,c=$(".digital",b).height();b.css("height",c);var d=$(".slide-wrap",b);d.css("top",-c),setTimeout(function(){d.addClass("km-countdown-anim")},0)}})}},flip:{paint:function(){var a,b,d,e=this;Array.prototype.forEach.call(e.hands,function(c){c.lastValue!==c.value&&(a="",b="",d="",Array.prototype.forEach.call(e._toDigitals(c.value,c.bits),function(a){b+=e._html(a,"","digital")}),void 0===c.lastValue?c.node.html(b):(b=e._html(b,"handlet"),Array.prototype.forEach.call(e._toDigitals(c.lastValue,c.bits),function(a){d+=e._html(a,"","digital")}),a=e._html(d,"handlet mask"),d=e._html(d,"handlet"),c.node.html(b+d+a)))}),c.flip.afterPaint.apply(e)},afterPaint:function(){var a=this;Array.prototype.forEach.call(this.hands,function(c){if(c.lastValue!==c.value&&void 0!==c.lastValue){var d=c.node,e=$(".handlet",d),f=$(e[0]),g=$(e[1]),h=$(e[2]),i=d.width(),j=d.height(),k=Math.floor(j/2);g.css({clip:"rect("+k+"px, "+i+"px, "+j+"px, 0)"}),h.css({overflow:"hidden",height:k+"px"}),h.off(b,a.callback),a.callback=function(){h.html(f.html()),h.removeClass("km-countdown-anim-part1").css({top:0,height:k+"px",clip:"rect("+k+"px, "+i+"px, "+j+"px, 0)"}),setTimeout(function(){h.css({height:j+"px"}).addClass("km-countdown-anim-part2")},0)},setTimeout(function(){h.css({top:k+"px",height:0}).addClass("km-countdown-anim-part1").on(b,a.callback)},0)}})}}};return a=c}(),f=function(a){"use strict";function b(a){if(!(this instanceof b))return new b(a);if(a.el=$(a.el),a.el){var c=a.el.attr("data-config");c&&(c=JSON.parse(c.replace(/'/g,'"')),a=$.mix(c,a)),this.config=$.mix({el:"",stopPoint:"",leftTime:0,template:"",varRegular:/\$\{([\-\w]+)\}/g,clock:["d",100,2,"h",24,2,"m",60,2,"s",60,2,"u",10,1],effect:"normal"},a),this._init()}}$.mix||($.mix=$.extend);var c=d,f=e;return $.mix(b.prototype,{_init:function(){var a,b=this,d=b.get("el"),e=[];b.hands=e,b.frequency=1e3,b._notify=[],a=b.config.template&&""!=b.config.template?b.config.template:$(d).html();var f=b.get("varRegular");f.lastIndex=0,$(d).html(a.replace(f,function(a,c){("u"===c||"s-ext"===c)&&(b.frequency=100);var d="";return"s-ext"===c?(e.push({type:"s"}),e.push({type:"u"}),d=b._html("","s","handlet")+b._html(".","","digital")+b._html("","u","handlet")):e.push({type:c}),b._html(d,c,"hand")}));var g=b.get("clock");Array.prototype.forEach.call(e,function(a){var b,c=a.type,e=100;for(a.node=$(".hand-"+c,d),b=g.length-3;b>-1&&c!==g[b];b-=3)e*=g[b+1];a.base=e,a.radix=g[b+1],a.bits=g[b+2]}),b._getLeft(),b._reflow();var h=b._reflow;b._reflow=function(){return h.apply(b,arguments)},c.add(b._reflow,b.frequency),d.show()},_getLeft:function(){var a=1e3*this.get("leftTime"),b=this.get("stopPoint");!a&&b&&(a=b-(new Date).getTime()),this.left=a-a%this.frequency},_reflow:function(a){a=a||0;var b=this;return b.left=b.left-b.frequency*a,Array.prototype.forEach.call(b.hands,function(a){a.lastValue=a.value,a.value=Math.floor(b.left/a.base)%a.radix}),b._repaint(),b._notify[b.left]&&Array.prototype.forEach.call(b._notify[b.left],function(a){a.call(b)}),b.left<1&&c.remove(b._reflow),b},_repaint:function(){f[this.get("effect")].paint.apply(this)},_toDigitals:function(a,b){a=0>a?0:a;for(var c=[];b--;)c[b]=a%10,a=Math.floor(a/10);return c},_html:function(a,b,c){switch($.isArray(a)&&(a=a.join("")),c){case"hand":b=c+" hand-"+b;break;case"handlet":b=c+" hand-"+b;break;case"digital":b="."===a?c+" "+c+"-point "+b:c+" "+c+"-"+a+" "+b}return'<b class="'+b+'">'+a+"</b>"},notify:function(a,b){a=1e3*a,a-=a%this.frequency;var c=this._notify[a]||[];return c.push(b),this._notify[a]=c,this}}),$.mix(b.prototype,{get:function(a){var b=this;return b.config[a]},set:function(a,b){var c=this;c.config[a]=b}}),a=b}(),c.exports=f});define("guang/m-activity/0.0.99/p/content/common2/header",[],function(require){function a(){this.init()}require("guang/m-activity/0.0.99/p/content/common2/header.css");require("guang/m-activity/0.0.99/p/content/common2/util");var b=require("guang/m-activity/0.0.99/p/content/common2/header.jst");require("guang/m-activity/0.0.99/p/content/common2/event-custom");var c=require("kg/km-countdown/0.0.6/index");a.prototype={init:function(){this.render();this._event()},render:function(){var a=b();this.box&&this.box.remove();this.box=$(a);this.box.insertBefore($(document.body).children()[0]);this.initCountdown();$(document).trigger("scroll")},initCountdown:function(){var a=this,b=c({el:this.box.find(".countdown")});b.notify(0,function(){$(a).trigger("countdown_end")})},_event:function(){var a=this;$(document).on("scroll",function(){var b=$(document.body).scrollTop();0>=b?a.box.addClass("not-opacity"):a.box.removeClass("not-opacity")});$(document).trigger("scroll")}};return a});$.importStyle("body{padding-bottom:1.28rem}#bottom-bar{position:fixed;opacity:1;bottom:-1px;left:0;width:100%;height:1.28rem;line-height:1.28rem;background-color:#c22e1b}#bottom-bar .bottom-bar-inner{display:-webkit-box}#bottom-bar .bottom-bar-inner .bottom-bar-item{display:block;-webkit-box-flex:1;text-align:center;color:#eee}#bottom-bar .bottom-bar-inner .bottom-bar-item .icon{diplay:inline-block}#bottom-bar .bottom-bar-inner .bottom-bar-item span{display:inline-block}#bottom-bar .bottom-bar-inner .bottom-bar-item.current{color:#333}#bottom-bar .bottom-bar-inner .submit-btn{display:inline-block;color:#eee}#bottom-bar .page-index{-webkit-animation:scale 1s;animation:scale 1s}@-webkit-keyframes scale{0%{-webkit-transform:scale(0.8);transform:scale(0.8)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes scale{0%{-webkit-transform:scale(0.8);transform:scale(0.8)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}");define("guang/m-activity/0.0.99/p/content/common2/bottom-bar.jst",[],function(require,exports,module){module.exports=function(obj){obj||(obj={});var __p="",__e=function(a){a=String(a);var b=/[&<>'"]/g,c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};a=a.replace(b,function(a){return c[a]});return a};Array.prototype.join;with(obj){__p+='<div id="bottom-bar" class="bottom-bar">\n  <div class="bottom-bar-inner">\n    <a class="bottom-bar-item">\n      <i class="icon icon-back"></i>\n      <span class="back">\u8fd4\u56de</span>\n    </a>\n    <div class="bottom-bar-item">\n      <i class="icon icon-submit"></i>\n      ';__p+=data.pageIndex>data.maxIndex?'\n        <a class="submit-btn" href="panel_my.html">\u5b8c\u6210\u5b66\u4e60</a>\n      ':'\n        <span class="submit-btn disabled">\u8bf7\u9605\u8bfb\u5185\u5bb9</span>\n      ';__p+='\n    </div>\n    <a class="bottom-bar-item">\n      <i class="icon icon-pagecount"></i>\n      <span class="page-index">'+__e(data.pageIndex)+"/"+__e(data.maxIndex)+"</span>\n    </a>\n  </div>\n</div>"}return __p}});define("guang/m-activity/0.0.99/p/content/common2/bottom-bar",[],function(require){function a(a){var a=a||{};this.tabIndex=a.tabIndex;this.init()}require("guang/m-activity/0.0.99/p/content/common2/bottom-bar.css");var b=require("guang/m-activity/0.0.99/p/content/common2/bottom-bar.jst"),c=0;$.extend(a.prototype,{init:function(){this.render();this._event()},render:function(){var a=this;this.freeze=!0;var d=b({data:{pageIndex:++c,maxIndex:3}});this.box&&this.box.remove();this.box=$(d);this.box.appendTo($(document.body));a.box.on("click",".back",function(){window.history.back()}).on("click",".submit-btn",function(){a.freeze?alert("\u8bf7\u5148\u5b8c\u6210\u9605\u8bfb\uff0c\u518d\u63d0\u4ea4\u7b54\u6848\uff0c\u8c22\u8c22\uff01"):$(a).trigger("submit_form")})},_event:function(){},sleep:function(){},wakeup:function(){this.freeze=!1;this.box.css("opacity",1);this.box.find(".submit-btn").html("\u63d0\u4ea4\u7b54\u6848")}});return a});$.importStyle(".MP_Editor{padding:0rem .26666667rem}.MP_Editor p{margin:.4rem 0rem;font-size:.32rem;line-height:.8rem}.exam-form .radio-label{margin-right:.26666667rem;word-wrap:normal;word-break:normal;white-space:nowrap}.exam-form input{margin-right:.13333333rem}");$.importStyle(".s-loading{position:fixed;z-index:999999;top:0;left:0;width:100%;height:100%;vertical-align:middle;background-color:rgba(0,0,0,.2)}.s-loading strong{position:relative;top:50%;display:block;margin:0 auto;margin-top:-1.2rem;width:2.4rem;height:2.4rem;line-height:2.4rem;color:#ececec;border-radius:.4rem;text-align:center;background-color:rgba(0,0,0,.8)}");define("guang/m-activity/0.0.99/p/content/common2/loading",[],function(require){function a(){this.init()}require("guang/m-activity/0.0.99/p/content/common2/loading.css");var b=null,c=null;$.extend(a.prototype,{init:function(){this.render()},render:function(){var a=this;b&&b.remove();c&&clearTimeout(c);c=setTimeout(function(){b.remove();$(a).trigger("success")},1500);b=$('<div class="s-loading"><strong>\u6b63\u5728\u8bf7\u6c42...</strong></div>');b.appendTo($(document.body))},destory:function(){}});return a});define("guang/m-activity/0.0.99/p/content/common2/context.jst",[],function(require,exports,module){module.exports=function(obj){obj||(obj={});var __p="";with(obj)__p+='<div class="MP_Editor"><p>\u3000\u3000\u65b0\u5e74\u590d\u59cb,\u4e07\u7269\u5f85\u65b0\u3002\u968f\u7740\u56fd\u5bb6\u4e3b\u5e2d\u4e60\u8fd1\u5e73\u5373\u5c06\u5c55\u5f00\u5bf9\u6c99\u7279\u3001\u57c3\u53ca\u3001\u4f0a\u6717\u7684\u56fd\u4e8b\u8bbf\u95ee,\u4e2d\u56fd\u5143\u9996\u5916\u4ea4\u5c06\u5728\u51ac\u53bb\u6625\u6765\u4e4b\u9645\u518d\u5ea6\u626c\u5e06\u8d77\u822a\u3002</p>\n<p>\u3000\u3000\u5fd7\u5408\u8005,\u4e0d\u4ee5\u5c71\u6d77\u4e3a\u8fdc\u3002\u5343\u767e\u5e74\u6765,\u4e2d\u56fd\u4e0e\u4e2d\u4e1c\u7684\u9646\u4e0a\u4e1d\u7ef8\u4e4b\u8def\u548c\u6d77\u4e0a\u9999\u6599\u4e4b\u8def\u8d70\u5728\u4e86\u53e4\u4ee3\u4e16\u754c\u5404\u6c11\u65cf\u53cb\u597d\u4ea4\u5f80\u7684\u524d\u5217\u3002\u8fd1\u4ee3\u4ee5\u6765,\u65e0\u8bba\u56fd\u9645\u98ce\u4e91\u5982\u4f55\u53d8\u5e7b,\u53cc\u65b9\u5728\u4e89\u53d6\u6c11\u65cf\u72ec\u7acb\u4e2d\u76f8\u4e92\u8ba4\u540c,\u5728\u8c0b\u6c42\u548c\u5e73\u53d1\u5c55\u4e2d\u76f8\u4e92\u652f\u6301,\u5728\u7167\u987e\u5f7c\u6b64\u91cd\u5927\u5229\u76ca\u4e0e\u6838\u5fc3\u5173\u5207\u65f6\u76f8\u4e92\u5c0a\u91cd\u4fe1\u8d56,\u59cb\u7ec8\u662f\u597d\u670b\u53cb\u3001\u597d\u5144\u5f1f\u3001\u597d\u4f19\u4f34\u3002</p>\n<p>\u3000\u3000\u6b63\u5982\u4e60\u4e3b\u5e2d\u6240\u8bf4,\u4e2d\u56fd\u4e0e\u4e2d\u4e1c\u56fd\u5bb6\u5173\u7cfb\u6b63\u5904\u4e8e\u627f\u4e0a\u542f\u4e0b,\u7ee7\u5f80\u5f00\u6765\u7684\u65b0\u8d77\u70b9\u4e0a,\u548c\u5e73\u5408\u4f5c\u3001\u5f00\u653e\u5305\u5bb9\u3001\u4e92\u5b66\u4e92\u9274\u3001\u4e92\u5229\u5171\u8d62\u5df2\u6210\u4e3a\u53cc\u65b9\u5173\u7cfb\u53d1\u5c55\u7684\u91cd\u8981\u7279\u5f81\u3002\u4e60\u4e3b\u5e2d\u6b64\u6b21\u5230\u8bbf\u7684\u4e2d\u4e1c\u4e09\u56fd,\u7686\u662f\u4e2d\u65b9\u5171\u5efa\u201c\u4e00\u5e26\u4e00\u8def\u201d\u7684\u91cd\u8981\u5408\u4f5c\u4f19\u4f34\u548c\u79ef\u6781\u652f\u6301\u8005,\u6b64\u884c\u5fc5\u5c06\u4e3a\u53cc\u65b9\u4e92\u8054\u4e92\u901a\u6ce8\u5165\u65b0\u52a8\u529b,\u4e3a\u53cc\u65b9\u52a1\u5b9e\u5408\u4f5c\u5f15\u9886\u65b0\u822a\u7a0b\u3002</p>\n<p>\u3000\u3000\u5f53\u524d,\u4e2d\u56fd\u4e0e\u4e2d\u4e1c\u56fd\u5bb6\u90fd\u5904\u5728\u7ecf\u6d4e\u793e\u4f1a\u53d1\u5c55\u7684\u5173\u952e\u9636\u6bb5,\u5982\u4f55\u628a\u63e1\u672a\u6765\u5341\u5e74\u7684\u6218\u7565\u53d1\u5c55\u671f\u662f\u53cc\u65b9\u5171\u540c\u9762\u4e34\u7684\u91cd\u5927\u8bfe\u9898\u548c\u8270\u5de8\u6311\u6218\u3002\u4e2d\u4e1c\u5730\u533a\u591a\u4e2a\u56fd\u5bb6\u9677\u5165\u6301\u7eed\u52a8\u8361,\u91cd\u632f\u56fd\u5185\u7ecf\u6d4e\u3001\u63a8\u52a8\u793e\u4f1a\u53d1\u5c55\u662f\u5f53\u52a1\u4e4b\u6025,\u7f8e\u56fd\u548c\u897f\u65b9\u56fd\u5bb6\u7684\u5e72\u6d89\u4ee5\u53ca\u6050\u6016\u4e3b\u4e49\u6a2a\u884c\u8086\u8650\u66f4\u8ba9\u4e2d\u4e1c\u5730\u533a\u4e71\u8c61\u4e1b\u751f,\u548c\u5e73\u8fdb\u7a0b\u6b65\u5c65\u7ef4\u8270\u3002</p>\n<p>\u3000\u3000\u6cbb\u4e71\u5f53\u601d\u533b\u672c\u3002\u4e2d\u56fd\u59cb\u7ec8\u662f\u4e2d\u4e1c\u548c\u5e73\u8fdb\u7a0b\u7684\u575a\u5b9a\u652f\u6301\u8005\u548c\u63a8\u52a8\u8005,\u575a\u6301\u901a\u8fc7\u653f\u6cbb\u534f\u5546\u548c\u5e73\u7b49\u5bf9\u8bdd\u7b49\u548c\u5e73\u624b\u6bb5\u5316\u89e3\u4e2d\u4e1c\u96be\u9898,\u5b9e\u73b0\u5730\u533a\u7a33\u5b9a\u548c\u5e73\u3002\u4e2d\u56fd\u81f4\u529b\u4e8e\u52a0\u5f3a\u4e0e\u4e2d\u4e1c\u56fd\u5bb6\u5728\u53cd\u6050\u548c\u53bb\u6781\u7aef\u5316\u9886\u57df\u5408\u4f5c,\u652f\u6301\u4e2d\u4e1c\u56fd\u5bb6\u53cd\u6050\u80fd\u529b\u5efa\u8bbe,\u5e76\u5f3a\u8c03\u53cd\u5bf9\u5c06\u6050\u6016\u4e3b\u4e49\u540c\u7279\u5b9a\u7684\u6c11\u65cf\u3001\u5b97\u6559\u6302\u94a9\u3002</p>\n<p>\u3000\u3000\u4e2d\u56fd\u63d0\u51fa\u4e2d\u963f\u5171\u5efa\u201c\u4e00\u5e26\u4e00\u8def\u201d,\u6784\u5efa\u4ee5\u80fd\u6e90\u5408\u4f5c\u4e3a\u4e3b\u8f74,\u4ee5\u57fa\u7840\u8bbe\u65bd\u5efa\u8bbe\u3001\u8d38\u6613\u548c\u6295\u8d44\u4fbf\u5229\u5316\u4e3a\u4e24\u7ffc,\u4ee5\u6838\u80fd\u3001\u822a\u5929\u536b\u661f\u3001\u65b0\u80fd\u6e90\u4e09\u5927\u9ad8\u65b0\u9886\u57df\u4e3a\u7a81\u7834\u53e3\u7684\u201c1+2+3\u201d\u5408\u4f5c\u683c\u5c40\u3002\u4e2d\u56fd\u653f\u5e9c1\u670813\u65e5\u53d1\u5e03\u7684\u300a\u4e2d\u56fd\u5bf9\u963f\u62c9\u4f2f\u56fd\u5bb6\u653f\u7b56\u6587\u4ef6\u300b\u4f5c\u4e3a\u4e2d\u56fd\u653f\u5e9c\u5236\u8ba2\u7684\u9996\u4efd\u5bf9\u963f\u62c9\u4f2f\u56fd\u5bb6\u653f\u7b56\u6587\u4ef6,\u66f4\u4e3a\u4e2d\u963f\u4e92\u5229\u5408\u4f5c\u7ed8\u5c31\u4e86\u7f8e\u597d\u84dd\u56fe\u3002\u4eba\u4eec\u671f\u5f85\u4e60\u4e3b\u5e2d\u6b64\u6b21\u8bbf\u95ee\u5c06\u8fdb\u4e00\u6b65\u540c\u6709\u5173\u56fd\u5bb6\u628a\u4e2d\u56fd\u5021\u8bae\u843d\u5230\u5b9e\u5904,\u5c06\u201c\u4e00\u5e26\u4e00\u8def\u201d\u4e0e\u4e2d\u4e1c\u5404\u56fd\u7684\u53d1\u5c55\u6218\u7565\u8fdb\u4e00\u6b65\u5bf9\u63a5\u3002</p>\n<p>\u3000\u3000\u56fd\u4e4b\u4ea4\u5728\u4e8e\u6c11\u76f8\u4eb2,\u6c11\u76f8\u4eb2\u5728\u4e8e\u5fc3\u76f8\u901a\u3002\u4e2d\u56fd\u4e0e\u4e2d\u4e1c\u56fd\u5bb6\u90fd\u66fe\u662f\u707f\u70c2\u8f89\u714c\u6587\u660e\u7684\u7f14\u9020\u8005,\u5e76\u5728\u5386\u53f2\u957f\u6cb3\u4e2d\u4fdd\u6301\u5bc6\u5207\u4ea4\u6d41\u4e0e\u5bf9\u8bdd\u3002\u8fd1\u5e74\u6765,\u53cc\u65b9\u6587\u5316\u4ea4\u6d41\u52bf\u5934\u559c\u4eba,\u53cb\u597d\u5e74\u548c\u6587\u5316\u5e74\u7b49\u6d3b\u52a8\u4eae\u70b9\u9891\u73b0,\u5404\u5c42\u7ea7\u548c\u9886\u57df\u4eba\u5458\u5f80\u6765\u9891\u7e41,\u6c11\u95f4\u4e92\u52a8\u548c\u8054\u7cfb\u65e5\u76ca\u6df1\u5165,\u4e3a\u53cc\u65b9\u5168\u65b9\u4f4d\u5408\u4f5c\u5960\u5b9a\u4e86\u575a\u5b9e\u7684\u653f\u6cbb\u4e92\u4fe1\u548c\u6c11\u610f\u8206\u8bba\u57fa\u7840\u3002</p>\n<p>\u3000\u30002016\u5e74\u4e2d\u56fd\u5143\u9996\u5916\u4ea4\u7684\u5f00\u7bc7\u4e4b\u4f5c\u5c06\u4f7f\u4e2d\u4e1c\u56fd\u5bb6\u548c\u6c11\u4f17\u8fd1\u8ddd\u79bb\u611f\u53d7\u5230\u4e2d\u56fd\u5bf9\u6587\u660e\u591a\u6837\u6027\u7684\u5c0a\u91cd,\u575a\u6301\u4e0d\u540c\u6587\u5316\u548c\u5e73\u5171\u5b58\u3001\u5171\u751f\u7684\u8bda\u610f,\u4ee5\u53ca\u7740\u529b\u4fc3\u8fdb\u4e0d\u540c\u6c11\u65cf\u95f4\u6587\u5316\u53d6\u957f\u8865\u77ed,\u5171\u540c\u53d1\u5c55\u7684\u51b3\u5fc3\u548c\u5b9a\u529b\u3002</p>\n<p>\u3000\u3000\u56de\u671b\u5386\u53f2,\u4e2d\u56fd\u4e0e\u4e2d\u4e1c\u867d\u6709\u5c71\u6c34\u963b\u9694,\u5374\u56e0\u53e4\u4e1d\u8def\u7ed3\u7f18\u3002\u5982\u4eca,\u201c\u4e00\u5e26\u4e00\u8def\u201d\u53c8\u518d\u6b21\u5c06\u5f7c\u6b64\u547d\u8fd0\u7262\u7262\u8054\u7cfb\u8d77\u6765,\u53cc\u65b9\u643a\u624b\u5408\u4f5c,\u5171\u8c0b\u548c\u5e73\u53d1\u5c55\u5df2\u662f\u5927\u52bf\u6240\u8d8b\u3002\u4e60\u4e3b\u5e2d\u4e2d\u4e1c\u9996\u8bbf,\u5fc5\u5c06\u4e3a\u4e2d\u56fd\u540c\u4e2d\u4e1c\u56fd\u5bb6\u52a0\u5f3a\u6218\u7565\u5408\u4f5c\u5173\u7cfb\u6807\u6ce8\u65b0\u7684\u5386\u53f2\u8d77\u70b9,\u7ed8\u5236\u65b0\u7684\u5b8f\u4f1f\u84dd\u56fe,\u594f\u54cd\u66f4\u4e3a\u58ee\u9614\u7684\u4e50\u7ae0\u3002</p>\n<form class="exam-form">\n  <div class="ef-item">\n    <p>1. 2015\u4e24\u4f1a\u5f00\u59cb\u7684\u65f6\u95f4\u662f\uff1a\u8bf7\u9009\u62e9\u6b63\u786e\u7684\u7b54\u6848</p>\n    <p>\n      <label class="radio-label"><input type="radio" name="q1" value="1">2015-01-01</label>\n      <label class="radio-label"><input type="radio" name="q1" value="1">2015-02-16</label>\n      <label class="radio-label"><input type="radio" name="q1" value="1">2015-03-05</label>\n      <label class="radio-label"><input type="radio" name="q1" value="1">2015-04-06</label>\n    </p>\n  </div>\n  <div class="ef-item">\n    <p>2. 2015\u4e24\u4f1a\u5f00\u59cb\u7684\u65f6\u95f4\u662f\uff1a\u8bf7\u9009\u62e9\u6b63\u786e\u7684\u7b54\u6848</p>\n    <p>\n      <label class="radio-label"><input type="radio" name="q2" value="1">2015-01-01</label>\n      <label class="radio-label"><input type="radio" name="q2" value="1">2015-02-16</label>\n      <label class="radio-label"><input type="radio" name="q2" value="1">2015-04-06</label>\n      <label class="radio-label"><input type="radio" name="q2" value="1">2015-03-05</label>\n    </p>\n  </div>\n  <div class="ef-item">\n    <p>3. 2015\u4e24\u4f1a\u5f00\u59cb\u7684\u65f6\u95f4\u662f\uff1a\u8bf7\u9009\u62e9\u6b63\u786e\u7684\u7b54\u6848</p>\n    <p>\n      <label class="radio-label"><input type="radio" name="q3" value="1">2015-01-01</label>\n      <label class="radio-label"><input type="radio" name="q3" value="1">2015-03-05</label>\n      <label class="radio-label"><input type="radio" name="q3" value="1">2015-02-16</label>\n      <label class="radio-label"><input type="radio" name="q3" value="1">2015-04-06</label>\n    </p>\n  </div>\n</form>\n</div>';return __p}});define("guang/m-activity/0.0.99/p/content/common2/context",[],function(require){function a(){this.init()}require("guang/m-activity/0.0.99/p/content/common2/context.css");var b=require("guang/m-activity/0.0.99/p/content/common2/loading"),c=require("guang/m-activity/0.0.99/p/content/common2/context.jst");$.extend(a.prototype,{init:function(a){this.render()},render:function(){var a=c();this.box&&this.box.remove();$(document.body).scrollTop(0);this.box=$(a);this.box.appendTo($(document.body))},submitForm:function(){var a=this,c=this.box.find(".exam-form");c[0].elements;this.getFormData(c[0]);var d=new b;$(d).on("success",function(){a.render();$(a).trigger("next_page")})},getFormData:function(a){for(var b=a.elements,c={},d=0;d<b.length;++d){var e=b[d].name;c[e]||(c[e]="");b[d].checked&&(c[e]=b[d].value)}return c}});return a});define("guang/m-activity/0.0.99/p/content/exam/index",[],function(require){var a=require("guang/m-activity/0.0.99/p/content/common2/header"),b=require("guang/m-activity/0.0.99/p/content/common2/bottom-bar"),c=require("guang/m-activity/0.0.99/p/content/common2/context"),d={init:function(){this.header=new a;this.bottombar=new b;this.context=new c;this._event()},_event:function(){var a=this;$(this.header).on("countdown_end",function(){a.bottombar.wakeup()});$(this.bottombar).on("submit_form",function(){a.formSubmit()});$(this.context).on("next_page",function(){a.header.render();a.bottombar.render()})},formSubmit:function(){this.context.submitForm()}};d.init()});