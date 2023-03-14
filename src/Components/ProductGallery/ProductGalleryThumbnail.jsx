import "./ProductGalleryThumbnail.css";

function ProductGalleryThumbnail(props) {
  const { src, activeImage } = props;

  const onEvent = () => {
    props.onEvent(src);
  };

  return (
    <div
      onClick={onEvent}
      className={`pg__thumbnail ${activeImage === src ? "active" : ""}`}
    >
      <img src={src} alt="" />
    </div>
  );
}

export default ProductGalleryThumbnail;
