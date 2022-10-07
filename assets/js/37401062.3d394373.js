"use strict";(self.webpackChunkoh_my_site=self.webpackChunkoh_my_site||[]).push([[984],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return h}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(t),h=o,m=f["".concat(a,".").concat(h)]||f[h]||p[h]||i;return t?r.createElement(m,c(c({ref:n},s),{},{components:t})):r.createElement(m,c({ref:n},s))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=f;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<i;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9703:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),c=["components"],l={},a="\u67e5\u8be2 Linux \u53d1\u884c\u7248\u672c",u={unversionedId:"Shell/\u67e5\u8be2 Linux \u53d1\u884c\u7248\u672c",id:"Shell/\u67e5\u8be2 Linux \u53d1\u884c\u7248\u672c",title:"\u67e5\u8be2 Linux \u53d1\u884c\u7248\u672c",description:"\u7528\u4e8e\u67e5\u8be2 Linux \u53d1\u884c\u7248\u672c\u7684 Shell \u811a\u672c",source:"@site/docs\\Shell\\\u67e5\u8be2 Linux \u53d1\u884c\u7248\u672c.md",sourceDirName:"Shell",slug:"/Shell/\u67e5\u8be2 Linux \u53d1\u884c\u7248\u672c",permalink:"/Shell/\u67e5\u8be2 Linux \u53d1\u884c\u7248\u672c",draft:!1,editUrl:"https://github.com/CodeBoyDD/CodeBoyDD.github.io/tree/master/docs/Shell/\u67e5\u8be2 Linux \u53d1\u884c\u7248\u672c.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Shell",permalink:"/category/shell"}},s={},p=[],f={toc:p};function h(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u67e5\u8be2-linux-\u53d1\u884c\u7248\u672c"},"\u67e5\u8be2 Linux \u53d1\u884c\u7248\u672c"),(0,i.kt)("p",null,"\u7528\u4e8e\u67e5\u8be2 Linux \u53d1\u884c\u7248\u672c\u7684 Shell \u811a\u672c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"#!/bin/bash\n# \u539f\u7406\u662f\uff1a cat /etc/os-release\nsource /etc/os-release\n\necho $ID\necho $NAME\n")),(0,i.kt)("p",null,"\u8fd8\u6709\u4e00\u4e2a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\nif [[ "$OSTYPE" == "linux-gnu" ]]; then\n    echo "\u5f53\u524d\u64cd\u4f5c\u7cfb\u7edf: Linux"\n    if [ -f /etc/redhat-release ]; then\n        echo "\u5f53\u524d\u53d1\u884c\u7248\u672c: Redhat Linux"\n    elif [ -f /etc/arch-release ]; then\n        echo "\u5f53\u524d\u53d1\u884c\u7248\u672c: Arch Linux"\n    elif [ -f /etc/debian_version ]; then\n        echo "\u5f53\u524d\u53d1\u884c\u7248\u672c: Ubuntu/Debian Linux"\n    else\n        echo "\u672a\u77e5\u53d1\u884c\u7248\u672c"\n    fi\nelif [[ "$OSTYPE" == "darwin"* ]]; then\n    echo "\u5f53\u524d\u64cd\u4f5c\u7cfb\u7edf: Mac OS (Darwin)"\nelse\n    echo "\u672a\u77e5\u64cd\u4f5c\u7cfb\u7edf"\nfi\n')))}h.isMDXComponent=!0}}]);