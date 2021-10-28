/*
 * @Author: ZY
 * @Date: 2021-08-02 11:43:51
 * @LastEditors: ZY
 * @LastEditTime: 2021-08-06 12:00:31
 * @FilePath: /main/src/utils/https.ts
 * @Description: 网络请求封装
 */
import type { HttpClientConfig } from 'axios-mapper';
import HttpClient from 'axios-mapper';
import config from '../../config/serviceSettings';

class Https {
  public static manager: HttpClient;
  private constructor() {}

  public static shared(httpConfig: HttpClientConfig) {
    if (!Https.manager) {
      Https.manager = new HttpClient(httpConfig);
    }
    return Https.manager;
  }

  public static updateConfig(httpConfig?: HttpClientConfig) {
    if (Https.manager) {
      Https.manager.httpClient.defaults = Object.assign(
        Https.manager.httpClient.defaults,
        httpConfig,
      );
    } else {
      throw new Error('为创建Https实例');
    }
  }
}

export default Https.shared(config);
