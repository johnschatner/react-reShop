import { useContext } from "react";
import "./AddReview.css";

// Context
import { ShopContext } from "../../context/ReShopContext";

function AddReview() {
  const { addReview } = useContext(ShopContext);

  return (
    <button onClick={() => addReview(2)} className="re-btn review-btn">
      Add
    </button>
  );
}

export default AddReview;
