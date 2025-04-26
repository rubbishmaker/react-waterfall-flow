import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'react-waterfall-flow',
  },
  base: '/react-waterfall-flow/', // GitHub Pages 部署路径（替换为你的仓库名）
  publicPath: '/react-waterfall-flow/', // 静态资源路径（同上）
});
