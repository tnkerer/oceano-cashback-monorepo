import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { ProposalDto } from './dto/proposal.dto';
import { Tags } from '@prisma/client';

@Injectable()
export class ProposalService {
    constructor(
        public readonly prismaService: PrismaService
    ) { }

    async createProposal(data: CreateProposalDto) {
        const proposal = await this.prismaService.proposal.create({
            data: {
                title: data.title,
                proposal: data.proposal,
                tags: { set: data.tags },
                description: data.description,
                contract: data.contract,
                creator: data.creator,
                created: data.created,
                opens: data.opens,
                closes: data.closes,
                toll: data.toll,
                urls: { set: data.urls },
                files: { set: data.files },
                options: { set: data.options },
                burnPercentage: data.burnPercentage,
                burnAddress: data.burnAddress,
                communityPercentage: data.communityPercentage,
                communityAddress: data.communityAddress,
                uniqueHash: data.uniqueHash,
            },
        });

        return proposal;
    }

    async getProposal(id: number): Promise<ProposalDto | undefined> {
        const proposal = await this.prismaService.proposal.findUnique({
            where: { proposal : id },
        });

        if(!proposal) {
            throw new NotFoundException(`Proposal number ${id} not found!`);
        }

        return proposal;
    }

    async getAllProposals(): Promise<ProposalDto[]> {
        const proposals = await this.prismaService.proposal.findMany();
        return proposals;
    }

    async fullTextSearch(search: string): Promise<ProposalDto[]> {
        const proposals = await this.prismaService.proposal.findMany({
            where: {
                OR: [
                    { title: { contains: search } },
                    { description: { contains: search } },
                    { contract: { contains: search } },
                    { creator: { contains: search } },
                    { urls: { has: search } },
                    { files: { has: search } },
                ],
            },
        });

        if(proposals.length === 0) {
            throw new NotFoundException(`Nothing found with the provided parameters!`);
        }

        return proposals;
    }

    async getProposalsByTag(tag: string): Promise<ProposalDto[]> {

        const proposals = await this.prismaService.proposal.findMany({
            where: { tags: { has: Tags[tag] } },
        });

        if(proposals.length === 0) {
            throw new NotFoundException(`Nothing found with the provided parameters!`);
        }

        return proposals;
    }
}
