(this.webpackJsonprulethemall=this.webpackJsonprulethemall||[]).push([[0],{20:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(9),i=n.n(s),a=(n(20),n(5)),o=n(6),l=n(8),u=n(7),j=n(15),h=n(2),b=(n(30),n(31),n(32),n(33),n(1));var d=n.p+"static/media/logo.62fe424e.png";var f=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"button",className:"rounded-3xl w-40 h-12 bg-b-yellow hover:bg-b-black hover:text-b-white",children:Object(b.jsx)(j.b,{to:"/login",children:"Get started !"})})})},O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("header",{children:Object(b.jsxs)("nav",{className:"container flex items-center justify-between py-2",children:[Object(b.jsxs)("div",{className:"container flex items-center justify-start",children:[Object(b.jsx)("div",{className:"m-4",children:Object(b.jsx)("img",{src:d,className:"h-10",alt:"logo"})}),Object(b.jsx)("div",{className:"m-2",children:Object(b.jsx)("h1",{className:"text-2xl",children:"Rule Them All"})})]}),Object(b.jsx)("div",{children:Object(b.jsx)(f,{})})]})})})}}]),n}(c.Component),p=O,x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("footer",{className:"flex items-center justify-center pt-1 border-b-2 border-b-yellow",children:[Object(b.jsx)("span",{className:"mr-2",children:"Contribute on "}),Object(b.jsx)("a",{href:"https://github.com/Flolight/RuleThemAll",children:Object(b.jsx)("i",{className:"pi pi-github"})})]})})}}]),n}(c.Component),m=x,v=function(e){return Object(b.jsxs)("div",{className:"flex flex-col font-Poppins min-h-screen",children:[Object(b.jsx)(p,{}),Object(b.jsx)("main",{className:"flex flex-grow",children:e.children}),Object(b.jsx)(m,{})]})},g=n(14),k=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var c;Object(a.a)(this,n),(c=t.call(this,e)).state={requestToken:null,profile:null};var r=new URLSearchParams(window.location.search),s=r.get("oauth_token"),i=r.get("oauth_verifier");return s&&i&&(console.log("query: "+r.toString()),c.requestAccessToken(s,i)),c}return Object(o.a)(n,[{key:"handleClick",value:function(){var e=this;console.debug("Click on twitter button"),fetch("/twitter/authenticate").then((function(e){return e.json()})).then((function(t){e.setState({requestToken:t.oauthRequestToken});var n="https://api.twitter.com/oauth/authenticate?oauth_token=".concat(e.state.requestToken);console.log(e.state.requestToken),window.location.href=n}),(function(e){return console.log(e)}))}},{key:"requestAccessToken",value:function(e,t){var n=this,c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({oauth_token:e,oauth_verifier:t})};fetch("/twitter/callback",c).then((function(e){return e.json()})).then((function(e){console.log(e),fetch("api/user").then((function(e){return e.json()})).then((function(e){n.setState({profile:e.user}),console.log(e),console.log(n.state.profile)}))}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"p-d-flex p-jc-center p-ai-center",children:Object(b.jsx)(g.a,{onClick:this.handleClick.bind(this),children:"Connect to Twitter"})}),Object(b.jsxs)("p",{children:["User: ",this.state.profile?this.state.profile:"Loading Profile..."]})]})}}]),n}(c.Component),y=n(23),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"flex flex-col landing-img bg-cover bg-center flex-grow",children:Object(b.jsxs)("div",{className:"p-my-6 p-text-center font-bold",children:[Object(b.jsx)("div",{className:"my-2 ",children:Object(b.jsx)("h2",{className:"text-3xl text-b-black",children:"Manage all your social media profiles from one place"})}),Object(b.jsx)("div",{className:"h-96"}),Object(b.jsx)("div",{className:"m-4 container mx-auto flex justify-center",children:Object(b.jsx)(y.a,{formId:2633804,className:"ck-form",buttonBackground:"#F9C22E",buttonColor:"#171614",hideName:!0})})]})})}}]),n}(c.Component),N=w,C=n(19),T=n(24),q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var c;Object(a.a)(this,n),(c=t.call(this,e)).state={requestToken:null,profile:null};var r=new URLSearchParams(window.location.search),s=r.get("oauth_token"),i=r.get("oauth_verifier");return s&&i&&(console.log("query: "+r.toString()),c.requestAccessToken(s,i)),c}return Object(o.a)(n,[{key:"handleClick",value:function(){var e=this;console.debug("Click on twitter button"),fetch("/twitter/authenticate").then((function(e){return e.json()})).then((function(t){e.setState({requestToken:t.oauthRequestToken});var n="https://api.twitter.com/oauth/authenticate?oauth_token=".concat(e.state.requestToken);console.log(e.state.requestToken),window.location.href=n}),(function(e){return console.log(e)}))}},{key:"requestAccessToken",value:function(e,t){var n=this,c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({oauth_token:e,oauth_verifier:t})};fetch("/twitter/callback",c).then((function(e){return e.json()})).then((function(e){console.log(e),fetch("api/user").then((function(e){return e.json()})).then((function(e){n.setState({profile:e.user}),console.log(e),console.log(n.state.profile)}))}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"p-d-flex p-jc-center p-ai-center",children:Object(b.jsx)(g.a,{onClick:this.handleClick.bind(this),children:"Connect to Twitter"})}),Object(b.jsxs)("p",{children:["User: ",this.state.profile?this.state.profile:"Loading Profile..."]})]})}}]),n}(c.Component);var S=function(){var e="Flolight",t="https://github.com/Flolight.png",n="Cloud enthusiast",c=r.a.useState(null),s=Object(C.a)(c,2),i=s[0],a=s[1],o=r.a.useState(null),l=Object(C.a)(o,2),u=l[0],j=l[1];return r.a.useEffect((function(){fetch("/api").then((function(e){return e.json()})).then((function(e){return a(e.message)}))}),[]),r.a.useEffect((function(){fetch("/api/user").then((function(e){return e.json()})).then((function(e){return j(e.user)}))}),[]),Object(b.jsxs)("div",{className:"p-m-4",children:[Object(b.jsx)("p",{children:"An Open source alternative to manage your social media profiles from one place"}),Object(b.jsxs)("div",{className:"p-d-flex p-jc-center p-ai-center",children:[Object(b.jsx)(T.a,{image:t,size:"xlarge",shape:"circle"}),Object(b.jsx)("h1",{className:"p-m-2",children:e})]}),Object(b.jsx)("div",{className:"p-d-flex p-jc-center p-ai-center",children:Object(b.jsx)("p",{children:n})}),Object(b.jsx)("div",{className:"p-d-flex p-jc-center p-ai-center",children:Object(b.jsx)(g.a,{children:"Change picture"})}),Object(b.jsx)("p",{children:i||"Loading..."}),Object(b.jsx)("p",{children:u||"Loading Profile..."}),Object(b.jsx)(q,{})]})},_=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return this.state={isUserAuthenticated:!1},Object(b.jsx)("div",{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(v,{children:Object(b.jsxs)(h.d,{children:[Object(b.jsx)(h.b,{exact:!0,path:"/",render:function(){return e.state.isUserAuthenticated?Object(b.jsx)(h.a,{to:"/home"}):Object(b.jsx)(h.a,{to:"/landing"})}}),Object(b.jsx)(h.b,{path:"/landing",children:Object(b.jsx)(N,{})}),Object(b.jsx)(h.b,{path:"/home",children:Object(b.jsx)(S,{})}),Object(b.jsx)(h.b,{path:"/login",children:Object(b.jsx)(k,{})})]})})})})}}]),n}(r.a.Component),A=_;i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(A,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.c587ceb9.chunk.js.map