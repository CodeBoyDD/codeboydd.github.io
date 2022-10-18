"use strict";(self.webpackChunkoh_my_site=self.webpackChunkoh_my_site||[]).push([[1881],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6145:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={},u="SSH \u957f\u65f6\u95f4\u672a\u64cd\u4f5c\u65ad\u5f00\u95ee\u9898",l={unversionedId:"Linux/SSH \u957f\u65f6\u95f4\u672a\u64cd\u4f5c\u65ad\u5f00\u95ee\u9898",id:"Linux/SSH \u957f\u65f6\u95f4\u672a\u64cd\u4f5c\u65ad\u5f00\u95ee\u9898",title:"SSH \u957f\u65f6\u95f4\u672a\u64cd\u4f5c\u65ad\u5f00\u95ee\u9898",description:"\u7f16\u8f91 sshd_config \u914d\u7f6e\u6587\u4ef6",source:"@site/docs\\Linux\\SSH \u957f\u65f6\u95f4\u672a\u64cd\u4f5c\u65ad\u5f00\u95ee\u9898.md",sourceDirName:"Linux",slug:"/Linux/SSH \u957f\u65f6\u95f4\u672a\u64cd\u4f5c\u65ad\u5f00\u95ee\u9898",permalink:"/Linux/SSH \u957f\u65f6\u95f4\u672a\u64cd\u4f5c\u65ad\u5f00\u95ee\u9898",draft:!1,editUrl:"https://github.com/CodeBoyDD/CodeBoyDD.github.io/tree/master/docs/Linux/SSH \u957f\u65f6\u95f4\u672a\u64cd\u4f5c\u65ad\u5f00\u95ee\u9898.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SSH \u65e0\u6cd5\u4f7f\u7528 root \u7528\u6237\u767b\u5f55",permalink:"/Linux/SSH \u65e0\u6cd5\u4f7f\u7528 root \u7528\u6237\u767b\u5f55"},next:{title:"Shell\u811a\u672c\u5b66\u4e60",permalink:"/Linux/Shell\u811a\u672c\u5b66\u4e60"}},s={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ssh-\u957f\u65f6\u95f4\u672a\u64cd\u4f5c\u65ad\u5f00\u95ee\u9898"},"SSH \u957f\u65f6\u95f4\u672a\u64cd\u4f5c\u65ad\u5f00\u95ee\u9898"),(0,i.kt)("p",null,"\u7f16\u8f91 sshd_config \u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"vim /etc/ssh/sshd_config\n")),(0,i.kt)("p",null,"\u6dfb\u52a0\u5373\u53ef"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5ba2\u6237\u7aef\u6bcf\u9694\u591a\u5c11\u79d2\u5411\u670d\u52a1\u53d1\u9001\u4e00\u4e2a\u5fc3\u8df3\u6570\u636e\nClientAliveInterval 30\n# \u5ba2\u6237\u7aef\u591a\u5c11\u79d2\u6ca1\u6709\u76f8\u5e94\uff0c\u670d\u52a1\u5668\u81ea\u52a8\u65ad\u6389\u8fde\u63a5\nClientAliveCountMax 86400\n")),(0,i.kt)("p",null,"\u91cd\u542f ssh \u670d\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"service sshd restart\n")))}m.isMDXComponent=!0}}]);