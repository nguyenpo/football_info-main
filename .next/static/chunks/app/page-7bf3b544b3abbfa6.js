(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9920:function(e,t,l){Promise.resolve().then(l.bind(l,365))},365:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return components_Status}});var n=l(7437),s=l(2265),o=l(6691),a=l.n(o),components_Competition=e=>{let{data:t}=e,l=new Date(null==t?void 0:t.utcDate),s=l.toLocaleDateString("vi-VN",{});return(0,n.jsxs)("div",{className:"mb-4 flex justify-between items-center px-4 py-1 bg-slate-600 hover:bg-slate-700 rounded-md",children:[(0,n.jsxs)("div",{className:"flex space-x-4",children:[(0,n.jsx)(a(),{src:null==t?void 0:t.competition.emblem,alt:null==t?void 0:t.competition.name,width:20,height:20}),(0,n.jsx)("p",{className:"text-sm text-green-300",children:null==t?void 0:t.competition.name})]}),(0,n.jsx)("p",{className:"text-xs md:text-sm",children:s})]})},components_Matches=e=>{var t,l,s,o,i,r,d,c;let{data:m}=e,u=new Date(null==m?void 0:m.utcDate).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"});return(0,n.jsxs)("div",{className:"grid grid-cols-3",children:[(0,n.jsxs)("div",{className:"w-full flex items-center",children:[(0,n.jsx)("div",{className:"w-[20px] h-[20px] relative mr-2",children:(0,n.jsx)(a(),{src:null==m?void 0:null===(t=m.homeTeam)||void 0===t?void 0:t.crest,alt:null==m?void 0:null===(l=m.homeTeam)||void 0===l?void 0:l.name,fill:!0,className:"object-cover"})}),(0,n.jsx)("p",{className:"text-sm",children:null==m?void 0:null===(s=m.homeTeam)||void 0===s?void 0:s.name})]}),(0,n.jsx)("div",{className:"px-2 m-auto flex justify-center items-center bg-slate-600 rounded-md",children:(null==m?void 0:m.status)=="FINISHED"?(0,n.jsxs)("p",{className:"py-1 text-green-300 text-xs",children:[null==m?void 0:null===(o=m.score)||void 0===o?void 0:o.fullTime.home," : ",null===(i=m.score)||void 0===i?void 0:i.fullTime.away]}):(0,n.jsx)("p",{className:"py-1 text-green-300 text-xs",children:u})}),(0,n.jsxs)("div",{className:"w-full flex items-center justify-end",children:[(0,n.jsx)("p",{className:"text-sm text-right",children:null===(r=m.awayTeam)||void 0===r?void 0:r.name}),(0,n.jsx)("div",{className:"w-[20px] h-[20px] relative ml-2",children:(0,n.jsx)(a(),{src:null==m?void 0:null===(d=m.awayTeam)||void 0===d?void 0:d.crest,alt:null===(c=m.awayTeam)||void 0===c?void 0:c.name,fill:!0,className:"object-cover"})})]})]})},components_LeagueTable=e=>{let{data:t}=e;return(0,n.jsxs)("div",{className:"py-3 px-2 md:px-3 rounded-md flex flex-col bg-[rgb(40,46,58)] mb-2",children:[(0,n.jsx)(components_Competition,{data:t}),(0,n.jsx)(components_Matches,{data:t})]})},components_Status=e=>{let{matchesList:t,matchesListFinished:l}=e,[o,a]=(0,s.useState)("TODAY");return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"flex space-x-4 mb-2 md:mb-4",children:[(0,n.jsx)("button",{onClick:()=>a("TODAY"),className:"px-2 py-1 text-primary text-xs md:text-sm rounded-md ".concat("TODAY"===o?"bg-green-400 font-semibold":"bg-slate-500 font-regular"),children:"H\xf4m nay"}),(0,n.jsx)("button",{onClick:()=>a("FINISHED"),className:"px-2 py-1 text-primary text-sm rounded-md ".concat("FINISHED"===o?"bg-green-400 font-semibold":"bg-slate-500 font-regular"),children:"Đ\xe3 kết th\xfac"})]}),(0,n.jsxs)("div",{className:"w-full h-[100vh] overflow-y-scroll scroll-smooth scrollbar-hide",children:["TODAY"===o?null==t?void 0:t.map(e=>(0,n.jsx)("div",{children:(null==e?void 0:e.status)==="TIMED"&&(0,n.jsx)(components_LeagueTable,{data:e})},e.id)):null,"FINISHED"===o?null==t?void 0:t.map(e=>(0,n.jsx)("div",{children:(null==e?void 0:e.status)==="FINISHED"&&(0,n.jsx)(components_LeagueTable,{data:e})},e.id)):null,"FINISHED"===o?null==l?void 0:l.map(e=>(0,n.jsx)("div",{children:(0,n.jsx)(components_LeagueTable,{data:e})},e.id)):null]})]})}},679:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return r}});let n=l(1024),s=l(7929),o=l(2637),a=l(413),i=n._(l(9950)),unstable_getImgProps=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,s.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,l]of Object.entries(t))void 0===l&&delete t[e];return{props:t}},r=a.Image},622:function(e,t,l){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=l(2265),s=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,l){var n,r={},d=null,c=null;for(n in void 0!==l&&(d=""+l),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,n)&&!i.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:s,type:e,key:d,ref:c,props:r,_owner:a.current}}t.jsx=q,t.jsxs=q},7437:function(e,t,l){"use strict";e.exports=l(622)},6691:function(e,t,l){e.exports=l(679)}},function(e){e.O(0,[413,971,472,744],function(){return e(e.s=9920)}),_N_E=e.O()}]);