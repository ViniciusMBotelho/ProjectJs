import React from "react";
import styles from "./navbar.module.css";
import SearchInput from "../inputs/searchInput";
import { AiOutlineHeart } from "react-icons/ai";
import { CartButton, FavButton } from "./navbutton";

//importar styles para que cada classe seja unica importando e exportando o objeto
function Navbar() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.coluna}></div>
        <div className={styles.coluna}>
          <SearchInput />
        </div>
        <div className={styles.coluna}>
          <FavButton />
          <CartButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
