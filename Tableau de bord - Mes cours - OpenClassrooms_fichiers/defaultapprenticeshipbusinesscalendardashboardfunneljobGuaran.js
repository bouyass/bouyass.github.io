(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1373:function(r,e,t){var n=t(1374);r.exports=function(r,e){var t=n(r,e)/7;return t>0?Math.floor(t):Math.ceil(t)}},1374:function(r,e,t){var n=t(453),o=t(890),c=t(793);r.exports=function(r,e){var t=n(r),a=n(e),i=c(t,a),s=Math.abs(o(t,a));return t.setDate(t.getDate()-i*s),i*(s-(c(t,a)===-i))}},509:function(r,e,t){"use strict";var n=t(453),o=t.n(n);function c(r,e,t){var n=o()(r);return n.toLocaleDateString?n.toLocaleDateString(e,t):n.toDateString()}var a=function(r,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o={year:"numeric",month:"long",day:"numeric"};return t&&(o.hour="2-digit",o.minute="2-digit"),n&&(o.weekday="long"),c(r,e,o)};function i(r,e,t){var n=o()(r);return n.toLocaleTimeString?n.toLocaleTimeString(e,t):n.toDateString()}t.d(e,"b",function(){return c}),t.d(e,"a",function(){return a}),t.d(e,"c",function(){return i})},565:function(r,e,t){"use strict";var n=t(1),o=t(457),c=t(6),a=t.n(c),i=t(49),s=t.n(i),u=t(445),l=t.n(u),f=t(473),p=t.n(f);function b(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t}var g={isProcessing:!1,response:null,isError:!1};function v(r){var e=Object(n.useState)(g),t=p()(e,2),o=t[0],c=t[1],i=Object(n.useCallback)(function(){c(function(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?b(Object(t),!0).forEach(function(e){l()(r,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))})}return r}({},g,{asyncCallback:r}))},[r]);return{runCallback:Object(n.useCallback)(s()(a.a.mark(function e(){var t,n=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c({isProcessing:!0,response:null,isError:!1,asyncCallback:r}),e.next=4,r.apply(void 0,n);case 4:t=e.sent,c(function(e){return e.asyncCallback!==r?e:{isProcessing:!1,response:t,isError:!1}}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c(function(t){return t.asyncCallback!==r?t:{isProcessing:!1,response:e.t0,isError:!0}});case 11:case"end":return e.stop()}},e,null,[[0,8]])})),[r]),state:o,reset:i}}function d(r){var e=Object(o.d)(),t=v(Object(n.useCallback)(function(){return e(r)},[e,r])),c=t.runCallback,a=t.state,i=t.reset,s=a.isProcessing,u=a.response,l=null;return(a.isError||u&&u.error)&&(l=u.payload.error?u.payload.error:u.payload),{dispatchAction:c,isLoading:s,responsedAction:u,error:l,reset:i}}t.d(e,"a",function(){return d})},793:function(r,e,t){var n=t(453);r.exports=function(r,e){var t=n(r).getTime(),o=n(e).getTime();return t<o?-1:t>o?1:0}},896:function(r,e,t){"use strict";t.d(e,"a",function(){return p});var n=t(445),o=t.n(n),c=t(519),a=t.n(c),i=t(1),s=t(457),u=t(716),l=t.n(u),f=t(565);function p(r,e,t){var n,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],u=l()(c),p=Object(i.useCallback)(function(r){return e.apply(void 0,[r].concat(a()(c)))},[e].concat(a()(u))),b=Object(s.e)(p,s.c),g=Object(i.useMemo)(function(){return t.apply(void 0,a()(c))},[t].concat(a()(u))),v=Object(f.a)(g),d=v.dispatchAction,O=v.isLoading,y=v.error,j=v.reset;return Object(i.useEffect)(function(){d()},[d]),n={},o()(n,r,b),o()(n,"isLoading",O),o()(n,"error",y),o()(n,"reset",j),n}}}]);
//# sourceMappingURL=default~apprenticeship~business~calendar~dashboard~funnel~jobGuarantee~mentorshipStudentDashboard~pa~40ccf5ab.6eeb4b1f752a71a44767.js.map