import{d as y,o,c as _,w as n,r as l,q as w,I as x,j as p,e as d,k as $,t as g,u as r,h as i,s as N,x as u,g as C,H as B,G as f,J as S}from"./index-sl4-wS9w.js";const h=y({__name:"TypographyBase",props:{tag:{default:"div"},weight:{},size:{},color:{}},setup(e){const t=e;return(s,c)=>(o(),_(x(t.tag),{class:w(["typography",{"typography--black":t.weight==="black","typography--semibold":t.weight==="semibold","typography--h1":t.size==="h1","typography--h2":t.size==="h2","typography--p":t.size==="p","typography--small":t.size==="small","typography--accent":t.color==="accent","typography--text-primary":t.color==="text-primary","typography--text-secondary":t.color==="text-secondary","typography--non-color":t.color==="non-color","typography--success":t.color==="success"}])},{default:n(()=>[l(s.$slots,"default")]),_:3},8,["class"]))}}),F={class:"button-link__prefix"},P=y({__name:"ButtonLink",props:{tag:{default:"a"},text:{}},setup(e){const t=e;return(s,c)=>(o(),_(x(t.tag),{class:"button-link"},{default:n(()=>[p("span",F,[l(s.$slots,"prefix")]),d(r(h),{tag:"span",color:"accent",size:"p",weight:"black",class:"button-link__text"},{default:n(()=>[$(g(t.text),1)]),_:1})]),_:3}))}}),T={width:"34",height:"40",viewBox:"0 0 34 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function H(e,t){return o(),i("svg",T,t[0]||(t[0]=[p("path",{d:"M0 28.9333L4.6 36.2667L7.46667 40H18.1333L26.9333 33.3333L28.2667 25.0667L23.5333 11.8667L13.7333 0L2.06667 15.7333L0 28.9333Z",fill:"#1F8EFF"},null,-1),p("path",{d:"M7.17287 32.9066L7.17302 22.0798L17.3311 35.9451L7.17287 32.9066Z",fill:"white"},null,-1)]))}const M={render:H},V={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function A(e,t){return o(),i("svg",V,t[0]||(t[0]=[p("path",{d:"M5.64062 13.0327C2.94287 10.3516 0.90918 7.14746 0.90918 4.54102C0.90918 3.38721 1.30762 2.35791 2.2207 1.53613C2.73535 1.05469 3.30811 0.822266 3.92236 0.822266C4.47852 0.822266 5.02637 1.03809 5.4082 1.56934L7.24268 4.15088C7.56641 4.60742 7.70752 4.97266 7.70752 5.29639C7.70752 5.72803 7.4668 6.09326 7.06006 6.5083L6.4126 7.14746C6.32129 7.23877 6.27979 7.37158 6.27979 7.48779C6.27979 7.62061 6.32959 7.77002 6.396 7.86133C6.71973 8.41748 7.5498 9.38037 8.42139 10.252C9.29297 11.1235 10.2559 11.9536 10.812 12.2773C10.9033 12.3438 11.0527 12.3936 11.1938 12.3936C11.3018 12.3936 11.4346 12.3521 11.5259 12.2607L12.165 11.6133C12.5801 11.2065 12.9453 10.9658 13.377 10.9658C13.7007 10.9658 14.0659 11.0986 14.5225 11.4307L17.104 13.2651C17.6353 13.6553 17.8594 14.1948 17.8594 14.751C17.8594 15.3486 17.6187 15.9214 17.1372 16.4526C16.3237 17.3657 15.2944 17.7642 14.1323 17.7642C11.5259 17.7642 8.32178 15.7305 5.64062 13.0327Z",fill:"#1F8EFF"},null,-1)]))}const D={render:A},E=N("price",()=>{const e=u(30),t=u("CFA"),s=u("F"),c=u("Liters"),m=u("L"),v=u(33234),b=u([]),k=[1.5,5,10,20],L=a=>(a.includes(",")&&a.replace(",","."),(Number(a)*e.value).toString()),z=a=>(a.includes(",")&&a.replace(",","."),(Number(a)/e.value).toString());return(()=>{for(const a of k)b.value.push({price:L(a.toString()),unitValue:a.toString()})})(),{costPerUnit:e,unitName:c,currencyName:t,currencyNameCut:s,unitNameCut:m,ATMNumber:v,priceList:b,getUnitValuePerCost:z,getCostPerUnitValue:L}}),U=(e,t)=>{const s=e.__vccOpts||e;for(const[c,m]of t)s[c]=m;return s},I={class:"header"},Z={class:"header__left"},j={class:"header__price"},q={class:"header__right"},G=y({__name:"TheHeader",setup(e){const t=E(),s=C(()=>t.costPerUnit),c=C(()=>t.unitNameCut),m=C(()=>t.ATMNumber);return(v,b)=>(o(),i("header",I,[p("div",Z,[d(r(M)),p("div",j,[d(r(h),{tag:"div",size:"p",color:"text-primary",weight:"semibold"},{default:n(()=>[$("ATM "+g(m.value),1)]),_:1}),d(r(h),{tag:"div",size:"small",color:"text-primary",weight:"regular"},{default:n(()=>[$("1 "+g(c.value)+" = "+g(s.value)+" F",1)]),_:1})])]),p("div",q,[d(r(P),{tag:"a",href:`tel:${r(B)}`,text:"Help"},{prefix:n(()=>[d(r(D))]),_:1},8,["href"])])]))}}),J={class:"layout-primary"},O={key:1},K={class:"layout-primary__body"},ot=y({__name:"LayoutPrimary",props:{displayHeader:{type:Boolean,default:!0}},setup(e){const t=e;return(s,c)=>(o(),i("div",J,[t.displayHeader?(o(),_(r(G),{key:0})):(o(),i("div",O)),p("div",K,[l(s.$slots,"default")])]))}}),Q={class:"header-section"},R={key:2,class:"header-section__slot"},rt=y({__name:"HeaderSection",setup(e){return(t,s)=>(o(),i("div",Q,[t.$slots.title?(o(),_(r(h),{key:0,tag:"h1",size:"h1",color:"text-primary",weight:"black",class:"header-section__title"},{default:n(()=>[l(t.$slots,"title")]),_:3})):f("",!0),t.$slots.description?(o(),_(r(h),{key:1,tag:"p",size:"p",color:"text-primary",weight:"regular",class:"header-section__description"},{default:n(()=>[l(t.$slots,"description")]),_:3})):f("",!0),t.$slots.slot?(o(),i("div",R,[l(t.$slots,"slot")])):f("",!0)]))}}),W={key:0,class:"button__prefix"},at=y({__name:"ButtonBase",props:{tag:{default:"button"},type:{default:"primary"},text:{},size:{default:"normal"},isDisabled:{type:Boolean,default:!1}},setup(e){const t=e;return(s,c)=>(o(),_(x(t.tag),{class:w(["button",{"button--small":t.size==="small","button--primary":t.type==="primary","button--secondary":t.type==="secondary","button--disabled":t.isDisabled}]),style:S(s.$slots.prefix?"padding-right: 24px":"")},{default:n(()=>[s.$slots.prefix?(o(),i("span",W,[l(s.$slots,"prefix")])):f("",!0),d(r(h),{tag:"span",size:"p",weight:"black",color:t.type==="primary"?"non-color":"accent",class:"button__text"},{default:n(()=>[$(g(t.text),1)]),_:1},8,["color"])]),_:3},8,["class","style"]))}}),X={},Y={class:"footer-section"};function tt(e,t){return o(),i("div",Y,[l(e.$slots,"default")])}const nt=U(X,[["render",tt]]);export{nt as F,D as T,ot as _,h as a,U as b,rt as c,P as d,at as e,E as u};
