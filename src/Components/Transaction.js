import { Link } from "react-router-dom";

function Transaction({ transaction }) {
  return (
    <tr className="transaction">
      <td>{transaction.date}</td>
      <td>
        <Link to={`/transactions/${transaction.id}`}>{transaction.item_name}</Link>
      </td>
      <td>{transaction.amount}</td>
    </tr>
  );
}

export default Transaction;
