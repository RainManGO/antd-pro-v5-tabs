import React, { useState } from 'react';
import { Button, Table, Input } from 'antd';
import './index.less';
import PlusOutlined from '@ant-design/icons/lib/icons/PlusOutlined';
import { SearchOutlined } from '@ant-design/icons';
import lianheImg from '@/assets/lianhe.png';
import shuaxinImg from '@/assets/shuaxin.png';
import dropDownArrowImg from '@/assets/dropDownArrow.png';
import ShapeImg from '@/assets/Shape.png';

export default function TableShare() {
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [select, setSelect] = useState(1);
  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: '标识',
      dataIndex: 'biaoshi',
    },
    {
      title: '单据编号',
      dataIndex: 'danjubianhao',
    },
    {
      title: '单据类型',
      dataIndex: 'leixing',
    },
    {
      title: '金额',
      dataIndex: 'jine',
    },
    {
      title: '业务事由',
      dataIndex: 'shiyou',
    },
    {
      title: '创建时间',
      dataIndex: 'shijian',
    },
    {
      title: '操作',
      dataIndex: 'chaozuo',
      render: (text: string) => {
        return (
          <div className="ant-table-button">
            <div>提交</div>
            <div>更多</div>
          </div>
        );
      },
    },
  ];

  interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }

  const data = [
    {
      key: '1',
      index: 'John Brown',
      biaoshi: '加急',
      danjubianhao: 'BX1002202110110001',
      leixing: '业务招待费报销单',
      jine: '999.99',
      shiyou: '业务事由业务事由业务事由',
      shijian: '2021-10-28 10:55',
      chaozuo: '随便',
    },
    {
      key: '1',
      index: 'John Brown',
      biaoshi: '加急',
      danjubianhao: 'BX1002202110110001',
      leixing: '业务招待费报销单',
      jine: '999.99',
      shiyou: '业务事由业务事由业务事由',
      shijian: '2021-10-28 10:55',
      chaozuo: '随便',
    },
    {
      key: '1',
      index: 'John Brown',
      biaoshi: '加急',
      danjubianhao: 'BX1002202110110001',
      leixing: '业务招待费报销单',
      jine: '999.99',
      shiyou: '业务事由业务事由业务事由',
      shijian: '2021-10-28 10:55',
      chaozuo: '随便',
    },
    {
      key: '1',
      index: 'John Brown',
      biaoshi: '加急',
      danjubianhao: 'BX1002202110110001',
      leixing: '业务招待费报销单',
      jine: '999.99',
      shiyou: '业务事由业务事由业务事由',
      shijian: '2021-10-28 10:55',
      chaozuo: '随便',
    },
    {
      key: '1',
      index: 'John Brown',
      biaoshi: '加急',
      danjubianhao: 'BX1002202110110001',
      leixing: '业务招待费报销单',
      jine: '999.99',
      shiyou: '业务事由业务事由业务事由',
      shijian: '2021-10-28 10:55',
      chaozuo: '随便',
    },
    {
      key: '1',
      index: 'John Brown',
      biaoshi: '加急',
      danjubianhao: 'BX1002202110110001',
      leixing: '业务招待费报销单',
      jine: '999.99',
      shiyou: '业务事由业务事由业务事由',
      shijian: '2021-10-28 10:55',
      chaozuo: '随便',
    },
    {
      key: '1',
      index: 'John Brown',
      biaoshi: '加急',
      danjubianhao: 'BX1002202110110001',
      leixing: '业务招待费报销单',
      jine: '999.99',
      shiyou: '业务事由业务事由业务事由',
      shijian: '2021-10-28 10:55',
      chaozuo: '随便',
    },
    {
      key: '1',
      index: 'John Brown',
      biaoshi: '加急',
      danjubianhao: 'BX1002202110110001',
      leixing: '业务招待费报销单',
      jine: '999.99',
      shiyou: '业务事由业务事由业务事由',
      shijian: '2021-10-28 10:55',
      chaozuo: '随便',
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <div className="ant-table-wrap">
      <div className="ant-header">
        <div className="top">
          <div className="left">
            <dl>
              <dd
                className={`${select === 1 && 'active'}`}
                onClick={() => {
                  setSelect(1);
                }}
              >
                <span>待提交</span>
                <span>12</span>
              </dd>
              <dd
                className={`${select === 2 && 'active'}`}
                onClick={() => {
                  setSelect(2);
                }}
              >
                <span>待协同</span>
                <span>6</span>
              </dd>
              <dd
                className={`${select === 3 && 'active'}`}
                onClick={() => {
                  setSelect(3);
                }}
              >
                <span>已退回</span>
                <span>2</span>
              </dd>
              <dd
                className={`${select === 4 && 'active'}`}
                onClick={() => {
                  setSelect(4);
                }}
              >
                <span>审批中</span>
                <span>10</span>
              </dd>
              <dd
                className={`${select === 5 && 'active'}`}
                onClick={() => {
                  setSelect(5);
                }}
              >
                <span>待评价</span>
                <span>12</span>
              </dd>
              <dd
                className={`${select === 6 && 'active'}`}
                onClick={() => {
                  setSelect(6);
                }}
              >
                <span>所有数据</span>
              </dd>
            </dl>
          </div>
          <div className="right">
            <Button type="primary" className="left-button">
              <span>
                <PlusOutlined />
              </span>
              我要制单
            </Button>
            <div>
              <Input
                size="middle"
                placeholder="请输入单据编号或业务事由"
                prefix={<SearchOutlined />}
                suffix={
                  <div className="input-suffix-img">
                    <img src={lianheImg} style={{ width: '12px' }} />
                  </div>
                }
                style={{ width: '238px', fontSize: '10px' }}
              />
            </div>
            <Button type="default" className="right-button">
              <img src={shuaxinImg} alt="加载失败..." /> 刷新
            </Button>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={ShapeImg} alt="加载失败..." />
            已选择<span>0</span>项,金额总计: <span>0</span>元
          </div>
          <div className="right">
            <Button type="default" className="submit-button">
              提交
            </Button>
            <Button type="default" className="log-button">
              打印
              <img src={dropDownArrowImg} alt="加载失败..." />
            </Button>
          </div>
        </div>
      </div>
      <div className="ant-table">
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  );
}
