import React from "react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import styles from "../styles/navbuttons.module.css";

export function FavButton() {
  return (
    <div className={styles.main}>
      <div className={styles.iconContainer}>
        <FiHeart className={styles.icon} />
      </div>
    </div>
  );
}

export function CartButton() {
  return (
    <div className={styles.main}>
      <div className={styles.iconContainer}>
        <FiShoppingCart className={styles.icon} />
      </div>
    </div>
  );
}
