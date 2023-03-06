import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

// Context
import { ShopContextProvider } from "./context/ReShopContext";
import { HeaderContextProvider } from "./context/ReHeaderContext";

// Components
import Header from "./Components/Header/Header";
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <HeaderContextProvider>
            <Header />
          </HeaderContextProvider>
          <AnimatedRoutes />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
