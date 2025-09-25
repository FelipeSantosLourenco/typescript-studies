import prismaClient from "../prisma/index.js"

interface DeleteProductProps{
    id: string
}

class DeleteProductService{
    async execute({ id }: DeleteProductProps){

        if(!id){
            throw new Error("O ID deve ser informado")
        }

        const findProduct = await prismaClient.product.findFirst({
            where: {
                id: id
            }
        })

        if(!findProduct){
            throw new Error("Product não existe")
        }

        await prismaClient.product.delete({
            where: {
                id: findProduct.id
            }
        })

        return { message: "Product deletado com sucesso" }
    }
}

export { DeleteProductService }