import type { FastifyRequest, FastifyReply } from "fastify";
import { DeleteProductService } from "../services/DeleteProductService.js";

class DeleteProductController{
    
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as { id: string }
        const deleteProductService = new DeleteProductService()

        const product = await deleteProductService.execute({ id })

        reply.send(product)
    }
}

export { DeleteProductController }
