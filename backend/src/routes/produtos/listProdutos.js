let produtos = [] //declaração do "bando de dados"

let id = 0 //declaração de variavel de criação de chave do produto

export function listProdutos(request,response){ //exportação da função de listar produtos para o produtosRouter.js
    response.status(200).send(produtos)
}

export function createProdutos(request,response){ //exportação da função de criar produtos para o produtosRouter.js
    const novoProduto = request.body
    id++
    novoProduto.id = id; //implementação da chave no respectivo produto baseado no momento de crição do mesmo
    produtos.push(novoProduto)
    response.status(200).send({msg: `Criado ${novoProduto.nome}`})
}

export function deleteProdutos(request,response){ //exportação da função de deletar produtos para o produtosRouter.js
    const idDelete = request.body.id 
    const deleted = produtos.map((produto,index)=>{
        if(produto.id === idDelete){
            produtos.splice(index,1)
            response.status(200).send({msg: `Produto deletado com sucesso!`})
            return true
        }
    })
    !deleted ? response.status(404).send({msg: `Produto com id ${idDelete} nao encontrado!`}) : null //caso o valor de deleted = false, informar que nao foi encontrado a chave do produto no banco de dados
}