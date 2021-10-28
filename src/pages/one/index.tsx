/*
 * @Author: ZY
 * @Date: 2021-08-13 10:22:36
 * @LastEditors: ZY
 * @LastEditTime: 2021-10-28 14:17:33
 * @FilePath: /main/src/pages/one/index.tsx
 * @Description: 文件描述
 */

import React from 'react';
import NoAccessPage from '@/pages/403';
import { Access, useAccess } from 'umi';

const IndexPage: React.FC<{}> = (props) => {
  const access = useAccess();
  return (
    <Access accessible={access.canReadAdmin} fallback={<NoAccessPage />}>
      <div>one权限测试 隐藏</div>
    </Access>
  );
};
export default IndexPage;
