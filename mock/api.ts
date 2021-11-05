/*
 * @Author: ZY
 * @Date: 2021-07-21 14:36:44
 * @LastEditors: ZLL
 * @LastEditTime: 2021-11-04 11:10:23
 * @FilePath: \main\mock\api.ts
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
      children: [
        {
          path: '/rd/rdCenter',
          name: '研发中台首页',
          icon: 'icon-facebook',
          microApp: 'rdCenter',
        },
        {
          path: '/rd/rdDynamic',
          name: '研发中台动态路由页面',
          icon: 'icon-facebook',
          microApp: 'rdCenter',
        },
      ],
    },
    {
      path: '/test1',
      name: '测试111',
      icon: 'icon-facebook',
      component: '/dynamic',
    },
    {
      path: '/test222',
      name: '测试2222222',
      icon: 'icon-facebook',
      component: '/dynamic',
    },
    {
      path: '/test3333',
      name: '测试33',
      icon: 'icon-facebook',
      component: '/dynamic',
    },
    {
      path: '/test4',
      name: '测试4',
      icon: 'icon-facebook',
      component: '/dynamic',
    },
    {
      path: '/test555',
      name: '测试555555555555555555555',
      icon: 'icon-facebook',
      component: '/dynamic',
    },
    {
      path: '/testqqqqqqqqqqqqqq',
      name: '测试qqqqwrrtgfdfvfdvfdv',
      icon: 'icon-facebook',
      component: '/dynamic',
    },
    {
      path: '/test666',
      name: '测试6666',
      icon: 'icon-facebook',
      component: '/dynamic',
    },
    {
      path: '/test77777777777777',
      name: '测试77777',
      icon: 'icon-facebook',
      component: '/dynamic',
    },
    {
      path: '/test88888888888888',
      name: '测试888888888888888888888888',
      icon: 'icon-facebook',
      component: '/dynamic',
    },
    {
      path: '/test9',
      name: '测试9',
      icon: 'icon-facebook',
      component: '/dynamic',
    },
  ],
};
