import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { ContentAssetNewsService } from "./content-asset-blog.service";
import { ContentAssetNewsController } from "./content-asset-blog.controller";

@Module({
  controllers: [ContentAssetNewsController],
  providers: [ContentAssetNewsService, PrismaService, JwtService],
})
export class ContentAssetNewsModule {}
