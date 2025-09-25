import prismaClient from "../prisma/index.js";

interface CreateProductProps{
    name: string;
    quantity: number;
}

class CreateProductService{
    async execute({ name, quantity }: CreateProductProps){

        if(!name || !quantity){
            throw new Error("Preencha todos os campos")
        }

        const product = await prismaClient.product.create({
            data:{
                name, 
                quantity
            }
        })

        return product
    }
}

export { CreateProductService }