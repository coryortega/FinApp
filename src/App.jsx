import React, { useState } from 'react';
import './sass/_cory.scss';
import Chart from './components/Chart';
import Content from './components/Content';
import Form from './components/Form';

function App() {
  const initialUser = {
    name: '',
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

  return (
    <div className='App'>
      <h1 class="title">FinApp</h1>
      <div className="main">
        <Form setUser={setUser} user={user} />
        <Chart userData={user} />
      </div>
      <Content user={user} />
    </div>
  );
}

export default App;
