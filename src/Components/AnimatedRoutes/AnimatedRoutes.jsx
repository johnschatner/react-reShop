import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "../../Pages/HomePage/HomePage";
import SearchPage from "../../Pages/SearchPage/SearchPage";
import ProductPage from "../../Pages/ProductPage/ProductPage";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/:testValue" element={<SearchPage />} />
        <Route path="/product/:product" element={<ProductPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
