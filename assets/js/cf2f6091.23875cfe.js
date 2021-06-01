(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6971],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return u},mdx:function(){return g},useMDXComponents:function(){return m},withMDXComponents:function(){return l}});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),l=function(e){return function(n){var t=m(n.components);return r.createElement(e,i({},n,{components:t}))}},m=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=m(t),u=o,f=l["".concat(a,".").concat(u)]||l[u]||c[u]||i;return t?r.createElement(f,s(s({ref:n},d),{},{components:t})):r.createElement(f,s({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},37869:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var r=t(22122),o=t(19756),i=(t(2784),t(3905)),a={title:"getCompositions()",id:"get-compositions"},s={unversionedId:"get-compositions",id:"get-compositions",isDocsHomePage:!1,title:"getCompositions()",description:"Part of the @remotion/renderer package.",source:"@site/docs/get-compositions.md",sourceDirName:".",slug:"/get-compositions",permalink:"/docs/get-compositions",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/get-compositions.md",version:"current",frontMatter:{title:"getCompositions()",id:"get-compositions"},sidebar:"someSidebar",previous:{title:"useVideoTexture()",permalink:"/docs/use-video-texture"},next:{title:"renderFrames()",permalink:"/docs/render-frames"}},p=[{value:"Arguments",id:"arguments",children:[{value:"<code>bundle</code>",id:"bundle",children:[]},{value:"<code>options?</code>",id:"options",children:[]}]},{value:"Return value",id:"return-value",children:[]},{value:"See also",id:"see-also",children:[]}],d={toc:p};function l(e){var n=e.components,t=(0,o.default)(e,["components"]);return(0,i.mdx)("wrapper",(0,r.default)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Part of the ",(0,i.mdx)("inlineCode",{parentName:"em"},"@remotion/renderer")," package.")),(0,i.mdx)("p",null,"Gets the compositions defined in a Remotion project based on a webpack bundle. Spins up a browser with Puppeteer and evaluates the Remotion root."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"const getCompositions: (bundle: string, options: {\n  inputProps?: object | null;\n  browserInstance?: puppeteer.Browser;\n}) => Promise<TComposition[]>\n")),(0,i.mdx)("h2",{id:"arguments"},"Arguments"),(0,i.mdx)("h3",{id:"bundle"},(0,i.mdx)("inlineCode",{parentName:"h3"},"bundle")),(0,i.mdx)("p",null,"A string pointing to a Webpack bundle generated by ",(0,i.mdx)("inlineCode",{parentName:"p"},"@remotion/bundler"),"."),(0,i.mdx)("h3",{id:"options"},(0,i.mdx)("inlineCode",{parentName:"h3"},"options?")),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"optional")),(0,i.mdx)("p",null,"An object containing one or more of the following options:"),(0,i.mdx)("h4",{id:"inputprops"},(0,i.mdx)("inlineCode",{parentName:"h4"},"inputProps?")),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"optional")),(0,i.mdx)("p",null,"Define custom props that can be retrieved using ",(0,i.mdx)("a",{parentName:"p",href:"/docs/get-input-props"},(0,i.mdx)("inlineCode",{parentName:"a"},"getInputProps()"))," at runtime. Useful for ",(0,i.mdx)("a",{parentName:"p",href:"/docs/dynamic-metadata"},"setting a dynamic duration or dimensions")," for your video."),(0,i.mdx)("h4",{id:"browserinstance"},(0,i.mdx)("inlineCode",{parentName:"h4"},"browserInstance?")),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"optional")),(0,i.mdx)("p",null,"An already open Puppeteer ",(0,i.mdx)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=main&show=api-class-browser"},(0,i.mdx)("inlineCode",{parentName:"a"},"Browser"))," instance. Reusing a browser across multiple function calls can speed up the rendering process. You are responsible for opening and closing the browser yourself. If you don't specify this option, a new browser will be opened and closed at the end."),(0,i.mdx)("h2",{id:"return-value"},"Return value"),(0,i.mdx)("p",null,"Returns a promise that resolves to an array of available compositions. Example value:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "HelloWorld",\n    "width": 1920,\n    "height": 1080,\n    "fps": 30\n  },\n  {\n    "id": "Title",\n    "width": 1080,\n    "height": 1080,\n    "fps": 30\n  }\n]\n')),(0,i.mdx)("h2",{id:"see-also"},"See also"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/ssr"},"Server-Side rendering")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/bundle"},"bundle()")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/render-frames"},"renderFrames()")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/stitch-frames-to-video"},"stitchFramesToVideo()"))))}l.isMDXComponent=!0}}]);