import React from 'react';
import { List, Select } from 'antd';

const { Option } = Select;

const CustomerListInitial = ({ customers, updateOnboardingStatus }) => {
  const handleChangeStatus = (customerId, status) => {
    const customerIndex = customers.findIndex(
      (customer) => customer.id === customerId
    );
    updateOnboardingStatus(customerIndex, status);
  };

  return (
    <List
      dataSource={customers}
      renderItem={(customer) => (
        <List.Item>
          <List.Item.Meta
            title={customer.name}
            description={customer.email}
          />
          <Select
            defaultValue={customer.onboardingStatus}
            onChange={(status) => handleChangeStatus(customer.id, status)}
          >
            <Option value="inProgress">In Progress</Option>
            <Option value="completed">Completed</Option>
          </Select>
        </List.Item>
      )}
    />
  );
};

export default CustomerListInitial;
