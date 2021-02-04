import React, {useState} from 'react'
import Chart from './components/Chart';

function App() {
  const initialUser = {
    name: 'Steve Marquez',
    age: 25,
    income: 1000,
    rent: 300,
    funBudget: 500,
    savings: 100,
    expenses: {
      rent: 500,
      creditCard: 300,
      groceries: 120,
      loans: 100,
    },
  };

  const [user, setUser] = useState(initialUser);

  return (
    <div className='App'>
      <Chart data={initialUser} />
    </div>
  );
}

export default App;
