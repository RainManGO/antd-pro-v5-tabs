/*
 * @Author: ZY
 * @Date: 2021-11-11 11:05:24
 * @LastEditors: ZY
 * @LastEditTime: 2021-11-11 11:05:37
 * @FilePath: /main/src/components/RightContent/component/Weather/index.tsx
 * @Description: 文件描述
 */
import React from 'react';
import styles from './index.less';
import imgSetting from '@/assets/setting.png';
import { Row, Col, Space } from 'antd';

interface Weather {
  temperature: number;
  address: string;
  description: string;
  date: string;
}
const Weather: React.FC<{
  weather: Weather;
}> = (props) => {
  const { weather } = props;
  return (
    <div className={styles.weatherWrap}>
      <h2>
        {weather.temperature} <span>°</span>
      </h2>
      <div className={styles.rightWrap}>
        <Row className={styles.top} align="middle">
          <Space size="small">
            <Col>
              <img src={imgSetting} alt="加载失败..." />
            </Col>
            <Col>{weather.address}</Col>
            <Col>{weather.description}</Col>
          </Space>
        </Row>
        <Row style={{ height: '10px', marginLeft: '5px' }}>
          <Col style={{ color: 'gray' }}>{weather.date}</Col>
        </Row>
      </div>
    </div>
  );
};

export default Weather;
