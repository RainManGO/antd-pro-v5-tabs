/*
 * @Author: ZY
 * @Date: 2021-11-01 15:55:26
 * @LastEditors: ZY
 * @LastEditTime: 2021-11-01 18:04:23
 * @FilePath: /main/src/components/TabsView/index.tsx
 * @Description: 选项卡标签
 */

import React from 'react';
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
