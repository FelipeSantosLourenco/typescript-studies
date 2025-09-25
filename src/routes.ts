import type { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateProductController } from "./controllers/CreateProductController.js";
import { ListProductsController } from "./controllers/ListProductsController.js";
import { DeleteProductController } from "./controllers/DeleteProductController.js";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {

        return { ok: true }
    })

    fastify.post("/product", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateProductController().handle(request, reply)
    })

    fastify.get("/products", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListProductsController().handle(request, reply)
    })

    fastify.delete("/product", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteProductController().handle(request, reply)
    })
}
