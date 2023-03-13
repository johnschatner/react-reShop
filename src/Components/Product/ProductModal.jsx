import "./ProductModal.css";

// Components
import AddReview from "../Reviews/AddReview";
import DisplayReviews from "../Reviews/DisplayReviews";

function ProductModal(props) {
  const { id, name, description, price, thumbnail, reviews } = props.product;

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
              <div className="product-modal-left">
                <div className="product-modal__gallery">
                  <img src={`/src/products/${thumbnail}.avif`} alt={name} />
                </div>
              </div>
              <div className="product-modal-right">
                <div className="product-modal__name">{name}</div>
                <div className="product-modal__price">${price}</div>
                <div className="product-modal__desc">{description}</div>
              </div>
            </div>
            <div className="product-modal__reviews">
              <DisplayReviews id={id} />
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
