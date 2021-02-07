import React from 'react';
import 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';

const Graph = ({ userData }) => {
  let income = userData.income;
  let rent = userData.expenses.rent;
  let groceries = userData.expenses.groceries;
  let loans = userData.expenses.loans;
  let creditCard = userData.expenses.creditCard;
  let savings = userData.savings;
  let remainIncome = income - rent - groceries - loans - creditCard - savings;

  return (
    <div>
      <Bar
        data={{
          labels: 'hi',
          datasets: [
            {
              label: 'finances',
              data: [income, rent, groceries, loans, creditCard, savings],
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
              color: ['white'],
              font: {
                size: 19,
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

export default Graph;
