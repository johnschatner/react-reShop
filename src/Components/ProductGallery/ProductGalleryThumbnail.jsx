import "./ProductGalleryThumbnail.css";

function ProductGalleryThumbnail(props) {
  const { src } = props;

  const onEvent = () => {
    props.onEvent(src);
  };

  return (
    <div onClick={onEvent} className="product-gallery__thumbnail">
      <img src={src} alt="" />
    </div>
  );
}

export default ProductGalleryThumbnail;
