import { Controller, UseGuards, Request, Post, Body } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { OrderDto } from './dto/order.dto';

@Controller('checkout')
export class CheckoutController {
    constructor ( private readonly checkoutService: CheckoutService) {}

    @UseGuards(JwtAuthGuard)
    @Post('/buy')
    createOrder(@Request() req, @Body() data: OrderDto) {
        return this.checkoutService.createOrder(req.user.id, data)
    }
}
