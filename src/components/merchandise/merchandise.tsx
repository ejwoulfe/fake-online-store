import ShopItem from "../../../interfaces/shop-item";
import { useEffect } from "react";

interface MerchandiseProps {
  list: Array<ShopItem>;
}
export default function Merchandise(props: MerchandiseProps) {
  return (
    <div className="merchandise">
      <h1>Merchandise</h1>
      {props.list.map((item, index) => {
        return <p>{item.title}</p>;
      })}
    </div>
  );
}
