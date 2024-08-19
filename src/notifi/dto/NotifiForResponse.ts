import { AccountBasicForResponse } from "src/auth/dto/AccountBasicForResponse";

export class NotifiForResponse {
    id: string;
    title: string;
    content: string;
    account?: Array<AccountBasicForResponse>;
    department: {
        id: string;
        title: string;
    }
    created_at?: Date;
    updated_at?: Date;
}