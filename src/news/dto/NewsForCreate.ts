export class NewsForCreate {
    title: string;
    body: string;
    thumbnailNews: string;
    typenewsId: string;
}

export class ImageUpload {
    accountId: string;
    path: string;
    typeImageId?: string;
}