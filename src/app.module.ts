import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { TokenModule } from './token/token.module';
import { DepartmentModule } from './department/department.module';
import { NewsModule } from './news/news.module';
import { NotifiModule } from './notifi/notifi.module';
import { InformationModule } from './information/information.module';
import { TrainingFieldsModule } from './training-fields/training-fields.module';
import { AboutUsModule } from './about-us/about-us.module';
import { AdmissionsModule } from './admissions/admissions.module';
import { EventModule } from './event/event.module';
import { PartnerModule } from './partner/partner.module';
import { LinkModule } from './link/link.module';
import { SearchModule } from './search/search.module';
import { UploadModule } from './upload/upload.module';
import { TypeImageModule } from './type-image/type-image.module';
import { FileModule } from './file/file.module';
import { ImageModule } from './image/image.module';
import { PageViewModule } from './page-view/page-view.module';


@Module({
  imports: [
    AuthModule,
    PrismaModule,
    RoleModule,
    UserModule,
    TokenModule,
    DepartmentModule,
    NewsModule,
    NotifiModule,
    InformationModule,
    TrainingFieldsModule,
    AboutUsModule,
    AdmissionsModule,
    EventModule,
    PartnerModule,
    LinkModule,
    SearchModule,
    UploadModule,
    TypeImageModule,
    FileModule,
    ImageModule,
    PageViewModule
  ],  
  controllers: [],
  providers: [],
})
export class AppModule {}
