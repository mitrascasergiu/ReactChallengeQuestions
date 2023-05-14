import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const CustomerListTableEditModal = ({ visible, onCancel, customer, onSave }) => {
  const [name, setName] = useState(customer?.name || '');
  const [email, setEmail] = useState(customer?.email || '');

  useEffect(() => {
    if (customer) {
      setName(customer.name);
      setEmail(customer.email);
    }
  }, [customer]);
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSave = () => {
    onSave({
      ...customer,
      name,
      email,
    });
  };

  return (
    <Modal
      visible={visible}
      title="Edit Customer"
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="save" type="primary" onClick={handleSave}>
          Save
        </Button>,
      ]}
    >
      {customer && (
        <Form>
          <Form.Item label="Name">
            <Input value={name} onChange={handleNameChange} />
          </Form.Item>
          <Form.Item label="Email">
            <Input value={email} onChange={handleEmailChange} />
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
};

export default CustomerListTableEditModal;
