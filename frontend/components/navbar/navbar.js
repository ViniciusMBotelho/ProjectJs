import React from "react";
import styles from "./styles/navbar.module.css";
import SearchInput from "./components/searchInput";
import { AiOutlineHeart } from "react-icons/ai";
import { CartButton, FavButton } from "./components/navbutton";
import UserButton from "./components/userbutton";
import Categoria from "./components/categoria";
import Image from "next/image";

//importar styles para que cada classe seja unica importando e exportando o objeto
function Navbar() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.coluna}>
          <Image className={styles.logo} src="/logo1.png" height={42} width={50} />
          <Categoria />
        </div>
        <div className={styles.coluna}>
          <SearchInput />
        </div>
        <div className={styles.coluna}>
          <FavButton />
          <CartButton />
          <UserButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
