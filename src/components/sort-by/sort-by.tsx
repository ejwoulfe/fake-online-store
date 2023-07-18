interface SortProps {
  sort: string | null;
  setSort: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function SortBy(props: { sortOptions: SortProps }) {
  return (
    <div className="sort__container">
      <select
        className="sort__drop-down"
        onChange={(e) => {
          if (e.target.selectedIndex === 0) {
            props.sortOptions.setSort(null);
          } else {
            props.sortOptions.setSort(e.target.value);
          }
          if (props.sortOptions.sort === null) {
            e.target.selectedIndex = 0;
          }
        }}>
        <option>---------</option>
        <option>Alphabetical</option>
        <option>Price</option>
        <option>Rating</option>
      </select>
    </div>
  );
}
