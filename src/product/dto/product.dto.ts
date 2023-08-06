export class ProductDto {
    id: string;
    name: string;
    fixedprice: boolean;
    price?: number;
    description: string;
    image: string;
    stock: number;
    createdAt?: Date;
    updatedAt?: Date;
}