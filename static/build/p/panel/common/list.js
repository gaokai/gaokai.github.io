$.importStyle(".list .list-item{display:block;padding:.2rem;margin:.13333333rem 0rem;background-color:#fff}.list .list-item-img{display:inline-block;width:1.6rem;height:1.06666667rem;vertical-align:top;border-radius:.26666667rem;overflow:hidden}.list .list-item-img img{width:100%;height:100%;background-color:#d9d9d9}.list .list-item-desc{display:inline-block;vertical-align:top;margin-left:.13333333rem;width:7.73333333rem}.list .list-item-desc .desc-m{display:-webkit-box;line-height:.48rem;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;font-size:.42666667rem;color:#333}.list .list-item-desc .desc-sub{display:-webkit-box;margin-top:.2rem;font-size:.37333333rem;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;line-height:.48rem;color:#a7a7a7}.list .list-item-status{display:inline-block;width:100%;margin-top:.2rem;text-align:right;font-size:.26666667rem;color:#666}.list-item-block .list-item-img-block{margin-bottom:.13333333rem}.list-item-block .list-item-img-block span{display:inline-block;width:2.93333333rem;height:2rem;border-radius:.13333333rem;overflow:hidden;margin-right:.06666667rem}.list-item-block .list-item-img-block img{width:100%;height:100%;background-color:#d9d9d9}");define("guang/m-activity/0.0.99/p/panel/common/list.jst",[],function(require,exports,module){module.exports=function(obj){obj||(obj={});var __p="",__e=function(a){a=String(a);var b=/[&<>'"]/g,c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};a=a.replace(b,function(a){return c[a]});return a};Array.prototype.join;with(obj){data.panel_title&&(__p+="\n  <h3>"+__e(data.panel_title)+"\uff1a</h3>\n");__p+="\n";$.each(data.list,function(a,b){__p+="\n  ";if("block"==b.type){__p+='\n    <a class="list-item list-item-block" ';b.url&&(__p+='href="'+__e(b.url)+'"');__p+='>\n      <div class="list-item-img-block">\n        <span><img src=""></span>\n        <span><img src=""></span>\n        <span><img src=""></span>\n      </div>\n      <div class="list-item-desc">\n        <span class="desc-m">'+__e(b.desc.main)+'</span>\n        <span class="desc-sub">'+__e(b.desc.sub)+'</span>\n      </div>\n      <div class="list-item-status">\n        '+__e(b.status.stime)+"\u4e2a\u5b66\u65f6 \u622a\u6b62"+__e(b.status.ltime)+" \u5df2\u6709"+__e(b.status.count_finished)+"\u4eba\u5b8c\u6210\u5b66\u4e60\n      </div>\n    </a>\n  "}else{__p+='\n  <a class="list-item" ';b.url&&(__p+='href="'+__e(b.url)+'"');__p+='>\n    <span class="list-item-img">\n      <img src="">\n    </span>\n    <span class="list-item-desc">\n      <span class="desc-m">'+__e(b.desc.main)+"</span>\n      ";b.desc.sub&&(__p+='\n        <span class="desc-sub">'+__e(b.desc.sub)+"</span>\n      ");__p+="\n    </span>\n    ";b.status&&(__p+='\n      <div class="list-item-status">\n        '+__e(b.status.stime)+"\u4e2a\u5b66\u65f6 \u622a\u6b62"+__e(b.status.ltime)+" \u5df2\u6709"+__e(b.status.count_finished)+"\u4eba\u5b8c\u6210\u5b66\u4e60\n      </div>\n    ");__p+="\n  </a>\n  "}__p+="\n"});__p+="\n\n"}return __p}});define("guang/m-activity/0.0.99/p/panel/common/list",[],function(require){function a(a){this.wrap=a.wrap;this.data=a.data;this.init()}require("guang/m-activity/0.0.99/p/panel/common/list.css");var b=require("guang/m-activity/0.0.99/p/panel/common/list.jst");$.extend(a.prototype,{init:function(){this.render()},render:function(){var a=b({data:this.data});this.box=$('<div class="list"></div>');this.box.html(a);this.wrap.append(this.box)}});return a});