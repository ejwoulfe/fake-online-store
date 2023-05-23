import { useParams } from "react-router-dom";
import "./shop.scss";
import { useEffect } from "react";
export default function Shop() {
  const { categoryName } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, [categoryName]);

  return (
    <div className="shop-container">
      <h1>Shop Page for {categoryName}</h1>
    </div>
  );
}
