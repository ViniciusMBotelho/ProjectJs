import { Router } from "express"

export const login = Router()

login.post("/login",(request, response)=>{
    const dados = request.body
    console.log(dados)
    response.status(200).send("login concluido")
})