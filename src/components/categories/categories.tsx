import "./categories.scss";
import jewelry from "../../assets/jewelry.jpg";
import electronics from "../../assets/electronics.jpg";
import womenClothing from "../../assets/women-clothing.jpg";
import menClothing from "../../assets/mens-clothing.jpg";
import ShoppingCategory from "../../../interfaces/category";

export default function Categories() {
  const categoryData: Array<ShoppingCategory> = [
    {
      name: "Jewelry",
      image: jewelry,
    },
    {
      name: "Electronics",
      image: electronics,
    },
    {
      name: "Women's Clothing",
      image: womenClothing,
    },
    {
      name: "Men's Clothing",
      image: menClothing,
    },
  ];

  return (
    <div className="categories">
      {categoryData.map((category, index) => {
        return (
          <span
            className="categories__box"
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${category.image}) 50% 30% / cover no-repeat `,
            }}
            key={category.name + " shopping box"}>
            {category.name}
          </span>
        );
      })}
      {/* <span className="categories__box">Jewelry</span>
      <span className="categories__box">Electronics</span>
      <span className="categories__box">Men's Clothing</span>
      <span className="categories__box">Women's Clothing</span> */}
    </div>
  );
}
