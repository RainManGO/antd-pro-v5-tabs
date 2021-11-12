/*
 * @Author: ZY
 * @Date: 2021-10-27 09:24:50
 * @LastEditors: ZY
 * @LastEditTime: 2021-10-27 16:08:15
 * @FilePath: /main/src/pages/user/Login/index.tsx
 * @Description: 登录页面
 */

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import type { ConnectRC, AuthModelState } from 'umi';

const IndexPage: ConnectRC<AuthModelState> = (props) => {
  const { dispatch } = props;

  const onFinish = (values: any) => {
    dispatch({
      type: 'authModel/login',
      payload: {
        ...values,
      },
    });
  };

  return (
    <div>
      <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
          <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default connect(({ authModel }: { authModel: AuthModelState }) => ({
  authModel,
}))(IndexPage);
