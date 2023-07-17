import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;


function Transactions() {
    const [transactions, setTransactions] = useState([]);
    const [total, setTotal] = useState(0);
  
    useEffect(() => {
      axios
        .get(`${API}/transactions`)
        .then((response) => {
          setTransactions(response.data);
          handleGetTotal(response.data);
        })
        .catch((e) => console.error("catch", e));
    }, []);
  
    const handleGetTotal = (transactions) => {
        const sum = transactions.reduce((total, transaction) => {
          const amount = Number(transaction.amount);
          return total + amount;
        }, 0);
        setTotal(sum);
      };
      

  return (
    <div className="Transactions">
        <h1>Bank Account Total: {total}</h1>
      <section>
        <table>
          <thead>
            <tr>
              <th>Transaction Date</th>
              <th>Transaction</th>
              <th>Transaction Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return <Transaction key={index} transaction={transaction} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;
