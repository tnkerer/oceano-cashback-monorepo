import { Tags, Options } from '@prisma/client';

export class ProposalDto {
    id: string;
    title: string;
    proposal: number;
    tags: Tags[];
    description: string;
    contract: string;
    creator: string;
    created: string;
    opens: string;
    closes: string;
    toll: number;
    urls: string[];
    files: string[];
    options: Options[];
    burnPercentage: number;
    burnAddress: string;
    communityPercentage: number;
    communityAddress: string;
    uniqueHash: string;
}