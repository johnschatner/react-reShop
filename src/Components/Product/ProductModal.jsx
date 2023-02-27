import "./ProductModal.css";

function ProductModal(props) {
  const handleClose = (e) => {
    console.log("Close!");

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
          {/* Below onMouseDown.. prevents the modal from dissappearing initiated inside search */}
          <div
            onMouseDown={(e) => e.preventDefault()}
            className="product-modal"
            tabIndex={"1"}
          >
            <div onClick={handleClose} className="modalClose">
              <ion-icon
                name="close-outline"
                size="large"
                color="black"
              ></ion-icon>
            </div>
            <div className="product-modal__content">
              <div>
                <img
                  src={`/src/products/${props.product.thumbnail}.avif`}
                  alt={props.product.name}
                />
              </div>
              <div>{props.product.name}</div>
              <div>{props.product.price}</div>
              <div>{props.product.description}</div>
            </div>
          </div>
          <div onClick={handleClose} className="product-modal__overlay"></div>
        </div>
      )}
    </div>
  );
}

export default ProductModal;
