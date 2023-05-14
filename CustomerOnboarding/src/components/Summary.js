import React from 'react';
import { Statistic, Card } from 'antd';

const Summary = ({ customers }) => {
  const completedCount = customers.filter(
    (customer) => customer.onboardingStatus === 'completed'
  ).length;
  const totalCustomers = customers.length;
  const completionPercentage =
    totalCustomers > 0 ? (completedCount / totalCustomers) * 100 : 0;

  return (
    <Card>
      <Statistic title="Total Customers" value={totalCustomers} />
      <Statistic title="Completed" value={completedCount} />
      <Statistic title="Completion Percentage" value={`${completionPercentage}%`} />
    </Card>
  );
};

export default Summary;
