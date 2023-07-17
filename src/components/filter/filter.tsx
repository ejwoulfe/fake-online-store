/* eslint-disable prefer-const */
import FilterOptions from "../../../interfaces/filter";

interface FilterProps {
  filter: FilterOptions;
  setFilter: React.Dispatch<React.SetStateAction<FilterOptions>>;
}

export default function Filter(props: { filterOptions: FilterProps }) {
  return (
    <div className="filter__container">
      <h1>Filter</h1>
      <div className="filter__applied">
        <p>Active Filters</p>
        <div
          onClick={(e) => {
            let element = e.target as HTMLInputElement;

            if (element.getAttribute("id") === "applied__price") {
              props.filterOptions.setFilter({
                ...props.filterOptions.filter,
                priceRange: null,
              });
            } else if (element.getAttribute("id") === "applied__reviews") {
              props.filterOptions.setFilter({
                ...props.filterOptions.filter,
                reviews: null,
              });
            }
          }}>
          {props.filterOptions.filter.priceRange !== null ? (
            <button id="applied__price">{props.filterOptions.filter.priceRange.min}</button>
          ) : null}
          {props.filterOptions.filter.reviews !== null ? (
            <button id="applied__reviews">{props.filterOptions.filter.reviews}</button>
          ) : null}
        </div>
      </div>
      <div className="filter">
        <div
          className="filter__reviews"
          onClick={(e) => {
            let element = e.target as HTMLInputElement;
            const elementID = element.getAttribute("id");
            if (elementID !== null) {
              props.filterOptions.setFilter({
                ...props.filterOptions.filter,
                reviews: parseInt(elementID.charAt(0)),
              });
            }
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
            switch (element.getAttribute("id")) {
              case "0-25":
                props.filterOptions.setFilter({
                  ...props.filterOptions.filter,
                  priceRange: { min: 0, max: 25 },
                });
                break;
              case "25-50":
                props.filterOptions.setFilter({
                  ...props.filterOptions.filter,
                  priceRange: { min: 25, max: 50 },
                });
                break;
              case "50-100":
                props.filterOptions.setFilter({
                  ...props.filterOptions.filter,
                  priceRange: { min: 50, max: 100 },
                });
                break;
              case "100-inf":
                props.filterOptions.setFilter({
                  ...props.filterOptions.filter,
                  priceRange: { min: 100, max: 999999 },
                });
                break;
              default:
                break;
            }
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
