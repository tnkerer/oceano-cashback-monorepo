import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProposalController } from './proposal.controller';
import { ProposalService } from './proposal.service';

@Module({
  imports: [PrismaModule],
  providers: [ProposalService],
  exports: [ProposalService],
  controllers: [ProposalController],
})
export class ProposalModule {}
