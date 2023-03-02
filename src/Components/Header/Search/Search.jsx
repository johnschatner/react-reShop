import { useState } from "react";
import "./Search.css";
import { Link, useNavigate } from "react-router-dom";
import SearchItem from "./SearchItem";

function Search(props) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // SearchPage router param
  const [backUrl, setBackUrl] = useState();
  const navigate = useNavigate();

  // One less layer of abstraction
  const products = props.searchableProducts;

  const formHandler = (e) => {
    e.preventDefault();
  };

  const searchActiveHandler = () => {
    setIsSearching(true);
    props.stateChanger(true); // Update header (parent)
  };

  const searchExitHandler = () => {
    // Fix unwanted behaviour where you cant click on the livesearch without
    // the results disappearing
    setIsSearching(false);
    props.stateChanger(false); // Update header (parent)
  };

  const liveSearch = (e) => {
    // Store search string
    const searchString = e.target.value.toLowerCase();
    setBackUrl(searchString);
    // Filter the products based on search string
    let results = products.filter((product) =>
      product.name.toLowerCase().includes(searchString)
    );
    // Limit arr size
    results = [...results.slice(0, 3)];
    // Store results in state
    setFilteredProducts(() => results);
  };

  const getSearchQuery = () => {
    return backUrl !== "" ? backUrl : "undefined";
  };

  return (
    <div className="flex">
      <div className="logo">
        <Link to="/" className="icon-btn">
          <ion-icon name="logo-apple"></ion-icon>
        </Link>
      </div>
      <form
        className="search-form"
        tabIndex={"0"}
        onKeyDown={(e) =>
          e.key === "Enter" ? navigate(`search?q=${getSearchQuery()}`) : null
        }
        onBlur={searchExitHandler}
        onSubmit={formHandler}
      >
        <div className="search-bar__container">
          <button className="search-btn icon-btn">
            <Link
              to={{
                pathname: `/${"search"}`,
                search: `?q=${getSearchQuery()}`,
              }}
            >
              <ion-icon name="search-outline"></ion-icon>
            </Link>
          </button>
          <input
            onFocus={searchActiveHandler}
            onChange={liveSearch}
            className="form-control"
            type="text"
            placeholder="What are you looking for?"
          />
        </div>
        <div
          className={`header-window search-results ${
            isSearching ? "open" : ""
          }`}
        >
          {isSearching &&
            filteredProducts.map((p) => {
              return <SearchItem key={p.id} product={p} />;
            })}
        </div>
        <div
          onClick={searchExitHandler}
          className={`header-overlay ${isSearching ? "open" : ""}`}
        ></div>
      </form>
    </div>
  );
}

export default Search;
