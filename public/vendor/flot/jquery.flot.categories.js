!function(a){function e(o,e,r,i){var s="categories"==e.xaxis.options.mode,n="categories"==e.yaxis.options.mode;if(s||n){var t,a=i.format;a||(t=e,(a=[]).push({x:!0,number:!0,required:!0}),a.push({y:!0,number:!0,required:!0}),(t.bars.show||t.lines.show&&t.lines.fill)&&(e=!!(t.bars.show&&t.bars.zero||t.lines.show&&t.lines.zero),a.push({y:!0,number:!0,required:!1,defaultValue:0,autoscale:e}),t.bars.horizontal&&(delete a[a.length-1].y,a[a.length-1].x=!0)),i.format=a);for(var u=0;u<a.length;++u)a[u].x&&s&&(a[u].number=!1),a[u].y&&n&&(a[u].number=!1)}}function u(o){var e,r=[];for(e in o.categories){var i=o.categories[e];i>=o.min&&i<=o.max&&r.push([i,e])}return r.sort(function(o,e){return o[0]-e[0]}),r}function i(o,e,r){if("categories"==o[e].options.mode){if(!o[e].categories){var i={},s=o[e].options.categories||{};if(a.isArray(s))for(var n=0;n<s.length;++n)i[s[n]]=n;else for(var t in s)i[t]=s[t];o[e].categories=i}o[e].options.ticks||(o[e].options.ticks=u),function(o,e,r){for(var i=o.points,s=o.pointsize,n=o.format,t=e.charAt(0),a=function(o){var e,r=-1;for(e in o)o[e]>r&&(r=o[e]);return r+1}(r),u=0;u<i.length;u+=s)if(null!=i[u])for(var c=0;c<s;++c){var l=i[u+c];null!=l&&n[c][t]&&(l in r||(r[l]=a,++a),i[u+c]=r[l])}}(r,e,o[e].categories)}}function r(o,e,r){i(e,"xaxis",r),i(e,"yaxis",r)}a.plot.plugins.push({init:function(o){o.hooks.processRawData.push(e),o.hooks.processDatapoints.push(r)},options:{xaxis:{categories:null},yaxis:{categories:null}},name:"categories",version:"1.0"})}(jQuery);