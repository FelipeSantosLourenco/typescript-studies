import type { FastifyRequest, FastifyReply } from "fastify";
import { ListProductsService } from "../services/ListProductsService.js";  

class ListProductsController{

    async handle(requst: FastifyRequest, reply: FastifyReply){
        const listProductsService = new ListProductsService();

        const products = await listProductsService.execute()

        reply.send(products);
    }
}

export { ListProductsController }
