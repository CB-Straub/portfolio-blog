(this["webpackJsonpportfolio-blog"]=this["webpackJsonpportfolio-blog"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(17),r=c.n(a),o=(c(24),c(7)),i=c(2),j=(c(25),c(0)),l=function(){return Object(j.jsx)("div",{className:"nav",children:Object(j.jsx)("div",{className:"nav-container",children:Object(j.jsx)("div",{className:"nav-content",children:Object(j.jsxs)("ul",{className:"navbar-nav",children:[Object(j.jsxs)("li",{className:"nav-item",children:[Object(j.jsx)(o.b,{to:"/",children:"Home"})," "]}),Object(j.jsxs)("li",{className:"nav-item",children:[" ",Object(j.jsx)(o.b,{to:"/about",children:"About"})]}),Object(j.jsxs)("li",{className:"nav-item",children:[" ",Object(j.jsx)(o.b,{to:"/merch",children:"Merch"})]}),Object(j.jsxs)("li",{className:"nav-item",children:[" ",Object(j.jsx)(o.b,{to:"/contact",children:"Contact"})]})]})})})})},d=c(11),b=c(15),u=c(19),h=Object(n.createContext)(),O=c(8),x=function(e,t){switch(t.type){case"SET_POSTS":return Object(O.a)(Object(O.a)({},e),{},{blogPosts:t.payload});case"SET_POST":return Object(O.a)(Object(O.a)({},e),{},{currentBlogPost:t.payload});case"SENDING_REQUEST":return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case"REQUEST_FINISHED":return Object(O.a)(Object(O.a)({},e),{},{loading:!1});default:return e}},p=function(e){var t=Object(n.useReducer)(x,{blogPosts:[],currentBlogPost:null,loading:!0}),c=Object(u.a)(t,2),s=c[0],a=c[1],r=function(){var e=Object(b.a)(Object(d.a)().mark((function e(){var t,c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"SENDING_REQUEST"}),e.next=4,fetch("/posts");case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,a({type:"REQUEST_FINISHED"}),a({type:"SET_POSTS",payload:c}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){var c,n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"SENDING_REQUEST"}),e.next=4,fetch("/posts/".concat(t));case 4:return c=e.sent,e.next=7,c.json();case 7:n=e.sent,a({type:"REQUEST_FINISHED"}),a({type:"SET_POST",payload:n}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)(h.Provider,{value:{blogPosts:s.blogPosts,currentBlogPost:s.currentBlogPost,loading:s.loading,getPosts:r,getPostsById:o},children:e.children})},g=function(){return Object(j.jsx)("div",{className:"navImage",children:Object(j.jsx)("div",{children:" React Music Blog "})})},v=function(e){return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-image",style:{width:"100%",height:"300px",backgroundImage:"url('".concat(e.image,"')"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative",borderTopLeftRadius:"2px",borderTopRightRadius:"2px"}}),Object(j.jsxs)("div",{className:"card-info",children:[Object(j.jsx)("div",{className:"card-title",children:Object(j.jsx)(o.b,{to:"/".concat(e.id),children:Object(j.jsx)("p",{children:e.title})})}),Object(j.jsxs)("div",{className:"card-author-section",children:[Object(j.jsx)("p",{children:e.author}),Object(j.jsx)("p",{children:e.date})]})]})]})},m=function(){var e=Object(n.useContext)(h),t=e.getPosts,c=e.blogPosts,s=e.loading;return Object(n.useEffect)((function(){t()}),[]),console.log(c),Object(j.jsx)("div",{className:"postList",children:Object(j.jsx)("div",{className:"container",children:s?Object(j.jsx)("div",{children:"...Loading"}):Object(j.jsx)("div",{className:"post-grid-container",children:c.map((function(e,t){return Object(j.jsx)(v,{title:e.title,image:e.image,author:e.author,date:e.date,id:e.id},t)}))})})})},f=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(g,{}),Object(j.jsx)(m,{})]})},N=function(){var e=Object(n.useContext)(h),t=e.getPostsById,c=e.currentBlogPost,s=Object(i.f)().postId;return Object(n.useEffect)((function(){t(s)}),[]),Object(j.jsx)("div",{className:"post",children:c?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"post-image",style:{width:"100%",height:"600px",backgroundImage:"url('".concat(c.image,"')"),backgrounPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"relative",borderTopRightRadius:"5px",borderTopLeftRadius:"5px",imageResolution:"24dpi"}}),Object(j.jsxs)("div",{className:"post-content",children:[Object(j.jsx)("p",{children:c.author}),Object(j.jsx)("p",{children:c.date}),Object(j.jsxs)("h1",{children:[" ",c.title]}),Object(j.jsxs)("p",{children:[" ",c.content]})]})]}):Object(j.jsx)("div",{children:" ...Loading  "})})},S=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"About"})})},E=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Put a from here for contacting you and such"})})},P=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"You will sell your merch on this page"})})};c(35);var y=function(){return Object(j.jsx)(p,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(l,{}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/",exact:!0,component:f}),Object(j.jsx)(i.a,{path:"/:postId",exact:!0,component:N}),Object(j.jsx)(i.a,{path:"/about",exact:!0,component:S}),Object(j.jsx)(i.a,{path:"/merch",exact:!0,component:P}),Object(j.jsx)(i.a,{path:"/contact",exact:!0,component:E})]})]})})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),T()}},[[36,1,2]]]);
//# sourceMappingURL=main.d56fe022.chunk.js.map