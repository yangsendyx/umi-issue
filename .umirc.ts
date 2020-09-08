import { defineConfig } from 'umi';

export default defineConfig({
  ssr: {},
  hash: true,
  dynamicImport: {
    // loading: '@/pages/loading'
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/test', component: '@/pages/test' },
  ],
});
