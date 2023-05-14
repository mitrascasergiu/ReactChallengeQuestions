import React from 'react';
import { Table, Select, Button, Popconfirm } from 'antd';

const { Option } = Select;

const CustomerListTableDelete = ({ customers, updateOnboardingStatus, deleteCustomer }) => {
  const handleChangeStatus = (customerId, status) => {
    const customerIndex = customers.findIndex(
      (customer) => customer.id === customerId
    );
    updateOnboardingStatus(customerIndex, status);
  };

  const handleDelete = (customerId) => {
    deleteCustomer(customerId);
  };

  const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Onboarding Status',
      dataIndex: 'onboardingStatus',
      key: 'onboardingStatus',
      render: (status, record) => (
        <Select
          defaultValue={status}
          onChange={(value) => handleChangeStatus(record.id, value)}
        >
          <Option value="inProgress">In Progress</Option>
          <Option value="completed">Completed</Option>
        </Select>
      ),
    },
      {
        title: 'Actions',
        dataIndex: 'id',
        key: 'actions',
        render: (customerId) => (
          <>
            <Popconfirm
              title="Are you sure to delete this customer?"
              onConfirm={() => handleDelete(customerId)}
              okText="Yes"
              cancelText="No"
            >
              <Button type="danger">Delete</Button>
            </Popconfirm>
          </>
        ),
      },
  ];

  return (<Table dataSource={customers} columns={columns} pagination={false}/>);
};

export default CustomerListTableDelete;
