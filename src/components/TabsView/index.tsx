/*
 * @Author: ZY
 * @Date: 2021-11-01 15:55:26
 * @LastEditors: ZY
 * @LastEditTime: 2021-11-02 08:58:36
 * @FilePath: /main/src/components/TabsView/index.tsx
 * @Description: 选项卡标签
 */

import React,{useEffect} from 'react';
import type { Tag ,Dispatch,IRoute} from 'umi';
import { Tabs } from 'antd';
import { Route } from 'react-router-dom';
import { history } from 'umi';

export interface TabsViewProps {
  route: IRoute
  activeKey: string;
  tags: Tag[];
  dispatch: Dispatch
}

const { TabPane } = Tabs;

const IndexPage: React.FC<TabsViewProps> = (props) => {
  const { tags, activeKey ,dispatch,route} = props;


  useEffect(() => {
    const getTitleFromRoute = (path: string) => {
      const titleRoute= props.route.routes?.filter((r) => {
        // 如果是动态路由，匹配非动态部分
        if (r.path?.includes(':')) {
          return path.includes(r.path.split(':')[0])
        }
        return r.path === path
      }) ?? [];
      return titleRoute[0].name;
    };

    history.listen((location) => {
      // location is an object like window.location
      dispatch({
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

  const tabOnEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove',
  ) => {
    if (action === 'remove') {
      dispatch({ type: 'tagsModel/removeTag', payload: targetKey });
    }
  };

  const tabOnChange = (selectKey: string) => {
    const path =  tags.filter((t)=>t.key === selectKey)
    history.push(path[0].path ?? '/dashboard')
    props.dispatch({ type: 'tagsModel/updateActive', payload: selectKey });
  };

  const getPathComponent= (path: string)=>{
    const r = route.routes?.filter((t)=>{
       // 如果是动态路由，匹配非动态部分
       if (t.path?.includes(':')) {
        return path.includes(t.path.split(':')[0])
      }
      return t.path === path
    })[0]
    return (r as any).component
}

  return (
    <div>
      <Tabs
        activeKey={activeKey}
        type="editable-card"
        hideAdd={true}
        onEdit={tabOnEdit}
        onChange={tabOnChange}
      >
        {tags &&
          tags.map((tag) => {
            return (
              <TabPane tab={tag.title} key={tag.key} closable={tag.key !== '/dashboard'}>
                <Route key={tag.key} component={getPathComponent(tag.path!)} exact />
              </TabPane>
            );
          })}
      </Tabs>
    </div>
  );
};
export default IndexPage;
