import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const URL = process.env.REACT_APP_API_URL ;

export default function TransactionsNewForm() {

  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    id: 0,
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    isDeposit: 0,
    category: "",
  });

  const addTransaction = (newTransaction) => {
    axios
    .post(`${URL}/transactions`, newTransaction)
    .then(
      () => {
        setTransaction()
        navigate(`/transactions`)
      })
    .catch((eR) => console.error("catch", eR));
  };

  const handleTextChange = (event) => {
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      [event.target.id]: event.target.value,
    }));
  };

  const handleCheckboxChange = (event) => {
    setTransaction({ ...transaction, isDeposit: !transaction.isDeposit });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction(transaction)
  };
    return (
        <div className=".New"> 
            <h1>Add a new item</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="captainName">Date:</label>
                <input
                id="date"
                value={transaction.date}
                type="text"
                onChange={handleTextChange}
                placeholder="date"
                required
                />
                <label htmlFor="item_name">Name:</label>
                <input
                id="item_name"
                type="text"
                required
                value={transaction.item_name}
                placeholder="name"
                onChange={handleTextChange}
                />

                <label htmlFor="amount">Amount:</label>
                <input
                id="amount"
                type="number"
                name="amount"
                value={transaction.amount}
                placeholder="Amount"
                onChange={handleTextChange}
                />

                <label htmlFor="from">From:</label>
                <input
                id="from"
                type="text"
                onChange={handleTextChange}
                value={transaction.from}
                placeholder="from"
                />

                <br />
                <button className="btn btn-outline-secondary" type="submit"> CREATE NEW ITEM </button>
            </form>
        </div>
    )
}