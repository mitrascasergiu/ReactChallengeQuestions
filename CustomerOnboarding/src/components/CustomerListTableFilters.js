import React, { useState, useEffect } from 'react';
import { Table, Select, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Search } = Input;

const CustomerListTableFilters = ({ customers, updateOnboardingStatus }) => {
  const [filteredCustomers, setFilteredCustomers] = useState(customers);
  const [nameFilter, setNameFilter] = useState('');

  const handleChangeStatus = (customerId, status) => {
    const customerIndex = customers.findIndex(
      (customer) => customer.id === customerId
    );
    updateOnboardingStatus(customerIndex, status);
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
        key: 'id'
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
      ilterIcon: () => <SearchOutlined />,
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
  ];

  return (<Table dataSource={filteredCustomers} columns={columns} pagination={false}/>);
};

export default CustomerListTableFilters;
