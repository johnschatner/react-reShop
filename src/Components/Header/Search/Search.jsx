import "./SearchWindow.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Context
import { HeaderContext } from "../../../context/ReHeaderContext";
import { ShopContext } from "../../../context/ReShopContext";

function Search() {
  const { handleSearch, backUrl, setBackUrl, setFilteredProducts } =
    useContext(HeaderContext);
  const { PRODUCTS } = useContext(ShopContext);
  // React router to navigate programmatically
  const navigate = useNavigate();

  const updateBackUrl = (e) => {
    const str = e.target.value.toLowerCase();
    setBackUrl(str);
    if (str !== "") {
      // Filter the products based on search string
      let results = PRODUCTS.filter((product) =>
        product.name.toLowerCase().includes(str)
      );
      // Limit arr size
      results = [...results.slice(0, 3)];
      // Store results in state
      setFilteredProducts(() => results);
    } else {
      setFilteredProducts(() => []);
    }
  };

  const searchEventHandler = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      const searchQuery = getSearchQuery(); // Gets current search query from liveSearch state
      searchQuery !== undefined && searchQuery !== "undefined" // Check if truthy str and not empty
        ? navigate(`search?q=${searchQuery}`) // Navigate using useNavigate hook
        : null;
    }
  };

  const getSearchQuery = () => {
    return backUrl !== "" ? backUrl : "undefined"; // Returns state or "undefined"
  };

  return (
    <div className="flex">
      <form
        className="search-form"
        tabIndex={"0"}
        onKeyDown={searchEventHandler}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="search-bar__container">
          <button onClick={searchEventHandler} className="search-btn icon-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>
          <input
            onFocus={handleSearch}
            onChange={updateBackUrl}
            className="form-control"
            type="text"
            placeholder="What are you looking for?"
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
