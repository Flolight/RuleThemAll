(this.webpackJsonprulethemall=this.webpackJsonprulethemall||[]).push([[0],{19:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(5),a=n.n(s),i=(n(19),n(24)),o=n(2),l=(n(30),n(31),n(32),n(33),n(1));var j=n(7),u=n(8),h=n(10),b=n(9),d=n.p+"static/media/logo.62fe424e.png",f=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)("header",{children:Object(l.jsxs)("nav",{className:"container flex items-center justify-between py-2",children:[Object(l.jsxs)("div",{className:"container flex items-center justify-start",children:[Object(l.jsx)("div",{className:"m-4",children:Object(l.jsx)("img",{src:d,className:"h-10",alt:"logo"})}),Object(l.jsx)("div",{className:"m-2",children:Object(l.jsx)("h1",{className:"text-2xl",children:"Rule Them All"})})]}),Object(l.jsx)("div",{className:"",children:Object(l.jsx)("button",{type:"button",className:"rounded-3xl w-40 h-12 bg-b-yellow hover:bg-b-black hover:text-b-white",children:"Get started !"})})]})})})}}]),n}(c.Component),x=f,m=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("footer",{className:"flex items-center justify-center pt-1 border-b-2 border-b-yellow",children:[Object(l.jsx)("span",{className:"mr-2",children:"Contribute on "}),Object(l.jsx)("a",{href:"https://github.com/Flolight/RuleThemAll",children:Object(l.jsx)("i",{className:"pi pi-github"})})]})})}}]),n}(c.Component),O=m,p=function(e){return Object(l.jsxs)("div",{className:"flex flex-col font-Poppins min-h-screen",children:[Object(l.jsx)(x,{}),Object(l.jsx)("main",{className:"flex flex-grow",children:e.children}),Object(l.jsx)(O,{})]})},v=(n(18),n(20),n(14));c.Component;var g=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var c;Object(j.a)(this,n),(c=t.call(this,e)).state={requestToken:null,profile:null};var r=new URLSearchParams(window.location.search),s=r.get("oauth_token"),a=r.get("oauth_verifier");return s&&a&&(console.log("query: "+r.toString()),c.requestAccessToken(s,a)),c}return Object(u.a)(n,[{key:"handleClick",value:function(){var e=this;console.debug("Click on twitter button"),fetch("/twitter/authenticate").then((function(e){return e.json()})).then((function(t){e.setState({requestToken:t.oauthRequestToken});var n="https://api.twitter.com/oauth/authenticate?oauth_token=".concat(e.state.requestToken);console.log(e.state.requestToken),window.location.href=n}),(function(e){return console.log(e)}))}},{key:"requestAccessToken",value:function(e,t){var n=this,c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({oauth_token:e,oauth_verifier:t})};fetch("/twitter/callback",c).then((function(e){return e.json()})).then((function(e){console.log(e),fetch("api/user").then((function(e){return e.json()})).then((function(e){n.setState({profile:e.user}),console.log(e),console.log(n.state.profile)}))}))}},{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"p-d-flex p-jc-center p-ai-center",children:Object(l.jsx)(v.a,{onClick:this.handleClick.bind(this),children:"Connect to Twitter"})}),Object(l.jsxs)("p",{children:["User: ",this.state.profile?this.state.profile:"Loading Profile..."]})]})}}]),n}(c.Component),k=n(21),y=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"flex flex-col landing-img bg-cover bg-center flex-grow",children:Object(l.jsxs)("div",{className:"p-my-6 p-text-center font-bold",children:[Object(l.jsx)("div",{className:"my-2 ",children:Object(l.jsx)("h2",{className:"text-3xl text-b-black",children:"Manage all your social media profiles from one place"})}),Object(l.jsx)("div",{className:"h-96"}),Object(l.jsx)("div",{className:"m-4 container mx-auto flex justify-center",children:Object(l.jsx)(k.a,{formId:"2633804",className:"ck-form",buttonBackground:"#F9C22E",buttonColor:"#171614",hideName:"true"})})]})})}}]),n}(c.Component),N=y;var w=function(e){var t=this;return Object(l.jsx)("div",{children:Object(l.jsx)(i.a,{children:Object(l.jsx)(p,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",component:N}),Object(l.jsx)(o.a,{path:"/login",render:function(){return Object(l.jsx)(g,{user:t.props.user})}})]})})})})};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.e475269a.chunk.js.map