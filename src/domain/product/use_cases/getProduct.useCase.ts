import { ProductDTO } from "../product.dto";
import { ProductRepository } from "../product.repository";

export class GetProductUseCase {
    constructor(private productRepository: ProductRepository) {}

    execute = async(id: string): Promise<ProductDTO> => {
        const product = await this.productRepository.getProduct(id);
        return product;
    }
}