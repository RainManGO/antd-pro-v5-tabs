/*
 * @Author: ZY
 * @Date: 2021-07-22 10:26:28
 * @LastEditors: ZY
 * @LastEditTime: 2021-10-29 14:20:21
 * @FilePath: /main/src/app.ts
 * @Description: 运行时文件
 */
import type { IRoute } from 'umi';
import { getRoutes } from '@/services/api/menu';
import type { Settings as LayoutSettings } from '@ant-design/pro-layout';


/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
 export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: {[key:string]:any};
}> {
  const currentUser = {"name":"Serati Ma","role":"editor","avatar":"https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png","userid":"00000001","email":"antdesign@alipay.com","signature":"海纳百川，有容乃大","title":"交互专家","group":"蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED","tags":[{"key":"0","label":"很有想法的"},{"key":"1","label":"专注设计"},{"key":"2","label":"辣~"},{"key":"3","label":"大长腿"},{"key":"4","label":"川妹子"},{"key":"5","label":"海纳百川"}],"notifyCount":12,"unreadCount":11,"country":"China","access":"admin","geographic":{"province":{"label":"浙江省","key":"330000"},"city":{"label":"杭州市","key":"330100"}},"address":"西湖区工专路 77 号","phone":"0752-268888888"}
  return {
    currentUser,
    settings: {},
  };
}

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
      hidden: route.hidden,
      access: route.access,
      component: route.component ? require(`@/pages${route.component || route.url}`).default : '',
    };
  });
}

export function patchRoutes({ routes }: { routes: IRoute[] }) {
  const pagesRoutes = routes[2].routes;
  const serverRoutes = buildRoutes(serviceRoutes);
  serverRoutes.forEach((route: any) => {
      pagesRoutes?.push(route);
  });
  routes[2].routes = pagesRoutes;
  console.log(routes);
  
}

export function render(oldRender: Function) {
  console.log('render');
  getRoutes().then((routes) => {
    if (routes) {
      serviceRoutes = routes;
    }
    oldRender();
  });
}


