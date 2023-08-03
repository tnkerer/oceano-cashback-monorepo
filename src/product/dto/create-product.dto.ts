export class CreateProductDto {
    name: string;
    fixedprice: boolean;
    price?: number;
    description: string;
    image: string;
    stock: number;
}