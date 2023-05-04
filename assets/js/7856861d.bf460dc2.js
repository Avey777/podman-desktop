"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8492],{5318:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var i=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,k=m["".concat(c,".").concat(u)]||m[u]||A[u]||a;return n?i.createElement(k,o(o({ref:t},l),{},{components:n})):i.createElement(k,o({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>A,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(5773),r=(n(7378),n(5318));const a={sidebar_position:2,title:"Installing the `kind` CLI",description:"Kind is one way to get Kubernetes running on your workstation.",keywords:["podman desktop","podman","containers","migrating","kubernetes","kind"],tags:["migrating-to-kubernetes","kind"]},o="Installing the kind CLI",s={unversionedId:"kubernetes/kind/installing-kind",id:"kubernetes/kind/installing-kind",title:"Installing the `kind` CLI",description:"Kind is one way to get Kubernetes running on your workstation.",source:"@site/docs/kubernetes/kind/installing-kind.md",sourceDirName:"kubernetes/kind",slug:"/kubernetes/kind/installing-kind",permalink:"/docs/kubernetes/kind/installing-kind",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/kubernetes/kind/installing-kind.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"},{label:"kind",permalink:"/docs/tags/kind"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Installing the `kind` CLI",description:"Kind is one way to get Kubernetes running on your workstation.",keywords:["podman desktop","podman","containers","migrating","kubernetes","kind"],tags:["migrating-to-kubernetes","kind"]},sidebar:"mySidebar",previous:{title:"Kind",permalink:"/docs/kubernetes/kind/"},next:{title:"Configuring Podman for Kind",permalink:"/docs/kubernetes/kind/configuring-podman-for-kind-on-windows"}},c={},d=[{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}],l={toc:d};function A(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installing-the-kind-cli"},"Installing the ",(0,r.kt)("inlineCode",{parentName:"h1"},"kind")," CLI"),(0,r.kt)("h4",{id:"procedure"},"Procedure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the status bar, click on ",(0,r.kt)("strong",{parentName:"li"},"Kind"),", and follow the prompts.\n",(0,r.kt)("img",{alt:"Kind in the status bar",src:n(9429).Z,width:"85",height:"24"}))),(0,r.kt)("h4",{id:"verification"},"Verification"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The status bar doesn't display ",(0,r.kt)("strong",{parentName:"p"},"Kind"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources")," contain a ",(0,r.kt)("strong",{parentName:"p"},"Kind")," tile.\n",(0,r.kt)("img",{alt:"Kind resource tile",src:n(4905).Z,width:"200",height:"131"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can run the ",(0,r.kt)("inlineCode",{parentName:"p"},"kind")," CLI:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ kind get clusters\n")))))}A.isMDXComponent=!0},4905:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"},9429:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAAYCAYAAACLM7HoAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAmdEVYdENyZWF0aW9uIFRpbWUAbWFyIDExIGF2ciAyMDIzIDEyOjU3OjA3TJhLoAAABItJREFUWIXtmX9IG2cYxz8dyx1oEywxgjv/iBYS0nYjweJBLcWM6Q1qB7UOmdWNywYeLESQ2nVUB5rJgl0LbTdQOuofq2HQH4PVQWWDbkOhg46WMQUDzv5RO1gqFWMLufyx/aGdtpqql4uzxe9/9z7v+z5fvvfc8zzve1u8JQf/YROm4qX/m8CLCOOiChJK+CPOnQ9S67WYSOn5x8tGF7rUIB31bkRgd1GKiepeftNNZPYcw1ikSn5C2pygAGz3E1KdJlFab+RQ6HFiN3FHA6LmUNHcQLlt8ZjAa1ojB6TMyAhyA+euBlGsT1vy2NPWyTf9TVRIUFjTzg+3PkP1ZOZvzmcjX10O4F/i0zjWLKrgrSN0aNtSg81HqLmMrZmwsRXg3l6AXVw8mEdFuJNThywMnvianyYhcX+CsdE73JvJxFn2sEZRJWrbFIrTWPMPNaCZWrQcVHR3Eqmc5oz6CX23HwEw+8sFgod7GZw00ZWJWJOo9v0NaD5h7mF8kA/kAG/IAeq6x+ZnFFHbpuA0hZoD5XSYyL44n6thordTCyarRKm8kAcFyUWpx4GAhUJvGcr+ckpLctLsm4NTLkOp9OLKz07Xsvrqb/USOiqzkHp09PvTTAFCcmGa6KsjVDNEy5Vp46xECeV0Ox3eCbrqT3H1z9QTZsF3kEjPNs54w1zVwa0G+VKO0R8vxm/TSdgKcG8XGOuJ8OGJEWYfr/NUEekJ4Lc9ZCL+EKtD4M6NBwiklnLIAKuMVAsurRGlaNGQLRfrfNBaHcIiQy7+5gb2GE38Yh7+7nY6vDG61KWCpl1WJMGZdmpqP+a9Ko13u+9SrAZ4u2R+grWM4z0B3KO91MnvU1MVolKO8J2+Dav4zK3XjNWJKvlprS/mCd9i7nzUWrDacp+cX7SXkOZCwAhysTtyIamTSK4+gpLjw1yaz7mQItY3wE0kXvXMfeL26moUcYiu5uvEHvfT+h0Go7eYSi67pWGsQtQclKN17LY9NSwK/4kmik/nJgF3fQO1JawdyUkuaRH6Z2Qi0RYUw23aQxIzIIgAFtw+CUZHuLkOB5QVRRXkRpqql2mhxJ1o0Xa+ON/OkcrlWqxdqK3lxprqmRHOqhH64z46oi0cKDGvoBj7etaGFUR1crjVv3wLNTPBpU9PEtR66bvxYNnV+VWNNMkGBUmMcFYN0xv3cbwvU2FT/H4jhu7by5sZHlBWg2eKWljTiOpL827Hh7l2+xHokwwOxFg+LRXwVlsdLqPsEjH61DC9d3dxPHqMWo9xYWcHvuXi3Z2EeppQPHPt1lZPOaHWvbyyboXKWoZ21EfaIr6jCm2/C6enjCZ1F+l4iTsUQu84jDN8LOy4kyN9x6g3Kqwe46wW4WLcR8fABW6NX+HHHgV+/YN7JheqLekuqQU5yPfR18k3wUny55PsCwyzUS6xBGsedpvO1OSjrHBKG6n66BDXx01wmfyb65dHNoygAHpimr+yJCg8I1LnYMEu5WEVDdbMpE5iZpqphLknlo2OFY6pKaYm40ytD5cXBpv/qLKATVGzgE1Rs4B/Aei/SnFKSWx/AAAAAElFTkSuQmCC"}}]);