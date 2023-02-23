import { useState } from "react";
import "./Search.css";
import Product from "../Product/Product";

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
    // setIsSearching(false);
  };

  const liveSearch = (e) => {
    // Store search string
    const searchString = e.target.value.toLowerCase();

    // Show nothing if search str is empty
    if (searchString.length === 0) {
      setFilteredProducts(() => []);
    } else {
      // Filter the products based on search string
      let results = products.filter((product) =>
        product.name.toLowerCase().includes(searchString)
      );
      // Limit arr size
      results = [...results.slice(0, 3)];
      // Store results in state
      setFilteredProducts(() => results);
    }
  };

  const addedToCartHandler = (added) => {
    props.onAddedToCart(added);
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <input
          onFocus={searchActiveHandler}
          onBlur={searchExitHandler}
          onChange={liveSearch}
          className="form-control"
          type="text"
          placeholder="What are you looking for?"
        />
        <button>Search</button>
        <div className="search-results">
          {isSearching &&
            filteredProducts.map((p) => {
              return (
                <Product
                  key={p.id}
                  product={p}
                  onAddedToCart={addedToCartHandler}
                />
              );
            })}
        </div>
      </form>
    </div>
  );
}

export default Search;
