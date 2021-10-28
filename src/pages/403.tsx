/*
 * @Author: ZY
 * @Date: 2021-10-28 13:52:14
 * @LastEditors: ZY
 * @LastEditTime: 2021-10-28 13:53:24
 * @FilePath: /main/src/pages/403.tsx
 * @Description: 文件描述
 */

import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NoAccessPage: React.FC = () => (
  <Result
    status="403"
    title="403"
    subTitle="这是一个403,你没有权限"
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        Back Home
      </Button>
    }
  />
);

export default NoAccessPage;
