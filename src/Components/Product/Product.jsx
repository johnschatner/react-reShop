import "./Product.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Context
import { ShopContext } from "../../context/ReShopContext";

// Components
import ProductModal from "./ProductModal";
import StarRating from "../Reviews/StarRating";

function Product(props) {
  // ShopContext
  const { addToCart } = useContext(ShopContext);

  // Object (Product) destructuring
  const { id, name, price, thumbnail } = props.product;

  // React router to navigate programmatically
  const navigate = useNavigate();
  const productNameUrl = name
    .toLowerCase()
    .replaceAll(/\s|[()/]/g, (match) => (match === " " ? "-" : ""))
    .replace(/-+/g, "-");
  const navigateToProductPage = () => {
    navigate(`/product/${productNameUrl}&id=${id}`); // Navigate using useNavigate hook
  };

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
        <a
          onMouseDown={(e) => e.preventDefault()}
          onClick={navigateToProductPage}
        >
          <div className="product__thumb">
            <div className="img">
              <img src={thumbnail} alt={name} />
            </div>
          </div>
        </a>
      </div>
      <div className="product__content">
        <div className="product__name">
          <a className="btn-link" onClick={navigateToProductPage}>
            <span>{name}</span>
          </a>
        </div>
        <StarRating id={id} showCount={true}></StarRating>
        <div className="product-content__box">
          <div className="product-content__box-left">
            <div className="product__price">
              <span className="product__currency">$</span>
              {price}
            </div>
          </div>
          <div className="product-content__box-right">
            <div className="product__add-to-cart">
              {/* onMouseDown.. prevents onBlur from firing in Search.jsx */}
              <button
                className="icon-btn"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => addToCart(id)}
              >
                <ion-icon name="bag-add-outline"></ion-icon>
              </button>
            </div>
            <div className="product__view-more">
              <a
                className="icon-btn"
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleOpen}
              >
                <ion-icon name="book-outline"></ion-icon>
              </a>
              <ProductModal
                open={open}
                onClose={handleClose}
                product={props.product}
              ></ProductModal>
            </div>
          </div>
          {/* <div className="product__description">{p.description}</div> */}
        </div>
      </div>
    </div>
  );
}

export default Product;
