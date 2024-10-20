import { CSSProperties } from 'react';

export type BasicItem = {
  width: number | string;
  height: number | string;
};

export type LoadingRefProps = {
  lazyLoading: boolean;
  renderEnd: () => React.ReactNode;
  renderLoading: () => React.ReactNode;
  callback: () => void;
  totalNumber: number;
  observerOptions:Record<string,any>
};
export type WaterfallFlowProps<T extends BasicItem> = {
  data: Array<T>;
  itemWidth: number;
  renderEmpty: () => React.ReactNode;
  renderChild?: (T, number) => React.ReactNode;
  style: CSSProperties;
  rootClassName: string;
  gap: Array<number> | number;
};
