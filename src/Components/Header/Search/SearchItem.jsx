import "./SearchItem.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Context
import { ShopContext } from "../../../context/ReShopContext";
import { HeaderContext } from "../../../context/ReHeaderContext";

function SearchItem(props) {
  // Context
  const { addToCart } = useContext(ShopContext);
  const { setHeaderOpen } = useContext(HeaderContext);
  // Product destructuring
  const { id, name, price, thumbnail } = props.product;

  // React router to navigate programmatically
  const navigate = useNavigate();
  const productNameUrl = name
    .toLowerCase()
    .replaceAll(/\s|[()/]/g, (match) => (match === " " ? "-" : ""))
    .replace(/-+/g, "-");
  const navigateToProductPage = () => {
    navigate(`/product/${productNameUrl}&id=${id}`); // Navigate using useNavigate hook
    setHeaderOpen(() => false);
  };

  return (
    <div className="search-item">
      <div onClick={navigateToProductPage} className="search-item__left">
        <div className="search-item__thumb">
          <img src={thumbnail} alt={name} />
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
