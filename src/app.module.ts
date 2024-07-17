import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { TokenModule } from './token/token.module';
import { TypeNewsModule } from './type-news/type-news.module';
import { DepartmentModule } from './department/department.module';
import { NewsModule } from './news/news.module';
import { NotifiModule } from './notifi/notifi.module';
import { InformationModule } from './information/information.module';
import { TrainingFieldsModule } from './training-fields/training-fields.module';
import { AboutUsModule } from './about-us/about-us.module';
import { AdmissionsModule } from './admissions/admissions.module';


@Module({
  imports: [
    AuthModule,
    PrismaModule,
    RoleModule,
    UserModule,
    TokenModule,
    TypeNewsModule,
    DepartmentModule,
    NewsModule,
    NotifiModule,
    InformationModule,
    TrainingFieldsModule,
    AboutUsModule,
    AdmissionsModule,
  ],  
  controllers: [],
  providers: [],
})
export class AppModule {}
