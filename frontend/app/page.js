"use client"; //ativar renderização pelo client
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import { GetProdutos } from "@/functions/produtos";
import { ProdutosContainer } from "@/components/mainProdutos/produtosContainer";

export default function Home() {
  //pagina inicial do site
  const [produtos, setProdutos] = useState([]); //controlar comportamento do estado produtos, setProdutos serve para alterar o conteudo do estado
  const [numero, setNumero] = useState(0); //controlar comportamento do estado numero, seNumero serve para alterar o conteudo do estado

  useEffect(() => {
    // controlar o que acontece ao carregar a pagina
    const getProduto = async () => setProdutos(await GetProdutos());
    // setProdutos(getProduto);
    getProduto();
    // getProduto(); //chamada da função
  }, []);

  return (
    //corpo do site
    <main className={styles.main}>
      <Navbar />
      <ProdutosContainer produtos={produtos} />
    </main>
  );
}
