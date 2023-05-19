import React, { useState, useEffect } from "react";
import { Layout, Row, Col } from "antd";
import CustomerForm from "./components/CustomerForm";
import CustomerFormPhoneValidation from "./components/CustomerFormPhoneValidation";
import CustomerListInitial from "./components/CustomerListInitial";
import CustomerListTable from "./components/CustomerListTable";
import CustomerListTableDelete from "./components/CustomerListTableDelete";
import CustomerListTableEdit from "./components/CustomerListTableEdit";
import CustomerListTableFilters from "./components/CustomerListTableFilters";
import CustomerListTablePagination from "./components/CustomerListTablePagination";
import CustomerListAllFeatures from "./components/CustomerListAllFeatures";
import CustomerListNewOnboarding from "./components/CustomerListNewOnboarding";
import Summary from "./components/Summary";
import SummaryNewOnboarding from "./components/SummaryNewOnboarding";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import {
  addCustomer,
  deleteCustomer,
  updateCustomer,
  updateOnboardingStatus,
} from "./redux/slices/customersSlice";
import { login } from "./redux/slices/userSlice";

const { Header, Content } = Layout;

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [customers, setCustomers] = useState([]);
  const customers = useSelector((state) => state.customers.customersList);
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);

  // const login = () => {
  //   setIsLoggedIn(true);
  // };

  // const addCustomer = (customer) => {
  //   setCustomers([
  //     ...customers,
  //     { ...customer, onboardingStatus: "inProgress", id: customers.length + 1 },
  //   ]);
  // };

  // const updateOnboardingStatus = (index, status) => {
  //   const updatedCustomers = [...customers];
  //   updatedCustomers[index].onboardingStatus = status;
  //   setCustomers(updatedCustomers);
  // };

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
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          Customer Onboarding Application
        </h1>
      </Header>
      <Content style={{ padding: "50px" }}>
        {/* {isLoggedIn ? ( */}
        {isUserLoggedIn ? (
          <>
            <Row justify='center' gutter={[16, 16]}>
              <Col span={12}>
                {/* <CustomerForm addCustomer={addCustomer} /> */}
                <CustomerFormPhoneValidation addCustomer={addCustomer} />
              </Col>
            </Row>
            <Row justify='center' gutter={[16, 16]}>
              <Col span={12}>
                <h2>Customer List</h2>
                {/* <CustomerListInitial customers={customers} updateOnboardingStatus={updateOnboardingStatus} /> */}
                {/* <CustomerListTable customers={customers} updateOnboardingStatus={updateOnboardingStatus} /> */}
                {/* <CustomerListTableFilters customers={customers} updateOnboardingStatus={updateOnboardingStatus} /> */}
                {/* <CustomerListTablePagination customers={customers} updateOnboardingStatus={updateOnboardingStatus} /> */}
                {/* <CustomerListTableDelete customers={customers} updateOnboardingStatus={updateOnboardingStatus} deleteCustomer={deleteCustomer}/> */}
                {/* <CustomerListTableEdit customers={customers} updateOnboardingStatus={updateOnboardingStatus} updateCustomer={updateCustomer}/> */}
                <CustomerListAllFeatures
                  customers={customers}
                  updateOnboardingStatus={updateOnboardingStatus}
                  deleteCustomer={deleteCustomer}
                  updateCustomer={updateCustomer}
                />
                {/* <CustomerListNewOnboarding customers={customers} updateOnboardingStatus={updateOnboardingStatus}/> */}
              </Col>
            </Row>
            <Row justify='center' gutter={[16, 16]}>
              <Col span={12}>
                <Summary customers={customers} />
                {/* <SummaryNewOnboarding customers={customers} /> */}
              </Col>
            </Row>
          </>
        ) : (
          <Row justify='center'>
            <Col span={8}>
              <Login login={login} />
            </Col>
          </Row>
        )}
      </Content>
    </Layout>
  );
};

export default App;
