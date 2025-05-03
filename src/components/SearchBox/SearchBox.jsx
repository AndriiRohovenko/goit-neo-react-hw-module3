import { useId } from 'react';
import styles from './SearchBox.module.css';

function SearchBox({ onSearchChange }) {
  const searchFieldID = useId();

  const handleSearch = ev => {
    onSearchChange(ev.target.value.toLowerCase());
  };
  return (
    <>
      <div className={styles.searchBoxWrapper}>
        <label htmlFor={searchFieldID}>Find contacts by name</label>
        <input
          type="text"
          name="searchInput"
          id={searchFieldID}
          onChange={handleSearch}
        />
      </div>
    </>
  );
}

export default SearchBox;
