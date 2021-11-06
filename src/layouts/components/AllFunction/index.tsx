import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import './index.less';
import Alphabetize from './components/Alphabetize';

const AllFunction: React.FC<{
  data: any;
}> = (props) => {
  const [way, setWay] = useState('Alphabetize');
  console.log(props);

  return (
    <div className="all-function-wrap">
      <div className="header">
        <div className="search">
          <Input size="middle" placeholder="请输入关键词进行搜索" prefix={<SearchOutlined />} />
        </div>
        <div className="two-way">
          <div
            className="one"
            onClick={() => {
              setWay('Waterfall');
            }}
          >
            全部功能
          </div>
          <div
            className="two"
            onClick={() => {
              setWay('Alphabetize');
            }}
          >
            按字母检索
          </div>
        </div>
      </div>
      <div className="content">{way === 'Alphabetize' && <Alphabetize />}</div>
    </div>
  );
};

export default AllFunction;
