(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[666],{666:function(t,e,i){"use strict";i.r(e),i.d(e,{slideHide:function(){return r}});var s=i(9122),n=i(1160),h=i(5841),o=i(5316),r=function(t,e,i){o.s.call(this,t,e,i)};s.x.extend(r.prototype,o.s.prototype),r.prototype.defaultOptions={pluginType:"uiplugin.slideHide",pluginName:"slideHide",userEvents:["onSlideEnd","onHideEnd","onSlideStart","onHideStart"],parseChild:!0,showSize:20,moveSize:10,slideDirection:"right",slideEvent:"",hideEvent:"",firstStatus:"hide",eventArea:"full"},r.prototype.initialize=function(t){try{this.slideStatus="slide"==this.options.firstStatus,this.slideDist=0,this.slideTime=0,this.nowMove=this.slideStatus?2:0}catch(t){n.w.printStackTrace(t,null,this)}},r.prototype.toHTML=function(){try{var t=[],e=""==this.options.style?"":"style='"+this.options.style+("hide"==this.options.firstStatus?";display:none":"")+"'",i=""==this.options.tabIndex?"":"tabIndex='"+this.options.tabIndex+"'";t.push("<div id='"+this.id+"' "+e+" class='w2slideHide "+this.options.className+"' "+i+">"),t.push("<div style='position:absolute;' id='"+this.id+"_slideHideMain' class='w2slideHide_slideHideMain'>");for(var s=this.getChildren(),h=0;h<s.length;h++)t.push(s[h].toHTML());return t.push("</div>"),t.push("</div>"),t.join("")}catch(t){n.w.printStackTrace(t,null,this)}},r.prototype.setAction=function(){try{this.originStyle={},this.originStyle.left=this.render.style.left,this.originStyle.top=this.render.style.top,this.originStyle.width=this.render.style.width,this.originStyle.height=this.render.style.height,this.main=this.getElementById(this.id+"_slideHideMain");var t="hide"==this.options.firstStatus?this.render.style.width:WebSquare.style.getSize(this.render,"innerwidth")+"px",e="hide"==this.options.firstStatus?this.render.style.height:WebSquare.style.getSize(this.render,"innerheight")+"px";switch(this.main.style.width=t,this.main.style.height=e,this.options.slideDirection){case"right":this.setRight(t,e);break;case"left":this.setLeft(t,e);break;case"up":this.setUp(t,e);break;case"down":this.setDown(t,e)}this.options.slideEvent==this.options.hideEvent?""!=this.options.slideEvent&&""!=this.options.hideEvent&&this.event.addListener(this.render,this.options.slideEvent,this.event.bindAsEventListener(this,this.handleToggleEvent)):(""!=this.options.slideEvent&&this.event.addListener(this.render,this.options.slideEvent,this.event.bindAsEventListener(this,this.handleSlideEvent)),""!=this.options.hideEvent&&this.event.addListener(this.render,this.options.hideEvent,this.event.bindAsEventListener(this,this.handleHideEvent)))}catch(t){n.w.printStackTrace(t,null,this)}},r.prototype.setRight=function(t,e){try{this.main.style.right="0px",this.slideStatus||(this.render.style.width=this.options.showSize+"px"),this.render.style.display="";var i=(parseInt(t,10)-this.options.showSize)/this.options.moveSize*.015,s=this;this.slideOption={width:parseInt(t,10),height:parseInt(e,10),fromLeft:!0,fromTop:!0,mode:"absolute",duration:i,finish:function(){s.endSlide()}},this.hideOption={width:this.options.showSize,height:parseInt(e,10),fromLeft:!0,fromTop:!0,mode:"absolute",duration:i,finish:function(){s.endHide()}}}catch(t){n.w.printStackTrace(t,null,this)}},r.prototype.setLeft=function(t,e){try{this.main.style.left="0px",this.slideStatus||(this.render.style.width=this.options.showSize+"px",this.render.style.left=parseInt(this.render.style.left,10)+parseInt(t,10)-this.options.showSize+"px"),this.render.style.display="";var i=(parseInt(t,10)-this.options.showSize)/this.options.moveSize*.015,s=this;this.slideOption={width:parseInt(t,10),height:parseInt(e,10),fromLeft:!1,fromTop:!0,mode:"absolute",duration:i,finish:function(){s.endSlide()}},this.hideOption={width:this.options.showSize,height:parseInt(e,10),fromLeft:!1,fromTop:!0,mode:"absolute",duration:i,finish:function(){s.endHide()}}}catch(t){n.w.printStackTrace(t,null,this)}},r.prototype.setDown=function(t,e){try{this.main.style.bottom="0px",
this.slideStatus||(this.render.style.height=this.options.showSize+"px"),this.render.style.display="";var i=(parseInt(e,10)-this.options.showSize)/this.options.moveSize*.015,s=this;this.slideOption={width:parseInt(t,10),height:parseInt(e,10),fromLeft:!0,fromTop:!0,mode:"absolute",duration:i,finish:function(){s.endSlide()}},this.hideOption={width:parseInt(t,10),height:this.options.showSize,fromLeft:!0,fromTop:!0,mode:"absolute",duration:i,finish:function(){s.endHide()}}}catch(t){n.w.printStackTrace(t,null,this)}},r.prototype.setUp=function(t,e){try{this.main.style.top="0px",this.slideStatus||(this.render.style.height=this.options.showSize+"px",this.render.style.top=parseInt(this.render.style.top,10)+parseInt(e,10)-this.options.showSize+"px"),this.render.style.display="";var i=(parseInt(e,10)-this.options.showSize)/this.options.moveSize*.015,s=this;this.slideOption={width:parseInt(t,10),height:parseInt(e,10),fromLeft:!0,fromTop:!1,mode:"absolute",duration:i,finish:function(){s.endSlide()}},this.hideOption={width:parseInt(t,10),height:this.options.showSize,fromLeft:!0,fromTop:!1,mode:"absolute",duration:i,finish:function(){s.endHide()}}}catch(t){n.w.printStackTrace(t,null,this)}},r.prototype.endSlide=function(){try{switch(this.nowMove=2,this.slideStatus=!0,this.options.slideDirection){case"right":case"left":this.render.style.top=this.originStyle.top,this.render.style.height=this.originStyle.height;break;case"up":case"down":this.render.style.left=this.originStyle.left,this.render.style.width=this.originStyle.width}h.B.fireEvent(this,"onSlideEnd")}catch(t){n.w.printStackTrace(t,null,this)}},r.prototype.endHide=function(t){try{switch(this.nowMove=0,this.slideStatus=!1,this.options.slideDirection){case"right":case"left":this.render.style.top=this.originStyle.top,this.render.style.height=this.originStyle.height;break;case"up":case"down":this.render.style.left=this.originStyle.left,this.render.style.width=this.originStyle.width}h.B.fireEvent(this,"onHideEnd")}catch(t){n.w.printStackTrace(t,null,this)}},r.prototype.isMouseInRender=function(t){try{var e=WebSquare.style.getAbsoluteLeft(this.render),i=WebSquare.style.getAbsoluteTop(this.render),s=this.render.offsetWidth,o=this.render.offsetHeight,r=h.B.getMouseX(t),d=h.B.getMouseY(t);return r>e&&r<e+s&&d>i&&d<i+o}catch(t){n.w.printStackTrace(t,null,this)}},r.prototype.isMouseInShownArea=function(t){try{var e,i,s,o;switch(this.options.slideDirection){case"right":e=WebSquare.style.getAbsoluteLeft(this.render)+this.render.offsetWidth-this.options.showSize,i=WebSquare.style.getAbsoluteTop(this.render),s=this.options.showSize,o=this.render.offsetHeight;break;case"left":e=WebSquare.style.getAbsoluteLeft(this.render),i=WebSquare.style.getAbsoluteTop(this.render),s=this.options.showSize,o=this.render.offsetHeight;break;case"up":e=WebSquare.style.getAbsoluteLeft(this.render),i=WebSquare.style.getAbsoluteTop(this.render),s=this.render.offsetWidth,o=this.options.showSize;break;case"down":e=WebSquare.style.getAbsoluteLeft(this.render),i=WebSquare.style.getAbsoluteTop(this.render)+this.render.offsetHeight-this.options.showSize,s=this.render.offsetWidth,o=this.options.showSize}var r=h.B.getMouseX(t),d=h.B.getMouseY(t);return r>e&&r<e+s&&d>i&&d<i+o}catch(t){n.w.printStackTrace(t,null,this)}},r.prototype.startSlide=function(){try{if(1==this.nowMove||2==this.nowMove)return;3==this.nowMove&&WebSquare.effect.effectManager.remove(this.slideEffect),this.nowMove=1,h.B.fireEvent(this,"onSlideStart"),this.slideEffect=new WebSquare.effect.resize(this.render,this.slideOption)}catch(t){n.w.printStackTrace(t,null,this)}},r.prototype.startHide=function(){try{if(0==this.nowMove||3==this.nowMove)return;1==this.nowMove&&WebSquare.effect.effectManager.remove(this.slideEffect),this.nowMove=3,h.B.fireEvent(this,"onHideStart"),this.slideEffect=new WebSquare.effect.resize(this.render,this.hideOption)}catch(t){n.w.printStackTrace(t,null,this)}},r.prototype.setSlideHide=function(t){try{
if("slide"===t)switch(1!=this.nowMove&&3!=this.nowMove||WebSquare.effect.effectManager.remove(this.slideEffect),this.nowMove=2,this.slideStatus||("left"===this.options.slideDirection?this.render.style.left=parseInt(this.render.style.left,10)-parseInt(this.originStyle.width,10)+this.options.showSize+"px":"up"===this.options.slideDirection&&(this.render.style.top=parseInt(this.render.style.top,10)-parseInt(this.originStyle.height,10)+this.options.showSize+"px")),this.slideStatus=!0,this.options.slideDirection){case"right":case"left":this.render.style.width=this.originStyle.width;break;case"up":case"down":this.render.style.height=this.originStyle.height}else if("hide"===t)switch(1!=this.nowMove&&3!=this.nowMove||WebSquare.effect.effectManager.remove(this.slideEffect),this.nowMove=0,this.slideStatus&&("left"===this.options.slideDirection?this.render.style.left=parseInt(this.render.style.left,10)+parseInt(this.originStyle.width,10)-this.options.showSize+"px":"up"===this.options.slideDirection&&(this.render.style.top=parseInt(this.render.style.top,10)+parseInt(this.originStyle.height,10)-this.options.showSize+"px")),this.slideStatus=!1,this.options.slideDirection){case"right":case"left":this.render.style.width=this.options.showSize+"px";break;case"up":case"down":this.render.style.height=this.options.showSize+"px"}}catch(t){n.w.printStackTrace(t,null,this)}},r.prototype.isOpen=function(){try{return this.slideStatus}catch(t){n.w.printStackTrace(t,null,this)}},r.prototype.handleSlideEvent=function(t){try{this.startSlide()}catch(t){n.w.printStackTrace(t,null,this)}},r.prototype.handleHideEvent=function(t){try{if("onmouseout"==this.options.hideEvent&&this.isMouseInRender(t))return;if("partial"==this.options.eventArea&&!this.isMouseInShownArea(t))return;this.startHide()}catch(t){n.w.printStackTrace(t,null,this)}},r.prototype.handleToggleEvent=function(t){try{0==this.slideStatus?this.handleSlideEvent(t):this.handleHideEvent(t)}catch(t){n.w.printStackTrace(t,null,this)}},r.prototype.setHeight=function(t){this.render&&("left"!=this.options.slideDirection&&"right"!=this.options.slideDirection||null!=(t=parseInt(t,10))&&!isNaN(t)&&t>=0&&(this.render.style.height=t+"px",this.main.style.height=t+"px",this.slideOption.height=t,this.hideOption.height=t))},r.prototype.setWidth=function(t){this.render&&("up"!=this.options.slideDirection&&"down"!=this.options.slideDirection||null!=(t=parseInt(t,10))&&!isNaN(t)&&t>=0&&(this.render.style.width=t+"px",this.main.style.width=t+"px",this.slideOption.width=t,this.hideOption.width=t))}}}]);