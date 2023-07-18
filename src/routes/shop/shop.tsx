import { useParams } from "react-router-dom";
import "./shop.scss";
import { useEffect, useState } from "react";
import Filter from "../../components/filter/filter";
import Merchandise from "../../components/merchandise/merchandise";
import capitalize from "../../helpers/capitalize";
import FilterOptions from "../../../interfaces/filter";
import sortBy from "../../helpers/sortBy";
import ShopItem from "../../../interfaces/shop-item";
import SortBy from "../../components/sort-by/sort-by";

export default function Shop() {
  const { categoryName } = useParams();
  const [filter, setFilter] = useState<FilterOptions>({ reviews: null, priceRange: null });
  const [sort, setSort] = useState<string | null>(null);
  const [shopList, setShopList] = useState<Array<ShopItem>>();
  const [filteredList, setFilteredList] = useState<Array<ShopItem> | null>(null);

  useEffect(() => {
    if (shopList !== undefined) {
      let tempList: Array<ShopItem> = [...shopList];
      let newList: Array<ShopItem> = [];
      const priceRange = filter.priceRange;
      const reviewsNum = filter.reviews;
      if (priceRange !== null) {
        tempList = tempList?.filter((shopItem) => shopItem.price >= priceRange.min && shopItem.price <= priceRange.max);
      }

      if (reviewsNum !== null) {
        tempList = tempList?.filter((shopItem) => shopItem.rating.rate >= reviewsNum);
      }

      switch (sort) {
        case "Alphabetical":
          newList = tempList.sort((a, b) => (a.title > b.title ? 1 : -1));
          break;
        case "Price":
          newList = tempList.sort((a, b) => a.price - b.price);
          break;
        case "Rating":
          newList = tempList.sort((a, b) => a.rating.rate - b.rating.rate);

          break;
        default:
          newList = tempList;
          break;
      }
      setFilteredList(newList);
    }
  }, [filter, sort]);

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

  useEffect(() => {
    setFilter({ reviews: null, priceRange: null });
    setSort(null);
  }, [shopList]);

  return (
    <section className="shop__container">
      {categoryName !== undefined ? <h1>Browse {capitalize(categoryName)}</h1> : <h1>Shop</h1>}
      <SortBy sortOptions={{ sort, setSort }} />
      <aside>
        <Filter filterOptions={{ filter, setFilter }} />
      </aside>
      {filteredList !== null ? <Merchandise list={filteredList} /> : <h1>Loading</h1>}
    </section>
  );
}
