/*
 * @Author: ZY
 * @Date: 2021-08-06 12:02:00
 * @LastEditors: ZY
 * @LastEditTime: 2021-11-11 09:37:36
 * @FilePath: /main/src/pages/dashboard/index.tsx
 * @Description: 文件描述
 */
import React from 'react';
import './index.less';
import TableAntPro from '@/components/TableList';

const IndexPage: React.FC<{}> = () => {
  return (
    <div className="table-list">
      <TableAntPro />
    </div>
  );
};
export default IndexPage;
