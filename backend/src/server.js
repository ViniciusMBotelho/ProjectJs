import express from "express" //biblioteca para criação de servidor
import { login } from "./routes/users/login.js" //rota relacionada ao login
import { produtosRouter } from "./routes/produtos/produtosRouter.js" //importando rotas relacionados aos produtos
import cors from "cors"

export const app = express() //define e exporta o objeto principal do servidor para os seus relacionados
app.use(express.json()) //permite utilizar json nas requisições

const corsOptions = {origin: '*'}
app.use(cors(corsOptions))

app.use("/produtos", produtosRouter) //define a rota produtos

app.use("/users", login) //define a rota users

app.listen(3001,()=>console.log("Servidor rodando na porta 3001")) //inicia e define a porta do servidor