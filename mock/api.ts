/*
 * @Author: ZY
 * @Date: 2021-07-21 14:36:44
 * @LastEditors: ZY
 * @LastEditTime: 2021-10-28 15:11:38
 * @FilePath: /main/mock/api.ts
 * @Description: menu mock
 */
export default {
  'GET /api/routes': [
    {
      path: '/dynamic',
      name: '服务器路由',
      icon: 'icon-facebook',
      component: '/dynamic',
    },
    {
      path: '/access',
      name: '权限测试',
      icon: 'icon-facebook',
      component: '/dynamic',
    },
    {
      path: '/one',
      name: '权限测试1',
      icon: 'icon-facebook',
      component: '/one',
      hidden: 'true',
      access: 'canReadAdmin',
    },
    {
      path: '/rd',
      name: '研发中心',
      icon: 'icon-facebook',
      children:[
        {
          path: '/rd/rdCenter',
          name: '研发中台首页',
          icon: 'icon-facebook',
          microApp:'rdCenter'
        },
        {
          path: '/rd/rdDynamic',
          name: '研发中台动态路由页面',
          icon: 'icon-facebook',
          microApp:'rdCenter'
        },
      ]
    }
  ],
};

