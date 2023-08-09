import "./navigation.scss";
import shoppingIcon from "../../assets/shopping-icon.png";
import cartIcon from "../../assets/cart.png";
import { Link } from "react-router-dom";

interface NavigationProps {
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navigation(props: NavigationProps) {
  const { setModalState } = props;
  return (
    <nav>
      <div>
        <Link to="/" className="nav__logo">
          <img src={shoppingIcon} alt="shopping bag logo" />

          <span>
            <p>Fake</p>
            <p>Online</p>
            <p>Store</p>
          </span>
        </Link>
      </div>
      <div className="nav__links">
        <ul>
          <li>
            <Link to={`shop/electronics`}>Electronics</Link>
          </li>
          <li>
            <Link to={`shop/men's clothing`}>Men's Clothing</Link>
          </li>
          <li>
            <Link to={`shop/women's clothing`}>Women's Clothing</Link>
          </li>
          <li>
            <Link to={`shop/jewelery`}>Jewelry</Link>
          </li>
        </ul>
      </div>
      <div className="nav__account">
        <span>
          <button
            onClick={() => {
              setModalState(true);
            }}>
            Join / Sign In
          </button>
        </span>
        <img src={cartIcon} alt="navigate to shopping cart" />
      </div>
    </nav>
  );
}
