import { ProductDto } from "src/product/dto/product.dto";

export class OrderDto {
    productsIds: string[];
    productsTotals: number[];
}