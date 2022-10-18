"use strict";(self.webpackChunkoh_my_site=self.webpackChunkoh_my_site||[]).push([[9441],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(n),d=o,m=s["".concat(u,".").concat(d)]||s[d]||f[d]||a;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4877:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={},u="dnf \u5305\u7ba1\u7406\u5668\u5b89\u88c5\u53ca\u914d\u7f6e",l={unversionedId:"CentOS/dnf \u5305\u7ba1\u7406\u5668\u5b89\u88c5\u53ca\u914d\u7f6e",id:"CentOS/dnf \u5305\u7ba1\u7406\u5668\u5b89\u88c5\u53ca\u914d\u7f6e",title:"dnf \u5305\u7ba1\u7406\u5668\u5b89\u88c5\u53ca\u914d\u7f6e",description:"\u65b0\u7248\u7684 yum \u5305\u7ba1\u7406\u5668",source:"@site/docs\\CentOS\\dnf \u5305\u7ba1\u7406\u5668\u5b89\u88c5\u53ca\u914d\u7f6e.md",sourceDirName:"CentOS",slug:"/CentOS/dnf \u5305\u7ba1\u7406\u5668\u5b89\u88c5\u53ca\u914d\u7f6e",permalink:"/CentOS/dnf \u5305\u7ba1\u7406\u5668\u5b89\u88c5\u53ca\u914d\u7f6e",draft:!1,editUrl:"https://github.com/CodeBoyDD/CodeBoyDD.github.io/tree/master/docs/CentOS/dnf \u5305\u7ba1\u7406\u5668\u5b89\u88c5\u53ca\u914d\u7f6e.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LNMP \u5f00\u53d1\u73af\u5883\u642d\u5efa",permalink:"/CentOS/LNMP\u5f00\u53d1\u73af\u5883\u642d\u5efa"},next:{title:"ranger \u5b89\u88c5\u53ca\u914d\u7f6e",permalink:"/CentOS/ranger \u5b89\u88c5\u53ca\u914d\u7f6e"}},p={},f=[],s={toc:f};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dnf-\u5305\u7ba1\u7406\u5668\u5b89\u88c5\u53ca\u914d\u7f6e"},"dnf \u5305\u7ba1\u7406\u5668\u5b89\u88c5\u53ca\u914d\u7f6e"),(0,a.kt)("p",null,"\u65b0\u7248\u7684 yum \u5305\u7ba1\u7406\u5668"),(0,a.kt)("p",null,"\u5b89\u88c5\u5e76\u542f\u7528 epel-release \u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yum -y install epel-release\n")),(0,a.kt)("p",null,"\u7136\u540e\u5b89\u88c5 dnf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yum install dnf\n")))}d.isMDXComponent=!0}}]);