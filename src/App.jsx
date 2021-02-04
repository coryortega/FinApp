import { useState } from 'react';
import Content from './components/Content'

function App() {
  const initialUser = {
    name: "",
    age: 0,
    income: 0,
    rent: 0,
    funBudget: 0,
    savings: 0,
    expenses: [
      {creditCard: 0},
      {groceries: 0},
      {loans: 0}
    ],
    financialHealth: ['poor', 'good', 'great'],

  };

  const [user, setUser] = useState(initialUser);

  return (
    <div className='App'>
      <h1>Hello</h1>
      <Content user={user} />
    </div>
  );
}

export default App;
