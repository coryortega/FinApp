import React, { useState } from 'react';
import './sass/_cory.scss';
import Chart from './components/Chart';

function App() {
  const initialUser = {
    name: 'Steve',
    age: 0,
    income: 0,
    funBudget: 0,
    savings: 0,
    status: '',
    expenses: {
      rent: 0,
      creditCard: 0,
      groceries: 0,
      loans: 0,
    },
  };

  const [user, setUser] = useState(initialUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    const savingRatio = user.savings / user.income;

    if (savingRatio < 0.1) {
      setUser({ ...user, status: 'poor' });
    } else if (savingRatio >= 0.1 && savingRatio < 0.2) {
      setUser({ ...user, status: 'good' });
    } else {
      setUser({ ...user, status: 'great' });
    }
  };

  return (
    <div className='App'>
      <h1>FinApp 4 Lief</h1>
      <form onSubmit={handleSubmit}>
        <div className='general-info'>
          <h3>General information: </h3>
          <div className='input-container'>
            <label>
              Name:
              <input
                type='text'
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </label>
            <label>
              Age:
              <input
                type='number'
                value={user.age}
                onChange={(e) => setUser({ ...user, age: e.target.value })}
              />
            </label>
            <label>
              Monthly income:
              <input
                type='number'
                value={user.income}
                onChange={(e) => setUser({ ...user, income: e.target.value })}
              />
            </label>
            <label>
              Monthly savings:
              <input
                type='number'
                value={user.savings}
                onChange={(e) => setUser({ ...user, savings: e.target.value })}
              />
            </label>
          </div>
        </div>
        <div className='expenses-info'>
          <h3>Monthly expenses: </h3>
          <div className='input-container'>
            <label>
              Rent:
              <input
                type='number'
                value={user.expenses.rent}
                onChange={(e) =>
                  setUser({
                    ...user,
                    expenses: { ...user.expenses, rent: e.target.value },
                  })
                }
              />
            </label>
            <label>
              Credit card:
              <input
                type='number'
                value={user.expenses.creditCard}
                onChange={(e) =>
                  setUser({
                    ...user,
                    expenses: { ...user.expenses, creditCard: e.target.value },
                  })
                }
              />
            </label>
            <label>
              Groceries:
              <input
                type='number'
                value={user.expenses.groceries}
                onChange={(e) =>
                  setUser({
                    ...user,
                    expenses: { ...user.expenses, groceries: e.target.value },
                  })
                }
              />
            </label>
            <label>
              Loans:
              <input
                type='number'
                value={user.expenses.loans}
                onChange={(e) =>
                  setUser({
                    ...user,
                    expenses: { ...user.expenses, loans: e.target.value },
                  })
                }
              />
            </label>
          </div>
          <input type='submit' value='Submit' />
        </div>
      </form>
      <Chart data={initialUser} />
    </div>
  );
}

export default App;
