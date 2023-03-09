import "./StarRating.css";
import { useContext } from "react";
import { ShopContext } from "../../context/ReShopContext";

function StarRating(props) {
  const { getProduct, getAvgRating } = useContext(ShopContext);
  const { id } = props;
  const product = getProduct(id);
  const { reviews } = product;

  const reviewsExist = reviews !== undefined ? true : false;

  const rating = getAvgRating(id);

  return (
    <div className="star-rating">
      <div className="star-rating__stars">
        <span
          className={`star-rating__star ${rating > 0 ? "star-filled" : null}`}
        >
          <ion-icon name="star"></ion-icon>
        </span>
        <span
          className={`star-rating__star ${rating > 1 ? "star-filled" : null}`}
        >
          <ion-icon name="star"></ion-icon>
        </span>
        <span
          className={`star-rating__star ${rating > 2 ? "star-filled" : null}`}
        >
          <ion-icon name="star"></ion-icon>
        </span>
        <span
          className={`star-rating__star ${rating > 3 ? "star-filled" : null}`}
        >
          <ion-icon name="star"></ion-icon>
        </span>
        <span
          className={`star-rating__star ${rating > 4 ? "star-filled" : null}`}
        >
          <ion-icon name="star"></ion-icon>
        </span>
      </div>
      <div className="star-rating__count">
        {reviewsExist ? <span>({reviews.length})</span> : <span>(0)</span>}
      </div>
    </div>
  );
}

export default StarRating;
