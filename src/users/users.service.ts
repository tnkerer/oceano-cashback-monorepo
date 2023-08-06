import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
  BadRequestException,  
} from '@nestjs/common';
import { PasswordService } from 'src/auth/services/password.service';
import { WalletService } from 'src/auth/services/eth-wallet.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import Wallet from 'ethereumjs-wallet'
import { AddBalanceDto } from './dto/add-balance.dto';
import { BlockchainService } from 'src/blockchain/services/blockchain.service';

@Injectable()
export class UsersService {
  constructor(
    public readonly prismaService: PrismaService,
    @Inject(forwardRef(() => PasswordService))
    private passwordService: PasswordService,
    @Inject(forwardRef(() => WalletService))
    private walletService: WalletService,
    private readonly blockchainService: BlockchainService,
  ) {}

  async create(data: CreateUserDto) {
    const encryptedPassword = await this.passwordService.hashPassword(
      data.password,
    );

    const wallet = Wallet.generate();
    const encryptedKey = await this.walletService.hashPrivateKey(
      wallet.getPrivateKeyString(),
    );

    if (data.roles?.includes('ADMIN')) {
      throw new UnauthorizedException();
    }

    if (encryptedKey === null) {
      throw new BadRequestException('Unable to create wallet', {
        cause: new Error(),
        description: 'Unable to encrypt private key',
      });
    }

    const { password, pkey, ewallet, ...user } = await this.prismaService.user.create({
      data: {
        ...data,
        password: encryptedPassword,
        pkey: encryptedKey,
        ewallet: wallet.getAddressString(),
      },
    });
    return user;
  }

  async findByEmail(email: string): Promise<UserDto | undefined> {
    const user = await this.prismaService.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException('Target user not found in the database');
    }

    return user;
  }

  async addBalance(data: AddBalanceDto) {
    
    const { email, amount } = data;
    const user = await this.findByEmail(email);

    if (user.balance + amount < 0) {
      throw new BadRequestException('Balance cannot be negative');
    }

    const { wallet, BalanceHub, Sal } = await this.blockchainService.initializeOpetator();
    await this.blockchainService.addBalanceToHub(wallet, BalanceHub, Sal, amount, user.ewallet);
    
    const { password, pkey, ewallet, ...updatedUser} = await this.prismaService.user.update({
      where: { email },
      data: {
        balance: user.balance + amount,
      },
    });

    return updatedUser;
  }

  async findAll() {
    return this.prismaService.user.findMany();
  }

  async findById(id: string): Promise<UserDto | undefined> {
    const { pkey, password, ...user } = await this.prismaService.user.findFirst({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
