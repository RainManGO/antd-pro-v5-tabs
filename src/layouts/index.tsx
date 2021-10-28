/*
 * @Author: ZY
 * @Date: 2021-07-21 11:58:40
 * @LastEditors: ZY
 * @LastEditTime: 2021-10-28 14:17:06
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
// import _cloneDeep from 'lodash/cloneDeep'

const { TabPane } = Tabs;
interface LayoutsType extends ProLayoutProps {
  tagsModel: Tag[];
  loading: boolean;
}
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

  const refresh = () => {
    const newTag: Tag = {
      key: `${Date.now().toString()}自定义`,
      title: '自定义菜单页',
      active: true,
      path: '@/pages/dashboard',
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
    history.listen((location, action) => {
      // location is an object like window.location
      console.log(action, location.pathname, location.state);
    });
  }, []);

  // const filterRoute = ()=>{
  //   const newRoute = _cloneDeep(props.route)
  //   console.log(newRoute);
  //   newRoute.routes = newRoute.routes?.filter((r: any)=>r.hidden !== 'true')
  //   console.log(newRoute);
  //   return  newRoute
  // }

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
          <Tabs defaultActiveKey="1" type="editable-card" hideAdd={true} onEdit={tabOnEdit}>
            {props.tagsModel &&
              props.tagsModel.map((tag) => {
                return (
                  <TabPane tab={tag.title} key={tag.key}>
                    {props.children}
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
