import{S as d,u as p,_ as m}from"./repository-efqZi-aj.js";import{_ as l}from"./UnsuccessfulScreen.vue_vue_type_style_index_0_lang-D06HLUT3.js";import{d as y,o as f,r as _,c as h,u as c,a as P,w as v,b as k,e as w,f as C}from"./index-Cd6XkGiF.js";const H=y({__name:"UnsuccessfulPage",setup(S){const t=P(),o=k(),n=()=>{const e=t.query.id;o.push({path:`/start/${e}`})};f(async()=>{await i()});const i=async()=>{const e=t.query.did;try{const{data:s}=await d.checkDevice({deviceId:e});s.success&&(u(s.data),r.displayHeader=!0)}catch(s){console.log(s)}},r=_({displayHeader:!1}),a=p(),u=e=>{a.costPerUnit=e.price,a.currencyName=e.currencyCode.toUpperCase(),a.ATMNumber=e.number};return(e,s)=>(w(),h(c(m),{"display-header":r.displayHeader},{default:v(()=>[C(c(l),{title:"Payment unsuccessful",description:"Try to pay another amount or use another payment provider.","handler-action":n})]),_:1},8,["display-header"]))}});export{H as default};
