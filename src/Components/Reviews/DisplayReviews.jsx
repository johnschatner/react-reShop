import "./DisplayReviews.css";
import { useContext } from "react";

// Context
import { ShopContext } from "../../context/ReShopContext";

// Components
import StarRating from "./StarRating";

function DisplayReviews(props) {
  const { getProduct, getAvgRating } = useContext(ShopContext);
  const { id } = props;

  // Get reviews for current product
  const reviews = getProduct(id).reviews;
  const avgRating = Math.round(getAvgRating(id) * 10) / 10;

  // HTML
  let jsx;
  if (reviews) {
    jsx = reviews.map((item) => {
      return (
        <div key={Math.random()} className="review-item">
          <StarRating id={id} itemRating={item.rating} showCount={false} />
          <div className="review-item__message">{item.review}</div>
        </div>
      );
    });
  } else {
    return <div className="reviews-title">No reviews found!</div>;
  }

  return (
    <div className="reviews-container">
      <div className="reviews-title">
        <span className="reviews__avg-rating">{avgRating} / 5</span> average
        based on {reviews.length} reviews
      </div>
      <div className="review-items__container">{jsx}</div>
    </div>
  );
}

export default DisplayReviews;
