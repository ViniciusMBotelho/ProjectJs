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

export async function deleteProdutos(request, response) {
  //exportação da função de deletar produtos para o produtosRouter.js
  const idDelete = parseInt(request.params.id);
  console.log(request.params);
  try {
    //função que recebe um id como parametro do url e seleciona o produto com este id, caso nao encontre mostra mensagem de erro
    await prisma.produtos.delete({
      where: {
        id: idDelete,
      },
    });
    response.status(203).send({ msg: `Deletado ${idDelete}` });
  } catch (error) {
    // console.log(error);
    response.status(400).send(error);
  }
}
