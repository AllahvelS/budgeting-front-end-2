import { useParams } from "react-router-dom";
import TransactionsEditForm from "../Components/TransactionsEditForm";

function Edit() {
  const { id } = useParams(); 

  return (
    <div className="New Edit">
      {/* <h2>Edit</h2> */}
      <TransactionsEditForm transactionId={id} /> 
    </div>
  );
}

export default Edit;
