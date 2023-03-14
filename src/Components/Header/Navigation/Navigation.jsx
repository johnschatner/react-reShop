import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/category/desk-pads" className="icon-btn nav-link">
          <span>Desk Pads</span>
        </Link>
        <Link to="/category/mouse-pads" className="icon-btn nav-link">
          <span>Mouse Pads</span>
        </Link>
        <Link to="/category/pens" className="icon-btn nav-link">
          <span>Pens</span>
        </Link>
        <Link to="/category/notepads" className="icon-btn nav-link">
          <span>Notepads</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
