import "./Product.css";

function Product(props) {
  // One less layer of abstraction
  const p = props.product;

  const addToCartHandler = () => {
    props.onAddedToCart(p);
  };

  return (
    <div className="product-card">
      <div className="product__image">
        <div className="product__thumb">
          <img src={`/src/products/${p.thumbnail}.avif`} alt={p.name} />
        </div>
      </div>
      <div className="product__content">
        <div className="product__name">
          <span>{p.name}</span>
        </div>
        <div className="product__price">
          <span className="product__currency">$</span>
          {p.price}
        </div>
        <div className="product__add-to-cart">
          <button onClick={addToCartHandler}>Add to cart</button>
        </div>
        <div className="product__description">{/* p.description */}</div>
      </div>
    </div>
  );
}

export default Product;
