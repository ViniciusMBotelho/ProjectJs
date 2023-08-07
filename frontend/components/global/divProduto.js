import React from "react";
import styles from "./styles/divProduto.module.css"
import Image from "next/image";

function DivProduto(props) {
  const produto = props.produto;
  return (
    <div className={styles.main}>
      <Image src={produto.imagem} width={50} height={50} />
      <p>{produto.nome}</p>
      <p>{produto.descricao}</p>
      <p>{produto.preco}</p>
    </div>
  );
}

export default DivProduto;
