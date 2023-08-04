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

@Injectable()
export class UsersService {
  constructor(
    public readonly prismaService: PrismaService,
    @Inject(forwardRef(() => PasswordService))
    private passwordService: PasswordService,
    @Inject(forwardRef(() => WalletService))
    private walletService: WalletService,
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
      throw new NotFoundException();
    }

    return user;
  }

  async findAll() {
    return this.prismaService.user.findMany();
  }
}
