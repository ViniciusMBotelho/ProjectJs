-- CreateTable
CREATE TABLE "Produtos" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "categoria" VARCHAR(255) NOT NULL,
    "preco" DECIMAL(10,2) NOT NULL,
    "estoque" INTEGER NOT NULL,
    "imagem" VARCHAR(255) NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "cep" VARCHAR(8) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);
