(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[450],{7450:function(t,e,i){"use strict";i.r(e),i.d(e,{editor:function(){return u}});var n=i(2137),s=i(7757),o=i.n(s),a=i(9122),r=i(7827),d=i(1160),c=i(5841),l=i(8754),h=i(6079),p=i(5316),u=function(t,e,i){p.s.call(this,t,e,i)};a.x.extend(u.prototype,p.s.prototype),u.prototype.defaultOptions={pluginType:"uiplugin.editor",pluginName:"editor",userEvents:["onload","onchange"],menubar:"simple",editorType:"3.0",useConfig:!0,absolutePath:!1,imageUploadURL:"",imageLoadURL:"",subDir:"",language:"en",transParentDisabled:!1,resizable:!1,version:"",editorHeight:"",editorWidth:"",useCKFinder:""},u.prototype.initialize=function(t){this.options.imageUploadURL=this.options.imageUploadURL||WebSquare.baseServletURI+"imageupload.wq",this.options.imageLoadURL=this.options.imageLoadURL||a.x._resourceURI+"externalJS/editor/loadImg.wq",this.loaded=!1,this.startText="",this.startHtml="",this.orgHTML="",this.options.version||(l.D.isSpartan()?this.options.version="4.5.1":l.D.isIEAllVersion(9)||l.D.isIEAllVersion(11)||l.D.isIEAllVersion(10)||r.v.browserCheck.ipad?this.options.version="4.3":this.options.version="")},u.prototype.initAsync=(0,n.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.CKEDITOR){t.next=4;break}return void 0===window.CKEDITOR_BASEPATH&&(window.CKEDITOR_BASEPATH=a.x._resourceURI+this._getResourcePath()),t.next=4,inquires(this._getResourcePath()+"ckeditor.js");case 4:if(!l.D.getBoolean(this.options.useCKFinder)||window.CKFinder){t.next=7;break}return t.next=7,inquires("externalJS/ckfinder/ckfinder.js");case 7:case"end":return t.stop()}}),t,this)}))),u.prototype.toHTML=function(){var t,e=[],i=""==this.options.tabIndex?"":"tabIndex='"+this.options.tabIndex+"'";return t=""==this.options.style?"":"style='"+this.options.style+"'",e.push("<div id='"+this.id+"' "+t+" class='w2editor "+this.options.className+"' "+i+">"),e.push("<div id='"+this.id+"_'>"),e.push("</div>"),e.push("</div>"),e.join("")},u.prototype.setAction=function(){try{var t,e=this._getResourcePath(),i="skins/",n=!1;"4.17.1"==this.options.version||"4.19.1"==this.options.version?t="moono-lisa":"4.5.11"===this.options.version||"4.11.3"===this.options.version||"4.14.0"==this.options.version?t="moono":"4.5.1"===this.options.version?t="office2013":"4.3"===this.options.version?t="office2003":(i="",t="office2003",n=!0);var s,o,r,c,h=t+","+CKEDITOR.basePath+e+i+t+"/",p=CKEDITOR.basePath+"contents.css"+WebSquare.BootLoader.getEngineCachePostfix("");-1==CKEDITOR.basePath.indexOf(e)?(CKEDITOR.config.skin=h,CKEDITOR.basePath=CKEDITOR.basePath+e,CKEDITOR.config.contentsCss=p):!0===n&&(CKEDITOR.config.skin="office2003,"+CKEDITOR.basePath+"/office2003/",CKEDITOR.config.contentsCss=p),this.filebrowserUploadBaseUrl=this.options.imageUploadURL+"?callbackFunction="+this.id+".callback&subDir="+this.options.subDir,"4.5.11"==this.options.version?(o=69,r=102,c=72):(o=55,r=111,c=83),s="simple"==this.options.menubar?parseInt(this.render.style.height)-o+"px":parseInt(this.render.offsetWidth)<1395?parseInt(this.render.style.height)-r+"px":parseInt(this.render.style.height)-c+"px";var u={customConfig:"config_3.js",resize_enabled:this.options.resizable,width:"100%",height:s,toolbarCanCollapse:!1,toolbar:this.options.menubar,language:this.options.language,filebrowserUploadUrl:this.filebrowserUploadBaseUrl};l.D.getBoolean(this.options.useCKFinder)&&(u.filebrowserBrowseUrl=a.x._resourceURI+"externalJS/ckfinder/ckfinder.html",u.filebrowserImageBrowseUrl=a.x._resourceURI+"externalJS/ckfinder/ckfinder.html?type=Images",u.filebrowserFlashBrowseUrl=a.x._resourceURI+"externalJS/ckfinder/ckfinder.html?type=Flash",u.filebrowserUploadUrl=a.x._resourceURI+"ckfinder/core/connector/java/connector.ckfinder?command=QuickUpload&type=Files",u.filebrowserImageUploadUrl=a.x._resourceURI+"ckfinder/core/connector/java/connector.ckfinder?command=QuickUpload&type=Images",
u.filebrowserFlashUploadUrl=a.x._resourceURI+"ckfinder/core/connector/java/connector.ckfinder?command=QuickUpload&type=Flash",u.image_previewText="&nbsp;"),u.id=this.id+"_";var f=CKEDITOR.replace(this.id+"_",u);l.D.getBoolean(this.options.useCKFinder)&&CKFinder.setupCKEditor(f,"/externalJS/ckfinder/");var g=this.uuid;CKEDITOR.instances[this.id+"_"].setData(" "),CKEDITOR.instances[this.id+"_"].on("instanceReady",(function(t){var e=WebSquare.idCache[g];if(e.handleOnLoadEvent(),"source"!==this.config.startupMode){var i=e.render.getElementsByTagName("iframe")[0].contentDocument;e.event.addListener(i,"onclick",e.event.bindAsEventListener(e,e.handleOtherClick))}})),CKEDITOR.instances[this.id+"_"].on("focus",(function(t){WebSquare.idCache[g].handleOnFocusEvent(t)})),CKEDITOR.instances[this.id+"_"].on("blur",(function(t){WebSquare.idCache[g].handleOnBlurEvent(t)})),CKEDITOR.instances[this.id+"_"].on("contentPreview",(function(t){if(t.data&&t.data.dataValue){var e=t.data.dataValue.indexOf("<body"),i=t.data.dataValue.substring(0,e),n=t.data.dataValue.substring(e);n=(n=(n=n.wq_replaceAll("<script","&lt;script")).wq_replaceAll("alert","")).wq_replaceAll("eval",""),t.data.dataValue=i+n}}))}catch(t){d.w.printStackTrace(t)}},u.prototype.finalize=function(){try{p.s.prototype.finalize.call(this),CKEDITOR.instances[this.id+"_"]&&CKEDITOR.instances[this.id+"_"].destroy(!0)}catch(t){d.w.printStackTrace(t,null,this)}},u.prototype.setText=function(t){try{if(CKEDITOR.version.charAt(0)<"4"){var e=this.getReadOnly(),i=this.getDisabled();(e||i)&&(this.setDisabled(!1),this.options.disabled=i)}var n=this.uuid;if(!this.loaded)return void(this.startText=t);this.orgHTML=this.getHTML(),CKEDITOR.instances[this.id+"_"].setData("",(function(){this.insertText(t);var e=WebSquare.idCache[n];e.applyReadOnlyDisabled(),this.getData()!=e.orgHTML&&c.B.fireEvent(e,"onchange")}))}catch(t){d.w.printStackTrace(t)}},u.prototype.getText=function(){try{return CKEDITOR.instances[this.id+"_"].document.getBody().getText()}catch(t){d.w.printStackTrace(t)}},u.prototype.setHTML=function(t){try{if(CKEDITOR.version.charAt(0)<"4"){var e=this.getReadOnly(),i=this.getDisabled();(e||i)&&(this.setDisabled(!1),this.options.disabled=i)}var n=this.uuid,s=CKEDITOR.instances[this.id+"_"];if(CKEDITOR.version.charAt(0)<"4"){if(!this.loaded)return void(this.startHtml=t);this.orgHTML=this.getHTML(),s.setData(t,(function(){var t=WebSquare.idCache[n];t.applyReadOnlyDisabled(),this.getData()!=t.orgHTML&&c.B.fireEvent(t,"onchange"),t.resetDirty()}))}else{if(!this.loaded)return void(this.startHtml=t);this.orgHTML=this.getHTML(),s.editable().setData(t,!0),this.getHTML()!=this.orgHTML&&c.B.fireEvent(this,"onchange"),this.resetDirty()}}catch(t){d.w.printStackTrace(t)}},u.prototype.getHTML=function(){try{var t=CKEDITOR.instances[this.id+"_"].getData(),e=r.v.getConfiguration("/WebSquare/editor/tagHandler/@value")||"",i=l.D.getGlobalFunction(e,this.scope_id);return"function"==typeof i&&(t=i.call(this,t)),t}catch(t){d.w.printStackTrace(t)}},u.prototype.focus=function(){try{return CKEDITOR.instances[this.id+"_"].focus()}catch(t){d.w.printStackTrace(t)}},u.prototype.callback=function(t){var e,i,n,s,o=WebSquare.xml.parse(t);if(e=WebSquare.xml.getValue(o,"ret/key"),e=WebSquare.xml.decode(e),i=WebSquare.xml.getValue(o,"ret/storedFileList"),n=WebSquare.xml.getValue(o,"ret/funcNum"),s=WebSquare.xml.getValue(o,"ret/deniedCodeList"),i&&i.length>0)1==this.options.absolutePath?(e=e.wq_replaceAll("/","\\"),CKEDITOR.tools.callFunction(n,e+"\\"+i)):this.options.imageLoadURL.indexOf("?")>-1?CKEDITOR.tools.callFunction(n,this.options.imageLoadURL+"&subDir="+this.options.subDir+"&fileName="+escape(encodeURIComponent(i))):CKEDITOR.tools.callFunction(n,this.options.imageLoadURL+"?subDir="+this.options.subDir+"&fileName="+escape(encodeURIComponent(i)));else{var a="";a="101"==s?"Invalid file extension.":"102"==s?"File Size has been exceed.":"Unknown server error.",CKEDITOR.tools.callFunction(n,"",a)}},
u.prototype.setDisabled=function(t){try{t=l.D.getBoolean(t),this.options.disabled=t;var e=null,i=null;if(CKEDITOR.version.charAt(0)<"4"){var n=document.getElementById(this.id+"_disabled_div");e=document.getElementById("cke_top_"+this.id+"_"),i=document.getElementById("cke_contents_"+this.id+"_")}else{n=document.getElementById(this.id+"_disabled_div");e=document.getElementById(CKEDITOR.instances[this.id+"_"].id+"_top"),i=document.getElementById(CKEDITOR.instances[this.id+"_"].id+"_contents")}if(!e&&!i)return;var s=i.getElementsByTagName("iframe")[0].contentWindow;if(0==t&&n)n.style.visibility="hidden",n.style.display="none",n.hidden=!0,s&&!this.getReadOnly()&&(s.document.documentElement.contentEditable=!0,s.document.body.contentEditable=!0);else if(1!=t||n)1==t&&n&&(s.document.documentElement.contentEditable=!0,s.document.body.contentEditable=!0,n.hidden=!1,n.style.visibility="visible",n.style.display="block");else{var o=document.createElement("div");o.setAttribute("id",this.id+"_disabled_div");var a;if(CKEDITOR.version.charAt(0)<"4")var r=document.getElementById("cke_top_"+this.id+"_").offsetHeight,c=document.getElementById("cke_contents_"+this.id+"_").offsetHeight,h=document.getElementById("cke_bottom_"+this.id+"_").offsetHeight;else r=document.getElementById(CKEDITOR.instances[this.id+"_"].id+"_top").offsetHeight,c=document.getElementById(CKEDITOR.instances[this.id+"_"].id+"_contents").offsetHeight,h=document.getElementById(CKEDITOR.instances[this.id+"_"].id+"_bottom").offsetHeight;a=r+c+h;var p=null;p=1==this.options.transParentDisabled?"background-color: black; position: absolute; left:0px; top:0px; height:"+a+"px; width: 100%; filter : alpha(opacity=0); opacity : 0.0;":l.D.isSpartan()?"background-color: black; position: absolute; left:0px; top:0px; height:"+a+"px; width: 100%; filter : alpha(opacity=30); opacity : 0.3; border:1px solid black;":"background-color: black; position: absolute; left:0px; top:0px; height:"+a+"px; width: 100%; filter : alpha(opacity=30); opacity : 0.3;",o.style.cssText=p,this.render.appendChild(o),s.document.documentElement.contentEditable=!1,s.document.body.contentEditable=!1}return t}catch(t){d.w.printStackTrace(t)}},u.prototype.setReadOnly=function(t){try{return t=l.D.getBoolean(t),this.options.readOnly=t,"4.5.11"==this.options.version||"4.11.3"===this.options.version||"4.14.0"===this.options.version||"4.17.1"==this.options.version||"4.19.1"==this.options.version?CKEDITOR.instances[this.id+"_"].editable()&&CKEDITOR.instances[this.id+"_"].setReadOnly(t):CKEDITOR.instances[this.id+"_"].setReadOnly(t),t}catch(t){d.w.printStackTrace(t)}},u.prototype.setDomain=function(t){if(t||(t=WebSquare.domain),t&&t.wq_trim().length>0){var e=this.filebrowserUploadBaseUrl;e.indexOf("?")>-1?e+="&":e+="?",e+="domain="+WebSquare.text.URLEncoder(t),CKEDITOR.instances[this.id+"_"].config.filebrowserUploadUrl=e}else CKEDITOR.instances[this.id+"_"].config.filebrowserUploadUrl=this.filebrowserUploadBaseUrl},u.prototype.getDomain=function(){return CKEDITOR.instances[this.id+"_"].config.filebrowserUploadUrl},u.prototype.getImageLoadURL=function(){return this.options.imageLoadURL},u.prototype.setImageLoadURL=function(t){t&&(this.options.imageLoadURL=t)},u.prototype.handleOnLoadEvent=function(){try{var t=this.render.clientWidth||this.render.style.width||WebSquare.style.getComputedStyle(this.render,"width"),e=this.render.clientHeight||this.render.style.height||WebSquare.style.getComputedStyle(this.render,"height");if(this.options.editorWidth&&(t=this.options.editorWidth),this.options.editorHeight&&(e=this.options.editorHeight),CKEDITOR.instances[this.id+"_"].document&&CKEDITOR.instances[this.id+"_"].document.getWindow().$&&CKEDITOR.instances[this.id+"_"].resize(t,e),r.v.browserCheck.ipad){var i=document.getElementById(CKEDITOR.instances[this.id+"_"].id+"_contents"),n=i.getAttribute("style");i.setAttribute("style",n+"overflow-y: auto;-webkit-overflow-scrolling: touch")}this.applyReadOnlyDisabled(),this.loaded=!0,
""!=this.startText&&this.setText(this.startText),""!=this.startHtml&&this.setHTML(this.startHtml),c.B.fireEvent(this,"onload")}catch(t){d.w.printStackTrace(t)}},u.prototype.handleOnFocusEvent=function(t){},u.prototype.handleOnBlurEvent=function(t){var e=this.getHTML();this.orgHTML!=e&&(c.B.fireEvent(this,"onchange"),this.orgHTML=e)},u.prototype.applyReadOnlyDisabled=function(){this.getDisabled()?this.setDisabled(!0):this.getReadOnly()&&this.setReadOnly(!0)},u.prototype.resize=function(t,e){try{this.options.resizable?CKEDITOR.instances[this.id+"_"].resize(t,e,!0):h.k.printLog("Set configuration resize true")}catch(t){d.w.printStackTrace(t)}},u.prototype.handleOtherClick=function(t){try{WebSquare.getBody().getLayerListener().hideAll()}catch(t){d.w.printStackTrace(t)}},u.prototype.resetDirty=function(t){try{CKEDITOR.instances[this.id+"_"].resetDirty()}catch(t){d.w.printStackTrace(t)}},u.prototype.checkDirty=function(t){try{return CKEDITOR.instances[this.id+"_"].checkDirty()}catch(t){d.w.printStackTrace(t)}},u.prototype._getResourcePath=function(t){try{return!0==={"4.19.1":!0,"4.17.1":!0,"4.14.0":!0,"4.11.3":!0,"4.5.11":!0,"4.5.1":!0,4.3:!0}[this.options.version]?"externalJS/editor"+this.options.version+"/":"externalJS/editor/"}catch(t){d.w.printStackTrace(t)}}}}]);