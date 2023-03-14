import "./ProductGallery.css";
import { useState, useContext } from "react";

// Context
import { ShopContext } from "../../context/ReShopContext";

// Components
import ProductGalleryThumbnail from "./ProductGalleryThumbnail";

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

  // Product gallery methods
  const [activeImage, setActiveImage] = useState(thumbnail);
  const changeImage = (src) => {
    setActiveImage(src);
  };

  // Iterate over available thumbnails and
  // return a slide component for each image
  const thumbnails = gallery.map((imgSrc, i) => {
    return (
      <ProductGalleryThumbnail
        key={i}
        onEvent={changeImage}
        src={imgSrc}
      ></ProductGalleryThumbnail>
    );
  });

  return (
    <div className="product-gallery">
      <div className="product-gallery__active-image">
        <img src={activeImage} alt="" />
      </div>
      <div className="product-gallery__thumbnails">{thumbnails}</div>
    </div>
  );
}

export default ProductGallery;
