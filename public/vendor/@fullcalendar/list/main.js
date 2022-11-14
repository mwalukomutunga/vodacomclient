!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@fullcalendar/core")):"function"==typeof define&&define.amd?define(["exports","@fullcalendar/core"],t):t((e=e||self).FullCalendarList={},e.FullCalendar)}(this,function(e,p){"use strict";var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function t(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var n,s=(t(o,n=p.FgEventRenderer),o.prototype.attachSegs=function(e){e.length?this.listView.renderSegList(e):this.listView.renderEmptyMessage()},o.prototype.detachSegs=function(){},o.prototype.renderSegHtml=function(e){var t=this.context,n=t.theme,r=t.options,s=e.eventRange,o=s.def,i=s.instance,a=s.ui,l=o.url,t=["fc-list-item"].concat(a.classNames),a=a.backgroundColor,s=o.allDay?p.getAllDayHtml(r):p.isMultiDayRange(s.range)?e.isStart?p.htmlEscape(this._getTimeText(i.range.start,e.end,!1)):e.isEnd?p.htmlEscape(this._getTimeText(e.start,i.range.end,!1)):p.getAllDayHtml(r):p.htmlEscape(this.getTimeText(s));return l&&t.push("fc-has-url"),'<tr class="'+t.join(" ")+'">'+(this.displayEventTime?'<td class="fc-list-item-time '+n.getClass("widgetContent")+'">'+(s||"")+"</td>":"")+'<td class="fc-list-item-marker '+n.getClass("widgetContent")+'"><span class="fc-event-dot"'+(a?' style="background-color:'+a+'"':"")+'></span></td><td class="fc-list-item-title '+n.getClass("widgetContent")+'"><a'+(l?' href="'+p.htmlEscape(l)+'"':"")+">"+p.htmlEscape(o.title||"")+"</a></td></tr>"},o.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",meridiem:"short"}},o);function o(e){var t=n.call(this)||this;return t.listView=e,t}var i,a=(t(l,i=p.View),l.prototype.firstContext=function(e){e.calendar.registerInteractiveComponent(this,{el:this.el})},l.prototype.render=function(e,t){i.prototype.render.call(this,e,t);var n=this.computeDateVars(e.dateProfile),r=n.dayDates,n=n.dayRanges;this.dayDates=r,this.renderSkeleton(t),this.renderContent(t,this.eventStoreToSegs(e.eventStore,e.eventUiBases,n))},l.prototype.destroy=function(){i.prototype.destroy.call(this),this.renderSkeleton.unrender(),this.renderContent.unrender(),this.context.calendar.unregisterInteractiveComponent(this)},l.prototype._renderSkeleton=function(e){e=e.theme;this.el.classList.add("fc-list-view");for(var t=0,n=(e.getClass("listView")||"").split(" ");t<n.length;t++){var r=n[t];r&&this.el.classList.add(r)}this.scroller=new p.ScrollComponent("hidden","auto"),this.el.appendChild(this.scroller.el),this.contentEl=this.scroller.el},l.prototype._unrenderSkeleton=function(){this.scroller.destroy()},l.prototype.updateSize=function(e,t,n){i.prototype.updateSize.call(this,e,t,n),this.eventRenderer.computeSizes(e),this.eventRenderer.assignSizes(e),this.scroller.clear(),n||this.scroller.setHeight(this.computeScrollerHeight(t))},l.prototype.computeScrollerHeight=function(e){return e-p.subtractInnerElHeight(this.el,this.scroller.el)},l.prototype._eventStoreToSegs=function(e,t,n){return this.eventRangesToSegs(p.sliceEventStore(e,t,this.props.dateProfile.activeRange,this.context.nextDayThreshold).fg,n)},l.prototype.eventRangesToSegs=function(e,t){for(var n=[],r=0,s=e;r<s.length;r++){var o=s[r];n.push.apply(n,this.eventRangeToSegs(o,t))}return n},l.prototype.eventRangeToSegs=function(e,t){for(var n,r,s=this.context,o=s.dateEnv,i=s.nextDayThreshold,a=e.range,l=e.def.allDay,d=[],c=0;c<t.length;c++)if((n=p.intersectRanges(a,t[c]))&&(r={component:this,eventRange:e,start:n.start,end:n.end,isStart:e.isStart&&n.start.valueOf()===a.start.valueOf(),isEnd:e.isEnd&&n.end.valueOf()===a.end.valueOf(),dayIndex:c},d.push(r),!r.isEnd&&!l&&c+1<t.length&&a.end<o.add(t[c+1].start,i))){r.end=a.end,r.isEnd=!0;break}return d},l.prototype.renderEmptyMessage=function(){this.contentEl.innerHTML='<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">'+p.htmlEscape(this.context.options.noEventsMessage)+"</div></div></div>"},l.prototype.renderSegList=function(e){for(var t,n,r=this.context.theme,s=this.groupSegsByDay(e),r=p.htmlToElement('<table class="fc-list-table '+r.getClass("tableList")+'"><tbody></tbody></table>'),o=r.querySelector("tbody"),i=0;i<s.length;i++)if(t=s[i])for(o.appendChild(this.buildDayHeaderRow(this.dayDates[i])),t=this.eventRenderer.sortEventSegs(t),n=0;n<t.length;n++)o.appendChild(t[n].el);this.contentEl.innerHTML="",this.contentEl.appendChild(r)},l.prototype.groupSegsByDay=function(e){for(var t,n=[],r=0;r<e.length;r++)(n[(t=e[r]).dayIndex]||(n[t.dayIndex]=[])).push(t);return n},l.prototype.buildDayHeaderRow=function(e){var t=this.context,n=t.theme,r=t.dateEnv,s=t.options,o=p.createFormatter(s.listDayFormat),t=p.createFormatter(s.listDayAltFormat);return p.createElement("tr",{className:"fc-list-heading","data-date":r.formatIso(e,{omitTime:!0})},'<td class="'+(n.getClass("tableListHeading")||n.getClass("widgetHeader"))+'" colspan="3">'+(o?p.buildGotoAnchorHtml(s,r,e,{class:"fc-list-heading-main"},p.htmlEscape(r.format(e,o))):"")+(t?p.buildGotoAnchorHtml(s,r,e,{class:"fc-list-heading-alt"},p.htmlEscape(r.format(e,t))):"")+"</td>")},l);function l(e,t){e=i.call(this,e,t)||this;e.computeDateVars=p.memoize(d),e.eventStoreToSegs=p.memoize(e._eventStoreToSegs),e.renderSkeleton=p.memoizeRendering(e._renderSkeleton,e._unrenderSkeleton);t=e.eventRenderer=new s(e);return e.renderContent=p.memoizeRendering(t.renderSegs.bind(t),t.unrender.bind(t),[e.renderSkeleton]),e}function d(e){for(var t=p.startOfDay(e.renderRange.start),n=e.renderRange.end,r=[],s=[];t<n;)r.push(t),s.push({start:t,end:p.addDays(t,1)}),t=p.addDays(t,1);return{dayDates:r,dayRanges:s}}a.prototype.fgSegSelector=".fc-list-item";var c=p.createPlugin({views:{list:{class:a,buttonTextKey:"list",listDayFormat:{month:"long",day:"numeric",year:"numeric"}},listDay:{type:"list",duration:{days:1},listDayFormat:{weekday:"long"}},listWeek:{type:"list",duration:{weeks:1},listDayFormat:{weekday:"long"},listDayAltFormat:{month:"long",day:"numeric",year:"numeric"}},listMonth:{type:"list",duration:{month:1},listDayAltFormat:{weekday:"long"}},listYear:{type:"list",duration:{year:1},listDayAltFormat:{weekday:"long"}}}});e.ListView=a,e.default=c,Object.defineProperty(e,"__esModule",{value:!0})});