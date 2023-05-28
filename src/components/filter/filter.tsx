/* eslint-disable prefer-const */
import FilterOptions from "../../../interfaces/filter";
import { useEffect } from "react";

interface FilterProps {
  filter: FilterOptions;
  setFilter: React.Dispatch<React.SetStateAction<FilterOptions>>;
}

export default function Filter(props: { filterOptions: FilterProps }) {
  return (
    <div className="filter">
      <h1>Filter</h1>
      <div className="filter">
        <div
          className="filter__reviews"
          onClick={(e) => {
            let element = e.target as HTMLInputElement;
            props.filterOptions.setFilter({
              ...props.filterOptions.filter,
              reviews: parseInt(element.getAttribute("id").charAt(0)),
            });
          }}>
          <p>Customer Reviews</p>
          <ul>
            <li>
              <button type="button" id="4-stars">
                4+
              </button>
            </li>
            <li>
              <button type="button" id="3-stars">
                3 and up
              </button>
            </li>
            <li>
              <button type="button" id="2-stars">
                2 and up
              </button>
            </li>
            <li>
              <button type="button" id="1-stars">
                1 and up
              </button>
            </li>
          </ul>
        </div>
        <div
          className="filter__price"
          onClick={(e) => {
            let element = e.target as HTMLInputElement;
            console.log(element.getAttribute("id"));
          }}>
          <p>Price</p>
          <ul>
            <li>
              <button type="button" id="0-25">
                Under $25
              </button>
            </li>
            <li>
              <button type="button" id="25-50">
                $25 - $50
              </button>
            </li>
            <li>
              <button type="button" id="50-100">
                $50 - $100
              </button>
            </li>
            <li>
              <button type="button" id="100-inf">
                $100+
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
