import React from 'react';
import 'chartjs-plugin-datalabels';

import { Doughnut } from 'react-chartjs-2';

const Chart = ({ data }) => {
  return (
    <div className='chart'>
      <Doughnut
        data={{
          labels: [
            'Income',
            'Credit Card Expense',
            'Rent',
            'Groceries',
            'Loans',
            'Fun Budget',
            'Savings',
          ],
          datasets: [
            {
              label: 'Finances',
              data: [
                data.income,
                data.expenses.creditCard,
                data.expenses.rent,
                data.expenses.groceries,
                data.expenses.loans,
                data.funBudget,
                data.savings,
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
            },
          ],
        }}
        options={{
          plugins: {
            datalabels: { display: true, color: 'white' },
          },
          title: {
            display: true,
            text: `${data.name} Finances`,
          },
        }}
      />
    </div>
  );
};

export default Chart;
