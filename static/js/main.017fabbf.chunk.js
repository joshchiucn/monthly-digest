(this["webpackJsonpmontyly-digest"]=this["webpackJsonpmontyly-digest"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},20:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),i=c.n(s),a=(c(17),c(18),c(19),c(20),c(7)),l=[{name:"\u6587\u7ae0",url:"/"},{name:"\u7ad9\u70b9",url:"/sites"}],o=function(){return Object(n.jsx)("div",{className:"tabs py-2",children:Object(n.jsx)("ul",{className:"tabs-list flex px-5",children:l.map((function(e){return Object(n.jsx)("li",{className:"tabs-item py-2 px-5 mr-2 rounded text-white font-bold text-xl hover:bg-gray-300 hover:bg-opacity-50 active:bg-gray-300 active:bg-opacity-50",children:Object(n.jsx)(a.b,{to:e.url,children:e.name})},e.name)}))})})},r=function(){return Object(n.jsxs)("div",{className:"slogan text-left text-white mt-10 pl-5 pb-3",children:[Object(n.jsx)("h2",{children:"\u6211\u7684"}),Object(n.jsx)("h1",{className:"mb-0 mt-2 font-bold text-3xl tracking-wide",children:"\u6280\u672f\u6587\u7ae0\u6536\u85cf"})]})},m=function(){return Object(n.jsxs)("div",{className:"page-header ",children:[Object(n.jsx)(o,{}),Object(n.jsx)(r,{})]})},d=function(e){return Object(n.jsx)("div",{className:"time text-left text-gray-500 italic ",children:e.time})},j=function(e){var t=e.data;return Object(n.jsxs)("div",{className:"item text-left py-2 mb-3",children:[Object(n.jsx)("a",{href:t.link,children:Object(n.jsx)("h5",{className:"item_title text-gray-900 hover:text-red-600 font-bold text-xl",children:t.name})}),t.tags.length>0?Object(n.jsxs)("div",{className:"item_tags flex mt-2 text-sm",children:["\u5206\u7c7b\uff1a",Object(n.jsx)("ul",{className:"flex",children:t.tags.map((function(e,t){return Object(n.jsx)("li",{className:"mr-1",children:e},t)}))})]}):null,t.description?Object(n.jsx)("p",{className:"text-gray-500 mt-2",children:t.description}):null,Object(n.jsxs)("div",{className:"source mt-2 text-gray-500",children:["\u6765\u6e90\uff1a",t.source]})]})},x=function(e){var t=e.months;return Object(n.jsxs)("div",{className:"month-item p-4",children:[Object(n.jsx)(d,{time:t.time}),Object(n.jsx)("ul",{className:"article-list",children:t.data.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)(j,{data:e})},t)}))})]})},h=[{name:"Frontend Focus Archives",link:"https://frontendfoc.us/issues",description:"\u524d\u7aef\u6280\u672f\u5468\u520a"},{name:"DEV Community \ud83d\udc69\u200d\ud83d\udcbb\ud83d\udc68\u200d\ud83d\udcbb",link:"https://dev.to/",description:"\u5f00\u53d1\u8005\u793e\u533a"},{name:"Smashing Magazine",link:"https://www.smashingmagazine.com/articles/",description:"\u524d\u7aef\u6587\u7ae0"},{name:"Front-end RSS Feeds (2020 Edition)",link:"https://www.impressivewebs.com/frontend-rss-feeds-2020/",description:"\u524d\u7aef\u7f51\u7ad9&\u535a\u5ba2\u6c47\u603b"}],p=[{name:"Microsoft Edge",icon:"https://images.opencollective.com/microsoftedge/503102e/logo.png",amount:25e4},{name:"Google Open Source",icon:"https://images.opencollective.com/google/9d8073c/logo.png",amount:25e4},{name:"Coil",icon:"https://images.opencollective.com/coilhq/ea92e4d/logo.png",amount:1e5},{name:"Igalia",icon:"https://images.opencollective.com/igalia/dd7aa72/logo.png",amount:2e4},{name:"Type of Web",icon:"https://images.opencollective.com/typeofweb/2c75cc0/logo.png",amount:106},{name:"Open Collective",icon:"https://images.opencollective.com/opencollective/019a512/logo.png",amount:105}],u=[{time:"2021-02",data:[{name:"All you need to know about third-party cookies",description:"\u4e09\u65b9cookie\u5229\u4e0e\u5f0a",link:"https://cookie-script.com/all-you-need-to-know-about-third-party-cookies.html",tags:["\u7f51\u7edc\u901a\u8bc6"],source:""}]},{time:"2021-01",data:[{name:"import\u3001require\u3001export\u3001module.exports \u6df7\u5408\u4f7f\u7528\u8be6\u89e3",description:"",link:"https://juejin.cn/post/6844903520865386510",tags:["js"],source:"\u6398\u91d1"},{name:"\u5e26\u4f60\u8d70\u8fdbwebpack\u4e16\u754c\uff0c\u6210\u4e3awebpack\u5934\u53f7\u73a9\u5bb6\u3002",description:"",link:"https://juejin.cn/post/6844903588607557639",tags:["js"],source:"\u6398\u91d1"},{name:"\u4ee3\u7801\u6574\u6d01\u4e4b\u9053 js\u7248",description:"",link:"https://github.com/ryanmcdermott/clean-code-javascript#encapsulate-conditionals",tags:["js","\u4ee3\u7801\u89c4\u8303"],source:"github"}]}],b=(c(26),function(){return Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{className:"month-list",children:[u.map((function(e,t){return Object(n.jsx)("li",{className:"month",children:Object(n.jsx)(x,{months:e})},t)})),Object(n.jsx)("li",{})]})})}),g=function(){return Object(n.jsx)("div",{className:"sites text-left",children:Object(n.jsx)("ul",{children:h.map((function(e,t){return Object(n.jsxs)("li",{className:"p-4",children:[Object(n.jsx)("a",{href:e.link,className:"text-gray-900 hover:text-red-600 font-bold text-xl",children:e.name}),Object(n.jsx)("p",{className:"mt-2 text-gray-500 text-sm",children:e.description})]},t)}))})})};c(27);function O(e){return e>=Math.pow(10,3)?"$".concat(Math.floor(e/1e3),"k USD"):"$".concat(e," USD")}var f=function(){return Object(n.jsxs)("div",{className:"donators text-left bg-gray-100 rounded-sm py-3 px-8 md:py-6 md:px-16",children:[Object(n.jsx)("h4",{className:"text-xl font-medium text-gray-800",children:"\u8d22\u653f\u8d21\u732e\u8005\u6392\u884c"}),Object(n.jsx)("h5",{className:"text-gray-500 mt-4",children:"\u7ec4\u7ec7"}),Object(n.jsx)("ol",{className:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-y-2",children:p.map((function(e,t){return Object(n.jsxs)("li",{className:"item flex",children:[Object(n.jsxs)("div",{className:"item_name flex flex-shrink-0 items-center h-8 justify-between pl-4 pr-1 bg-white rounded-3xl",children:[Object(n.jsx)("div",{className:"text-xs text-gray-400",children:t+1}),Object(n.jsx)("img",{src:e.icon,alt:e.name,className:"w-7 ml-3"})]}),Object(n.jsxs)("div",{className:"ml-2",children:[Object(n.jsx)("h6",{className:"text-base font-medium",children:e.name}),Object(n.jsx)("div",{className:"text-xs text-gray-500",children:O(e.amount)})]})]},t)}))})]})},v=c(2),y=function(){return Object(n.jsx)(a.a,{children:Object(n.jsxs)("div",{className:"App max-w-3xl mx-auto pb-6",children:[Object(n.jsx)(m,{}),Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.a,{path:"/sites",children:Object(n.jsx)(g,{})}),Object(n.jsx)(v.a,{path:"/",children:Object(n.jsx)(b,{})})]}),Object(n.jsx)(f,{})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))},k=c(14);Object(k.render)(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root")),N()}},[[34,1,2]]]);
//# sourceMappingURL=main.017fabbf.chunk.js.map