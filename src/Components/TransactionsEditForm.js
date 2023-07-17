import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const URL = process.env.REACT_APP_API_URL;

export default function TransactionsEditForm() {
  const { index } = useParams();
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

  const updateTransaction = () => {
    axios
      .put(`${URL}/transactions/${index}`, transaction)
      .then((response) => {
        setTransaction(response.data);
        navigate(`/transactions/${index}`);
      })
      .catch((error) => console.warn("catch", error));
  };

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${URL}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((error) => console.error(error));
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction();
  };

  return (
    <div className="New">
      <h1>Edit Transaction</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
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
          value={transaction.from}
          placeholder="from"
          onChange={handleTextChange}
        />

        <br />
        <button className="btn btn-outline-secondary" type="submit">
          UPDATE TRANSACTION
        </button>
      </form>
    </div>
  );
}
