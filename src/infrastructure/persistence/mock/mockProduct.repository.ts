import { ProductDTO } from "../../../domain/product/product.dto";
import { ProductRepository } from "../../../domain/product/product.repository";

const products: ProductDTO[] = []

export class MockProductRepository implements ProductRepository {
    
    createProduct(productData: ProductDTO): Promise<ProductDTO> {
        const product = {
            ...productData
        }

        products.push(product)

        return Promise.resolve(product)
    }
    getProduct(id: string): Promise<ProductDTO> {
        const product = products.find(product => product.id === id)

        if (!product) {
            throw new Error('Product not found')
        }

        return Promise.resolve(product)
    }
    getProductsByUser(userId: string): Promise<ProductDTO[]> {
        const productsByUser = products.filter(product => product.userId === userId)

        return Promise.resolve(productsByUser)
    }

}