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
    ]

  };

  const [user, setUser] = useState(initialUser);

  return (
    <div className='App'>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
