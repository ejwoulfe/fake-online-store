import { useParams } from "react-router-dom";
import "./shop.scss";
import { useEffect, useState } from "react";
import Filter from "../../components/filter/filter";
import Merchandise from "../../components/merchandise/merchandise";
import capitalize from "../../helpers/capitalize";
import FilterOptions from "../../../interfaces/filter";
import sortBy from "../../helpers/sortBy";
import ShopItem from "../../../interfaces/shop-item";

export default function Shop() {
  const { categoryName } = useParams();
  const [filter, setFilter] = useState<FilterOptions>({ reviews: null, priceRange: null });
  const [sortOption, setSortOption] = useState(null);
  const [shopList, setShopList] = useState<Array<ShopItem> | null>(null);
  const [filteredList, setFilteredList] = useState<Array<ShopItem> | null>(null);

  useEffect(() => {
    if (shopList !== null) {
      let tempList: Array<ShopItem> = [...shopList];
      if (filter.priceRange !== null) {
        tempList = tempList?.filter(
          (shopItem) => shopItem.price >= filter.priceRange.min && shopItem.price <= filter.priceRange.max
        );
      }

      if (filter.reviews !== null) {
        tempList = tempList?.filter((shopItem) => shopItem.rating.rate >= filter.reviews);
      }
      setFilteredList(tempList);
    }
  }, [filter, shopList]);

  useEffect(() => {
    setFilteredList(null);

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
        <Filter filterOptions={{ filter, setFilter }} />
      </aside>
      {filteredList !== null ? <Merchandise list={filteredList} /> : <h1>Loading</h1>}
    </section>
  );
}
