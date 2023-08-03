export class UpdateProductDto {
    id: string;
    name?: string;
    fixedprice?: boolean;
    price?: number;
    description?: string;
    image?: string;
    stock?: number;
}