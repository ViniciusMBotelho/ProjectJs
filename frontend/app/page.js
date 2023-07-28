"use client"; //ativar renderização pelo client
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  //pagina inicial do site
  const [produtos, setProdutos] = useState([]); //controlar comportamento do estado produtos, setProdutos serve para alterar o conteudo do estado
  const [numero, setNumero] = useState(0); //controlar comportamento do estado numero, seNumero serve para alterar o conteudo do estado

  useEffect(() => {
    // controlar o que acontece ao carregar a pagina
    const getProduto = async () =>
      //aerofunction assincrona que força o site a esperar seu conteudo ser carregado
      await axios // conteudo a ser carregado
        .get("http://localhost:3001/produtos/listar")
        .then((response) => setProdutos(response.data)) //depois de carregado mostrar apenas o conteudo data
        .catch((error) => console.log(error)); //tratamento de erro
    getProduto(); //chamada da função
  }, []);

  const atualiza = () => {
    //mostrar no site a atualização do estado numero
    setNumero(numero + 1); //incrementa o valor atual em 1 ***************
  };

  const DivProduto = () =>
    //criação da div onde o produto ira aparecer no corpo do site
    produtos.map(
      (
        produto //loop para aparecer todo o array ||||| div id={produto.id} oara que cada div tenha uma nomenclatura unica
      ) => (
        <div id={produto.id}>
          <h4>{produto.nome}</h4>
          <h5>{produto.preco}</h5>
          <h6>{produto.categoria}</h6>
        </div>
      )
    );

  return (
    //corpo do site
    <main className={styles.main}>
      <h1>Loja algumacoisa</h1>
      <DivProduto />
      <h3>{numero}</h3>
      <button onClick={atualiza}>Aumentar</button>
    </main>
  );
}
