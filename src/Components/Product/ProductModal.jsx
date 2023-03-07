import "./ProductModal.css";
import { useContext } from "react";

// Context
import { ShopContext } from "../../context/ReShopContext";

// Components
import AddReview from "../Reviews/AddReview";

function ProductModal(props) {
  const { id, name, description, price, thumbnail, reviews } = props.product;

  const getAmountOfReviews = (arr) => {
    return arr !== undefined ? arr.length : 0;
  };
  const getReviews = (arr) => {
    if (arr !== undefined) {
      arr.map((review) => {
        return <div>{review.review}</div>;
      });
    }
  };

  const reviewMessages =
    reviews !== undefined
      ? reviews.map((item) => {
          return (
            <div>
              <span>{item.rating}</span>
              <span>{item.review}</span>
            </div>
          );
        })
      : null;

  const handleClose = (e) => {
    // FadeOut
    // Animation settings
    const anim = {
      name: "fadeOut",
      duration: 150,
      fill: "forwards",
    };
    // Apply the settings
    const modal = document.querySelector(".product-modal").style;
    const overlay = document.querySelector(".product-modal__overlay").style;
    modal.animation = `${anim.name} ${anim.duration}ms ${anim.fill}`;
    overlay.animation = `${anim.name} ${anim.duration * 1.5}ms ${anim.fill}`;
    // Animation delay
    setTimeout(() => {
      props.onClose(true);
    }, anim.duration);
  };

  return (
    <div>
      {props.open && (
        <div>
          <div className="product-modal" tabIndex={"1"}>
            <div onClick={handleClose} className="modalClose">
              <ion-icon
                name="close-outline"
                size="large"
                color="black"
              ></ion-icon>
            </div>
            <div className="product-modal__content">
              <div>
                <img src={`/src/products/${thumbnail}.avif`} alt={name} />
              </div>
              <div>{name}</div>
              <div>{price}</div>
              <div>{description}</div>
              <br />
              <AddReview id={id} />
            </div>
          </div>
          <div onClick={handleClose} className="product-modal__overlay"></div>
        </div>
      )}
    </div>
  );
}

export default ProductModal;
