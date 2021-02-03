import React, { useState } from 'react';

function App() {
  const initialUser = {
    name: "",
    age: 0,
    income: 0,
    funBudget: 0,
    savings: 0,
    expenses: {
      rent: 0,
      creditCard: 0,
      groceries: 0,
      loans: 0
    }
  };

  const [user, setUser] = useState(initialUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Is the form working? ${user.name} ${user.age} ${user.expenses.rent}`)
  }

  return (
    <div className='App'>
      <h1>FinApp 4 Lief</h1>
      <form onSubmit={handleSubmit}>
      <h3>General information: </h3>
      <label>
        Name:
        <input
          type="text"
          value={user.name}
          onChange={e => setUser({...user, name: e.target.value})}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          value={user.age}
          onChange={e => setUser({...user, age: e.target.value})}
        />
      </label>
      <label>
        Income:
        <input
          type="number"
          value={user.income}
          onChange={e => setUser({...user, income: e.target.value})}
        />
      </label>
      <label>
        Savings:
        <input
          type="number"
          value={user.savings}
          onChange={e => setUser({...user, savings: e.target.value})}
        />
      </label>
      <h3>Monthly expenses: </h3>
      <label>
        Rent:
        <input
          type="number"
          value={user.expenses.rent}
          onChange={e => setUser({...user, expenses: {...user.expenses, rent: e.target.value}})}
        />
      </label>
      <label>
        Credit card:
        <input
          type="number"
          value={user.expenses.creditCard}
          onChange={e => setUser({...user, expenses: {...user.expenses, creditCard: e.target.value}})}
        />
      </label>
      <label>
        Groceries:
        <input
          type="number"
          value={user.expenses.groceries}
          onChange={e => setUser({...user, expenses: {...user.expenses, groceries: e.target.value}})}
        />
      </label>
      <label>
        Loans:
        <input
          type="number"
          value={user.expenses.loans}
          onChange={e => setUser({...user, expenses: {...user.expenses, loans: e.target.value}})}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}

export default App;
