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

  const getFunBudget = (remainder, income) => {
    let percentage = (remainder / income) * 100;

    if (percentage >= 20 && savings >= 1) {
      return Math.ceil((15 * remainder) / 100);
    }
  };

  return (
    <div>
      <Bar
        data={{
          labels: [
            'Yearly Income After Expenses',
            'Yearly Credit Card Payment',
            'Yearly Rent',
            'Yearly Groceries',
            'Yearly Loans',
            'Yearly Fun Budget',
            'Yearly Savings',
          ],
          datasets: [
            {
              label: 'Yearly Projection',
              data: [
                remainIncome * 12,
                creditCard * 12,
                rent * 12,
                groceries * 12,
                loans * 12,
                getFunBudget(remainIncome, income) * 12,
                savings * 12,
              ],
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
              displayLegend: true,
            },
          },
          maintainAspectRatio: true,
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
