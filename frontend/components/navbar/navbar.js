import React from "react";
import styles from "./styles/navbar.module.css";
import SearchInput from "./components/searchInput";
import { AiOutlineHeart } from "react-icons/ai";
import { CartButton, FavButton } from "./components/navbutton";
import UserButton from "./components/userbutton";
import Categoria from "./components/categoria"

//importar styles para que cada classe seja unica importando e exportando o objeto
function Navbar() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.coluna}>
          <Categoria/>
        </div>
        <div className={styles.coluna}>
          <SearchInput />
        </div>
        <div className={styles.coluna}>
          <FavButton />
          <CartButton />
          <UserButton/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
