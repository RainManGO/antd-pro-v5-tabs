/*
 * @Author: ZY
 * @Date: 2021-08-02 11:55:09
 * @LastEditors: ZY
 * @LastEditTime: 2021-08-06 10:39:43
 * @FilePath: /main/config/config.ts
 * @Description: umi配置
 */
import { defineConfig } from 'umi';
const path = require('path');

export default defineConfig({
  define: {
    'process.env.BASE_URL': '/api',
  },
  hash: true,
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
  // proxy: {
  //   '/api': {
  //     'target':'http://192.168.7.19:8080/',
  //     'changeOrigin': true,
  //     'pathRewrite': { '^/api' : '' },
  //   },
  // },
});
