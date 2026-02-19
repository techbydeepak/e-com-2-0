import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.webp";
import cart_icon from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItems } = useContext(ShopContext);
  const token = localStorage.getItem("token");

  return (
    <nav className="navbar">
      
      <div className="nav-logo">
        <img src={logo} alt="" />
        <h2>Shopify</h2>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("home")}>
          <Link to="/">Home</Link>
          {menu === "home" && <span className="active-line"></span>}
        </li>

        <li onClick={() => setMenu("mens")}>
          <Link to="/mens">Men</Link>
          {menu === "mens" && <span className="active-line"></span>}
        </li>

        <li onClick={() => setMenu("women")}>
          <Link to="/women">Women</Link>
          {menu === "women" && <span className="active-line"></span>}
        </li>

        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids</Link>
          {menu === "kids" && <span className="active-line"></span>}
        </li>
      </ul>

      <div className="nav-login-cart">

        {token ? (
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        {token && (
          <div className="nav-cart-wrapper">
            <Link to="/cart">
              <img src={cart_icon} alt="" />
            </Link>
            <div className="nav-cart-count">
              {getTotalCartItems()}
            </div>
          </div>
        )}

      </div>

    </nav>
  );
}

export default Navbar;
