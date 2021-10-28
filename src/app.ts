/*
 * @Author: ZY
 * @Date: 2021-07-22 10:26:28
 * @LastEditors: ZY
 * @LastEditTime: 2021-08-06 11:59:17
 * @FilePath: /main/src/app.ts
 * @Description: 运行时文件
 */
import type { IRoute } from 'umi';
import { getRoutes } from '@/services/api/menu';

let serviceRoutes: any = [];

function buildRoutes(routes: any) {
  return (routes || []).map((route: any) => {
    if (route.children && route.children.length > 0) {
      return {
        path: route.path,
        name: route.name,
        icon: route.icon,
        // 精准匹配默认false
        exact: false,
        routes: buildRoutes(route.children),
      };
    }
    return {
      path: route.path || '',
      name: route.name || '',
      // 精准匹配
      exact: true,
      icon: route.icon,
      component: route.component ? require(`@/pages${route.component || route.url}`).default : '',
    };
  });
}

export function patchRoutes({ routes }: { routes: IRoute[] }) {
  const pagesRoutes = routes[0].routes;
  const serverRoutes = buildRoutes(serviceRoutes);
  serverRoutes.map((route: any) => {
    pagesRoutes?.push(route);
  });
  routes[0].routes = pagesRoutes;
}

export function render(oldRender: Function) {
  getRoutes().then((routes) => {
    if (routes) {
      serviceRoutes = routes;
    }
    oldRender();
  });
}
