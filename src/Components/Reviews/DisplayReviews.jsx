import "./DisplayReviews.css";
import { useContext, Fragment } from "react";

// Context
import { ShopContext } from "../../context/ReShopContext";

function DisplayReviews(props) {
  const { getProduct, getAvgRating } = useContext(ShopContext);
  const { id } = props;

  // Get reviews for current product
  const reviews = getProduct(id).reviews;
  const avgRating = getAvgRating(id);

  console.log(avgRating);

  // HTML
  let jsx;
  if (reviews) {
    jsx = reviews.map((item) => {
      return (
        <div>
          <div></div>
          <span>{item.rating}</span>
          <div>{item.review}</div>
        </div>
      );
    });
  } else {
    return <div>No reviews found!</div>;
  }

  console.log(reviews);

  return (
    <div className="reviews-container">
      <div>Reviews</div>
      <div>{jsx}</div>
    </div>
  );
}

export default DisplayReviews;
