"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[149],{6149:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(885),i=n(4145),a=n(2791),s=n(6871),c=n(501),o="MoviePage_movie_page__l-10O",u="MoviePage_movie_info__4vUOZ",p=n(184),h=function(e){var t=e.movieInfo,n=t.title,r=t.poster,i=t.score,a=t.overview,s=t.genres;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:o,children:[(0,p.jsx)("img",{width:"200px",height:"300px",alt:"".concat(n),src:"".concat(r)}),(0,p.jsxs)("div",{className:u,children:[(0,p.jsx)("h2",{children:n}),(0,p.jsxs)("p",{children:["User score: ",i]}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:a}),(0,p.jsx)("h4",{children:"Genres"}),(0,p.jsx)("p",{children:"".concat(s)})]})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("hr",{}),(0,p.jsx)("h3",{children:"Additional information"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(c.rU,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(c.rU,{to:"reviews",children:"Reviews"})})]})]})]})},l="MovieDetails_back_btn__dMetQ",d=function(){var e,t=(0,s.UO)().id,n=(0,a.useState)({}),c=(0,r.Z)(n,2),o=c[0],u=c[1],d=(0,s.s0)(),v=(null===(e=(0,s.TH)().state)||void 0===e?void 0:e.from)||"/movies";return(0,a.useEffect)((function(){(0,i.s_)(t).then((function(e){var t={id:e.id,title:e.title,score:e.vote_average,poster:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),overview:e.overview,genres:e.genres.map((function(e){return e.name}))};u(t)}))}),[t]),(0,p.jsxs)("div",{children:[(0,p.jsx)("button",{className:l,onClick:function(){return d(v)},children:"GO BACK"}),(0,p.jsx)(h,{movieInfo:o}),(0,p.jsx)("hr",{}),(0,p.jsx)(s.j3,{})]})}},4145:function(e,t,n){n.d(t,{Hg:function(){return u},IQ:function(){return d},Jh:function(){return f},qF:function(){return g},s_:function(){return h}});var r=n(5861),i=n(7757),a=n.n(i),s=n(4569),c=n.n(s),o="4167a3621086eb019767740c5538e3e4";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(o));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=149.d5d289bc.chunk.js.map