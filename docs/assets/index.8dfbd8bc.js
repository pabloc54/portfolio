var ie=Object.defineProperty,re=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var A=(a,o,t)=>o in a?ie(a,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[o]=t,m=(a,o)=>{for(var t in o||(o={}))O.call(o,t)&&A(a,t,o[t]);if(k)for(var t of k(o))M.call(o,t)&&A(a,t,o[t]);return a},u=(a,o)=>re(a,ce(o));var J=(a,o)=>{var t={};for(var s in a)O.call(a,s)&&o.indexOf(s)<0&&(t[s]=a[s]);if(a!=null&&k)for(var s of k(a))o.indexOf(s)<0&&M.call(a,s)&&(t[s]=a[s]);return t};import{c as le,a as de,r as p,u as w,j as e,b as i,d as _,e as L,f as y,C as me,F as d,I as ue,R as pe,P as ge}from"./vendor.68ce84c0.js";const he=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}};he();const be=(a=W,o)=>{switch(o.type){case"@app/toggleTheme":{const t=a.theme==="light"?"dark":"light",s=u(m({},a),{theme:t});return localStorage.setItem("theme",t),s}case"@app/toggleLanguage":{const t=a.locale==="es"?"en":"es",s=u(m({},a),{locale:t});return localStorage.setItem("locale",t),s}case"@app/expandProject":return u(m({},a),{activeProject:o.payload});default:return a}},fe=(a=B,o)=>{switch(o.type){case"@modal/show":return{show:!0,name:o.payload};case"@modal/hide":return u(m({},a),{show:!1});default:return a}},ve="\u201CLo que nos hace grandes es el hecho de poder ver lo peque\xF1os que somos\u201D";var ye={"navbar.contactMe":"\xA1Cont\xE1ctame!","goto.projects":"\xA1Conoce m\xE1s de mis proyectos!","goto.aboutme":"\xA1Conoce m\xE1s de m\xED!","goto.skills":"\xA1Conoce m\xE1s de mis habilidades!","goto.start":"Ir hacia arriba","welcome.status":"(En busca de trabajo)","welcome.presentation":"\xA1Hola! Soy Desarrollador Web Fullstack con amplios conocimientos en tecnolog\xEDas web y dise\xF1o.","projects.title":"Mis Proyectos","projects.text1":"El c\xF3digo fuente de todos los proyectos est\xE1 disponible en mi ","project.typesty":"Interfaz web para ejecutar un lenguaje derivado de JavaScript, llamado Typesty. Facilita el manejo de varios archivos y el debug del lenguaje.","project.mini translator":"Traductor en l\xEDnea en tiempo real. Facilita la traducci\xF3n entre m\xE1s de 100 lenguajes, as\xED como el dictado del texto, todo desde una interfaz de usuario minimalista e intuitiva.","project.quiz game":"Juego de preguntas en l\xEDnea. Permite seleccionar entre una amplia variedad de categor\xEDas y la cantidad de estas. Tiene una interfaz c\xF3moda y sencilla que hace f\xE1cil e intuitiva la experiencia de contestar las preguntas que quieras.","project.quiniela app":"wip","project.jolc":"Int\xE9rprete de JOLC, un lenguaje de programaci\xF3n derivado de Julia, ejecutable en la web. Facilita el debug del lenguaje mediante reportes.","project.notes":"wip","aboutme.title":"Acerca De M\xED","aboutme.text1":"Disfruto mucho desarrollando software, amo las buenas pr\xE1cticas y el clean code \u{1F4D6}. Soy aficionado de los deportes, los videojuegos de muchos g\xE9neros y la actualidad del mundo de la tecnolog\xEDa.","aboutme.text2":"Resido en la capital de Guatemala \u{1F1EC}\u{1F1F9}, lugar de volcanes, de gran clima y gente alegre. Por supuesto, estoy abierto a trabajar con equipos internacionales mediante teletrabajo.","aboutme.text3":"Estoy cursando un grado de Ingenier\xEDa en Ciencias y Sistemas en la Universidad de San Carlos de Guatemala, gracias al cual he desarrollado una gran habilidad en el desarrollo de software y el trabajo colaborativo.","skills.title":"Habilidades","skill.html":"Lenguaje de marcado de la web. Poseo alto conocimiento de HTML5 y buenas pr\xE1cticas en el maquetado de p\xE1ginas web.","skill.css":"Lenguaje de dise\xF1o de la web. Poseo un gran conocimiento de styling de p\xE1ginas web, as\xED como animaciones y buenas pr\xE1cticas.","skill.javascript":"Lenguaje de programaci\xF3n de la web. Poseo mucha experiencia con Vanilla JavaScript en la manipulaci\xF3n del DOM, as\xED como el uso del entorno de ejecuci\xF3n Node.js para la creaci\xF3n de scripts y APIs de servidor.","skill.typescript":"Lenguaje de programaci\xF3n supraconjunto de JavaScript. Poseo conocimiento del tipado inherente de TypeScript y el tipado de terceros.","skill.reactjs":"Librer\xEDa de JavaScript para la construcci\xF3n de interfaces de usuario. Tengo un vasto conocimiento de los mecanismos de ReactJS, la creaci\xF3n de componentes reutilizables, as\xED como el uso de hooks, creaci\xF3n de custom hooks, optimizaci\xF3n de proyectos, etc.","skill.redux":"Librer\xEDa de JavaScript para el manejo del estado global de aplicaciones web. Tengo experiencia de uso y buenas pr\xE1cticas de Redux y Redux Toolkit en Vanilla JavaScript y ReactJs.","skill.expressjs":"Framework de JavaSript para la construcci\xF3n de servidores HTTP. Poseo experiencia en la creaci\xF3n de APIs y REST APIs, creaci\xF3n y uso de middlewares, y an\xE1lisis estad\xEDstico de datos.","skill.go":"Lenguaje de programaci\xF3n simple y eficiente. Tengo conocimiento de creaci\xF3n de aplicaciones de l\xEDnea de comando y creaci\xF3n de APIs con buenas pr\xE1cticas.","skill.python":"Lenguaje de programaci\xF3n interpretado y multiprop\xF3sito. Poseo una gran experiencia en la creaci\xF3n de todo tipo de aplicaciones con Python, desde simples scripts de automatizaci\xF3n, hasta APIs de cualquier \xEDndole.","skill.mongodb":"Base de datos NO-SQL. Poseo experiencia en el uso eficiente de colecciones, y el despliegue y uso de bases de datos en la nube.","skill.mysql":"Base de datos SQL de Oracle. Poseo una gran experiencia en el modelado normalizado de bases de datos para las necesidades de cualquier negocio.","skill.pl/sql":"Lenguaje de programaci\xF3n SQL de Oracle. Tengo gran experiencia en el modelado normalizado de bases de datos, creaci\xF3n y testing de procedimientos, funciones, triggers y schedules.","skill.java":"Lenguaje de programaci\xF3n multiplataforma de Oracle. Tengo una vasta experiencia en la creaci\xF3n de interfaces de usuario para cualquier necesidad y aplicaciones de l\xEDnea de comando.","skill.aws":"Colecci\xF3n de servicios en la nube de Amazon. Poseo conocimiento de Amazon S3, Amazon EC2, Amazon RDS y Amazon VPC.","skill.oracle cloud":"Servicios en la nube de Oracle. Poseo conocimiento en la creaci\xF3n y uso de Compute Instances, Autonomous Data Warehouse, Autonomous JSON Database y Buckets.","contact.title":"\xBFTe gusta lo que ves?","contact.text1":"\xA1Te invito a mandarme un mensaje por ","contact.text2":"... o m\xE1ndame un email a ",quote:ve};const ke="\u201CWhat makes us great is the fact of being able to see how small we are\u201D";var we={"navbar.contactMe":"Contact me!","goto.projects":"Learn more about my projects!","goto.aboutme":"Learn more about me!","goto.skills":"Learn more about my skills!","goto.start":"Go to top","welcome.status":"(Looking for a job)","welcome.presentation":"Hi! I'm a FullStack Web Developer with extensive knowledge in web technologies and design.","projects.title":"My Works","projects.text1":"The source code of all of this projects is available on my ","project.typesty":"Web graphic user interface for interpreting a derived language of JavaScript named Typesty. Makes it easy to handle multiple files and debugging the language.","project.mini translator":"Real-time translation online. Mini Translator eases the translation between 100+ languages, as well as text spelling, everything from a minimalistic and intuitive GUI.","project.quiz game":"Quiz game online. The game allows picking a variety of categories and amount of questions. The GUI aims to be comfortable and simple, to make easy and intuitive the answering of questions.","project.quiniela app":"wip","project.jolc":"Web interpreter for a programming language derived from Julia, named JOLC. Eases the debug of the language via AST, error and symbols reports.","project.notes":"wip","aboutme.title":"About Me","aboutme.text1":"I really like software development, I love good practices and clean code \u{1F4D6}. I am passionate about sports, video games of many genres and the present of the world of technology.","aboutme.text2":"I live in the capital of Guatemala \u{1F1EC}\u{1F1F9}, a place of volcanoes, great weather and nice people. Of course, I'm willing to work with international teams via remote work.","aboutme.text3":`I'm studying a degree in science and systems engineering at "Universidad de San Carlos de Guatemala", thanks to wich I developed great skills in software development, and a huge love for everything around technology \u{1F4BB}.`,"skills.title":"Skills","skill.html":"The web markup language. I have a high knowledge of HTML5 and good practices in web pages layout.","skill.css":"The web design language. I have a great knowledge of styling web pages, as well as animations and good practices.","skill.javascript":"The web programming language. I have a high experience with Vanilla JavaScript in the manipulation of the DOM, and in server side code with Node.js for scripting and APIs.","skill.typescript":"Programming language, supraset of JavaScript. I have knowledge of TypeScript basic typing, and third party libraries typing.","skill.reactjs":"JavaScript library for building web GUI. I have a deep knowledge of React mechanisms, as well as reusable components building, use of hooks, creation of custom hooks, optimization, etc.","skill.redux":"JavaScript library for web application's global state managment. I'm high experienced at Redux and Redux Toolkit usage along with Vanilla JavaScript and ReactJS, with good practices and scalable design.","skill.expressjs":"JavaSript Framework for building HTTP servers. I have a high experience in creating APIs and REST APIs, creation and usage of middlewares, and data statistic analysis.","skill.go":"Efficient programming language from Google. I have knowledge at CLIs building, as well as APIs creation with good practices.","skill.python":"Simple and multipurpose programming. I have a deep experience in creating Python modules for any needs, from simple scripts, to APIs of any kind.","skill.mongodb":"NO-SQL database. I'm experienced in efficient usage of collections and cloud deployment of databases.","skill.mysql":"SQL database from Oracle. I have a high experience of normalized database modeling for all kind of needs.","skill.pl/sql":"SQL programming language from Oracle. I'm high experienced in modeling of databases, creation and testing of procedures, functions, triggers and schedules.","skill.java":"Multiplatform programming language from Oracle. I have a deep experience of desktop GUI creation for any type of needs, as well as CLI building.","skill.aws":"Collection of services from the Amazon Cloud. I have knowledge in Amazon S3, Amazon EC2, Amazon RDS and Amazon VPC.","skill.oracle cloud":"Cloud services from Oracle. I have knowledge in creation and managment of Compute Instances, Autonomous Data Warehouse, Autonomous JSON Database and Buckets.","contact.title":"Like what you see?","contact.text1":"I invite you to message me via ","contact.text2":"... or send me an email to ",quote:ke};const F={es:ye,en:we},R=a=>a&&Object.keys(F).find(o=>a.startsWith(o)),_e=R(localStorage.getItem("locale"))||R(navigator.language)||"en",xe=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",je=["light","dark"].includes(localStorage.getItem("theme"))&&localStorage.getItem("theme")||xe,W={activeProject:"",locale:_e,theme:je},B={name:"HTML",show:!1},Se={app:W,modal:B},Ie=le({app:be,modal:fe}),Le=de(Ie,Se,void 0),Ce="_base_t35ks_1";var qe={base:Ce};const Te="_base_a3x79_1",Ne="_items_a3x79_19";var q={base:Te,"appear-navbar":"_appear-navbar_a3x79_1",items:Ne};const T={dark:{circle:{r:9},mask:{cx:"50%",cy:"23%"},svg:{transform:"rotate(40deg)"},lines:{opacity:0}},light:{circle:{r:5},mask:{cx:"100%",cy:"0%"},svg:{transform:"rotate(90deg)"},lines:{opacity:1}},springConfig:{mass:4,tension:250,friction:35}};let E=0;const Pe=h=>{var g=h,{onChange:a,checked:o=!1,size:t=24,animationProperties:s=T,moonColor:n="white",sunColor:r="black",style:l}=g,c=J(g,["onChange","checked","size","animationProperties","moonColor","sunColor","style"]);const[C,P]=p.exports.useState(0);p.exports.useEffect(()=>{E+=1,P(E)},[P]);const K=p.exports.useMemo(()=>s!==T?Object.assign(T,s):s,[s]),{circle:Y,svg:X,lines:Z,mask:ee}=K[o?"dark":"light"],ae=w(u(m({},X),{config:s.springConfig})),oe=w(u(m({},Y),{config:s.springConfig})),te=w(u(m({},ee),{config:s.springConfig})),se=w(u(m({},Z),{config:s.springConfig})),ne=()=>a(!o),$=`circle-mask-${C}`;return e("button",{onClick:ne,"aria-label":"cambiar tema",children:i(_.svg,u(m({xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",color:o?n:r,fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",style:m(m({cursor:"pointer"},ae),l)},c),{children:[i("mask",{id:$,children:[e("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"white"}),e(_.circle,{style:te,r:"9",fill:"black"})]}),e(_.circle,{cx:"12",cy:"12",fill:o?n:r,style:oe,mask:`url(#${$})`}),i(_.g,{stroke:"currentColor",style:se,children:[e("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),e("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),e("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),e("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),e("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),e("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),e("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),e("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})]}))})},$e=()=>({type:"@app/toggleTheme"}),Ae=()=>({type:"@app/toggleLanguage"}),Oe=a=>({type:"@app/expandProject",payload:a}),Me=a=>{a==="dark"?document.querySelector("body").classList.add("dark"):document.querySelector("body").classList.remove("dark")};function Je(){const{theme:a}=L(({app:s})=>s),o=y(),t=()=>{o($e())};return p.exports.useLayoutEffect(()=>{Me(a)},[a]),{isDarkTheme:a==="dark",changeTheme:t}}function H(){const{locale:a}=L(({app:n})=>n),o=y(),t=F[a];return{locale:a,language:t,changeLanguage:()=>{o(Ae())}}}function Re(){const{isDarkTheme:a,changeTheme:o}=Je(),{locale:t,changeLanguage:s}=H();return e("nav",{className:q.base,children:i("div",{className:q.items,children:[e(Pe,{checked:!a,onChange:o,moonColor:"var(--content-color)",sunColor:"var(--content-color)"}),e("button",{className:q.language,onClick:s,"aria-label":"cambiar lenguaje",children:t})]})})}const Ee="_base_v13j0_1",ze="_show_v13j0_20",De="_modal_v13j0_25",Ge="_close_v13j0_38";var x={base:Ee,show:ze,modal:De,close:Ge};const Fe="_base_1f8ou_1",We="_icon_1f8ou_8",Be="_big_1f8ou_29",He="_small_1f8ou_45";var j={base:Fe,icon:We,big:Be,small:He};const Qe=a=>({type:"@modal/show",payload:a}),Ue=()=>({type:"@modal/hide"});function N({size:a="medium",name:o,image:t}){const s=y(),n=()=>{a!=="big"&&s(Qe(o))},r=`${j.base} ${a==="big"?j.big:a==="small"?j.small:""}`;return i("div",{className:r,children:[e("button",{className:j.icon,onClick:n,title:a==="small"?o:"",children:e("img",{src:t,alt:`${o} logo`})}),a!=="small"&&e("span",{children:o})]})}const Ve="_base_ek5oi_1",Ke="_animated_ek5oi_14",Ye="_shadow_ek5oi_19";var S={base:Ve,animated:Ke,"appear-section":"_appear-section_ek5oi_1",shadow:Ye};function Xe(){return i(me,{speed:2,width:"100%",height:350,backgroundColor:"var(--quaternary-color)",foregroundColor:"var(--primary-color)",children:[e("rect",{x:"50%",y:"35",rx:"3",ry:"3",width:"200",height:"25"}),e("rect",{x:"0",y:"100",rx:"3",ry:"3",width:"100%",height:"7"}),e("rect",{x:"0",y:"125",rx:"3",ry:"3",width:"95%",height:"7"}),e("rect",{x:"0",y:"150",rx:"3",ry:"3",width:"95%",height:"7"}),e("rect",{x:"0",y:"175",rx:"3",ry:"3",width:"70%",height:"7"}),e("rect",{x:"0",y:"225",rx:"3",ry:"3",width:"100%",height:"7"}),e("rect",{x:"0",y:"250",rx:"3",ry:"3",width:"100%",height:"7"}),e("rect",{x:"0",y:"275",rx:"3",ry:"3",width:"95%",height:"7"}),e("rect",{x:"0",y:"300",rx:"3",ry:"3",width:"50%",height:"7"})]})}function Q(a,o,t,s=!0){const[n,r]=p.exports.useState(!t),l=([c])=>{r(c==null?void 0:c.isIntersecting)};return p.exports.useEffect(()=>{const c=!!window.IntersectionObserver,h=a==null?void 0:a.current;if(!c||!h||s&&n)return;const g=new IntersectionObserver(l,o);return g.observe(h),()=>g.disconnect()},[a,o]),n}function v({shadow:a=!0,animated:o=!0,fallback:t=!0,className:s,children:n,onClick:r,Tag:l="section"}){const c=p.exports.useRef(null),h=Q(c,{threshold:.3},t),g=`${S.base} ${s} ${a?S.shadow:""} ${t?o&&h?S.animated:"":o?S.animated:""}`;return e(l,{className:g,ref:c,onClick:r,children:t&&!h?e(Xe,{}):n})}var Ze="/portfolio/assets/html-icon.e1bb9061.svg",ea="/portfolio/assets/css-icon.bc7a8cb8.svg",aa="/portfolio/assets/javascript-icon.dd689822.svg",oa="/portfolio/assets/typescript-icon.ec953d09.svg",ta="/portfolio/assets/reactjs-icon.e8f9b857.svg",sa="/portfolio/assets/redux-icon.f5f8094e.svg",na="/portfolio/assets/express-icon.44e8ea18.svg",ia="/portfolio/assets/go-icon.17a5ebb9.svg",ra="/portfolio/assets/python-icon.64c6d516.svg",ca="/portfolio/assets/mongodb-icon.64a21d47.svg",la="/portfolio/assets/mysql-icon.d33f9bfd.svg",da="/portfolio/assets/oraclesql-icon.426376ff.svg",ma="/portfolio/assets/java-icon.4f265083.svg",ua="/portfolio/assets/aws-icon.dbfb8d7b.svg",pa="/portfolio/assets/oraclecloud-icon.72ca79b4.svg";const U={FrontEnd:[{name:"HTML",image:Ze},{name:"CSS",image:ea},{name:"JavaScript",image:aa},{name:"TypeScript",image:oa},{name:"ReactJS",image:ta},{name:"Redux",image:sa}],BackEnd:[{name:"ExpressJS",image:na},{name:"Go",image:ia},{name:"Python",image:ra},{name:"MongoDB",image:ca},{name:"MySQL",image:la},{name:"PL/SQL",image:da}],Otras:[{name:"Java",image:ma},{name:"AWS",image:ua},{name:"Oracle Cloud",image:pa}]},ga=Object.values(U).reduce((a,o)=>[...a,...o],[]),V=a=>ga.find(o=>o.name===a);function ha(){const{show:a,name:o}=L(({modal:l})=>l),t=y(),s=V(o),n=()=>{t(Ue())},r=l=>{l.stopPropagation()};return p.exports.useEffect(()=>{const l=c=>{(c.charCode||c.keyCode)===27&&n()};document.body.addEventListener("keydown",l)},[]),{show:a,handleClose:n,handleStopPropagation:r,skill:s}}function ba(){const{show:a,handleClose:o,handleStopPropagation:t,skill:s}=ha(),{name:n,image:r}=s;return e("div",{className:`${x.base} ${a?x.show:""}`,onClick:o,children:i(v,{Tag:"aside",className:x.modal,onClick:t,children:[e("button",{className:x.close,onClick:o,children:"\u2715"}),e(N,{name:n,image:r,size:"big"}),e("p",{className:"center",children:e(d,{id:`skill.${n.toLowerCase()}`})})]})})}const fa="_base_1q1iz_1";var va={base:fa};const ya="_base_1o0vm_1",ka="_icon_1o0vm_22",wa="_dot1_1o0vm_40",_a="_dot2_1o0vm_46",xa="_dot3_1o0vm_52",ja="_arrow_1o0vm_59",Sa="_up_1o0vm_60";var b={base:ya,icon:ka,"appear-button":"_appear-button_1o0vm_1",dot1:wa,dot2:_a,dot3:xa,arrow:ja,up:Sa};const Ia=(a,o="down")=>{const t=document.getElementById("base"),s=a.currentTarget.getBoundingClientRect(),n=o==="down"?t.scrollTop+s.y+120:0;t.scrollTo({top:n,behavior:"smooth"})},La=!0,Ca=!1;function I({direction:a="down",label:o}){o=e("p",{children:e(d,{id:o})});const t=p.exports.useRef(null),s=Q(t,{threshold:.75},La,Ca);return i("button",{className:`${b.base} ${a==="up"?b.up:""} ${s?b.arrow:""}`,ref:t,onClick:n=>Ia(n,a),children:[a==="up"&&o,i("div",{className:b.icon,children:[e("div",{className:b.dot1}),e("div",{className:b.dot2}),e("div",{className:b.dot3})]}),a==="down"&&o]})}const qa="_base_6ptrm_1",Ta="_avatar_6ptrm_10";var z={base:qa,avatar:Ta},Na="/portfolio/assets/profile-photo.a6b7c299.jpg";function Pa(){return i(v,{Tag:"header",className:z.base,shadow:!1,fallback:!1,children:[e("div",{className:z.avatar,children:e("img",{src:Na,alt:"Yo"})}),e("h1",{children:"Pablo Cabrera"}),e("p",{className:"small",children:e(d,{id:"welcome.status"})}),e("p",{className:"center",children:e(d,{id:"welcome.presentation"})})]})}const $a="_inline_yubtj_1";var D={inline:$a},Aa="/portfolio/assets/guatemala.9f556f99.jpg",Oa="/portfolio/assets/facultad.243ed53f.jpg";function Ma(){return i(v,{children:[e("h2",{children:e(d,{id:"aboutme.title"})}),e("p",{children:e(d,{id:"aboutme.text1"})}),i("div",{className:D.inline,children:[e("img",{src:Aa,alt:"Guatemala, Lago de Atitl\xE1n"}),e("p",{children:e(d,{id:"aboutme.text2"})})]}),i("div",{className:D.inline,children:[e("img",{src:Oa,alt:"Facultad de Ingenieria, USAC"}),e("p",{children:e(d,{id:"aboutme.text3"})})]})]})}const Ja="_subsection_11kdq_1",Ra="_skills_11kdq_8";var G={subsection:Ja,skills:Ra};function Ea(){return i(v,{children:[e("h2",{children:e(d,{id:"skills.title"})}),Object.entries(U).map(([a,o])=>i("div",{className:G.subsection,children:[e("h3",{children:a}),e("div",{className:G.skills,children:o.map((t,s)=>e(N,m({},t),s))})]},a))]})}const za="_projects_1gerc_1";var Da={projects:za};const Ga="_base_kfql7_1",Fa="_header_kfql7_17",Wa="_down_kfql7_27",Ba="_content_kfql7_33",Ha="_images_kfql7_51",Qa="_tags_kfql7_78",Ua="_expanded_kfql7_86";var f={base:Ga,header:Fa,down:Wa,content:Ba,images:Ha,tags:Qa,expanded:Ua};function Va(a,o){const{activeProject:t}=L(({app:c})=>c),s=y(),n=a===t,r=o.map(c=>V(c));return{expanded:n,toggleExpand:()=>{s(Oe(n?"":a))},skills:r}}function Ka({name:a,url:o="",technologies:t=[],images:s=[]}){const{expanded:n,toggleExpand:r,skills:l}=Va(a,t),[c,h]=s;return i("article",{className:`${f.base} ${n?f.expanded:""}`,children:[i("div",{className:f.header,children:[e("h3",{children:e("a",{target:"_blank",rel:"noreferrer",href:o,children:a})}),e("button",{className:f.down,onClick:r,"aria-label":"expandir",children:"\u276F"})]}),i("div",{className:f.content,children:[i("p",{children:[e(d,{id:`project.${a.toLowerCase()}`})," "]}),i("div",{className:f.images,children:[e("img",{src:c,alt:`${a} preview 1`}),e("img",{src:h,alt:`${a} preview 2`})]})]}),e("div",{className:f.tags,children:l.map((g,C)=>e(N,u(m({},g),{size:"small"}),C))})]})}var Ya="/portfolio/assets/translator-img1.5a4c45ef.jpg",Xa="/portfolio/assets/translator-img2.223f8e15.jpg",Za="/portfolio/assets/quiz-img1.32c6a0a4.jpg",eo="/portfolio/assets/quiz-img2.0706de1c.jpg",ao="/portfolio/assets/jolc-img1.135f1b9f.jpg",oo="/portfolio/assets/jolc-img2.bbefa6d3.jpg",to="/portfolio/assets/typesty-img1.6388e69d.jpg",so="/portfolio/assets/typesty-img2.272cba85.jpg";const no=[{name:"Mini Translator",url:"https://pabloc54.github.io/translator/",technologies:["JavaScript"],images:[Ya,Xa]},{name:"Quiz Game",url:"https://pabloc54.github.io/quiz/",technologies:["ReactJS","Redux"],images:[Za,eo]},{name:"JOLC",url:"https://jolc2.herokuapp.com/",technologies:["ReactJS","Redux","Python"],images:[ao,oo]},{name:"Typesty",url:"https://pabloc54.github.io/typesty/",technologies:["ReactJS"],images:[to,so]}];function io(){return i(v,{children:[e("h2",{children:e(d,{id:"projects.title"})}),i("p",{children:[e(d,{id:"projects.text1"}),e("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/pabloc54",children:"GitHub"}),"."]}),e("div",{className:Da.projects,children:no.map((a,o)=>e(Ka,m({},a),o))})]})}const ro="_base_b0oiz_1";var co={base:ro};function lo(){return i(v,{className:co.base,shadow:!1,fallback:!1,children:[e("h2",{children:e(d,{id:"contact.title"})}),i("p",{className:"center",children:[e(d,{id:"contact.text1"}),e("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/pabloc54/",children:"LinkedIn"}),"! \u{1F4E8}"]}),i("p",{className:"center small",children:[e(d,{id:"contact.text2"}),e("a",{target:"_blank",rel:"noreferrer",href:"mailto:pablofernando54@outlook.com",children:"pablofernando54@outlook.com"})," ","."]})]})}const mo="_base_1quo6_1";var uo={base:mo};function po(){return i("footer",{className:uo.base,children:["Source: ",e("a",{href:"https://github.com/pabloc54/portfolio",children:"GitHub"})]})}function go(){return i("div",{className:va.base,id:"base",children:[e(Pa,{}),e(I,{label:"goto.projects"}),e(io,{}),e(I,{label:"goto.aboutme"}),e(Ma,{}),e(I,{label:"goto.skills"}),e(Ea,{}),e(lo,{}),e(I,{direction:"up",label:"goto.start"}),i("blockquote",{children:[e(d,{id:"quote"})," \u2014 ",e("i",{children:"Carl Sagan"})]}),e(po,{})]})}function ho(){const{locale:a,language:o}=H();return e("div",{className:qe.base,children:i(ue,{locale:a,messages:o,children:[e(ba,{}),e(Re,{}),e(go,{})]})})}pe.render(e(p.exports.StrictMode,{children:e(ge,{store:Le,children:e(ho,{})})}),document.querySelector("main"));
