import { prisma } from "../../server.js";

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
