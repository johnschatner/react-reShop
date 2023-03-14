import "./ProductSlide.css";

function ProductSlide(props) {
  const clickHandler = (e) => {
    console.log("clicked", e.target);
  };

  return (
    <div onClick={clickHandler} className="product-slide">
      <img src={props.src} alt="" />
    </div>
  );
}

export default ProductSlide;
