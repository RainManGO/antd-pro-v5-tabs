/*
 * @Author: ZY
 * @Date: 2021-10-27 13:39:15
 * @LastEditors: ZY
 * @LastEditTime: 2021-10-27 16:42:54
 * @FilePath: /main/src/pages/user/Login/service.ts
 * @Description: 登录接口服务
 */

import https from '@/utils/https';
import { ContentType, Method } from 'axios-mapper';

// {"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiLmnY7mt5HlqJ8iLCJVTklUSUQiOiIwMDAwIiwiYXZhdGFyIjoiaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL0JpYXpmYW54bWFtTlJveHhWeGthLnBuZyIsImF1dGhvcml0aWVzIjpbIjEyMzQiXSwiY2xpZW50X2lkIjoic3dvcmQiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwibGljZW5zZSI6InBvd2VyZWQgYnkgcGFuc29mdCIsInVzZXJfaWQiOiIxNzIwMTAwMSIsImZ6empnIjoiMTcyMCIsInJvbGVfaWQiOiJhZG1pbmlzdHJhdG9yIiwic2NvcGUiOlsiYWxsIl0sIkZfWkdIQiI6IjE3MjAxMDAxIiwiaW1Vc2VySWQiOiIiLCJpbVVzZXJQYXNzd29yZCI6IiIsImV4cCI6MTYzNTU5ODU4MCwiZGVwdF9pZCI6IjAwMDAiLCJqdGkiOiI2MjA4ZTI0NS00NzA2LTQwNmMtOWRhMy1hODVlZjk1NWI0ZDIifQ.WohtZJrJGgmpVMObykJrXFJ5TduE1ux65x4Q7jiSxn4","token_type":"bearer","refresh_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiLmnY7mt5HlqJ8iLCJVTklUSUQiOiIwMDAwIiwiYXZhdGFyIjoiaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL0JpYXpmYW54bWFtTlJveHhWeGthLnBuZyIsImF1dGhvcml0aWVzIjpbIjEyMzQiXSwiY2xpZW50X2lkIjoic3dvcmQiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwibGljZW5zZSI6InBvd2VyZWQgYnkgcGFuc29mdCIsInVzZXJfaWQiOiIxNzIwMTAwMSIsImZ6empnIjoiMTcyMCIsInJvbGVfaWQiOiJhZG1pbmlzdHJhdG9yIiwic2NvcGUiOlsiYWxsIl0sIkZfWkdIQiI6IjE3MjAxMDAxIiwiYXRpIjoiNjIwOGUyNDUtNDcwNi00MDZjLTlkYTMtYTg1ZWY5NTViNGQyIiwiaW1Vc2VySWQiOiIiLCJpbVVzZXJQYXNzd29yZCI6IiIsImV4cCI6MTYzNTg0MzM4MCwiZGVwdF9pZCI6IjAwMDAiLCJqdGkiOiI2ZDRmNzE1Zi0yNjdlLTQ1YTMtYmY2OC0zMDgyYmI2MzVlZmIifQ.VzkLpPVoe9sIfr4UwGVWY8jrlFhTevifsW3UUUwIL3I","expires_in":359999,"scope":"all","user_name":"李淑娟","UNITID":"0000","avatar":"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png","client_id":"sword","role_name":"administrator","license":"powered by pansoft","user_id":"17201001","fzzjg":"1720","role_id":"administrator","F_ZGHB":"17201001","imUserId":"","imUserPassword":"","dept_id":"0000","jti":"6208e245-4706-406c-9da3-a85ef955b4d2"}
export interface LoginResult {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  user_name: string;
  uNITID: string;
  avatar: string;
  client_id: string;
  role_name: string;
  license: string;
  user_id: string;
  fzzjg: string;
  role_id: string;
  f_ZGHB: string;
  imUserId: string;
  imUserPassword: string;
  dept_id: string;
  jti: string;
}

export function login(username: string, password: string) {
  return https.request<LoginResult>(
    'auth/blade-auth/oauth/token',
    Method.POST,
    { username, password, grant_type: 'captcha' },
    ContentType.form,
  );
}
