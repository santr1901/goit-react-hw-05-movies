"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[834],{6834:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r=e(2982),a=e(885),u=e(2791),i=e(4145),c=e(501),o=e(6871),s=e(184),p=function(t){var n=t.onSubmit,e=(0,u.useState)(""),r=(0,a.Z)(e,2),i=r[0],c=r[1];return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n(i),c("")},children:[(0,s.jsx)("input",{value:i,onChange:function(t){c(t.currentTarget.value.toLowerCase())},placeholder:"input movie name"}),(0,s.jsx)("button",{children:"Search"})]})})},f=function(){var t,n=(0,u.useState)([]),e=(0,a.Z)(n,2),f=e[0],l=e[1],h=(0,c.lr)(),d=(0,a.Z)(h,2),v=d[0],m=d[1],g=(0,o.TH)(),y=null!==(t=v.get("search"))&&void 0!==t?t:"";(0,u.useEffect)((function(){if(""!==y)try{(0,i.qF)(y).then((function(t){var n=t.results.map((function(t){return{id:t.id,name:t.name||t.title}}));l((0,r.Z)(n))}))}catch(t){return console.log(t)}}),[y]);return(0,s.jsxs)("div",{children:[(0,s.jsx)(p,{onSubmit:function(t){m({search:t})}}),(0,s.jsx)("ul",{children:f.map((function(t){return(0,s.jsx)("li",{children:(0,s.jsx)(c.rU,{state:{from:g},to:"/movies/".concat(t.id),children:t.name})},t.id)}))})]})}},4145:function(t,n,e){e.d(n,{Hg:function(){return s},IQ:function(){return h},Jh:function(){return v},qF:function(){return g},s_:function(){return f}});var r=e(5861),a=e(7757),u=e.n(a),i=e(4569),c=e.n(i),o="4167a3621086eb019767740c5538e3e4";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(o));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},2982:function(t,n,e){e.d(n,{Z:function(){return u}});var r=e(907);var a=e(181);function u(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,a.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=834.84a2569e.chunk.js.map