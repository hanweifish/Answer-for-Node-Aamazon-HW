$(function(e){function t(t){var s=t||window.event,a=h.call(arguments,1),u=0,r=0,d=0,f=0;if(t=e.event.fix(s),t.type="mousewheel","detail"in s&&(d=-1*s.detail),"wheelDelta"in s&&(d=s.wheelDelta),"wheelDeltaY"in s&&(d=s.wheelDeltaY),"wheelDeltaX"in s&&(r=-1*s.wheelDeltaX),"axis"in s&&s.axis===s.HORIZONTAL_AXIS&&(r=-1*d,d=0),u=0===d?r:d,"deltaY"in s&&(d=-1*s.deltaY,u=d),"deltaX"in s&&(r=s.deltaX,0===d&&(u=-1*r)),0!==d||0!==r){if(1===s.deltaMode){var w=e.data(this,"mousewheel-line-height");u*=w,d*=w,r*=w}else if(2===s.deltaMode){var c=e.data(this,"mousewheel-page-height");u*=c,d*=c,r*=c}return f=Math.max(Math.abs(d),Math.abs(r)),(!o||o>f)&&(o=f,i(s,f)&&(o/=40)),i(s,f)&&(u/=40,r/=40,d/=40),u=Math[u>=1?"floor":"ceil"](u/o),r=Math[r>=1?"floor":"ceil"](r/o),d=Math[d>=1?"floor":"ceil"](d/o),t.deltaX=r,t.deltaY=d,t.deltaFactor=o,t.deltaMode=0,a.unshift(t,u,r,d),l&&clearTimeout(l),l=setTimeout(n,200),(e.event.dispatch||e.event.handle).apply(this,a)}}function n(){o=null}function i(e,t){return r.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120===0}var l,o,s=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],a="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],h=Array.prototype.slice;if(e.event.fixHooks)for(var u=s.length;u;)e.event.fixHooks[s[--u]]=e.event.mouseHooks;var r=e.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener)for(var n=a.length;n;)this.addEventListener(a[--n],t,!1);else this.onmousewheel=t;e.data(this,"mousewheel-line-height",r.getLineHeight(this)),e.data(this,"mousewheel-page-height",r.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=a.length;e;)this.removeEventListener(a[--e],t,!1);else this.onmousewheel=null},getLineHeight:function(t){return parseInt(e(t)["offsetParent"in e.fn?"offsetParent":"parent"]().css("fontSize"),10)},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});