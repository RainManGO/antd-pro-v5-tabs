/*
 * @Author: ZLL
 * @Date: 2021-11-02 09:51:42
 * @LastEditors: ZLL
 * @LastEditTime: 2021-11-02 11:31:06
 * @FilePath: \main\src\components\RightContent\index.tsx
 * @Description: 文件描述
 */
import { Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useModel, SelectLang } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
import ThemeIcon from '../theme-icon';
export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC<{ changeTheme: any; theme: string }> = (props) => {
  const { changeTheme, theme } = props;
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
    <Space className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue="umi ui"
        options={[
          { label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>, value: 'umi ui' },
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
      <span
        className={styles.action}
        onClick={() => {
          window.open('https://pro.ant.design/docs/getting-started');
        }}
      >
        <QuestionCircleOutlined />
      </span>
      <Avatar />
      <SelectLang className={styles.action} />
      {/* 皮肤切换 */}
      <div className="userBlock">
        <ThemeIcon
          type="User"
          width="0.1306rem"
          height="0.1503rem"
          changeTheme={changeTheme}
          theme={theme}
        />
      </div>
    </Space>
  );
};
export default GlobalHeaderRight;
