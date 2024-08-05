import { AccountBasicForResponse } from "src/auth/dto/AccountBasicForResponse";

export class NewsForResponse {
    id: string;
    account?: Array<AccountBasicForResponse>;
    title: string;
    body: string;
    description: string;
    thumbnailNews: string;
    views: number;
    typenews: Array<{
        id: string;
        nameTypeNews: string;
        description: string;
    }>;
    created_at: Date;
    updated_at?: Date;
}