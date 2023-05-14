import React, { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import CustomerForm from './components/CustomerForm';
import CustomerListInitial from './components/CustomerListInitial';
import CustomerListTable from './components/CustomerListTable';
import CustomerListTableDelete from './components/CustomerListTableDelete';
import CustomerListTableEdit from './components/CustomerListTableEdit';
import CustomerListTableFilters from './components/CustomerListTableFilters';
import CustomerListTablePagination from './components/CustomerListTablePagination';
import CustomerListAllFeatures from './components/CustomerListAllFeatures';
import Summary from './components/Summary';
import Login from './components/Login';
import useAuthentication from './hooks/useAuthentication';
import useCustomerData from './hooks/useCustomerData';


const { Header, Content } = Layout;

const AppLoginHook = () => {
  const { isLoggedIn, login } = useAuthentication();
  //const { customers, addCustomer, updateCustomer, deleteCustomer, updateOnboardingStatus } = useCustomerData();
  
  const [customers, setCustomers] = useState([]);

  const addCustomer = (customer) => {
    setCustomers([...customers, { ...customer, onboardingStatus: 'inProgress', id: customers.length +1 }]);
  };

  const updateOnboardingStatus = (index, status) => {
    const updatedCustomers = [...customers];
    updatedCustomers[index].onboardingStatus = status;
    setCustomers(updatedCustomers);
  };

  // const deleteCustomer = (customerId) => {
  //   const updatedCustomers = customers.filter(
  //     (customer) => customer.id !== customerId
  //   );
  //   setCustomers(updatedCustomers);
  // };

  // const updateCustomer = (updatedCustomer) => {
  //   const updatedCustomers = customers.map((customer) => {
  //     if (customer.id === updatedCustomer.id) {
  //       return {
  //         ...customer,
  //         ...updatedCustomer,
  //       };
  //     }
  //     return customer;
  //   });

  //   setCustomers(updatedCustomers);
  // };

  return (
    <Layout>
      <Header>
        <h1 style={{ color: '#fff', textAlign: 'center' }}>Customer Onboarding Application</h1>
      </Header>
      <Content style={{ padding: '50px' }}>
        {isLoggedIn ? (
          <>
            <Row justify="center" gutter={[16, 16]}>
              <Col span={12}>
                <CustomerForm addCustomer={addCustomer} />
              </Col>
            </Row>
            <Row justify="center" gutter={[16, 16]}>
              <Col span={12}>
                <h2>Customer List</h2>
                <CustomerListInitial customers={customers} updateOnboardingStatus={updateOnboardingStatus} />
                {/* <CustomerListTable customers={customers} updateOnboardingStatus={updateOnboardingStatus} /> */}
                {/* <CustomerListTableFilters customers={customers} updateOnboardingStatus={updateOnboardingStatus} /> */}
                {/* <CustomerListTablePagination customers={customers} updateOnboardingStatus={updateOnboardingStatus} /> */}
                {/* <CustomerListTableDelete customers={customers} updateOnboardingStatus={updateOnboardingStatus} deleteCustomer={deleteCustomer}/> */}
                {/* <CustomerListTableEdit customers={customers} updateOnboardingStatus={updateOnboardingStatus} updateCustomer={updateCustomer}/> */}
                {/* <CustomerListAllFeatures customers={customers} updateOnboardingStatus={updateOnboardingStatus} deleteCustomer={deleteCustomer} updateCustomer={updateCustomer} /> */}
              </Col>
            </Row>
            <Row justify="center" gutter={[16, 16]}>
              <Col span={12}>
                <Summary customers={customers} />
              </Col>
            </Row>
          </>
        ) : (
          <Row justify="center">
            <Col span={8}>
              <Login login={login} />
            </Col>
          </Row>
        )}
      </Content>
    </Layout>
  );
};

export default AppLoginHook;
