import { CreateProductUseCase } from "../../domain/product/use_cases/createProduct.useCase";
import { GetProductUseCase } from "../../domain/product/use_cases/getProduct.useCase";

export class ProductController {
    constructor(
        private createProductUseCase: CreateProductUseCase,
        private getProductUseCase: GetProductUseCase
    ) {}
}