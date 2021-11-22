/*
 * @Author: ZY
 * @Date: 2021-10-25 13:42:43
 * @LastEditors: ZLL
 * @LastEditTime: 2021-11-22 15:46:52
 * @FilePath: \main\src\models\tagsModel.ts
 * @Description: dva tags
 * tabs 整理设计思路：
 * 需求：两种逻辑，一种是菜单功能，功能、路由、tag是一对一的关系，另一种单据类可以开多个
 * 设计：
 * 利用tabs 进行页面布局，来实现缓存的目的。key是path和query的合集，这样能满足需求
 * 利用dva组织数据
 * 动态加载组件，组件利用key关联
 */
import type { Reducer } from 'umi';
import _remove from 'lodash/remove';
import _cloneDeep from 'lodash/cloneDeep';
import _findIndex from 'lodash/findIndex';

export interface Tag {
  key: string;
  title: string;
  path?: string;
  active: boolean;
  query?: any;
}

export type TagsStateType = Tag[];

export interface TagsModelType {
  namespace: 'tagsModel';
  state: TagsStateType;
  reducers: {
    addTag: Reducer<TagsStateType>;
    updateActive: Reducer<TagsStateType>;
    removeTag: Reducer<TagsStateType>;
    removeAllTags: Reducer<TagsStateType>;
  };
}

/**
 * @description: 初始化tab
 * @param {*}
 * @return {*}
 */
const homeTag: Tag = {
  key: `/dashboard`,
  title: '我的单据',
  active: true,
  path: '/dashboard',
};

/**
 * @description:
 * @param {*}
 * @return {*}
 */
const addNewTag = (tags: Tag[], newTag: Tag) => {
  if (_findIndex(tags, (t) => t.key === newTag.key) === -1) {
    // tags数组里面有没有新增的tag
    const cTags = tags.map((t) => {
      const ct = _cloneDeep(t);
      ct.active = false;
      return ct;
    });
    return [...cTags, newTag];
  }

  // 新增tag 在数组中，选中即可。
  const cTags = tags.map((t) => {
    const ct = _cloneDeep(t);
    ct.active = ct.key === newTag.key;
    return ct;
  });
  return cTags;
};

const TagsModel: TagsModelType = {
  namespace: 'tagsModel',
  state: [homeTag] as TagsStateType,
  reducers: {
    addTag: (state, action) => {
      if (state) {
        return addNewTag(state, action.payload);
      }
      return [];
    },
    updateActive: (state, action) => {
      if (!state) {
        return [];
      }
      const cTags = state.map((t) => {
        const ct = _cloneDeep(t);
        ct.active = ct.key === action.payload;
        return ct;
      });
      return [...cTags];
    },
    removeTag: (state, action) => {
      if (!state) {
        return [];
      }
      const ct = _cloneDeep(state);
      if (ct.filter((t) => t.active)[0].key === action.payload) {
        _remove(ct, (tag: Tag) => tag.key === action.payload);
        // 如果关闭的是当前选中的标签，默认选中最后一个的策略
        ct[ct.length - 1].active = true;
      } else {
        _remove(ct, (tag: Tag) => tag.key === action.payload);
      }
      return [...ct];
    },
    removeAllTags: () => {
      return [];
    },
  },
};

export default TagsModel;
