"use strict";(self.webpackChunkoh_my_site=self.webpackChunkoh_my_site||[]).push([[566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a="Git \u914d\u7f6e",s={unversionedId:"Windows/Git \u914d\u7f6e",id:"Windows/Git \u914d\u7f6e",title:"Git \u914d\u7f6e",description:"Windows \u4e0a\u914d\u7f6e Git \u53ca\u4e00\u4e9b\u7ec6\u8282",source:"@site/docs/Windows/Git \u914d\u7f6e.md",sourceDirName:"Windows",slug:"/Windows/Git \u914d\u7f6e",permalink:"/Windows/Git \u914d\u7f6e",draft:!1,editUrl:"https://github.com/CodeBoyDD/CodeBoyDD.github.io/tree/master/docs/Windows/Git \u914d\u7f6e.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Windows",permalink:"/category/windows"},next:{title:"GitHub \u52a0\u901f",permalink:"/Windows/GitHub \u52a0\u901f"}},l={},c=[{value:"\u8bbe\u7f6e\u7528\u6237\u540d\u548c\u767b\u5f55\u90ae\u7bb1",id:"\u8bbe\u7f6e\u7528\u6237\u540d\u548c\u767b\u5f55\u90ae\u7bb1",level:2},{value:"\u751f\u6210SSH\u5bc6\u94a5",id:"\u751f\u6210ssh\u5bc6\u94a5",level:2},{value:"\u62c9\u53d6\u516c\u53f8\u81ea\u5efa\u7684 Git \u4ed3\u5e93 SSH \u62a5\u9519\u89e3\u51b3",id:"\u62c9\u53d6\u516c\u53f8\u81ea\u5efa\u7684-git-\u4ed3\u5e93-ssh-\u62a5\u9519\u89e3\u51b3",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"git-\u914d\u7f6e"},"Git \u914d\u7f6e"),(0,o.kt)("p",null,"Windows \u4e0a\u914d\u7f6e Git \u53ca\u4e00\u4e9b\u7ec6\u8282"),(0,o.kt)("h2",{id:"\u8bbe\u7f6e\u7528\u6237\u540d\u548c\u767b\u5f55\u90ae\u7bb1"},"\u8bbe\u7f6e\u7528\u6237\u540d\u548c\u767b\u5f55\u90ae\u7bb1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u7528\u6237\u540d / email \u6309\u9700\u586b\u5199\ngit config --global user.name 'XieSenYuan'\ngit config --global user.email '2568951696@qq.com'\n")),(0,o.kt)("h2",{id:"\u751f\u6210ssh\u5bc6\u94a5"},"\u751f\u6210SSH\u5bc6\u94a5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# \u4e0d\u5efa\u8bae\u751f\u6210\u5e26\u7528\u6237\u540d\u548c\u90ae\u7bb1\u7684\u5bc6\u94a5,\u8fd9\u6837\u5c31\u76f8\u5f53\u4e8e\u5bc6\u94a5\u7ed1\u5b9a\u4e86\u7528\u6237\nssh-keygen -t rsa -C "XieSenYuan@2568951696@qq.com"\n\n# \u8fd9\u6837\u76f4\u63a5\u751f\u6210\u5bc6\u94a5\u5373\u53ef\nssh-keygen\n\n# id_rsa        \u79c1\u94a5\u6587\u4ef6\n# id_rsa.pub    \u516c\u94a5\u6587\u4ef6\n')),(0,o.kt)("h2",{id:"\u62c9\u53d6\u516c\u53f8\u81ea\u5efa\u7684-git-\u4ed3\u5e93-ssh-\u62a5\u9519\u89e3\u51b3"},"\u62c9\u53d6\u516c\u53f8\u81ea\u5efa\u7684 Git \u4ed3\u5e93 SSH \u62a5\u9519\u89e3\u51b3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# .ssh \u76ee\u5f55\u4e0b\u6dfb\u52a0 config \u6587\u4ef6\u5e76\u5199\u5165\u4ee5\u4e0b\nHost *\nHostkeyAlgorithms +ssh-rsa\nPubkeyAcceptedKeyTypes +ssh-rsa\n")))}p.isMDXComponent=!0}}]);