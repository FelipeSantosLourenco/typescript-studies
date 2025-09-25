import type { FastifyRequest, FastifyReply } from "fastify";
import { CreateProductService } from "../services/CreateProductService.js"; 

class CreateProductController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { name, quantity } = request.body as { name: string, quantity: number };
        
        const productService = new CreateProductService()

        const product = await productService.execute({ name, quantity });

        reply.send(product)
    }
}

export { CreateProductController }
