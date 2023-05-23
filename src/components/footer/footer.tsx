import "./footer.scss";
import shoppingIcon from "../../assets/shopping-icon.png";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import linkedIn from "../../assets/linkedin.svg";
import googlePlus from "../../assets/google-plus.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer__logo">
        <img src={shoppingIcon} alt="shopping bag logo" />
        <p>Fake Online Store</p>
      </div>
      <div className="footer__links">
        <ul>
          <li>Electronics</li>
          <li>Men's Clothing</li>
          <li>Women's Clothing</li>
          <li>Jewelry</li>
        </ul>
      </div>
      <div
        className="footer__social"
        onClick={() => {
          alert("Unfortunately the social media links are fake :(");
        }}>
        <span>
          <img src={facebook} alt="fake facebook link" />
        </span>
        <span>
          <img src={twitter} alt="fake twitter link" />
        </span>
        <span>
          <img src={linkedIn} alt="fake linkedIn link" />
        </span>
        <span>
          <img src={googlePlus} alt="fake google plus link" />
        </span>
      </div>
    </footer>
  );
}
