import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import './index.less';

const AllFunction: React.FC<{
  data: any;
}> = (props) => {
  console.log(props);

  return (
    <div className="all-function-wrap">
      <div className="header">
        <div className="search">
          <Input size="middle" placeholder="请输入关键词进行搜索" prefix={<SearchOutlined />} />
        </div>
        <div className="two-way">
          <div className="one">全部功能</div>
          <div className="two">按字母检索</div>
        </div>
      </div>
    </div>
  );
};

export default AllFunction;
