/*
 * @Author: ZY
 * @Date: 2021-08-02 13:54:53
 * @LastEditors: ZY
 * @LastEditTime: 2021-08-06 11:18:16
 * @FilePath: /main/config/routes.ts
 * @Description: 路由配置
 */
export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [{ path: '/', redirect: '/dashboard' }],
  },
];
