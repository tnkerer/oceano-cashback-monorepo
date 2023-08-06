import { Module } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CheckoutController } from './checkout.controller';

@Module({
  imports: [PrismaModule],
  providers: [CheckoutService],
  exports: [CheckoutService],
  controllers: [CheckoutController],
})
export class CheckoutModule {}
