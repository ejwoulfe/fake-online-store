import { Link } from "react-router-dom";
import "./banner.scss";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner__text">
        <div>
          <h2>Modern.</h2>
          <h2>Stylish.</h2>
          <h2>Affordable.</h2>
        </div>
        <Link to="shop/all">Shop Now</Link>
      </div>
    </div>
  );
}
