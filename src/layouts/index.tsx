/*
 * @Author: ZY
 * @Date: 2021-07-21 11:58:40
 * @LastEditors: ZLL
 * @LastEditTime: 2021-11-05 15:40:25
 * @FilePath: \main\src\layouts\index.tsx
 * @Description: 布局入口文件
 */
// @ts-nocheck
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
//主题
import whiteTheme from '@/themes/whiteTheme.ts';
import blackTheme from '@/themes/blackTheme.ts';
import '@/themes/theme.less';
import logoImg from '@/assets/logo.png';
import logoFontImg from '@/assets/logoFont.png';
import addPrepareImg from '@/assets/addPrepare.png';
import bottomMenuNavImg from '@/assets/bottomMenuNav.png';
import CustomNav from './components/CustomNav';

//样式
import './index.less';
interface LayoutsType extends ProLayoutProps {
  tagsModel: Tag[];
  loading: boolean;
}

const IndexPage: ConnectRC<LayoutsType> = (props) => {
  console.log('props', props);

  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({ fixSiderbar: true });
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('selectedTheme') ?? 'black');
  const [customNav, setCustomNav] = useState<boolean>(true);

  const refresh = () => {};

  getThemeStyle();

  /**
   * @description: 获取选中的key
   * @param {*}
   * @return {*}
   */
  const getActiveKey = (tags: Tag[]) => {
    return tags.filter((t) => t.active)[0].key;
  };

  function getThemeStyle() {
    const themeStyle1 = theme == 'black' ? blackTheme : whiteTheme;
    themeStyle1.forEach((item: any) => {
      document.body.style.setProperty(item.property, item.value);
    });
  }

  function changeTheme(themes: any) {
    console.log('themes', themes);
    setTheme(themes);
    getThemeStyle();
  }
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
          return (
            <div className={`menu-logo ${collapsed ? 'closed' : 'open'}`}>
              <img src={logoImg} alt="logo未加载" />
              {!collapsed && <img src={logoFontImg} alt="logo未加载" />}
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
            <div className="custom">
              <div className="zhidan">
                <div className={menu.collapsed ? 'closed' : 'open'}>
                  <img src={addPrepareImg} alt="加载失败..." />
                  {!menu.collapsed && <p>我要制单</p>}
                </div>
              </div>
              <div className={`divider ${menu?.collapsed ? 'closed' : 'open'}`} />
              <div className={`all-function ${menu?.collapsed ? 'closed' : 'open'}`}>
                <div className={'position'}>
                  <img src={bottomMenuNavImg} alt="加载失败..." />
                  {!menu?.collapsed && '全部功能'}
                </div>
              </div>
            </div>
          );
        }}
        menuFooterRender={(menu) => {
          return (
            <div onClick={refresh} className={`bottomNav ${menu?.collapsed ? 'closed' : 'open'}`}>
              <div
                className={'position'}
                onClick={() => {
                  setCustomNav(!customNav);
                }}
              >
                <img src={bottomMenuNavImg} alt="加载失败..." />
                {!menu?.collapsed && '自定义导航'}
              </div>
              {customNav && (
                <div className="custom-nav-wrap">
                  <CustomNav data={1} />
                </div>
              )}
            </div>
          );
        }}
        rightContentRender={() => <RightContent changeTheme={changeTheme} theme={theme} />}
      >
        <div id="myWrapperLoading">
          <TabsView
            activeKey={getActiveKey(props.tagsModel)}
            tags={props.tagsModel}
            route={props.route}
            dispatch={props.dispatch}
          />
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
