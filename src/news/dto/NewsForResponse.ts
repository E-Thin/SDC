import { AccountBasicForResponse } from "src/auth/dto/AccountBasicForResponse";

export class NewsForResponse {
    id: string;
    account?: Array<AccountBasicForResponse>;
    title: string;
    body: string;
    views: number;
    typenewsId: string;
    created_at: Date;
    updated_at?: Date;
}