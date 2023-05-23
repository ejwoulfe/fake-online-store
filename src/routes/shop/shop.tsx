import { useParams } from "react-router-dom";
import "./shop.scss";
export default function Shop() {
  const { categoryName } = useParams();
  return (
    <div className="shop-container">
      <h1>Shop Page for {categoryName}</h1>
    </div>
  );
}
