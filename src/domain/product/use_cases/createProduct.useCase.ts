import { ProductDTO } from "../product.dto";
import { ProductRepository } from "../product.repository";

export class CreateProductUseCase {
    constructor(private productRepository: ProductRepository) {}

    execute = async(productData: ProductDTO): Promise<ProductDTO> => {
        const product = await this.productRepository.createProduct(productData);
        return product;
    }
}