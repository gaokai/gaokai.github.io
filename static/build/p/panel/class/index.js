$.importStyle(".header{display:-webkit-box;height:1.06666667rem;line-height:1.06666667rem;padding:.13333333rem .2rem;background-color:#c22e1b;color:#fff;font-size:.53333333rem}.header .back{display:inline-block}.header .search{-webkit-box-flex:1}.header .title{-webkit-box-flex:1}.header .message{display:inline-block}");define("guang/m-activity/0.0.99/p/panel/common/header.jst",[],function(require,exports,module){module.exports=function(obj){obj||(obj={});var __p="";with(obj)__p+='<div class="header">\n  <div class="back"><</div>\n  <div class="title"></div>\n  <div class="search">\u641c\u7d22</div>\n  <div class="message">\u672a\u5b8c\u6210</div>\n</div>';return __p}});define("guang/m-activity/0.0.99/p/panel/common/header",[],function(require){require("guang/m-activity/0.0.99/p/panel/common/header.css");var a=require("guang/m-activity/0.0.99/p/panel/common/header.jst"),b={init:function(){this.render()},render:function(){var b=a();this.box=$(b);this.box.insertBefore($(document.body).children()[0])}};b.init();return b});$.importStyle("@font-face{font-family:iconfont;src:url(http://local.m.taobao.com:3333/src/p/panel/common/iconfont/iconfont.eot);src:url(http://local.m.taobao.com:3333/src/p/panel/common/iconfont/iconfont.eot?#iefix) format('embedded-opentype'),url(http://local.m.taobao.com:3333/src/p/panel/common/iconfont/iconfont.woff) format('woff'),url(http://local.m.taobao.com:3333/src/p/panel/common/iconfont/iconfont.ttf) format('truetype'),url(http://local.m.taobao.com:3333/src/p/panel/common/iconfont/iconfont.svg#iconfont) format('svg')}.iconfont{font-family:iconfont!important;font-size:.42666667rem;font-style:normal;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale}.icon-chakan:before{content:\"\\e64d\"}.icon-caozuo:before{content:\"\\e649\"}.icon-gerenzhongxin:before{content:\"\\e669\"}.icon-banjifengcai:before{content:\"\\e61a\"}body{padding-bottom:1.28rem;box-sizing:border-box}#bottom-bar{position:fixed;bottom:0;left:0;width:100%;height:1.28rem;background-color:rgba(255,255,255,.8);border-top:1px solid #dcdcdc}#bottom-bar .bottom-bar-inner{display:-webkit-box}#bottom-bar .bottom-bar-inner .bottom-bar-item{display:block;-webkit-box-flex:1;text-align:center;color:#a4a4a4}#bottom-bar .bottom-bar-inner .bottom-bar-item .iconfont{margin-top:.2rem;display:block}#bottom-bar .bottom-bar-inner .bottom-bar-item span{display:inline-block;margin-top:.13333333rem;font-size:.37333333rem}#bottom-bar .bottom-bar-inner .bottom-bar-item.current{color:#c22e1b}#bottom-bar .bottom-bar-inner .bottom-bar-item.current .iconfont{color:#c22e1b}");define("guang/m-activity/0.0.99/p/panel/common/bottom-bar.jst",[],function(require,exports,module){module.exports=function(obj){obj||(obj={});var __p="";with(obj)__p+='<div id="bottom-bar" class="bottom-bar">\n  <div class="bottom-bar-inner">\n    <a class="bottom-bar-item" href="panel_task.html">\n      <i class="iconfont icon-caozuo"></i>\n      <span>\u6211\u7684\u4efb\u52a1</span>\n    </a>\n    <a class="bottom-bar-item" href="panel_course.html">\n      <i class="iconfont icon-chakan"></i>\n      <span>\u5168\u90e8\u8bfe\u7a0b</span>\n    </a>\n    <a class="bottom-bar-item" href="panel_class.html">\n      <i class="iconfont icon-banjifengcai"></i>\n      <span>\u73ed\u7ea7\u98ce\u91c7</span>\n    </a>\n    <a class="bottom-bar-item" href="panel_my.html">\n      <i class="iconfont icon-gerenzhongxin"></i>\n      <span>\u4e2a\u4eba\u4e2d\u5fc3</span>\n    </a>\n  </div>\n</div>';return __p}});define("guang/m-activity/0.0.99/p/panel/common/bottom-bar",[],function(require){require("guang/m-activity/0.0.99/p/panel/common/bottom-bar.css");var a=require("guang/m-activity/0.0.99/p/panel/common/bottom-bar.jst");$(document.body).css("min-height",document.documentElement.clientHeight+"px");var b={init:function(a){this.tabIndex=a.tabIndex;this.render()},render:function(){var b=a();this.box=$(b);this.box.appendTo($(document.body));$(this.box.find(".bottom-bar-item")[this.tabIndex]).addClass("current").attr("href","")}};return b});define("guang/m-activity/0.0.99/p/panel/class/index",[],function(require){require("guang/m-activity/0.0.99/p/panel/common/header");var a=require("guang/m-activity/0.0.99/p/panel/common/bottom-bar"),b={init:function(){a.init({tabIndex:2})}};b.init()});