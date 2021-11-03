/*
 * @Author: ZY
 * @Date: 2021-07-21 11:58:40
 * @LastEditors: ZY
 * @LastEditTime: 2021-11-02 09:04:59
 * @FilePath: /main/src/layouts/index.tsx
 * @Description: 布局入口文件
 */
import { useState } from 'react';
import { connect } from 'umi';
import { Link } from 'react-router-dom';
import type { ConnectRC, Tag } from 'umi';
import TabsView from '@/components/TabsView';
import RightContent from '@/components/RightContent';
import ProLayout, { SettingDrawer } from '@ant-design/pro-layout';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import layoutDefaultSettings from '../../config/layoutDefaultSettings';
import type { ProSettings, BasicLayoutProps as ProLayoutProps } from '@ant-design/pro-layout';
import './index.less';
import logo from '@/assets/logo.png';
import logoFont from '@/assets/logoFont.png';
import zhidan from '@/assets/zhidan.png';
import bottomMenuNav from '@/assets/bottomMenuNav.png';

interface LayoutsType extends ProLayoutProps {
  tagsModel: Tag[];
  loading: boolean;
}

const IndexPage: ConnectRC<LayoutsType> = (props) => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({ fixSiderbar: true });
  const [collapsed, setCollapsed] = useState(false);
  const refresh = () => {};

  /**
   * @description: 获取选中的key
   * @param {*}
   * @return {*}
   */
  const getActiveKey = (tags: Tag[]) => {
    return tags.filter((t) => t.active)[0].key;
  };

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        {...settings}
        {...layoutDefaultSettings}
        collapsed={collapsed}
        menuHeaderRender={() => {
          if (collapsed) {
            return (
              <div className="collapsed-logo">
                <img src={logo} alt="logo未加载" />
              </div>
            );
          }
          return (
            <div className="menu-logo">
              <img src={logo} alt="logo未加载" />
              <img src={logoFont} alt="logo未加载" />
            </div>
          );
        }}
        headerContentRender={() => {
          return (
            <div
              onClick={() => setCollapsed(!collapsed)}
              style={{
                width: '32px',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
          );
        }}
        menuItemRender={(menuItemProps, defaultDom) => {
          return <Link to={menuItemProps.path ?? '/'}>{defaultDom}</Link>;
        }}
        route={props.route}
        menuExtraRender={(menu) => {
          return (
            !menu.collapsed && (
              <div className="zhidan">
                <img src={zhidan} alt="加载失败..." />
                <p>我要制单</p>
              </div>
            )
          );
        }}
        menuFooterRender={(menu) => {
          return (
            !menu?.collapsed && (
              <div onClick={refresh} className="bottomNav">
                <div className="bottomNavWrap">
                  <img src={bottomMenuNav} alt="加载失败..." />
                  自定义导航
                </div>
              </div>
            )
          );
        }}
        rightContentRender={() => <RightContent></RightContent>}
      >
        <div id="myWrapperLoading">
          <TabsView
            activeKey={getActiveKey(props.tagsModel)}
            tags={props.tagsModel}
            route={props.route}
            dispatch={props.dispatch}
          ></TabsView>
        </div>
      </ProLayout>
      <SettingDrawer
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        hideHintAlert={true}
        disableUrlParams
      />
    </div>
  );
};

export default connect(({ tagsModel }: { tagsModel: Tag[] }) => ({
  tagsModel,
}))(IndexPage);
