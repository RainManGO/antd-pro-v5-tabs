/*
 * @Author: ZY
 * @Date: 2021-08-02 11:55:09
 * @LastEditors: ZY
 * @LastEditTime: 2021-10-28 15:03:44
 * @FilePath: /main/config/config.ts
 * @Description: umi配置
 */
import { defineConfig } from 'umi';
import routes from "./routes";
import layoutDefaultSettings from "./layoutDefaultSettings";
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  define: {
    'process.env.BASE_URL': '/api',
    'process.env.AUTH_URL': '/auth',
  },
  routes,
  hash: true,
  locale:{
    default: 'zh-CN',
    antd: true,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  dva:{
    hmr:true,
    immer:false
  },
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  devServer: {
    port: 8130,
    open: true,
  },
  dynamicImportSyntax: {},
  fastRefresh: {},
  theme:{
    'primary-color': layoutDefaultSettings.primaryColor,
  },
  qiankun: {
      master: {
        apps: [{
          name: 'rd',
          entry: '//localhost:8131'
        },
        {
          name: 'system',
          entry: '//localhost:8132'
        }]
      },
    },
    proxy: proxy[REACT_APP_ENV || 'dev'],
});
