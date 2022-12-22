import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ProposalService } from './proposal.service';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { Tags } from '@prisma/client';
import { GetByTagDto } from './dto/get-by-tag.dto';

@Controller('proposal')
export class ProposalController {
    constructor(private readonly proposalService: ProposalService) {}
    
    @Post()
    async createProposal(@Body() data: CreateProposalDto) {
        return this.proposalService.createProposal(data);
    }

    @Get('id/:id')
    async getProposal(@Param('id') id : string ) {
        return this.proposalService.getProposal(parseInt(id));
    }

    @Get('all')
    async getAllProposals() {
        return this.proposalService.getAllProposals();
    }

    @Get('search/:search')
    async fullTextSearch(@Param('search') search : string ) {
        return this.proposalService.fullTextSearch(search);
    }

    @Get('tags/:tag')
    async getByTags(@Param('tag') tag: string) {
        return this.proposalService.getProposalsByTag(tag);
    }

}