import Product from "./Product";
import "./ProductGrid.css";

function ProductGrid(props) {
  const addedToCartHandler = (added) => {
    props.onAddedToCart(added);
  };

  // Iterate over each product and assign a Product component to it
  const products = props.products.map((p) => {
    return (
      <Product key={p.id} product={p} onAddedToCart={addedToCartHandler} />
    );
  });

  return <div className="product-grid__container">{products}</div>;
}

export default ProductGrid;
