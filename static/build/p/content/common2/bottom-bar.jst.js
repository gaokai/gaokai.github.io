define("guang/m-activity/0.0.99/p/content/common2/bottom-bar.jst",[],function(require,exports,module){module.exports=function(obj){obj||(obj={});var __p="",__e=function(a){a=String(a);var b=/[&<>'"]/g,c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};a=a.replace(b,function(a){return c[a]});return a};Array.prototype.join;with(obj){__p+='<div id="bottom-bar" class="bottom-bar">\n  <div class="bottom-bar-inner">\n    <a class="bottom-bar-item">\n      <i class="icon icon-back"></i>\n      <span class="back">\u8fd4\u56de</span>\n    </a>\n    ';if(data.maxIndex>0){__p+='\n      <div class="bottom-bar-item">\n        <i class="icon icon-submit"></i>\n        ';__p+=data.count_part+1==data.maxIndex?'\n          <a class="submit-btn" href="panel_my.html">\u5b8c\u6210\u5b66\u4e60</a>\n        ':'\n          <span class="submit-btn disabled">\u8bf7\u9605\u8bfb\u5185\u5bb9</span>\n        ';__p+='\n      </div>\n      <a class="bottom-bar-item">\n        <i class="icon icon-pagecount"></i>\n        <span class="page-index">\n          ';__p+=data.count_part+1>data.maxIndex?"\n            "+__e(data.maxIndex)+"\n          ":"\n            "+__e(data.count_part+1)+"\n          ";__p+="\n          /\n          "+__e(data.maxIndex)+"\n        </span>\n      </a>\n    </div>\n    "}__p+="\n</div>"}return __p}});