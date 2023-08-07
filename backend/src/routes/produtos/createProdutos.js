import { prisma } from "../../server.js";

export async function createProdutos(request, response) {
  //exportação da função de criar produtos para o produtosRouter.js
  const novoProduto = request.body;
  try {
    //função que gera um novo produto no banco de dados
    await prisma.produtos.create({ data: novoProduto });
    response.status(203).send({ msg: `Criado ${novoProduto.nome}` });
  } catch (error) {
    console.log(error);
    response.status(400).send(error);
  }
}
