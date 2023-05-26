import ShopItem from "../../interfaces/shop-item";

export default function sortBy(list: Array<ShopItem>, sortNumber: number | null) {
  let sortedList: Array<ShopItem> = [];

  // 0: Non Sorted List
  // 1: Shop Item Names A-Z
  // 2: Shop Item Names Z-A
  // 3: Price Ascending
  // 4: Price Descending
  // 5: Rating Ascending
  // 6: Rating Descending
  switch (sortNumber) {
    default:
      sortedList = [...list];
      break;
    case 1:
      sortedList = [...list].sort((a, b) => (a.title > b.title ? 1 : -1));
      break;
    case 2:
      sortedList = [...list].sort((a, b) => (a.title > b.title ? -1 : 1));
      break;
    case 3:
      sortedList = [...list].sort((a, b) => (a.price > b.price ? 1 : -1));
      break;
    case 4:
      sortedList = [...list].sort((a, b) => (a.price > b.price ? -1 : 1));
      break;
    case 5:
      sortedList = [...list].sort((a, b) => (a.rating.rate > b.rating.rate ? 1 : -1));
      break;
    case 6:
      sortedList = [...list].sort((a, b) => (a.rating.rate > b.rating.rate ? -1 : 1));
      break;
  }

  return sortedList;
}
