/*
 * @Author: ZY
 * @Date: 2021-07-21 11:58:40
 * @LastEditors: ZY
 * @LastEditTime: 2021-11-11 10:34:39
 * @FilePath: /main/src/layouts/index.tsx
 * @Description: 布局入口文件
 */
import { useEffect, useState } from 'react';
import { connect } from 'umi';
import { Link } from 'react-router-dom';
import type { ConnectRC, Tag } from 'umi';
import TabsView from '@/components/TabsView';
import RightContent from '@/components/RightContent';
import ProLayout, { SettingDrawer } from '@ant-design/pro-layout';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import layoutDefaultSettings from '../../config/layoutDefaultSettings';
import type { ProSettings, BasicLayoutProps as ProLayoutProps } from '@ant-design/pro-layout';
// 主题
import whiteTheme from '@/themes/whiteTheme';
import blackTheme from '@/themes/blackTheme';
import '@/themes/theme.less';
// 导入图标
import logoImg from '@/assets/logo.png';
import logoFontImg from '@/assets/logoFont.png';
import addPrepareImg from '@/assets/addPrepare.png';
import bottomMenuNavImg from '@/assets/bottomMenuNav.png';
// 导入组件
import CustomNav from './components/CustomNav';
import AllFunction from './components/AllFunction';
import MakeList from './components/MakeList';

// 样式
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
  const [open, setOpen] = useState({
    AllFunction: false,
    CustomNav: false,
    MakeList: true,
  });

  const refresh = () => {};

  getThemeStyle();

  useEffect(() => {
    onresize = () => {
      document.body.offsetWidth < 1000 && setCollapsed(true);
      document.body.offsetWidth > 1000 && setCollapsed(false);
    };
  }, []);

  /**
   * @description: 获取选中的key
   * @param {*}
   * @return {*}
   */
  const getActiveKey = (tags: Tag[]) => {
    return tags.filter((t) => t.active)[0];
  };

  const customNavData = [
    {
      title: '采购报销',
      items: [
        '费用报销单1',
        '功能名称功能名称5',
        '功能名称功能名称2',
        '功能名称功能名称3',
        '功能名称功能名称4',
        '功能名称功能名称2',
        '功能名称功能名称3',
        '功能名称功能名称4',
      ],
    },
    {
      title: '商旅服务',
      items: ['费用报销单6', '功能名称功能名称7', '功能名称功能名称8', '功能名称功能名称9', '功能名称功能名称10'],
    },
    {
      title: '销售业务',
      items: ['费用报销单11', '功能名称功能名称12', '功能名称功能名称13', '功能名称功能名称14', '功能名称功能名称15'],
    },
    {
      title: '总账业务',
      items: ['费用报销单16', '功能名称功能名称17', '功能名称功能名称18', '功能名称功能名称19', '功能名称功能名称20'],
    },
  ];

  function getThemeStyle() {
    const themeStyle1 = theme === 'black' ? blackTheme : whiteTheme;
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
            <div
              className={`menu-logo ${collapsed ? 'closed' : 'open'} ${
                document.body.offsetWidth < 765 ? 'hiddenLogo' : ''
              }`}
            >
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
                <div
                  className={`position ${menu.collapsed ? 'closed' : 'open'}`}
                  onClick={() => {
                    setOpen({
                      MakeList: !open.MakeList,
                      CustomNav: false,
                      AllFunction: false,
                    });
                  }}
                >
                  <img src={addPrepareImg} alt="加载失败..." />
                  {!menu.collapsed && <p>我要制单</p>}
                </div>
                <div className={`makelist-nav ${menu?.collapsed ? 'closed' : 'open'}`}>
                  <MakeList data={111} />
                </div>
              </div>
              <div className={`divider ${menu?.collapsed ? 'closed' : 'open'}`} />
              <div className={`all-function ${menu?.collapsed ? 'closed' : 'open'}`}>
                <div
                  className="position"
                  onClick={() => {
                    setOpen({
                      MakeList: false,
                      CustomNav: false,
                      AllFunction: !open.AllFunction,
                    });
                  }}
                >
                  <img src={bottomMenuNavImg} alt="加载失败..." />
                  {!menu?.collapsed && '全部功能'}
                </div>
                <div className={`allfunction-nav ${menu?.collapsed ? 'closed' : 'open'}`}>
                  <AllFunction data={111} />
                </div>
              </div>
            </div>
          );
        }}
        menuFooterRender={(menu) => {
          return (
            <div onClick={refresh} className={`bottom-nav ${menu?.collapsed ? 'closed' : 'open'}`}>
              <div
                className="position"
                onClick={() => {
                  setOpen({
                    MakeList: false,
                    CustomNav: true,
                    AllFunction: false,
                  });
                }}
              >
                <img src={bottomMenuNavImg} alt="加载失败..." />
                {!menu?.collapsed && '自定义导航'}
              </div>
              {open.CustomNav && (
                <div className="custom-nav-wrap">
                  <CustomNav
                    isClose={() => {
                      setOpen({
                        MakeList: false,
                        CustomNav: false,
                        AllFunction: false,
                      });
                    }}
                    data={customNavData}
                  />
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
