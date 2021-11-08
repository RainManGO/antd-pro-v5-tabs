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

  const data = [
    {
      class: 'A',
      value: [
        '功能名称功能功能名1',
        '功能名称功能功能名2',
        '功能名称功能功能名3',
        '功能名称功能功能名4',
        '功能名称功能功能名5',
        '功能名称功能功能名6',
        '功能名称功能功能名7',
        '功能名称功能功能名8',
        '功能名称功能功能名9',
        '功能名称功能功能名10',
      ],
    },
    {
      class: 'B',
      value: [
        '功能名称功能功能名1',
        '功能名称功能功能名2',
        '功能名称功能功能名3',
        '功能名称功能功能名4',
        '功能名称功能功能名5',
        '功能名称功能功能名6',
        '功能名称功能功能名7',
        '功能名称功能功能名8',
        '功能名称功能功能名9',
        '功能名称功能功能名10',
      ],
    },
    {
      class: 'C',
      value: [
        '功能名称功能功能名1',
        '功能名称功能功能名2',
        '功能名称功能功能名3',
        '功能名称功能功能名4',
        '功能名称功能功能名5',
        '功能名称功能功能名6',
        '功能名称功能功能名7',
        '功能名称功能功能名8',
        '功能名称功能功能名9',
        '功能名称功能功能名10',
      ],
    },
    {
      class: 'D',
      value: [
        '功能名称功能功能名1',
        '功能名称功能功能名2',
        '功能名称功能功能名3',
        '功能名称功能功能名4',
        '功能名称功能功能名5',
        '功能名称功能功能名6',
        '功能名称功能功能名7',
        '功能名称功能功能名8',
        '功能名称功能功能名9',
        '功能名称功能功能名10',
      ],
    },
    {
      class: 'E',
      value: [
        '功能名称功能功能名1',
        '功能名称功能功能名2',
        '功能名称功能功能名3',
        '功能名称功能功能名4',
        '功能名称功能功能名5',
        '功能名称功能功能名6',
        '功能名称功能功能名7',
        '功能名称功能功能名8',
        '功能名称功能功能名9',
        '功能名称功能功能名10',
      ],
    },
    {
      class: 'F',
      value: [
        '功能名称功能功能名1',
        '功能名称功能功能名2',
        '功能名称功能功能名3',
        '功能名称功能功能名4',
        '功能名称功能功能名5',
        '功能名称功能功能名6',
        '功能名称功能功能名7',
        '功能名称功能功能名8',
        '功能名称功能功能名9',
        '功能名称功能功能名10',
      ],
    },
    {
      class: 'G',
      value: [
        '功能名称功能功能名1',
        '功能名称功能功能名2',
        '功能名称功能功能名3',
        '功能名称功能功能名4',
        '功能名称功能功能名5',
        '功能名称功能功能名6',
        '功能名称功能功能名7',
        '功能名称功能功能名8',
        '功能名称功能功能名9',
        '功能名称功能功能名10',
      ],
    },
  ];

  return (
    <div className="all-function-wrap">
      <div className="header">
        <div className="search">
          <Input size="middle" placeholder="请输入关键词进行搜索" prefix={<SearchOutlined />} />
        </div>
        <div className="two-way">
          <div
            className={`one ${way === 'Waterfall' && 'select'}`}
            onClick={() => {
              setWay('Waterfall');
            }}
          >
            全部功能
          </div>
          <div
            className={`two ${way === 'Alphabetize' && 'select'}`}
            onClick={() => {
              setWay('Alphabetize');
            }}
          >
            按字母检索
          </div>
        </div>
      </div>
      <div className="content">{way === 'Alphabetize' && <Alphabetize data={data} />}</div>
    </div>
  );
};

export default AllFunction;
