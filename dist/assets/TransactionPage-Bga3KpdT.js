import{d as C,m as le,f as ce,g as M,o as u,h as y,i as pe,v as ue,u as a,j as h,e as l,w as p,k as f,t as v,r as X,l as P,n as Q,F as A,c as w,p as de,q as me,s as he,x as _e,C as fe,P as ge,y as U,z as ee,a as te,A as ye,H as ke,B as ve,D as Ce,E as xe,G as we,T as be}from"./index-sl4-wS9w.js";import{a as x,b as W,u as N,c as R,d as D,e as E,F,T as Le,_ as Me}from"./FooterSection-CRvcidwW.js";import{_ as $e}from"./UnsuccessfulScreen.vue_vue_type_style_index_0_lang-CR10Ft6-.js";/*! maska v2.1.11 | (c) Alexander Shabunevich | Released under the MIT license */var Ee=Object.defineProperty,Se=(s,e,t)=>e in s?Ee(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,V=(s,e,t)=>(Se(s,typeof e!="symbol"?e+"":e,t),t);const H={"#":{pattern:/[0-9]/},"@":{pattern:/[a-zA-Z]/},"*":{pattern:/[a-zA-Z0-9]/}};class q{constructor(e={}){V(this,"opts",{}),V(this,"memo",new Map);const t={...e};if(t.tokens!=null){t.tokens=t.tokensReplace?{...t.tokens}:{...H,...t.tokens};for(const n of Object.values(t.tokens))typeof n.pattern=="string"&&(n.pattern=new RegExp(n.pattern))}else t.tokens=H;Array.isArray(t.mask)&&(t.mask.length>1?t.mask=[...t.mask].sort((n,r)=>n.length-r.length):t.mask=t.mask[0]??""),t.mask===""&&(t.mask=null),this.opts=t}masked(e){return this.process(e,this.findMask(e))}unmasked(e){return this.process(e,this.findMask(e),!1)}isEager(){return this.opts.eager===!0}isReversed(){return this.opts.reversed===!0}completed(e){const t=this.findMask(e);if(this.opts.mask==null||t==null)return!1;const n=this.process(e,t).length;return typeof this.opts.mask=="string"?n>=this.opts.mask.length:typeof this.opts.mask=="function"?n>=t.length:this.opts.mask.filter(r=>n>=r.length).length===this.opts.mask.length}findMask(e){const t=this.opts.mask;if(t==null)return null;if(typeof t=="string")return t;if(typeof t=="function")return t(e);const n=this.process(e,t.slice(-1).pop()??"",!1);return t.find(r=>this.process(e,r,!1).length>=n.length)??""}escapeMask(e){const t=[],n=[];return e.split("").forEach((r,i)=>{r==="!"&&e[i-1]!=="!"?n.push(i-n.length):t.push(r)}),{mask:t.join(""),escaped:n}}process(e,t,n=!0){if(t==null)return e;const r=`value=${e},mask=${t},masked=${n?1:0}`;if(this.memo.has(r))return this.memo.get(r);const{mask:i,escaped:d}=this.escapeMask(t),o=[],m=this.opts.tokens!=null?this.opts.tokens:{},c=this.isReversed()?-1:1,g=this.isReversed()?"unshift":"push",_=this.isReversed()?0:i.length-1,$=this.isReversed()?()=>k>-1&&b>-1:()=>k<i.length&&b<e.length,oe=S=>!this.isReversed()&&S<=_||this.isReversed()&&S>=_;let Z,T=-1,k=this.isReversed()?i.length-1:0,b=this.isReversed()?e.length-1:0,z=!1;for(;$();){const S=i.charAt(k),L=m[S],O=(L==null?void 0:L.transform)!=null?L.transform(e.charAt(b)):e.charAt(b);if(!d.includes(k)&&L!=null?(O.match(L.pattern)!=null?(o[g](O),L.repeated?(T===-1?T=k:k===_&&k!==T&&(k=T-c),_===T&&(k-=c)):L.multiple&&(z=!0,k-=c),k+=c):L.multiple?z&&(k+=c,b-=c,z=!1):O===Z?Z=void 0:L.optional&&(k+=c,b-=c),b+=c):(n&&!this.isEager()&&o[g](S),O===S&&!this.isEager()?b+=c:Z=S,this.isEager()||(k+=c)),this.isEager())for(;oe(k)&&(m[i.charAt(k)]==null||d.includes(k));)n?o[g](i.charAt(k)):i.charAt(k)===e.charAt(b)&&(b+=c),k+=c}return this.memo.set(r,o.join("")),this.memo.get(r)}}const ne=s=>JSON.parse(s.replaceAll("'",'"')),J=(s,e={})=>{const t={...e};return s.dataset.maska!=null&&s.dataset.maska!==""&&(t.mask=Pe(s.dataset.maska)),s.dataset.maskaEager!=null&&(t.eager=B(s.dataset.maskaEager)),s.dataset.maskaReversed!=null&&(t.reversed=B(s.dataset.maskaReversed)),s.dataset.maskaTokensReplace!=null&&(t.tokensReplace=B(s.dataset.maskaTokensReplace)),s.dataset.maskaTokens!=null&&(t.tokens=Te(s.dataset.maskaTokens)),t},B=s=>s!==""?!!JSON.parse(s):!0,Pe=s=>s.startsWith("[")&&s.endsWith("]")?ne(s):s,Te=s=>{if(s.startsWith("{")&&s.endsWith("}"))return ne(s);const e={};return s.split("|").forEach(t=>{const n=t.split(":");e[n[0]]={pattern:new RegExp(n[1]),optional:n[2]==="optional",multiple:n[2]==="multiple",repeated:n[2]==="repeated"}}),e};class Ve{constructor(e,t={}){V(this,"items",new Map),V(this,"beforeinputEvent",n=>{const r=n.target,i=this.items.get(r);i.isEager()&&"inputType"in n&&n.inputType.startsWith("delete")&&i.unmasked(r.value).length<=1&&this.setMaskedValue(r,"")}),V(this,"inputEvent",n=>{if(n instanceof CustomEvent&&n.type==="input"&&n.detail!=null&&typeof n.detail=="object"&&"masked"in n.detail)return;const r=n.target,i=this.items.get(r),d=r.value,o=r.selectionStart,m=r.selectionEnd;let c=d;if(i.isEager()){const g=i.masked(d),_=i.unmasked(d);_===""&&"data"in n&&n.data!=null?c=n.data:_!==i.unmasked(g)&&(c=_)}if(this.setMaskedValue(r,c),"inputType"in n&&(n.inputType.startsWith("delete")||o!=null&&o<d.length))try{r.setSelectionRange(o,m)}catch{}}),this.options=t,typeof e=="string"?this.init(Array.from(document.querySelectorAll(e)),this.getMaskOpts(t)):this.init("length"in e?Array.from(e):[e],this.getMaskOpts(t))}destroy(){for(const e of this.items.keys())e.removeEventListener("input",this.inputEvent),e.removeEventListener("beforeinput",this.beforeinputEvent);this.items.clear()}needUpdateOptions(e,t){const n=this.items.get(e),r=new q(J(e,this.getMaskOpts(t)));return JSON.stringify(n.opts)!==JSON.stringify(r.opts)}needUpdateValue(e){const t=e.dataset.maskaValue;return t==null&&e.value!==""||t!=null&&t!==e.value}getMaskOpts(e){const{onMaska:t,preProcess:n,postProcess:r,...i}=e;return i}init(e,t){for(const n of e){const r=new q(J(n,t));this.items.set(n,r),n.value!==""&&this.setMaskedValue(n,n.value),n.addEventListener("input",this.inputEvent),n.addEventListener("beforeinput",this.beforeinputEvent)}}setMaskedValue(e,t){const n=this.items.get(e);this.options.preProcess!=null&&(t=this.options.preProcess(t));const r=n.masked(t),i=n.unmasked(n.isEager()?r:t),d=n.completed(t),o={masked:r,unmasked:i,completed:d};t=r,this.options.postProcess!=null&&(t=this.options.postProcess(t)),e.value=t,e.dataset.maskaValue=t,this.options.onMaska!=null&&(Array.isArray(this.options.onMaska)?this.options.onMaska.forEach(m=>m(o)):this.options.onMaska(o)),e.dispatchEvent(new CustomEvent("maska",{detail:o})),e.dispatchEvent(new CustomEvent("input",{detail:o}))}}const I=new WeakMap,Ne=s=>{setTimeout(()=>{var e;((e=I.get(s))==null?void 0:e.needUpdateValue(s))===!0&&s.dispatchEvent(new CustomEvent("input"))})},Re=(s,e)=>{const t=s instanceof HTMLInputElement?s:s.querySelector("input"),n={...e.arg};if(t==null||(t==null?void 0:t.type)==="file")return;Ne(t);const r=I.get(t);if(r!=null){if(!r.needUpdateOptions(t,n))return;r.destroy()}if(e.value!=null){const i=e.value,d=o=>{i.masked=o.masked,i.unmasked=o.unmasked,i.completed=o.completed};n.onMaska=n.onMaska==null?d:Array.isArray(n.onMaska)?[...n.onMaska,d]:[n.onMaska,d]}I.set(t,new Ve(t,n))},Fe={class:"price-option-input"},Oe=["readonly","maxlength","inputmode"],G=C({__name:"PriceOptionInput",props:le({label:{},mask:{},inputmode:{},maxlength:{},isReadonly:{type:Boolean}},{modelValue:{default:""},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const e=s,t=ce(s,"modelValue"),n=M(()=>e.mask);return(r,i)=>(u(),y("div",Fe,[pe(h("input",{readonly:e.isReadonly,ref:"inputEl",type:"text","onUpdate:modelValue":i[0]||(i[0]=d=>t.value=d),class:"price-option-input__input",maxlength:e.maxlength,inputmode:e.inputmode},null,8,Oe),[[ue,t.value],[a(Re),void 0,n.value]]),l(a(x),{size:"small",color:"text-secondary",tag:"span",weight:"regular",class:"price-option-input__label"},{default:p(()=>[f(v(e.label),1)]),_:1})]))}}),Ae={},Ze={class:"tab"};function ze(s,e){return u(),y("div",Ze,[X(s.$slots,"default")])}const Be=W(Ae,[["render",ze]]),Ue={class:"price-form__tab-content"},Ie=C({__name:"PriceOptionTab",setup(s){const e=N(),t=M(()=>e.currencyNameCut),n=M(()=>e.unitNameCut),r=M(()=>e.priceList),i=P("transaction"),d=o=>{i.price=o.price,i.unitValue=o.unitValue};return(o,m)=>(u(!0),y(A,null,Q(r.value,c=>(u(),w(a(Be),{onClick:g=>d(c),key:c.unitValue},{default:p(()=>[h("div",Ue,[l(a(x),{tag:"span",size:"h2",color:"text-primary",weight:"black"},{default:p(()=>[f(v(c.price),1),l(a(x),{style:{"padding-left":"2px"},size:"p",color:"text-primary",weight:"black",tag:"span"},{default:p(()=>[f(v(t.value),1)]),_:1})]),_:2},1024),l(a(x),{tag:"span",size:"p",color:"text-primary",weight:"semibold"},{default:p(()=>[f(v(c.unitValue)+" "+v(n.value),1)]),_:2},1024)])]),_:2},1032,["onClick"]))),128))}}),je={},We={class:"loader-line"};function De(s,e){return u(),y("div",We)}const He=W(je,[["render",De]]),qe={class:"loader-screen"},Je=C({__name:"LoaderScreen",setup(s){return(e,t)=>(u(),y("div",qe,[h("div",null,[l(a(He),{class:"loader-screen__line"}),l(a(x),{size:"h2",weight:"black",tag:"div",class:"loader-screen__title",color:"text-primary"},{default:p(()=>t[0]||(t[0]=[f("Connecting to ATM")])),_:1})])]))}}),Ge={width:"34",height:"30",viewBox:"0 0 34 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function Ye(s,e){return u(),y("svg",Ge,e[0]||(e[0]=[h("path",{d:"M5.34473 29.9658C2.57471 29.9658 0.758301 27.877 0.758301 25.3794C0.758301 24.6074 0.955078 23.8203 1.37891 23.0786L13.0342 2.70459C13.9121 1.19092 15.4409 0.403809 17 0.403809C18.5439 0.403809 20.0576 1.17578 20.9507 2.70459L32.606 23.0635C33.0298 23.8052 33.2266 24.6074 33.2266 25.3794C33.2266 27.877 31.4102 29.9658 28.6401 29.9658H5.34473ZM17.0151 19.1431C18.0596 19.1431 18.665 18.5527 18.7256 17.4629L18.9678 10.939C19.0283 9.80371 18.1958 9.0166 17 9.0166C15.7891 9.0166 14.9717 9.78857 15.0322 10.939L15.2744 17.478C15.3198 18.5527 15.9404 19.1431 17.0151 19.1431ZM17.0151 24.6074C18.2109 24.6074 19.1494 23.8506 19.1494 22.6851C19.1494 21.5498 18.2261 20.7778 17.0151 20.7778C15.8042 20.7778 14.8657 21.5498 14.8657 22.6851C14.8657 23.8506 15.8042 24.6074 17.0151 24.6074Z",fill:"black"},null,-1)]))}const Ke={render:Ye},Xe={class:"warning"},Qe=C({__name:"WarningBase",setup(s){return(e,t)=>(u(),y("div",Xe,[l(a(Ke),{class:"warning__icon"}),h("div",null,[X(e.$slots,"default")])]))}}),et={class:"order-payment"},tt=["src","alt"],nt=C({__name:"TransactionPayment",setup(s){const e=P("transaction");return(t,n)=>(u(),y("div",et,[h("img",{src:a(e).payment.image,alt:a(e).payment.name,class:"order-payment__image"},null,8,tt),l(a(x),{size:"h2",color:"text-primary",weight:"black"},{default:p(()=>[f(v(a(e).payment.name),1)]),_:1})]))}}),st={width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function at(s,e){return u(),y("svg",st,e[0]||(e[0]=[h("path",{d:"M0.268311 15.7933L2.7366 19.7282L4.27481 21.7315H9.99839L14.7203 18.1542L15.4358 13.7185L12.896 6.63555L7.63742 0.268066L1.37725 8.71034L0.268311 15.7933Z",fill:"#1F8EFF"},null,-1),h("path",{d:"M4.11715 17.9252L4.11723 12.1157L9.5679 19.5556L4.11715 17.9252Z",fill:"white"},null,-1)]))}const se={render:at},rt={width:"21",height:"23",viewBox:"0 0 21 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function it(s,e){return u(),y("svg",rt,e[0]||(e[0]=[de('<path d="M17.4706 8.98028L7.54902 22.5685L0 17.1764L8.62745 1.21558L17.4706 8.98028Z" fill="#1F8EFF"></path><path d="M12.7255 22.7844L1.50977 16.9609L11.4313 0.784424L20.9215 8.76482L12.7255 22.7844Z" fill="#AED6FF"></path><path d="M12.9412 12L10.5686 22.1372L4.52942 19.1176L8.62746 16.5294L9.27452 8.33329L14.8824 2.50977L20.2745 7.47055L12.9412 12Z" fill="#E4F1FF"></path><path d="M4.77331 16.8507C4.70681 16.9659 4.58795 17.0001 4.47277 16.9336L3.66022 16.4644L3.65604 16.4717L3.67206 16.666C3.67588 16.7117 3.67109 16.7367 3.65015 16.773C3.60878 16.8447 3.52334 16.8691 3.44716 16.8251C3.39366 16.7942 3.3627 16.7473 3.35756 16.6766L3.33603 16.3474C3.32923 16.2419 3.36019 16.1715 3.40313 16.0972C3.48324 15.9584 3.61379 15.925 3.74528 16.0009L4.69477 16.5491C4.80994 16.6156 4.8398 16.7356 4.77331 16.8507ZM5.37751 15.8357C5.17017 16.1948 4.7781 16.2707 4.34552 16.021C3.91023 15.7696 3.78968 15.3941 3.99545 15.0377C4.20121 14.6813 4.58526 14.5983 5.02056 14.8497C5.45223 15.0989 5.58484 15.4765 5.37751 15.8357ZM5.08187 15.665C5.14993 15.5471 5.06915 15.4001 4.79528 15.242C4.5205 15.0833 4.35915 15.0905 4.29108 15.2084C4.22302 15.3263 4.29693 15.4705 4.57171 15.6292C4.84558 15.7873 5.0138 15.7829 5.08187 15.665ZM6.13356 14.5261C5.92622 14.8853 5.53415 14.9612 5.10157 14.7114C4.66628 14.4601 4.54573 14.0846 4.75149 13.7282C4.95726 13.3718 5.34131 13.2888 5.7766 13.5402C6.20827 13.7894 6.34089 14.167 6.13356 14.5261ZM5.83792 14.3555C5.90598 14.2376 5.8252 14.0906 5.55133 13.9324C5.27655 13.7738 5.1152 13.781 5.04713 13.8989C4.97907 14.0168 5.05298 14.161 5.32776 14.3197C5.60163 14.4778 5.76985 14.4733 5.83792 14.3555ZM6.8896 13.2166C6.68227 13.5757 6.29019 13.6517 5.85762 13.4019C5.42232 13.1506 5.30177 12.7751 5.50754 12.4187C5.71331 12.0623 6.09736 11.9793 6.53265 12.2306C6.96432 12.4799 7.09694 12.8575 6.8896 13.2166ZM6.59396 13.0459C6.66203 12.9281 6.58125 12.7811 6.30737 12.6229C6.03259 12.4643 5.87124 12.4715 5.80318 12.5894C5.73511 12.7073 5.80903 12.8515 6.08381 13.0102C6.35768 13.1683 6.5259 13.1638 6.59396 13.0459Z" fill="#870F0F"></path><path d="M17.0538 12.1592C16.9779 12.243 16.8729 12.25 16.7892 12.1741L16.1982 11.6383L16.1935 11.6436L16.1719 11.8079C16.1668 11.8466 16.1584 11.8665 16.1345 11.8929C16.0872 11.945 16.0118 11.95 15.9564 11.8998C15.9175 11.8645 15.9002 11.8199 15.9086 11.7603L15.9499 11.4829C15.9632 11.394 16.0015 11.341 16.0506 11.287C16.142 11.186 16.2565 11.1817 16.3522 11.2684L17.0427 11.8944C17.1265 11.9704 17.1297 12.0755 17.0538 12.1592ZM17.7382 11.4242C17.5014 11.6854 17.1619 11.6781 16.8473 11.3929C16.5308 11.1059 16.498 10.7722 16.733 10.513C16.968 10.2538 17.302 10.2538 17.6186 10.5408C17.9326 10.8254 17.9749 11.1631 17.7382 11.4242ZM17.5232 11.2293C17.6009 11.1436 17.5602 11.0069 17.361 10.8263C17.1611 10.6452 17.0258 10.6222 16.948 10.7079C16.8703 10.7936 16.9058 10.9268 17.1057 11.108C17.3048 11.2885 17.4454 11.3151 17.5232 11.2293ZM18.6016 10.4719C18.3648 10.733 18.0254 10.7257 17.7108 10.4405C17.3942 10.1535 17.3615 9.8198 17.5964 9.5606C17.8314 9.3014 18.1655 9.30143 18.482 9.58844C18.796 9.87306 18.8384 10.2107 18.6016 10.4719ZM18.3866 10.2769C18.4643 10.1912 18.4236 10.0545 18.2244 9.87396C18.0246 9.69278 17.8892 9.66979 17.8115 9.75553C17.7337 9.84127 17.7692 9.97441 17.9691 10.1556C18.1683 10.3362 18.3088 10.3627 18.3866 10.2769ZM19.465 9.51949C19.2282 9.78066 18.8888 9.77334 18.5742 9.48813C18.2576 9.20112 18.2249 8.86743 18.4599 8.60823C18.6949 8.34903 19.0289 8.34905 19.3455 8.63606C19.6594 8.92068 19.7018 9.25831 19.465 9.51949ZM19.25 9.32456C19.3277 9.23882 19.287 9.10216 19.0878 8.92158C18.888 8.74041 18.7526 8.71742 18.6749 8.80316C18.5971 8.8889 18.6327 9.02203 18.8325 9.20321C19.0317 9.38378 19.1723 9.4103 19.25 9.32456Z" fill="#870F0F"></path>',5)]))}const ae={render:it},ot=C({__name:"TransactionOptions",setup(s){const e=N(),t=M(()=>e.unitNameCut),n=P("transaction");return(r,i)=>(u(),w(a(x),{size:"h2",color:"text-primary",weight:"black",class:"order-price-options"},{default:p(()=>[l(a(ae),{style:{"margin-right":"12px"}}),f(" "+v(a(n).price)+" F",1),i[0]||(i[0]=h("span",{style:{display:"inline-block",margin:"0 16px 0 9px"}},"for",-1)),l(a(se),{style:{"margin-right":"8px"}}),f(v(a(n).unitValue)+v(t.value),1)]),_:1}))}}),lt={class:"order-screen"},ct={class:"order-screen__body"},pt={class:"order-screen__body__section"},ut={class:"order-screen__subtitle"},dt={class:"order-screen__body__section"},mt={class:"order-screen__subtitle"},ht=C({__name:"TransactionConfirm",props:{handlerNext:{type:Function},handlerPrev:{type:Function},handlerChangePayment:{type:Function},handlerChangePriceOption:{type:Function}},setup(s){const e=s,t=()=>{e.handlerNext()},n=()=>{e.handlerPrev()};return(r,i)=>(u(),y("div",lt,[l(a(R),null,{title:p(()=>i[0]||(i[0]=[f("Confirmation")])),slot:p(()=>[l(a(Qe),null,{default:p(()=>[l(a(x),{size:"p",color:"text-primary",weight:"semibold"},{default:p(()=>i[1]||(i[1]=[f(" As soon as you pay the fund will be sent to the device. Make sure you’re there and no one is using the device. ")])),_:1})]),_:1})]),_:1}),h("div",ct,[h("div",pt,[h("div",ut,[l(a(x),{size:"p",color:"text-primary",weight:"semibold"},{default:p(()=>i[2]||(i[2]=[f("You pay")])),_:1}),l(a(D),{onClick:e.handlerChangePriceOption,text:"Change"},null,8,["onClick"])]),l(a(ot))]),h("div",dt,[h("div",mt,[l(a(x),{size:"p",color:"text-primary",weight:"semibold"},{default:p(()=>i[3]||(i[3]=[f("Payment method")])),_:1}),l(a(D),{onClick:e.handlerChangePayment,text:"Change"},null,8,["onClick"])]),l(a(nt))])]),l(a(F),null,{default:p(()=>[l(a(E),{onClick:n,text:"Back",type:"secondary"}),l(a(E),{onClick:t,text:"Pay",type:"primary"})]),_:1})]))}}),_t=W(ht,[["__scopeId","data-v-64fa8e57"]]),ft=["src","alt"],gt=C({__name:"PaymentCard",props:{payment:{},isSelected:{type:Boolean}},setup(s){const e=s;return(t,n)=>(u(),y("div",{class:me(["payment-card",{"payment-card--selected":e.isSelected}])},[h("img",{src:t.payment.image,alt:t.payment.name,class:"payment-card__image"},null,8,ft),l(a(x),{size:"p",color:"text-primary",weight:"semibold",class:"payment-card__title"},{default:p(()=>[f(v(e.payment.name),1)]),_:1})],2))}}),re=he("payment",()=>({paymentList:_e([{id:"wave",name:"Wave",image:"/wave.png"},{id:"orange",name:"Orange money",image:"/orange-money.png"}])}));class j{constructor(e,t,n){this.message=e,this.status=t,this.data=n}}const yt={500:"Ошибка сервера. Пожалуйста, попробуйте позже или обратитесь в службу заботы",422:"Ошибка обработки данных. Пожалуйста, обратитесь в службу заботы",408:"Время ожидания истекло. Пожалуйста, попробуйте повторить позже"},Y=async({METHOD:s,RESOURCE:e,ERRORS:t,BODY:n,ADAPTER:r})=>{const i=new URL(e),d={method:s,headers:{"Content-type":"application/json; charset=UTF-8",accept:"application/json"}};s==="GET"&&n&&Object.entries(n).forEach(([o,m])=>{m!=null&&i.searchParams.append(o,m)}),s==="POST"&&(d.body=JSON.stringify(n));try{const o=await fetch(i,d);console.log(o);const m=o.status;let c=await o.json();if(m>=200&&m<=300)return r&&(c=r(c)),{status:m,data:c};throw new j(t[o.status]||yt[o.status]||c.detail||"Неизвестная ошибка",m,c)}catch(o){throw o instanceof j?{message:o.message,status:o.status||500,data:o.data}:(console.log(o),{message:"Сервисная ошибка"})}},kt={500:"Server error. Please try again later or contact the support",422:"Data processing error. Please contact the Care Service.",408:"The timeout has expired. Please try again later"},vt=({STATUS:s,ERRORS:e,BODY:t})=>new Promise((n,r)=>{s!==200?r(new j(e[s]||kt[s]||"Unknown bug",s,e)):n({status:s,data:t})}),ie={post(s){return Y({METHOD:"POST",...s})},get(s){return Y({METHOD:"GET",...s})},async test(s){const e=vt(s);try{const t=await e;console.log(t)}catch(t){console.log(t)}return e}},Ct={checkDevice(s){return ie.post({RESOURCE:fe,ERRORS:{},BODY:s})}},xt="/wip/assets/image-3-DIEGj0en.png",wt={class:"not-working-screen"},bt=C({__name:"NotWorkingScreen",props:{handlerAction:{type:Function}},setup(s){const e=s;return(t,n)=>(u(),y("div",wt,[l(a(R),null,{title:p(()=>n[0]||(n[0]=[f("This device is not working now")])),description:p(()=>n[1]||(n[1]=[f("Try later or use another device")])),_:1}),n[2]||(n[2]=h("div",{class:"not-working-screen__body"},[h("img",{src:xt,alt:"not-working",class:"not-working-screen__body__image"})],-1)),l(a(F),null,{default:p(()=>[l(a(E),{onClick:e.handlerAction,text:"Try again",type:"primary"},null,8,["onClick"])]),_:1})]))}}),Lt="/wip/assets/image-1-D1MyXVbb.png",Mt={width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function $t(s,e){return u(),y("svg",Mt,e[0]||(e[0]=[h("path",{d:"M9.5 17.6646C4.75195 17.6646 0.842285 13.7549 0.842285 9.00684C0.842285 4.26709 4.75195 0.349121 9.4917 0.349121C14.2397 0.349121 18.1577 4.26709 18.1577 9.00684C18.1577 13.7549 14.248 17.6646 9.5 17.6646ZM5.41602 10.144H9.4917C9.89844 10.144 10.2139 9.82031 10.2139 9.42188V4.10107C10.2139 3.69434 9.89844 3.37891 9.4917 3.37891C9.09326 3.37891 8.77783 3.69434 8.77783 4.10107V8.69971H5.41602C5.00928 8.69971 4.69385 9.01514 4.69385 9.42188C4.69385 9.82031 5.00928 10.144 5.41602 10.144Z",fill:"black"},null,-1)]))}const Et={render:$t},St={post(s){return ie.post({RESOURCE:ge,ERRORS:{},BODY:s})}},Pt={class:"transaction-screen"},Tt=C({__name:"TransactionWaitingScreen",props:{handlerError:{}},setup(s){const e=s,t=P("transaction"),n=U({time:""});ee(()=>{d(),o(15)});const r=te(),i=ye(),d=async()=>{const m=r.params.id;try{const{data:c}=await St.post({deviceId:m,provider:t.payment.id,amount:Number(t.price),matchCode:i.token});c.success?window.location.href=c.data.redirectUrl:e.handlerError()}catch{e.handlerError()}},o=m=>{let c=m;n.time=`${(c%60).toString()}`;const g=setInterval(()=>{if(c<=0)n.time="",clearInterval(g);else{let _=c%60;n.time=`${_.toString()}`,--c}},1e3)};return(m,c)=>(u(),y("div",Pt,[l(a(R),null,{title:p(()=>[f("Confirm payment in "+v(a(t).payment.name)+" app",1)]),description:p(()=>[f("Waiting for respond from "+v(a(t).payment.name)+"...",1)]),_:1}),c[0]||(c[0]=h("img",{class:"transaction-screen__image",src:Lt,alt:"Confirm payment"},null,-1)),l(a(F),null,{default:p(()=>[n.time?(u(),w(a(x),{key:0,color:"text-primary",size:"p",weight:"semibold",class:"timer"},{default:p(()=>[l(a(Et)),f("Try again in "+v(n.time)+"S ",1)]),_:1})):(u(),y(A,{key:1},[l(a(E),{tag:"a",href:`tel:${a(ke)}`,text:"Support",type:"secondary",size:"small"},{prefix:p(()=>[l(a(Le))]),_:1},8,["href"]),l(a(E),{onClick:d,text:"Try Again",type:"primary",size:"small"})],64))]),_:1})]))}}),Vt=(s,e)=>{let t;return n=>{t&&clearTimeout(t),t=setTimeout(()=>{s(n)},e)}},K={decimal(s){return{mask:`${s}`,tokens:{z:{pattern:/[.,]/,optional:!0},0:{pattern:/\d/,multiple:!0},9:{pattern:/\d/,optional:!0}},postProcess:e=>{if(e[0]==="0"){const t=e.slice(0,1)==="0"&&!!e.slice(1,2)&&e.slice(1,2)!==".";e.length&&t&&(e="0."+e.slice(1,2))}return(e[0]==="."||e[0]===",")&&(e="0."),e}}},numeric(s){return{mask:`${s}`,tokens:{9:{pattern:/[0-9]/,optional:!0}},postProcess:e=>(e[0]==="0"&&(e=""),e)}}},Nt={class:"price-form"},Rt={class:"price-form__inputs"},Ft={class:"price-form__tabs"},Ot=C({__name:"PriceForm",props:{handlerNext:{type:Function}},setup(s){const e=N(),t=M(()=>e.unitName),n=P("transaction"),r=s,i=()=>{r.handlerNext(1)};return(d,o)=>(u(),y(A,null,[h("div",Nt,[h("div",Rt,[h("div",null,[l(a(x),{size:"p",color:"text-primary",weight:"semibold",class:"price-form__subtitle"},{default:p(()=>[l(a(ae)),o[2]||(o[2]=f(" You pay"))]),_:1}),l(a(G),{label:"F",modelValue:a(n).price,"onUpdate:modelValue":o[0]||(o[0]=m=>a(n).price=m),inputmode:"numeric",maxlength:"4",mask:a(K).numeric(9999)},null,8,["modelValue","mask"])]),h("div",null,[l(a(x),{size:"p",color:"text-primary",weight:"semibold",class:"price-form__subtitle"},{default:p(()=>[l(a(se)),o[3]||(o[3]=f(" You get"))]),_:1}),l(a(G),{label:t.value,modelValue:a(n).unitValue,"onUpdate:modelValue":o[1]||(o[1]=m=>a(n).unitValue=m),inputmode:"decimal","is-readonly":"",mask:a(K).decimal(999.9)},null,8,["label","modelValue","mask"])])]),h("div",Ft,[l(a(Ie))])]),l(a(F),null,{default:p(()=>[l(a(E),{onClick:i,text:"Continue",type:"primary","is-disabled":!Number(a(n).unitValue)},null,8,["is-disabled"])]),_:1})],64))}}),At={class:"price-screen"},Zt=C({__name:"PriceScreen",props:{handlerNext:{type:Function}},setup(s){const e=s;return(t,n)=>(u(),y("div",At,[l(a(R),null,{title:p(()=>n[0]||(n[0]=[f("Amount")])),description:p(()=>n[1]||(n[1]=[f("Enter or select desired water amount")])),_:1}),l(a(Ot),{"handler-next":e.handlerNext},null,8,["handler-next"])]))}}),zt={class:"payment-tab-list"},Bt={class:"payment-tab-list__tabs"},Ut=C({__name:"PaymentTabList",props:{handlerNext:{type:Function},handlerPrev:{type:Function}},setup(s){const e=s,t=()=>{e.handlerNext(2)},n=()=>{e.handlerPrev(2)},r=re(),i=M(()=>r.paymentList),d=P("transaction"),o=m=>{d.payment=m};return(m,c)=>(u(),y("div",zt,[h("div",Bt,[(u(!0),y(A,null,Q(i.value,g=>(u(),w(a(gt),{key:g.id,payment:g,"is-selected":a(d).payment.name===g.name,onClick:_=>o(g)},null,8,["payment","is-selected","onClick"]))),128))]),l(a(F),null,{default:p(()=>[l(a(E),{onClick:n,text:"Back",type:"secondary"}),l(a(E),{onClick:t,text:"Continue",type:"primary"})]),_:1})]))}}),It={class:"payment-screen"},jt=C({__name:"PaymentScreen",props:{handlerNext:{type:Function},handlerPrev:{type:Function}},setup(s){const e=N(),t=M(()=>e.currencyName),n=M(()=>e.unitName),r=P("transaction"),i=s;return(d,o)=>(u(),y("div",It,[l(a(R),null,{title:p(()=>o[0]||(o[0]=[f("Payment")])),description:p(()=>[f("You’ll pay "+v(a(r).price)+" "+v(t.value)+" for "+v(a(r).price)+" "+v(n.value),1)]),_:1}),l(a(Ut),{"handler-next":i.handlerNext,"handler-prev":i.handlerPrev},null,8,["handler-next","handler-prev"])]))}}),Wt=()=>{window.scrollTo({top:0,behavior:"smooth"})},Dt="slide-left-fade",Ht="slide-right-fade",Yt=C({__name:"TransactionPage",setup(s){const e=U({isLoading:!0,activeScreen:1,animation:"slide-scale-fade"}),t=re(),n=U({price:"",unitValue:"",payment:t.paymentList[0]});ve(()=>n.price,()=>i());const r=()=>n.unitValue=o.getUnitValuePerCost(n.price),i=Vt(()=>r(),500);xe("transaction",n);const d=te(),o=N(),m=_=>{n.price=_.price.toString(),o.costPerUnit=_.price,o.currencyName=_.currencyCode.toUpperCase(),o.ATMNumber=_.number},c=async()=>{const _=d.params.id;try{e.isLoading=!0;const{data:$}=await Ct.checkDevice({deviceId:_});$.success?(m($.data),r()):e.activeScreen=-1}catch{e.activeScreen=-1}finally{e.isLoading=!1}};ee(async()=>{await c()}),Ce(()=>{e.activeScreen=1});const g=_=>{const $=e.activeScreen;e.animation=$<_||_===-1||_===-2?Dt:Ht,e.activeScreen=_,Wt()};return(_,$)=>(u(),w(a(Me),{"display-header":!e.isLoading&&e.activeScreen!==-1},{default:p(()=>[l(be,{name:e.animation,mode:"out-in"},{default:p(()=>[e.isLoading?(u(),w(a(Je),{key:0})):e.activeScreen===-1?(u(),w(a(bt),{key:1,"handler-action":c})):e.activeScreen===1?(u(),w(a(Zt),{key:2,"handler-next":()=>g(2)},null,8,["handler-next"])):e.activeScreen===2?(u(),w(a(jt),{key:3,"handler-prev":()=>g(1),"handler-next":()=>g(3)},null,8,["handler-prev","handler-next"])):e.activeScreen===3?(u(),w(a(_t),{key:4,"handler-next":()=>g(4),"handler-prev":()=>g(2),"handler-change-payment":()=>g(2),"handler-change-price-option":()=>g(1)},null,8,["handler-next","handler-prev","handler-change-payment","handler-change-price-option"])):e.activeScreen===4?(u(),w(a(Tt),{key:5,"handler-error":()=>g(-2)},null,8,["handler-error"])):e.activeScreen===-2?(u(),w(a($e),{key:6,title:"Oooops...",description:"something went wrong","handler-action":()=>g(4)},null,8,["handler-action"])):we("",!0)]),_:1},8,["name"])]),_:1},8,["display-header"]))}});export{Yt as default};
