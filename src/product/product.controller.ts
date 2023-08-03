import { UseGuards, Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { RolesDecorator } from 'src/decorators/role.decorator';
import { Roles } from '@prisma/client';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Public } from 'src/decorators/public.decorator';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
    constructor ( private readonly productService: ProductService ) {}

    @UseGuards(RolesGuard)
    @RolesDecorator(Roles.ADMIN)
    @Post('create')
    async createProduct ( @Body() data: CreateProductDto ) {
        return await this.productService.createProduct(data);
    }

    @UseGuards(RolesGuard)
    @RolesDecorator(Roles.ADMIN)
    @Post('update')
    async updateProduct ( @Body() data: UpdateProductDto ) {
        return await this.productService.updateProduct(data);
    }

    @Public()
    @Get('all')
    async getAllProducts () {
        return await this.productService.getAllProducts();
    }

    @Public()
    @Get('search/:query')
    async fullTextSearch ( @Param('query') query: string ) {
        return await this.productService.fullTextSearch(query);
    }
}
