"use strict";(self.webpackChunkoh_my_site=self.webpackChunkoh_my_site||[]).push([[837],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6662:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const i={},a="Nginx \u914d\u7f6e FTP \u670d\u52a1\u5668",l={unversionedId:"Linux/Nginx \u914d\u7f6e FTP \u670d\u52a1\u5668",id:"Linux/Nginx \u914d\u7f6e FTP \u670d\u52a1\u5668",title:"Nginx \u914d\u7f6e FTP \u670d\u52a1\u5668",description:"Nginx \u914d\u7f6e",source:"@site/docs/Linux/Nginx \u914d\u7f6e FTP \u670d\u52a1\u5668.md",sourceDirName:"Linux",slug:"/Linux/Nginx \u914d\u7f6e FTP \u670d\u52a1\u5668",permalink:"/Linux/Nginx \u914d\u7f6e FTP \u670d\u52a1\u5668",draft:!1,editUrl:"https://github.com/CodeBoyDD/CodeBoyDD.github.io/tree/master/docs/Linux/Nginx \u914d\u7f6e FTP \u670d\u52a1\u5668.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CentOS \u4e0b LNMP \u5f00\u53d1\u73af\u5883\u642d\u5efa",permalink:"/Linux/CentOS\u5f00\u53d1\u73af\u5883\u642d\u5efa"},next:{title:"SSH \u65e0\u6cd5\u4f7f\u7528 root \u7528\u6237\u767b\u5f55",permalink:"/Linux/SSH \u65e0\u6cd5\u4f7f\u7528 root \u7528\u6237\u767b\u5f55"}},u={},c=[{value:"Nginx \u914d\u7f6e",id:"nginx-\u914d\u7f6e",level:3},{value:"\u767b\u5f55\u9a8c\u8bc1",id:"\u767b\u5f55\u9a8c\u8bc1",level:3}],s={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nginx-\u914d\u7f6e-ftp-\u670d\u52a1\u5668"},"Nginx \u914d\u7f6e FTP \u670d\u52a1\u5668"),(0,o.kt)("h3",{id:"nginx-\u914d\u7f6e"},"Nginx \u914d\u7f6e"),(0,o.kt)("p",null,"\u7f16\u5199 Nginx \u914d\u7f6e\u6587\u4ef6 vhosts/file.conf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx",metastring:"title=vhosts/file.conf showLineNumbers",title:"vhosts/file.conf",showLineNumbers:!0},'autoindex on;           # \u663e\u793a\u76ee\u5f55\nautoindex_exact_size on;# \u663e\u793a\u6587\u4ef6\u5927\u5c0f\nautoindex_localtime on; # \u663e\u793a\u6587\u4ef6\u65f6\u95f4\n\nserver {\n    listen       8080 default_server;\n    listen       [::]:8080 default_server;\n    server_name  _;\n    charset utf-8;                  # \u4e2d\u6587\u540d\u7684\u6587\u4ef6\u4e0d\u4e71\u7801\n    root         /www/file;         # \u4fdd\u5b58\u6587\u4ef6\u7684\u8def\u5f84\n    autoindex_exact_size off;       # \u663e\u793a\u6587\u4ef6\u5927\u5c0f\n    autoindex_localtime on;         # \u663e\u793a\u6587\u4ef6\u65f6\u95f4\n    \n\n    location / {\n        root /www/file;\n        auth_basic "\u9700\u8981\u8d26\u53f7\u548c\u5bc6\u7801";       # \u9a8c\u8bc1\u7528\u6237\u540d\u5bc6\u7801\u65f6\u7684\u8bf4\u660e\u6587\u5b57\n        auth_basic_user_file pwd.db;    # \u4ee5nginx.conf\u6240\u5728\u76ee\u5f55\u7684\u76f8\u5bf9\u8def\u5f84\n    }\n\n}\n')),(0,o.kt)("h3",{id:"\u767b\u5f55\u9a8c\u8bc1"},"\u767b\u5f55\u9a8c\u8bc1"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528openssl\u52a0\u5bc6\u5bc6\u7801")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"openssl -1")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"touch pwd.db")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u7528\u6237\u540d:\u5bc6\u7801")),(0,o.kt)("p",null,"\u5c06pwd.db\u6587\u4ef6\u653e\u5230nginx\u7684\u914d\u7f6e\u76ee\u5f55"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'auth_basic "\u9700\u8981\u9a8c\u8bc1\u7528\u6237\u540d\u548c\u5bc6\u7801";    # \u9a8c\u8bc1\u7528\u6237\u540d\u5bc6\u7801\u65f6\u7684\u8bf4\u660e\u6587\u5b57\nauth_basic_user_file pwd.db;    # \u4ee5nginx.conf\u6240\u5728\u76ee\u5f55\u7684\u76f8\u5bf9\u8def\u5f84\n')))}p.isMDXComponent=!0}}]);