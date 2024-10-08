import {createContext, useState} from 'react'


export const ExpenseContext = createContext();

const Context = (props) => {
    const [Expenses, setExpenses] = useState(
        JSON.parse(localStorage.getItem("expenses"))||[]
        );

  return (
    <ExpenseContext.Provider value={[Expenses, setExpenses]}>
      {props.children}
    </ExpenseContext.Provider>
  )
}

export default Context
