import React, { useState } from 'react';
import { Table, Select, Button} from 'antd';
import CustomerListTableEditModal from './CustomerListTableEditModal';

const { Option } = Select;

const CustomerListTableEdit = ({ customers, updateOnboardingStatus, updateCustomer }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleChangeStatus = (customerId, status) => {
    const customerIndex = customers.findIndex(
      (customer) => customer.id === customerId
    );
    updateOnboardingStatus(customerIndex, status);
  };

  const handleEditCustomer = (customer) => {
    setSelectedCustomer(customer);
    setIsModalVisible(true);
  };

  const handleSaveCustomer = (updatedCustomer) => {
    updateCustomer(updatedCustomer);
    setIsModalVisible(false);
  };

  const handleCancelModal = () => {
    setIsModalVisible(false);
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
        render: (_, record) => (
          <>
            <Button type="primary" onClick={() => handleEditCustomer(record)}>
              Edit
            </Button>
          </>
        ),
      },
  ];

  return (
    <>
      <Table dataSource={customers} columns={columns} pagination={false}/>

      <CustomerListTableEditModal
        visible={isModalVisible}
        onCancel={handleCancelModal}
        customer={selectedCustomer}
        onSave={handleSaveCustomer}
      />
    </>
  )
};

export default CustomerListTableEdit;
