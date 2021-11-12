/*
 * @Author: ZY
 * @Date: 2021-10-27 10:31:25
 * @LastEditors: ZY
 * @LastEditTime: 2021-10-27 10:36:39
 * @FilePath: /main/src/constant/localKey.ts
 * @Description: LocalStorage Key 值
 */

const prefix = 'businessService/';

class LocalStorageKey {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  static isLogin = `${prefix}isLogin`;
}

export default LocalStorageKey;
