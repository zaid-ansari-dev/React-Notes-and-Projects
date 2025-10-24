import './Header.css';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo" src="src/assets/images/logo-white.png" />
            <img className="mobile-logo" src="src/assets/images/mobile-logo-white.png" />
          </NavLink>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src="src/assets/images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src="src/assets/images/icons/cart-icon.png" />
            <div className="cart-quantity">3</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
