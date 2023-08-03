import React from "react";
import styles from "../styles/categoria.module.css";
import { FaBars } from "react-icons/fa";


function Categoria() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <FaBars className={styles.icon}/>
        <span className={styles.texto}>Categoria</span>
      </div>
    </div>
  );
}

export default Categoria;
