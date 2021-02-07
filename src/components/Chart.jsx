import React from 'react';
import 'chartjs-plugin-datalabels';
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ userData }) => {
  let income = userData.income;
  let rent = userData.expenses.rent;
  let groceries = userData.expenses.groceries;
  let loans = userData.expenses.loans;
  let creditCard = userData.expenses.creditCard;
  let savings = userData.savings;
  let remainIncome = income - rent - groceries - loans - creditCard - savings;

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
        getFunBudget(remainIncome, income),
        savings,
      ];
    }
  };

  const defaultLabel = () => {
    if (income === 0) {
      return ['Insert Financial Information'];
    } else {
      return [
        remainIncome < income ? 'Income remaining balance' : 'Income',
        'Credit Card Payment',
        'Rent',
        'Groceries',
        'Loans',
        'Fun Budget',
        'Savings',
      ];
    }
  };

  const getFunBudget = (remainder, income) => {
    let percentage = (remainder / income) * 100;

    if (percentage >= 20 && savings >= 1) {
      return Math.ceil((15 * remainder) / 100);
    }
  };

  return (
    <div className='Chart_container'>
      <Doughnut
        data={{
          labels: defaultLabel(),
          datasets: [
            {
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
              hoverBackgroundColor: [
                '#013220',
                '#8b0000',
                '#8b0000',
                '#8b0000',
                '#8b0000',
                '#301934',
                '#ff8c00',
              ],
            },
          ],
        }}
        options={{
          legend: {
            labels: {
              fontSize: 15,
              fontColor: 'black',
            },
          },
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            datalabels: {
              display: userData.income === 0 ? false : true,
              color: [
                'white',
                'white',
                'white',
                'white',
                'white',
                'white',
                'white',
              ],
              font: {
                size: 15,
              },
            },
          },
          title: {
            fontSize: 20,
            display: true,
            text: `${userData.name} Finances`,
          },
        }}
      />
    </div>
  );
};

export default Chart;
