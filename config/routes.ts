/*
 * @Author: ZY
 * @Date: 2021-08-02 13:54:53
 * @LastEditors: ZY
 * @LastEditTime: 2021-10-29 14:19:45
 * @FilePath: /main/config/routes.ts
 * @Description: 路由配置
 */
export default [
  {
    path:'/login',
    name: '登录',
    component: '@/pages/user/Login',
  },
  { path: '/', redirect: '/dashboard' },
  {
    path:'/',
    component: '@/layouts/index',
    routes:[
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
