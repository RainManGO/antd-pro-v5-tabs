/*
 * @Author: ZY
 * @Date: 2021-08-02 13:54:53
 * @LastEditors: ZY
 * @LastEditTime: 2021-10-28 14:38:13
 * @FilePath: /main/config/routes.ts
 * @Description: 路由配置
 */
export default [
  {
    path:'/login',
    component: '@/pages/user/Login',
  },
  {
    path:'/',
    component: '@/layouts/index',
    routes:[
      { path: '/', redirect: '/dashboard' },
      {
        path: '/dashboard',
        name: '首页',
        icon: 'icon-shoucang1',
        component: '@/pages/dashboard',
        // access: 'canReadAdmin',
      },
      { path: '/rd', microApp:'rd',microAppProps: {
        autoSetLoading: true,
      }},
      { path: '/system', microApp:'system',microAppProps: {
        autoSetLoading: true,
      }},
    ]
  },
];
