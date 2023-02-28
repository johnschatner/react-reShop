import { useContext, useState } from "react";
import "./Product.css";
import ProductModal from "./ProductModal";

import { ShopContext } from "../../context/ReShopContext";

function Product(props) {
  const { cartItems, addToCart } = useContext(ShopContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // One less layer of abstraction
  const p = props.product;

  const addToCartHandler = () => {
    console.log(p.id);
    addToCart(p.id);
    console.log("Cart:", cartItems);
    // props.onAddedToCart(p);
  };

  return (
    <div className="product-card">
      <div className="product__image">
        <div className="product__thumb">
          <a onMouseDown={(e) => e.preventDefault()} onClick={handleOpen}>
            <img src={`/src/products/${p.thumbnail}.avif`} alt={p.name} />
          </a>
        </div>
      </div>
      <div className="product__content">
        <div className="product__name">
          <span>{p.name}</span>
        </div>
        <div className="product__price">
          <span className="product__currency">$</span>
          {p.price}
        </div>
        <div className="product__add-to-cart">
          {/* onMouseDown.. prevents onBlur from firing in Search.jsx */}
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={addToCartHandler}
          >
            Add to cart
          </button>
        </div>
        <div className="product__view-more">
          <a onMouseDown={(e) => e.preventDefault()} onClick={handleOpen}>
            View more
          </a>
          <ProductModal
            open={open}
            onClose={handleClose}
            product={p}
          ></ProductModal>
        </div>
        <div className="product__description">{/* p.description */}</div>
      </div>
    </div>
  );
}

export default Product;
