import { ProductDTO } from "./product.dto";

export interface ProductRepository {
    createProduct(productDTO: ProductDTO): Promise<ProductDTO>
    getProduct(id: string): Promise<ProductDTO>
    getProductsByUser(userId: string): Promise<ProductDTO[]>
}