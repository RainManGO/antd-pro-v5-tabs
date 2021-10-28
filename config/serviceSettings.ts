/*
 * @Author: ZY
 * @Date: 2021-08-02 13:51:51
 * @LastEditors: ZY
 * @LastEditTime: 2021-08-02 15:03:53
 * @FilePath: /main/config/serviceSettings.ts
 * @Description: 网络请求配置类
 */

import { HttpClientConfig } from 'axios-mapper';
import { baseURL } from "@/constant/service";

const config: HttpClientConfig = {
    baseURL,
    log: false,
    checkQuickClick: false,
    headers: {
      token: '',
    },
};

export default config
  