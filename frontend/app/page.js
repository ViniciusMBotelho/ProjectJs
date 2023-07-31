"use client"; //ativar renderização pelo client
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

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

  const deleteProduto = async (id) => {
    //aerofunction que chama o metodo delete e recebe o id como parametro na url
    await axios
      .delete(`http://localhost:3001/produtos/delete/${id}`)
      .then((response) => alert(`Produto de id ${id} deletado!`))
      .catch((error) => console.log(error));
  };

  const DivProduto = () =>
    //criação da div onde o produto ira aparecer no corpo do site
    //loop para aparecer todo o array ||||| div id={produto.id} oara que cada div tenha uma nomenclatura unica
    produtos.map((produto) => (
      <div id={produto.id}>
        <img src={produto.imagem} width={500} height={300} />
        <h4>{produto.nome}</h4>
        <h5>{produto.preco}</h5>
        <h6>{produto.categoria}</h6>
        <button onClick={() => deleteProduto(produto.id)}>Deletar</button>
      </div>
    )); //componente de produto

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
