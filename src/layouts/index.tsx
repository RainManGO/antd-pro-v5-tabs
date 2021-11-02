/*
 * @Author: ZY
 * @Date: 2021-07-21 11:58:40
 * @LastEditors: ZY
 * @LastEditTime: 2021-11-01 15:51:38
 * @FilePath: /main/src/layouts/index.tsx
 * @Description: 布局入口文件
 */
import React, { useEffect, useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import layoutDefaultSettings from '../../config/layoutDefaultSettings';
import type { ProSettings, BasicLayoutProps as ProLayoutProps } from '@ant-design/pro-layout';
import ProLayout, { SettingDrawer } from '@ant-design/pro-layout';
import { Link } from 'react-router-dom';
import RightContent from '@/components/RightContent';
import { Tabs } from 'antd';
import { history, connect } from 'umi';
import type { ConnectRC, Tag } from 'umi';
import { Route } from 'react-router-dom';

const { TabPane } = Tabs;
interface LayoutsType extends ProLayoutProps {
  tagsModel: Tag[];
  loading: boolean;
}

const IndexPage: ConnectRC<LayoutsType> = (props) => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({ fixSiderbar: true });
  const [collapsed, setCollapsed] = useState(false);

  const tabOnEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove',
  ) => {
    if (action === 'remove') {
      props.dispatch({ type: 'tagsModel/removeTag', payload: targetKey });
    }
  };

  const tabOnChange = (activeKey: string) => {
    const path =  props.tagsModel.filter((t)=>t.key === activeKey)
    history.push(path[0].path ?? '/dashboard')
    props.dispatch({ type: 'tagsModel/updateActive', payload: activeKey });
  };

  const refresh = () => {
    
  };

  useEffect(() => {
    const getTitleFromRoute = (path: string) => {
      const route = props.route.routes?.filter((r) => {
        // 如果是动态路由，匹配非动态部分
        if (r.path?.includes(':')) {
          return path.includes(r.path.split(':')[0])
        }
        return r.path === path
      }) ?? [];
      return route[0].name;
    };

    history.listen((location) => {
      // location is an object like window.location
      props.dispatch({
        type: 'tagsModel/addTag',
        payload: {
          key:location.pathname,
          title: getTitleFromRoute(location.pathname),
          active: true,
          path: location.pathname,
        },
      });
    });
  }, []);

  const getPathComponent= (path: string)=>{
      const r = props.route.routes?.filter((t)=>{
         // 如果是动态路由，匹配非动态部分
         if (t.path?.includes(':')) {
          return path.includes(t.path.split(':')[0])
        }
        return t.path === path
      })[0]
      return (r as any).component
  }

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
            return <div>中石油</div>;
          }
          return <div>哈哈哈</div>;
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
              <div style={{ color: 'white', textAlign: 'center', background: 'blue' }}>
                我要制单
              </div>
            )
          );
        }}
        menuFooterRender={(menu) => {
          return (
            !menu?.collapsed && (
              <div
                onClick={refresh}
                style={{ color: 'white', textAlign: 'center', background: 'blue' }}
              >
                自定义菜单
              </div>
            )
          );
        }}
        rightContentRender={() => <RightContent></RightContent>}
      >
        <div id="myWrapperLoading">
          <Tabs
            activeKey={getActiveKey(props.tagsModel)}
            type="editable-card"
            hideAdd={true}
            onEdit={tabOnEdit}
            onChange={tabOnChange}
          >
            {props.tagsModel &&
              props.tagsModel.map((tag) => {
                return (
                  <TabPane tab={tag.title} key={tag.key} closable={tag.key !== '/dashboard'}>
                    <Route key={tag.key} component={getPathComponent(tag.path!)} exact />
                  </TabPane>
                );
              })}
          </Tabs>
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
