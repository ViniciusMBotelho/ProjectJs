import { prisma } from "../../server.js";

export async function listProdutos(request, response) {
  //exportação da função de listar produtos para o produtosRouter.js
  try {
    //função que lista toda a tabela produtos do banco de dados
    const produtos = await prisma.produtos.findMany();
    response.status(200).send(produtos);
  } catch (error) {
    response.status(400).send(error);
  }
}
