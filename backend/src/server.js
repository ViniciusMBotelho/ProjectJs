import express from "express" //biblioteca para criação de servidor
import { login } from "./routes/users/login.js" //rota relacionada ao login
import { produtosRouter } from "./routes/produtos/produtosRouter.js" //importando rotas relacionados aos produtos

export const app = express() //define e exporta o objeto principal do servidor para os seus relacionados
app.use(express.json()) //permite utilizar json nas requisições

app.use("/produtos", produtosRouter) //define a rota produtos

app.use("/users", login) //define a rota users

app.listen(3000,()=>console.log("Servidor rodando na porta 3000")) //inicia e define a porta do servidor