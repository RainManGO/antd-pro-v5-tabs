/*
 * @Author: ZY
 * @Date: 2021-08-13 10:22:36
 * @LastEditors: ZY
 * @LastEditTime: 2021-11-01 14:24:46
 * @FilePath: /main/src/pages/dynamic/index.tsx
 * @Description: 文件描述
 */

import React from 'react';
import { Button } from 'antd';
import { history } from 'umi';

const IndexPage: React.FC<{}> = (props) => {

  const openFormDetail = () => {
    history.push(`/detail/0`);
  };


  const openFormDetail1 = () => {
    history.push(`/detail/1`);
  };

  return (
    <div>
      动态注册路由
      <input></input>
      <Button onClick={openFormDetail}>打开表单详情</Button>
      <Button onClick={openFormDetail1}>打开表单详情1</Button>

    </div>
  );
};
export default IndexPage;
