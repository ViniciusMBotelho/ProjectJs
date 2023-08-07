import { Router } from "express"; //função de roteamento (criar rotas)
import { listProdutos } from "./listProdutos.js"; //importação de função de criar e listar produtos
import { createProdutos } from "./createProdutos.js";
import { deleteProdutos } from "./deleteProdutos.js";

export const produtosRouter = Router(); //exportar função para o server.js

produtosRouter.get("/listar", listProdutos); //declação de rota para listar produtos que esta contida em listProdutos

produtosRouter.post("/create", createProdutos); //declação de rota para criar produtos que esta contida em listProdutos

produtosRouter.delete("/delete/:id", deleteProdutos); //declação de rota para deletar produtos que esta contida em listProdutos
//o parametro esta sendo passado pela url
