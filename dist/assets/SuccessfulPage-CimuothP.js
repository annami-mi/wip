import{a as y,c as h,e as k,F as S,u as A,_ as C}from"./FooterSection-D3jKJMZI.js";import{d as p,o as _,h as P,e as c,w as r,k as i,u as a,j as d,z as b,g as v,c as x,a as $,b as w}from"./index-CqdEBXbW.js";import{S as N}from"./repository-745OnJWg.js";const B="/wip/assets/image-2-DGCDjEhA.png",D=p({__name:"SuccessfulScreen",props:{handlerAction:{}},setup(u){const n=u;return(l,e)=>(_(),P("div",null,[c(a(h),null,{title:r(()=>[e[1]||(e[1]=i("Press ")),c(a(y),{tag:"span",size:"h1",color:"success",weight:"black"},{default:r(()=>e[0]||(e[0]=[i("Green")])),_:1}),e[2]||(e[2]=i(" button on Kaynann ATM to start the filling"))]),_:1}),e[3]||(e[3]=d("div",{class:"successful-screen__body"},[d("img",{src:B,alt:"successful",class:"successful-page__screen__image"})],-1)),c(a(S),null,{default:r(()=>[c(a(k),{onClick:n.handlerAction,text:"Add more funds",type:"secondary"},null,8,["onClick"])]),_:1})]))}}),V=p({__name:"SuccessfulPage",setup(u){const n=$(),l=w(),e=()=>{const s=n.query.id;l.push({path:`/start/${s}`})};b(()=>{m()});const m=async()=>{const s=n.params.id;try{const{data:t}=await N.checkDevice({deviceId:s});t.success&&f(t.data)}catch(t){console.log(t)}},o=A(),f=s=>{o.costPerUnit=s.price,o.currencyName=s.currencyCode.toUpperCase(),o.ATMNumber=s.number},g=v(()=>o.costPerUnit);return(s,t)=>(_(),x(a(C),{"display-header":!!g.value},{default:r(()=>[c(D,{"handler-action":e})]),_:1},8,["display-header"]))}});export{V as default};
