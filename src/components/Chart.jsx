import React from 'react';
import 'chartjs-plugin-datalabels';
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ userData }) => {
  let income = userData.income;
  let rent = userData.expenses.rent;
  let groceries = userData.expenses.groceries;
  let loans = userData.expenses.loans;
  let creditCard = userData.expenses.creditCard;
  let funBudget = userData.expenses.funBudget;
  let savings = userData.savings;

  // Funbudget is missing - tell cory
  let remainIncome = income - rent - groceries - loans - creditCard;

  const defaultData = () => {
    if (income === 0) {
      return [1];
    } else {
      return [
        remainIncome,
        creditCard,
        rent,
        groceries,
        loans,
        funBudget,
        savings,
      ];
    }
  };

  const defaultLabel = () => {
    if (income === 0) {
      return ['Insert Financial Information'];
    } else {
      return [
        remainIncome < income ? 'Income Remainder' : 'Income',
        'Credit Card Payment',
        'Rent',
        'Groceries',
        'Loans',
        'Fun Budget',
        'Savings',
      ];
    }
  };

  return (
    <div className='Chart_container'>
      <Doughnut
        data={{
          labels: defaultLabel(),
          datasets: [
            {
              label: 'Finances',
              data: defaultData(),
              backgroundColor: [
                'green',
                'red',
                'red',
                'red',
                'red',
                'purple',
                'orange',
              ],
              hoverBackgroundColor: ['#31B2F2'],
            },
          ],
        }}
        width={100}
        height={100}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          height: "500",
          plugins: {
            datalabels: {
              display: userData.income === 0 ? false : true,
              color: [
                'red',
                'black',
                'black',
                'black',
                'black',
                'orange',
                ' yellow',
              ],
              font: {
                size: 19,
              },
            },
          },
          title: {
            display: true,
            text: `${userData.name} Finances`,
          },
        }}
      />
    </div>
  );
};

export default Chart;
