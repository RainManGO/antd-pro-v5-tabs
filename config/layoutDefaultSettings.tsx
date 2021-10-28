/*
 * @Author: ZY
 * @Date: 2021-08-06 10:23:04
 * @LastEditors: ZY
 * @LastEditTime: 2021-10-28 15:03:54
 * @FilePath: /main/config/layoutDefaultSettings.tsx
 * @Description: layout显示配置
 */

import type { BasicLayoutProps } from '@ant-design/pro-layout';
import { Link } from 'umi';

// const logo = require('../public/logo.svg');

const layoutDefaultSettings: BasicLayoutProps = {
  title: false,
  logo: () => <Link to="/">{/* <img src={logo} alt="" /> */}</Link>,
  siderWidth: 240,
  iconfontUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  collapsedButtonRender: false,
  // 拂晓蓝
  primaryColor: '#1890ff',
};

export default layoutDefaultSettings;
