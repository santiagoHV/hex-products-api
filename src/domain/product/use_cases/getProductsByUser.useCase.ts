import { ProductRepository } from "../product.repository";

export class GetProductsByUserUseCase {
    constructor(private productRepository: ProductRepository) { }
    
    execute = async (userId: string) => {
        const products = await this.productRepository.getProductsByUser(userId)
        return products
    }
}