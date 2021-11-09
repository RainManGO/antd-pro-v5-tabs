import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import './index.less';
import Alphabetize from './components/Alphabetize';
import Waterfall from './components/Waterfall';

const AllFunction: React.FC<{
  data: any;
}> = (props) => {
  const [way, setWay] = useState('Waterfall');
  console.log(props);

  const data = [
    {
      class: 'A',
      title: '采购报销',
      value: [
        '功能名称功能功能名1',
        '功能名称功能功能名2',
        '功能名称功能功能名3',
        '功能名称功能功能名4',
        '功能名称功能功能名5',
        '功能名称功能功能名6',
        // '功能名称功能功能名7',
        // '功能名称功能功能名8',
        // '功能名称功能功能名9',
        // '功能名称功能功能名10',
      ],
    },
    {
      class: 'B',
      title: '采购报销',
      value: [
        '功能名称功能功能名1',
        '功能名称功能功能名2',
        // '功能名称功能功能名3',
        // '功能名称功能功能名4',
        // '功能名称功能功能名5',
        // '功能名称功能功能名6',
        // '功能名称功能功能名7',
        // '功能名称功能功能名8',
        // '功能名称功能功能名9',
        // '功能名称功能功能名10',
      ],
    },
    {
      class: 'C',
      title: '采购报销',
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
      title: '采购报销',
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
        // '功能名称功能功能名10',
      ],
    },
    {
      class: 'E',
      title: '采购报销',
      value: [
        '功能名称功能功能名1',
        '功能名称功能功能名2',
        // '功能名称功能功能名3',
        // '功能名称功能功能名4',
        // '功能名称功能功能名5',
        // '功能名称功能功能名6',
        // '功能名称功能功能名7',
        // '功能名称功能功能名8',
        // '功能名称功能功能名9',
        // '功能名称功能功能名10',
      ],
    },
    {
      class: 'F',
      title: '采购报销',
      value: [
        '功能名称功能功能名1',
        '功能名称功能功能名2',
        '功能名称功能功能名3',
        '功能名称功能功能名4',
        '功能名称功能功能名5',
        '功能名称功能功能名6',
        // '功能名称功能功能名7',
        // '功能名称功能功能名8',
        // '功能名称功能功能名9',
        // '功能名称功能功能名10',
      ],
    },
    {
      class: 'G',
      title: '采购报销',
      value: [
        '功能名称功能功能名1',
        '功能名称功能功能名2',
        '功能名称功能功能名3',
        '功能名称功能功能名4',
        // '功能名称功能功能名5',
        // '功能名称功能功能名6',
        // '功能名称功能功能名7',
        // '功能名称功能功能名8',
        // '功能名称功能功能名9',
        // '功能名称功能功能名10',
      ],
    },
    {
      class: 'H',
      title: '采购报销',
      value: [
        '功能名称功能功能名1',
        '功能名称功能功能名2',
        // '功能名称功能功能名3',
        // '功能名称功能功能名4',
        // '功能名称功能功能名5',
        // '功能名称功能功能名6',
        // '功能名称功能功能名7',
        // '功能名称功能功能名8',
        // '功能名称功能功能名9',
        '功能名称功能功能名10',
      ],
    },
    {
      class: 'I',
      title: '采购报销',
      value: [
        '功能名称功能功能名1',
        '功能名称功能功能名2',
        '功能名称功能功能名3',
        '功能名称功能功能名4',
        '功能名称功能功能名5',
        '功能名称功能功能名6',
        '功能名称功能功能名7',
        // '功能名称功能功能名8',
        // '功能名称功能功能名9',
        // '功能名称功能功能名10',
      ],
    },
    {
      class: 'J',
      title: '采购报销',
      value: [
        '功能名称功能功能名1',
        '功能名称功能功能名2',
        '功能名称功能功能名3',
        '功能名称功能功能名4',
        // '功能名称功能功能名5',
        // '功能名称功能功能名6',
        // '功能名称功能功能名7',
        // '功能名称功能功能名8',
        // '功能名称功能功能名9',
        '功能名称功能功能名10',
      ],
    },
    {
      class: 'K',
      title: '采购报销',
      value: [
        '功能名称功能功能名1',
        '功能名称功能功能名2',
        // '功能名称功能功能名3',
        // '功能名称功能功能名4',
        // '功能名称功能功能名5',
        // '功能名称功能功能名6',
        // '功能名称功能功能名7',
        '功能名称功能功能名8',
        '功能名称功能功能名9',
        '功能名称功能功能名10',
      ],
    },
    {
      class: 'L',
      title: '采购报销',
      value: [
        '功能名称功能功能名1',
        '功能名称功能功能名2',
        '功能名称功能功能名3',
        '功能名称功能功能名4',
        '功能名称功能功能名5',
        '功能名称功能功能名6',
        '功能名称功能功能名7',
        // '功能名称功能功能名8',
        // '功能名称功能功能名9',
        // '功能名称功能功能名10',
      ],
    },
    {
      class: 'M',
      title: '采购报销',
      value: [
        '功能名称功能功能名1',
        '功能名称功能功能名2',
        '功能名称功能功能名3',
        // '功能名称功能功能名4',
        // '功能名称功能功能名5',
        // '功能名称功能功能名6',
        // '功能名称功能功能名7',
        '功能名称功能功能名8',
        '功能名称功能功能名9',
        '功能名称功能功能名10',
      ],
    },
    {
      class: 'N',
      title: '采购报销',
      value: [
        '功能名称功能功能名1',
        '功能名称功能功能名2',
        '功能名称功能功能名3',
        '功能名称功能功能名4',
        // '功能名称功能功能名5',
        // '功能名称功能功能名6',
        // '功能名称功能功能名7',
        // '功能名称功能功能名8',
        // '功能名称功能功能名9',
        // '功能名称功能功能名10',
      ],
    },
    {
      class: 'O',
      title: '采购报销',
      value: [
        '功能名称功能功能名1',
        '功能名称功能功能名2',
        '功能名称功能功能名3',
        '功能名称功能功能名4',
        '功能名称功能功能名5',
        '功能名称功能功能名6',
        // '功能名称功能功能名7',
        // '功能名称功能功能名8',
        // '功能名称功能功能名9',
        // '功能名称功能功能名10',
      ],
    },
    {
      class: 'P',
      title: '采购报销',
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
      class: 'Q',
      title: '采购报销',
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
      class: 'R',
      title: '采购报销',
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
      class: 'S',
      title: '采购报销',
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
      class: 'T',
      title: '采购报销',
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
      class: 'U',
      title: '采购报销',
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
      class: 'V',
      title: '采购报销',
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
      class: 'W',
      title: '采购报销',
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
      class: 'X',
      title: '采购报销',
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
      class: 'Y',
      title: '采购报销',
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
      class: 'Z',
      title: '采购报销',
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
      <div className="content">
        {way === 'Alphabetize' ? <Alphabetize data={data} /> : <Waterfall data={data} />}
      </div>
    </div>
  );
};

export default AllFunction;
