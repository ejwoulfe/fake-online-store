import { useParams } from "react-router-dom";
import "./shop.scss";
import { useEffect, useState } from "react";
import Filter from "../../components/filter/filter";
import Merchandise from "../../components/merchandise/merchandise";
import capitalize from "../../helpers/capitalize";
import FilterObject from "../../../interfaces/filter";
import sortBy from "../../helpers/sortBy";

export default function Shop() {
  const { categoryName } = useParams();
  const [filter, setFilter] = useState<FilterObject>({ reviews: null, priceRange: null });
  const [sortOption, setSortOption] = useState(null);
  const [shopList, setShopList] = useState();
  const [filteredList, setFilteredList] = useState();

  useEffect(() => {
    if (categoryName === "all") {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          setShopList(json);
          setFilteredList(json);
        });
    } else {
      fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
        .then((res) => res.json())
        .then((json) => {
          setShopList(json);
          setFilteredList(json);
        });
    }
  }, [categoryName]);

  return (
    <section className="shop-container">
      {categoryName !== undefined ? <h1>Browse {capitalize(categoryName)}</h1> : <h1>Shop</h1>}
      <aside>
        <Filter />
      </aside>
      {filteredList !== undefined ? <Merchandise list={filteredList} /> : <h1>Loading</h1>}
    </section>
  );
}
