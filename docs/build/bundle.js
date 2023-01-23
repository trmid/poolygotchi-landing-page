var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function i(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l;function c(t,e,n,o){if(t){const r=u(t,e,n,o);return t[0](r)}}function u(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}function d(t,e,n,o,r,s){if(r){const i=u(e,n,o,s);t.p(i,r)}}function p(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function h(e){return e&&i(e.destroy)?e.destroy:t}const g="undefined"!=typeof window;let m=g?()=>window.performance.now():()=>Date.now(),$=g?t=>requestAnimationFrame(t):t;const v=new Set;function y(t){v.forEach((e=>{e.c(t)||(v.delete(e),e.f())})),0!==v.size&&$(y)}function w(t){let e;return 0===v.size&&$(y),{promise:new Promise((n=>{v.add(e={c:t,f:n})})),abort(){v.delete(e)}}}function b(t,e){t.appendChild(e)}function x(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function k(t){const e=T("style");return function(t,e){b(t.head||t,e),e.sheet}(x(t),e),e.sheet}function _(t,e,n){t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function T(t){return document.createElement(t)}function L(t){return document.createTextNode(t)}function C(){return L(" ")}function P(){return L("")}function j(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function M(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function q(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function S(t,e,n){t.classList[n?"add":"remove"](e)}function N(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}function F(t,e){return new t(e)}const O=new Map;let z,A=0;function H(t,e,n,o,r,s,i,a=0){const l=16.666/o;let c="{\n";for(let t=0;t<=1;t+=l){const o=e+(n-e)*s(t);c+=100*t+`%{${i(o,1-o)}}\n`}const u=c+`100% {${i(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`,d=x(t),{stylesheet:p,rules:h}=O.get(d)||function(t,e){const n={stylesheet:k(e),rules:{}};return O.set(t,n),n}(d,t);h[f]||(h[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${o}ms linear ${r}ms 1 both`,A+=1,f}function U(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),A-=r,A||$((()=>{A||(O.forEach((t=>{const{ownerNode:e}=t.stylesheet;e&&E(e)})),O.clear())})))}function D(t){z=t}function I(){if(!z)throw new Error("Function called outside component initialization");return z}function R(t){I().$$.on_mount.push(t)}function W(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const Q=[],G=[],Y=[],K=[],B=Promise.resolve();let X=!1;function V(){X||(X=!0,B.then(nt))}function Z(t){Y.push(t)}const J=new Set;let tt,et=0;function nt(){if(0!==et)return;const t=z;do{try{for(;et<Q.length;){const t=Q[et];et++,D(t),ot(t.$$)}}catch(t){throw Q.length=0,et=0,t}for(D(null),Q.length=0,et=0;G.length;)G.pop()();for(let t=0;t<Y.length;t+=1){const e=Y[t];J.has(e)||(J.add(e),e())}Y.length=0}while(Q.length);for(;K.length;)K.pop()();X=!1,J.clear(),D(t)}function ot(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}function rt(){return tt||(tt=Promise.resolve(),tt.then((()=>{tt=null}))),tt}function st(t,e,n){t.dispatchEvent(N(`${e?"intro":"outro"}${n}`))}const it=new Set;let at;function lt(){at={r:0,c:[],p:at}}function ct(){at.r||s(at.c),at=at.p}function ut(t,e){t&&t.i&&(it.delete(t),t.i(e))}function ft(t,e,n,o){if(t&&t.o){if(it.has(t))return;it.add(t),at.c.push((()=>{it.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}const dt={duration:0};function pt(n,o,r,a){const l={direction:"both"};let c=o(n,r,l),u=a?0:1,f=null,d=null,p=null;function h(){p&&U(n,p)}function g(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function $(o){const{delay:r=0,duration:i=300,easing:a=e,tick:l=t,css:$}=c||dt,v={start:m()+r,b:o};o||(v.group=at,at.r+=1),f||d?d=v:($&&(h(),p=H(n,u,o,i,r,a,$)),o&&l(0,1),f=g(v,i),Z((()=>st(n,o,"start"))),w((t=>{if(d&&t>d.start&&(f=g(d,i),d=null,st(n,f.b,"start"),$&&(h(),p=H(n,u,f.b,f.duration,0,a,c.css))),f)if(t>=f.end)l(u=f.b,1-u),st(n,f.b,"end"),d||(f.b?h():--f.group.r||s(f.group.c)),f=null;else if(t>=f.start){const e=t-f.start;u=f.a+f.d*a(e/f.duration),l(u,1-u)}return!(!f&&!d)})))}return{run(t){i(c)?rt().then((()=>{c=c(l),$(t)})):$(t)},end(){h(),f=d=null}}}function ht(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],a=e[s];if(a){for(const t in i)t in a||(o[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[s]=a}else for(const t in i)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function gt(t){return"object"==typeof t&&null!==t?t:{}}function mt(t){t&&t.c()}function $t(t,e,n,r){const{fragment:a,after_update:l}=t.$$;a&&a.m(e,n),r||Z((()=>{const e=t.$$.on_mount.map(o).filter(i);t.$$.on_destroy?t.$$.on_destroy.push(...e):s(e),t.$$.on_mount=[]})),l.forEach(Z)}function vt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(e,n,o,i,a,l,c,u=[-1]){const f=z;D(e);const d=e.$$={fragment:null,ctx:[],props:l,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};c&&c(d.root);let p=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&function(t,e){-1===t.$$.dirty[0]&&(Q.push(t),V(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],d.update(),p=!0,s(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(E)}else d.fragment&&d.fragment.c();n.intro&&ut(e.$$.fragment),$t(e,n.target,n.anchor,n.customElement),nt()}D(f)}class wt{$destroy(){vt(this,1),this.$destroy=t}$on(e,n){if(!i(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const bt=[];function xt(t,e){return{subscribe:kt(t,e).subscribe}}function kt(e,n=t){let o;const r=new Set;function s(t){if(a(e,t)&&(e=t,o)){const t=!bt.length;for(const t of r)t[1](),bt.push(t,e);if(t){for(let t=0;t<bt.length;t+=2)bt[t][0](bt[t+1]);bt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,a=t){const l=[i,a];return r.add(l),1===r.size&&(o=n(s)||t),i(e),()=>{r.delete(l),0===r.size&&(o(),o=null)}}}}function _t(e,n,o){const r=!Array.isArray(e),a=r?[e]:e,l=n.length<2;return xt(o,(e=>{let o=!1;const c=[];let u=0,f=t;const d=()=>{if(u)return;f();const o=n(r?c[0]:c,e);l?e(o):f=i(o)?o:t},p=a.map(((e,n)=>function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(e,(t=>{c[n]=t,u&=~(1<<n),o&&d()}),(()=>{u|=1<<n}))));return o=!0,d(),function(){s(p),f()}}))}function Et(t){let e,o,r;const s=[t[2]];var i=t[0];function a(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return i&&(e=F(i,a()),e.$on("routeEvent",t[7])),{c(){e&&mt(e.$$.fragment),o=P()},m(t,n){e&&$t(e,t,n),_(t,o,n),r=!0},p(t,n){const r=4&n?ht(s,[gt(t[2])]):{};if(i!==(i=t[0])){if(e){lt();const t=e;ft(t.$$.fragment,1,0,(()=>{vt(t,1)})),ct()}i?(e=F(i,a()),e.$on("routeEvent",t[7]),mt(e.$$.fragment),ut(e.$$.fragment,1),$t(e,o.parentNode,o)):e=null}else i&&e.$set(r)},i(t){r||(e&&ut(e.$$.fragment,t),r=!0)},o(t){e&&ft(e.$$.fragment,t),r=!1},d(t){t&&E(o),e&&vt(e,t)}}}function Tt(t){let e,o,r;const s=[{params:t[1]},t[2]];var i=t[0];function a(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return i&&(e=F(i,a()),e.$on("routeEvent",t[6])),{c(){e&&mt(e.$$.fragment),o=P()},m(t,n){e&&$t(e,t,n),_(t,o,n),r=!0},p(t,n){const r=6&n?ht(s,[2&n&&{params:t[1]},4&n&&gt(t[2])]):{};if(i!==(i=t[0])){if(e){lt();const t=e;ft(t.$$.fragment,1,0,(()=>{vt(t,1)})),ct()}i?(e=F(i,a()),e.$on("routeEvent",t[6]),mt(e.$$.fragment),ut(e.$$.fragment,1),$t(e,o.parentNode,o)):e=null}else i&&e.$set(r)},i(t){r||(e&&ut(e.$$.fragment,t),r=!0)},o(t){e&&ft(e.$$.fragment,t),r=!1},d(t){t&&E(o),e&&vt(e,t)}}}function Lt(t){let e,n,o,r;const s=[Tt,Et],i=[];function a(t,e){return t[1]?0:1}return e=a(t),n=i[e]=s[e](t),{c(){n.c(),o=P()},m(t,n){i[e].m(t,n),_(t,o,n),r=!0},p(t,[r]){let l=e;e=a(t),e===l?i[e].p(t,r):(lt(),ft(i[l],1,1,(()=>{i[l]=null})),ct(),n=i[e],n?n.p(t,r):(n=i[e]=s[e](t),n.c()),ut(n,1),n.m(o.parentNode,o))},i(t){r||(ut(n),r=!0)},o(t){ft(n),r=!1},d(t){i[e].d(t),t&&E(o)}}}function Ct(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let o="";return n>-1&&(o=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:o}}const Pt=xt(null,(function(t){t(Ct());const e=()=>{t(Ct())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));_t(Pt,(t=>t.location)),_t(Pt,(t=>t.querystring));const jt=kt(void 0);function Mt(t,e){if(e=St(e),!t||!t.tagName||"a"!=t.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');return qt(t,e),{update(e){e=St(e),qt(t,e)}}}function qt(t,e){let n=e.href||t.getAttribute("href");if(n&&"/"==n.charAt(0))n="#"+n;else if(!n||n.length<2||"#/"!=n.slice(0,2))throw Error('Invalid value for "href" attribute: '+n);t.setAttribute("href",n),t.addEventListener("click",(t=>{t.preventDefault(),e.disabled||function(t){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=t}(t.currentTarget.getAttribute("href"))}))}function St(t){return t&&"string"==typeof t?{href:t}:t||{}}function Nt(t,e,n){let{routes:o={}}=e,{prefix:r=""}=e,{restoreScrollState:s=!1}=e;class i{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:o}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,o,r,s,i=[],a="",l=t.split("/");for(l[0]||l.shift();r=l.shift();)"*"===(n=r[0])?(i.push("wild"),a+="/(.*)"):":"===n?(o=r.indexOf("?",1),s=r.indexOf(".",1),i.push(r.substring(1,~o?o:~s?s:r.length)),a+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(a+=(~o?"?":"")+"\\"+r.substring(s))):a+="/"+r;return{keys:i,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const e=t.match(r);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let o=0;for(;o<this._keys.length;){try{n[this._keys[o]]=decodeURIComponent(e[o+1]||"")||null}catch(t){n[this._keys[o]]=null}o++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!await this.conditions[e](t))return!1;return!0}}const a=[];o instanceof Map?o.forEach(((t,e)=>{a.push(new i(e,t))})):Object.keys(o).forEach((t=>{a.push(new i(t,o[t]))}));let l=null,c=null,u={};const f=function(){const t=I();return(e,n,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=N(e,n,{cancelable:o});return r.slice().forEach((e=>{e.call(t,s)})),!s.defaultPrevented}return!0}}();async function d(t,e){await(V(),B),f(t,e)}let p=null,h=null;var g;s&&(h=t=>{p=t.state&&(t.state.__svelte_spa_router_scrollY||t.state.__svelte_spa_router_scrollX)?t.state:null},window.addEventListener("popstate",h),g=()=>{var t;(t=p)?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)},I().$$.after_update.push(g));let m=null,$=null;const v=Pt.subscribe((async t=>{m=t;let e=0;for(;e<a.length;){const o=a[e].match(t.location);if(!o){e++;continue}const r={route:a[e].path,location:t.location,querystring:t.querystring,userData:a[e].userData,params:o&&"object"==typeof o&&Object.keys(o).length?o:null};if(!await a[e].checkConditions(r))return n(0,l=null),$=null,void d("conditionsFailed",r);d("routeLoading",Object.assign({},r));const s=a[e].component;if($!=s){s.loading?(n(0,l=s.loading),$=s,n(1,c=s.loadingParams),n(2,u={}),d("routeLoaded",Object.assign({},r,{component:l,name:l.name,params:c}))):(n(0,l=null),$=null);const e=await s();if(t!=m)return;n(0,l=e&&e.default||e),$=s}return o&&"object"==typeof o&&Object.keys(o).length?n(1,c=o):n(1,c=null),n(2,u=a[e].props),void d("routeLoaded",Object.assign({},r,{component:l,name:l.name,params:c})).then((()=>{jt.set(c)}))}n(0,l=null),$=null,jt.set(void 0)}));return function(t){I().$$.on_destroy.push(t)}((()=>{v(),h&&window.removeEventListener("popstate",h)})),t.$$set=t=>{"routes"in t&&n(3,o=t.routes),"prefix"in t&&n(4,r=t.prefix),"restoreScrollState"in t&&n(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[l,c,u,o,r,s,function(e){W.call(this,t,e)},function(e){W.call(this,t,e)}]}class Ft extends wt{constructor(t){super(),yt(this,t,Nt,Lt,a,{routes:3,prefix:4,restoreScrollState:5})}}function Ot(e){let n;return{c(){n=T("span"),q(n,"id",e[0]),q(n,"class","svelte-1kr979w")},m(t,o){_(t,n,o),e[2](n)},p(t,[e]){1&e&&q(n,"id",t[0])},i:t,o:t,d(t){t&&E(n),e[2](null)}}}function zt(t){const e=()=>{var t;const e=location.hash.match(/\?[a-zA-Z0-9\-]+/);e&&(console.log(e),null===(t=document.getElementById(e[0].slice(1)))||void 0===t||t.scrollIntoView({behavior:"smooth",block:"start"}))};return t.addEventListener("click",e),{destroy:()=>{t.removeEventListener("click",e)}}}function At(t,e,n){let o,{id:r}=e;return R((()=>{const t=location.hash.match(/\?[a-zA-Z0-9\-]+/);t&&t[0].slice(1)===r&&(console.log(t,o),setTimeout((()=>{o.scrollIntoView({behavior:"smooth",block:"start"})}),500))})),t.$$set=t=>{"id"in t&&n(0,r=t.id)},[r,o,function(t){G[t?"unshift":"push"]((()=>{o=t,n(1,o)}))}]}class Ht extends wt{constructor(t){super(),yt(this,t,At,Ot,a,{id:0})}}function Ut(e){let n,o,r,i,a,l,c,u,f;return{c(){n=T("header"),o=T("nav"),r=T("a"),r.innerHTML='<img id="icon" src="favicon.png" alt="home" class="svelte-1hp6z89"/>',i=C(),a=T("a"),a.textContent="about",l=C(),c=T("a"),c.textContent="testnet",q(r,"class","home svelte-1hp6z89"),q(r,"href","/"),q(a,"href","/?about"),q(a,"class","svelte-1hp6z89"),q(c,"href","https://test.poolygotchi.com"),q(c,"class","svelte-1hp6z89"),q(o,"class","margins svelte-1hp6z89"),q(n,"class","svelte-1hp6z89")},m(t,s){_(t,n,s),b(n,o),b(o,r),b(o,i),b(o,a),b(o,l),b(o,c),u||(f=[h(Mt.call(null,r)),j(r,"click",e[0]),h(Mt.call(null,a)),h(zt.call(null,a))],u=!0)},p:t,i:t,o:t,d(t){t&&E(n),u=!1,s(f)}}}function Dt(t){return[()=>document.body.scrollTop=0]}class It extends wt{constructor(t){super(),yt(this,t,Dt,Ut,a,{})}}function Rt(t){const e=t-1;return e*e*e+1}function Wt(t,{delay:n=0,duration:o=400,easing:r=e}={}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*s}}function Qt(t,{delay:e=0,duration:n=400,easing:o=Rt}={}){const r=getComputedStyle(t),s=+r.opacity,i=parseFloat(r.height),a=parseFloat(r.paddingTop),l=parseFloat(r.paddingBottom),c=parseFloat(r.marginTop),u=parseFloat(r.marginBottom),f=parseFloat(r.borderTopWidth),d=parseFloat(r.borderBottomWidth);return{delay:e,duration:n,easing:o,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*s};height: ${t*i}px;padding-top: ${t*a}px;padding-bottom: ${t*l}px;margin-top: ${t*c}px;margin-bottom: ${t*u}px;border-top-width: ${t*f}px;border-bottom-width: ${t*d}px;`}}const Gt=t=>({}),Yt=t=>({});function Kt(t){let e,n,o;const r=t[5].default,s=c(r,t,t[4],null);return{c(){e=T("div"),s&&s.c(),q(e,"id","answer"),q(e,"class","svelte-rjyafv")},m(n,r){_(n,e,r),s&&s.m(e,null),t[6](e),o=!0},p(t,e){s&&s.p&&(!o||16&e)&&d(s,r,t,t[4],o?f(r,t[4],e,null):p(t[4]),null)},i(t){o||(ut(s,t),Z((()=>{n||(n=pt(e,Qt,{duration:500},!0)),n.run(1)})),o=!0)},o(t){ft(s,t),n||(n=pt(e,Qt,{duration:500},!1)),n.run(0),o=!1},d(o){o&&E(e),s&&s.d(o),t[6](null),o&&n&&n.end()}}}function Bt(t){let e,n,o,r,i,a,l,u,h;const g=t[5].question,m=c(g,t,t[4],Yt);let $=t[1]&&Kt(t);return{c(){e=T("h3"),m&&m.c(),n=C(),o=T("i"),i=C(),$&&$.c(),a=P(),q(o,"class",r="icofont-caret-"+(t[1]?"up":"down")+" svelte-rjyafv"),q(o,"tabindex","0"),q(e,"class","svelte-rjyafv"),S(e,"expanded",t[1])},m(r,s){_(r,e,s),m&&m.m(e,null),b(e,n),b(e,o),_(r,i,s),$&&$.m(r,s),_(r,a,s),l=!0,u||(h=[j(o,"click",M(t[2])),j(o,"keypress",M(t[3])),j(e,"click",t[2]),j(e,"keypress",t[3])],u=!0)},p(t,[n]){m&&m.p&&(!l||16&n)&&d(m,g,t,t[4],l?f(g,t[4],n,Gt):p(t[4]),Yt),(!l||2&n&&r!==(r="icofont-caret-"+(t[1]?"up":"down")+" svelte-rjyafv"))&&q(o,"class",r),(!l||2&n)&&S(e,"expanded",t[1]),t[1]?$?($.p(t,n),2&n&&ut($,1)):($=Kt(t),$.c(),ut($,1),$.m(a.parentNode,a)):$&&(lt(),ft($,1,1,(()=>{$=null})),ct())},i(t){l||(ut(m,t),ut($),l=!0)},o(t){ft(m,t),ft($),l=!1},d(t){t&&E(e),m&&m.d(t),t&&E(i),$&&$.d(t),t&&E(a),u=!1,s(h)}}}function Xt(t,e,n){let o,{$$slots:r={},$$scope:s}=e,i=!1;const a=()=>{n(1,i=!i)};return t.$$set=t=>{"$$scope"in t&&n(4,s=t.$$scope)},t.$$.update=()=>{1&t.$$.dirty&&setTimeout((()=>null==o?void 0:o.scrollIntoView({behavior:"smooth",block:"nearest"})),500)},[o,i,a,t=>{"Enter"===t.key&&a()},s,r,function(t){G[t?"unshift":"push"]((()=>{o=t,n(0,o)}))}]}class Vt extends wt{constructor(t){super(),yt(this,t,Xt,Bt,a,{})}}function Zt(e){let n;return{c(){n=T("h1"),n.innerHTML='<img src="img/logo.svg" alt="poolygotchi" class="svelte-1nv32kw"/>',q(n,"class","svelte-1nv32kw")},m(t,e){_(t,n,e)},p:t,i:t,o:t,d(t){t&&E(n)}}}class Jt extends wt{constructor(t){super(),yt(this,t,null,Zt,a,{})}}function te(e){let n;return{c(){n=T("div"),n.innerHTML='<a href="https://test.poolygotchi.com" target="_blank" rel="noreferrer"><img id="banner" src="img/testnet-banner.svg" alt="poolygotchi testnet live! play and save at test.poolygotchi.com" class="svelte-10r96e9"/></a>',q(n,"id","container"),q(n,"class","svelte-10r96e9")},m(t,e){_(t,n,e)},p:t,i:t,o:t,d(t){t&&E(n)}}}class ee extends wt{constructor(t){super(),yt(this,t,null,te,a,{})}}function ne(e){let n,o,r;return{c(){n=T("p"),n.textContent="No, when you hatch a poolygotchi, it is not minted as an NFT. This is because your poolygotchi is tied to your wallet and personal savings goal, which should not be tradeable.",o=C(),r=T("aside"),r.textContent="However, some environments and alternate poolygotchi species will be collectable as NFTs in the game!",q(n,"class","svelte-vttf4w"),q(r,"class","svelte-vttf4w")},m(t,e){_(t,n,e),_(t,o,e),_(t,r,e)},p:t,d(t){t&&E(n),t&&E(o),t&&E(r)}}}function oe(e){let n;return{c(){n=T("span"),n.textContent="Are Poolygotchis NFTs?",q(n,"slot","question")},m(t,e){_(t,n,e)},p:t,d(t){t&&E(n)}}}function re(e){let n;return{c(){n=T("p"),n.textContent="Yes! You can deposit, withdraw, and claim prizes from your existing PoolTogether balances directly in the Poolygotchi app.",q(n,"class","svelte-vttf4w")},m(t,e){_(t,n,e)},p:t,d(t){t&&E(n)}}}function se(e){let n;return{c(){n=T("span"),n.textContent="Can I manage my PoolTogether deposits through the app?",q(n,"slot","question")},m(t,e){_(t,n,e)},p:t,d(t){t&&E(n)}}}function ie(e){let n;return{c(){n=T("p"),n.textContent="Poolygotchi is currently deployed to the Optimism Goerli test network, and will be deployed to the Optimism mainnet soon.",q(n,"class","svelte-vttf4w")},m(t,e){_(t,n,e)},p:t,d(t){t&&E(n)}}}function ae(e){let n;return{c(){n=T("span"),n.textContent="What networks does the app support?",q(n,"slot","question")},m(t,e){_(t,n,e)},p:t,d(t){t&&E(n)}}}function le(e){let n,o,r;return{c(){n=T("p"),n.textContent="Yes, you can!",o=C(),r=T("p"),r.innerHTML="You will still need to hatch and manage your poolygotchi on Optimism, but you will <strong>NOT</strong> need to move any of your PoolTogether savings over to Optimism to use Poolygotchi.",q(n,"class","svelte-vttf4w"),q(r,"class","svelte-vttf4w")},m(t,e){_(t,n,e),_(t,o,e),_(t,r,e)},p:t,d(t){t&&E(n),t&&E(o),t&&E(r)}}}function ce(e){let n;return{c(){n=T("span"),n.textContent="I don't use PoolTogether on Optimism, can I still use Poolygotchi?",q(n,"slot","question")},m(t,e){_(t,n,e)},p:t,d(t){t&&E(n)}}}function ue(e){let n,o,r;return{c(){n=T("p"),n.textContent="No, your poolygotchi is immortal and cannot die.",o=C(),r=T("p"),r.textContent="However, if you fail to meet your savings goal for more than 3 weeks, your poolygotchi will assume you have abandoned it and will begin to hibernate. You can wake your poolygotchi by catching up with your existing savings goal or setting a new one!",q(n,"class","svelte-vttf4w"),q(r,"class","svelte-vttf4w")},m(t,e){_(t,n,e),_(t,o,e),_(t,r,e)},p:t,d(t){t&&E(n),t&&E(o),t&&E(r)}}}function fe(e){let n;return{c(){n=T("span"),n.textContent="Can my poolygotchi die?",q(n,"slot","question")},m(t,e){_(t,n,e)},p:t,d(t){t&&E(n)}}}function de(t){let e,n,o,r,s,i,a,l,c,u,f,d,p,h,g,m,$,v,y,w,x,k,L,P,j,M,S,N,F,O,z,A,H,U,D;return n=new Jt({}),i=new ee({}),l=new Ht({props:{id:"about"}}),M=new Vt({props:{$$slots:{question:[oe],default:[ne]},$$scope:{ctx:t}}}),N=new Vt({props:{$$slots:{question:[se],default:[re]},$$scope:{ctx:t}}}),O=new Vt({props:{$$slots:{question:[ae],default:[ie]},$$scope:{ctx:t}}}),A=new Vt({props:{$$slots:{question:[ce],default:[le]},$$scope:{ctx:t}}}),U=new Vt({props:{$$slots:{question:[fe],default:[ue]},$$scope:{ctx:t}}}),{c(){e=T("main"),mt(n.$$.fragment),o=C(),r=T("h2"),r.innerHTML='<span>news</span> \n\t\t<i class="icofont-newspaper"></i>',s=C(),mt(i.$$.fragment),a=C(),mt(l.$$.fragment),c=C(),u=T("h2"),u.innerHTML='<span>about</span> \n\t\t<i class="icofont-question-circle"></i>',f=C(),d=T("p"),d.innerHTML='Poolygotchi is a community project that provides a fun, alternative way of interacting with the <a href="https://pooltogether.com" target="_blank" rel="noreferrer">PoolTogether</a> savings protocol.',p=C(),h=T("br"),g=C(),m=T("div"),m.innerHTML='<div class="wrapper svelte-vttf4w"><img src="https://ipfs.io/ipfs/QmUtH7gNUMLFRhUP5fnqUDEiQ8yPh7ML6PEC2KKhEEfQ2F/assets/species/0/crying.gif" alt="crying birb" class="svelte-vttf4w"/> \n\t\t\t<img src="https://ipfs.io/ipfs/QmUtH7gNUMLFRhUP5fnqUDEiQ8yPh7ML6PEC2KKhEEfQ2F/assets/species/0/sad.gif" alt="sad birb" class="svelte-vttf4w"/> \n\t\t\t<img src="https://ipfs.io/ipfs/QmUtH7gNUMLFRhUP5fnqUDEiQ8yPh7ML6PEC2KKhEEfQ2F/assets/species/0/neutral.gif" alt="neutral birb" class="svelte-vttf4w"/> \n\t\t\t<img src="https://ipfs.io/ipfs/QmUtH7gNUMLFRhUP5fnqUDEiQ8yPh7ML6PEC2KKhEEfQ2F/assets/species/0/happy.gif" alt="happy birb" class="svelte-vttf4w"/></div>',$=C(),v=T("p"),v.textContent="When you hatch a poolygotchi, you are making a promise to your new digital pet to meet your savings goal with the PoolTogether protocol. While you are meeting your goal, your poolygotchi will be filled with joy, but if you start falling behind, it will reflect in your poolygotchi's mood!",y=C(),w=T("br"),x=C(),k=T("p"),k.textContent="Hatch a poolygotchi of your own by defining a personal savings goal and making your first deposit onto PoolTogether! Check in on your poolygotchi to check for daily prizes, and keep depositing regularly to keep your pooly healthy!",L=C(),P=T("h2"),P.innerHTML='<span>faq</span> \n\t\t<i class="icofont-support-faq"></i>',j=C(),mt(M.$$.fragment),S=C(),mt(N.$$.fragment),F=C(),mt(O.$$.fragment),z=C(),mt(A.$$.fragment),H=C(),mt(U.$$.fragment),q(r,"class","margins svelte-vttf4w"),q(u,"class","svelte-vttf4w"),q(d,"class","svelte-vttf4w"),q(m,"id","mood-demo"),q(m,"class","svelte-vttf4w"),q(v,"class","svelte-vttf4w"),q(k,"class","svelte-vttf4w"),q(P,"class","svelte-vttf4w"),q(e,"class","margins svelte-vttf4w")},m(t,E){_(t,e,E),$t(n,e,null),b(e,o),b(e,r),b(e,s),$t(i,e,null),b(e,a),$t(l,e,null),b(e,c),b(e,u),b(e,f),b(e,d),b(e,p),b(e,h),b(e,g),b(e,m),b(e,$),b(e,v),b(e,y),b(e,w),b(e,x),b(e,k),b(e,L),b(e,P),b(e,j),$t(M,e,null),b(e,S),$t(N,e,null),b(e,F),$t(O,e,null),b(e,z),$t(A,e,null),b(e,H),$t(U,e,null),D=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),M.$set(n);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),N.$set(o);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),O.$set(r);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),A.$set(s);const i={};1&e&&(i.$$scope={dirty:e,ctx:t}),U.$set(i)},i(t){D||(ut(n.$$.fragment,t),ut(i.$$.fragment,t),ut(l.$$.fragment,t),ut(M.$$.fragment,t),ut(N.$$.fragment,t),ut(O.$$.fragment,t),ut(A.$$.fragment,t),ut(U.$$.fragment,t),D=!0)},o(t){ft(n.$$.fragment,t),ft(i.$$.fragment,t),ft(l.$$.fragment,t),ft(M.$$.fragment,t),ft(N.$$.fragment,t),ft(O.$$.fragment,t),ft(A.$$.fragment,t),ft(U.$$.fragment,t),D=!1},d(t){t&&E(e),vt(n),vt(i),vt(l),vt(M),vt(N),vt(O),vt(A),vt(U)}}}function pe(e){let n;return{c(){n=T("div"),n.innerHTML='<h1 class="text-gradient">Whoops!</h1> \n  <img src="https://ipfs.io/ipfs/bafybeig4piifz3vfoam7qccrp5hfujadtacejbmd5hdqo3to5t2wbr7flm/sad.gif" alt="sad birb" class="svelte-1urjzrs"/> \n  <p>The page you are looking for doesn&#39;t seem to exist!</p>',q(n,"id","container"),q(n,"class","svelte-1urjzrs")},m(t,e){_(t,n,e)},p:t,i:t,o:t,d(t){t&&E(n)}}}function he(t,e,n){let{params:o}=e;return console.log(o),t.$$set=t=>{"params"in t&&n(0,o=t.params)},[o]}const ge={"/":class extends wt{constructor(t){super(),yt(this,t,null,de,a,{})}},"*":class extends wt{constructor(t){super(),yt(this,t,he,pe,a,{params:0})}}};function me(e){let n;return{c(){n=T("footer"),n.innerHTML='<div class="links margins svelte-1lttbr"><a href="https://github.com/trmid/poolygotchi" target="_blank" rel="noreferrer" class="svelte-1lttbr"><img src="img/icons/github.svg" alt="Github" class="svelte-1lttbr"/></a> \n    <a href="https://pooltogether.com/discord" target="_blank" rel="noreferrer" class="svelte-1lttbr"><img src="img/icons/discord.svg" alt="Discord" class="svelte-1lttbr"/></a> \n    <a href="https://docs.pooltogether.com/" target="_blank" rel="noreferrer" class="svelte-1lttbr"><img src="img/icons/pool-together.svg" alt="PoolTogether Docs" class="svelte-1lttbr"/></a></div> \n  <div class="margins attributes svelte-1lttbr"><i>Made by <a href="https://trmid.eth.limo" target="_blank" rel="noreferrer">trmid</a> and the PoolTogether Community.</i> \n    <br/> \n    <i>Artwork by <a href="https://twitter.com/noiamgodzilla" target="_blank" rel="noreferrer">noiamgodzilla</a>.</i></div>',q(n,"class","svelte-1lttbr")},m(t,e){_(t,n,e)},p:t,i:t,o:t,d(t){t&&E(n)}}}class $e extends wt{constructor(t){super(),yt(this,t,null,me,a,{})}}function ve(n){let o,r,a,l=n[1]&&ye(n);return{c(){o=T("div"),l&&l.c(),q(o,"id","container"),q(o,"class","svelte-kvctun")},m(t,e){_(t,o,e),l&&l.m(o,null),a=!0},p(t,e){t[1]?l?2&e&&ut(l,1):(l=ye(t),l.c(),ut(l,1),l.m(o,null)):l&&(l.d(1),l=null)},i(t){a||(ut(l),r&&r.end(1),a=!0)},o(n){r=function(n,o,r){const a={direction:"out"};let l,c=o(n,r,a),u=!0;const f=at;function d(){const{delay:o=0,duration:r=300,easing:i=e,tick:a=t,css:d}=c||dt;d&&(l=H(n,1,0,r,o,i,d));const p=m()+o,h=p+r;Z((()=>st(n,!1,"start"))),w((t=>{if(u){if(t>=h)return a(0,1),st(n,!1,"end"),--f.r||s(f.c),!1;if(t>=p){const e=i((t-p)/r);a(1-e,e)}}return u}))}return f.r+=1,i(c)?rt().then((()=>{c=c(a),d()})):d(),{end(t){t&&c.tick&&c.tick(1,0),u&&(l&&U(n,l),u=!1)}}}(o,Wt,{duration:1e3}),a=!1},d(t){t&&E(o),l&&l.d(),t&&r&&r.end()}}}function ye(n){let o,r,s,a,c;return{c(){var t,e;o=T("img"),s=C(),a=T("div"),a.innerHTML='<svg width="100mm" height="100mm" viewBox="0 0 100 100" version="1.1" id="spinner-svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="svelte-kvctun"><defs id="defs2"><linearGradient id="linearGradient2083"><stop style="stop-color:currentColor;stop-opacity:1;" offset="0" id="stop2079"></stop><stop style="stop-color:currentColor;stop-opacity:0;" offset="1" id="stop2081"></stop></linearGradient><linearGradient xlink:href="#linearGradient2083" id="linearGradient2085" x1="98.117805" y1="70.801521" x2="98.204498" y2="149.59045" gradientUnits="userSpaceOnUse"></linearGradient></defs><g id="spinner-arc"><path style="opacity:1;fill:none;stroke:url(#linearGradient2085);stroke-width:6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.502336;paint-order:stroke fill markers" transform="translate(-41.780995,-67.474064)" id="spinner-path" d="M 63.255444,145.99962 A 40.341225,40.341225 0 0 1 54.510567,102.03615 40.341225,40.341225 0 0 1 91.780998,77.132843"></path><animateTransform attributeName="transform" attributeType="XML" type="rotate" values="0 50 50;360 50 50" dur="2s" repeatCount="indefinite"></animateTransform></g></svg>',q(o,"id","icon"),t=o.src,e=r="favicon.png",l||(l=document.createElement("a")),l.href=e,t!==l.href&&q(o,"src","favicon.png"),q(o,"alt",""),q(o,"class","svelte-kvctun"),q(a,"id","spinner"),q(a,"class","svelte-kvctun")},m(t,e){_(t,o,e),_(t,s,e),_(t,a,e)},p(t,e){n=t},i(o){c||Z((()=>{c=function(n,o,r){const s={direction:"in"};let a,l,c=o(n,r,s),u=!1,f=0;function d(){a&&U(n,a)}function p(){const{delay:o=0,duration:r=300,easing:s=e,tick:i=t,css:p}=c||dt;p&&(a=H(n,0,1,r,o,s,p,f++)),i(0,1);const h=m()+o,g=h+r;l&&l.abort(),u=!0,Z((()=>st(n,!0,"start"))),l=w((t=>{if(u){if(t>=g)return i(1,0),st(n,!0,"end"),d(),u=!1;if(t>=h){const e=s((t-h)/r);i(e,1-e)}}return u}))}let h=!1;return{start(){h||(h=!0,U(n),i(c)?(c=c(s),rt().then(p)):p())},invalidate(){h=!1},end(){u&&(d(),u=!1)}}}(a,Wt,n[3]?{duration:0}:{duration:1e3,delay:200}),c.start()}))},o:t,d(t){t&&E(o),t&&E(s),t&&E(a)}}}function we(t){let e,n,o=t[0]&&Date.now()-t[2]>36e5,r=o&&ve(t);return{c(){r&&r.c(),e=P()},m(t,o){r&&r.m(t,o),_(t,e,o),n=!0},p(t,[n]){1&n&&(o=t[0]&&Date.now()-t[2]>36e5),o?r?(r.p(t,n),1&n&&ut(r,1)):(r=ve(t),r.c(),ut(r,1),r.m(e.parentNode,e)):r&&(lt(),ft(r,1,1,(()=>{r=null})),ct())},i(t){n||(ut(r),n=!0)},o(t){ft(r),n=!1},d(t){r&&r.d(t),t&&E(e)}}}function be(t,e,n){var o;let r=!0,s=!1,i=parseInt(null!==(o=localStorage.getItem("sw:lastLoad"))&&void 0!==o?o:"0");localStorage.setItem("sw:lastLoad",""+Date.now());let a="true"===localStorage.getItem("sw:updated");return localStorage.removeItem("sw:updated"),console.log("[Service Worker]: "+(a?"Reloaded page after update.":"Checking for updates...")),"serviceWorker"in navigator?window.addEventListener("load",(async()=>{if("/"===(location.pathname||"/"))try{const t=await navigator.serviceWorker.register("sw.js");let e=!1;t.addEventListener("updatefound",(()=>{console.log("[Service Worker]: update found!"),e=!0;const n=t.installing;null==n||n.addEventListener("statechange",(()=>{console.log(`[Service Worker]: { state: ${n.state} }`),"activated"===n.state&&(localStorage.setItem("sw:updated","true"),location.reload())}))})),await t.update(),setTimeout((()=>{e||(console.log("[Service Worker]: Ready!"),n(0,r=!1))}),100)}catch(t){console.warn("[Service Worker]: Failed to register..."),console.error(t),n(0,r=!1)}else n(0,r=!1)})):r=!1,R((()=>{n(1,s=!0)})),[r,s,i,a]}class xe extends wt{constructor(t){super(),yt(this,t,be,we,a,{})}}function ke(e){let n,o,r,s,i,a,l,c;return n=new It({}),r=new Ft({props:{routes:ge}}),i=new $e({}),l=new xe({}),{c(){mt(n.$$.fragment),o=C(),mt(r.$$.fragment),s=C(),mt(i.$$.fragment),a=C(),mt(l.$$.fragment)},m(t,e){$t(n,t,e),_(t,o,e),$t(r,t,e),_(t,s,e),$t(i,t,e),_(t,a,e),$t(l,t,e),c=!0},p:t,i(t){c||(ut(n.$$.fragment,t),ut(r.$$.fragment,t),ut(i.$$.fragment,t),ut(l.$$.fragment,t),c=!0)},o(t){ft(n.$$.fragment,t),ft(r.$$.fragment,t),ft(i.$$.fragment,t),ft(l.$$.fragment,t),c=!1},d(t){vt(n,t),t&&E(o),vt(r,t),t&&E(s),vt(i,t),t&&E(a),vt(l,t)}}}return new class extends wt{constructor(t){super(),yt(this,t,null,ke,a,{})}}({target:document.body,props:{}})}();
