$.importStyle(".header{display:-webkit-box;height:1.06666667rem;line-height:1.06666667rem;padding:.13333333rem .2rem;background-color:#c22e1b;color:#fff;font-size:.53333333rem}.header .back{display:inline-block}.header .search{-webkit-box-flex:1}.header .title{-webkit-box-flex:1}.header .message{position:relative;display:inline-block;color:#fff}.header .message span{position:relative;left:-.13333333rem;top:-.13333333rem;z-index:2}.header .message strong{display:inline-block;position:absolute;right:-.13333333rem;top:0rem;width:.53333333rem;height:.53333333rem;line-height:.53333333rem;text-align:center;border-radius:50%;background-color:#fff;color:#333;font-size:.42666667rem;z-index:1}");define("guang/m-activity/0.0.99/p/panel/common/header.jst",[],function(require,exports,module){module.exports=function(obj){obj||(obj={});var __p="";with(obj)__p+='<div class="header">\n  <div class="back"><</div>\n  <div class="title"></div>\n  <div class="search">\u641c\u7d22</div>\n  <a class="message" href="content_todo.html">\n    <span>...</span>\n    <strong>6</strong>\n  </a>\n</div>';return __p}});define("guang/m-activity/0.0.99/p/panel/common/header",[],function(require){require("guang/m-activity/0.0.99/p/panel/common/header.css");var a=require("guang/m-activity/0.0.99/p/panel/common/header.jst"),b={init:function(){this.render()},render:function(){var b=a();this.box=$(b);this.box.insertBefore($(document.body).children()[0]);this.box.on("click",".back",function(){window.history.back()})}};b.init();return b});$.importStyle('@font-face{font-family:iconfont;src:url(http://gaokai.github.io/static/src/iparty/iconfont/iconfont.eot);src:url(http://gaokai.github.io/static/src/iparty/iconfont/iconfont.eot?#iefix) format(\'embedded-opentype\'),url(http://gaokai.github.io/static/src/iparty/iconfont/iconfont.woff) format(\'woff\'),url(http://gaokai.github.io/static/src/iparty/iconfont/iconfont.ttf) format(\'truetype\'),url(http://gaokai.github.io/static/src/iparty/iconfont/iconfont.svg#iconfont) format(\'svg\')}.iconfont{font-family:iconfont!important;font-size:.42666667rem;font-style:normal;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale}.icon-chakan:before{content:"\\e64d"}.icon-caozuo:before{content:"\\e649"}.icon-gerenzhongxin:before{content:"\\e669"}.icon-banjifengcai:before{content:"\\e61a"}.icon-shoucang:before{content:"\\e67f"}.icon-fen:before{content:"\\e63d"}.icon-rongyu:before{content:"\\e621"}.icon-iconfont-certificate:before{content:"\\e667"}.icon-renwu:before{content:"\\e636"}.icon-gerenxinxi:before{content:"\\e632"}body{padding-bottom:1.28rem;box-sizing:border-box}#bottom-bar{position:fixed;bottom:0;left:0;width:100%;height:1.28rem;background-color:rgba(255,255,255,.8);border-top:1px solid #dcdcdc}#bottom-bar .bottom-bar-inner{display:-webkit-box}#bottom-bar .bottom-bar-inner .bottom-bar-item{display:block;-webkit-box-flex:1;text-align:center;color:#a4a4a4}#bottom-bar .bottom-bar-inner .bottom-bar-item .iconfont{margin-top:.2rem;display:block}#bottom-bar .bottom-bar-inner .bottom-bar-item span{display:inline-block;margin-top:.13333333rem;font-size:.37333333rem}#bottom-bar .bottom-bar-inner .bottom-bar-item.current{color:#c22e1b}#bottom-bar .bottom-bar-inner .bottom-bar-item.current .iconfont{color:#c22e1b}');define("guang/m-activity/0.0.99/p/panel/common/bottom-bar.jst",[],function(require,exports,module){module.exports=function(obj){obj||(obj={});var __p="";with(obj)__p+='<div id="bottom-bar" class="bottom-bar">\n  <div class="bottom-bar-inner">\n    <a class="bottom-bar-item" href="panel_task.html">\n      <i class="iconfont icon-caozuo"></i>\n      <span>\u6211\u7684\u4efb\u52a1</span>\n    </a>\n    <a class="bottom-bar-item" href="panel_course.html">\n      <i class="iconfont icon-chakan"></i>\n      <span>\u5168\u90e8\u8bfe\u7a0b</span>\n    </a>\n    <a class="bottom-bar-item" href="panel_class.html">\n      <i class="iconfont icon-banjifengcai"></i>\n      <span>\u73ed\u7ea7\u98ce\u91c7</span>\n    </a>\n    <a class="bottom-bar-item" href="panel_my.html">\n      <i class="iconfont icon-gerenzhongxin"></i>\n      <span>\u4e2a\u4eba\u4e2d\u5fc3</span>\n    </a>\n  </div>\n</div>';return __p}});define("guang/m-activity/0.0.99/p/panel/common/bottom-bar",[],function(require){require("guang/m-activity/0.0.99/p/panel/common/bottom-bar.css");var a=require("guang/m-activity/0.0.99/p/panel/common/bottom-bar.jst");$(document.body).css("min-height",document.documentElement.clientHeight+"px");var b={init:function(a){this.tabIndex=a.tabIndex;this.render()},render:function(){var b=a();this.box=$(b);this.box.appendTo($(document.body));$(this.box.find(".bottom-bar-item")[this.tabIndex]).addClass("current").attr("href","")}};return b});$.importStyle(".atab .atab-item{position:relative;display:block;padding:.2rem;margin:.13333333rem 0rem;background-color:#fff}.atab .atab-item-img{display:inline-block;width:1.06666667rem;height:1.06666667rem;vertical-align:top;border-radius:.26666667rem;overflow:hidden}.atab .atab-item-img .iconfont{display:inline-block;font-size:.66666667rem;margin-top:.13333333rem;margin-left:.26666667rem}.atab .atab-item-img img{width:100%;height:100%;background-color:#d9d9d9}.atab .atab-item-desc{display:inline-block;vertical-align:top;margin-left:.13333333rem;width:7.73333333rem}.atab .atab-item-desc .desc-m{display:-webkit-box;line-height:1.06666667rem;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;font-size:.42666667rem;color:#333}.atab .atab-item-desc .desc-sub{display:-webkit-box;margin-top:.2rem;font-size:.37333333rem;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;line-height:.48rem;color:#a7a7a7}.atab .atab-item-status{display:inline-block;width:100%;margin-top:.2rem;text-align:right;font-size:.26666667rem;color:#666}.atab .right-arrow{position:absolute;right:.13333333rem;top:.4rem;font-size:.66666667rem;color:#aaa}");define("guang/m-activity/0.0.99/p/panel/common/a_tab.jst",[],function(require,exports,module){module.exports=function(obj){obj||(obj={});var __p="",__e=function(a){a=String(a);var b=/[&<>'"]/g,c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};a=a.replace(b,function(a){return c[a]});return a};Array.prototype.join;with(obj){$.each(data.atab,function(a,b){__p+='\n  <a class="atab-item" ';b.url&&(__p+='href="'+__e(b.url)+'"');__p+=">\n    ";b.icon&&(__p+='\n      <span class="atab-item-img">\n        <span class="iconfont '+__e(b.icon)+'"></span>\n      </span>\n    ');__p+='\n    <span class="atab-item-desc">\n      <span class="desc-m">'+__e(b.desc.main)+"</span>\n      ";b.desc.sub&&(__p+='\n        <span class="desc-sub">'+__e(b.desc.sub)+"</span>\n      ");__p+="\n    </span>\n    ";b.status&&(__p+='\n      <div class="atab-item-status">\n      </div>\n    ');__p+='\n    <span class="right-arrow">\u300b</span>\n  </a>\n'});__p+="\n\n"}return __p}});define("guang/m-activity/0.0.99/p/panel/common/a_tab",[],function(require){function a(a){this.wrap=a.wrap;this.data=a.data;this.init()}require("guang/m-activity/0.0.99/p/panel/common/a_tab.css");var b=require("guang/m-activity/0.0.99/p/panel/common/a_tab.jst");$.extend(a.prototype,{init:function(){this.render()},render:function(){var a=b({data:this.data});this.box=$('<div class="atab"></div>');this.box.html(a);this.wrap.append(this.box)}});return a});define("guang/m-activity/0.0.99/p/panel/my/index",[],function(require){require("guang/m-activity/0.0.99/p/panel/common/header");var a=require("guang/m-activity/0.0.99/p/panel/common/bottom-bar"),b=require("guang/m-activity/0.0.99/p/panel/common/a_tab"),c={init:function(){a.init({tabIndex:3});new b({wrap:$("#list-wrap"),data:{atab:[{icon:"icon-shoucang",desc:{main:"\u6211\u7684\u6536\u85cf"},tag_undo:10},{icon:"icon-fen",desc:{main:"\u6211\u7684\u5b66\u5206"}},{icon:"icon-rongyu",desc:{main:"\u6211\u7684\u8363\u8a89"}},{icon:"icon-iconfont-certificate",desc:{main:"\u6211\u7684\u8bc1\u4e66"}},{icon:"icon-renwu",desc:{main:"\u6211\u7684\u4efb\u52a1\u5730\u56fe"}},{icon:"icon-gerenxinxi",desc:{main:"\u6211\u7684\u4e2a\u4eba\u4fe1\u606f"}}]}})}};c.init()});