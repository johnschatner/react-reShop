import "./ProductPage.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { useLocation, Link } from "react-router-dom";

// Context
import { ShopContext } from "../../context/ReShopContext";

// Components
import StarRating from "../../Components/Reviews/StarRating";
import AddReview from "../../Components/Reviews/AddReview";
import DisplayReviews from "../../Components/Reviews/DisplayReviews";
import ProductGallery from "../../Components/ProductGallery/ProductGallery";
import YouMayLike from "../../Components/YouMayLike/YouMayLike";
import ProductCategory from "../../Components/ProductCategory/ProductCategory";

function ProductPage() {
  const { pathname } = useLocation();
  const { addToCart, getProduct } = useContext(ShopContext);

  const productId = pathname.split("&id=")[1];
  const product = getProduct(productId);

  const { id, name, price, description, headline } = product;

  return (
    <motion.div
      // Prop that will animate when component is removed from DOM
      exit={{ opacity: 0, scale: 0.97 }}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="product-page-wrapper">
        <div className="inner-wrapper">
          <nav className="product-page__nav">
            <Link className="return-btn re-btn" to="/">
              Return
            </Link>
          </nav>
          <main className="product-wrapper">
            <div className="product-container">
              <ProductGallery id={id} />
              <div className="product-content">
                <ProductCategory id={id} />
                <div className="product-title">{name}</div>
                <div className="product-price">${price}</div>
                <StarRating id={id} showCount={true} />
                <div className="addToCart-container">
                  <button
                    onClick={() => addToCart(id)}
                    className="addToCart re-btn"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="product-lower-content">
              <div className="product-headline">{headline}</div>
              <div className="product-desc">{description}</div>
              <DisplayReviews id={id} />
              <AddReview id={id} />
            </div>
            <YouMayLike id={id}></YouMayLike>
          </main>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductPage;
