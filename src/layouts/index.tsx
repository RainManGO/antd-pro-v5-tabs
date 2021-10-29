/*
 * @Author: ZY
 * @Date: 2021-07-21 11:58:40
 * @LastEditors: ZY
 * @LastEditTime: 2021-10-29 16:07:24
 * @FilePath: /main/src/layouts/index.tsx
 * @Description: 布局入口文件
 */
import React, { Component, useEffect, useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import layoutDefaultSettings from '../../config/layoutDefaultSettings';
import type { ProSettings, BasicLayoutProps as ProLayoutProps } from '@ant-design/pro-layout';
import ProLayout, { SettingDrawer } from '@ant-design/pro-layout';
import { Link } from 'react-router-dom';
import RightContent from '@/components/RightContent';
import { Tabs } from 'antd';
import { history, connect } from 'umi';
import type { ConnectRC, Tag } from 'umi';
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';

const { TabPane } = Tabs;
interface LayoutsType extends ProLayoutProps {
  tagsModel: Tag[];
  loading: boolean;
}

const Loading = () => <span>Loading...</span>;

const IndexPage: ConnectRC<LayoutsType> = (props) => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({ fixSiderbar: true });
  // const [keyWord, setKeyWord] = useState('');
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
    const newTag: Tag = {
      key: `${Date.now().toString()}自定义`,
      title: '自定义菜单页',
      active: true,
      path: '/dynamic',
    };
    props.dispatch({ type: 'tagsModel/addTag', payload: newTag });
    // window.location.href = 'http://localhost:8130/dashboard'
  };

  // const filterByMenuDate = (data: MenuDataItem[], words: string): MenuDataItem[] =>
  //   data
  //     .map((item) => {
  //       if (
  //         (item.name && item.name.includes(words)) ||
  //         filterByMenuDate(item.children || [], words).length > 0
  //       ) {
  //         return {
  //           ...item,
  //           children: filterByMenuDate(item.children || [], words),
  //         };
  //       }

  //       return undefined;
  //     })
  //     .filter((item) => item) as MenuDataItem[];

  useEffect(() => {

    console.log(props.route.routes);
    
    const getTitleFromRoute = (path: string) => {
      const route = props.route.routes?.filter((r) => r.path === path) ?? [];
      return route[0].name;
    };

    history.listen((location) => {
      // location is an object like window.location
      props.dispatch({
        type: 'tagsModel/addTag',
        payload: {
          key:
            location.pathname === '/dashboard'
              ? location.pathname
              : `${getTitleFromRoute(location.pathname)}-${location.query}`,
          title: getTitleFromRoute(location.pathname),
          active: true,
          path: location.pathname,
        },
      });
    });
  }, []);

  const getPathComponent= (path: string)=>{
      const r = props.route.routes?.filter((t)=>t.path === path)[0]
      return (r as any).component
  }

  // const filterRoute = ()=>{
  //   const newRoute = _cloneDeep(props.route)
  //   console.log(newRoute);
  //   newRoute.routes = newRoute.routes?.filter((r: any)=>r.hidden !== 'true')
  //   console.log(newRoute);
  //   return  newRoute
  // }

  /**
   * @description: 获取选中的key
   * @param {*}
   * @return {*}
   */
  const getActiveKey = (tags: Tag[]) => {
    return tags.filter((t) => t.active)[0].key;
  };

  // const getTabComponent = (path: string) => {
  //   const TabComponent = Loadable({
  //     loader: () => import(`@/pages${path}`),
  //     loading: Loading,
  //     delay: 150,
  //   });
  //   return <TabComponent />;
  // };

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
        // headerContentRender={() => <ProBreadcrumb />}
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
        // menuItemRender={(menuItemProps, defaultDom) => {
        //   return (
        //     <a href={menuItemProps.path} >
        //       {defaultDom}
        //     </a>
        //   );
        // }}
        menuItemRender={(menuItemProps, defaultDom) => {
          return <Link to={menuItemProps.path ?? '/'}>{defaultDom}</Link>;
        }}
        route={props.route}
        menuExtraRender={({ collapsed }) => {
          return (
            !collapsed && (
              <div style={{ color: 'white', textAlign: 'center', background: 'blue' }}>
                我要制单
              </div>
            )
          );
        }}
        menuFooterRender={({ collapsed }) => {
          return (
            !collapsed && (
              <div
                onClick={refresh}
                style={{ color: 'white', textAlign: 'center', background: 'blue' }}
              >
                自定义菜单
              </div>
            )
          );
        }}
        // postMenuData={(menus) => filterByMenuDate(menus || [], keyWord)}
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
          {/* {props.children} */}

          {/* <TagView children={props.children} home="/dashboard" /> */}
        </div>
      </ProLayout>
      <SettingDrawer
        // pathname={pathname}
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
