import fastify, { type FastifyReply, type FastifyRequest } from "fastify"
import { createTaskBodySchema } from "./schemas/index.js"
import { db } from "./db.js"

const app = fastify()

const PORT = 5000

app.get("/api", (req: FastifyRequest, res: FastifyReply) => {

    return res.status(200).send({
        message: `API de Tarefas Rodando na Porta ${PORT}...`
    })

})

app.post("/api/tarefas", (req: FastifyRequest, res: FastifyReply) => {

    const data = createTaskBodySchema.parse(req.body)

    const { titulo, descricao, prazo } = data

    
})

app.listen({
    port: PORT
}, () => {
    console.log(`Servidor Rodando em: http://localhost:${PORT}/api/tarefas`)
})

