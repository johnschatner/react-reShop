import "./ProductGallery.css";
import { useContext } from "react";

// Context
import { ShopContext } from "../../context/ReShopContext";

// Components
import ProductSlide from "../../Components/ProductGallery/ProductSlide";

function ProductGallery(props) {
  const { id } = props;
  // Use context to get method that can get the product
  const { getProduct } = useContext(ShopContext);
  // Get the product based on id
  const product = getProduct(id);
  // Object destructuring (get thumbnails)
  const { thumbnail, secondaryThumbnail } = product;
  // Create gallery array
  const gallery = [thumbnail, secondaryThumbnail];

  // Iterate over available thumbnails and
  // return a slide component for each image
  const slides = gallery.map((imgSrc, i) => {
    return <ProductSlide key={i} src={imgSrc}></ProductSlide>;
  });

  return (
    <div className="product-gallery">
      <div className="product-slides">
        {/* Render available product images as slides*/}
        {slides}
      </div>
    </div>
  );
}

export default ProductGallery;
