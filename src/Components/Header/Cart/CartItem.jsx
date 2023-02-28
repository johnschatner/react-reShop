import "./CartItem.css";

function CartItem(props) {
  const p = props.product;

  return (
    <div>
      <div>Name: {p.name}</div>
      <div>Price: {p.price}</div>
      <div>
        Quantity: {p.quantity}
        <button onClick={console.log("+1")}>+</button>
        <button onClick={console.log("-1")}>-</button>
      </div>
    </div>
  );
}

export default CartItem;
