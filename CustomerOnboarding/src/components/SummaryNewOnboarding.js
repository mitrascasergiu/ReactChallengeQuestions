import React from 'react';
import { Statistic, Card } from 'antd';

const SummaryNewOnboarding = ({ customers }) => {
  const completedCount = customers.filter(
    (customer) => customer.onboardingStatus === 'completed'
  ).length;
  const blockedCount = customers.filter(
    (customer) => customer.onboardingStatus === 'blocked'
  ).length;
  const totalCustomers = customers.length;
  const completionPercentage =
    totalCustomers > 0 ? (completedCount / totalCustomers) * 100 : 0;

  return (
    <Card>
      <Statistic title="Total Customers" value={totalCustomers} />
      <Statistic title="Completed" value={completedCount} />
      <Statistic title="Blocked" value={blockedCount} />
      <Statistic title="Completion Percentage" value={`${completionPercentage}%`} />
    </Card>
  );
};

export default SummaryNewOnboarding;
