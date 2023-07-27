import express from "express"
import { produtosRouter } from "./routes/produtos/listProdutos.js"
import { login } from "./routes/users/login.js"

export const app = express()
app.use(express.json())

app.use("/produtos", produtosRouter)

app.use("/users", login)

app.listen(3000,()=>console.log("Servidor rodando na porta 3000"))