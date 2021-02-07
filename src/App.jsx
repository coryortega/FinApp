import React, { useState } from 'react';
import './sass/_cory.scss';
import Chart from './components/Chart';
import Content from './components/Content';
import Form from './components/Form';
import Graph from './components/Graph';

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
    infoSubmitted: false,
    initialRender: true,
  };

  const [user, setUser] = useState(initialUser);

  return (
    <div className='App'>
      <h1 className='title'>FinApp</h1>
      <div className='main'>
        <Form setUser={setUser} user={user} />
        <Chart userData={user} />
      </div>
      <Graph userData={user} />
      <Content user={user} />
    </div>
  );
}

export default App;
