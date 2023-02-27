import "./CartItem.css";

function CartItem(props) {
  const p = props.product;

  return (
    <div>
      <div>Name: {p.name}</div>
      <div>Price: {p.price}</div>
      <div>Quantity: {p.quantity}</div>
    </div>
  );
}

export default CartItem;
