(self.webpackChunkreact_waterfall_flow=self.webpackChunkreact_waterfall_flow||[]).push([[904],{11171:function(a,o,e){"use strict";var g;e.r(o),e.d(o,{demos:function(){return $}});var E=e(27424),L=e.n(E),F=e(861),T=e.n(F),W=e(17061),i=e.n(W),K=e(17156),I=e.n(K),l=e(67294),X=e(68537),k=e(96666),U=e(94933),$={"docs-demo-0":{component:l.memo(l.lazy(I()(i()().mark(function D(){var h,w,v,f;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,96666));case 2:return h=r.sent,w=h.WaterfallFlow,r.next=6,Promise.resolve().then(e.bind(e,94933));case 6:return v=r.sent,f=v.mockData,r.abrupt("return",{default:function(){var t=function(u,x){var d=u.width,c=u.height;return l.createElement("div",{key:x,style:{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",background:"#"+Math.floor(Math.random()*16777215).toString(16).padEnd(6,"0"),width:d||220,height:c,boxSizing:"border-box"}},Math.random())},C=function(){return l.createElement("div",null,"\u7A7A\u7A7A\u5982\u4E5F")};return l.createElement(w,{renderChild:t,data:f,gap:8})}});case 9:case"end":return r.stop()}},D)})))),asset:{type:"BLOCK",id:"docs-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { WaterfallFlow } from 'react-waterfall-flow';\r
import { mockData } from './demo/mock/index.ts';\r
\r
export default () => {\r
  const renderChild = (item, index) => {\r
    const { width, height } = item;\r
    return (\r
      <div\r
        key={index}\r
        style={{\r
          position: 'absolute',\r
          display: 'flex',\r
          justifyContent: 'center',\r
          alignItems: 'center',\r
          background:\r
            '#' +\r
            Math.floor(Math.random() * 0xffffff)\r
              .toString(16)\r
              .padEnd(6, '0'),\r
          width: width || 220,\r
          height: height,\r
          boxSizing: 'border-box',\r
        }}\r
      >\r
        {Math.random()}\r
      </div>\r
    );\r
  };\r
\r
  const renderEmpty = () => {\r
    return <div>\u7A7A\u7A7A\u5982\u4E5F</div>;\r
  };\r
\r
  return <WaterfallFlow renderChild={renderChild} data={mockData} gap={8} />;\r
};`},"react-waterfall-flow":{type:"NPM",value:"0.0.1"},"./demo/mock/index.ts":{type:"FILE",value:e(44053).Z}},entry:"index.jsx"},context:{"./demo/mock/index.ts":U,"react-waterfall-flow":k,"C:/Users/19564/Desktop/Project/react-waterfall-flow/docs/demo/mock/index.ts":U},renderOpts:{compile:function(){var D=I()(i()().mark(function w(){var v,f=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(19).then(e.bind(e,4019));case 2:return r.abrupt("return",(v=r.sent).default.apply(v,f));case 3:case"end":return r.stop()}},w)}));function h(){return D.apply(this,arguments)}return h}()}},"docs-demo-1":{component:l.memo(l.lazy(I()(i()().mark(function D(){var h,w,v,f,n,r;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,96666));case 2:return h=t.sent,w=h.WaterfallFlow,t.next=6,Promise.resolve().then(e.bind(e,94933));case 6:return v=t.sent,f=v.mockData,t.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return n=t.sent,r=n.useState,t.abrupt("return",{default:function(){var m=function(b,A){var p=b.width,y=b.height;return l.createElement("div",{key:A,style:{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",background:"#"+Math.floor(Math.random()*16777215).toString(16).padEnd(6,"0"),width:p||220,height:y,boxSizing:"border-box"}},Math.random())},u=function(){return l.createElement("div",null,"\u7A7A\u7A7A\u5982\u4E5F")},x=function(){return l.createElement("div",null,"\u5DF2\u7ECF\u89C1\u5E95\u4E86")},d=function(){return l.createElement("div",null,"\u52A0\u8F7D\u4E2D...")},c=function(){var M=I()(i()().mark(function b(){return i()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",new Promise(function(y){setTimeout(function(){y(f)},1e3)}));case 1:case"end":return p.stop()}},b)}));return function(){return M.apply(this,arguments)}}(),N=function(){var M=I()(i()().mark(function b(){var A;return i()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,c();case 2:A=y.sent,Z(function(R){return[].concat(T()(R),T()(A))});case 4:case"end":return y.stop()}},b)}));return function(){return M.apply(this,arguments)}}(),O=r(f),j=L()(O,2),G=j[0],Z=j[1];return l.createElement(w,{renderChild:m,data:G,gap:2,lazyLoading:!0,callback:N,renderEnd:x,renderLoading:d,totalNumber:25})}});case 13:case"end":return t.stop()}},D)})))),asset:{type:"BLOCK",id:"docs-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { WaterfallFlow } from 'react-waterfall-flow';\r
import { mockData } from './demo/mock/index.ts';\r
import { useState } from 'react';\r
\r
export default () => {\r
  const renderChild = (item, index) => {\r
    const { width, height } = item;\r
    return (\r
      <div\r
        key={index}\r
        style={{\r
          position: 'absolute',\r
          display: 'flex',\r
          justifyContent: 'center',\r
          alignItems: 'center',\r
          background:\r
            '#' +\r
            Math.floor(Math.random() * 0xffffff)\r
              .toString(16)\r
              .padEnd(6, '0'),\r
          width: width || 220,\r
          height: height,\r
          boxSizing: 'border-box',\r
        }}\r
      >\r
        {Math.random()}\r
      </div>\r
    );\r
  };\r
\r
  const renderEmpty = () => {\r
    return <div>\u7A7A\u7A7A\u5982\u4E5F</div>;\r
  };\r
\r
  const renderEnd = () => {\r
    return <div>\u5DF2\u7ECF\u89C1\u5E95\u4E86</div>;\r
  };\r
\r
  const renderLoading = () => {\r
    return <div>\u52A0\u8F7D\u4E2D...</div>;\r
  };\r
\r
  const request = async () => {\r
    return new Promise((resolve) => {\r
      setTimeout(() => {\r
        resolve(mockData);\r
      }, 1000);\r
    });\r
  };\r
\r
  const callback =async ()=>{\r
    const data =await request();\r
    setData(curr=>([...curr,...data]))\r
  }\r
\r
  const [data, setData] = useState(mockData);\r
  return (\r
    <WaterfallFlow\r
      renderChild={renderChild}\r
      data={data}\r
      gap={2}\r
      lazyLoading={true}\r
      callback={callback}\r
      renderEnd={renderEnd}\r
      renderLoading={renderLoading}\r
      totalNumber={25}\r
    />\r
  );\r
};`},"react-waterfall-flow":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"},"./demo/mock/index.ts":{type:"FILE",value:e(44053).Z}},entry:"index.jsx"},context:{"./demo/mock/index.ts":U,"react-waterfall-flow":k,react:g||(g=e.t(l,2)),"C:/Users/19564/Desktop/Project/react-waterfall-flow/docs/demo/mock/index.ts":U},renderOpts:{compile:function(){var D=I()(i()().mark(function w(){var v,f=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(19).then(e.bind(e,4019));case 2:return r.abrupt("return",(v=r.sent).default.apply(v,f));case 3:case"end":return r.stop()}},w)}));function h(){return D.apply(this,arguments)}return h}()}}}},94933:function(a,o,e){"use strict";e.r(o),e.d(o,{mockData:function(){return g}});var g=Array(15).fill(0).map(function(E){return{width:200,height:Math.floor(Math.random()*150+50)}})},96666:function(a,o,e){"use strict";e.r(o),e.d(o,{CustomLoading:function(){return $},WaterfallFlow:function(){return k},useIntersectionObserver:function(){return f}});var g=e(42122),E=e.n(g),L=e(27424),F=e.n(L),T=e(18698),W=e.n(T),i=e(861),K=e.n(i),I=e(67294),l=e(85893),X=I.memo(function(n){var r=n.data,s=n.itemWidth,t=s===void 0?220:s,C=n.renderEmpty,m=n.renderChild,u=n.style,x=n.rootClassName,d=n.gap,c=n.lazyLoading,N=n.renderEnd,O=n.renderLoading,j=n.callback,G=n.totalNumber,Z=n.observerOptions,M=f(j,Z),b=M.ob,A=(0,I.useRef)();return r!=null&&r.length?((0,I.useLayoutEffect)(function(){if(r!=null&&r.length){var p=function(){var R=A.current,q=R==null?void 0:R.offsetWidth,ee=Math.floor(q/t),S=Array(ee).fill(0),P=Array.from(R.children);c&&(P==null||P.pop());for(var B=0;B<(P==null?void 0:P.length);B++){var H,Y=Math.min.apply(Math,K()(S)),Q=S==null?void 0:S.indexOf(Y),J=0,z=0;if(d){var V=W()(d);if(V==="number"&&(J=2*d,z=2*d),V==="object"){var re=d,_=F()(re,4),ae=_[0],ne=_[1],te=_[2],oe=_[3];J=ne+oe,z=ae+te}}var de=Q*(t+J),le=Y+z;P[B].style.left="".concat(de,"px"),P[B].style.top="".concat(le,"px"),S[Q]+=((H=P[B])===null||H===void 0?void 0:H.offsetHeight)+z}requestAnimationFrame(function(){R.style.height="".concat(Math.max.apply(Math,K()(S)),"px")})};return p(),window.addEventListener("resize",p),function(){window.removeEventListener("resize",p)}}},[JSON.stringify(r)]),(0,l.jsxs)("div",{style:E()({position:"relative",overflowY:"auto",overflowX:"hidden"},u),ref:A,className:x!=null?x:"",children:[r==null?void 0:r.map(function(p,y){return m?m(p,y):null}),c?(0,l.jsx)($,{ob:b,current:r==null?void 0:r.length,maxCurrent:G,renderEnd:N,renderLoading:O}):null]})):C()}),k=X,U=function(r){var s=r.ob,t=r.current,C=t===void 0?0:t,m=r.maxCurrent,u=m===void 0?0:m,x=r.renderEnd,d=r.renderLoading,c=(0,I.useRef)(),N=function(){return C>u?x==null?void 0:x():d()};return(0,I.useEffect)(function(){var O;if(C>=u){var j;s==null||(j=s.unobserve)===null||j===void 0||j.call(s,c==null?void 0:c.current);return}s==null||(O=s.observe)===null||O===void 0||O.call(s,c==null?void 0:c.current)},[C,u]),(0,l.jsx)("div",{ref:c,style:{width:"100%",height:40,display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",bottom:"-40px"},children:N()})},$=U,D=e(17061),h=e.n(D),w=e(17156),v=e.n(w),f=function(n,r){var s=new IntersectionObserver(function(){var t=v()(h()().mark(function C(m){var u;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(u=m==null?void 0:m[0],!(u!=null&&u.isIntersecting)){d.next=6;break}return d.next=4,n==null?void 0:n();case 4:return d.next=6,s.unobserve(u==null?void 0:u.target);case 6:case"end":return d.stop()}},C)}));return function(C){return t.apply(this,arguments)}}(),E()({threshold:1},r));return{ob:s}}},51446:function(a,o,e){"use strict";e.r(o),e.d(o,{texts:function(){return E}});var g=e(68537);const E=[{value:"#\u4E2D\u6587\u6587\u6863  ",paraId:0,tocIndex:0},{value:"https://rubbishmaker.github.io/react-waterfall-flow/",paraId:0,tocIndex:0},{value:"npm install react-waterfall-flow",paraId:1,tocIndex:1},{value:"import {WaterfallFlow} from 'react-waterfall-flow';",paraId:1,tocIndex:1},{value:"\u53C2\u6570\u540D",paraId:2,tocIndex:1},{value:"\u8BF4\u660E",paraId:2,tocIndex:1},{value:"\u7C7B\u578B",paraId:2,tocIndex:1},{value:"\u53EF\u9009",paraId:2,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:1},{value:"data",paraId:2,tocIndex:1},{value:"\u5FC5\u586B,\u9700\u8981\u8FDB\u884C\u7011\u5E03\u6D41\u5E03\u5C40\u7684\u5143\u7D20\u6570\u7EC4\uFF0C\u5FC5\u987B",paraId:2,tocIndex:1},{value:"WaterfallFlowProps<'data'>",paraId:2,tocIndex:1},{value:"-",paraId:2,tocIndex:1},{value:"-",paraId:2,tocIndex:1},{value:"itemWidth",paraId:2,tocIndex:1},{value:"\u5FC5\u586B,\u76D2\u5B50",paraId:2,tocIndex:1},{value:"number",paraId:2,tocIndex:1},{value:"-",paraId:2,tocIndex:1},{value:"-",paraId:2,tocIndex:1},{value:"renderEmpty",paraId:2,tocIndex:1},{value:"\u53EF\u586B,\u6CA1\u6570\u636E\u65F6\u7684\u6E32\u67D3\u9879\u76EE",paraId:2,tocIndex:1},{value:"()=>(React.ReactNode)",paraId:2,tocIndex:1},{value:"-",paraId:2,tocIndex:1},{value:"-",paraId:2,tocIndex:1},{value:"renderChild",paraId:2,tocIndex:1},{value:"\u5FC5\u586B,\u5355\u4E2A\u5143\u7D20\u7684\u5177\u4F53\u6E32\u67D3",paraId:2,tocIndex:1},{value:"(Record<string,any>,number)=>React.ReactNode",paraId:2,tocIndex:1},{value:"-",paraId:2,tocIndex:1},{value:"-",paraId:2,tocIndex:1},{value:"gap",paraId:2,tocIndex:1},{value:"\u5355\u4E2A\u5143\u7D20 margin \u95F4\u8DDD",paraId:2,tocIndex:1},{value:"number \u6216 number[]",paraId:2,tocIndex:1},{value:"-",paraId:2,tocIndex:1},{value:"-",paraId:2,tocIndex:1},{value:"rootClassName",paraId:2,tocIndex:1},{value:"\u5BB9\u5668\u5143\u7D20\u7684 clas \u7C7B\u76EE",paraId:2,tocIndex:1},{value:"string",paraId:2,tocIndex:1},{value:"npm install react-waterfall-flow",paraId:3,tocIndex:2},{value:"import {WaterfallFlow} from 'react-waterfall-flow';",paraId:3,tocIndex:2},{value:"\u53C2\u6570\u540D",paraId:4,tocIndex:2},{value:"\u8BF4\u660E",paraId:4,tocIndex:2},{value:"\u7C7B\u578B",paraId:4,tocIndex:2},{value:"\u53EF\u9009",paraId:4,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:2},{value:"lazyLoading",paraId:4,tocIndex:2},{value:"\u5F00\u542F\u61D2\u52A0\u8F7D",paraId:4,tocIndex:2},{value:"boolean",paraId:4,tocIndex:2},{value:"-",paraId:4,tocIndex:2},{value:"-",paraId:4,tocIndex:2},{value:"renderEnd",paraId:4,tocIndex:2},{value:"\u52A0\u8F7D\u5230\u5E95\u90E8\u7684dom",paraId:4,tocIndex:2},{value:"React.ReactNode",paraId:4,tocIndex:2},{value:"-",paraId:4,tocIndex:2},{value:"-",paraId:4,tocIndex:2},{value:"renderLoading",paraId:4,tocIndex:2},{value:"\u52A0\u8F7D\u4E2D\u7684dom",paraId:4,tocIndex:2},{value:"React.ReactNode",paraId:4,tocIndex:2},{value:"-",paraId:4,tocIndex:2},{value:"-",paraId:4,tocIndex:2},{value:"callback",paraId:4,tocIndex:2},{value:"\u52A0\u8F7D\u540E\u89E6\u53D1\u7684callback\u56DE\u8C03",paraId:4,tocIndex:2},{value:"()=>void",paraId:4,tocIndex:2},{value:"-",paraId:4,tocIndex:2},{value:"-",paraId:4,tocIndex:2},{value:"totalNumber",paraId:4,tocIndex:2},{value:"\u603B\u4E2A\u6570",paraId:4,tocIndex:2},{value:"number",paraId:4,tocIndex:2},{value:"-",paraId:4,tocIndex:2},{value:"-",paraId:4,tocIndex:2}]},44053:function(a,o){"use strict";o.Z=`\r
\r
export const mockData = Array(15).fill(0).map(item=>{\r
    return {\r
      width:200,\r
      height:Math.floor(Math.random()*150 +50)\r
    }\r
  })`},63405:function(a,o,e){var g=e(73897);function E(L){if(Array.isArray(L))return g(L)}a.exports=E,a.exports.__esModule=!0,a.exports.default=a.exports},79498:function(a){function o(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}a.exports=o,a.exports.__esModule=!0,a.exports.default=a.exports},42281:function(a){function o(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}a.exports=o,a.exports.__esModule=!0,a.exports.default=a.exports},861:function(a,o,e){var g=e(63405),E=e(79498),L=e(86116),F=e(42281);function T(W){return g(W)||E(W)||L(W)||F()}a.exports=T,a.exports.__esModule=!0,a.exports.default=a.exports}}]);
