import React, { FC, useEffect, useRef } from 'react';
import { LoadingRefProps } from './typing';

const customLoading: FC<any> = ({
  ob,
  current = 0,
  maxCurrent = 0,
  renderEnd,
  renderLoading,
}: LoadingRefProps & Record<string, any>) => {
  const loadingRef = useRef<any>();

  const render = (): React.ReactNode => {
    if (current > maxCurrent) {
      return renderEnd?.();
    }

    return renderLoading();
  };

  useEffect(() => {
    if (current >= maxCurrent) {
      ob?.unobserve?.(loadingRef?.current);
      return
    }
    ob?.observe?.(loadingRef?.current);
  }, [current, maxCurrent]);

  return (
    <div
      ref={loadingRef}
      style={{
        width: '100%',
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '-40px',
      }}
    >
      {render()}
    </div>
  );
};

export default customLoading;
