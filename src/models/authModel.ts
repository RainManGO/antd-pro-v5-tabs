/*
 * @Author: ZY
 * @Date: 2021-10-27 10:14:34
 * @LastEditors: ZY
 * @LastEditTime: 2021-10-27 16:26:37
 * @FilePath: /main/src/models/authModel.ts
 * @Description: auth 
 */

import LocalStorageKey from '@/constant/localStorageKey';
import type { Reducer,Effect } from 'umi';
import type { LoginResult } from '@/pages/user/Login/service';
import { login } from '@/pages/user/Login/service';
import { encode } from 'js-base64';

export enum LoginState {
    normal,
    success,
    fail
}

export interface AuthModelState {
    isLogin: boolean 
    token: string
    refreshToken: string
    loginState?: LoginState
}

export interface AuthModelType {
    namespace: 'authModel',
    state: AuthModelState,
    reducers: {
        loginChangeState: Reducer<AuthModelState>;
        loginOutChangeState: Reducer<AuthModelState>;
    },
    effects: {
        login: Effect
    }
}
 
const AuthModel: AuthModelType = {
    namespace:'authModel',
    state:{
        isLogin: Boolean(localStorage.getItem(LocalStorageKey.isLogin) ?? 'false'),
        token:'',
        refreshToken: '',
        loginState: LoginState.normal
    },
    reducers:{
        loginChangeState(state,{payload:{token,refreshToken,loginState}}){
            if (loginState === LoginState.success) {
                return {... state,isLogin:true,token,refreshToken}
            }
            return {... state,isLogin:false,token,refreshToken}
        },
        loginOutChangeState(){
            return {isLogin:false,token:'',refreshToken:''}
        }
    },
    effects:{
        *login({ payload:{username,password} },{call,put}){
          const res: LoginResult =  yield call(login(username,encode(password))) 
          yield put({
            type:'loginChangeState',
            payload: {
                token: res.access_token,
                refreshToken: res.refresh_token,
                loginState: res.access_token ? LoginState.success : LoginState.fail
            }
         })
        },
    }
}

export default AuthModel;
