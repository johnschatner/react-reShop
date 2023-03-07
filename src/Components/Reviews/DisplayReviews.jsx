import "./DisplayReviews.css";
import { useContext } from "react";

// Context
import { ShopContext } from "../../context/ReShopContext";

function DisplayReviews(props) {
  const { PRODUCTS } = useContext(ShopContext);
  console.log(PRODUCTS);
  console.log(props);
}

export default DisplayReviews;
