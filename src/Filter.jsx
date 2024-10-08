import { useState } from "react";

const Create = (props) => {
    const { expenses, setexpenses } = props;
    const [amount, setamount] = useState(0);
    const [remark, setremark] = useState("");
    const [category, setcategory] = useState("");
    const [payment, setpayment] = useState("cash");

    const SubmitHandler = (e) => {
        e.preventDefault();

        const newexpense = { amount, remark, category, payment };

        const copyexpenses = [...expenses];
        copyexpenses.push(newexpense);
        setexpenses(copyexpenses);

        // setexpenses([...expenses, newexpense])
    };
    return (
        <form onSubmit={SubmitHandler}>
       
            <select
                onChange={(e) => setpayment(e.target.value)}
                value={payment}
                name="payment"
            >
                <option value="cash">Cash</option>
                <option value="online">Online</option>
                <option value="card">Card</option>
            </select>
            <button>Add Expense</button>
        </form>
    );
};

export default Create;