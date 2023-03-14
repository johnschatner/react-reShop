import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// Fix bug in react router that makes scroll position unreliable
import ScrollToTop from "../ScrollToTop/ScrollToTop";

// Pages
import HomePage from "../../Pages/HomePage/HomePage";
import SearchPage from "../../Pages/SearchPage/SearchPage";
import ProductPage from "../../Pages/ProductPage/ProductPage";
import CategoryPage from "../../Pages/CategoryPage/CategoryPage";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/:testValue" element={<SearchPage />} />
        <Route path="/product/:product" element={<ProductPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
