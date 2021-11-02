/*
 * @Author: ZY
 * @Date: 2021-08-13 10:22:36
 * @LastEditors: ZY
 * @LastEditTime: 2021-11-02 09:44:36
 * @FilePath: /main/src/pages/one/index.tsx
 * @Description: 文件描述
 */

import NoAccessPage from '@/pages/403';
import { Access, useAccess } from 'umi';

const IndexPage = () => {
  const access = useAccess();
  return (
    <Access accessible={access.canReadAdmin} fallback={<NoAccessPage />}>
      <div>one权限测试 隐藏</div>
    </Access>
  );
};
export default IndexPage;
