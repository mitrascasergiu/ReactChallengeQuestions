import React from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";

const CustomerFormPhoneValidation = ({ addCustomer }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch(addCustomer(values));
    form.resetFields();
  };

  const validatePhoneNumber = (_, value) => {
    const phoneRegex = /^[0-9]{10}$/;

    if (!value || phoneRegex.test(value)) {
      return Promise.resolve();
    }

    return Promise.reject("Please enter a valid 10-digit phone number");
  };

  return (
    <Form form={form} layout='vertical' onFinish={onFinish}>
      <Form.Item
        name='name'
        label='Name'
        rules={[
          {
            required: true,
            message: "Please enter the customer name",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='email'
        label='Email'
        rules={[
          {
            required: true,
            type: "email",
            message: "Please enter a valid email",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='phone'
        label='Phone'
        rules={[
          {
            required: true,
            message: "Please enter the phone number",
          },
          {
            validator: validatePhoneNumber,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Add Customer
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomerFormPhoneValidation;
