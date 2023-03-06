import { createContext, useState } from "react";

export const HeaderContext = createContext(null);

export const HeaderContextProvider = (props) => {
  const [headerOpen, setHeaderOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [viewingCart, setViewingCart] = useState(false);

  const handleSearch = (e) => {
    if (e.type === "focus") {
      setViewingCart(false);
      setHeaderOpen(true);
      setIsSearching(true);
    } else if (e.type === "blur") {
      setIsSearching(false);
      setHeaderOpen(false);
    }
  };

  const handleCart = (e) => {
    if (e.type === "click") {
      if (!headerOpen) {
        setIsSearching(false);
        setHeaderOpen(true);
        setViewingCart(true);
      } else {
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
  };

  return (
    <HeaderContext.Provider value={contextValue}>
      {props.children}
    </HeaderContext.Provider>
  );
};
