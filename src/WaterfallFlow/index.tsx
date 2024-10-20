import React, { useLayoutEffect, useRef, type FC } from 'react';
import { CustomLoading,useIntersectionObserver } from 'react-Waterfall-flow';
import { BasicItem, LoadingRefProps, WaterfallFlowProps } from './typing';

const WaterfallFlow: FC<WaterfallFlowProps<BasicItem> & LoadingRefProps> =
  React.memo((props) => {
    /**
     * @param
     * data为数据区域，会根据数据项生成真正的dom，data格式必须要求宽高，这是因为瀑布流中一般宽度固定，已知height或者宽高比
     * itemWidth 提供出去的原因是为了提醒使用者目前只能固定宽高
     * 
     * TODO:自适应的动态宽高
     * TODO:考虑加虚拟列表功能提升渲染性能
     */
    const {
      data,
      itemWidth = 220,
      renderEmpty,
      renderChild,
      style,
      rootClassName,
      gap,

      lazyLoading,
      renderEnd,
      renderLoading,
      callback,
      totalNumber,
      observerOptions
    } = props;

    const { ob } = useIntersectionObserver(callback,observerOptions);
    const contrainer = useRef<any>();

    if (!data?.length) {
      return renderEmpty();
    }

    useLayoutEffect(() => {
      if (!data?.length) {
        return;
      }
      const layout = () => {
        const contrainerRef = contrainer.current;
        //    获取容器可用宽度
        const contrainerWidth = contrainerRef?.offsetWidth;
        // 获取一排能放几个盒子
        const itemCount = Math.floor(contrainerWidth / itemWidth);

        //可变高度数组
        const flexlist = Array(itemCount).fill(0);
        //获取手里能拿到的children
        const childList: Array<HTMLElement> = Array.from(
          contrainerRef.children,
        );

        lazyLoading ? childList?.pop() : null;

        for (let i = 0; i < childList?.length; i++) {
          //取出当前最小的盒子高度
          const minHeight = Math.min(...flexlist);

          const index = flexlist?.indexOf(minHeight);

          //通过定位将盒子定位出去
          //需要获取左右边距的gap 也就是margin

          let horizontal = 0;
          let vertical = 0;

          if (gap) {
            const type = typeof gap;

            if (type === 'number') {
              horizontal = 2 * (gap as number);
              vertical = 2 * (gap as number);
            }

            if (type === 'object') {
              const [top, right, bottom, left] = gap as Array<number>;
              horizontal = right + left;
              vertical = top + bottom;
            }
          }

          const left = index * (itemWidth + horizontal);

          const top = minHeight + vertical;

          childList[i].style.left = `${left}px`;

          childList[i].style.top = `${top}px`;

          flexlist[index] += childList[i]?.offsetHeight + vertical;
        }

        requestAnimationFrame(() => {
          contrainerRef.style.height = `${Math.max(...flexlist)}px`;
        });
      };
      layout();

      window.addEventListener('resize', layout);

      return () => {
        window.removeEventListener('resize', layout);
      };
    }, [JSON.stringify(data)]);

    return (
      <div
        style={{
          //绝对定位是必须的
          position: 'relative',
          overflowY: 'auto',
          overflowX: 'hidden', 
          ...style      
        }}
        ref={contrainer}
        className={rootClassName??``}
      >
        {data?.map((item, index) => {
          return renderChild ? renderChild(item, index) : null;
        })}

        {lazyLoading ? (
          <CustomLoading
            ob={ob}
            current={data?.length}
            maxCurrent={totalNumber}
            renderEnd={renderEnd}
            renderLoading={renderLoading}
          ></CustomLoading>
        ) : null}
      </div>
    );
  });

export default WaterfallFlow;
export { WaterfallFlow };
