import React from 'react';
import { Form, Input, Button } from 'antd';

const CustomerForm = ({ addCustomer }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    addCustomer(values);
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please enter the customer name',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            type: 'email',
            message: 'Please enter a valid email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item 
        name="phone" 
        label="Phone"
        >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Customer
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomerForm;
