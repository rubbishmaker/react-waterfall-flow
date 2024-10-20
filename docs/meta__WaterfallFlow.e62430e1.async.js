(self.webpackChunkreact_Waterfall_flow=self.webpackChunkreact_Waterfall_flow||[]).push([[535],{62102:function(n,o,e){"use strict";var g;e.r(o),e.d(o,{demos:function(){return k}});var E=e(27424),j=e.n(E),S=e(861),T=e.n(S),A=e(17061),s=e.n(A),K=e(17156),I=e.n(K),l=e(67294),X=e(40722),$=e(96666),U=e(79973),k={"waterfallflow-demo-0":{component:l.memo(l.lazy(I()(s()().mark(function D(){var h,b,v,f;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,96666));case 2:return h=r.sent,b=h.WaterfallFlow,r.next=6,Promise.resolve().then(e.bind(e,79973));case 6:return v=r.sent,f=v.mockData,r.abrupt("return",{default:function(){var a=function(u,x){var d=u.width,c=u.height;return l.createElement("div",{key:x,style:{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",background:"#"+Math.floor(Math.random()*16777215).toString(16).padEnd(6,"0"),width:d||220,height:c,boxSizing:"border-box"}},Math.random())},C=function(){return l.createElement("div",null,"\u7A7A\u7A7A\u5982\u4E5F")};return l.createElement(b,{renderChild:a,data:f,gap:8})}});case 9:case"end":return r.stop()}},D)})))),asset:{type:"BLOCK",id:"waterfallflow-demo-0",refAtomIds:["WaterfallFlow"],dependencies:{"index.jsx":{type:"FILE",value:`import { WaterfallFlow } from 'react-Waterfall-flow';\r
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
};`},"react-Waterfall-flow":{type:"NPM",value:"0.0.1"},"./demo/mock/index.ts":{type:"FILE",value:e(64076).Z}},entry:"index.jsx"},context:{"./demo/mock/index.ts":U,"react-Waterfall-flow":$,"C:/Users/19564/Desktop/Project/githubProject/dumi/src/WaterfallFlow/demo/mock/index.ts":U},renderOpts:{compile:function(){var D=I()(s()().mark(function b(){var v,f=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(19).then(e.bind(e,4019));case 2:return r.abrupt("return",(v=r.sent).default.apply(v,f));case 3:case"end":return r.stop()}},b)}));function h(){return D.apply(this,arguments)}return h}()}},"waterfallflow-demo-1":{component:l.memo(l.lazy(I()(s()().mark(function D(){var h,b,v,f,t,r;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,96666));case 2:return h=a.sent,b=h.WaterfallFlow,a.next=6,Promise.resolve().then(e.bind(e,79973));case 6:return v=a.sent,f=v.mockData,a.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return t=a.sent,r=t.useState,a.abrupt("return",{default:function(){var m=function(P,O){var p=P.width,y=P.height;return l.createElement("div",{key:O,style:{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",background:"#"+Math.floor(Math.random()*16777215).toString(16).padEnd(6,"0"),width:p||220,height:y,boxSizing:"border-box"}},Math.random())},u=function(){return l.createElement("div",null,"\u7A7A\u7A7A\u5982\u4E5F")},x=function(){return l.createElement("div",null,"\u5DF2\u7ECF\u89C1\u5E95\u4E86")},d=function(){return l.createElement("div",null,"\u52A0\u8F7D\u4E2D...")},c=function(){var M=I()(s()().mark(function P(){return s()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",new Promise(function(y){setTimeout(function(){y(f)},1e3)}));case 1:case"end":return p.stop()}},P)}));return function(){return M.apply(this,arguments)}}(),N=function(){var M=I()(s()().mark(function P(){var O;return s()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,c();case 2:O=y.sent,_(function(R){return[].concat(T()(R),T()(O))});case 4:case"end":return y.stop()}},P)}));return function(){return M.apply(this,arguments)}}(),L=r(f),w=j()(L,2),Z=w[0],_=w[1];return l.createElement(b,{renderChild:m,data:Z,gap:2,lazyLoading:!0,callback:N,renderEnd:x,renderLoading:d,totalNumber:1e4})}});case 13:case"end":return a.stop()}},D)})))),asset:{type:"BLOCK",id:"waterfallflow-demo-1",refAtomIds:["WaterfallFlow"],dependencies:{"index.jsx":{type:"FILE",value:`import { WaterfallFlow } from 'react-Waterfall-flow';\r
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
      totalNumber={10000}\r
    />\r
  );\r
};`},"react-Waterfall-flow":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"},"./demo/mock/index.ts":{type:"FILE",value:e(64076).Z}},entry:"index.jsx"},context:{"./demo/mock/index.ts":U,"react-Waterfall-flow":$,react:g||(g=e.t(l,2)),"C:/Users/19564/Desktop/Project/githubProject/dumi/src/WaterfallFlow/demo/mock/index.ts":U},renderOpts:{compile:function(){var D=I()(s()().mark(function b(){var v,f=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(19).then(e.bind(e,4019));case 2:return r.abrupt("return",(v=r.sent).default.apply(v,f));case 3:case"end":return r.stop()}},b)}));function h(){return D.apply(this,arguments)}return h}()}}}},79973:function(n,o,e){"use strict";e.r(o),e.d(o,{mockData:function(){return g}});var g=Array(15).fill(0).map(function(E){return{width:200,height:Math.floor(Math.random()*150+50)}})},96666:function(n,o,e){"use strict";e.r(o),e.d(o,{CustomLoading:function(){return k},WaterfallFlow:function(){return $},useIntersectionObserver:function(){return f}});var g=e(42122),E=e.n(g),j=e(27424),S=e.n(j),T=e(18698),A=e.n(T),s=e(861),K=e.n(s),I=e(67294),l=e(85893),X=I.memo(function(t){var r=t.data,i=t.itemWidth,a=i===void 0?220:i,C=t.renderEmpty,m=t.renderChild,u=t.style,x=t.rootClassName,d=t.gap,c=t.lazyLoading,N=t.renderEnd,L=t.renderLoading,w=t.callback,Z=t.totalNumber,_=t.observerOptions,M=f(w,_),P=M.ob,O=(0,I.useRef)();return r!=null&&r.length?((0,I.useLayoutEffect)(function(){if(r!=null&&r.length){var p=function(){var R=O.current,q=R==null?void 0:R.offsetWidth,ee=Math.floor(q/a),F=Array(ee).fill(0),W=Array.from(R.children);c&&(W==null||W.pop());for(var B=0;B<(W==null?void 0:W.length);B++){var H,Y=Math.min.apply(Math,K()(F)),Q=F==null?void 0:F.indexOf(Y),J=0,z=0;if(d){var V=A()(d);if(V==="number"&&(J=2*d,z=2*d),V==="object"){var re=d,G=S()(re,4),ne=G[0],te=G[1],ae=G[2],oe=G[3];J=te+oe,z=ne+ae}}var de=Q*(a+J),le=Y+z;W[B].style.left="".concat(de,"px"),W[B].style.top="".concat(le,"px"),F[Q]+=((H=W[B])===null||H===void 0?void 0:H.offsetHeight)+z}requestAnimationFrame(function(){R.style.height="".concat(Math.max.apply(Math,K()(F)),"px")})};return p(),window.addEventListener("resize",p),function(){window.removeEventListener("resize",p)}}},[JSON.stringify(r)]),(0,l.jsxs)("div",{style:E()({position:"relative",overflowY:"auto",overflowX:"hidden"},u),ref:O,className:x!=null?x:"",children:[r==null?void 0:r.map(function(p,y){return m?m(p,y):null}),c?(0,l.jsx)(k,{ob:P,current:r==null?void 0:r.length,maxCurrent:Z,renderEnd:N,renderLoading:L}):null]})):C()}),$=X,U=function(r){var i=r.ob,a=r.current,C=a===void 0?0:a,m=r.maxCurrent,u=m===void 0?0:m,x=r.renderEnd,d=r.renderLoading,c=(0,I.useRef)(),N=function(){return C>u?x==null?void 0:x():d()};return(0,I.useEffect)(function(){var L;if(C>=u){var w;i==null||(w=i.unobserve)===null||w===void 0||w.call(i,c==null?void 0:c.current)}i==null||(L=i.observe)===null||L===void 0||L.call(i,c==null?void 0:c.current)},[C,u]),(0,l.jsx)("div",{ref:c,style:{width:"100%",height:40,display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",bottom:"-40px"},children:N()})},k=U,D=e(17061),h=e.n(D),b=e(17156),v=e.n(b),f=function(t,r){var i=new IntersectionObserver(function(){var a=v()(h()().mark(function C(m){var u;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(u=m==null?void 0:m[0],!(u!=null&&u.isIntersecting)){d.next=6;break}return d.next=4,t==null?void 0:t();case 4:return d.next=6,i.unobserve(u==null?void 0:u.target);case 6:case"end":return d.stop()}},C)}));return function(C){return a.apply(this,arguments)}}(),E()({threshold:1},r));return{ob:i}}},91407:function(n,o,e){"use strict";e.r(o),e.d(o,{texts:function(){return E}});var g=e(40722);const E=[{value:"npm install react-Waterfall-flow",paraId:0,tocIndex:1},{value:"import {WaterfallFlow} from 'react-Waterfall-flow';",paraId:0,tocIndex:1},{value:"\u53C2\u6570\u540D",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"\u53EF\u9009",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:1},{value:"data",paraId:1,tocIndex:1},{value:"\u5FC5\u586B,\u9700\u8981\u8FDB\u884C\u7011\u5E03\u6D41\u5E03\u5C40\u7684\u5143\u7D20\u6570\u7EC4\uFF0C\u5FC5\u987B",paraId:1,tocIndex:1},{value:"WaterfallFlowProps<'data'>",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"itemWidth",paraId:1,tocIndex:1},{value:"\u5FC5\u586B,\u76D2\u5B50",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"renderEmpty",paraId:1,tocIndex:1},{value:"\u53EF\u586B,\u6CA1\u6570\u636E\u65F6\u7684\u6E32\u67D3\u9879\u76EE",paraId:1,tocIndex:1},{value:"()=>(React.ReactNode)",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"renderChild",paraId:1,tocIndex:1},{value:"\u5FC5\u586B,\u5355\u4E2A\u5143\u7D20\u7684\u5177\u4F53\u6E32\u67D3",paraId:1,tocIndex:1},{value:"(Record<string,any>,number)=>React.ReactNode",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"gap",paraId:1,tocIndex:1},{value:"\u5355\u4E2A\u5143\u7D20 margin \u95F4\u8DDD",paraId:1,tocIndex:1},{value:"number \u6216 number[]",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"rootClassName",paraId:1,tocIndex:1},{value:"\u5BB9\u5668\u5143\u7D20\u7684 clas \u7C7B\u76EE",paraId:1,tocIndex:1},{value:"string",paraId:1,tocIndex:1},{value:"\u53C2\u6570\u540D",paraId:2,tocIndex:2},{value:"\u8BF4\u660E",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u53EF\u9009",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"lazyLoading",paraId:2,tocIndex:2},{value:"\u5F00\u542F\u61D2\u52A0\u8F7D",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"renderEnd",paraId:2,tocIndex:2},{value:"\u52A0\u8F7D\u5230\u5E95\u90E8\u7684dom",paraId:2,tocIndex:2},{value:"React.ReactNode",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"renderLoading",paraId:2,tocIndex:2},{value:"\u52A0\u8F7D\u4E2D\u7684dom",paraId:2,tocIndex:2},{value:"React.ReactNode",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"callback",paraId:2,tocIndex:2},{value:"\u52A0\u8F7D\u540E\u89E6\u53D1\u7684callback\u56DE\u8C03",paraId:2,tocIndex:2},{value:"()=>void",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"totalNumber",paraId:2,tocIndex:2},{value:"\u603B\u4E2A\u6570",paraId:2,tocIndex:2},{value:"number",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2}]},64076:function(n,o){"use strict";o.Z=`\r
\r
export const mockData = Array(15).fill(0).map(item=>{\r
  return {\r
    width:200,\r
    height:Math.floor(Math.random()*150 +50)\r
  }\r
})`},63405:function(n,o,e){var g=e(73897);function E(j){if(Array.isArray(j))return g(j)}n.exports=E,n.exports.__esModule=!0,n.exports.default=n.exports},79498:function(n){function o(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}n.exports=o,n.exports.__esModule=!0,n.exports.default=n.exports},42281:function(n){function o(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}n.exports=o,n.exports.__esModule=!0,n.exports.default=n.exports},861:function(n,o,e){var g=e(63405),E=e(79498),j=e(86116),S=e(42281);function T(A){return g(A)||E(A)||j(A)||S()}n.exports=T,n.exports.__esModule=!0,n.exports.default=n.exports}}]);
