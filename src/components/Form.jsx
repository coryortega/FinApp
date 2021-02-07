import React, { useState } from "react";

export default function Form(props) {
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    let errors = {};
    let formIsValid = true;

    if(!props.user.name) {
      formIsValid = false;
      errors["name"] = "Must put a name";
    }

    if(!props.user.age || props.user.age === 0) {
      formIsValid = false;
      errors["age"] = "Must put an age";
    }

    if(props.user.income === 0) {
      formIsValid = false;
      errors["income"] = "Please input your monthly income";
    }

    if(props.user.savings === 0) {
      formIsValid = false;
      errors["savings"] = "Please input the amount you save every month";
    }

    if(props.user.savings > props.user.income) {
      formIsValid = false;
      errors["savings"] = "Savings can't be more than you make";
    }
    
    setErrors({errors: errors})
    return formIsValid
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(handleValidation()) {
      const savingRatio = props.user.savings / props.user.income;

      if (savingRatio < 0.1) {
        props.setUser({ ...props.user, status: "poor", infoSubmitted: !props.user.infoSubmitted, initialRender: false });
      } else if (savingRatio >= 0.1 && savingRatio < 0.2) {
        props.setUser({ ...props.user, status: "good", infoSubmitted: !props.user.infoSubmitted, initialRender: false });
      } else {
        props.setUser({ ...props.user, status: "great", infoSubmitted: !props.user.infoSubmitted, initialRender: false });
      }
    } else {
      alert("Please fix the errors")
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
              <span style={{color: "red"}}>{errors.errors?.["name"]}</span>
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
              <span style={{color: "red"}}>{errors.errors?.["age"]}</span>
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
              <span style={{color: "red"}}>{errors.errors?.["income"]}</span>
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
              <span style={{color: "red", width: "250px"}}>{errors.errors?.["savings"]}</span>
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
