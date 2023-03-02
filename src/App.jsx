import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

// Context
import { ShopContextProvider } from "./context/ReShopContext";

// Components
import Header from "./Components/Header/Header";
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Header />
          <AnimatedRoutes />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
