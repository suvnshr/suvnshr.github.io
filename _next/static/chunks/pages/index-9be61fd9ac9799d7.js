(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(4294)}])},4294:function(n,e,i){"use strict";i.r(e),i.d(e,{__N_SSG:function(){return fn},default:function(){return Zn}});var t=i(8521),a=i(3832),r=i(2318),s=i(3450),o=i(603),c=i(7294),l=i(1120),d=i(5881),u=i(8665),p=i(7548),m=i(9907),h=i(8634),g=i(2243),x=i(9986),j=(0,l.Z)({root:{width:"100%",position:"fixed",bottom:0},scrollspy:{margin:0,padding:0,listStyleType:"none"}});function k(){var n=j(),e=(0,o.Z)(c.useState(0),2),i=e[0],a=e[1],r=(0,c.useState)(null),s=r[0],l=r[1],k=["about","skills","projects","blogs"];return(0,c.useEffect)((function(){var n=[];k.forEach((function(e){n.push(document.querySelector("#"+e))})),l(n)}),[]),(0,t.jsx)(x.Z,{items:k,className:n.scrollspy,onUpdate:function(n){a(k.indexOf(n.id))},children:(0,t.jsxs)(d.Z,{value:i,onChange:function(n,e){a(e),null!==s&&s[e].scrollIntoView()},showLabels:!0,className:n.root,children:[(0,t.jsx)(u.Z,{label:"About",icon:(0,t.jsx)(p.Z,{})}),(0,t.jsx)(u.Z,{label:"Skills",icon:(0,t.jsx)(m.Z,{})}),(0,t.jsx)(u.Z,{label:"Projects",icon:(0,t.jsx)(h.Z,{})}),(0,t.jsx)(u.Z,{label:"Blogs",icon:(0,t.jsx)(g.Z,{})})]})})}var b=i(1749),v=(0,l.Z)((function(n){return{root:{backgroundColor:n.palette.secondary.dark,padding:20}}}));function f(){var n=v();return(0,t.jsx)(b.Z,{container:!0,className:n.root,justify:"center",children:(0,t.jsx)(b.Z,{item:!0,children:(0,t.jsxs)(r.Z,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 Suvansh Rana ",(new Date).getFullYear(),"."]})})})}function Z(n){var e=n.count,i=14*(void 0===e?1:e);return(0,t.jsx)("div",{style:{margin:i}})}var w=i(6042),y=i(8920),S=i(3457),_=i(8463),N=i(1907),I=i(9912),C=i(951),D=i(282),T=i(6204),L=i(2647);var P=function(n){return(0,t.jsx)("a",{href:n.link,target:"_blank",rel:"noopener noreferrer",children:n.children})},A=i(8735);var z=(0,l.Z)({root:{maxWidth:345,marginTop:20},media:{objectFit:"contain",height:210,backgroundColor:"#2b2b2b",filter:"brightness(0.8)"},button:{padding:"8px 16px",letterSpacing:.45},cardAction:{padding:"10px 15px"},categoryChip:{margin:"4px 3px",lineHeight:1.9}});function E(n){var e=n.title,i=n.description,a=n.thumbnail,s=n.categories,o=n.link,l=z();(0,c.useEffect)((function(){document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("img").forEach((function(n){n.ondragstart=function(n){n.preventDefault()}}))}))}),[]);var d=i.match(/(?:https?:\/\/.*\.(?:jpg|jpeg|png|gif|bmp|svg))|(?:\/[^\s]*\.(?:jpg|jpeg|png|gif|bmp|svg))/gi)||[];return(0,t.jsxs)(_.Z,{className:l.root,children:[(0,t.jsx)(C.Z,{component:"img",height:"140",image:a||(null===d||void 0===d?void 0:d[0]),className:l.media,alt:e,title:e}),(0,t.jsxs)(I.Z,{children:[(0,t.jsx)(r.Z,{gutterBottom:!0,variant:"h5",component:"h2",children:e}),(0,t.jsx)(Z,{}),(0,t.jsx)("div",{children:s.map((function(n,e){return(0,t.jsx)(T.Z,{size:"small",className:l.categoryChip,label:n,variant:"outlined",component:"span"},"category-chip-".concat(e))}))}),(0,t.jsx)(Z,{}),(0,t.jsxs)(r.Z,{variant:"body2",color:"textSecondary",component:"p",children:[(0,L.htmlToText)(i.slice(0,200),{limits:{maxInputLength:200}}),"... "]})]}),(0,t.jsx)(N.Z,{className:l.cardAction,children:(0,t.jsx)(b.Z,{container:!0,justify:"flex-end",children:(0,t.jsx)(b.Z,{item:!0,children:(0,t.jsx)(P,{link:o,children:(0,t.jsx)(D.Z,{startIcon:(0,t.jsx)(A.Z,{}),variant:"contained",size:"small",color:"primary",className:l.button,children:"Read"})})})})})]})}function O(n){var e=n.blogsData,i=(0,y.Z)(),r=(0,S.Z)(i.breakpoints.down("md"));return(0,t.jsx)(a.Z,{children:(0,t.jsx)(b.Z,{container:!0,justify:r?"center":"flex-start",spacing:3,children:e.items.map((function(n,e){return(0,t.jsx)(b.Z,{item:!0,children:(0,t.jsx)(E,(0,w.Z)({},n))},"blog-card-".concat(e))}))})})}var R=i(4924),F=i(9895),G=i(385),M=i(6353),q=i(7265),B=i(5757),U=i(3489),X=(0,l.Z)({skillIcon:{height:18,width:18},skillChip:{margin:"4px 3px"}});var H=function(n){var e=n.name,i=n.SkillIcon,a=n.about_link,r=X();return(0,t.jsx)(P,{link:a,children:(0,t.jsx)(T.Z,{variant:"outlined",avatar:i?(0,t.jsx)(i,{className:r.skillIcon,color:U.Z.palette.primary.light}):null,className:r.skillChip,label:e,onClick:function(){return null}})})},J=(0,l.Z)((function(n){return{root:(0,R.Z)({width:400},n.breakpoints.down("xs"),{width:"80vw"}),avatar:{backgroundColor:U.Z.palette.primary.main},chipsContainer:{marginTop:17},listItemPrimaryText:{fontSize:"1.4em"}}}));function K(n){var e=n.name,i=n.icon,a=n.skills,r=J();return(0,t.jsx)(F.Z,{elevation:2,className:r.root,children:(0,t.jsxs)(G.Z,{children:[(0,t.jsx)(M.Z,{children:(0,t.jsx)(q.Z,{className:r.avatar,children:i})}),(0,t.jsx)(B.Z,{primary:e,primaryTypographyProps:{className:r.listItemPrimaryText},secondaryTypographyProps:{component:"div"},secondary:(0,t.jsx)("div",{className:r.chipsContainer,children:a.map((function(n,e){return(0,t.jsx)(H,(0,w.Z)({},n),"skill-chip-".concat(e))}))})})]})})}var W=i(9715),V=i(5789),Y=i(7696),Q=i(2777),$=i(8908),nn=i(8318),en=i(2091),tn=[{name:"Web Development",icon:(0,t.jsx)(Q.RsK,{}),skills:[{name:"React.js",SkillIcon:en.huN,about_link:"https://en.wikipedia.org/wiki/React_(JavaScript_library)"},{name:"Next.js",SkillIcon:W.SiNextDotJs,about_link:"https://en.wikipedia.org/wiki/Next.js"},{name:"Node.js",SkillIcon:en.jPo,about_link:"https://en.wikipedia.org/wiki/Node.js"},{name:"Sails.js",SkillIcon:Y.e_2,about_link:"https://en.wikipedia.org/wiki/Sails.js"},{name:"Django",SkillIcon:W.faG,about_link:"https://en.wikipedia.org/wiki/Django_(web_framework)"}]},{name:"Mobile development",icon:(0,t.jsx)($.f1M,{}),skills:[{SkillIcon:Y.dKL,name:"Flutter",about_link:"https://en.wikipedia.org/wiki/Flutter_(software)"},{SkillIcon:en.huN,name:"React Native",about_link:"https://en.wikipedia.org/wiki/React_Native"}]},{name:"Programming Languages",icon:(0,t.jsx)(nn.tqz,{}),skills:[{name:"Python",SkillIcon:nn.qyr,about_link:"https://en.wikipedia.org/wiki/Python_(programming_language)"},{name:"Javascript",SkillIcon:V.N2N,about_link:"https://en.wikipedia.org/wiki/JavaScript"},{name:"Dart",SkillIcon:W.nB2,about_link:"https://en.wikipedia.org/wiki/Dart_(programming_language)"}]},{name:"Design System",icon:(0,t.jsx)(en.SaA,{}),skills:[{name:"Material Design",SkillIcon:W.XCV,about_link:"https://en.wikipedia.org/wiki/Material_Design"},{name:"Ant Design",SkillIcon:W.gLG,about_link:"https://en.wikipedia.org/wiki/Docker_(software)"}]},{name:"Devops",icon:(0,t.jsx)(en.CP_,{}),skills:[{name:"Docker",SkillIcon:en.X2n,about_link:"https://en.wikipedia.org/wiki/Docker_(software)"},{name:"Ansible",SkillIcon:W.IHu,about_link:"https://en.wikipedia.org/wiki/Docker_(software)"},{name:"Nginx",SkillIcon:W.vUE,about_link:"https://en.wikipedia.org/wiki/Docker_(software)"}]}];function an(){var n=(0,y.Z)(),e=(0,S.Z)(n.breakpoints.down("md"));return(0,t.jsx)(b.Z,{container:!0,justify:e?"center":"flex-start",spacing:3,children:tn.map((function(n,e){return(0,t.jsx)(b.Z,{item:!0,children:(0,t.jsx)(K,(0,w.Z)({},n))},"domain-item-".concat(e))}))})}var rn=i(1351),sn=(0,l.Z)((function(n){var e;return{photo:(e={height:200,width:200,objectFit:"cover"},(0,R.Z)(e,n.breakpoints.down("sm"),{height:180,width:180}),(0,R.Z)(e,"filter","brightness(0.93)"),(0,R.Z)(e,"margin","auto"),(0,R.Z)(e,"borderRadius",30),e)}}));var on=function(n){var e=n.src,i=sn();return(0,t.jsx)(F.Z,{elevation:4,className:i.photo,children:(0,t.jsx)("img",{src:e,className:i.photo,alt:"Suvansh Rana"})})},cn=i(3758),ln=(0,l.Z)({fab:{margin:5}});var dn=function(n){var e=n.icon,i=n.link,a=ln();return(0,t.jsx)(P,{link:i,children:(0,t.jsx)(cn.Z,{color:"primary",size:"medium",className:a.fab,elevation:5,children:e})})},un=i(5952),pn="0.5px 2px 2px #323232, 0 1px 3px #323232",mn=(0,l.Z)((function(n){return{background:{backgroundImage:"url(".concat(un.Z.backgroundImage,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},profileContainer:{padding:"50px 0"},name:(0,R.Z)({padding:"0 10px",textShadow:pn,letterSpacing:"0.5px"},n.breakpoints.down("sm"),{marginTop:20}),about:(0,R.Z)({fontSize:"1.35em",color:"#fcfcfc",padding:"0 10px",marginTop:10,textShadow:pn},n.breakpoints.down("sm"),{fontSize:"1.15em"}),socialContainer:{marginTop:10,padding:"0 10px"},centerOnSmallScreen:(0,R.Z)({},n.breakpoints.down("sm"),{textAlign:"center",justifyContent:"center"})}}));function hn(n){n=null!==n?n:(0,rn.Z)(new TypeError("Cannot destructure undefined"));var e=mn();return(0,t.jsx)(b.Z,{container:!0,alignItems:"center",className:e.background,children:(0,t.jsx)(b.Z,{xs:12,item:!0,className:e.profileContainer,children:(0,t.jsx)(a.Z,{children:(0,t.jsxs)(b.Z,{container:!0,children:[(0,t.jsxs)(b.Z,{item:!0,xs:12,md:8,className:e.centerOnSmallScreen,children:[(0,t.jsx)(s.Z,{mdUp:!0,children:(0,t.jsx)(on,{src:un.Z.avatar})}),(0,t.jsx)(r.Z,{variant:"h2",className:e.name,children:un.Z.name}),(0,t.jsx)(r.Z,{variant:"subtitle1",className:e.about,component:"p",children:un.Z.about}),(0,t.jsx)("div",{className:e.socialContainer,children:un.Z.links.map((function(n,e){return(0,t.jsx)(dn,(0,w.Z)({},n),"social-link-button-".concat(e))}))})]}),(0,t.jsx)(b.Z,{item:!0,container:!0,justify:"center",xs:12,md:4,className:e.centerOnSmallScreen,children:(0,t.jsx)(s.Z,{smDown:!0,children:(0,t.jsx)(on,{src:un.Z.avatar})})})]})})})})}var gn=(0,l.Z)({root:{maxWidth:345,marginTop:20},media:{objectFit:"contain",height:210,backgroundColor:"#2b2b2b",filter:"brightness(0.8)"},button:{padding:"8px 16px",letterSpacing:.45},cardAction:{padding:"10px 15px"},tagChip:{margin:"4px 3px",lineHeight:1.9}});function xn(n){var e=n.name,i=n.description,a=n.coverImage,s=n.tags,o=n.projectLink,c=n.githubLink,l=gn();return(0,t.jsxs)(_.Z,{className:l.root,children:[(0,t.jsx)(C.Z,{component:"img",height:"140",image:a,className:l.media,alt:e,title:e}),(0,t.jsxs)(I.Z,{children:[(0,t.jsx)(r.Z,{gutterBottom:!0,variant:"h5",component:"h2",children:e}),(0,t.jsx)(Z,{}),(0,t.jsx)("div",{children:s.map((function(n,e){return(0,t.jsx)(T.Z,{className:l.tagChip,size:"small",label:n,variant:"outlined",component:"span"},"tag-chip-".concat(e))}))}),(0,t.jsx)(Z,{}),(0,t.jsx)(r.Z,{variant:"body2",color:"textSecondary",component:"p",children:i})]}),(0,t.jsx)(N.Z,{className:l.cardAction,children:(0,t.jsxs)(b.Z,{container:!0,justify:"flex-end",spacing:2,children:[(0,t.jsx)(b.Z,{item:!0,children:(0,t.jsx)(P,{link:c,children:(0,t.jsx)(D.Z,{variant:o?"outlined":"contained",className:l.button,size:"small",color:"primary",children:"Github"})})}),o&&(0,t.jsx)(b.Z,{item:!0,children:(0,t.jsx)(P,{link:o,children:(0,t.jsx)(D.Z,{size:"small",color:"primary",variant:"contained",className:l.button,startIcon:(0,t.jsx)(A.Z,{}),children:"Project"})})})]})})]})}var jn=[{name:"Py Manager",description:"A simple GUI based package manager for python",coverImage:"https://raw.githubusercontent.com/suvnshr/py-manager/main/assets/icon.png",projectLink:"https://github.com/suvnshr/py-manager/releases/tag/v0.1.0-alpha.1",githubLink:"https://github.com/suvnshr/py-manager",tags:["package-manager","electron-js","desktop"]},{name:"DevXplore",description:"A search engine for developers for finding Github repos, youtube tutorials, online courses, and documentation faster.",coverImage:"https://raw.githubusercontent.com/suvnshr/developer-search/dev/static/short-logo.png",projectLink:"https://devxplore-v2.onrender.com",githubLink:"https://github.com/suvnshr/developer-search",tags:["search-engine","django","materialize-css"]},{name:"C1O2",description:"A futuristic app which calculates your carbon footprint due to Travel, Food and Household activities. Gives you tips to reduce your carbon footprints.",coverImage:"https://raw.githubusercontent.com/suvnshr/C1O2/master/assets/images/C1O2_icon.png",tags:["carbon-footprint-calculator","flutter","mobile"],projectLink:"https://github.com/suvnshr/C1O2/releases/latest",githubLink:"https://github.com/suvnshr/C1O2"},{name:"Pucho Kisan",description:"A forum for farmers where then can ask questions about the problems they face in farming",coverImage:"https://raw.githubusercontent.com/aayushbisen/pucho-kisan/master/forum/static/forum/images/icons/icon-144x144.png",tags:["forum","django","materialize-css"],githubLink:"https://github.com/aayushbisen/pucho-kisan"}];var kn=function(){var n=(0,y.Z)(),e=(0,S.Z)(n.breakpoints.down("md"));return(0,t.jsx)(a.Z,{children:(0,t.jsx)(b.Z,{container:!0,justify:e?"center":"flex-start",spacing:3,children:jn.map((function(n,e){return(0,t.jsx)(b.Z,{item:!0,children:(0,t.jsx)(xn,(0,w.Z)({},n))},"project-card-".concat(e))}))})})},bn=i(9008),vn=i.n(bn);var fn=!0,Zn=function(n){var e=n.blogsData;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(vn(),{}),(0,t.jsxs)("div",{className:"App",children:[(0,t.jsx)("div",{id:"about",children:(0,t.jsx)(hn,{})}),(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(Z,{count:2}),(0,t.jsxs)("div",{id:"skills",children:[(0,t.jsx)(r.Z,{variant:"h4",children:"Skills"}),(0,t.jsx)(Z,{}),(0,t.jsx)(an,{})]}),(0,t.jsx)(Z,{count:2}),(0,t.jsxs)("div",{id:"projects",children:[(0,t.jsx)(r.Z,{variant:"h4",children:"Projects"}),(0,t.jsx)(Z,{}),(0,t.jsx)(kn,{})]}),(0,t.jsx)(Z,{count:2}),(0,t.jsxs)("div",{id:"blogs",children:[(0,t.jsx)(r.Z,{variant:"h4",children:"Blogs"}),(0,t.jsx)(Z,{}),(0,t.jsx)(O,{blogsData:e})]}),(0,t.jsx)(Z,{count:2})]}),(0,t.jsx)(f,{}),(0,t.jsxs)(s.Z,{mdUp:!0,children:[(0,t.jsx)(Z,{count:4}),(0,t.jsx)(k,{})]})]})]})}}},function(n){n.O(0,[151,317,660,510,406,145,774,888,179],(function(){return e=5557,n(n.s=e);var e}));var e=n.O();_N_E=e}]);