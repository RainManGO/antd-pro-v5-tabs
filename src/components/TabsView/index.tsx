/*
 * @Author: ZY
 * @Date: 2021-11-01 15:55:26
 * @LastEditors: ZLL
 * @LastEditTime: 2021-11-04 17:08:42
 * @FilePath: \main\src\components\TabsView\index.tsx
 * @Description: 选项卡标签
 */

import React, { useEffect } from 'react';
import type { Tag, Dispatch, IRoute } from 'umi';
import { Tabs } from 'antd';
import { Route } from 'react-router-dom';
import { history } from 'umi';
import styles from './index.less';

export interface TabsViewProps {
  route: IRoute;
  activeKey: string;
  tags: Tag[];
  dispatch: Dispatch;
}

const { TabPane } = Tabs;

const IndexPage: React.FC<TabsViewProps> = (props) => {
  const { tags, activeKey, dispatch, route } = props;
  console.log(tags);

  useEffect(() => {
    const getTitleFromRoute = (path: string) => {
      const titleRoute =
        props.route.routes?.filter((r) => {
          // 如果是动态路由，匹配非动态部分
          if (r.path?.includes(':')) {
            return path.includes(r.path.split(':')[0]);
          }
          return r.path === path;
        }) ?? [];
      // 没有权限的页面访问不到
      if (titleRoute[0].unaccessible === true) {
        return '权限页面';
      }
      return titleRoute[0].name;
    };

    history.listen((location) => {
      // location is an object like window.location
      dispatch({
        type: 'tagsModel/addTag',
        payload: {
          key: location.pathname,
          title: getTitleFromRoute(location.pathname),
          active: true,
          path: location.pathname,
        },
      });
    });
  }, []);

  useEffect(() => {
    const dom = document.getElementsByClassName('ant-tabs-tab-btn');
    const tabDoms = Array.from(dom);
    // 给每个tabs设置title
    tabDoms.forEach((item: any) => {
      item.title = item.innerText;
    });
  }, [tags]);
  const tabOnEdit = (targetKey: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => {
    if (action === 'remove') {
      dispatch({ type: 'tagsModel/removeTag', payload: targetKey });
    }
  };

  const tabOnChange = (selectKey: string) => {
    const path = tags.filter((t) => t.key === selectKey);
    history.push(path[0].path ?? '/dashboard');
    props.dispatch({ type: 'tagsModel/updateActive', payload: selectKey });
  };

  const getPathComponent = (path: string) => {
    const r = route.routes?.filter((t) => {
      // 如果是动态路由，匹配非动态部分
      if (t.path?.includes(':')) {
        return path.includes(t.path.split(':')[0]);
      }
      return t.path === path;
    })[0];

    return (r as any).component;
  };

  // 使用正则表达式获取 transform数值
  const getDomTransformData = () => {
    const dom = (document.getElementsByClassName('ant-tabs-nav-list')[0] as any).style.transform;
    const regx = /\((\S*)p/;
    const strData = regx.exec(dom)![1];
    return Number(strData);
  };

  // tabs 点击左箭头
  const clickTabsLeftBtn = () => {
    const tabsNavListWidth = (document.getElementsByClassName('ant-tabs-nav-list')[0] as any).offsetWidth;
    const tabsNavWidth = (document.getElementsByClassName('ant-tabs-nav')[0] as any).offsetWidth;
    const strData = getDomTransformData();
    console.log(strData, tabsNavListWidth);
    if (tabsNavListWidth - (Math.abs(strData) + tabsNavWidth) < 200 && tabsNavListWidth >= tabsNavWidth) {
      (document.getElementsByClassName('ant-tabs-nav-list')[0] as any).style.transform = `translate(${
        Number(strData) - (tabsNavListWidth - (Math.abs(strData) + tabsNavWidth))
      }px, 0px)`;
    }
    // if (Math.abs(strData)+ tabsNavWidth + 100<tabsNavListWidth&&tabsNavListWidth>=tabsNavWidth) {
    //   (document.getElementsByClassName(
    //     'ant-tabs-nav-list',
    //   )[0] as any).style.transform = `translate(${Number(strData) - 100}px, 0px)`;
    // }

    if (Math.abs(strData) < tabsNavListWidth - (tabsNavWidth + 100)) {
      (document.getElementsByClassName('ant-tabs-nav-list')[0] as any).style.transform = `translate(${
        Number(strData) - 100
      }px, 0px)`;
    }
  };
  // tabs 点击右箭头
  const clickTabsRightBtn = () => {
    const tabsNavListWidth = (document.getElementsByClassName('ant-tabs-nav-list')[0] as any).offsetWidth;
    const strData = getDomTransformData();
    console.log(strData, tabsNavListWidth);
    if (Math.abs(strData) > 100) {
      (document.getElementsByClassName('ant-tabs-nav-list')[0] as any).style.transform = `translate(${
        Number(strData) + 100
      }px, 0px)`;
    } else {
      (document.getElementsByClassName('ant-tabs-nav-list')[0] as any).style.transform = `translate(0px, 0px)`;
    }
  };

  return (
    <div className={styles.tabsBox}>
      <div
        className={styles.tabsLeftButton}
        onClick={() => {
          clickTabsLeftBtn();
        }}
      />
      <Tabs activeKey={activeKey} type="editable-card" hideAdd={true} onEdit={tabOnEdit} onChange={tabOnChange}>
        {tags.length &&
          tags.map((tag) => {
            return (
              <TabPane tab={tag.title} key={tag.key} closable={tag.key !== '/dashboard'}>
                <Route key={tag.key} component={getPathComponent(tag.path!)} exact />
              </TabPane>
            );
          })}
      </Tabs>
      <div
        className={styles.tabsRightButton}
        onClick={() => {
          clickTabsRightBtn();
        }}
      />
      <div className={styles.dropDownArrow} />
    </div>
  );
};
export default IndexPage;
