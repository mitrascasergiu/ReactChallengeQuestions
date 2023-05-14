import { useState } from 'react';

const useCustomerData = () => {
  const [customers, setCustomers] = useState([]);

  const addCustomer = (customer) => {
    setCustomers([...customers,  { ...customer, onboardingStatus: 'inProgress', id: customers.length +1 }]);
  };

  const updateCustomer = (updatedCustomer) => {
    const updatedCustomers = customers.map((customer) => {
      if (customer.id === updatedCustomer.id) {
        return {
          ...customer,
          ...updatedCustomer,
        };
      }
      return customer;
    });

    setCustomers(updatedCustomers);
  };

  const deleteCustomer = (customerId) => {
    const updatedCustomers = customers.filter(
      (customer) => customer.id !== customerId
    );

    setCustomers(updatedCustomers);
  };

  const updateOnboardingStatus = (index, status) => {
    const updatedCustomers = [...customers];
    updatedCustomers[index].onboardingStatus = status;
    setCustomers(updatedCustomers);
  };

  return {
    customers,
    addCustomer,
    updateCustomer,
    deleteCustomer,
    updateOnboardingStatus
  };
};

export default useCustomerData;
