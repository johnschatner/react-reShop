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
  const multipleImagesExist = secondaryThumbnail !== "" ? true : false;
  let gallery;
  if (multipleImagesExist) {
    gallery = [thumbnail, secondaryThumbnail];
  } else {
    gallery = [thumbnail];
  }

  // Product gallery methods
  const [activeImage, setActiveImage] = useState(thumbnail);
  const changeImage = (src) => {
    setActiveImage(src);
  };
  const navigation = () => {
    if (activeImage === thumbnail && multipleImagesExist) {
      setActiveImage(secondaryThumbnail);
    } else {
      setActiveImage(thumbnail);
    }
  };

  // Iterate over available thumbnails and
  // return a slide component for each image
  const thumbnails = gallery.map((imgSrc, i) => {
    return (
      <ProductGalleryThumbnail
        key={i}
        onEvent={changeImage}
        activeImage={activeImage}
        src={imgSrc}
      ></ProductGalleryThumbnail>
    );
  });

  return (
    <div className="pg no-highlight">
      <div className="pg__active-image">
        <div onClick={navigation} className="pg__nav pg__prev">
          <ion-icon name="chevron-back"></ion-icon>
        </div>
        <div onClick={navigation} className="pg__nav pg__next">
          <ion-icon name="chevron-forward"></ion-icon>
        </div>
        <img src={activeImage} alt="" />
      </div>
      <div className="pg__thumbnails">{thumbnails}</div>
    </div>
  );
}

export default ProductGallery;
