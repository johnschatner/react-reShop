import { useContext, useState } from "react";
import "./AddReview.css";

// Context
import { ShopContext } from "../../context/ReShopContext";

function AddReview(props) {
  const [ratingValidity, setRatingValidity] = useState(true);
  const [messageValidity, setMessageValidity] = useState(true);

  const { addReview } = useContext(ShopContext);
  const { id } = props;

  const validtyHandler = (e) => {
    // Check which type of event is being fired

    // Radio (Star ratings)
    if (e.target.type === "radio") {
      setRatingValidity(() => true);
    }

    // Textarea (Review message)
    if (e.target.type === "textarea") {
      // Check if there's a value
      if (e.target.value) {
        setMessageValidity(() => true);
      } else {
        setMessageValidity(() => false);
      }
    }
  };

  const reviewHandler = (e) => {
    // Disable default form behaviour
    e.preventDefault();

    // Get the rating
    const stars = {
      5: e.target[0].checked,
      4: e.target[1].checked,
      3: e.target[2].checked,
      2: e.target[3].checked,
      1: e.target[4].checked,
    };
    let rating;
    for (const key in stars) {
      if (stars[key] === true) {
        rating = Number(key);
      }
    }

    // Check if we have given a star rating
    if (!rating) {
      setRatingValidity(() => false);
    } else {
      setRatingValidity(() => true);
    }

    // Get the review message
    const message = e.target[5].value;

    // Check if we have given a message
    if (!message) {
      return;
    }

    // Review object to pass into function
    const review = {
      rating: rating,
      review: message,
    };

    // Execute context method
    addReview(id, review);
  };

  return (
    <form onSubmit={reviewHandler}>
      <div>Leave a review</div>
      <div className={`rate ${ratingValidity ? "valid" : "invalid"}`}>
        <input
          type="radio"
          id="star5"
          name="rate"
          value="5"
          onChange={validtyHandler}
        />
        <label for="star5" title="text">
          5 stars
        </label>
        <input
          type="radio"
          id="star4"
          name="rate"
          value="4"
          onChange={validtyHandler}
        />
        <label for="star4" title="text">
          4 stars
        </label>
        <input
          type="radio"
          id="star3"
          name="rate"
          value="3"
          onChange={validtyHandler}
        />
        <label for="star3" title="text">
          3 stars
        </label>
        <input
          type="radio"
          id="star2"
          name="rate"
          value="2"
          onChange={validtyHandler}
        />
        <label for="star2" title="text">
          2 stars
        </label>
        <input
          type="radio"
          id="star1"
          name="rate"
          value="1"
          onChange={validtyHandler}
        />
        <label for="star1" title="text">
          1 star
        </label>
      </div>
      <textarea
        maxlength="150"
        placeholder="Write your review here"
        onChange={validtyHandler}
        className={`reviewArea ${messageValidity ? "valid" : "invalid"}`}
        name="review"
        id=""
        cols="30"
        rows="3"
      ></textarea>
      <button className="re-btn">Submit</button>
    </form>
  );
}

export default AddReview;
