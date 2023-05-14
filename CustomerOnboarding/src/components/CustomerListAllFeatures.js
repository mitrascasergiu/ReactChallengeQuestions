import React, { useState, useEffect } from 'react';
import { Table, Select, Button, Popconfirm, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import EditCustomerModal from './CustomerListTableEditModal';

const { Option } = Select;
const { Search } = Input;

const CustomerListAllFeatures = ({ customers, updateOnboardingStatus, deleteCustomer, updateCustomer }) => {
  const [filteredCustomers, setFilteredCustomers] = useState(customers);
  const [nameFilter, setNameFilter] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleChangeStatus = (customerId, status) => {
    const customerIndex = customers.findIndex(
      (customer) => customer.id === customerId
    );
    updateOnboardingStatus(customerIndex, status);
  };

  const handleDelete = (customerId) => {
    deleteCustomer(customerId);
  };

  const handleNameFilterChange = (e) => {
    setNameFilter(e.target.value);
  };

  const handleNameFilterSearch = () => {
    applyFilters(nameFilter);
  };

  const applyFilters = (name) => {
    const filteredData = customers.filter((customer) =>
      customer.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredCustomers(filteredData);
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
  
  useEffect(() => {
    if (!nameFilter) {
      setFilteredCustomers(customers);
    } else {
      applyFilters(nameFilter);
    }
  }, [nameFilter, customers, applyFilters]);

  const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        sorter: (a, b) => a.id - b.id,
        sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filterDropdown: () => (
        <div style={{ padding: 8 }}>
          <Search
            placeholder="Search name"
            value={nameFilter}
            onChange={handleNameFilterChange}
            onSearch={handleNameFilterSearch}
            onPressEnter={handleNameFilterSearch}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
        </div>
      ),
      filterIcon: () => <SearchOutlined />,
      filterIconStyle: { color: '#1890ff' },
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
        render: (customerId, record) => (
          <>
            <Button type="primary" onClick={() => handleEditCustomer(record)}>
              Edit
            </Button>
            {/* REQ2 - Delete Customer feature */}
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

  const pagination = {
    pageSize: 2,
    total: customers.length,
    showSizeChanger: true,
    pageSizeOptions: ['5', '10', '20', '50'],
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
  };

  return (
    <>
    <Table dataSource={filteredCustomers} columns={columns} pagination={pagination}/>

    <EditCustomerModal
      visible={isModalVisible}
      onCancel={handleCancelModal}
      customer={selectedCustomer}
      onSave={handleSaveCustomer}
    />
  </>
  );
};

export default CustomerListAllFeatures;
