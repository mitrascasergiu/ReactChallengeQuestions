import React from 'react';
import { Table, Select } from 'antd';

const { Option } = Select;

const CustomerListTablePagination = ({ customers, updateOnboardingStatus }) => {
  const handleChangeStatus = (customerId, status) => {
    const customerIndex = customers.findIndex(
      (customer) => customer.id === customerId
    );
    updateOnboardingStatus(customerIndex, status);
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
  ];

  const pagination = {
    pageSize: 2,
    total: customers.length,
    showSizeChanger: true,
    pageSizeOptions: ['5', '10', '20', '50'],
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
  };

  return (<Table dataSource={customers} columns={columns} pagination={pagination}/>);
};

export default CustomerListTablePagination;
