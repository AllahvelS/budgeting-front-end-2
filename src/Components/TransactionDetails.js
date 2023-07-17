import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const URL = process.env.REACT_APP_API_URL ;

export default function TransactionDetails() {
    

  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

//SHOW
  useEffect(() => {
    axios
      .get(`${URL}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch(() => {
        navigate("/*");
      });
  }, [index, navigate]);

//DELETE
  const handleDelete = () => {
    axios
      .delete(`${URL}/transactions/${index}`)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((e) => console.error(e));
  };

    return (
      <article>
        <div className="card">
            <h1 className="text-center">Transaction</h1>
            <h3>{transaction.item_name}</h3>
            <p>Date: {transaction.date}</p>
            <p>Amount: {transaction.amount}</p>
            <p>From: {transaction.from}</p>
        </div>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button className=" btn btn-outline-secondary">Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}>
            <button className="btn btn-outline-secondary">Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button 
          className="btn btn-danger"
          onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
    )
  }