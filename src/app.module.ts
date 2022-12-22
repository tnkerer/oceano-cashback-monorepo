import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProposalModule } from './proposal/proposal.module';

@Module({
  imports: [PrismaModule, ProposalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
