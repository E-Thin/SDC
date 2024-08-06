export class NewsForCreate {
    title: string;
    body: string;
    description: string;
    thumbnailNews: string;
}

export class ImageUpload {
    accountId: string;
    path: string;
    typeImageId?: string;
}