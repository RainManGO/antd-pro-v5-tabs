/*
 * @Author: ZY
 * @Date: 2021-07-21 11:58:40
 * @LastEditors: ZY
 * @LastEditTime: 2021-08-06 11:31:00
 * @FilePath: /main/src/layouts/index.tsx
 * @Description: 布局入口文件
 */
import React, { useState } from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import layoutDefaultSettings from './layoutDefaultSettings';
import type {
  ProSettings,
  BasicLayoutProps as ProLayoutProps,
  MenuDataItem,
} from '@ant-design/pro-layout';
import ProLayout, { SettingDrawer, ProBreadcrumb } from '@ant-design/pro-layout';

const IndexPage: React.FC<ProLayoutProps> = (props) => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({ fixSiderbar: true });
  const [keyWord, setKeyWord] = useState('');

  const filterByMenuDate = (data: MenuDataItem[], words: string): MenuDataItem[] =>
    data
      .map((item) => {
        if (
          (item.name && item.name.includes(words)) ||
          filterByMenuDate(item.children || [], words).length > 0
        ) {
          return {
            ...item,
            children: filterByMenuDate(item.children || [], words),
          };
        }

        return undefined;
      })
      .filter((item) => item) as MenuDataItem[];

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        headerContentRender={() => <ProBreadcrumb />}
        menuItemRender={(menuItemProps, defaultDom) => {
          return (
            <a href={menuItemProps.path} target="_blank">
              {defaultDom}
            </a>
          );
        }}
        route={props.route}
        menuExtraRender={({ collapsed }) =>
          !collapsed && (
            <Input.Search
              onSearch={(e) => {
                setKeyWord(e);
              }}
            />
          )
        }
        postMenuData={(menus) => filterByMenuDate(menus || [], keyWord)}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
        {...settings}
        {...layoutDefaultSettings}
      >
        {props.children}
      </ProLayout>
      <SettingDrawer
        // pathname={pathname}
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams
      />
    </div>
  );
};
export default IndexPage;
