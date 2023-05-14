import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const Login = ({ login }) => {
  const [form] = Form.useForm();
  const [loginError, setLoginError] = useState(false);

  const handleLogin = () => {
    const username = form.getFieldValue('username');
    const password = form.getFieldValue('password');

    if (username === 'admin' && password === 'password') {
      login();
    } else {
      setLoginError(true);
    }
  };

  return (
    <Form form={form} onFinish={handleLogin}>
      <Form.Item
        name="username"
        label="Username"
        rules={[
          {
            required: true,
            message: 'Please enter your username',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please enter your password',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
      {loginError && (
        <p style={{ color: 'red' }}>Invalid username or password. Please try again.</p>
      )}
    </Form>
  );
};

export default Login;
