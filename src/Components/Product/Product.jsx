import { useContext, useState } from "react";
import "./Product.css";
import ProductModal from "./ProductModal";

// Context
import { ShopContext } from "../../context/ReShopContext";

function Product(props) {
  // ShopContext
  const { addToCart } = useContext(ShopContext);

  // Object (Product) destructuring
  const { id, name, price, thumbnail } = props.product;

  // Modal state
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="product-card">
      <div className="product__image">
        <div className="product__thumb">
          <a onMouseDown={(e) => e.preventDefault()} onClick={handleOpen}>
            <img src={`/src/products/${thumbnail}.avif`} alt={name} />
          </a>
        </div>
      </div>
      <div className="product__content">
        <div className="product__name">
          <span>{name}</span>
        </div>
        <div className="product__price">
          <span className="product__currency">$</span>
          {price}
        </div>
        <div className="product__add-to-cart">
          {/* onMouseDown.. prevents onBlur from firing in Search.jsx */}
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => addToCart(id)}
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
            product={props.product}
          ></ProductModal>
        </div>
        <div className="product__description">{/* p.description */}</div>
      </div>
    </div>
  );
}

export default Product;
