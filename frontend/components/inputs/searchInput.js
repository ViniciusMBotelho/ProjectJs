import React from "react";
import styles from "./searchInput.module.css";
import { HiSearch } from "react-icons/hi";

function SearchInput() {
  return (
    <div className={styles.main}>
      <input className={styles.input} placeholder="Buscar produto" />
      <span>
        <button className={styles.button}>
          <HiSearch className={styles.icon} />
        </button>
      </span>
    </div>
  );
}

export default SearchInput;
