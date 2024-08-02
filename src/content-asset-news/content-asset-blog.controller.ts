import { Body, Controller, Delete, Get, Patch, Request, UseGuards } from "@nestjs/common";
import { Role } from "src/decorator/role.enum";
import { Roles } from "src/decorator/roles.decorator";
import { AuthenticationGuard } from "src/guard/authentication.guard";
import { AuthorizationGuard } from "src/guard/authorization.guard";
import { ContentAssetForFull } from "./dto/ContentAssetForFull";
import { ContentAssetNewsService } from "./content-asset-blog.service";

@Controller("content-asset-news")
@UseGuards(AuthenticationGuard, AuthorizationGuard)
@Roles(Role.Admin)
export class ContentAssetNewsController {
  constructor(private readonly contentAssetService: ContentAssetNewsService) {}

  @Patch("/upload-asset")
  async updateContentAsset(@Request() req, @Body() asset: ContentAssetForFull) {
    return await this.contentAssetService.uploadAsset(req?.user, asset);
  }

  @Get("/get-all-content-asset")
  async getAllContentAsset(@Request() req) {
    return await this.contentAssetService.getAllContentAsset(req?.user);
  }

  @Delete("/remove-asset")
  async removeAssetContent(@Request() req, @Body() asset: ContentAssetForFull) {
    return await this.contentAssetService.removeAssetContent(req?.user, asset);
  }
}
