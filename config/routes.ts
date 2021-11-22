/*
 * @Author: ZY
 * @Date: 2021-08-02 13:54:53
 * @LastEditors: ZLL
 * @LastEditTime: 2021-11-22 15:46:43
 * @FilePath: \main\config\routes.ts
 * @Description: 路由配置
 */
export default [
  {
    path: '/login',
    name: '登录',
    component: '@/pages/user/Login',
  },
  { path: '/', redirect: '/dashboard' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/dashboard',
        name: '我的单据',
        icon: 'icon-shoucang1',
        component: '@/pages/dashboard',
        // access: 'canReadAdmin',
      },
      {
        path: '/detail/:id',
        name: '单据详情',
        icon: 'icon-facebook',
        component: '@/pages/detail',
        hidden: 'true',
        access: 'canReadAdmin',
      },
      {
        path: '/rd',
        microApp: 'rd',
        microAppProps: {
          autoSetLoading: true,
        },
      },
      {
        path: '/system',
        microApp: 'system',
        microAppProps: {
          autoSetLoading: true,
        },
      },
    ],
  },
];
