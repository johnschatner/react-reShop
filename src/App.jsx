import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Context
import { ShopContextProvider } from "./context/ReShopContext";

// Components
import Header from "./Components/Header/Header";
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";

// Pages
import HomePage from "./Pages/HomePage/HomePage";
import SearchPage from "./Pages/SearchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Header />
          <AnimatedRoutes />
          {/* <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:testValue" element={<SearchPage />} />
          </Routes> */}
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
