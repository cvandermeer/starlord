(this.webpackJsonpexam=this.webpackJsonpexam||[]).push([[0],{147:function(e,a,t){},151:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),c=t.n(r),i=(t(94),t(16)),m=(t(95),t(192)),s=t(189),o=t(184),d=t(187),u=t(186),E=t(185),p=t(188),g=t(29),f=t.n(g),h=t(153),v=t(180),b=t(182),y=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function x(){var e=y(),a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],c=t[1],g=Object(n.useState)(""),v=Object(i.a)(g,2),x=v[0],N=v[1];return l.a.createElement(b.a,{component:"main",maxWidth:"xs",id:"SignInStudent"},l.a.createElement(o.a,null),l.a.createElement("div",{className:e.paper},l.a.createElement(m.a,{className:e.avatar},l.a.createElement(f.a,null)),l.a.createElement(h.a,{component:"h1",variant:"h5"},"Student Sign in"),l.a.createElement("form",{className:e.form,noValidate:!0},l.a.createElement(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:r,autoFocus:!0,onChange:function(e){return c(e.target.value)}}),l.a.createElement(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",value:x,label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return N(e.target.value)}}),l.a.createElement(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){fetch("https://localhost:3001/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,password:x})}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},"Sign In"),l.a.createElement(E.a,{container:!0},l.a.createElement(E.a,{item:!0,xs:!0},l.a.createElement(u.a,{href:"#",variant:"body2"},"Forgot password?")),l.a.createElement(E.a,{item:!0},l.a.createElement(u.a,{href:"/register",variant:"body2"},"Don't have an account? Sign Up"))))),l.a.createElement(p.a,{mt:8},l.a.createElement(u.a,{href:"/agencysignin"},l.a.createElement(s.a,{type:"button",fullWidth:!0,variant:"contained",color:"warm"},"If you are an Agency click here"))))}var N=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function w(){var e=N(),a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],c=t[1],g=Object(n.useState)(""),v=Object(i.a)(g,2),y=v[0],x=v[1];return l.a.createElement("div",null,l.a.createElement(b.a,{component:"main",maxWidth:"xs",id:"SignInAgency"},l.a.createElement(o.a,null),l.a.createElement("div",{className:e.paper},l.a.createElement(m.a,{className:e.avatar},l.a.createElement(f.a,null)),l.a.createElement(h.a,{component:"h1",variant:"h5"},"Agency Sign in"),l.a.createElement("form",{className:e.form,noValidate:!0},l.a.createElement(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return c(e.target.value)}}),l.a.createElement(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return x(e.target.value)}}),l.a.createElement(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){fetch("https://localhost:3001/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,password:y})}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},"Sign In"),l.a.createElement(E.a,{container:!0},l.a.createElement(E.a,{item:!0,xs:!0},l.a.createElement(u.a,{href:"#",variant:"body2"},"Forgot password?")),l.a.createElement(E.a,{item:!0},l.a.createElement(u.a,{href:"/register",variant:"body2"},"Don't have an account? Sign Up"))))),l.a.createElement(p.a,{mt:8},l.a.createElement(u.a,{href:"/studentsignin"},l.a.createElement(s.a,{type:"button",fullWidth:!0,variant:"contained",color:"warm"},"If you are a Student click here")))))}t(70);var j=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function O(){var e=this,a=j(),t=Object(n.useState)(""),r=Object(i.a)(t,2),c=r[0],g=r[1],v=Object(n.useState)(""),y=Object(i.a)(v,2),x=y[0],N=y[1],w=Object(n.useState)(""),O=Object(i.a)(w,2),S=O[0],C=O[1],k=Object(n.useState)(""),W=Object(i.a)(k,2),I=W[0],T=W[1];return l.a.createElement(b.a,{component:"main",maxWidth:"xs"},l.a.createElement(o.a,null),l.a.createElement("div",{className:a.paper},l.a.createElement(m.a,{className:a.avatar},l.a.createElement(f.a,null)),l.a.createElement(h.a,{component:"h1",variant:"h5"},"Sign up"),l.a.createElement("form",{className:a.form,noValidate:!0},l.a.createElement(E.a,{container:!0,spacing:2},l.a.createElement(E.a,{item:!0,xs:12,sm:6},l.a.createElement(d.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,value:c,onChange:function(e){return g(e.target.value)}})),l.a.createElement(E.a,{item:!0,xs:12,sm:6},l.a.createElement(d.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",value:x,onChange:function(e){return N(e.target.value)}})),l.a.createElement(E.a,{item:!0,xs:12},l.a.createElement(d.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:S,onChange:function(e){return C(e.target.value)}})),l.a.createElement(E.a,{item:!0,xs:12},l.a.createElement(d.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:I,onChange:function(e){return T(e.target.value)}})),l.a.createElement(E.a,{item:!0,xs:12})),l.a.createElement(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(){e.props.history.replace("/"),fetch("https://localhost:3001/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstname:c,lastname:x,email:S,password:I})}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},"Sign Up"),l.a.createElement(E.a,{container:!0,justify:"flex-end"},l.a.createElement(E.a,{item:!0},l.a.createElement(u.a,{href:"/studentsignin",variant:"body2"},"Already have an account? Sign in"))))),l.a.createElement(p.a,{mt:5}))}t(71),t(147);var S=Object(n.createContext)(null);var C=function(){var e=Object(n.useContext)(S);return e.user,e.setUser,l.a.createElement("div",{className:"header-area"},l.a.createElement("div",{className:"main-header "},l.a.createElement("div",{className:"header-top d-none d-lg-block"},l.a.createElement("div",{className:"header-left-social"},l.a.createElement("ul",{className:"header-social"},l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",{class:"fab fa-twitter"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",{class:"fab fa-facebook-f"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",{class:"fab fa-linkedin-in"}))),l.a.createElement("li",null," ",l.a.createElement("a",{href:"#"},l.a.createElement("i",{class:"fab fa-google-plus-g"}))))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-xl-12"},l.a.createElement("div",{className:"row d-flex justify-content-between align-items-center"},l.a.createElement("div",{className:"header-info-left"},l.a.createElement("ul",null,l.a.createElement("li",null,"onlineexam@gmail.com"),l.a.createElement("li",null,"+91-XXXXXXXXXX"))),l.a.createElement("div",{className:"header-info-right"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"/studentsignin"},l.a.createElement("i",{class:"ti-user"}),"Login")),l.a.createElement("li",null,l.a.createElement("a",{href:"/register"},l.a.createElement("i",{class:"ti-lock"}),"Register")))))))),l.a.createElement("div",{className:"header-bottom header-sticky"},l.a.createElement("div",{className:"logo d-none d-lg-block"},l.a.createElement("a",{href:"/"},l.a.createElement("img",{src:"assets/img/logo/logo.png",alt:""}))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"menu-wrapper"},l.a.createElement("div",{className:"logo logo2 d-block d-lg-none"},l.a.createElement("a",{href:"index.html"},l.a.createElement("img",{src:"assets/img/logo/logo.png",alt:""}))),l.a.createElement("div",{className:"main-menu d-none d-lg-block"},l.a.createElement("nav",null,l.a.createElement("ul",{id:"navigation"},l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"/about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"/exams"},"Exams")),l.a.createElement("li",null,l.a.createElement("a",{href:"/contact"},"Contact"))))),l.a.createElement("div",{className:"header-search d-none d-lg-block"},l.a.createElement("form",{action:"#",className:"form-box f-right "},l.a.createElement("input",{type:"text",name:"Search",placeholder:"Search Exams"}),l.a.createElement("div",{className:"search-icon"},l.a.createElement("i",{className:"fas fa-search special-tag"}))))),l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"mobile_menu d-block d-lg-none"}))))))};var k=function(){return l.a.createElement("div",null)},W=t(11);var I=function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"slider-area "},l.a.createElement("div",{class:"slider-active"},l.a.createElement("div",{class:"single-slider slider-height d-flex align-items-center"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row align-items-center"},l.a.createElement("div",{class:"col-xl-6 col-lg-7 col-md-8"},l.a.createElement("div",{class:"hero__caption"},l.a.createElement("span",{"data-animation":"fadeInLeft","data-delay":".2s"},"Online Exam Platform"),l.a.createElement("h1",{"data-animation":"fadeInLeft","data-delay":".4s"},"Experience the best way of Online Exams"),l.a.createElement("div",{class:"hero__btn"},l.a.createElement("a",{href:"/studentsignin",class:"btn hero-btn","data-animation":"fadeInLeft","data-delay":".8s"},"Login")))),l.a.createElement("div",{class:"col-xl-6 col-lg-5"},l.a.createElement("div",{class:"hero-man d-none d-lg-block f-right","data-animation":"jello","data-delay":".4s"},l.a.createElement("img",{src:"assets/img/hero/heroman.png",alt:""})))))))))};var T=function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"slider-area"},l.a.createElement("div",{class:"slider-height2 d-flex align-items-center"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-xl-12"},l.a.createElement("div",{class:"hero-cap hero-cap2 text-center"},l.a.createElement("h2",null,"About Us"))))))),l.a.createElement("div",{class:"about-details section-padding30"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row justify-content-center"},l.a.createElement("div",{class:"col-lg-8"},l.a.createElement("div",{class:"about-details-cap mb-50"},l.a.createElement("h4",null,"Our Mission"),l.a.createElement("p",null,"Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus."),l.a.createElement("p",null," Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.")),l.a.createElement("div",{class:"about-details-cap mb-50"},l.a.createElement("h4",null,"Our Vision"),l.a.createElement("p",null,"Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.")))))))};var q=function(){var e=Object(n.useState)("Arihant"),a=Object(i.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",null,l.a.createElement(S.Provider,{value:{user:t,setUser:r}},l.a.createElement(C,null),l.a.createElement(k,null),l.a.createElement(W.c,null,l.a.createElement(W.a,{exact:!0,path:"/",component:I}),l.a.createElement(W.a,{exact:!0,path:"/agencysignin",component:w}),l.a.createElement(W.a,{exact:!0,path:"/studentsignin",component:x}),l.a.createElement(W.a,{exact:!0,path:"/register",component:O}),l.a.createElement(W.a,{exact:!0,path:"/about",component:T}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=t(53);t(149),t(150);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A.a,null,l.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,a,t){e.exports=t.p+"static/media/students.c1079f3f.jpg"},89:function(e,a,t){e.exports=t(151)},94:function(e,a,t){},95:function(e,a,t){}},[[89,1,2]]]);
//# sourceMappingURL=main.50a3dfff.chunk.js.map