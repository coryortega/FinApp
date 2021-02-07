import React from "react";

export default function Form(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const savingRatio = props.user.savings / props.user.income;

    if (savingRatio < 0.1) {
      props.setUser({ ...props.user, status: "poor", infoSubmitted: !props.user.infoSubmitted, initialRender: false });
    } else if (savingRatio >= 0.1 && savingRatio < 0.2) {
      props.setUser({ ...props.user, status: "good", infoSubmitted: !props.user.infoSubmitted, initialRender: false });
    } else {
      props.setUser({ ...props.user, status: "great", infoSubmitted: !props.user.infoSubmitted, initialRender: false });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="general-info">
          <h3>General information: </h3>
          <div className="input-container">
            <label>
              Name:
              <input
                type="text"
                value={props.user.name}
                onChange={(e) =>
                  props.setUser({ ...props.user, name: e.target.value })
                }
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                value={props.user.age}
                onChange={(e) =>
                  props.setUser({ ...props.user, age: e.target.value })
                }
              />
            </label>
            <label>
              Monthly income:
              <input
                type="number"
                value={props.user.income}
                onChange={(e) =>
                  props.setUser({ ...props.user, income: e.target.value })
                }
              />
            </label>
            <label>
              Monthly savings:
              <input
                type="number"
                value={props.user.savings}
                onChange={(e) =>
                  props.setUser({ ...props.user, savings: e.target.value })
                }
              />
            </label>
          </div>
        </div>
        <div className="expenses-info">
          <h3>Monthly expenses: </h3>
          <div className="input-container">
            <label>
              Rent:
              <input
                type="number"
                value={props.user.expenses.rent}
                onChange={(e) =>
                  props.setUser({
                    ...props.user,
                    expenses: { ...props.user.expenses, rent: e.target.value },
                  })
                }
              />
            </label>
            <label>
              Credit card:
              <input
                type="number"
                value={props.user.expenses.creditCard}
                onChange={(e) =>
                  props.setUser({
                    ...props.user,
                    expenses: {
                      ...props.user.expenses,
                      creditCard: e.target.value,
                    },
                  })
                }
              />
            </label>
            <label>
              Groceries:
              <input
                type="number"
                value={props.user.expenses.groceries}
                onChange={(e) =>
                  props.setUser({
                    ...props.user,
                    expenses: {
                      ...props.user.expenses,
                      groceries: e.target.value,
                    },
                  })
                }
              />
            </label>
            <label>
              Loans:
              <input
                type="number"
                value={props.user.expenses.loans}
                onChange={(e) =>
                  props.setUser({
                    ...props.user,
                    expenses: { ...props.user.expenses, loans: e.target.value },
                  })
                }
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Submit" className="btn"/>
      </form>
    </div>
  );
}
