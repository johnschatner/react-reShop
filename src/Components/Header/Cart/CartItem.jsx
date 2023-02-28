import "./CartItem.css";

function CartItem(props) {
  const p = props.product;

  // Lifting state
  const incrementHandler = () => {
    props.increment(p);
  };
  const decrementHandler = () => {
    props.decrement(p);
  };

  return (
    <div>
      <div>Name: {p.name}</div>
      <div>Price: {p.price}</div>
      <div>
        Quantity: {p.quantity}
        <button onClick={incrementHandler}>+</button>
        <button onClick={decrementHandler}>-</button>
      </div>
    </div>
  );
}

export default CartItem;
