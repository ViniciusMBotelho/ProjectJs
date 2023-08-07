import DivProduto from "../global/divProduto";
import styles from "./styles/produtosContainer.module.css";

export function ProdutosContainer(props) {
  const produtos = props.produtos.map((produto) => (
    <DivProduto key={produto.id} produto={produto} />
  ));
  return (
    <div className={styles.ProdutosContainer}>
      {produtos}
    </div>
  );
}
