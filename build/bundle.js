var app=function(){"use strict";function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function i(t){t.forEach(o)}function s(t){return"function"==typeof t}function l(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}const u="undefined"!=typeof window;let a=u?()=>window.performance.now():()=>Date.now(),f=u?t=>requestAnimationFrame(t):t;const d=new Set;function p(t){d.forEach((n=>{n.c(t)||(d.delete(n),n.f())})),0!==d.size&&f(p)}function m(t){let n;return 0===d.size&&f(p),{promise:new Promise((e=>{d.add(n={c:t,f:e})})),abort(){d.delete(n)}}}function $(t,n){t.appendChild(n)}function h(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function g(t){const n=b("style");return function(t,n){$(t.head||t,n)}(h(t),n),n.sheet}function y(t,n,e){t.insertBefore(n,e||null)}function x(t){t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function v(){return w(" ")}function E(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function k(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function _(t){return""===t?null:+t}function C(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function F(t,n){t.value=null==n?"":n}function M(t,n,e){t.classList[e?"add":"remove"](n)}const S=new Map;let R,T=0;function B(t,n,e,o,r,i,s,l=0){const c=16.666/o;let u="{\n";for(let t=0;t<=1;t+=c){const o=n+(e-n)*i(t);u+=100*t+`%{${s(o,1-o)}}\n`}const a=u+`100% {${s(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(a)}_${l}`,d=h(t),{stylesheet:p,rules:m}=S.get(d)||function(t,n){const e={stylesheet:g(n),rules:{}};return S.set(t,e),e}(d,t);m[f]||(m[f]=!0,p.insertRule(`@keyframes ${f} ${a}`,p.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${f} ${o}ms linear ${r}ms 1 both`,T+=1,f}function L(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),T-=r,T||f((()=>{T||(S.forEach((t=>{const{stylesheet:n}=t;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.rules={}})),S.clear())})))}function O(t,n){const e=t.getBoundingClientRect();if(n.left!==e.left||n.top!==e.top){const o=getComputedStyle(t),r="none"===o.transform?"":o.transform;t.style.transform=`${r} translate(${n.left-e.left}px, ${n.top-e.top}px)`}}function A(t){R=t}function N(){if(!R)throw new Error("Function called outside component initialization");return R}function j(t,n){N().$$.context.set(t,n)}function q(t){return N().$$.context.get(t)}const D=[],H=[],I=[],z=[],P=Promise.resolve();let J=!1;function W(t){I.push(t)}const G=new Set;let K,Q=0;function U(){const t=R;do{for(;Q<D.length;){const t=D[Q];Q++,A(t),V(t.$$)}for(A(null),D.length=0,Q=0;H.length;)H.pop()();for(let t=0;t<I.length;t+=1){const n=I[t];G.has(n)||(G.add(n),n())}I.length=0}while(D.length);for(;z.length;)z.pop()();J=!1,G.clear(),A(t)}function V(t){if(null!==t.fragment){t.update(),i(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(W)}}function X(){return K||(K=Promise.resolve(),K.then((()=>{K=null}))),K}function Y(t,n,e){t.dispatchEvent(function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(`${n?"intro":"outro"}${e}`))}const Z=new Set;let tt;function nt(){tt={r:0,c:[],p:tt}}function et(){tt.r||i(tt.c),tt=tt.p}function ot(t,n){t&&t.i&&(Z.delete(t),t.i(n))}function rt(t,n,e,o){if(t&&t.o){if(Z.has(t))return;Z.add(t),tt.c.push((()=>{Z.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const it={duration:0};function st(e,o,r,l){let c=o(e,r),u=l?0:1,f=null,d=null,p=null;function $(){p&&L(e,p)}function h(t,n){const e=t.b-u;return n*=Math.abs(e),{a:u,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function g(o){const{delay:r=0,duration:s=300,easing:l=n,tick:g=t,css:y}=c||it,x={start:a()+r,b:o};o||(x.group=tt,tt.r+=1),f||d?d=x:(y&&($(),p=B(e,u,o,s,r,l,y)),o&&g(0,1),f=h(x,s),W((()=>Y(e,o,"start"))),m((t=>{if(d&&t>d.start&&(f=h(d,s),d=null,Y(e,f.b,"start"),y&&($(),p=B(e,u,f.b,f.duration,0,l,c.css))),f)if(t>=f.end)g(u=f.b,1-u),Y(e,f.b,"end"),d||(f.b?$():--f.group.r||i(f.group.c)),f=null;else if(t>=f.start){const n=t-f.start;u=f.a+f.d*l(n/f.duration),g(u,1-u)}return!(!f&&!d)})))}return{run(t){s(c)?X().then((()=>{c=c(),g(t)})):g(t)},end(){$(),f=d=null}}}function lt(t,n){t.f(),function(t,n){rt(t,1,1,(()=>{n.delete(t.key)}))}(t,n)}function ct(t){t&&t.c()}function ut(t,n,e,r){const{fragment:l,on_mount:c,on_destroy:u,after_update:a}=t.$$;l&&l.m(n,e),r||W((()=>{const n=c.map(o).filter(s);u?u.push(...n):i(n),t.$$.on_mount=[]})),a.forEach(W)}function at(t,n){const e=t.$$;null!==e.fragment&&(i(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ft(t,n){-1===t.$$.dirty[0]&&(D.push(t),J||(J=!0,P.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function dt(n,e,o,s,l,c,u,a=[-1]){const f=R;A(n);const d=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:r(),dirty:a,skip_bound:!1,root:e.target||f.$$.root};u&&u(d.root);let p=!1;if(d.ctx=o?o(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&l(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&ft(n,t)),e})):[],d.update(),p=!0,i(d.before_update),d.fragment=!!s&&s(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(x)}else d.fragment&&d.fragment.c();e.intro&&ot(n.$$.fragment),ut(n,e.target,e.anchor,e.customElement),U()}A(f)}class pt{$destroy(){at(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function mt(n){let e,o,r,i,l,c,u;return{c(){e=b("nav"),o=b("div"),r=b("h1"),r.textContent="Calculator",i=v(),l=b("button"),l.innerHTML='<i class="far fa-plus-square"></i>\n      Add item',k(r,"class","nav-title"),k(l,"type","button"),k(l,"class","nav-btn"),k(o,"class","nav-center"),k(e,"class","nav")},m(t,a){y(t,e,a),$(e,o),$(o,r),$(o,i),$(o,l),c||(u=E(l,"click",(function(){s(n[0])&&n[0].apply(this,arguments)})),c=!0)},p(t,[e]){n=t},i:t,o:t,d(t){t&&x(e),c=!1,u()}}}function $t(t,n,e){let{showForm:o}=n;return t.$$set=t=>{"showForm"in t&&e(0,o=t.showForm)},[o]}class ht extends pt{constructor(t){super(),dt(this,t,$t,mt,l,{showForm:0})}}function gt(n){let e,o,r;return{c(){e=b("div"),o=b("h2"),r=w(n[0]),k(e,"class","main-title")},m(t,n){y(t,e,n),$(e,o),$(o,r)},p(t,[n]){1&n&&C(r,t[0])},i:t,o:t,d(t){t&&x(e)}}}function yt(t,n,e){let{title:o="default title"}=n;return t.$$set=t=>{"title"in t&&e(0,o=t.title)},[o]}class xt extends pt{constructor(t){super(),dt(this,t,yt,gt,l,{title:0})}}function bt(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function wt(t){const n=t-1;return n*n*n+1}function vt(t,{delay:n=0,duration:e=400,easing:o=bt,amount:r=5,opacity:i=0}={}){const s=getComputedStyle(t),l=+s.opacity,c="none"===s.filter?"":s.filter,u=l*(1-i);return{delay:n,duration:e,easing:o,css:(t,n)=>`opacity: ${l-u*n}; filter: ${c} blur(${n*r}px);`}}function Et(t,{delay:e=0,duration:o=400,easing:r=n}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:r,css:t=>"opacity: "+t*i}}function kt(t,{delay:n=0,duration:e=400,easing:o=wt,x:r=0,y:i=0,opacity:s=0}={}){const l=getComputedStyle(t),c=+l.opacity,u="none"===l.transform?"":l.transform,a=c*(1-s);return{delay:n,duration:e,easing:o,css:(t,n)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*r}px, ${(1-t)*i}px);\n\t\t\topacity: ${c-a*n}`}}function _t(t,{delay:n=0,duration:e=400,easing:o=wt}={}){const r=getComputedStyle(t),i=+r.opacity,s=parseFloat(r.height),l=parseFloat(r.paddingTop),c=parseFloat(r.paddingBottom),u=parseFloat(r.marginTop),a=parseFloat(r.marginBottom),f=parseFloat(r.borderTopWidth),d=parseFloat(r.borderBottomWidth);return{delay:n,duration:e,easing:o,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*i};height: ${t*s}px;padding-top: ${t*l}px;padding-bottom: ${t*c}px;margin-top: ${t*u}px;margin-bottom: ${t*a}px;border-top-width: ${t*f}px;border-bottom-width: ${t*d}px;`}}function Ct(t){let n,e,o,r,i;return{c(){n=b("h4"),e=w("amount : $"),o=w(t[2])},m(t,r){y(t,n,r),$(n,e),$(n,o),i=!0},p(t,n){(!i||4&n)&&C(o,t[2])},i(t){i||(W((()=>{r||(r=st(n,_t,{},!0)),r.run(1)})),i=!0)},o(t){r||(r=st(n,_t,{},!1)),r.run(0),i=!1},d(t){t&&x(n),t&&r&&r.end()}}}function Ft(t){let n,e,o,r,l,c,u,a,f,d,p,m,h,g,_,F=t[3]&&Ct(t);return{c(){n=b("article"),e=b("div"),o=b("h2"),r=w(t[1]),l=v(),c=b("button"),c.innerHTML='<i class="fas fa-caret-down"></i> I',u=v(),F&&F.c(),a=v(),f=b("div"),d=b("button"),d.innerHTML='<i class="fas fa-pen"></i>',p=v(),m=b("button"),m.innerHTML='<i class="fas fa-trash"></i>',k(c,"class","amount-btn"),k(e,"class","expense-info"),k(d,"class","expense-btn edit-btn"),k(m,"class","expense-btn delete-btn"),k(f,"class","expense-buttons"),k(n,"class","single-expense")},m(i,x){y(i,n,x),$(n,e),$(e,o),$(o,r),$(o,l),$(o,c),$(e,u),F&&F.m(e,null),$(n,a),$(n,f),$(f,d),$(f,p),$(f,m),h=!0,g||(_=[E(c,"click",t[6]),E(d,"click",(function(){s(t[5](t[0]))&&t[5](t[0]).apply(this,arguments)})),E(m,"click",(function(){s(t[4](t[0]))&&t[4](t[0]).apply(this,arguments)}))],g=!0)},p(n,[o]){t=n,(!h||2&o)&&C(r,t[1]),t[3]?F?(F.p(t,o),8&o&&ot(F,1)):(F=Ct(t),F.c(),ot(F,1),F.m(e,null)):F&&(nt(),rt(F,1,1,(()=>{F=null})),et())},i(t){h||(ot(F),h=!0)},o(t){rt(F),h=!1},d(t){t&&x(n),F&&F.d(),g=!1,i(_)}}}function Mt(t,n,e){let{id:o}=n,{name:r=""}=n,{amount:i=0}=n;const s=q("remove"),l=q("modify");let c=!1;return t.$$set=t=>{"id"in t&&e(0,o=t.id),"name"in t&&e(1,r=t.name),"amount"in t&&e(2,i=t.amount)},[o,r,i,c,s,l,function(){e(3,c=!c)}]}class St extends pt{constructor(t){super(),dt(this,t,Mt,Ft,l,{id:0,name:1,amount:2})}}function Rt(t,{from:n,to:e},o={}){const r=getComputedStyle(t),i="none"===r.transform?"":r.transform,[l,c]=r.transformOrigin.split(" ").map(parseFloat),u=n.left+n.width*l/e.width-(e.left+l),a=n.top+n.height*c/e.height-(e.top+c),{delay:f=0,duration:d=(t=>120*Math.sqrt(t)),easing:p=wt}=o;return{delay:f,duration:s(d)?d(Math.sqrt(u*u+a*a)):d,easing:p,css:(t,o)=>{const r=o*u,s=o*a,l=t+o*n.width/e.width,c=t+o*n.height/e.height;return`transform: ${i} translate(${r}px, ${s}px) scale(${l}, ${c});`}}}function Tt(t,n,e){const o=t.slice();return o[1]=n[e],o[3]=e,o}function Bt(t){let n;return{c(){n=b("h2"),n.textContent="no expenses added to the list!",k(n,"class","svelte-12asnrc")},m(t,e){y(t,n,e)},d(t){t&&x(n)}}}function Lt(o,r){let i,s,l,c,u,f,d=t;const p=[r[1]];let h={};for(let t=0;t<p.length;t+=1)h=e(h,p[t]);return s=new St({props:h}),{key:o,first:null,c(){i=b("div"),ct(s.$$.fragment),l=v(),this.first=i},m(t,n){y(t,i,n),ut(s,i,null),$(i,l),f=!0},p(t,n){r=t;const e=1&n?function(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const s=t[i],l=n[i];if(l){for(const t in s)t in l||(o[t]=1);for(const t in l)r[t]||(e[t]=l[t],r[t]=1);t[i]=l}else for(const t in s)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}(p,[(o=r[1],"object"==typeof o&&null!==o?o:{})]):{};var o;s.$set(e)},r(){u=i.getBoundingClientRect()},f(){!function(t){const n=getComputedStyle(t);if("absolute"!==n.position&&"fixed"!==n.position){const{width:e,height:o}=n,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=e,t.style.height=o,O(t,r)}}(i),d(),O(i,u)},a(){d(),d=function(e,o,r,i){if(!o)return t;const s=e.getBoundingClientRect();if(o.left===s.left&&o.right===s.right&&o.top===s.top&&o.bottom===s.bottom)return t;const{delay:l=0,duration:c=300,easing:u=n,start:f=a()+l,end:d=f+c,tick:p=t,css:$}=r(e,{from:o,to:s},i);let h,g=!0,y=!1;function x(){$&&L(e,h),g=!1}return m((t=>{if(!y&&t>=f&&(y=!0),y&&t>=d&&(p(1,0),x()),!g)return!1;if(y){const n=0+1*u((t-f)/c);p(n,1-n)}return!0})),$&&(h=B(e,0,1,c,l,u,$)),l||(y=!0),p(0,1),x}(i,u,Rt,{})},i(t){f||(ot(s.$$.fragment,t),W((()=>{c||(c=st(i,kt,{x:200,delay:300*r[3]},!0)),c.run(1)})),f=!0)},o(t){rt(s.$$.fragment,t),c||(c=st(i,kt,{x:200,delay:300*r[3]},!1)),c.run(0),f=!1},d(t){t&&x(i),at(s),t&&c&&c.end()}}}function Ot(t){let n,e,o,r,i,s=[],l=new Map;e=new xt({props:{title:"expense list"}});let c=t[0];const u=t=>t[1].id;for(let n=0;n<c.length;n+=1){let e=Tt(t,c,n),o=u(e);l.set(o,s[n]=Lt(o,e))}let a=null;return c.length||(a=Bt()),{c(){n=b("section"),ct(e.$$.fragment),o=v(),r=b("ul");for(let t=0;t<s.length;t+=1)s[t].c();a&&a.c()},m(t,l){y(t,n,l),ut(e,n,null),$(n,o),$(n,r);for(let t=0;t<s.length;t+=1)s[t].m(r,null);a&&a.m(r,null),i=!0},p(t,[n]){if(1&n){c=t[0],nt();for(let t=0;t<s.length;t+=1)s[t].r();s=function(t,n,e,o,r,i,s,l,c,u,a,f){let d=t.length,p=i.length,m=d;const $={};for(;m--;)$[t[m].key]=m;const h=[],g=new Map,y=new Map;for(m=p;m--;){const t=f(r,i,m),l=e(t);let c=s.get(l);c?o&&c.p(t,n):(c=u(l,t),c.c()),g.set(l,h[m]=c),l in $&&y.set(l,Math.abs(m-$[l]))}const x=new Set,b=new Set;function w(t){ot(t,1),t.m(l,a),s.set(t.key,t),a=t.first,p--}for(;d&&p;){const n=h[p-1],e=t[d-1],o=n.key,r=e.key;n===e?(a=n.first,d--,p--):g.has(r)?!s.has(o)||x.has(o)?w(n):b.has(r)?d--:y.get(o)>y.get(r)?(b.add(o),w(n)):(x.add(r),d--):(c(e,s),d--)}for(;d--;){const n=t[d];g.has(n.key)||c(n,s)}for(;p;)w(h[p-1]);return h}(s,n,u,1,t,c,l,r,lt,Lt,null,Tt);for(let t=0;t<s.length;t+=1)s[t].a();et(),c.length?a&&(a.d(1),a=null):a||(a=Bt(),a.c(),a.m(r,null))}},i(t){if(!i){ot(e.$$.fragment,t);for(let t=0;t<c.length;t+=1)ot(s[t]);i=!0}},o(t){rt(e.$$.fragment,t);for(let t=0;t<s.length;t+=1)rt(s[t]);i=!1},d(t){t&&x(n),at(e);for(let t=0;t<s.length;t+=1)s[t].d();a&&a.d()}}}function At(t,n,e){let{expenses:o=[]}=n;return t.$$set=t=>{"expenses"in t&&e(0,o=t.expenses)},[o]}class Nt extends pt{constructor(t){super(),dt(this,t,At,Ot,l,{expenses:0})}}function jt(n){let e,o,r,i,s;return{c(){e=b("section"),o=b("h2"),r=w(n[0]),i=w(" : $"),s=w(n[1]),k(e,"class","main-title")},m(t,n){y(t,e,n),$(e,o),$(o,r),$(o,i),$(o,s)},p(t,[n]){1&n&&C(r,t[0]),2&n&&C(s,t[1])},i:t,o:t,d(t){t&&x(e)}}}function qt(t,n,e){let{title:o="default"}=n,{total:r=0}=n;return t.$$set=t=>{"title"in t&&e(0,o=t.title),"total"in t&&e(1,r=t.total)},[o,r]}class Dt extends pt{constructor(t){super(),dt(this,t,qt,jt,l,{title:0,total:1})}}function Ht(n){let e,o,r;return{c(){e=b("div"),o=b("h2"),r=w(n[0]),k(e,"class","main-title")},m(t,n){y(t,e,n),$(e,o),$(o,r)},p(t,[n]){1&n&&C(r,t[0])},i:t,o:t,d(t){t&&x(e)}}}function It(t,n,e){let{title:o="default title"}=n;return t.$$set=t=>{"title"in t&&e(0,o=t.title)},[o]}class zt extends pt{constructor(t){super(),dt(this,t,It,Ht,l,{title:0})}}function Pt(t){let n;return{c(){n=b("p"),n.textContent="please fill out all form fields",k(n,"class","form-empty")},m(t,e){y(t,n,e)},d(t){t&&x(n)}}}function Jt(t){let n;return{c(){n=w("add expense")},m(t,e){y(t,n,e)},d(t){t&&x(n)}}}function Wt(t){let n;return{c(){n=w("edit expense")},m(t,e){y(t,n,e)},d(t){t&&x(n)}}}function Gt(t){let n,e,o,r,l,c,u,a,f,d,p,m,h,g,w,C,S,R,T,B,L;e=new zt({props:{title:"add expense"}});let O=t[4]&&Pt();function A(t,n){return t[2]?Wt:Jt}let N=A(t),j=N(t);return{c(){n=b("section"),ct(e.$$.fragment),o=v(),r=b("form"),l=b("div"),c=b("label"),c.textContent="name",u=v(),a=b("input"),f=v(),d=b("div"),p=b("label"),p.textContent="amount",m=v(),h=b("input"),g=v(),O&&O.c(),w=v(),C=b("button"),j.c(),S=v(),R=b("button"),R.innerHTML='<i class="fas fa-times"></i>\n      close',k(c,"for","name"),k(a,"type","text"),k(a,"id","name"),k(l,"class","form-control"),k(p,"for","amount"),k(h,"type","number"),k(h,"id","amount"),k(d,"class","form-control"),k(C,"type","submit"),k(C,"class","btn btn-block"),C.disabled=t[4],M(C,"disabled",t[4]),k(R,"type","button"),k(R,"class","close-btn"),k(r,"class","expense-form"),k(n,"class","form")},m(i,x){var b;y(i,n,x),ut(e,n,null),$(n,o),$(n,r),$(r,l),$(l,c),$(l,u),$(l,a),F(a,t[0]),$(r,f),$(r,d),$(d,p),$(d,m),$(d,h),F(h,t[1]),$(r,g),O&&O.m(r,null),$(r,w),$(r,C),j.m(C,null),$(r,S),$(r,R),T=!0,B||(L=[E(a,"input",t[8]),E(h,"input",t[9]),E(R,"click",(function(){s(t[3])&&t[3].apply(this,arguments)})),E(r,"submit",(b=t[5],function(t){return t.preventDefault(),b.call(this,t)}))],B=!0)},p(n,[e]){t=n,1&e&&a.value!==t[0]&&F(a,t[0]),2&e&&_(h.value)!==t[1]&&F(h,t[1]),t[4]?O||(O=Pt(),O.c(),O.m(r,w)):O&&(O.d(1),O=null),N!==(N=A(t))&&(j.d(1),j=N(t),j&&(j.c(),j.m(C,null))),(!T||16&e)&&(C.disabled=t[4]),16&e&&M(C,"disabled",t[4])},i(t){T||(ot(e.$$.fragment,t),T=!0)},o(t){rt(e.$$.fragment,t),T=!1},d(t){t&&x(n),at(e),O&&O.d(),j.d(),B=!1,i(L)}}}function Kt(t,n,e){let o,{name:r=""}=n,{amount:i=null}=n,{addExpense:s}=n,{isEditing:l}=n,{editExpense:c}=n,{hideForm:u}=n;return t.$$set=t=>{"name"in t&&e(0,r=t.name),"amount"in t&&e(1,i=t.amount),"addExpense"in t&&e(6,s=t.addExpense),"isEditing"in t&&e(2,l=t.isEditing),"editExpense"in t&&e(7,c=t.editExpense),"hideForm"in t&&e(3,u=t.hideForm)},t.$$.update=()=>{3&t.$$.dirty&&e(4,o=!r||!i)},[r,i,l,u,o,function(t){l?c({name:r,amount:i}):s({name:r,amount:i}),e(0,r=""),e(1,i=null),u()},s,c,function(){r=this.value,e(0,r)},function(){i=_(this.value),e(1,i)}]}class Qt extends pt{constructor(t){super(),dt(this,t,Kt,Gt,l,{name:0,amount:1,addExpense:6,isEditing:2,editExpense:7,hideForm:3})}}function Ut(e){let o,r,l,u,f,d;const p=e[1].default,h=function(t,n,e,o){if(t){const r=c(t,n,e,o);return t[0](r)}}(p,e,e[0],null);return{c(){o=b("div"),r=b("div"),h&&h.c(),k(r,"class","modal-content"),k(o,"class","modal-container")},m(t,n){y(t,o,n),$(o,r),h&&h.m(r,null),d=!0},p(t,[n]){h&&h.p&&(!d||1&n)&&function(t,n,e,o,r,i){if(r){const s=c(n,e,o,i);t.p(s,r)}}(h,p,t,t[0],d?function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(p,t[0],n,null):function(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}(t[0]),null)},i(e){d||(ot(h,e),W((()=>{l||(l=st(r,kt,{y:-200},!0)),l.run(1)})),W((()=>{f&&f.end(1),u=function(e,o,r){let i,l,c=o(e,r),u=!1,f=0;function d(){i&&L(e,i)}function p(){const{delay:o=0,duration:r=300,easing:s=n,tick:p=t,css:$}=c||it;$&&(i=B(e,0,1,r,o,s,$,f++)),p(0,1);const h=a()+o,g=h+r;l&&l.abort(),u=!0,W((()=>Y(e,!0,"start"))),l=m((t=>{if(u){if(t>=g)return p(1,0),Y(e,!0,"end"),d(),u=!1;if(t>=h){const n=s((t-h)/r);p(n,1-n)}}return u}))}let $=!1;return{start(){$||($=!0,L(e),s(c)?(c=c(),X().then(p)):p())},invalidate(){$=!1},end(){u&&(d(),u=!1)}}}(o,vt,{}),u.start()})),d=!0)},o(e){rt(h,e),l||(l=st(r,kt,{y:-200},!1)),l.run(0),u&&u.invalidate(),f=function(e,o,r){let l,c=o(e,r),u=!0;const f=tt;function d(){const{delay:o=0,duration:r=300,easing:s=n,tick:d=t,css:p}=c||it;p&&(l=B(e,1,0,r,o,s,p));const $=a()+o,h=$+r;W((()=>Y(e,!1,"start"))),m((t=>{if(u){if(t>=h)return d(0,1),Y(e,!1,"end"),--f.r||i(f.c),!1;if(t>=$){const n=s((t-$)/r);d(1-n,n)}}return u}))}return f.r+=1,s(c)?X().then((()=>{c=c(),d()})):d(),{end(t){t&&c.tick&&c.tick(1,0),u&&(l&&L(e,l),u=!1)}}}(o,Et,{}),d=!1},d(t){t&&x(o),h&&h.d(t),t&&l&&l.end(),t&&f&&f.end()}}}function Vt(t,n,e){let{$$slots:o={},$$scope:r}=n;return t.$$set=t=>{"$$scope"in t&&e(0,r=t.$$scope)},[r,o]}class Xt extends pt{constructor(t){super(),dt(this,t,Vt,Ut,l,{})}}function Yt(t){let n,e;return n=new Xt({props:{$$slots:{default:[Zt]},$$scope:{ctx:t}}}),{c(){ct(n.$$.fragment)},m(t,o){ut(n,t,o),e=!0},p(t,e){const o={};32806&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(ot(n.$$.fragment,t),e=!0)},o(t){rt(n.$$.fragment,t),e=!1},d(t){at(n,t)}}}function Zt(t){let n,e;return n=new Qt({props:{addExpense:t[9],name:t[1],amount:t[2],isEditing:t[5],editExpense:t[10],hideForm:t[7]}}),{c(){ct(n.$$.fragment)},m(t,o){ut(n,t,o),e=!0},p(t,e){const o={};2&e&&(o.name=t[1]),4&e&&(o.amount=t[2]),32&e&&(o.isEditing=t[5]),n.$set(o)},i(t){e||(ot(n.$$.fragment,t),e=!0)},o(t){rt(n.$$.fragment,t),e=!1},d(t){at(n,t)}}}function tn(t){let n,e,o,r,i,s,l,c,u,a,f,d;n=new ht({props:{showForm:t[6]}});let p=t[3]&&Yt(t);return i=new Dt({props:{title:"total expenses",total:t[4]}}),l=new Nt({props:{expenses:t[0]}}),{c(){ct(n.$$.fragment),e=v(),o=b("main"),p&&p.c(),r=v(),ct(i.$$.fragment),s=v(),ct(l.$$.fragment),c=v(),u=b("button"),u.textContent="clear expenses",k(u,"type","button"),k(u,"class","btn btn-primary btn-block"),k(o,"class","content")},m(m,h){ut(n,m,h),y(m,e,h),y(m,o,h),p&&p.m(o,null),$(o,r),ut(i,o,null),$(o,s),ut(l,o,null),$(o,c),$(o,u),a=!0,f||(d=E(u,"click",t[8]),f=!0)},p(t,[n]){t[3]?p?(p.p(t,n),8&n&&ot(p,1)):(p=Yt(t),p.c(),ot(p,1),p.m(o,r)):p&&(nt(),rt(p,1,1,(()=>{p=null})),et());const e={};16&n&&(e.total=t[4]),i.$set(e);const s={};1&n&&(s.expenses=t[0]),l.$set(s)},i(t){a||(ot(n.$$.fragment,t),ot(p),ot(i.$$.fragment,t),ot(l.$$.fragment,t),a=!0)},o(t){rt(n.$$.fragment,t),rt(p),rt(i.$$.fragment,t),rt(l.$$.fragment,t),a=!1},d(t){at(n,t),t&&x(e),t&&x(o),p&&p.d(),at(i),at(l),f=!1,d()}}}function nn(t,n,e){let o,r,i=[],s=null,l="",c=null,u=!1;function a(){e(3,u=!0)}var f;return j("remove",(function(t){e(0,i=i.filter((n=>n.id!=t)))})),j("modify",(function(t){let n=i.find((n=>n.id===t));e(11,s=n.id),e(1,l=n.name),e(2,c=n.amount),a()})),f=()=>{e(0,i=localStorage.getItem("expenses")?JSON.parse(localStorage.getItem("expenses")):[])},N().$$.on_mount.push(f),function(t){N().$$.after_update.push(t)}((()=>{localStorage.setItem("expenses",JSON.stringify(i))})),t.$$.update=()=>{2048&t.$$.dirty&&e(5,o=!!s),1&t.$$.dirty&&e(4,r=i.reduce(((t,n)=>t+n.amount),0))},[i,l,c,u,r,o,a,function(){e(3,u=!1),e(11,s=null),e(2,c=null),e(1,l="")},function(){e(0,i=[])},function({name:t,amount:n}){let o={id:Math.floor(Math.random()*Date.now()),name:t,amount:n};e(0,i=[o,...i])},function({name:t,amount:n}){e(0,i=i.map((e=>e.id===s?{...e,name:t,amount:n}:{...e}))),e(11,s=null),e(2,c=null),e(1,l="")},s]}return new class extends pt{constructor(t){super(),dt(this,t,nn,tn,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
