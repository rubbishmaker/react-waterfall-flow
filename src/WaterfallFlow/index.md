# 基本使用

## 不使用懒加载

1.  npm install react-waterfall-flow
2.  import {WaterfallFlow} from 'react-waterfall-flow';

| 参数名        |                                    说明 |                     类型                     | 可选 | 默认值 |
| ------------- | --------------------------------------: | :------------------------------------------: | :--: | :----: |
| data          | 必填,需要进行瀑布流布局的元素数组，必须 |          WaterfallFlowProps<'data'>          |  -   |   -    |
| itemWidth     |                               必填,盒子 |                    number                    |  -   |   -    |
| renderEmpty   |                 可填,没数据时的渲染项目 |            ()=>(React.ReactNode)             |  -   |   -    |
| renderChild   |                 必填,单个元素的具体渲染 | (Record<string,any>,number)=>React.ReactNode |  -   |   -    |
| gap           |                    单个元素 margin 间距 |              number 或 number[]              |  -   |   -    |
| rootClassName |                    容器元素的 clas 类目 |                    string                    |

```jsx
import { WaterfallFlow } from 'react-waterfall-flow';
import { mockData } from './demo/mock/index.ts';

export default () => {
  const renderChild = (item, index) => {
    const { width, height } = item;
    return (
      <div
        key={index}
        style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background:
            '#' +
            Math.floor(Math.random() * 0xffffff)
              .toString(16)
              .padEnd(6, '0'),
          width: width || 220,
          height: height,
          boxSizing: 'border-box',
        }}
      >
        {Math.random()}
      </div>
    );
  };

  const renderEmpty = () => {
    return <div>空空如也</div>;
  };

  return <WaterfallFlow renderChild={renderChild} data={mockData} gap={8} />;
};
```

## 使用懒加载


| 参数名        |                                    说明 |                     类型                     | 可选 | 默认值 |
| ------------- | --------------------------------------: | :------------------------------------------: | :--: | :----: |
| lazyLoading          | 开启懒加载 |         boolean       |  -   |   -    |
| renderEnd          | 加载到底部的dom |         React.ReactNode       |  -   |   -    |
| renderLoading          | 加载中的dom |         React.ReactNode       |  -   |   -    |
| callback          | 加载后触发的callback回调 |        ()=>void      |  -   |   -    |
| totalNumber          |总个数 |        number     |  -   |   -    |

```jsx
import { WaterfallFlow } from 'react-waterfall-flow';
import { mockData } from './demo/mock/index.ts';
import { useState } from 'react';

export default () => {
  const renderChild = (item, index) => {
    const { width, height } = item;
    return (
      <div
        key={index}
        style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background:
            '#' +
            Math.floor(Math.random() * 0xffffff)
              .toString(16)
              .padEnd(6, '0'),
          width: width || 220,
          height: height,
          boxSizing: 'border-box',
        }}
      >
        {Math.random()}
      </div>
    );
  };

  const renderEmpty = () => {
    return <div>空空如也</div>;
  };

  const renderEnd = () => {
    return <div>已经见底了</div>;
  };

  const renderLoading = () => {
    return <div>加载中...</div>;
  };

  const request = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 1000);
    });
  };

  const callback =async ()=>{
    const data =await request();
    setData(curr=>([...curr,...data]))
  }

  const [data, setData] = useState(mockData);
  return (
    <WaterfallFlow
      renderChild={renderChild}
      data={data}
      gap={2}
      lazyLoading={true}
      callback={callback}
      renderEnd={renderEnd}
      renderLoading={renderLoading}
      totalNumber={10000}
    />
  );
};
```
