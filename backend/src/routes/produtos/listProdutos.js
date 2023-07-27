import { Router } from "express";

export const produtosRouter = Router()

let produtos = []

let id = 0

produtosRouter.get("/", (request, response)=>{
    console.log("Acessou /produtos")
    response.status(200).send(produtos)
})

produtosRouter.post("/create", (request, response)=>{
    const novoProduto = request.body
    id++
    novoProduto.id = id;
    produtos.push(novoProduto)
    response.status(200).send(`criado ${novoProduto.nome}`)
})
