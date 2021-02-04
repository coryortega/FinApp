import React from 'react';
import 'chartjs-plugin-datalabels';

import { Doughnut, Bar, Line, Pie } from 'react-chartjs-2';

const Chart = ({ data }) => {
  return (
    <div className='chart'>
      <Pie
        data={{
          labels: ['Income', 'Expenses', 'Rent', 'Fun Budget', 'Savings'],
          datasets: [
            {
              label: 'Finances',
              data: [data.income, 300, data.rent, data.funBudget, data.savings],
              backgroundColor: ['red', 'green', 'blue', 'yellow', 'purple'],
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
