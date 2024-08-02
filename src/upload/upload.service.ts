import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';
import { UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';

@Injectable()
export class UploadService {
  constructor(private readonly config_service: ConfigService) {
    cloudinary.config({
      cloud_name: this.config_service.get('CLOUDINARY_CLOUD_NAME'),
      api_key: this.config_service.get('CLOUDINARY_API_KEY'),
      api_secret: this.config_service.get('CLOUDINARY_API_SECRET'),
    });
  }
  async uploadImageToCloudinary(file: Express.Multer.File, folder: string): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { resource_type: 'image' ,
          folder: folder,
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      ).end(file.buffer);
    });
  }
}
