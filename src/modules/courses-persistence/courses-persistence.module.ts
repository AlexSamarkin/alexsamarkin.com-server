import {Global, Module} from "@nestjs/common";
import {GraphqlRequestModule} from "../graphql-request/graphql-request.module";
import {CoursesPersistenceAdapterService} from "./courses-persistence-adapter.service";
import {CoursesResolver} from "../../graphql/resolvers/courses.resolver";
import {LoadCoursesService, LoadCoursesServiceSymbol} from "../../domain/services/load-courses.service";

@Global()
@Module({
    imports: [GraphqlRequestModule],
    providers: [
        CoursesPersistenceAdapterService,
        CoursesResolver,
        {
            provide: LoadCoursesServiceSymbol,
            useFactory: (
                coursesPersistenceAdapterService: CoursesPersistenceAdapterService
            ) => {
               return new LoadCoursesService(coursesPersistenceAdapterService);
            },
            inject: [CoursesPersistenceAdapterService]
        }
    ],
    exports: [LoadCoursesServiceSymbol]
})
export class CoursesPersistenceModule {}