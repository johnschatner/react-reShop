import { createContext, useState } from "react";

export const HeaderContext = createContext(null);

export const HeaderContextProvider = (props) => {
  const [headerOpen, setHeaderOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [viewingCart, setViewingCart] = useState(false);
  // SearchPage router param
  const [backUrl, setBackUrl] = useState();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    if (e.type === "focus") {
      console.log("FOCUS");
      setViewingCart(false);
      setHeaderOpen(true);
      setIsSearching(true);
    }
  };

  const handleCart = (e) => {
    if (e.type === "click") {
      if (!headerOpen) {
        console.log("A");
        setIsSearching(false);
        setHeaderOpen(true);
        setViewingCart(true);
      } else if (isSearching) {
        setIsSearching(false);
        setViewingCart(true);
      } else {
        console.log("F");
        setHeaderOpen(false);
        setViewingCart(false);
      }
    }
  };

  // Closes the header when leaving header area
  const closeHeader = () => {
    setViewingCart(false);
    setIsSearching(false);
    setHeaderOpen(false);
  };

  const contextValue = {
    headerOpen,
    setHeaderOpen,
    isSearching,
    setIsSearching,
    viewingCart,
    setViewingCart,
    handleSearch,
    handleCart,
    closeHeader,
    backUrl,
    setBackUrl,
    filteredProducts,
    setFilteredProducts,
  };

  return (
    <HeaderContext.Provider value={contextValue}>
      {props.children}
    </HeaderContext.Provider>
  );
};
