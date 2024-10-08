import React, { useState } from "react";
import Create from "./Create";
import Show from "./show";


const App = () => {
    const [expenses, setexpenses] = useState([
        {
            amount: 123,
            remark: "cable manager",
            payment: "cash",
            category: "utility",
        },
        {
            amount: 344,
            remark: "lock-key",
            payment: "cash",
            category: "utility",
        },
        {
            amount: 220,
            remark: "dinner",
            payment: "online",
            category: "food",
        },
      ]);
      return (
          <div>
              <h3>Create Expenses</h3>
              <Create expenses={expenses} setexpenses={setexpenses} />
              <hr />
              <h2>search expense by query</h2>
              <hr />
              <h2>Expense List</h2>
              <Show expenses={expenses} setexpenses={setexpenses} />
          </div>
      );
  };
  
  export default App;