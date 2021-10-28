/*
 * @Author: ZY
 * @Date: 2021-08-02 13:44:24
 * @LastEditors: ZY
 * @LastEditTime: 2021-08-06 11:56:50
 * @FilePath: /main/src/services/api/menu.ts
 * @Description: 菜单栏相关API请求
 */
import https from '@/utils/https';
import type { MenuModel } from '../types/menu';

export function getRoutes() {
  return https.request<MenuModel[]>('/routes');
}
