import { useState } from "react";
import "./Search.css";
import Product from "../../Product/Product";

function Search(props) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // One less layer of abstraction
  const products = props.searchableProducts;

  const formHandler = (e) => {
    e.preventDefault();
  };

  const searchActiveHandler = () => {
    setIsSearching(true);
  };

  const searchExitHandler = () => {
    // Fix unwanted behaviour where you cant click on the livesearch without
    // the results disappearing
    setIsSearching(false);
  };

  const liveSearch = (e) => {
    // Store search string
    const searchString = e.target.value.toLowerCase();
    // Filter the products based on search string
    let results = products.filter((product) =>
      product.name.toLowerCase().includes(searchString)
    );
    // Limit arr size
    results = [...results.slice(0, 3)];
    // Store results in state
    setFilteredProducts(() => results);
  };

  return (
    <div>
      <form
        className="search-form"
        tabIndex={"0"}
        onBlur={searchExitHandler}
        onSubmit={formHandler}
      >
        <div className="search-bar__container">
          <button className="icon-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>
          <input
            onFocus={searchActiveHandler}
            onChange={liveSearch}
            className="form-control"
            type="text"
            placeholder="What are you looking for?"
          />
        </div>
        <div className="search-results">
          {isSearching &&
            filteredProducts.map((p) => {
              return <Product key={p.id} product={p} />;
            })}
        </div>
      </form>
    </div>
  );
}

export default Search;
