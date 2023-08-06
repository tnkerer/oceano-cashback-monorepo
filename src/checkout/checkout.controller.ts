import { Controller, UseGuards, Request, Post, Body, Get } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { OrderDto } from './dto/order.dto';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { RolesDecorator } from 'src/decorators/role.decorator';
import { Roles } from '@prisma/client';

@Controller('checkout')
export class CheckoutController {
    constructor ( private readonly checkoutService: CheckoutService) {}

    @UseGuards(JwtAuthGuard)
    @Post('/buy')
    createOrder(@Request() req, @Body() data: OrderDto) {
        return this.checkoutService.createOrder(req.user.id, data)
    }

    @UseGuards(JwtAuthGuard)
    @Get('/my-orders')
    getOrders(@Request() req) {
        return this.checkoutService.findAllOrdersByUser(req.user.id)
    }

    @UseGuards(RolesGuard)
    @RolesDecorator(Roles.ADMIN)
    @Get('/all-orders')
    getAllOrders() {
        return this.checkoutService.findAllOrders()
    }

}
