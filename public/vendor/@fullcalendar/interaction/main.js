!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@fullcalendar/core")):"function"==typeof define&&define.amd?define(["exports","@fullcalendar/core"],t):t((e=e||self).FullCalendarInteraction={},e.FullCalendar)}(this,function(e,E){"use strict";var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function t(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var m=function(){return(m=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};E.config.touchMouseIgnoreWait=500;var n=0,i=0,o=!1,l=(a.prototype.destroy=function(){this.containerEl.removeEventListener("mousedown",this.handleMouseDown),this.containerEl.removeEventListener("touchstart",this.handleTouchStart,{passive:!0}),--i||window.removeEventListener("touchmove",s,{passive:!1})},a.prototype.tryStart=function(e){var t=this.querySubjectEl(e),e=e.target;return!(!t||this.handleSelector&&!E.elementClosest(e,this.handleSelector))&&(this.subjectEl=t,this.downEl=e,this.isDragging=!0,!(this.wasTouchScroll=!1))},a.prototype.cleanup=function(){o=!1,this.isDragging=!1,this.subjectEl=null,this.downEl=null,this.destroyScrollWatch()},a.prototype.querySubjectEl=function(e){return this.selector?E.elementClosest(e.target,this.selector):this.containerEl},a.prototype.shouldIgnoreMouse=function(){return n||this.isTouchDragging},a.prototype.cancelTouchScroll=function(){this.isDragging&&(o=!0)},a.prototype.initScrollWatch=function(e){this.shouldWatchScroll&&(this.recordCoords(e),window.addEventListener("scroll",this.handleScroll,!0))},a.prototype.recordCoords=function(e){this.shouldWatchScroll&&(this.prevPageX=e.pageX,this.prevPageY=e.pageY,this.prevScrollX=window.pageXOffset,this.prevScrollY=window.pageYOffset)},a.prototype.destroyScrollWatch=function(){this.shouldWatchScroll&&window.removeEventListener("scroll",this.handleScroll,!0)},a.prototype.createEventFromMouse=function(e,t){var n=0,r=0;return t?(this.origPageX=e.pageX,this.origPageY=e.pageY):(n=e.pageX-this.origPageX,r=e.pageY-this.origPageY),{origEvent:e,isTouch:!1,subjectEl:this.subjectEl,pageX:e.pageX,pageY:e.pageY,deltaX:n,deltaY:r}},a.prototype.createEventFromTouch=function(e,t){var n,r=e.touches,i=0,o=0,r=r&&r.length?(n=r[0].pageX,r[0].pageY):(n=e.pageX,e.pageY);return t?(this.origPageX=n,this.origPageY=r):(i=n-this.origPageX,o=r-this.origPageY),{origEvent:e,isTouch:!0,subjectEl:this.subjectEl,pageX:n,pageY:r,deltaX:i,deltaY:o}},a);function a(e){var r=this;this.subjectEl=null,this.downEl=null,this.selector="",this.handleSelector="",this.shouldIgnoreMove=!1,this.shouldWatchScroll=!0,this.isDragging=!1,this.isTouchDragging=!1,this.wasTouchScroll=!1,this.handleMouseDown=function(e){var t;r.shouldIgnoreMouse()||(0!==(t=e).button||t.ctrlKey)||!r.tryStart(e)||(e=r.createEventFromMouse(e,!0),r.emitter.trigger("pointerdown",e),r.initScrollWatch(e),r.shouldIgnoreMove||document.addEventListener("mousemove",r.handleMouseMove),document.addEventListener("mouseup",r.handleMouseUp))},this.handleMouseMove=function(e){e=r.createEventFromMouse(e);r.recordCoords(e),r.emitter.trigger("pointermove",e)},this.handleMouseUp=function(e){document.removeEventListener("mousemove",r.handleMouseMove),document.removeEventListener("mouseup",r.handleMouseUp),r.emitter.trigger("pointerup",r.createEventFromMouse(e)),r.cleanup()},this.handleTouchStart=function(e){var t;r.tryStart(e)&&(r.isTouchDragging=!0,t=r.createEventFromTouch(e,!0),r.emitter.trigger("pointerdown",t),r.initScrollWatch(t),e=e.target,r.shouldIgnoreMove||e.addEventListener("touchmove",r.handleTouchMove),e.addEventListener("touchend",r.handleTouchEnd),e.addEventListener("touchcancel",r.handleTouchEnd),window.addEventListener("scroll",r.handleTouchScroll,!0))},this.handleTouchMove=function(e){e=r.createEventFromTouch(e);r.recordCoords(e),r.emitter.trigger("pointermove",e)},this.handleTouchEnd=function(e){var t;r.isDragging&&((t=e.target).removeEventListener("touchmove",r.handleTouchMove),t.removeEventListener("touchend",r.handleTouchEnd),t.removeEventListener("touchcancel",r.handleTouchEnd),window.removeEventListener("scroll",r.handleTouchScroll,!0),r.emitter.trigger("pointerup",r.createEventFromTouch(e)),r.cleanup(),r.isTouchDragging=!1,n++,setTimeout(function(){n--},E.config.touchMouseIgnoreWait))},this.handleTouchScroll=function(){r.wasTouchScroll=!0},this.handleScroll=function(e){var t,n;r.shouldIgnoreMove||(t=window.pageXOffset-r.prevScrollX+r.prevPageX,n=window.pageYOffset-r.prevScrollY+r.prevPageY,r.emitter.trigger("pointermove",{origEvent:e,isTouch:r.isTouchDragging,subjectEl:r.subjectEl,pageX:t,pageY:n,deltaX:t-r.origPageX,deltaY:n-r.origPageY}))},this.containerEl=e,this.emitter=new E.EmitterMixin,e.addEventListener("mousedown",this.handleMouseDown),e.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),i++||window.addEventListener("touchmove",s,{passive:!1})}function s(e){o&&e.preventDefault()}var c=(d.prototype.start=function(e,t,n){this.sourceEl=e,this.sourceElRect=this.sourceEl.getBoundingClientRect(),this.origScreenX=t-window.pageXOffset,this.origScreenY=n-window.pageYOffset,this.deltaX=0,this.deltaY=0,this.updateElPosition()},d.prototype.handleMove=function(e,t){this.deltaX=e-window.pageXOffset-this.origScreenX,this.deltaY=t-window.pageYOffset-this.origScreenY,this.updateElPosition()},d.prototype.setIsVisible=function(e){e?this.isVisible||(this.mirrorEl&&(this.mirrorEl.style.display=""),this.isVisible=e,this.updateElPosition()):this.isVisible&&(this.mirrorEl&&(this.mirrorEl.style.display="none"),this.isVisible=e)},d.prototype.stop=function(e,t){function n(){r.cleanup(),t()}var r=this;e&&this.mirrorEl&&this.isVisible&&this.revertDuration&&(this.deltaX||this.deltaY)?this.doRevertAnimation(n,this.revertDuration):setTimeout(n,0)},d.prototype.doRevertAnimation=function(e,t){var n=this.mirrorEl,r=this.sourceEl.getBoundingClientRect();n.style.transition="top "+t+"ms,left "+t+"ms",E.applyStyle(n,{left:r.left,top:r.top}),E.whenTransitionDone(n,function(){n.style.transition="",e()})},d.prototype.cleanup=function(){this.mirrorEl&&(E.removeElement(this.mirrorEl),this.mirrorEl=null),this.sourceEl=null},d.prototype.updateElPosition=function(){this.sourceEl&&this.isVisible&&E.applyStyle(this.getMirrorEl(),{left:this.sourceElRect.left+this.deltaX,top:this.sourceElRect.top+this.deltaY})},d.prototype.getMirrorEl=function(){var e=this.sourceElRect,t=this.mirrorEl;return t||((t=this.mirrorEl=this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"),t.classList.add("fc-dragging"),E.applyStyle(t,{position:"fixed",zIndex:this.zIndex,visibility:"",boxSizing:"border-box",width:e.right-e.left,height:e.bottom-e.top,right:"auto",bottom:"auto",margin:0}),this.parentNode.appendChild(t)),t},d);function d(){this.isVisible=!1,this.sourceEl=null,this.mirrorEl=null,this.sourceElRect=null,this.parentNode=document.body,this.zIndex=9999,this.revertDuration=0}var g,u=(t(h,g=E.ScrollController),h.prototype.destroy=function(){this.doesListening&&this.getEventTarget().removeEventListener("scroll",this.handleScroll)},h.prototype.getScrollTop=function(){return this.scrollTop},h.prototype.getScrollLeft=function(){return this.scrollLeft},h.prototype.setScrollTop=function(e){this.scrollController.setScrollTop(e),this.doesListening||(this.scrollTop=Math.max(Math.min(e,this.getMaxScrollTop()),0),this.handleScrollChange())},h.prototype.setScrollLeft=function(e){this.scrollController.setScrollLeft(e),this.doesListening||(this.scrollLeft=Math.max(Math.min(e,this.getMaxScrollLeft()),0),this.handleScrollChange())},h.prototype.getClientWidth=function(){return this.clientWidth},h.prototype.getClientHeight=function(){return this.clientHeight},h.prototype.getScrollWidth=function(){return this.scrollWidth},h.prototype.getScrollHeight=function(){return this.scrollHeight},h.prototype.handleScrollChange=function(){},h);function h(e,t){var n=g.call(this)||this;return n.handleScroll=function(){n.scrollTop=n.scrollController.getScrollTop(),n.scrollLeft=n.scrollController.getScrollLeft(),n.handleScrollChange()},n.scrollController=e,n.doesListening=t,n.scrollTop=n.origScrollTop=e.getScrollTop(),n.scrollLeft=n.origScrollLeft=e.getScrollLeft(),n.scrollWidth=e.getScrollWidth(),n.scrollHeight=e.getScrollHeight(),n.clientWidth=e.getClientWidth(),n.clientHeight=e.getClientHeight(),n.clientRect=n.computeClientRect(),n.doesListening&&n.getEventTarget().addEventListener("scroll",n.handleScroll),n}var p,v=(t(f,p=u),f.prototype.getEventTarget=function(){return this.scrollController.el},f.prototype.computeClientRect=function(){return E.computeInnerRect(this.scrollController.el)},f);function f(e,t){return p.call(this,new E.ElementScrollController(e),t)||this}var S,y=(t(D,S=u),D.prototype.getEventTarget=function(){return window},D.prototype.computeClientRect=function(){return{left:this.scrollLeft,right:this.scrollLeft+this.clientWidth,top:this.scrollTop,bottom:this.scrollTop+this.clientHeight}},D.prototype.handleScrollChange=function(){this.clientRect=this.computeClientRect()},D);function D(e){return S.call(this,new E.WindowScrollController,e)||this}var w=("function"==typeof performance?performance:Date).now,T=(M.prototype.start=function(e,t){this.isEnabled&&(this.scrollCaches=this.buildCaches(),this.pointerScreenX=null,this.pointerScreenY=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.handleMove(e,t))},M.prototype.handleMove=function(e,t){var n,r;this.isEnabled&&(n=e-window.pageXOffset,r=t-window.pageYOffset,e=null===this.pointerScreenY?0:r-this.pointerScreenY,t=null===this.pointerScreenX?0:n-this.pointerScreenX,e<0?this.everMovedUp=!0:0<e&&(this.everMovedDown=!0),t<0?this.everMovedLeft=!0:0<t&&(this.everMovedRight=!0),this.pointerScreenX=n,this.pointerScreenY=r,this.isAnimating||(this.isAnimating=!0,this.requestAnimation(w())))},M.prototype.stop=function(){if(this.isEnabled){this.isAnimating=!1;for(var e=0,t=this.scrollCaches;e<t.length;e++)t[e].destroy();this.scrollCaches=null}},M.prototype.requestAnimation=function(e){this.msSinceRequest=e,requestAnimationFrame(this.animate)},M.prototype.handleSide=function(e,t){var n=e.scrollCache,r=this.edgeThreshold,i=r-e.distance,o=i*i/(r*r)*this.maxVelocity*t,a=1;switch(e.name){case"left":a=-1;case"right":n.setScrollLeft(n.getScrollLeft()+o*a);break;case"top":a=-1;case"bottom":n.setScrollTop(n.getScrollTop()+o*a)}},M.prototype.computeBestEdge=function(e,t){for(var n=this.edgeThreshold,r=null,i=0,o=this.scrollCaches;i<o.length;i++){var a=o[i],l=a.clientRect,s=e-l.left,c=l.right-e,d=t-l.top,l=l.bottom-t;0<=s&&0<=c&&0<=d&&0<=l&&(d<=n&&this.everMovedUp&&a.canScrollUp()&&(!r||r.distance>d)&&(r={scrollCache:a,name:"top",distance:d}),l<=n&&this.everMovedDown&&a.canScrollDown()&&(!r||r.distance>l)&&(r={scrollCache:a,name:"bottom",distance:l}),s<=n&&this.everMovedLeft&&a.canScrollLeft()&&(!r||r.distance>s)&&(r={scrollCache:a,name:"left",distance:s}),c<=n&&this.everMovedRight&&a.canScrollRight()&&(!r||r.distance>c)&&(r={scrollCache:a,name:"right",distance:c}))}return r},M.prototype.buildCaches=function(){return this.queryScrollEls().map(function(e){return e===window?new y(!1):new v(e,!1)})},M.prototype.queryScrollEls=function(){for(var e=[],t=0,n=this.scrollQuery;t<n.length;t++){var r=n[t];"object"==typeof r?e.push(r):e.push.apply(e,Array.prototype.slice.call(document.querySelectorAll(r)))}return e},M);function M(){var n=this;this.isEnabled=!0,this.scrollQuery=[window,".fc-scroller"],this.edgeThreshold=50,this.maxVelocity=300,this.pointerScreenX=null,this.pointerScreenY=null,this.isAnimating=!1,this.scrollCaches=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.animate=function(){var e,t;n.isAnimating&&((e=n.computeBestEdge(n.pointerScreenX+window.pageXOffset,n.pointerScreenY+window.pageYOffset))?(t=w(),n.handleSide(e,(t-n.msSinceRequest)/1e3),n.requestAnimation(t)):n.isAnimating=!1)}}var b,C=(t(R,b=E.ElementDragging),R.prototype.destroy=function(){this.pointer.destroy()},R.prototype.startDelay=function(e){var t=this;"number"==typeof this.delay?this.delayTimeoutId=setTimeout(function(){t.delayTimeoutId=null,t.handleDelayEnd(e)},this.delay):this.handleDelayEnd(e)},R.prototype.handleDelayEnd=function(e){this.isDelayEnded=!0,this.tryStartDrag(e)},R.prototype.handleDistanceSurpassed=function(e){this.isDistanceSurpassed=!0,this.tryStartDrag(e)},R.prototype.tryStartDrag=function(e){this.isDelayEnded&&this.isDistanceSurpassed&&(this.pointer.wasTouchScroll&&!this.touchScrollAllowed||(this.isDragging=!0,this.mirrorNeedsRevert=!1,this.autoScroller.start(e.pageX,e.pageY),this.emitter.trigger("dragstart",e),!1===this.touchScrollAllowed&&this.pointer.cancelTouchScroll()))},R.prototype.tryStopDrag=function(e){this.mirror.stop(this.mirrorNeedsRevert,this.stopDrag.bind(this,e))},R.prototype.stopDrag=function(e){this.isDragging=!1,this.emitter.trigger("dragend",e)},R.prototype.setIgnoreMove=function(e){this.pointer.shouldIgnoreMove=e},R.prototype.setMirrorIsVisible=function(e){this.mirror.setIsVisible(e)},R.prototype.setMirrorNeedsRevert=function(e){this.mirrorNeedsRevert=e},R.prototype.setAutoScrollEnabled=function(e){this.autoScroller.isEnabled=e},R);function R(e){var n=b.call(this,e)||this;n.delay=null,n.minDistance=0,n.touchScrollAllowed=!0,n.mirrorNeedsRevert=!1,n.isInteracting=!1,n.isDragging=!1,n.isDelayEnded=!1,n.isDistanceSurpassed=!1,n.delayTimeoutId=null,n.onPointerDown=function(e){n.isDragging||(n.isInteracting=!0,n.isDelayEnded=!1,n.isDistanceSurpassed=!1,E.preventSelection(document.body),E.preventContextMenu(document.body),e.isTouch||e.origEvent.preventDefault(),n.emitter.trigger("pointerdown",e),n.pointer.shouldIgnoreMove||(n.mirror.setIsVisible(!1),n.mirror.start(e.subjectEl,e.pageX,e.pageY),n.startDelay(e),n.minDistance||n.handleDistanceSurpassed(e)))},n.onPointerMove=function(e){var t;n.isInteracting&&(n.emitter.trigger("pointermove",e),n.isDistanceSurpassed||(t=n.minDistance)*t<=(t=e.deltaX)*t+(t=e.deltaY)*t&&n.handleDistanceSurpassed(e),n.isDragging&&("scroll"!==e.origEvent.type&&(n.mirror.handleMove(e.pageX,e.pageY),n.autoScroller.handleMove(e.pageX,e.pageY)),n.emitter.trigger("dragmove",e)))},n.onPointerUp=function(e){n.isInteracting&&(n.isInteracting=!1,E.allowSelection(document.body),E.allowContextMenu(document.body),n.emitter.trigger("pointerup",e),n.isDragging&&(n.autoScroller.stop(),n.tryStopDrag(e)),n.delayTimeoutId&&(clearTimeout(n.delayTimeoutId),n.delayTimeoutId=null))};e=n.pointer=new l(e);return e.emitter.on("pointerdown",n.onPointerDown),e.emitter.on("pointermove",n.onPointerMove),e.emitter.on("pointerup",n.onPointerUp),n.mirror=new c,n.autoScroller=new T,n}var I=(P.prototype.destroy=function(){for(var e=0,t=this.scrollCaches;e<t.length;e++)t[e].destroy()},P.prototype.computeLeft=function(){for(var e=this.origRect.left,t=0,n=this.scrollCaches;t<n.length;t++){var r=n[t];e+=r.origScrollLeft-r.getScrollLeft()}return e},P.prototype.computeTop=function(){for(var e=this.origRect.top,t=0,n=this.scrollCaches;t<n.length;t++){var r=n[t];e+=r.origScrollTop-r.getScrollTop()}return e},P.prototype.isWithinClipping=function(e,t){for(var n={left:e,top:t},r=0,i=this.scrollCaches;r<i.length;r++){var o=i[r];if(!function(e){e=e.tagName;return"HTML"===e||"BODY"===e}(o.getEventTarget())&&!E.pointInsideRect(n,o.clientRect))return!1}return!0},P);function P(e){this.origRect=E.computeRect(e),this.scrollCaches=E.getClippingParents(e).map(function(e){return new v(e,!0)})}var L=(j.prototype.processFirstCoord=function(e){var t,n={left:e.pageX,top:e.pageY},r=n,e=e.subjectEl;e!==document&&(t=E.computeRect(e),r=E.constrainPoint(r,t));e=this.initialHit=this.queryHitForOffset(r.left,r.top);e?(this.useSubjectCenter&&t&&((e=E.intersectRects(t,e.rect))&&(r=E.getRectCenter(e))),this.coordAdjust=E.diffPoints(r,n)):this.coordAdjust={left:0,top:0}},j.prototype.handleMove=function(e,t){var n=this.queryHitForOffset(e.pageX+this.coordAdjust.left,e.pageY+this.coordAdjust.top);!t&&A(this.movingHit,n)||(this.movingHit=n,this.emitter.trigger("hitupdate",n,!1,e))},j.prototype.prepareHits=function(){this.offsetTrackers=E.mapHash(this.droppableStore,function(e){return e.component.buildPositionCaches(),new I(e.el)})},j.prototype.releaseHits=function(){var e,t=this.offsetTrackers;for(e in t)t[e].destroy();this.offsetTrackers={}},j.prototype.queryHitForOffset=function(e,t){var n,r=this.droppableStore,i=this.offsetTrackers,o=null;for(n in r){var a,l,s,c,d,g=r[n].component,u=i[n];u.isWithinClipping(e,t)&&(a=u.computeLeft(),s=t-(l=u.computeTop()),d=(c=u.origRect).right-c.left,u=c.bottom-c.top,0<=(c=e-a)&&c<d&&0<=s&&s<u&&(!(u=g.queryHit(c,s,d,u))||g.props.dateProfile&&!E.rangeContainsRange(g.props.dateProfile.activeRange,u.dateSpan.range)||o&&!(u.layer>o.layer)||(u.rect.left+=a,u.rect.right+=a,u.rect.top+=l,u.rect.bottom+=l,o=u)))}return o},j);function j(e,t){var n=this;this.useSubjectCenter=!1,this.requireInitial=!0,this.initialHit=null,this.movingHit=null,this.finalHit=null,this.handlePointerDown=function(e){var t=n.dragging;n.initialHit=null,n.movingHit=null,n.finalHit=null,n.prepareHits(),n.processFirstCoord(e),n.initialHit||!n.requireInitial?(t.setIgnoreMove(!1),n.emitter.trigger("pointerdown",e)):t.setIgnoreMove(!0)},this.handleDragStart=function(e){n.emitter.trigger("dragstart",e),n.handleMove(e,!0)},this.handleDragMove=function(e){n.emitter.trigger("dragmove",e),n.handleMove(e)},this.handlePointerUp=function(e){n.releaseHits(),n.emitter.trigger("pointerup",e)},this.handleDragEnd=function(e){n.movingHit&&n.emitter.trigger("hitupdate",null,!0,e),n.finalHit=n.movingHit,n.movingHit=null,n.emitter.trigger("dragend",e)},this.droppableStore=t,e.emitter.on("pointerdown",this.handlePointerDown),e.emitter.on("dragstart",this.handleDragStart),e.emitter.on("dragmove",this.handleDragMove),e.emitter.on("pointerup",this.handlePointerUp),e.emitter.on("dragend",this.handleDragEnd),this.dragging=e,this.emitter=new E.EmitterMixin}function A(e,t){return!e&&!t||Boolean(e)===Boolean(t)&&E.isDateSpansEqual(e.dateSpan,t.dateSpan)}var x,H=(t(N,x=E.Interaction),N.prototype.destroy=function(){this.dragging.destroy()},N);function N(e){var o=x.call(this,e)||this;o.handlePointerDown=function(e){var t=o.dragging;t.setIgnoreMove(!o.component.isValidDateDownEl(t.pointer.downEl))},o.handleDragEnd=function(e){var t,n=o.component.context,r=n.calendar,i=n.view;o.dragging.pointer.wasTouchScroll||(n=(t=o.hitDragging).initialHit,t=t.finalHit,n&&t&&A(n,t)&&r.triggerDateClick(n.dateSpan,n.dayEl,i,e.origEvent))};var t=e.component;o.dragging=new C(t.el),o.dragging.autoScroller.isEnabled=!1;e=o.hitDragging=new L(o.dragging,E.interactionSettingsToStore(e));return e.emitter.on("pointerdown",o.handlePointerDown),e.emitter.on("dragend",o.handleDragEnd),o}var V,Y=(t(_,V=E.Interaction),_.prototype.destroy=function(){this.dragging.destroy()},_);function _(e){var o=V.call(this,e)||this;o.dragSelection=null,o.handlePointerDown=function(e){var t=o.component,n=o.dragging,r=t.context.options.selectable&&t.isValidDateDownEl(e.origEvent.target);n.setIgnoreMove(!r),n.delay=e.isTouch?function(e){var t=e.context.options,e=t.selectLongPressDelay;null==e&&(e=t.longPressDelay);return e}(t):null},o.handleDragStart=function(e){o.component.context.calendar.unselect(e)},o.handleHitUpdate=function(e,t){var n=o.component.context.calendar,r=null,i=!1;e&&((r=function(e,t,n){var r=e.dateSpan,i=t.dateSpan,i=[r.range.start,r.range.end,i.range.start,i.range.end];i.sort(E.compareNumbers);for(var o={},a=0,l=n;a<l.length;a++){var s=(0,l[a])(e,t);if(!1===s)return null;s&&m(o,s)}return o.range={start:i[0],end:i[3]},o.allDay=r.allDay,o}(o.hitDragging.initialHit,e,n.pluginSystem.hooks.dateSelectionTransformers))&&o.component.isDateSelectionValid(r)||(i=!0,r=null)),r?n.dispatch({type:"SELECT_DATES",selection:r}):t||n.dispatch({type:"UNSELECT_DATES"}),i?E.disableCursor():E.enableCursor(),t||(o.dragSelection=r)},o.handlePointerUp=function(e){o.dragSelection&&(o.component.context.calendar.triggerDateSelect(o.dragSelection,e),o.dragSelection=null)};var t=e.component,n=t.context.options,t=o.dragging=new C(t.el);t.touchScrollAllowed=!1,t.minDistance=n.selectMinDistance||0,t.autoScroller.isEnabled=n.dragScroll;e=o.hitDragging=new L(o.dragging,E.interactionSettingsToStore(e));return e.emitter.on("pointerdown",o.handlePointerDown),e.emitter.on("dragstart",o.handleDragStart),e.emitter.on("hitupdate",o.handleHitUpdate),e.emitter.on("pointerup",o.handlePointerUp),o}var X,U=(t(O,X=E.Interaction),O.prototype.destroy=function(){this.dragging.destroy()},O.prototype.displayDrag=function(e,t){var n=this.component.context.calendar,r=this.receivingCalendar;r&&r!==e&&(r===n?r.dispatch({type:"SET_EVENT_DRAG",state:{affectedEvents:t.affectedEvents,mutatedEvents:E.createEmptyEventStore(),isEvent:!0,origSeg:t.origSeg}}):r.dispatch({type:"UNSET_EVENT_DRAG"})),e&&e.dispatch({type:"SET_EVENT_DRAG",state:t})},O.prototype.clearDrag=function(){var e=this.component.context.calendar,t=this.receivingCalendar;t&&t.dispatch({type:"UNSET_EVENT_DRAG"}),e!==t&&e.dispatch({type:"UNSET_EVENT_DRAG"})},O.prototype.cleanup=function(){this.subjectSeg=null,this.isDragging=!1,this.eventRange=null,this.relevantEvents=null,this.receivingCalendar=null,this.validMutation=null,this.mutatedRelevantEvents=null},O.SELECTOR=".fc-draggable, .fc-resizable",O);function O(e){var f=X.call(this,e)||this;f.subjectSeg=null,f.isDragging=!1,f.eventRange=null,f.relevantEvents=null,f.receivingCalendar=null,f.validMutation=null,f.mutatedRelevantEvents=null,f.handlePointerDown=function(e){var t=e.origEvent.target,n=f.component,r=f.dragging,i=r.mirror,o=n.context.options,a=n.context.calendar,l=f.subjectSeg=E.getElSeg(e.subjectEl),l=(f.eventRange=l.eventRange).instance.instanceId;f.relevantEvents=E.getRelevantEvents(a.state.eventStore,l),r.minDistance=e.isTouch?0:o.eventDragMinDistance,r.delay=e.isTouch&&l!==n.props.eventSelection?function(e){var t=e.context.options,e=t.eventLongPressDelay;null==e&&(e=t.longPressDelay);return e}(n):null,i.parentNode=a.el,i.revertDuration=o.dragRevertDuration;t=n.isValidSegDownEl(t)&&!E.elementClosest(t,".fc-resizer");r.setIgnoreMove(!t),f.isDragging=t&&e.subjectEl.classList.contains("fc-draggable")},f.handleDragStart=function(e){var t=f.component.context,n=t.calendar,r=f.eventRange,i=r.instance.instanceId;e.isTouch?i!==f.component.props.eventSelection&&n.dispatch({type:"SELECT_EVENT",eventInstanceId:i}):n.dispatch({type:"UNSELECT_EVENT"}),f.isDragging&&(n.unselect(e),n.publiclyTrigger("eventDragStart",[{el:f.subjectSeg.el,event:new E.EventApi(n,r.def,r.instance),jsEvent:e.origEvent,view:t.view}]))},f.handleHitUpdate=function(e,t){var n,r,i,o,a,l,s,c,d,g;f.isDragging&&(n=f.relevantEvents,r=f.hitDragging.initialHit,i=f.component.context.calendar,a=o=d=null,l=!1,s={affectedEvents:n,mutatedEvents:E.createEmptyEventStore(),isEvent:!0,origSeg:f.subjectSeg},e&&(d=(c=e.component).context.calendar,g=c.context.options,i===d||g.editable&&g.droppable?(o=function(e,t,n){var r=e.dateSpan,i=t.dateSpan,o=r.range.start,a=i.range.start,l={};r.allDay!==i.allDay&&(l.allDay=i.allDay,l.hasEnd=t.component.context.options.allDayMaintainDuration,i.allDay&&(o=E.startOfDay(o)));a=E.diffDates(o,a,e.component.context.dateEnv,e.component===t.component?e.component.largeUnit:null);a.milliseconds&&(l.allDay=!1);for(var s={datesDelta:a,standardProps:l},c=0,d=n;c<d.length;c++)(0,d[c])(s,e,t);return s}(r,e,d.pluginSystem.hooks.eventDragMutationMassagers))&&(a=E.applyMutationToEventStore(n,d.eventUiBases,o,d),s.mutatedEvents=a,c.isInteractionValid(s)||(l=!0,a=o=null,s.mutatedEvents=E.createEmptyEventStore())):d=null),f.displayDrag(d,s),l?E.disableCursor():E.enableCursor(),t||(i===d&&A(r,e)&&(o=null),f.dragging.setMirrorNeedsRevert(!o),f.dragging.setMirrorIsVisible(!e||!document.querySelector(".fc-mirror")),f.receivingCalendar=d,f.validMutation=o,f.mutatedRelevantEvents=a))},f.handlePointerUp=function(){f.isDragging||f.cleanup()},f.handleDragEnd=function(e){if(f.isDragging){var t=f.component.context,n=t.calendar,r=t.view,i=f.receivingCalendar,o=f.validMutation,a=f.eventRange.def,l=f.eventRange.instance,s=new E.EventApi(n,a,l),c=f.relevantEvents,d=f.mutatedRelevantEvents,g=f.hitDragging.finalHit;if(f.clearDrag(),n.publiclyTrigger("eventDragStop",[{el:f.subjectSeg.el,event:s,jsEvent:e.origEvent,view:r}]),o)if(i===n){n.dispatch({type:"MERGE_EVENTS",eventStore:d});for(var u={},h=0,p=n.pluginSystem.hooks.eventDropTransformers;h<p.length;h++){var v=p[h];m(u,v(o,n))}t=m({},u,{el:e.subjectEl,delta:o.datesDelta,oldEvent:s,event:new E.EventApi(n,d.defs[a.defId],l?d.instances[l.instanceId]:null),revert:function(){n.dispatch({type:"MERGE_EVENTS",eventStore:c})},jsEvent:e.origEvent,view:r});n.publiclyTrigger("eventDrop",[t])}else i&&(n.publiclyTrigger("eventLeave",[{draggedEl:e.subjectEl,event:s,view:r}]),n.dispatch({type:"REMOVE_EVENT_INSTANCES",instances:f.mutatedRelevantEvents.instances}),i.dispatch({type:"MERGE_EVENTS",eventStore:f.mutatedRelevantEvents}),e.isTouch&&i.dispatch({type:"SELECT_EVENT",eventInstanceId:l.instanceId}),r=m({},i.buildDatePointApi(g.dateSpan),{draggedEl:e.subjectEl,jsEvent:e.origEvent,view:g.component}),i.publiclyTrigger("drop",[r]),i.publiclyTrigger("eventReceive",[{draggedEl:e.subjectEl,event:new E.EventApi(i,d.defs[a.defId],d.instances[l.instanceId]),view:g.component}]));else n.publiclyTrigger("_noEventDrop")}f.cleanup()};var t=f.component,n=t.context.options,t=f.dragging=new C(t.el);t.pointer.selector=O.SELECTOR,t.touchScrollAllowed=!1,t.autoScroller.isEnabled=n.dragScroll;n=f.hitDragging=new L(f.dragging,E.interactionSettingsStore);return n.useSubjectCenter=e.useEventCenter,n.emitter.on("pointerdown",f.handlePointerDown),n.emitter.on("dragstart",f.handleDragStart),n.emitter.on("hitupdate",f.handleHitUpdate),n.emitter.on("pointerup",f.handlePointerUp),n.emitter.on("dragend",f.handleDragEnd),f}var q,W=(t(F,q=E.Interaction),F.prototype.destroy=function(){this.dragging.destroy()},F.prototype.querySeg=function(e){return E.getElSeg(E.elementClosest(e.subjectEl,this.component.fgSegSelector))},F);function F(e){var g=q.call(this,e)||this;g.draggingSeg=null,g.eventRange=null,g.relevantEvents=null,g.validMutation=null,g.mutatedRelevantEvents=null,g.handlePointerDown=function(e){var t=g.component,n=g.querySeg(e),n=g.eventRange=n.eventRange;g.dragging.minDistance=t.context.options.eventDragMinDistance,g.dragging.setIgnoreMove(!g.component.isValidSegDownEl(e.origEvent.target)||e.isTouch&&g.component.props.eventSelection!==n.instance.instanceId)},g.handleDragStart=function(e){var t=g.component.context,n=t.calendar,r=t.view,t=g.eventRange;g.relevantEvents=E.getRelevantEvents(n.state.eventStore,g.eventRange.instance.instanceId),g.draggingSeg=g.querySeg(e),n.unselect(),n.publiclyTrigger("eventResizeStart",[{el:g.draggingSeg.el,event:new E.EventApi(n,t.def,t.instance),jsEvent:e.origEvent,view:r}])},g.handleHitUpdate=function(e,t,n){var r=g.component.context.calendar,i=g.relevantEvents,o=g.hitDragging.initialHit,a=g.eventRange.instance,l=null,s=null,c=!1,d={affectedEvents:i,mutatedEvents:E.createEmptyEventStore(),isEvent:!0,origSeg:g.draggingSeg};(l=e?function(e,t,n,r,i){for(var o=e.component.context.dateEnv,a=e.dateSpan.range.start,l=t.dateSpan.range.start,l=E.diffDates(a,l,o,e.component.largeUnit),s={},c=0,d=i;c<d.length;c++){var g=(0,d[c])(e,t);if(!1===g)return null;g&&m(s,g)}if(n){if(o.add(r.start,l)<r.end)return s.startDelta=l,s}else if(o.add(r.end,l)>r.start)return s.endDelta=l,s;return null}(o,e,n.subjectEl.classList.contains("fc-start-resizer"),a.range,r.pluginSystem.hooks.eventResizeJoinTransforms):l)&&(s=E.applyMutationToEventStore(i,r.eventUiBases,l,r),d.mutatedEvents=s,g.component.isInteractionValid(d)||(c=!0,d.mutatedEvents=s=l=null)),s?r.dispatch({type:"SET_EVENT_RESIZE",state:d}):r.dispatch({type:"UNSET_EVENT_RESIZE"}),c?E.disableCursor():E.enableCursor(),t||(l&&A(o,e)&&(l=null),g.validMutation=l,g.mutatedRelevantEvents=s)},g.handleDragEnd=function(e){var t=g.component.context,n=t.calendar,r=t.view,i=g.eventRange.def,o=g.eventRange.instance,a=new E.EventApi(n,i,o),l=g.relevantEvents,t=g.mutatedRelevantEvents;n.publiclyTrigger("eventResizeStop",[{el:g.draggingSeg.el,event:a,jsEvent:e.origEvent,view:r}]),g.validMutation?(n.dispatch({type:"MERGE_EVENTS",eventStore:t}),n.publiclyTrigger("eventResize",[{el:g.draggingSeg.el,startDelta:g.validMutation.startDelta||E.createDuration(0),endDelta:g.validMutation.endDelta||E.createDuration(0),prevEvent:a,event:new E.EventApi(n,t.defs[i.defId],o?t.instances[o.instanceId]:null),revert:function(){n.dispatch({type:"MERGE_EVENTS",eventStore:l})},jsEvent:e.origEvent,view:r}])):n.publiclyTrigger("_noEventResize"),g.draggingSeg=null,g.relevantEvents=null,g.validMutation=null};var t=e.component,n=g.dragging=new C(t.el);n.pointer.selector=".fc-resizer",n.touchScrollAllowed=!1,n.autoScroller.isEnabled=t.context.options.dragScroll;e=g.hitDragging=new L(g.dragging,E.interactionSettingsToStore(e));return e.emitter.on("pointerdown",g.handlePointerDown),e.emitter.on("dragstart",g.handleDragStart),e.emitter.on("hitupdate",g.handleHitUpdate),e.emitter.on("dragend",g.handleDragEnd),g}var G=(z.prototype.destroy=function(){this.calendar.off("select",this.onSelect),this.documentPointer.destroy()},z);function z(e){var a=this;this.isRecentPointerDateSelect=!1,this.onSelect=function(e){e.jsEvent&&(a.isRecentPointerDateSelect=!0)},this.onDocumentPointerUp=function(e){var t,n,r=a.calendar,i=a.documentPointer,o=r.state;i.wasTouchScroll||(o.dateSelection&&!a.isRecentPointerDateSelect&&(t=r.viewOpt("unselectAuto"),n=r.viewOpt("unselectCancel"),!t||t&&E.elementClosest(i.downEl,n)||r.unselect(e)),o.eventSelection&&!E.elementClosest(i.downEl,U.SELECTOR)&&r.dispatch({type:"UNSELECT_EVENT"})),a.isRecentPointerDateSelect=!1},this.calendar=e;var t=this.documentPointer=new l(document);t.shouldIgnoreMove=!0,t.shouldWatchScroll=!1,t.emitter.on("pointerup",this.onDocumentPointerUp),e.on("select",this.onSelect)}var k=(B.prototype.buildDragMeta=function(e){return"object"==typeof this.suppliedDragMeta?E.parseDragMeta(this.suppliedDragMeta):"function"==typeof this.suppliedDragMeta?E.parseDragMeta(this.suppliedDragMeta(e)):function(e){e=function(e,t){var n=E.config.dataAttrPrefix,t=(n?n+"-":"")+t;return e.getAttribute("data-"+t)||""}(e,"event"),e=e?JSON.parse(e):{create:!1};return E.parseDragMeta(e)}(e)},B.prototype.displayDrag=function(e,t){var n=this.receivingCalendar;n&&n!==e&&n.dispatch({type:"UNSET_EVENT_DRAG"}),e&&e.dispatch({type:"SET_EVENT_DRAG",state:t})},B.prototype.clearDrag=function(){this.receivingCalendar&&this.receivingCalendar.dispatch({type:"UNSET_EVENT_DRAG"})},B.prototype.canDropElOnCalendar=function(e,t){t=t.opt("dropAccept");return"function"==typeof t?t(e):"string"!=typeof t||!t||Boolean(E.elementMatches(e,t))},B);function B(e,t){var s=this;this.receivingCalendar=null,this.droppableEvent=null,this.suppliedDragMeta=null,this.dragMeta=null,this.handleDragStart=function(e){s.dragMeta=s.buildDragMeta(e.subjectEl)},this.handleHitUpdate=function(e,t,n){var r=s.hitDragging.dragging,i=null,o=null,a=!1,l={affectedEvents:E.createEmptyEventStore(),mutatedEvents:E.createEmptyEventStore(),isEvent:s.dragMeta.create,origSeg:null};e&&(i=e.component.context.calendar,s.canDropElOnCalendar(n.subjectEl,i)&&(o=function(e,t,n){for(var r=m({},t.leftoverProps),i=0,o=n.pluginSystem.hooks.externalDefTransforms;i<o.length;i++){var a=o[i];m(r,a(e,t))}var l=E.parseEventDef(r,t.sourceId,e.allDay,n.opt("forceEventDuration")||Boolean(t.duration),n),s=e.range.start;e.allDay&&t.startTime&&(s=n.dateEnv.add(s,t.startTime));n=t.duration?n.dateEnv.add(s,t.duration):n.getDefaultEventEnd(e.allDay,s),n=E.createEventInstance(l.defId,{start:s,end:n});return{def:l,instance:n}}(e.dateSpan,s.dragMeta,i),l.mutatedEvents=E.eventTupleToStore(o),(a=!E.isInteractionValid(l,i))&&(l.mutatedEvents=E.createEmptyEventStore(),o=null))),s.displayDrag(i,l),r.setMirrorIsVisible(t||!o||!document.querySelector(".fc-mirror")),a?E.disableCursor():E.enableCursor(),t||(r.setMirrorNeedsRevert(!o),s.receivingCalendar=i,s.droppableEvent=o)},this.handleDragEnd=function(e){var t,n,r,i=s.receivingCalendar,o=s.droppableEvent;s.clearDrag(),i&&o&&(t=(r=s.hitDragging.finalHit).component.context.view,n=s.dragMeta,r=m({},i.buildDatePointApi(r.dateSpan),{draggedEl:e.subjectEl,jsEvent:e.origEvent,view:t}),i.publiclyTrigger("drop",[r]),n.create&&(i.dispatch({type:"MERGE_EVENTS",eventStore:E.eventTupleToStore(o)}),e.isTouch&&i.dispatch({type:"SELECT_EVENT",eventInstanceId:o.instance.instanceId}),i.publiclyTrigger("eventReceive",[{draggedEl:e.subjectEl,event:new E.EventApi(i,o.def,o.instance),view:t}]))),s.receivingCalendar=null,s.droppableEvent=null};e=this.hitDragging=new L(e,E.interactionSettingsStore);e.requireInitial=!1,e.emitter.on("dragstart",this.handleDragStart),e.emitter.on("hitupdate",this.handleHitUpdate),e.emitter.on("dragend",this.handleDragEnd),this.suppliedDragMeta=t}E.config.dataAttrPrefix="";var J=(Q.prototype.destroy=function(){this.dragging.destroy()},Q);function Q(e,t){var i=this;void 0===t&&(t={}),this.handlePointerDown=function(e){var t=i.dragging,n=i.settings,r=n.minDistance,n=n.longPressDelay;t.minDistance=null!=r?r:e.isTouch?0:E.globalDefaults.eventDragMinDistance,t.delay=e.isTouch?null!=n?n:E.globalDefaults.longPressDelay:0},this.handleDragStart=function(e){e.isTouch&&i.dragging.delay&&e.subjectEl.classList.contains("fc-event")&&i.dragging.mirror.getMirrorEl().classList.add("fc-selected")},this.settings=t;e=this.dragging=new C(e);e.touchScrollAllowed=!1,null!=t.itemSelector&&(e.pointer.selector=t.itemSelector),null!=t.appendTo&&(e.mirror.parentNode=t.appendTo),e.emitter.on("pointerdown",this.handlePointerDown),e.emitter.on("dragstart",this.handleDragStart),new k(e,t.eventData)}var Z,K=(t($,Z=E.ElementDragging),$.prototype.destroy=function(){this.pointer.destroy()},$.prototype.setIgnoreMove=function(e){this.shouldIgnoreMove=e},$.prototype.setMirrorIsVisible=function(e){e?this.currentMirrorEl&&(this.currentMirrorEl.style.visibility="",this.currentMirrorEl=null):(e=this.mirrorSelector?document.querySelector(this.mirrorSelector):null)&&((this.currentMirrorEl=e).style.visibility="hidden")},$);function $(e){var t=Z.call(this,e)||this;t.shouldIgnoreMove=!1,t.mirrorSelector="",t.currentMirrorEl=null,t.handlePointerDown=function(e){t.emitter.trigger("pointerdown",e),t.shouldIgnoreMove||t.emitter.trigger("dragstart",e)},t.handlePointerMove=function(e){t.shouldIgnoreMove||t.emitter.trigger("dragmove",e)},t.handlePointerUp=function(e){t.emitter.trigger("pointerup",e),t.shouldIgnoreMove||t.emitter.trigger("dragend",e)};e=t.pointer=new l(e);return e.emitter.on("pointerdown",t.handlePointerDown),e.emitter.on("pointermove",t.handlePointerMove),e.emitter.on("pointerup",t.handlePointerUp),t}ee.prototype.destroy=function(){this.dragging.destroy()},u=ee;function ee(e,t){var n=document;t=e===document||e instanceof Element?(n=e,t||{}):e||{};e=this.dragging=new K(n);"string"==typeof t.itemSelector?e.pointer.selector=t.itemSelector:n===document&&(e.pointer.selector="[data-event]"),"string"==typeof t.mirrorSelector&&(e.mirrorSelector=t.mirrorSelector),new k(e,t.eventData)}G=E.createPlugin({componentInteractions:[H,Y,U,W],calendarInteractions:[G],elementDraggingImpl:C});e.Draggable=J,e.FeaturefulElementDragging=C,e.PointerDragging=l,e.ThirdPartyDraggable=u,e.default=G,Object.defineProperty(e,"__esModule",{value:!0})});