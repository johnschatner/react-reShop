import "./ProductPage.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { useLocation, Link } from "react-router-dom";

// Splide
// Default theme
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Context
import { ShopContext } from "../../context/ReShopContext";

// Components
import StarRating from "../../Components/Reviews/StarRating";
import AddReview from "../../Components/Reviews/AddReview";
import DisplayReviews from "../../Components/Reviews/DisplayReviews";

function ProductPage() {
  const { pathname } = useLocation();
  const { addToCart, getProduct } = useContext(ShopContext);

  const productId = pathname.split("&id=")[1];
  const product = getProduct(productId);

  const {
    id,
    name,
    price,
    thumbnail,
    secondaryThumbnail,
    description,
    headline,
    reviews,
  } = product;

  const secondaryThumbExists = secondaryThumbnail.length > 0;

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
              <div className="product-gallery">
                <Splide aria-label="Product Gallery">
                  <SplideSlide>
                    <img src={`/src/products/${thumbnail}.avif`} alt={name} />
                  </SplideSlide>
                  {secondaryThumbExists && (
                    <SplideSlide>
                      <img
                        src={`/src/products/${secondaryThumbnail}.avif`}
                        alt={name}
                      />
                    </SplideSlide>
                  )}
                </Splide>
              </div>
              <div className="product-content">
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
              <br></br>
              <DisplayReviews id={id} />
              <br></br>
              <AddReview id={id} />
            </div>
          </main>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductPage;
