import React, { useEffect, useState } from 'react';
import './index.less';
import { Checkbox, Button, Row, Col, Space } from 'antd';
import returnImg from '@/assets/return.png';

type customNavData = {
  title: string;
  items: string[];
};
type item = {
  data: string;
  checked: boolean;
};

type rightData = {
  title: string;
  items: item[];
};

const CustomNav: React.FC<{
  isClose: () => void;
  // confirm: (data: item[]) => void;
  data: customNavData[];
}> = (props) => {
  const [leftData, setLeftData] = useState<item[]>([]);
  const [rightData, setRightData] = useState<rightData[]>([]);

  const { isClose, data } = props;

  // 处理数据格式,增加checkbox的受控参数checked
  const formatter = () => {
    const formatterData = data.map((item) => {
      const dataArr = item.items.map((item1) => {
        return {
          data: item1,
          checked: false,
        };
      });
      return {
        title: item.title,
        items: dataArr,
      };
    });
    setRightData(formatterData);
  };

  useEffect(() => {
    formatter();
  }, []);

  const ctrolLeftData = (value: string, checked: boolean) => {
    const leftDataEdit: item[] = [...leftData];
    let newLeftData: item[] = [];
    if (checked) {
      leftDataEdit.push({ data: value, checked: true });
      setLeftData(leftDataEdit);
    } else {
      newLeftData = leftDataEdit.filter((item) => value !== item.data);
      setLeftData(newLeftData);
    }
  };

  const ctrolRightData = (value: string, checked: boolean) => {
    //超过允许值不可在增加
    if (leftData.length > 4 && checked) {
      return;
    }
    //处理受控checked
    const newRight: any = [];
    rightData.map((item) => {
      const newItems = item.items.map((item1) => {
        if (item1.data === value) {
          ctrolLeftData(value, checked);
          return { ...item1, checked: checked };
        } else {
          return item1;
        }
      });
      newRight.push({ ...item, items: newItems });
    });
    setRightData(newRight);
  };

  const onChange = (e: any) => {
    ctrolRightData(e.target.value, e.target.checked);
  };

  const leftPopEvent = (value: string, checked: boolean) => {
    ctrolLeftData(value, checked);
    ctrolRightData(value, false);
  };

  const leftDataArr = () => {
    return leftData.map((item, index) => {
      return (
        <li key={index.toString()}>
          <div className="item">
            <div className="text">{item.data}</div>
            <img
              src={returnImg}
              alt="图标加载失败"
              onClick={() => {
                leftPopEvent(item.data, false);
              }}
            />
          </div>
        </li>
      );
    });
  };

  const selectItems = () => {
    return rightData.map((item1, i) => {
      const selectItem = item1.items.map((item2, index) => {
        return (
          <dd key={(item2.data + index).toString()}>
            <Checkbox value={item2.data} checked={item2.checked} onChange={onChange}>
              <div>{item2.data}</div>
            </Checkbox>
          </dd>
        );
      });
      return (
        <li key={i.toString()}>
          <div className="title">{item1.title}</div>
          <div className="items">
            <dl>{selectItem}</dl>
          </div>
        </li>
      );
    });
  };

  return (
    <div className="custom-nav-comp">
      <div className="header">
        <div className="title">自定义导航</div>
        <img
          src={returnImg}
          alt="图标加载失败"
          onClick={() => {
            isClose();
          }}
        />
      </div>
      <div className="content">
        <div className="left">
          <ul>{leftDataArr()}</ul>
          <div className="tip">
            {leftData.length} <span>/5</span>
          </div>
        </div>
        <div className="right">
          <div className="position">
            <ul>{selectItems()}</ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <Row>
          <Space size="large">
            <Col>
              <Button type="primary">确定</Button>
            </Col>
            <Col>
              <Button
                type="primary"
                onClick={() => {
                  isClose();
                }}
              >
                取消
              </Button>
            </Col>
          </Space>
        </Row>
      </div>
    </div>
  );
};

export default CustomNav;
