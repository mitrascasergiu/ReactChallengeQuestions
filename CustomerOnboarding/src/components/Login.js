import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { resetLoginError, setLoginError } from "../redux/slices/userSlice";

const Login = ({ login }) => {
  const [form] = Form.useForm();
  //const [loginError, setLoginError] = useState(false);
  const loginError = useSelector((state) => state.user.loginError);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(resetLoginError());
    const username = form.getFieldValue("username");
    const password = form.getFieldValue("password");

    if (username === "admin" && password === "password") {
      dispatch(login());
    } else {
      // setLoginError(true);
      dispatch(setLoginError(true));
    }
  };

  return (
    <Form form={form} onFinish={handleLogin}>
      <Form.Item
        name='username'
        label='Username'
        rules={[
          {
            required: true,
            message: "Please enter your username",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='password'
        label='Password'
        rules={[
          {
            required: true,
            message: "Please enter your password",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Login
        </Button>
      </Form.Item>
      {loginError && (
        <p style={{ color: "red" }}>
          Invalid username or password. Please try again.
        </p>
      )}
    </Form>
  );
};

export default Login;
