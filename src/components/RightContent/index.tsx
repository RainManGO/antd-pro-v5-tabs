/*
 * @Author: ZLL
 * @Date: 2021-11-05 15:39:41
 * @LastEditors: ZLL
 * @LastEditTime: 2021-11-05 15:42:09
 * @FilePath: \main\src\components\RightContent\index.tsx
 * @Description: 文件描述
 */
import { Badge } from 'antd';
import React from 'react';
import { useModel } from 'umi';
import AvatarSelf from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
// import ThemeIcon from '../theme-icon';
import imgMessage from '@/assets/message.png';
import imgSetting from '@/assets/setting.png';
import Weather from './component/Weather';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC<{ changeTheme: any; theme: string }> = () => {
  // const { changeTheme, theme } = props;
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  console.log(className);

  return (
    <div className={styles.rightContentWrap}>
      <div className={styles.left}>
        <HeaderSearch
          className={`${styles.action} ${styles.search}`}
          placeholder="在系统中搜索功能/单据"
          // defaultValue="umi ui"
          options={[
            {
              label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>,
              value: 'umi ui',
            },
          ]}
          // onSearch={value => {
          //   console.log('input', value);
          // }}
        />
      </div>
      <div className={styles.right}>
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
        <div className="avatar">
          <AvatarSelf />
        </div>
      </div>
    </div>
  );
};
export default GlobalHeaderRight;
