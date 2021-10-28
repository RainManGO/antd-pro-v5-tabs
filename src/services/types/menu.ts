/*
 * @Author: ZY
 * @Date: 2021-08-02 13:44:44
 * @LastEditors: ZY
 * @LastEditTime: 2021-08-02 15:33:04
 * @FilePath: /main/src/services/types/menu.ts
 * @Description: 菜单栏Model
 */

export interface MenuModel {
	path: string;
	name: string;
	icon: string;
	children: MenuModel[];
}