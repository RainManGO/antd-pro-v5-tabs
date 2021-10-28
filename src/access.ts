/*
 * @Author: ZY
 * @Date: 2021-10-28 13:35:01
 * @LastEditors: ZY
 * @LastEditTime: 2021-10-28 14:11:21
 * @FilePath: /main/src/access.ts
 * @Description: 文件描述
 */

export default function(initialState: any) {
    const {role} = initialState.currentUser;
    return {
        canReadAdmin: role !== 'editor',
    };
  }