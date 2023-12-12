exports.id=941,exports.ids=[941],exports.modules={6159:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,6686,23)),Promise.resolve().then(a.t.bind(a,614,23))},3129:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,3724,23)),Promise.resolve().then(a.t.bind(a,5365,23)),Promise.resolve().then(a.t.bind(a,4900,23)),Promise.resolve().then(a.t.bind(a,4714,23)),Promise.resolve().then(a.t.bind(a,5392,23)),Promise.resolve().then(a.t.bind(a,8898,23))},9645:(e,t,a)=>{"use strict";a.d(t,{H$:()=>getMatchesfootball,Sb:()=>getNewsInfo,ew:()=>getMatchesfootballFinished,kK:()=>filterLeague});let s={next:{revalidate:30},headers:{"X-Auth-Token":process.env.API_TOKEN,"Content-Type":"application/json"}},getMatchesfootball=async()=>{let e=await fetch("https://api.football-data.org/v4/matches",s);return e.json()},i=new Date,l=new Date(i.getTime());l.setDate(i.getDate()-1);let r=l.getFullYear(),n=String(l.getMonth()+1).padStart(2,"0"),o=String(l.getDate()).padStart(2,"0"),m=[r,n,o].join("-"),getMatchesfootballFinished=async()=>{let e=await fetch(`https://api.football-data.org/v4/matches?date=${m}`,s);return e.json()},getNewsInfo=async()=>{let e=await fetch(`https://newsapi.org/v2/everything?apiKey=${process.env.API_TOKEN_NEWS}&q=soccer&pageSize=5`,{next:{revalidate:30}});return e.json()},filterLeague=async e=>{let t=await getMatchesfootball(),a=t?.matches,s=a?.filter(t=>t.competition.name===e);return s}},7404:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>RootLayout,metadata:()=>d});var s=a(4656);a(7272);var i=a(4353),l=a.n(i),r=a(8639),n=a.n(r);let components_LinkSide=({href:e,name:t,src:a})=>(0,s.jsxs)(l(),{href:e,className:"flex items-center py-2 px-2 rounded-md hover:bg-[rgb(54,63,78)]",children:[s.jsx(n(),{src:a,alt:t,width:20,height:20}),s.jsx("p",{className:"ml-4 text-xs md:text-sm",children:t})]}),o=[{id:1,name:"Premier League",href:"premier-league",emblem:"/img/leagues/premier_league.webp"},{id:2,name:"Primera Division",href:"la-liga",emblem:"/img/leagues/laliga.svg"},{id:3,name:"Bundesliga",href:"bundesliga",emblem:"/img/leagues/bundesliga.webp"},{id:4,name:"Serie A",href:"serie-a",emblem:"/img/leagues/serie_a.webp"},{id:5,name:"Ligue 1",href:"ligue-1",emblem:"/img/leagues/ligue_1.webp"},{id:6,name:"Championship",href:"championship",emblem:"/img/leagues/championship.webp"},{id:7,name:"Primeira Liga",href:"primeira-liga",emblem:"/img/leagues/liga_portugal.webp"},{id:8,name:"Brazilian Championship Series A",href:"brazilian-series-a",emblem:"/img/leagues/brazilian_serie_a.webp"},{id:9,name:"Copa Libertadores",href:"copa-libertadores",emblem:"/img/leagues/copa_libertadores.webp"},{id:10,name:"Eredivisie",href:"eredivisie",emblem:"/img/leagues/eredivisie.webp"}],Sidebar=async()=>s.jsx("section",{className:" px-2 md:px-4 py-2 bg-[rgb(40,46,58)] rounded-md hidden md-block lg:block",children:(0,s.jsxs)("div",{children:[s.jsx("h1",{className:"font-bold font-mono text-xl mb-4 text-green-300",children:"C\xe1c giải đấu"}),s.jsx("ul",{className:"space-y-2",children:o?.map(e=>s.jsx("div",{className:"flex",children:s.jsx(components_LinkSide,{href:e.href,name:e?.name,src:e?.emblem})},e?.id))})]})});var m=a(9645);let News=async()=>{let e=await (0,m.Sb)(),t=e.articles;return(0,s.jsxs)("div",{className:"w-[350px] bg-[rgb(40,46,58)] rounded-md px-2 md:px-6 py-2 hidden md-block lg:block",children:[s.jsx("h1",{className:"text-xl text-green-300 font-bold mb-4",children:"News - Top Headlines"}),s.jsx("div",{children:t?.map(e=>s.jsx(l(),{href:e.url,legacyBehavior:!0,children:s.jsx("a",{target:"_blank",children:s.jsxs("div",{className:"relative w-full h-[150px] mb-4 group",children:[s.jsx(n(),{src:e?.urlToImage!=null?e?.urlToImage:"/img/news-football.webp",alt:e.title,fill:!0,className:"object-cover rounded-md"}),s.jsx("div",{className:"absolute bottom-0 left-0 w-full p-2 z-10 bg-gradient-to-t from-zinc-900 to-transparent",children:s.jsx("p",{className:"font-semibold text-lg group-hover:text-green-300",children:e.title})})]})})},`${e.title}`))})]})},components_Navbar=()=>(0,s.jsxs)("div",{className:"flex justify-between items-center pt-2 pb-5 font-mono",children:[(0,s.jsxs)(l(),{href:"/",className:"flex items-center space-x-2",children:[s.jsx("div",{className:"relative w-[40px] h-[30px]",children:s.jsx(n(),{src:"/img/football-info.png",alt:"icon",fill:!0,className:"object-cover"})}),s.jsx("span",{className:"text-green-300 text-2xl font-bold none md:block",children:"fun88"})]}),s.jsx("p",{className:"text-xs md:text-sm hover:text-green-300",children:"Fun88"})]}),d={title:"infootball",description:"Generated by create next app"};function RootLayout({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{children:(0,s.jsxs)("main",{className:"px-2 md:px-16 md:py-2 text-textPrimary h-[100vh] overflow-y-scroll scrollbar-hide",children:[s.jsx(components_Navbar,{}),(0,s.jsxs)("section",{className:"flex space-x-4 justify-center items-start",children:[s.jsx(Sidebar,{}),e,s.jsx(News,{})]})]})})})}},7272:()=>{}};