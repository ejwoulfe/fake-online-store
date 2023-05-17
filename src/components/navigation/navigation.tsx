import "./navigation.scss";
import shoppingIcon from "../../assets/shopping-icon.png";
import cartIcon from "../../assets/cart.png";

export default function Navigation() {
  return (
    <nav>
      <div className="nav__logo">
        <img src={shoppingIcon} alt="shopping bag logo" />
        <span>
          <p>Fake</p>
          <p>Online</p>
          <p>Store</p>
        </span>
      </div>
      <div className="nav__links">
        <ul>
          <li>Electronics</li>
          <li>Men's Clothing</li>
          <li>Women's Clothing</li>
          <li>Jewelry</li>
        </ul>
      </div>
      <div className="nav__account">
        <span>
          <button>Join / Sign In</button>
        </span>
        <img src={cartIcon} alt="navigate to shopping cart" />
      </div>
    </nav>
  );
}
