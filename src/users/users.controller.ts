import { UseGuards, Body, Controller, Get, Post, Request } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { RolesDecorator } from 'src/decorators/role.decorator';
import { Roles } from '@prisma/client';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { AddBalanceDto } from './dto/add-balance.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Public()
  @Post('/register')
  create(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }

  @UseGuards(RolesGuard)
  @RolesDecorator(Roles.ADMIN)
  @Get('/getall')
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(RolesGuard)
  @RolesDecorator(Roles.ADMIN)
  @Post('/addbalance')
  addBalance(@Body() data: AddBalanceDto) {
    return this.userService.addBalance(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/info')
  getInfo(@Request() req) {
    return this.userService.findById(req.user.id);
  }
}
