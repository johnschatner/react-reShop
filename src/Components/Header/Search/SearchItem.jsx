import "./SearchItem.css";

// Context
import { useContext } from "react";
import { ShopContext } from "../../../context/ReShopContext";

function SearchItem(props) {
  // Context
  const { addToCart } = useContext(ShopContext);
  // Product destructuring
  const { id, name, price, thumbnail } = props.product;

  return (
    <div className="search-item">
      <div className="search-item__left">
        <div className="search-item__thumb">
          <a>
            <img src={thumbnail} alt={name} />
          </a>
        </div>
        <div className="search-item__name">{name}</div>
      </div>
      <div className="search-item__right">
        <div className="search-item__price">${price}</div>
        <button
          className="icon-btn"
          onClick={() => {
            addToCart(id);
          }}
        >
          <ion-icon name="add-outline" size="small"></ion-icon>
        </button>
      </div>
    </div>
  );
}

export default SearchItem;
