/*
 * @Author: ZY
 * @Date: 2021-10-25 13:42:43
 * @LastEditors: ZY
 * @LastEditTime: 2021-10-25 18:42:38
 * @FilePath: /main/src/models/counter.ts
 * @Description: dva tags
 */
import type { Reducer } from 'umi';



export interface CounterType {
    namespace: 'counter',
    state: number,
    reducers: {
        add: Reducer<number>;
    }
}
 

const CounterModel: CounterType = {
    namespace:'counter',
    state:0,
    reducers:{
        add(count){
            return (count ?? 0) + 1;
        } 
    }
}


export default CounterModel;
