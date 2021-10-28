/*
 * @Author: ZY
 * @Date: 2021-10-25 13:42:43
 * @LastEditors: ZY
 * @LastEditTime: 2021-10-26 14:21:46
 * @FilePath: /main/src/models/tagsModel.ts
 * @Description: dva tags
 */
import type { Reducer } from 'umi';
import _remove from "lodash/remove";

export interface Tag {
    key: string;
    title: string;
    path?: string;
    active: boolean;
    query?: any;
}

export type TagsStateType = Tag[]

export interface TagsModelType {
    namespace: 'tagsModel',
    state: Tag[],
    reducers: {
        addTag: Reducer<TagsStateType>;
        removeTag: Reducer<TagsStateType>;
        removeAllTags: Reducer<TagsStateType>;
    }
}
 
const homeTag: Tag = {
    key: `1`,
    title: '首页',
    active: true,
    path: '@/pages/dashboard'
}

const TagsModel: TagsModelType = {
    namespace:'tagsModel',
    state:[homeTag] as Tag[],
    reducers:{
        addTag:(state,action)=>{
            if (state) {
                return [...state,action.payload]
            }
            return []
        },
        removeTag:(state,action)=>{
            if (!state) {
                return []
            }
            _remove(state,(tag)=> tag.key === action.payload)            
            return [...state]
        },
        removeAllTags:()=>{
            return []
        }
    }
}

export default TagsModel;
