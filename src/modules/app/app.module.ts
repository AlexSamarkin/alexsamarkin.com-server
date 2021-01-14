import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import configuration from "../../config/configuration";
import {ContactWebModule} from "../contact-web/contact-web.module";
import {ContactApiModule} from "../contact-api/contact-api.module";
import {BlogWebModule} from "../blog-web/blog-web.module";
import {BlogPersistenceModule} from "../blog-persistence/blog-persistence.module";
import {NavWebModule} from "../nav-web/nav-web.module";
import {GraphQLModule} from "@nestjs/graphql";
import { join } from 'path';
import {NavPersistenceModule} from "../nav-persistence/nav-persistence.module";
import {ContentTextPersistenceModule} from "../content-text-persistence/content-text-persistence.module";
import {JobsPersistenceModule} from "../jobs-persistence/jobs-persistence.module";
import {CoursesPersistenceModule} from "../courses-persistence/courses-persistence.module";
import {CvPersistenceModule} from "../cv-persistence/cv-persistence.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
        debug: configuration().isDev,
        playground: configuration().isDev,
        autoSchemaFile: 'schema.gql'
    }),
    ContactWebModule,
    ContactApiModule,
    BlogWebModule,
    BlogPersistenceModule,
    NavWebModule,
    NavPersistenceModule,
    ContentTextPersistenceModule,
    JobsPersistenceModule,
    CoursesPersistenceModule,
    CvPersistenceModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
