import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { AccountForToken } from "src/auth/dto/AccountForToken";
import { PrismaService } from "src/prisma/prisma.service";
import { ContentAssetForFull } from "./dto/ContentAssetForFull";
import { ContentAssetForResponse } from "./dto/ContentAssetForResponse";

@Injectable()
export class ContentAssetNewsService {
  constructor(private prismaService: PrismaService) {}

  async uploadAsset(account: AccountForToken, asset: ContentAssetForFull) {
    try {
      const appearAsset = await this.prismaService.contentAssetNews.findFirst({
        where: {
          accountId: account.id,
        },
        select: {
          image: true,
          id: true,
        },
      });

      if (appearAsset) {
        return await this.prismaService.image.update({
          where: {
            id: asset.idAssetContent,
          },
          data: {
            contentAssetNewsId: appearAsset.id,
          },
        });
      }

      return await this.prismaService.contentAssetNews.create({
        data: {
          accountId: account.id,
          image: {
            connect: {
              id: asset.idAssetContent,
            },
          },
        },
      });
    } catch (error) {
      console.error(error);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async getAllContentAsset(account: AccountForToken): Promise<ContentAssetForResponse> {
    try {
      const result = await this.prismaService.contentAssetNews.findFirst({
        where: {
          accountId: account.id,
        },
        select: {
          image: {
            select: {
              path: true,
            },
          },
        },
      });
      return {
        assets: result.image.map(item => item.path),
      };
    } catch (error) {
      console.error(error);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async removeAssetContent(account: AccountForToken, asset: ContentAssetForFull) {
    try {
      return await this.prismaService.image.delete({
        where: {
          id: asset.idAssetContent,
          accountId: account.id,
        },
      });
    } catch (error) {
      console.error(error);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
