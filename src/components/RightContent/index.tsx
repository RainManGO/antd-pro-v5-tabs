import { Space, Row, Col, Badge } from 'antd';
import React from 'react';
import { useModel } from 'umi';
import AvatarSelf from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
import imgMessage from '@/assets/message.png';
import imgSetting from '@/assets/setting.png';
import Weather from './Weather';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
    <div className={styles.rightContentWrap}>
      <Row>
        <Col span={8} />
        <Col span={4}>
          <HeaderSearch
            className={`${styles.action} ${styles.search}`}
            placeholder="在系统中搜索功能/单据"
            // defaultValue="umi ui"
            options={[
              {
                label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>,
                value: 'umi ui',
              },
              {
                label: <a href="next.ant.design">Ant Design</a>,
                value: 'Ant Design',
              },
              {
                label: <a href="https://protable.ant.design/">Pro Table</a>,
                value: 'Pro Table',
              },
              {
                label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
                value: 'Pro Layout',
              },
            ]}
            // onSearch={value => {
            //   console.log('input', value);
            // }}
          />
        </Col>
        <Col span={12}>
          <Space className={className} size={'large'}>
            <div className="weather">
              <Weather
                weather={{
                  temperature: 18,
                  address: '北京',
                  description: '多云转晴',
                  date: '2021年10月28日',
                }}
              />
            </div>
            <div className={styles.message}>
              <Badge count={5}>
                <img src={imgMessage} alt="加载失败..." />
              </Badge>
            </div>
            <div className={styles.setting}>
              <img src={imgSetting} alt="加载失败..." />
            </div>
            <AvatarSelf />
          </Space>
        </Col>
      </Row>
    </div>
  );
};
export default GlobalHeaderRight;
