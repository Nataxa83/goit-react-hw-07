import { useDispatch, useSelector } from "react-redux";
import { onFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

export default function SearchBox() {

  const filteredContacts = useSelector((state) => state.filtersData.name);
  const dispatch = useDispatch();

  const onFilterValue = (e) => {
     const action = onFilter(e.target.value);
        dispatch(action);
    
  }
  return (
    <div className={css.input}>
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        className={css.filterInput}
        value={filteredContacts}
        onChange={onFilterValue}
      />
    </div>
  );
}
